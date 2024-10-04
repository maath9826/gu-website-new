"use client";

import CommonCard from "@/app/_components/CardsSection/CommonCard";
import OurGoals from "@/app/_components/OurGoals/OurGoals";
import PageWithFirstSection from "@/components/page/Page";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import {
  AGREEMENTS_PARTNERSHIPS_ROUTE,
  ORGANIZATIONAL_STRUCTURE_ROUTE,
  UNIVERSITY_STRATEGY_ROUTE,
} from "@/lib/paths";
import React, { useRef } from "react";

const list = [
  "تسعى جامعة كاكامش إلى إعداد خريجين تتناسب مؤهلاتهم وخبراتهم مع متطلبات سوق العمل (القطاع الحكومي، القطاع الخاص).",
  "تؤكد الجامعة التزامها التام بتطبيق نظام إدارة الجودة وفق متطلبات المواصفة ISO9001:2015 من أجل تحقيق مستويات عالية بالأداء ورفع كفاء العاملين والجامعة ككل.",
  "توفر الجامعة الدعم الكامل لجميع الإجراءات التي تهدف إلى التحسين والتطوير المستمر.",
  "تسعى الجامعة إلى تحقيق رضا المستفيدين وأصحاب المصلحة وضمان زيادتهم بشكل مستمر.",
  "تلتزم الجامعة بأن تكون سياسة الجودة مفهومة من قبل جميع العاملين في الجامعة وأن يتم مراجعتها دوريا لتتأكد من ملاءمتها ومتطلباتها للعمل.",
];

export default function AboutClientPage() {
  return (
    <main>
      <Section className="mt-[10px] text-start sm:mt-[146px]">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-7 sm:gap-[22px] 1920:gap-[52px]">
            <MainSection></MainSection>
            <VisionSection></VisionSection>
            <MessageSection></MessageSection>
          </div>
          <QualitySection></QualitySection>
        </Wrapper>
      </Section>
      <CardsSection></CardsSection>
      <OurGoals></OurGoals>
    </main>
  );
}

function MainSection() {
  return (
    <div className="col-span-full flex flex-col text-primary sm:flex-row">
      <div className="flex flex-col justify-center gap-[14px] bg-white px-[16px] py-[32px] sm:w-[65%] sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[58px] 1920:px-[108px]">
        <h2 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
          عن جامعة كلكامش
        </h2>
        <p className="text-[16px] leading-[1.8em] sm:text-[20px] 1920:text-[24px]">
          تأسست جامعة كلكامش بموجب الأمر الوزاري (1443) 27/1/2019 حيث تضم عدد من
          الكليات تؤلِّف مجتمعاً متميزاً للتعلُّم والبحوث، يتيح للطلبة الاستفادة
          من مزايا التعلُّم البحثي والمشاركة في أنشطة البحث والاكتشاف، وتشجعهم
          على تعميق البُعد الفكري من خلال تحديد المشكلات، والعمل على إيجاد
          الحلول التي تُقدِّمها التخصصات داخل كل كلية، وتعمل على تخريج طلبة
          متميزين يتمتعون بمهارات تعلُّم مستدامة، مثل التفكير النقدي، حل
          المشكلات، العمل الجماعي، والاتصالات مما يتيح لهم ذلك فرص المنافسة
          بقوة، وتحقيق النجاح في أسواق العمل المختلفة. وباحتوائها على نخبة
          متميزة من أعضاء هيئة التدريس تسهم من خلال بحوثهم في تعزيز المعرفة
          لإيجاد حلول كفيلة بمعالجة المشكلات المعقدة وخلْق أفكار جديدة، وتطوير
          طرق التعليم وأساليبه ووجود حرم جامعي جديد ومتطور، ومجموعة كاملة من
          الخدمات التي توفر الدعم للطلبة، فإن الجامعة توفر بيئة تعليمية مثالية
          لطلبتها تطبق معايير الجودة المؤسساتية والتعليمية.
        </p>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-[35%]"
      ></img>
    </div>
  );
}

function VisionSection() {
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-[#0F4023] px-[16px] py-[32px] text-white sm:col-span-3 sm:items-start sm:gap-[28px] sm:px-[44px] sm:py-[54px] 1920:gap-[44px] 1920:px-[64px]">
      <h3 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
        الرؤيــة
      </h3>
      <h2 className="text-[32px] sm:text-[40px] 1920:text-[68px]">
        رؤية الجامعة
      </h2>
      <p className="mt-[20px] text-justify text-[16px] leading-[1.8em] text-[#F2F2F2]/70 sm:mt-auto sm:text-[18px]">
        تنطلق جامعة كلكامش من رؤية شاملة تلتزم بالتميز في نشر المعرفة وإنتاجها
        وخدمة المجتمع العراقي للارتقاء الى مصاف الجامعات المتقدمة محليا وإقليميا
        وعالميا.
      </p>
    </div>
  );
}

function MessageSection() {
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-primary px-[16px] py-[32px] text-white sm:col-span-4 sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[58px] 1920:px-[108px]">
      <h3 className="text-[18px] font-bold text-secondary sm:text-[22px] 1920:text-[28px]">
        الرسالــة
      </h3>

      <p className="text-[16px] leading-[1.8em] sm:text-[26px] 1920:text-[35px]">
        لجامعة كلكامش رسالة تعمد عن طريقها الى: تقديم برامج أكاديمية عالية
        الجودة في مختلف فروع المعرفة ودعم البحوث وتطويرها بما يسهم في تحقيق
        أهداف التنمية وتعزيز دور الجامعة في خدمة المجتمع العراقي وتهيأة بيئة
        جامعية داعمة للإنتاج والتميز.
      </p>
    </div>
  );
}

function QualitySection() {
  return (
    <div className="col-span-full mt-[64px] flex flex-col sm:mt-[180px] sm:flex-row">
      <div className="flex flex-col justify-center gap-[24px] py-[32px] pe-[16px] sm:w-1/2 sm:items-start sm:gap-[28px] sm:py-[64px] sm:pe-[64px] 1920:gap-[58px] 1920:pe-[108px]">
        <h2 className="text-[18px] font-bold sm:text-[32px] 1920:text-[48px]">
          سياسة الجودة
        </h2>
        <div className="flex flex-col gap-[14px] sm:gap-[24px]">
          {list.map((item, index) => (
            <div
              className="flex items-start gap-[12px] sm:gap-[24px]"
              key={index}
            >
              <div className="flex h-[31px] min-h-[31px] w-[31px] min-w-[31px] items-center justify-center rounded-full bg-secondary text-[16px] leading-none">
                {index + 1}
              </div>
              <span className="text-justify text-[16px] sm:text-[18px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-1/2"
      ></img>
    </div>
  );
}

function CardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      imgUrl: "/images/about/3.svg",
      title: "الهيكل التنظيمي",
      href: ORGANIZATIONAL_STRUCTURE_ROUTE,
    },
    {
      imgUrl: "/images/about/2.svg",
      title: "استراتيجية الجامعة",
      href: UNIVERSITY_STRATEGY_ROUTE,
    },
    {
      imgUrl: "/images/about/1.svg",
      title: "الاتفاقيات والشراكــــــات",
      href: AGREEMENTS_PARTNERSHIPS_ROUTE,
    },
  ];

  return (
    <div className="mt-[60px] sm:mt-[150px]">
      {/* <Section>
          <Wrapper>
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <ScrollableContainerUpperSection
                arrowButtonsClass="sm:hidden"
                containerRef={containerRef}
                title2="جامعة كلكامش"
                title="الخدمات الالكترونية"
                className="sm:w-fit sm:items-center"
              />
            </div>
          </Wrapper>
        </Section> */}
      <Section className="max-w-none">
        <Wrapper className="mx-0 max-w-none sm:mx-[16px]">
          <ScrollableCardsContainer
            ref={containerRef}
            className="grid grid-cols-[repeat(3,auto)] sm:w-full sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px]"
          >
            {services.map((service, index) => (
              <ScrollElement
                className="flex justify-center sm:w-auto"
                key={index}
              >
                <CommonCard
                  el={service}
                  index={index}
                  uniqueFirstCard={false}
                />
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
        </Wrapper>
      </Section>
    </div>
  );
}
