"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { RELATED_LOCATIONS_ROUTE } from "@/lib/paths";

const Footer = () => {
  return (
    <Section
      as="footer"
      className="text-white text-start"
      wrapperClass="bg-[#121315] py-[30px] sm:py-[50px] 1920:py-[50px]"
    >
      <Wrapper className="flex flex-col gap-[47px] sm:gap-[69px]">
        <div className="flex flex-col sm:flex-row justify-between items-start ">
          <FooterRight />
          <FooterLeft />
        </div>

        <div className="w-full border-b border-white"></div>

        <FooterBottom />
      </Wrapper>
    </Section>
  );
};

const FooterRight = () => {
  return (
    <div className="w-full mb-8 sm:mb-0 sm:max-w-[500px] 1920:max-w-[846px]">
      <img
        src="/images/logo.png"
        alt="logo"
        className="hidden sm:block h-[78px] object-contain mb-[40px] 1920:mb-[69px]"
      />
      <h2 className="text-[32px] sm:text-[44px] 1920:text-[71px] font-bold leading-[1.54em]">
        تحسين مستقبل الناس من خلال العلوم والتكنولوجيا
      </h2>
    </div>
  );
};

const FooterLeft = () => {
  const data = [
    {
      label: "وزارة التعليم العالي والبحث العلمي",
      link: "#",
    },
    {
      label: "دائرة التعليم الجامعي الأهلي",
      link: "#",
    },
    {
      label: "اتحاد الجامعات العربية",
      link: "#",
    },
  ];

  return (
    <div className="w-full sm:max-w-[450px] 1920:max-w-[487px]">
      <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[24px] mb-[58px] sm:mb-[89px]  sm:items-center">
        <label className="text-[18px] leading-[1.22em]">
          اشترك بالقائمة البريدية:
        </label>
        <Input
          className="border-b border-white text-white bg-transparent sm:flex-1 max-w-[289px] !ring-0"
          inputClass="placeholder-white/50 text-[16px] leading-[1.22em] ps-0"
          placeholder="ادخل بريدك الإلكتروني"
          suffixIcon={<i className="ri-arrow-left-line text-[22px]"></i>}
        />
      </div>
      <div className="flex flex-col gap-[26px] sm:gap-[36px]">
        <h3 className="text-[20px] leading-[1.22em] font-bold ">
          مواقع ذات صلة
        </h3>
        <ul className=" flex flex-col gap-[8px] sm:gap-[16px]">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={item.link}
                className="text-[16px] sm:text-[18px] leading-[1.22em] hover:text-secondary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          target="_blank"
          href={RELATED_LOCATIONS_ROUTE}
          className="text-secondary text-[16px] sm:text-[18px] leading-[1.22em]"
        >
          عرض المزيد
        </Link>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  type Data = {
    label: string;
    link: string;
  };
  const data: Data[] = [
    {
      label: "الرئيسية",
      link: "#",
    },
    {
      label: "سياسة الخصوصية",
      link: "#",
    },
    {
      label: "ملفات تعريف الارتباط",
      link: "#",
    },
    {
      label: "مواقع ذات صلة",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-[74px] sm:gap-[49px]">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center self-stretch gap-[20px]">
        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] sm:items-center">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {index != 0 && (
                <div className="w-[1px] bg-white/20 hidden sm:block self-stretch"></div>
              )}
              <Link
                target="_blank"
                href={item.link}
                className="hover:text-secondary text-[16px] leading-[1.35em]"
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <FooterSocialMedia />
      </div>
      <p className="text-sm sm:text-lg">
        جميع الحقوق محفوظة 2024 © جامعة كلكامش
      </p>
    </div>
  );
};

const socialMediaLinks = [
  { icon: "ri-instagram-line", url: "#" },
  { icon: "ri-facebook-circle-fill", url: "#" },
  { icon: "ri-linkedin-box-fill", url: "#" },
  { icon: "ri-youtube-fill", url: "#" },
];

const FooterSocialMedia = () => {
  return (
    <div className="flex gap-[26px] items-center">
      <span className="text-base sm:text-lg">تابعنا عبر</span>
      <div className="flex gap-[20px] sm:gap-[24px]">
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            target="_blank"
            href={link.url}
            className="hover:text-secondary text-[24px]"
          >
            <i className={link.icon}></i>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
