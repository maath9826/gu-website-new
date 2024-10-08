"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { College } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

interface OurCollegesClientSideProps {
  colleges: College[] | undefined;
}

const OurCollegesClientSide: React.FC<OurCollegesClientSideProps> = ({
  colleges,
}) => {
  const t = useTranslations("Common");

  if (!colleges || colleges.length === 0) {
    return null;
  }

  return (
    <Section wrapperClass="mb-[57px] sm:mb-[200px]">
      <Wrapper className="flex-col">
        <div className="mb-[24px] flex flex-col items-center text-center sm:mb-[90px]">
          <h4 className="mb-5 px-2 py-1 text-[16px] font-bold leading-[1.25em] text-secondary">
            {t("gilgameshUniversity")}
          </h4>
          <h2 className="px-4 py-2 text-[48px] font-bold leading-[1.25em]">
            {t("ourColleges")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-[375px] grid-cols-1 gap-[15px] text-start sm:max-w-[1280px] sm:grid-cols-4 sm:gap-6 1920:max-w-[1920px] 1920:gap-[34px]">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  const t = useTranslations("Common");

  return (
    <div className="flex h-[693px] flex-col bg-white sm:h-[500px] 1920:h-[693px]">
      <div className="relative flex h-[368px] items-center justify-center border-b-[7px] border-secondary bg-[#DBDBDB] sm:h-[266px] 1920:h-[368px]">
        <div className="relative aspect-square w-full max-w-[257px] sm:max-w-[183px] 1920:max-w-[257px]">
          <Image
            src={getImageUrl(college.icon)}
            alt={college.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          <h2 className="mt-[24px] text-[24px] font-bold leading-[1.25em] sm:mt-[17px] sm:text-[17px] 1920:mt-[24px] 1920:text-[24px]">
            {college.name}
          </h2>
          <p className="mt-[24px] line-clamp-3 text-[19px] leading-[1.65em] sm:mt-[17px] sm:text-[14px] 1920:mt-[24px] 1920:text-[19px]">
            {college.description}
          </p>
        </div>
        <Button
          variant={"secondary"}
          className="mt-4 w-full py-[16px] text-[16px] leading-[1.22em] sm:py-[12px] sm:text-[12px] 1920:py-[16px] 1920:text-[16px]"
        >
          {t("readMore")}
        </Button>
      </div>
    </div>
  );
};

export default OurCollegesClientSide;
