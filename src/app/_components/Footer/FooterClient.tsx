"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { RELATED_LOCATIONS_ROUTE } from "@/lib/paths";
import { RawContact } from "@/lib/types";
import SocialMediaLinks from "../Header/SocialMediaLinks";

interface FooterClientProps {
  contactInfo: RawContact | undefined;
}

const FooterClient: React.FC<FooterClientProps> = ({ contactInfo }) => {
  const t = useTranslations("Footer");

  return (
    <Section
      as="footer"
      className="text-start text-white"
      wrapperClass="bg-[#121315] py-[30px] sm:py-[50px] 1920:py-[50px]"
    >
      <Wrapper className="flex flex-col gap-[47px] sm:gap-[69px]">
        <div className="flex flex-col items-start justify-between sm:flex-row">
          <FooterRight />
          <FooterLeft />
        </div>

        <div className="w-full border-b border-white/20"></div>

        <FooterBottom contactInfo={contactInfo} t={t} />
      </Wrapper>
    </Section>
  );
};

const FooterRight = () => {
  const t = useTranslations("Footer");

  return (
    <div className="mb-8 w-full sm:mb-0 sm:max-w-[500px] 1920:max-w-[846px]">
      <img
        src="/images/logo.png"
        alt="logo"
        className="mb-[40px] hidden h-[78px] object-contain sm:block 1920:mb-[69px]"
      />
      <h2 className="text-[32px] font-bold leading-[1.54em] sm:text-[44px] 1920:text-[71px]">
        {t("slogan")}
      </h2>
    </div>
  );
};

const FooterLeft = () => {
  const t = useTranslations("Footer");
  const tCommon = useTranslations("Common");

  const data = [
    { label: "ministry", link: "#" },
    { label: "privateDepartment", link: "#" },
    { label: "arabUniversities", link: "#" },
  ];

  return (
    <div className="flex w-full sm:max-w-[450px] 1920:max-w-[487px]">
      <Link
        href={RELATED_LOCATIONS_ROUTE}
        className="text-[16px] leading-[1.22em] text-secondary sm:text-[18px]"
      >
        {t("relatedSites")}
      </Link>
      {/* <div className="mb-[58px] flex flex-col gap-[10px] sm:mb-[89px] sm:flex-row sm:items-center sm:gap-[24px]">
        <label className="text-[18px] leading-[1.22em]">
          {t("subscribeNewsletter")}
        </label>
        <Input
          className="max-w-[289px] border-b border-white bg-transparent text-white !ring-0 sm:flex-1"
          inputClass="placeholder-white/50 text-[16px] leading-[1.22em] ps-0"
          placeholder={t("enterEmail")}
          suffixIcon={<i className="ri-arrow-left-line text-[22px]"></i>}
        />
      </div>
      <div className="flex flex-col gap-[26px] sm:gap-[36px]">
        <h3 className="text-[20px] font-bold leading-[1.22em]">
          {t("relatedSites")}
        </h3>
        <ul className="flex flex-col gap-[8px] sm:gap-[16px]">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-[16px] leading-[1.22em] hover:text-secondary sm:text-[18px]"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={RELATED_LOCATIONS_ROUTE}
          className="text-[16px] leading-[1.22em] text-secondary sm:text-[18px]"
        >
          {t("viewMore")}
        </Link>
      </div> */}
    </div>
  );
};

const FooterBottom = ({
  contactInfo,
  t,
}: {
  contactInfo: RawContact | undefined;
  t: (key: string) => string;
}) => {
  return (
    <div className="flex flex-col items-center gap-[74px] sm:gap-[49px]">
      <div className="flex flex-col justify-end gap-[20px] self-stretch sm:flex-row sm:items-center">
        {/* <FooterNavLinks t={t} /> */}
        {contactInfo && <SocialMediaLinks contactInfo={contactInfo} />}
      </div>
      <p className="text-sm sm:text-lg">{t("copyright")}</p>
    </div>
  );
};

const FooterNavLinks = ({ t }: { t: (key: string) => string }) => {
  const links = [
    { label: "home", href: "/" },
    { label: "privacyPolicy", href: "#" },
    { label: "cookiePolicy", href: "#" },
    { label: "relatedSites", href: RELATED_LOCATIONS_ROUTE },
  ];

  return (
    <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:gap-[30px]">
      {links.map((link, index) => (
        <React.Fragment key={link.label}>
          {index !== 0 && (
            <div className="hidden w-[1px] self-stretch bg-white/20 sm:block"></div>
          )}
          <Link
            href={link.href}
            className="text-[16px] leading-[1.35em] hover:text-secondary"
          >
            {t(link.label)}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FooterClient;
