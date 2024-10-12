"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { EService } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";
import CommonCard from "@/app/_components/CardsSection/CommonCard";
import { getImageUrl } from "@/lib/utils";
import { usePathname } from "@/i18n.config";
import { CONTACT_ROUTE } from "@/lib/paths";

interface EServicesSectionProps {
  eServices: EService[] | undefined;
}

const EServicesSection: React.FC<EServicesSectionProps> = ({ eServices }) => {
  const pathname = usePathname();
  const t = useTranslations("Common");
  const tHome = useTranslations("Home");
  const containerRef = useRef<HTMLDivElement>(null);

  if (!eServices || eServices.length === 0) {
    return null;
  }

  return (
    pathname !== CONTACT_ROUTE && (
      <div className="mt-[60px] sm:mt-[150px]">
        <Section>
          <Wrapper>
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <ScrollableContainerUpperSection
                arrowButtonsClass="sm:hidden"
                containerRef={containerRef}
                title2={t("gilgameshUniversity")}
                title={tHome("eServices")}
                className="sm:w-fit sm:items-center"
              />
            </div>
          </Wrapper>
        </Section>
        <Section className="max-w-none">
          <Wrapper className="mx-0 max-w-none sm:mx-[16px]">
            <ScrollableCardsContainer
              ref={containerRef}
              className="grid grid-cols-[repeat(3,auto)] sm:w-full sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px]"
            >
              {eServices.map((service, index) => (
                <ScrollElement
                  className="flex justify-center sm:w-auto"
                  key={index}
                >
                  <CommonCard
                    el={{
                      href: service.link,
                      imgUrl: getImageUrl(service.icon),
                      title: service.title,
                    }}
                    index={index}
                    uniqueFirstCard={false}
                  />
                </ScrollElement>
              ))}
            </ScrollableCardsContainer>
          </Wrapper>
        </Section>
      </div>
    )
  );
};

export default EServicesSection;
