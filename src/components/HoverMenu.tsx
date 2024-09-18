"use client";

import React from "react";
import { Link } from "@/i18n.config";
import { twMerge } from "tailwind-merge";
import { MenuItem } from "@/lib/types";

interface HoverMenuProps {
  items: MenuItem[];
  className?: string;
  submenuClassName?: string;
  isSubmenu?: boolean;
}

const HoverMenu: React.FC<HoverMenuProps> = ({
  items,
  className,
  submenuClassName = "",
  isSubmenu = false,
}) => {
  if (isSubmenu) console.log(submenuClassName);
  return (
    <div
      className={twMerge(
        "absolute hidden animate-vanish whitespace-nowrap bg-black/90 shadow-lg",
        isSubmenu
          ? twMerge(
              "start-full top-0 group-hover/sub:block group-hover/sub:animate-appear",
              submenuClassName,
            )
          : "top-full group-hover:block group-hover:animate-appear",
        className,
      )}
    >
      <div
        className="py-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {items.map((item, index) => (
          <HoverMenuItem
            key={index}
            item={item}
            submenuClassName={submenuClassName}
          />
        ))}
      </div>
    </div>
  );
};

const HoverMenuItem: React.FC<{
  item: MenuItem;
  submenuClassName?: string;
}> = ({ item, submenuClassName }) => {
  return (
    <div className="group/sub relative border-b border-transparent text-start hover:border-secondary">
      <Link
        href={item.path}
        className="block px-6 py-3 text-sm text-white hover:bg-white/10"
        role="menuitem"
      >
        {item.label}
      </Link>
      {item.items && (
        <HoverMenu
          items={item.items}
          isSubmenu={true}
          submenuClassName={submenuClassName}
        />
      )}
    </div>
  );
};

export default HoverMenu;
