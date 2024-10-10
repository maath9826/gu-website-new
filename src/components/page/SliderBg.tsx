"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ScrollArrows from "@/components/ScrollArrows";
import { NewsItem } from "@/lib/types";
import useScrollControl from "@/app/_hooks/useScrollControl";
import useTextDirection from "../../app/_hooks/useTextDirection";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

interface SliderBgProps {
  newsItems: NewsItem[];
}

export default function SliderBg({ newsItems }: SliderBgProps) {
  return <ScrollableCardsContainer newsItems={newsItems} />;
}

const ImageSection = ({ image }: { image: string }) => {
  return (
    <div className="relative w-screen">
      <Image
        placeholder="blur"
        blurDataURL={getImageUrl(image)}
        fill
        src={getImageUrl(image)}
        alt="hero bg"
        priority
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/70"></div>
    </div>
  );
};

function ScrollableCardsContainer({ newsItems }: { newsItems: NewsItem[] }) {
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
    <div className="relative flex min-h-[297px] justify-center sm:min-h-[560px] 1920:min-h-[952px]">
      <TextSection
        containerRef={containerRef}
        resetTimer={resetInterval}
        newsItems={newsItems}
      />
      <div
        ref={containerRef}
        className={twMerge(
          "navbar-inclusive-background absolute mx-auto h-full w-screen overflow-x-auto",
          "hide-scrollbar",
        )}
      >
        <div className="flex h-full w-fit">
          {newsItems.map((newsItem, index) => (
            <ImageSection key={index} image={newsItem.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TextSection({
  containerRef,
  resetTimer,
  newsItems,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  resetTimer: () => void;
  newsItems: NewsItem[];
}) {
  const [scrollAmount, setScrollAmount] = useState<number>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setScrollAmount(containerRef.current?.clientWidth);
  }, [containerRef.current]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(
          containerRef.current.scrollLeft / scrollAmount!,
        );
        setCurrentIndex(Math.abs(index));
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [scrollAmount]);

  const currentNews = newsItems[currentIndex];

  return (
    <div className="relative z-30 w-full max-w-mobile pt-[51px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[116px] 1920:max-w-desktop-lg 1920:pt-[318px]">
      <ScrollArrows
        containerRef={containerRef}
        scrollAmount={scrollAmount}
        useMultiples={true}
        resetTimer={resetTimer}
        className="slider-bg-arrows"
      />

      <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
        <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
          {currentNews?.description}
        </h3>

        <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
          {currentNews?.title}
        </h1>
      </div>
    </div>
  );
}

// "use client";

// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";
// import ScrollArrows from "@/components/ScrollArrows";
// import { NewsItem } from "@/lib/types";
// import useScrollControl from "@/app/_hooks/useScrollControl";
// import useTextDirection from "../../app/_hooks/useTextDirection";
// import { getImageUrl } from "@/lib/utils";
// import Image from "next/image";
// import DynamicImage, { PlaceholderImgData } from "../DynamicImage";

// interface HomeSliderData {
//   newsItems: NewsItem[];
//   placeholdersData: PlaceholderImgData[];
// }

// export default function SliderBg({
//   homeSliderData,
// }: {
//   homeSliderData: HomeSliderData;
// }) {
//   return <ScrollableCardsContainer homeSliderData={homeSliderData} />;
// }

// const ImageSection = ({
//   placeholderData,
// }: {
//   placeholderData: PlaceholderImgData;
// }) => {
//   return (
//     <div className="relative w-screen">
//       <DynamicImage
//         placeholderData={placeholderData}
//         alt="hero bg"
//         priority
//         className="h-full w-full object-cover"
//       />

//       <div className="absolute top-0 h-full w-full bg-black/70"></div>
//     </div>
//   );
// };

// function ScrollableCardsContainer({
//   homeSliderData,
// }: {
//   homeSliderData: HomeSliderData;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const dir = useTextDirection();
//   const [scrollAmount, setScrollAmount] = useState<number>();
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const { scroll, handleScroll, resetScrollPosition } = useScrollControl({
//     containerRef,
//     useMultiples: true,
//     baseScrollAmount: scrollAmount,
//   });

//   useEffect(() => {
//     setScrollAmount(containerRef.current?.clientWidth);
//   }, [containerRef.current]);

//   const autoSlide = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       const isAtEnd = Math.abs(scrollLeft) >= scrollWidth - clientWidth;

//       if (isAtEnd) resetScrollPosition();
//       else
//         scroll({
//           direction: dir == "ltr" ? "right" : "left",
//           isLTR: dir == "ltr",
//         });
//     }
//   };

//   const resetInterval = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(autoSlide, 5000);
//   };

//   useEffect(() => {
//     resetInterval();

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [scrollAmount]);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [handleScroll]);

//   return (
//     <div className="relative flex min-h-[297px] justify-center sm:min-h-[560px] 1920:min-h-[952px]">
//       <TextSection
//         containerRef={containerRef}
//         resetTimer={resetInterval}
//         newsItems={homeSliderData.newsItems}
//       />
//       <div
//         ref={containerRef}
//         className={twMerge(
//           "navbar-inclusive-background absolute mx-auto h-full w-screen overflow-x-auto",
//           "hide-scrollbar",
//         )}
//       >
//         <div className="flex h-full w-fit">
//           {homeSliderData.newsItems.map((newsItem, index) => (
//             <ImageSection
//               key={index}
//               placeholderData={homeSliderData.placeholdersData[index]}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function TextSection({
//   containerRef,
//   resetTimer,
//   newsItems,
// }: {
//   containerRef: React.RefObject<HTMLDivElement>;
//   resetTimer: () => void;
//   newsItems: NewsItem[];
// }) {
//   const [scrollAmount, setScrollAmount] = useState<number>();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setScrollAmount(containerRef.current?.clientWidth);
//   }, [containerRef.current]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const index = Math.round(
//           containerRef.current.scrollLeft / scrollAmount!,
//         );
//         setCurrentIndex(Math.abs(index));
//       }
//     };

//     containerRef.current?.addEventListener("scroll", handleScroll);

//     return () =>
//       containerRef.current?.removeEventListener("scroll", handleScroll);
//   }, [scrollAmount]);

//   const currentNews = newsItems[currentIndex];

//   return (
//     <div className="relative z-30 w-full max-w-mobile pt-[51px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[116px] 1920:max-w-desktop-lg 1920:pt-[318px]">
//       <ScrollArrows
//         containerRef={containerRef}
//         scrollAmount={scrollAmount}
//         useMultiples={true}
//         resetTimer={resetTimer}
//         className="slider-bg-arrows"
//       />

//       <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
//         <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
//           {currentNews?.description}
//         </h3>

//         <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
//           {currentNews?.title}
//         </h1>
//       </div>
//     </div>
//   );
// }
