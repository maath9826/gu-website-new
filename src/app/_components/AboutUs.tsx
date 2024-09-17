"use client";

import { ABOUT_ROUTE } from "@/lib/paths";
import React from "react";
import Section from "../../components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutUs: React.FC = () => {
  const t = useTranslations("Home.aboutUs");

  return (
    <Section
      id="about-us"
      className="sm:pt-[120px] sm:pb-[74px] pt-[36px]  px-[12px] relative sm:overflow-clip flex flex-col items-center   sm:px-5 xl:px-0"
    >
      <h1 className="title pb-[22px] sm:pb-[32px] relative z-10 ">
        {t("title")}
      </h1>
      <div className="relative z-10">
        <div className="flex flex-col gap-[40px] sm:gap-[40px] max-w-[351px] sm:max-w-[800px]  sm:px-0">
          <p className="text-base ltr:leading-[26px] sm:text-justify sm:text-[20px] sm:leading-[36px]">
            {t("description")}
          </p>
          <div className="sm:flex sm:justify-center">
            <Link href={ABOUT_ROUTE}>
              <Button
                variant={"outline"}
                className="text-primary-300  w-full  sm:w-fit hover:opacity-75 border-primary-300  text-lg py-3 tracking-[-0.004em] inline-flex items-center justify-center text-center border rounded-full transition-opacity duration-200 ease-in-out font-medium"
              >
                {t("readMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* desktop */}
      <img
        src="https://i.imgur.com/wUfwWfR.png"
        alt="about us background"
        className="hidden sm:block absolute top-[-232px] right-[40%] translate-x-[calc(50%-512px)] w-[1878px] min-w-[1878px] h-[1264px] min-h-[1264px] transform rotate-[8.75deg] opacity-20"
      />
    </Section>
  );
};

export default AboutUs;
