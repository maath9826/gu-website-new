import React from "react";
import { Link } from "@/i18n.config";
import { twMerge } from "tailwind-merge";

interface MenuItem {
  title: string;
  path: string;
  items?: MenuItem[];
}

interface HoverMenuProps {
  items: MenuItem[];
  className?: string;
  isSubmenu?: boolean;
}

const HoverMenu: React.FC<HoverMenuProps> = ({
  items,
  className,
  isSubmenu = false,
}) => {
  return (
    <div
      className={twMerge(
        "absolute hidden animate-vanish whitespace-nowrap bg-black/50 shadow-lg",
        isSubmenu
          ? "start-full top-0 group-hover/sub:block group-hover/sub:animate-appear"
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
          <HoverMenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const HoverMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group/sub relative">
      <Link
        href={item.path}
        className="block px-6 py-3 text-sm text-white hover:bg-black/30"
        role="menuitem"
      >
        {item.title}
      </Link>
      {item.items && <HoverMenu items={item.items} isSubmenu={true} />}
    </div>
  );
};

export default HoverMenu;
