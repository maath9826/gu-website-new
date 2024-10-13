"use client";

import React, { useRef } from "react";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { AboutData } from "@/lib/api_services/about-apis";
import {
  AGREEMENTS_PARTNERSHIPS_ROUTE,
  ORGANIZATIONAL_STRUCTURE_ROUTE,
  UNIVERSITY_STRATEGY_ROUTE,
} from "@/lib/paths";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";
import CommonCard from "@/app/_components/CardsSection/CommonCard";
import { useTranslations } from "next-intl";

interface AboutClientPageProps {
  aboutData: AboutData | undefined;
}

export default function AboutClientPage({ aboutData }: AboutClientPageProps) {
  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Section className="mt-[10px] text-start sm:mt-[146px]">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-7 sm:gap-[22px] 1920:gap-[52px]">
            <MainSection about={aboutData.about} />
            <VisionSection vision={aboutData.vision} />
            <MessageSection message={aboutData.message} />
          </div>
          <GoalsSection goals={aboutData.goals} />
        </Wrapper>
      </Section>
      <CardsSection></CardsSection>
    </main>
  );
}

function MainSection({ about }: { about: string }) {
  const t = useTranslations("About");
  return (
    <div className="col-span-full flex flex-col text-primary sm:flex-row">
      <div className="flex flex-col justify-center gap-[14px] bg-white px-[16px] py-[32px] sm:w-[60%] sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[50px] 1920:px-[80px]">
        <h2 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
          {t("aboutGilgameshUniversity")}
        </h2>
        <p className="text-[16px] leading-[1.8em] sm:text-[20px] 1920:text-[24px]">
          {about}
        </p>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-[40%]"
        alt="University background"
      />
    </div>
  );
}

function VisionSection({ vision }: { vision: string }) {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-[#0F4023] px-[16px] py-[32px] text-white sm:col-span-3 sm:items-start sm:gap-[28px] sm:px-[44px] sm:py-[54px] 1920:gap-[44px] 1920:px-[64px]">
      <h3 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
        {t("theVision")}
      </h3>
      <h2 className="text-[32px] sm:text-[40px] 1920:text-[68px]">
        {t("universityVision")}
      </h2>
      <p className="mt-[20px] text-justify text-[16px] leading-[1.8em] text-[#F2F2F2]/70 sm:mt-auto sm:text-[18px]">
        {vision}
      </p>
    </div>
  );
}

function MessageSection({ message }: { message: string }) {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-primary px-[16px] py-[32px] text-white sm:col-span-4 sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[58px] 1920:px-[108px]">
      <h3 className="text-[18px] font-bold text-secondary sm:text-[22px] 1920:text-[28px]">
        {t("theMessage")}
      </h3>
      <p className="text-[16px] leading-[1.8em] sm:text-[26px] 1920:text-[35px]">
        {message}
      </p>
    </div>
  );
}

function GoalsSection({ goals }: { goals: string }) {
  const goalsList = goals.split("\r\n").filter((goal) => goal.trim() !== "");
  const t = useTranslations("About");

  return (
    <div className="col-span-full mt-[64px] flex flex-col sm:mt-[180px] sm:flex-row">
      <div className="flex flex-col justify-center gap-[24px] py-[32px] pe-[16px] sm:w-1/2 sm:items-start sm:gap-[28px] sm:py-[64px] sm:pe-[64px] 1920:gap-[58px] 1920:pe-[108px]">
        <h2 className="text-[18px] font-bold sm:text-[32px] 1920:text-[48px]">
          {t("universityGoals")}
        </h2>
        <div className="flex flex-col gap-[14px] sm:gap-[24px]">
          {goalsList.map((goal, index) => (
            <div
              className="flex items-start gap-[12px] sm:gap-[24px]"
              key={index}
            >
              <div className="flex h-[31px] min-h-[31px] w-[31px] min-w-[31px] items-center justify-center rounded-full bg-secondary text-[16px] leading-none">
                {index + 1}
              </div>
              <span className="text-justify text-[16px] sm:text-[18px]">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-1/2"
        alt="University goals"
      />
    </div>
  );
}

function CardsSection() {
  const t = useTranslations("Header.navLinks");

  const containerRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      imgUrl: "/images/about/3.svg",
      title: t("organizationalStructure"),
      href: ORGANIZATIONAL_STRUCTURE_ROUTE,
    },
    {
      imgUrl: "/images/about/2.svg",
      title: t("universityStrategy"),
      href: UNIVERSITY_STRATEGY_ROUTE,
    },
    {
      imgUrl: "/images/about/1.svg",
      title: t("agreementsPartnerships"),
      href: AGREEMENTS_PARTNERSHIPS_ROUTE,
    },
  ];

  return (
    <div className="mt-[60px] sm:mt-[150px]">
      <Section className="max-w-none">
        <Wrapper className="mx-0 max-w-none sm:mx-[16px]">
          <ScrollableCardsContainer
            ref={containerRef}
            className="grid grid-cols-[repeat(3,auto)] sm:w-full sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px]"
          >
            {services.map((service, index) => (
              <ScrollElement
                className="flex justify-center sm:w-auto"
                key={index}
              >
                <CommonCard
                  el={service}
                  index={index}
                  uniqueFirstCard={false}
                />
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
        </Wrapper>
      </Section>
    </div>
  );
}
