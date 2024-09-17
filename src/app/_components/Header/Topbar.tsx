// src/app/_components/Topbar.tsx

import React from "react";
import LocaleSwitcher from "../../../components/LocaleSwitcher";
import { Link, Locale } from "@/i18n.config";
import { useLocale } from "next-intl";
import Section from "../../../components/Section";

const Topbar: React.FC = () => {
  return (
    <Section
      className="h-[50px] flex justify-center"
      wrapperClass="bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] hidden sm:flex"
    >
      <div className="h-full flex justify-between items-center sm:px-[60px] 1920:px-[136px] w-full">
        <TopbarContact />
        <TopbarNavigation />
      </div>
    </Section>
  );
};

const TopbarNavigation: React.FC = () => {
  const navItems = [
    { href: "/contact", label: "اتصل بنا" },
    { href: "/news", label: "الاخبار" },
    { href: "/sustainability", label: "الاستدامة" },
    { href: "/university-and-community", label: "الجامعة والمجتمع" },
  ];

  return (
    <ul className="flex items-center">
      {navItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index !== 0 && (
            <div className="border-e border-white/10 sm:block hidden h-4 mx-2.5"></div>
          )}
          <NavElement href={item.href} label={item.label} />
        </React.Fragment>
      ))}
    </ul>
  );
};

const NavElement: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  return (
    <li>
      <Link
        href={href}
        className="text-sm 1920:text-base text-white hover:opacity-60 transition-opacity duration-300 font-light"
      >
        {label}
      </Link>
    </li>
  );
};

const TopbarContact: React.FC = () => {
  const locale = useLocale() as Locale;

  return (
    <div className="flex items-center gap-[30px]  text-xs font-light">
      <ContactElement href="mailto:info@gau.edu.iq" label="info@gau.edu.iq" />
      <div className=" text-white flex gap-1">
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
    <a href={href} className=" text-white hover:text-secondary">
      {label}
    </a>
  );
};

export default Topbar;
