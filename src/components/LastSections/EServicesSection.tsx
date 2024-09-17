"use client";

import { useRef } from "react";
import ScrollableContainerUpperSection from "../ScrollableContainer/UpperSection";
import { ScrollableCardsContainer } from "../ScrollableContainer/ScrollableContainer";
import ScrollElement from "../ScrollElement";
import CommonCard from "@/app/_components/CardsSection/CommonCard";
import Wrapper from "../Wrapper";
import Section from "../Section";

export default function EServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      imgUrl: "/images/common/cards/academic-classifications.svg",
      title: "بوابة الطالب",
      href: "/",
    },
    {
      imgUrl: "/images/common/cards/news.svg",
      title: "بوابة التدريسين",
      href: "/",
    },
    {
      imgUrl: "/images/common/cards/about.svg",
      title: "بوابة الخريجين",
      href: "/",
    },
  ];

  return (
    <div className="mt-[60px] sm:mt-[150px]">
      <Section>
        <Wrapper>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <ScrollableContainerUpperSection
              arrowButtonsClass="sm:hidden"
              containerRef={containerRef}
              title2="جامعة كلكامش"
              title="الخدمات الالكترونية"
              className="sm:items-center sm:w-fit"
            />
          </div>
        </Wrapper>
      </Section>
      <Section className="max-w-none">
        <Wrapper className="max-w-none mx-0 sm:mx-[16px]">
          <ScrollableCardsContainer
            ref={containerRef}
            className="grid grid-cols-[repeat(3,auto)] sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px] sm:w-full "
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
