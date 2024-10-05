"use client";

import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";

import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";

import React from "react";

export default function UniversityCouncilClientPage() {
  return (
    <main>
      <ActionsTitle title="مجلس الجامعة"></ActionsTitle>
      <Section className="text-start">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-4 sm:gap-[22px] 1920:grid-cols-5">
            <PresidentCard></PresidentCard>
            {[...Array(12)].map((_, index) => (
              <MemberCard key={index} />
            ))}
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}

function PresidentCard() {
  return (
    <div className="flex flex-col justify-between bg-white sm:col-span-3 sm:px-[20px]">
      <div className="flex h-full items-center">
        <div className="flex flex-col gap-[25px] text-primary sm:flex-row sm:py-[20px]">
          <img
            src="/images/hero-bg.jpg"
            className="w-full object-cover sm:w-[35%]"
          ></img>
          <div className="flex flex-col justify-center px-[8px] py-[20px] sm:w-[65%] sm:items-start sm:px-[12px] sm:py-[40px] 1920:px-[20px]">
            <h2 className="text-[18px] font-bold text-foreground sm:text-[22px] 1920:text-[34px]">
              أ.د.انور صبحي عبد الحسين
            </h2>
            <h3 className="mt-[10px] text-[14px] font-medium">رئيس الجامعة</h3>
            <p className="mt-[16px] text-[16px] leading-[24px] sm:mt-[28px] 1920:mt-[58px]">
              تأسست جامعة كلكامش بموجب الأمر الوزاري (1443) 27/1/2019 حيث تضم
              عدد من الكليات تؤلِّف مجتمعاً متميزاً للتعلُّم والبحوث، يتيح
              للطلبة الاستفادة من مزايا التعلُّم البحثي والمشاركة في أنشطة البحث
              والاكتشاف، وتشجعهم على تعميق البُعد الفكري من خلال تحديد المشكلات،
              والعمل على إيجاد الحلول التي تُقدِّمها التخصصات داخل كل كلية،
              وتعمل على تخريج طلبة متميزين يتمتعون بمهارات تعلُّم مستدامة، مثل
              التفكير النقدي، حل المشكلات، العمل الجماعي، والاتصالات مما يتيح
              لهم ذلك فرص المنافسة بقوة، وتحقيق النجاح في أسواق العمل المختلفة.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}

function MemberCard() {
  return (
    <div className="flex flex-col justify-between bg-white sm:px-[18px]">
      <div className="flex flex-col gap-[35px] pb-[57px] pt-[18px]">
        <img
          src="/images/person-placeholder.svg"
          className="w-full object-cover"
        ></img>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[21px] font-medium text-foreground">
            الاسم الكامل
          </h2>
          <h3 className="mt-[12px] max-w-[200px] text-[16px] font-medium leading-[24px] text-primary">
            وصف المنصب الاداري ضمن الجامعة
          </h3>
        </div>
      </div>

      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}
