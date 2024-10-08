"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Ranking } from "@/lib/types";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

interface AcademicRankingsClientSideProps {
  rankings: Ranking[] | undefined;
}

const AcademicRankingsClientSide: React.FC<AcademicRankingsClientSideProps> = ({
  rankings,
}) => {
  const t = useTranslations("Home.academicRankings");

  if (!rankings || rankings.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col text-start sm:flex-row">
      <div className="flex flex-1 items-center justify-center bg-primary p-4 py-[44px] sm:p-8 sm:py-[80px] 1920:py-[106px]">
        <div className="max-w-[348px] 1920:max-w-[460px]">
          <h3 className="mb-6 text-[20px] font-bold leading-[1.25em] text-secondary sm:mb-10 sm:text-[15px] 1920:mb-[40px] 1920:text-[20px]">
            {t("subtitle")}
          </h3>
          <h2 className="mb-11 text-[44px] font-medium leading-[72px] text-white sm:mb-[69px] sm:text-[36px] sm:leading-[54px] 1920:mb-[80px] 1920:text-[48px] 1920:leading-[72px]">
            {t("title")}
          </h2>
          <div className="mb-[34px] flex gap-6 sm:mb-10 sm:flex-row sm:gap-7 1920:mb-[53px] 1920:gap-[37px]">
            {rankings.map((ranking) => (
              <a
                key={ranking.id}
                href={ranking.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[110px] w-full max-w-[158px] items-center justify-center bg-white transition-all duration-300 hover:scale-105 hover:opacity-70 hover:shadow-lg sm:h-[115px] 1920:h-[153px] 1920:max-w-[211px]"
              >
                <span className="absolute end-0 top-0 bg-[#252525] px-[6px] py-1 text-[14px] font-medium leading-[1.22em] text-white">
                  #{ranking.num}
                </span>

                <Image
                  src={getImageUrl(ranking.image)}
                  alt={ranking.name}
                  fill
                  className="object-contain px-3 py-6 sm:px-[12px] sm:py-[24px]"
                />
              </a>
            ))}
          </div>
          <p className="max-w-[242px] text-[16px] font-normal leading-[1.75em] text-[#F2F2F2]/70 sm:max-w-[276px] sm:text-[14px] 1920:text-[18px]">
            {t("note")}
          </p>
        </div>
      </div>
      <div className="relative h-[275px] sm:h-auto sm:w-[calc(50%+63px)] 1920:w-[calc(50%+85px)]">
        <Image
          src="/images/hero-bg.jpg"
          alt="University Building"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AcademicRankingsClientSide;
