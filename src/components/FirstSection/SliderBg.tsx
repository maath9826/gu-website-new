"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ScrollArrows from "@/components/ScrollArrows";
import { SliderElement } from "@/lib/types";
import useScrollControl from "@/app/_hooks/useScrollControl";
import useTextDirection from "../../app/_hooks/useTextDirection";

export default function SliderBg() {
  return (
    <ScrollableCardsContainer
      translatedNewsItems={[
        {
          image: "/images/hero-bg.jpg",
          title: "Innovative Solutions",
          subTitle:
            "Transforming ideas into reality with cutting-edge technology",
        },
        {
          image: "/images/hero-bg.jpg",
          title: "Expert Team",
          subTitle: "Dedicated professionals committed to excellence",
        },
        {
          image: "/images/hero-bg.jpg",
          title: "Global Reach",
          subTitle: "Connecting businesses across borders",
        },
        {
          image: "/images/hero-bg.jpg",
          title: "Sustainable Future",
          subTitle: "Driving growth with eco-friendly practices",
        },
      ]}
    />
  );
}

const ImageSection = () => {
  return (
    <div className="relative w-screen">
      <img
        src="/images/hero-bg.jpg"
        alt="hero bg"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full absolute top-0 bg-black/70"></div>
    </div>
  );
};

function ScrollableCardsContainer({
  translatedNewsItems,
}: {
  translatedNewsItems: SliderElement[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dir = useTextDirection();
  const [scrollAmount, setScrollAmount] = useState<number>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { scroll, handleScroll, resetScrollPosition } = useScrollControl({
    containerRef,
    useMultiples: true,
    baseScrollAmount: scrollAmount,
  });

  useEffect(() => {
    setScrollAmount(containerRef.current?.clientWidth);
  }, [containerRef.current]);

  const autoSlide = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const isAtEnd = Math.abs(scrollLeft) >= scrollWidth - clientWidth;

      if (isAtEnd) resetScrollPosition();
      else
        scroll({
          direction: dir == "ltr" ? "right" : "left",
          isLTR: dir == "ltr",
        });
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(autoSlide, 5000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [scrollAmount]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="min-h-[297px] sm:min-h-[560px] 1920:min-h-[952px] relative flex justify-center">
      <TextSection containerRef={containerRef} resetTimer={resetInterval} />
      <div
        ref={containerRef}
        className={twMerge(
          "mx-auto overflow-x-auto  h-full  w-screen absolute navbar-inclusive-background",
          "hide-scrollbar"
        )}
      >
        <div className="flex w-fit h-full">
          {translatedNewsItems.map((newsItem, index) => (
            <ImageSection key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TextSection({
  containerRef,
  resetTimer,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  resetTimer: () => void;
}) {
  const [scrollAmount, setScrollAmount] = useState<number>();

  useEffect(() => {
    setScrollAmount(containerRef.current?.clientWidth);
  }, [containerRef.current]);

  return (
    <div className="relative z-30 sm:max-w-desktop 1920:max-w-desktop-lg w-full sm:mx-auto sm:px-[30px] pt-[51px] sm:pt-[116px] 1920:pt-[318px] text-start max-w-mobile">
      <ScrollArrows
        containerRef={containerRef}
        scrollAmount={scrollAmount}
        useMultiples={true}
        resetTimer={resetTimer}
        className="slider-bg-arrows"
      />

      <div className="max-w-[654px] 1920:max-w-[789px] mt-[30px] sm:mt-[24px] 1920:mt-[34px]">
        <h3 className="text-[16px] leading-[22px] sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px] text-white/70  font-light">
          التجربة العلمية
        </h3>

        <h1 className="text-[25px] leading-[30px] sm:text-[48px] sm:leading-[54px] 1920:text-[60px] 1920:leading-[72px] text-white mt-[9px] sm:mt-[22px] 1920:mt-[32px] line-clamp-3">
          عراقنا.. تاريخ.. حضارات مستقبل واعد عراقنا.. تاريخ.. حضارات مستقبل
          واعد
        </h1>
      </div>
    </div>
  );
}
