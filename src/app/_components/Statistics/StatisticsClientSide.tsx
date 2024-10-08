"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { StatisticsItem } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";

interface StatisticsClientSideProps {
  statistics: StatisticsItem | undefined;
}

const StatisticsClientSide: React.FC<StatisticsClientSideProps> = ({
  statistics,
}) => {
  const t = useTranslations("Home.statistics");

  if (!statistics) {
    return null;
  }

  const stats = [
    { value: statistics.students, label: t("students") },
    { value: statistics.faculty_members, label: t("facultyMembers") },
    { value: statistics.administrative_staff, label: t("administrativeStaff") },
    {
      value: statistics.technical_and_professional_staff,
      label: t("technicalStaff"),
    },
  ];

  return (
    <div className="mb-[114px] w-full sm:mb-[198px] 1920:mb-[280px]">
      <div className="flex w-full flex-col items-end">
        <Section
          wrapperClass="bg-[#E6E6E6] py-[60px] sm:py-[94px] 1920:py-[125px]   sm:min-h-[572px] 1920:min-h-[762px] "
          className="max-w-[306px]"
        >
          <Wrapper className="flex flex-col sm:flex-row sm:justify-between">
            <h2 className="mb-[80px] text-start text-[44px] font-medium leading-[66px] text-primary sm:mb-0 sm:max-w-[600px] sm:text-[64px] sm:leading-[80px] 1920:text-[86px] 1920:leading-[107px]">
              {t("title")}
            </h2>
            <div className="grid h-fit w-full grid-cols-[repeat(2,minmax(0,135px))] justify-between gap-y-[32px] sm:max-w-[395px] sm:gap-y-[65px] 1920:max-w-[495px]">
              {stats.map((stat, index) => (
                <div
                  className="flex flex-col gap-[25px] sm:gap-[12px] 1920:gap-[16px]"
                  key={index}
                >
                  <span className="font-sans text-[32px] font-medium leading-[1.22em] text-primary sm:text-[30px] 1920:text-[40px]">
                    {stat.value.toLocaleString()}+
                  </span>
                  <h3 className="text-[16px] leading-[1.22em] text-[#828282] sm:text-[15px] 1920:text-[20px]">
                    {stat.label}
                  </h3>
                </div>
              ))}
            </div>
          </Wrapper>
        </Section>
        <img
          src="/images/home/statistics.jpg"
          alt="image"
          className="w-full object-cover sm:-mt-[186px] sm:max-w-[826px] 1920:-mt-[247px] 1920:max-w-[1102px]"
        />
      </div>
    </div>
  );
};

export default StatisticsClientSide;
