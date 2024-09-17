import useScrollControl from "@/app/_hooks/useScrollControl";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import useTextDirection from "@/app/_hooks/useTextDirection";

export default function ScrollArrows({
  containerRef,
  scrollAmount,
  useMultiples = false,
  resetTimer,
  wrapperClassName,
  className,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollAmount?: number;
  useMultiples?: boolean;
  resetTimer?: () => void;
  className?: string;
  wrapperClassName?: string;
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
        "flex gap-[12px] sm:gap-[9px] ltr:flex-row-reverse rtl:flex-row",
        wrapperClassName
      )}
    >
      <Button
        variant={"secondary"}
        className={twMerge(
          "scroll-button",
          !canScrollStart && "disabled-scroll-button",
          className
        )}
        size="icon"
        onClick={() => scroll({ direction: "right", isLTR: dir == "ltr" })}
      >
        <i className="ri-arrow-right-line"></i>
      </Button>
      <Button
        variant={"secondary"}
        className={twMerge(
          "scroll-button",
          !canScrollEnd && "disabled-scroll-button",
          className
        )}
        size="icon"
        onClick={() => scroll({ direction: "left", isLTR: dir == "ltr" })}
      >
        <i className="ri-arrow-left-line"></i>
      </Button>
    </div>
  );
}
