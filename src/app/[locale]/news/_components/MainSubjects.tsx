"use client";

import ScrollArrows from "@/components/ScrollArrows";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function MainSubjects({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={twMerge("flex flex-col gap-[10px] sm:gap-[120px]", className)}
    >
      <div className="flex justify-center !px-[16px] sm:!px-[130px]">
        <UpperSection containerRef={containerRef}></UpperSection>
      </div>
      <div className="flex justify-center">
        <ScrollableCardsContainer ref={containerRef}></ScrollableCardsContainer>
      </div>
    </section>
  );
}

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  { className?: string }
>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge("hide-scrollbar overflow-x-auto", className)}
    >
      <div className="flex w-fit gap-[24px] px-[16px] sm:gap-[60px] sm:px-[100px]">
        {mainSubjects.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </div>
    </div>
  );
});

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

function Card({ el }: { el: MainSubjectData }) {
  return (
    <div className="flex   flex-col items-center gap-[16px] text-center   sm:gap-[42px]">
      <img
        src={el.src}
        alt={el.alt}
        className="max-w-[323px] rounded-[18px] sm:max-w-[431px] sm:rounded-[25px]"
      />
      <h4 className="text-[18px]  leading-[28px] text-foreground/60 sm:max-w-[250px] sm:text-[24px] sm:leading-[38px]">
        {el.title}
      </h4>
    </div>
  );
}

function UpperSection({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex w-full max-w-[1660px] items-center justify-between   sm:justify-between ">
      <h2 className="1920:ps-[10px] max-w-[207px] text-[18px] font-semibold leading-[24px] sm:max-w-none sm:text-[50px]  sm:leading-[73px]">
        المواضيع الرئيسية
      </h2>
      <ScrollArrows containerRef={containerRef} />
    </div>
  );
}

interface MainSubjectData {
  title: string;
  alt: string;
  src: string;
}

const mainSubjects: MainSubjectData[] = [
  {
    title: "البحوث ومؤسسات التصنيف",
    alt: "1",
    src: "/images/about/main-subjects/1.jpg",
  },
  {
    title: "المشاريع الناشئة في قطاع التعليم",
    alt: "2",
    src: "/images/about/main-subjects/2.jpg",
  },
  {
    title: "تحديات التعليم الجامعي مع تزايد أعداد الطلبة",
    alt: "3",
    src: "/images/about/main-subjects/3.jpg",
  },
  {
    title: "خطوات فعالة نحو التعليم الأخضر",
    alt: "4",
    src: "/images/about/main-subjects/4.jpg",
  },
];
