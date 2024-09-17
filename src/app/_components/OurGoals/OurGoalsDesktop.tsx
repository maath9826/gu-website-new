import { Goal } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function OurGoalsDesktop() {
  return (
    <div className="hidden sm:grid w-full grid-cols-3">
      {universityGoals.map((el, index) => (
        <OurGoalsCard key={index} el={el} index={index}></OurGoalsCard>
      ))}
    </div>
  );
}

function OurGoalsCard({ el, index }: { el: Goal; index: number }) {
  const isFirst = index == 0;
  return (
    <div
      className={twMerge(
        "min-h-[556px] sm:min-h-[571px] 1920:min-h-[762px] flex flex-col justify-end",
        isFirst
          ? "bg-[#0F4023]"
          : `bg-white bg-no-repeat bg-cover bg-[url('/images/home/goals/${
              index + 1
            }.jpg')]`
      )}
    >
      {isFirst && (
        <h1 className="flex-1 border-b border-white text-[28px] sm:text-[21px] 1920:text-[28px] leading-[1.22em] font-bold text-white px-4 sm:px-[58px] 1920:px-[78px] pt-[67px] sm:pt-[96px] 1920:pt-[129px]">
          اهداف جامعة كلكامش
        </h1>
      )}

      <div
        className={twMerge(
          "text-white",
          isFirst && "bg-black/30 backdrop-blur-md",
          isFirst
            ? "px-4 pb-[67px] sm:px-[58px] sm:pb-[50px] 1920:px-[78px] 1920:pb-[67px]"
            : "px-4 py-[29px] sm:px-[58px] sm:py-[47px] 1920:px-[78px] 1920:py-[63px]"
        )}
      >
        <h3
          className={twMerge(
            "text-[28px] sm:text-[21px] 1920:text-[28px] leading-[1.22em] font-bold mb-2",
            isFirst && "text-[44px] sm:text-[51px] 1920:text-[68px] font-medium"
          )}
        >
          {el.title}
        </h3>
        <p className="text-[16px] sm:text-[14px] 1920:text-[18px] leading-[1.75em]">
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
