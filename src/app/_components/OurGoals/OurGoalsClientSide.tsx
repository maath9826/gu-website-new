"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { GoalItem } from "@/lib/types";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollArrows from "@/components/ScrollArrows";
import { twMerge } from "tailwind-merge";

interface OurGoalsClientSideProps {
  goals: GoalItem[];
}

const OurGoalsClientSide: React.FC<OurGoalsClientSideProps> = ({ goals }) => {
  const t = useTranslations("Home.ourGoals");
  let containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge("mb-[110px] w-full sm:mb-[157px]")}>
      <ScrollableCardsContainer
        ref={containerRef}
        className={`flex sm:grid sm:w-full ${goals.length < 3 ? "grid-cols-[repeat(auto-fit,minmax(470px,1fr))] justify-center" : "sm:grid-cols-3"} `}
      >
        {goals.map((goal, index) => (
          <div key={goal.id} className="w-screen-pure sm:w-auto">
            <OurGoalsCard goal={goal} index={index} />
          </div>
        ))}
      </ScrollableCardsContainer>
      <ScrollArrows
        containerRef={containerRef}
        useMultiples={true}
        wrapperClassName="justify-end mt-[24px] mx-[16px] sm:hidden"
      />
    </div>
  );
};

interface OurGoalsCardProps {
  goal: GoalItem;
  index: number;
}

const OurGoalsCard: React.FC<OurGoalsCardProps> = ({ goal, index }) => {
  const t = useTranslations("Home.ourGoals");

  const isFirst = index === 0;
  const styles = twMerge(
    "min-h-[556px] sm:min-h-[571px] 1920:min-h-[762px] flex flex-col justify-end text-start",
    isFirst ? "bg-[#0F4023]" : `bg-white bg-no-repeat bg-cover`,
  );

  return (
    <div
      className={styles}
      style={!isFirst ? { backgroundImage: `url(${goal.image})` } : {}}
    >
      {isFirst && (
        <h1 className="mx-4 flex-1 border-b border-white pt-[67px] text-[44px] font-medium leading-[1.22em] text-white sm:mx-[58px] sm:pt-[96px] sm:text-[51px] 1920:mx-[78px] 1920:pt-[129px] 1920:text-[68px]">
          {t("title")}
        </h1>
      )}

      <div
        className={twMerge(
          "text-white",
          !isFirst && "bg-black/30 backdrop-blur-md",
          isFirst
            ? "px-4 pb-[67px] pt-[29px] sm:px-[58px] sm:pb-[50px] sm:pt-[34px] 1920:px-[78px] 1920:pb-[67px] 1920:pt-[46px]"
            : "px-4 py-[29px] sm:px-[58px] sm:py-[47px] 1920:px-[78px] 1920:py-[63px]",
        )}
      >
        <h3 className="mb-2 text-[28px] font-bold leading-[1.22em] sm:text-[21px] 1920:text-[28px]">
          {goal.title}
        </h3>
        <p className="text-[16px] font-light leading-[1.75em] text-white/70 sm:text-[14px] 1920:text-[18px]">
          {goal.description}
        </p>
      </div>
    </div>
  );
};

export default OurGoalsClientSide;
