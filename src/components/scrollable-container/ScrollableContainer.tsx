import React from "react";
import { twMerge } from "tailwind-merge";

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode; wrapperClass?: string }
>(({ className, children, wrapperClass }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        "hide-scrollbar mx-auto max-w-screen-pure overflow-x-auto w-full",
        wrapperClass
      )}
    >
      <div className={twMerge("flex w-fit", className)}>{children}</div>
    </div>
  );
});

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

export { ScrollableCardsContainer };
