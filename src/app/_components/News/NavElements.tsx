import React from "react";
import { Link, usePathname } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { navItems } from "@/lib/data";
import HoverMenu from "@/components/HoverMenu";
import { MenuItem } from "@/lib/types";

const NavElements: React.FC = () => {
  const t = useTranslations("Header.navLinks");
  const SharedPagesT = useTranslations("SharedPages");
  const items = navItems(t, SharedPagesT);

  return (
    <nav className="mt-[61px] flex h-fit flex-col items-center gap-[30px] border-0 bg-transparent text-center sm:mt-0 sm:h-full sm:flex-row sm:gap-0">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <NavItem title={item.label} path={item.path} items={item.items} />
          {index !== items.length - 1 && (
            <div className="mx-0 hidden h-4 border-e border-white/10 sm:block"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const NavItem: React.FC<{
  title: string;
  path?: string;
  items?: MenuItem[];
}> = ({ title, path, items }) => {
  const pathname = usePathname();

  let classes = twMerge(
    "text-base font-light tracking-[-0.004em] transition-all duration-300 hover:opacity-60 sm:flex sm:h-full sm:items-center sm:px-[20px] sm:text-sm 1920:px-[30px] 1920:text-base",
    pathname === path &&
      "relative after:absolute after:bottom-0 after:start-0 after:h-0.5 after:bg-secondary after:content-[''] sm:after:ms-[20px] sm:after:w-[calc((100%-40px)*0.8)] 1920:after:ms-[30px] 1920:after:w-[calc((100%-60px)*0.8)]",
  );

  return (
    <div className="group relative sm:h-full">
      {path ? (
        <Link href={path} className={classes}>
          {title}
        </Link>
      ) : (
        <span className={classes}>{title}</span>
      )}
      {items && <HoverMenu items={items} />}
    </div>
  );
};

export default NavElements;
