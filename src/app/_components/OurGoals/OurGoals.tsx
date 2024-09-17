"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { Goal } from "@/lib/types";
import { ScrollableCardsContainer } from "@/components/ScrollableContainer/ScrollableContainer";
import ScrollArrows from "@/components/ScrollArrows";

export default function OurGoals() {
  const t = useTranslations("Home.ourGoals");
  let containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge("mt-[114px] sm:mt-[198px] 1920:mt-[280px] w-full")}>
      <ScrollableCardsContainer
        ref={containerRef}
        className="flex sm:grid sm:w-full sm:grid-cols-3"
      >
        {universityGoals.map((el, index) => (
          <div key={index} className="w-screen-pure sm:w-auto">
            <OurGoalsCard key={index} el={el} index={index}></OurGoalsCard>
          </div>
        ))}
      </ScrollableCardsContainer>
      <ScrollArrows
        containerRef={containerRef}
        useMultiples={true}
        wrapperClassName="justify-end mt-[24px] mx-[16px] sm:hidden"
      ></ScrollArrows>
    </div>
  );
}

function OurGoalsCard({ el, index }: { el: Goal; index: number }) {
  const isFirst = index === 0;
  const styles = twMerge(
    "min-h-[556px] sm:min-h-[571px] 1920:min-h-[762px] flex flex-col justify-end text-start",
    isFirst
      ? "bg-[#0F4023]"
      : `bg-white bg-no-repeat bg-cover bg-[url('/images/home/goals/${
          index + 1
        }.jpg')]`
  );

  const backgroundImg = isFirst
    ? {}
    : { backgroundImage: `url('/images/home/goals/${index + 1}.jpg')` };

  return (
    <div className={styles} style={backgroundImg}>
      {isFirst && (
        <h1 className="flex-1 border-b border-white text-[44px] sm:text-[51px] 1920:text-[68px] leading-[1.22em] text-white mx-4 sm:mx-[58px] 1920:mx-[78px] pt-[67px] sm:pt-[96px] 1920:pt-[129px] font-medium">
          اهداف جامعة كلكامش
        </h1>
      )}

      <div
        className={twMerge(
          "text-white",
          !isFirst && "bg-black/30 backdrop-blur-md",
          isFirst
            ? "px-4 pb-[67px] pt-[29px] sm:pt-[34px] 1920:pt-[46px] sm:px-[58px] sm:pb-[50px] 1920:px-[78px] 1920:pb-[67px]"
            : "px-4 py-[29px] sm:px-[58px] sm:py-[47px] 1920:px-[78px] 1920:py-[63px]"
        )}
      >
        <h3 className="text-[28px] sm:text-[21px] 1920:text-[28px] leading-[1.22em] font-bold mb-2">
          {el.title}
        </h3>
        <p className="text-[16px] sm:text-[14px] 1920:text-[18px] leading-[1.75em] font-light text-white/70">
          {el.description}
        </p>
      </div>
    </div>
  );
}

const universityGoals: Goal[] = [
  {
    title: "تعزيز الحداثة والتراث",
    description:
      "المساهمة في تحقيق التطور الكمي والنوعي في الحركة العلمية والثقافية والتعليمية والبحثية العلمية في العراق الجديد من خلال تأهيل كوادر علمية مستنيرة تجمع بين عناصر الحداثة والتراث، وترسيخ المبادئ والأفكار والرؤى العلمية الحديثة.",
  },
  {
    title: "تقديم فرص أكاديمية متقدمة",
    description:
      "توفير الفرص الأكاديمية الجامعية الأولية والعليا (النظرية والتطبيقية)، واعتماد مناهج متقدمة لتحقيق الأهداف العلمية والتعليمية والثقافية التي حددها وزارة التعليم العالي والبحث العلمي لتطوير المجتمع العراقي.",
  },
  {
    title: "تعزيز التميز في البحث العلمي",
    description:
      "دعم الاستثمار في البحث العلمي وتنمية المبتكرين بطريقة تحقق التميز في إنتاج المعرفة لتقديم الخدمات على مستوى يتوافق مع معايير الجودة.",
  },
  {
    title: "ضمان التنافسية في سوق العمل",
    description:
      "المساهمة في تطوير الجانب الأكاديمي وتوفير الكوادر التدريسية والفنية المتخصصة، مما يضمن تأهيل الخريجين قادرين على التنافس في سوق العمل.",
  },
  {
    title: "تعزيز التعليم المستمر",
    description:
      "المساهمة في تطوير التعليم المستمر لتحسين أداء الكوادر البشرية العاملة والمتخصصة والعمل على رفع كفاءتهم وفقًا لمعايير الجودة العالمية.",
  },
  {
    title: "بناء جيل يؤمن بالمواطنة واحترام القانون",
    description:
      "المساهمة في تربية جيل يؤمن بالمواطنة واحترام القانون من خلال مناهج علمية وتعليمية وثقافية ورياضية واجتماعية هادفة.",
  },
];
