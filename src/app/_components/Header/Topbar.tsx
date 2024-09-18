"use client";

import React from "react";
import LocaleSwitcher from "../../../components/LocaleSwitcher";
import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Section from "../../../components/Section";

import HoverMenu from "@/components/HoverMenu";
import { topbarNavItems } from "@/lib/data";
import { MenuItem } from "@/lib/types";

const Topbar: React.FC = () => {
  return (
    <Section
      className="relative flex h-[50px] justify-center"
      wrapperClass="bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] hidden sm:flex relative z-10"
    >
      <div className="flex h-full w-full items-center justify-between sm:px-[60px] 1920:px-[136px]">
        <TopbarContact />
        <TopbarNavigation />
      </div>
    </Section>
  );
};

const TopbarNavigation: React.FC = () => {
  const t = useTranslations();
  const navItems = topbarNavItems(t);

  return (
    <ul className="flex items-center">
      {navItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {index !== 0 && (
            <div className="mx-2.5 hidden h-4 border-e border-white/10 sm:block"></div>
          )}
          <NavItem item={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

const NavItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <li className="group relative">
      <Link
        href={item.path}
        className="text-sm font-light text-white transition-opacity duration-300 hover:opacity-60 1920:text-base"
      >
        {item.label}
      </Link>
      {item.items && (
        <HoverMenu items={item.items} submenuClassName="end-full start-auto" />
      )}
    </li>
  );
};

const TopbarContact: React.FC = () => {
  const locale = useLocale() as Locale;

  return (
    <div className="flex items-center gap-[30px] text-xs font-light">
      <ContactElement href="mailto:info@gau.edu.iq" label="info@gau.edu.iq" />
      <div className="flex gap-1 text-white">
        <ContactElement href="tel:07832000090" label="07832000090" />
        -
        <ContactElement href="tel:07732000090" label="07732000090" />
      </div>

      <ContactElement href="#" label="موقعنا على خرائط كوكل" />
      <LocaleSwitcher locale={locale} />
    </div>
  );
};

const ContactElement: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  return (
    <a href={href} className="text-white hover:text-secondary">
      {label}
    </a>
  );
};

export default Topbar;
