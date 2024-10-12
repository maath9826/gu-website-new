import { RefObject, useCallback, useState } from "react";

function useScrollControl({
  containerRef,
  useMultiples = false,
  baseScrollAmount,
  resetTimer,
}: {
  containerRef: RefObject<HTMLDivElement>;
  useMultiples?: boolean;
  baseScrollAmount?: number;
  resetTimer?: () => void;
}) {
  const [canScrollEnd, setCanScrollEnd] = useState(false);
  const [canScrollStart, setCanScrollStart] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const baseScrollAmountFallback = 150;

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const isRTL = getComputedStyle(containerRef.current).direction === "rtl";

      if (isRTL) {
        setCanScrollEnd(Math.abs(scrollLeft) < scrollWidth - clientWidth);
        setCanScrollStart(Math.abs(scrollLeft) > 0);
      } else {
        setCanScrollStart(Math.abs(scrollLeft) < scrollWidth - clientWidth);
        setCanScrollEnd(Math.abs(scrollLeft) > 0);
      }
      setLastScrollPosition(Math.abs(scrollLeft));
    }
  }, [containerRef]);

  const scroll = useCallback(
    ({ direction, isLTR }: ScrollParams) => {
      if (containerRef.current) {
        if (resetTimer) resetTimer();

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const maxScroll = scrollWidth - clientWidth;

        let targetScroll;

        if (useMultiples) {
          const currentMultiple = Math.round(
            Math.abs(scrollLeft) /
              (baseScrollAmount ?? containerRef.current.clientWidth),
          );

          targetScroll =
            (currentMultiple +
              (isLTR
                ? direction === "right"
                  ? 1
                  : -1
                : direction === "left"
                  ? 1
                  : -1)) *
            (baseScrollAmount ?? containerRef.current.clientWidth);
          // (baseScrollAmount * (isLTR ? -1 : 1));

          targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

          containerRef.current!.scrollTo({
            left: targetScroll * (isLTR ? 1 : -1),
            behavior: "smooth",
          });
        } else {
          containerRef.current.scrollBy({
            left:
              direction === "left"
                ? -(baseScrollAmount ?? baseScrollAmountFallback)
                : (baseScrollAmount ?? baseScrollAmountFallback),
            behavior: "smooth",
          });
        }
      }
    },
    [containerRef, useMultiples, baseScrollAmount],
  );

  const resetScrollPosition = useCallback(() => {
    if (containerRef.current) {
      containerRef.current!.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [containerRef, useMultiples, baseScrollAmount]);

  return {
    canScrollEnd,
    canScrollStart,
    containerRef,
    handleScroll,
    scroll,
    resetScrollPosition,
    lastScrollPosition,
  };
}

type ScrollParams = {
  direction: "right" | "left";
  isLTR?: boolean;
};

export default useScrollControl;
