"use client";

import React from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Section from "@/components/Section";
import HoverMenu from "@/components/HoverMenu";
import { topbarNavItems } from "@/lib/data";
import { MenuItem, RawContact } from "@/lib/types";

interface TopbarClientProps {
  contactInfo: RawContact | undefined;
}

const TopbarClient: React.FC<TopbarClientProps> = ({ contactInfo }) => {
  return (
    <Section
      className="relative flex h-[50px] justify-center"
      wrapperClass="bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] hidden sm:flex relative z-10"
    >
      <div className="flex h-full w-full items-center justify-between sm:px-[60px] 1920:px-[136px]">
        <TopbarContact contactInfo={contactInfo} />
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
      {item.path ? (
        <Link
          href={item.path}
          className="text-sm font-light text-white transition-opacity duration-300 hover:opacity-60 1920:text-base"
        >
          {item.label}
        </Link>
      ) : (
        <span className="text-sm font-light text-white">{item.label}</span>
      )}
      {item.items && (
        <HoverMenu items={item.items} submenuClassName="end-full start-auto" />
      )}
    </li>
  );
};

const TopbarContact: React.FC<{ contactInfo: RawContact | undefined }> = ({
  contactInfo,
}) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("Header.topbar");

  if (!contactInfo) return null;

  return (
    <div className="flex items-center gap-[30px] text-xs font-light">
      <ContactElement
        href={`mailto:${contactInfo.email}`}
        label={contactInfo.email}
      />
      <div className="flex gap-1 text-white">
        <ContactElement
          href={`tel:${contactInfo.phone}`}
          label={contactInfo.phone}
        />
      </div>

      <ContactElement href="#" label={t("googleMapsLocation")} />
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

export default TopbarClient;
