"use client";

import {
  HOME_ROUTE,
  ABOUT_UNIVERSITY_ROUTE,
  COLLEGES_ROUTE,
  ACADEMIC_AFFAIRS_ROUTE,
  STUDENT_AFFAIRS_ROUTE,
  SERVICE_CENTERS_ROUTE,
  E_SERVICES_ROUTE,
} from "@/lib/paths";
import { Link, usePathname } from "@/i18n.config";
import useCommonStore from "@/lib/zustand/common";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

const NavElements = () => {
  let pathname = usePathname();
  const t = useTranslations("Header.navLinks");
  const jobsT = useTranslations("Jobs");

  const navElements: NavElement[] = [
    { label: t("home"), path: HOME_ROUTE },
    { label: t("aboutUniversity"), path: ABOUT_UNIVERSITY_ROUTE },
    { label: t("colleges"), path: COLLEGES_ROUTE },
    { label: t("academicAffairs"), path: ACADEMIC_AFFAIRS_ROUTE },
    { label: t("studentAffairs"), path: STUDENT_AFFAIRS_ROUTE },
    { label: t("serviceCenters"), path: SERVICE_CENTERS_ROUTE },
    { label: t("eServices"), path: E_SERVICES_ROUTE },
  ];

  return (
    <ul className="mt-[61px] flex flex-col items-center  text-center text-base sm:text-sm 1920:text-base gap-[30px]  sm:mt-0 sm:flex-row sm:items-stretch sm:gap-[20px] font-light h-fit">
      {navElements.map((element, index) => (
        <React.Fragment key={index}>
          {index != 0 && (
            <div className="border-e border-white/10 sm:block hidden"></div>
          )}
          <NavElement
            {...element}
            // onClick={handleClick}
            isActive={pathname === element.path}
          />
        </React.Fragment>
      ))}
    </ul>
  );
};

const NavElement: React.FC<NavElementProps> = ({
  label,
  path,
  tag,
  // onClick,
  isActive,
  className,
}) => {
  const { toggleDrawer } = useCommonStore();
  return (
    <li
      className={twMerge(
        `tracking-[-0.004em] ${
          isActive
            ? "relative  after:absolute after:bottom-[-28px]  after:start-0 after:h-0.5  after:w-[80%] after:bg-secondary after:content-['']"
            : ""
        } sm:text-inherit`,
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="flex gap-1.5 items-center">
        <Link
          onClick={() => toggleDrawer(false)}
          className="transition-all duration-300 hover:opacity-60 sm:hidden"
          href={path}
        >
          {label}
        </Link>
        <Link
          className="hidden transition-all duration-300 hover:opacity-60 sm:block"
          href={path}
        >
          {label}
        </Link>
        {tag && (
          <div className="bg-secondary  py-[3px] px-1.5 h-fit  flex items-center rounded-full">
            <span className="text-xs leading-none font-medium h-[10px] ltr:mb-[2px]">
              {tag}
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

interface NavElement {
  label: string;
  path: string;
  tag?: string;
}

interface NavElementProps {
  label: string;
  className?: string;
  path: string;
  tag?: string;
  // onClick: () => void;
  isActive: boolean;
}

export default NavElements;
