"use client";

import React, { useState } from "react";
import { Link, usePathname } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import * as paths from "@/lib/paths";

const NavItem = ({
  title,
  path,
  items,
}: {
  title: string;
  path: string;
  items?: { title: string; path: string }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="relative sm:h-full group">
      <Link
        href={path}
        className={twMerge(
          "text-base sm:text-sm 1920:text-base font-light tracking-[-0.004em] transition-all duration-300 hover:opacity-60 sm:flex sm:h-full sm:items-center",
          pathname === path &&
            "relative after:absolute after:bottom-[-28px] after:start-0 after:h-0.5 after:w-[80%] after:bg-secondary after:content-['']"
        )}
      >
        {title}
      </Link>
      {items && (
        <div
          className="hidden animate-vanish group-hover:animate-appear group-hover:block absolute sm:start-[-20px] 1920:start-[-30px] shadow-lg bg-black/50 whitespace-nowrap 
        "
        >
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block px-6 py-3 text-sm text-white "
                role="menuitem"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavElements: React.FC = () => {
  const t = useTranslations("Header.navLinks");

  const navItems = [
    { title: t("home"), path: paths.HOME_ROUTE },
    { title: t("aboutUniversity"), path: paths.ABOUT_UNIVERSITY_ROUTE },
    {
      title: t("colleges"),
      path: paths.COLLEGES_ROUTE,
      items: [
        { title: "College 1", path: paths.COLLEGE_ROUTE("1") },
        { title: "College 2", path: paths.COLLEGE_ROUTE("2") },
      ],
    },
    {
      title: t("academicAffairs"),
      path: paths.ACADEMIC_AFFAIRS_ROUTE,
      items: [
        {
          title: "Scientific Promotions",
          path: paths.SCIENTIFIC_PROMOTIONS_ROUTE,
        },
        { title: "Research Plans", path: paths.RESEARCH_PLANS_ROUTE },
      ],
    },
    {
      title: t("studentAffairs"),
      path: paths.STUDENT_AFFAIRS_ROUTE,
      items: [
        {
          title: "Admission & Registration",
          path: paths.ADMISSION_REGISTRATION_ROUTE,
        },
        { title: "Academic Programs", path: paths.ACADEMIC_PROGRAMS_ROUTE },
      ],
    },
    {
      title: t("serviceCenters"),
      path: paths.SERVICE_CENTERS_ROUTE,
      items: [
        {
          title: "Continuing Education",
          path: paths.CONTINUING_EDUCATION_CENTER_ROUTE,
        },
        { title: "Consulting Office", path: paths.CONSULTING_OFFICE_ROUTE },
      ],
    },
    {
      title: t("eServices"),
      path: paths.E_SERVICES_ROUTE,
      items: [
        { title: "Student Portal", path: paths.STUDENT_PORTAL_ROUTE },
        { title: "Faculty Portal", path: paths.FACULTY_PORTAL_ROUTE },
      ],
    },
  ];

  return (
    <nav className="mt-[61px] flex flex-col items-center text-center gap-[30px] 1920:gap-[30px] sm:mt-0 sm:flex-row  sm:gap-[20px] h-fit bg-transparent border-0 sm:h-full">
      {navItems.map((item, index) => (
        <React.Fragment key={item.path}>
          <NavItem title={item.title} path={item.path} items={item.items} />
          {index !== navItems.length - 1 && (
            <div className="hidden sm:block border-e border-white/10 h-4 mx-0"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default NavElements;
