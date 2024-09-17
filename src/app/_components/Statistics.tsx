import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { Statistic } from "@/lib/types";
import React from "react";

const universityStats: Statistic[] = [
  {
    value: 2000,
    description: "عدد الطلبة",
  },
  {
    value: 65,
    description: "عدد الكادر التدريسي",
  },
  {
    value: 20,
    description: "عدد الكادر الإداري",
  },
  {
    value: 20,
    description: "عدد الكادر الفني والتقني",
  },
];

export default function Statistics() {
  return (
    <div className="w-full flex flex-col items-end">
      <Section
        wrapperClass="bg-[#E6E6E6] py-[60px] sm:py-[94px] 1920:py-[125px] mt-[60px] sm:mt-[200px] 1920:mt-[280px] sm:min-h-[572px] 1920:min-h-[762px]"
        className="max-w-[306px] "
      >
        <Wrapper className="flex flex-col sm:flex-row sm:justify-between">
          <h2 className="text-[44px] leading-[66px]  sm:text-[64px] sm:leading-[80px] 1920:text-[86px] 1920:leading-[107px] text-primary font-medium text-start mb-[80px] sm:mb-0 sm:max-w-[600px]">
            احصائيات جامعة كلكامش
          </h2>
          <div className="grid grid-cols-[repeat(2,minmax(0,135px))] w-full sm:max-w-[395px] 1920:max-w-[495px] justify-between gap-y-[32px] sm:gap-y-[65px] h-fit">
            {universityStats.map((el, index) => (
              <div
                className="flex flex-col gap-[25px] sm:gap-[12px] 1920:gap-[16px]"
                key={index}
              >
                <span className="text-[32px] sm:text-[30px] 1920:text-[40px] leading-[1.22em] text-primary font-medium font-sans">
                  {el.value.toLocaleString()}+
                </span>
                <h3 className="text-[16px] sm:text-[15px] 1920:text-[20px] leading-[1.22em] text-[#828282]">
                  {el.description}
                </h3>
              </div>
            ))}
          </div>
        </Wrapper>
      </Section>
      <img
        src="/images/home/statistics.jpg"
        alt="image"
        className="w-full object-cover sm:max-w-[826px] 1920:max-w-[1102px] sm:-mt-[186px] 1920:-mt-[247px]"
      />
    </div>
  );
}
