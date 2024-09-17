import Section from "@/components/Section";
import Image from "next/image";

export default function AcademicRankings() {
  return (
    <div className="flex flex-col sm:flex-row text-start  w-full mt-[57px] sm:mt-[200px]">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-primary py-[44px] 1920:py-[106px] sm:py-[80px]">
        <div className="max-w-[348px] 1920:max-w-[460px]">
          <h3 className="text-[20px] sm:text-[15px] 1920:text-[20px] font-bold leading-[1.25em] mb-6 sm:mb-10 1920:mb-[40px] text-secondary">
            التصنيفات الأكاديمية
          </h3>
          <h2 className="text-[44px] sm:text-[36px] 1920:text-[48px] font-medium  leading-[72px] sm:leading-[54px] 1920:leading-[72px] mb-11 sm:mb-[69px] 1920:mb-[80px] text-white">
            جامعة كلكامش ضمن التصنيفــات الاكاديميــة
          </h2>
          <div className="flex  sm:flex-row gap-6 sm:gap-7 1920:gap-[37px] mb-[34px] sm:mb-10 1920:mb-[53px]">
            {["984", "29031"].map((num) => (
              <a
                key={num}
                href={`https://www.timeshighereducation.com/world-university-rankings/university-of-kufa/`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative  max-w-[158px] 1920:max-w-[211px] w-full h-[110px] sm:h-[115px] 1920:h-[153px] flex items-center justify-center bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:opacity-70"
              >
                <span className="absolute top-0 end-0 bg-[#252525] text-white text-[14px] leading-[1.22em] px-[6px] py-1 font-medium">
                  #{num}
                </span>
                <Image
                  fill
                  src={`/images/college-logo.png`}
                  alt={`Ranking ${num}`}
                  className="w-full h-full object-contain px-3 py-6 sm:px-[12px] sm:py-[24px]"
                />
              </a>
            ))}
          </div>
          <p className="text-[#F2F2F2]/70 leading-[1.75em] font-normal text-[16px] sm:text-[14px] 1920:text-[18px] max-w-[242px] sm:max-w-[276px]">
            للاطلاع على مرتبة الجامعة اضغط على شعار التصنيف
          </p>
        </div>
      </div>
      <div className="relative h-[275px] sm:h-auto sm:w-[calc(50%+63px)] 1920:w-[calc(50%+85px)]">
        <Image
          src="/images/hero-bg.jpg"
          alt="University Building"
          fill
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
