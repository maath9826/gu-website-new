import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

interface ScrollArrowButtonProps {
  direction: "left" | "right";
  canScroll: boolean;
  onClick: () => void;
  className?: string;
  wrapperClass?: string;
  isChevron?: boolean;
}

const ScrollArrowButton: React.FC<ScrollArrowButtonProps> = ({
  direction,
  canScroll,
  onClick,
  className,
  wrapperClass,
  isChevron,
}) => {
  return (
    <div className={wrapperClass}>
      <Button
        variant="secondary"
        className={twMerge(
          "h-[31px] w-[31px] rounded-full text-[18px] text-foreground flippable sm:h-[36px] sm:w-[36px] sm:text-[18px] 1920:h-[48px] 1920:w-[48px] 1920:text-[24px]",
          !canScroll && "disabled-scroll-button",
          className,
        )}
        size="icon"
        onClick={onClick}
      >
        <i
          className={
            isChevron
              ? `ri-arrow-${direction}-s-line`
              : `ri-arrow-${direction}-line`
          }
        ></i>
      </Button>
    </div>
  );
};

export default ScrollArrowButton;
