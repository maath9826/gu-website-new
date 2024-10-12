import React, { useImperativeHandle, useRef } from "react";
import { twMerge } from "tailwind-merge";
import ScrollArrows from "../ScrollArrows";

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    wrapperClass?: string;
    arrowsAndWrapperContainerClass?: string;
    showArrows?: boolean;
  }
>(
  (
    {
      className,
      children,
      wrapperClass,
      showArrows,
      arrowsAndWrapperContainerClass,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // const innerRef = useRef<HTMLDivElement>(null);

    // useImperativeHandle(ref, () => innerRef.current!);

    return (
      <div className={twMerge("relative", arrowsAndWrapperContainerClass)}>
        {showArrows && (
          <ScrollArrows
            containerRef={containerRef!}
            useMultiples={true}
            wrapperClassName="absolute center-vertically z-10 w-full justify-between h-full"
            buttonWrapperClass="items-center flex justify-center h-full w-[57px] bg-black/30 sm:w-[302px]"
            className="h-[24px] w-[24px] !rounded-none text-[14px] sm:h-[48px] sm:w-[48px] sm:text-[24px] 1920:h-[60px] 1920:w-[60px] 1920:text-[32px]"
            isChevron={true}
          ></ScrollArrows>
        )}
        <div
          ref={ref ?? containerRef}
          className={twMerge(
            "hide-scrollbar relative mx-auto w-full max-w-screen-pure overflow-x-auto",
            wrapperClass,
          )}
        >
          <div className={twMerge("flex w-fit", className)}>{children}</div>
        </div>
      </div>
    );
  },
);

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

export { ScrollableCardsContainer };
