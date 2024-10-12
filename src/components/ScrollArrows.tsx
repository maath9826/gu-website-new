import useScrollControl from "@/app/_hooks/useScrollControl";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import useTextDirection from "@/app/_hooks/useTextDirection";
import ScrollArrowButton from "./ScrollArrowButton";

export default function ScrollArrows({
  containerRef,
  scrollAmount,
  useMultiples = false,
  resetTimer,
  wrapperClassName,
  className,
  buttonWrapperClass,
  isChevron,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollAmount?: number;
  useMultiples?: boolean;
  resetTimer?: () => void;
  className?: string;
  wrapperClassName?: string;
  buttonWrapperClass?: string;
  isChevron?: boolean;
}) {
  const dir = useTextDirection();

  const { canScrollEnd, canScrollStart, handleScroll, scroll } =
    useScrollControl({
      containerRef,
      useMultiples,
      baseScrollAmount: scrollAmount,
      resetTimer,
    });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial scroll state
    }
    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [containerRef, handleScroll]);

  return (
    <div
      className={twMerge(
        "flex flex-row justify-start gap-[12px] sm:gap-[9px]",
        wrapperClassName,
      )}
    >
      <ScrollArrowButton
        isChevron={isChevron}
        wrapperClass={buttonWrapperClass}
        direction="right"
        canScroll={canScrollStart}
        onClick={() => scroll({ direction: "right", isLTR: dir == "ltr" })}
        className={className}
      />

      <ScrollArrowButton
        isChevron={isChevron}
        wrapperClass={buttonWrapperClass}
        direction="left"
        canScroll={canScrollEnd}
        onClick={() => scroll({ direction: "left", isLTR: dir == "ltr" })}
        className={className}
      />
    </div>
  );
}
