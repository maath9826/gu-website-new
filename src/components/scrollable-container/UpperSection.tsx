"use client";

import { useEffect, useState } from "react";
import Section from "../Section";
import ScrollArrows from "../ScrollArrows";
import { twMerge } from "tailwind-merge";
import TitlesWrapper from "../TitlesWrapper";

export default function ScrollableContainerUpperSection({
  containerRef,
  hideArrows = false,
  title,
  title2,
  titleClass,
  className,
  arrowButtonsClass,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  hideArrows?: boolean;
  title: string;
  title2?: string;
  titleClass?: string;
  className?: string;
  arrowButtonsClass?: string;
}) {
  const [scrollAmount, setScrollAmount] = useState<number>();

  useEffect(() => {
    if (containerRef.current) setScrollAmount(containerRef.current.clientWidth);
  }, [containerRef]);

  return (
    <TitlesWrapper className={twMerge("items-start", className)}>
      {title2 && <h3 className="title-sm">{title2}</h3>}

      <div className="flex items-center justify-between w-full">
        <h5 className={twMerge("title", titleClass)}>{title}</h5>
        {!hideArrows && (
          <ScrollArrows
            containerRef={containerRef}
            useMultiples={true}
            scrollAmount={scrollAmount}
            wrapperClassName="gap-[8px]"
            className={arrowButtonsClass}
          />
        )}
      </div>
    </TitlesWrapper>
  );
}
