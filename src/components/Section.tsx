import React from "react";
import { twMerge } from "tailwind-merge";
export default function Section({
  children,
  wrapperClass,
  as: Component = "div",
  ref,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> & {
  wrapperClass?: string;
  as?: React.ElementType;
  ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <Component
      ref={ref}
      className={`flex w-full justify-center ${wrapperClass ?? ""}`}
    >
      <div
        {...props}
        className={twMerge(
          "mx-auto flex w-full max-w-[375px] justify-center sm:max-w-[1440px] 1920:max-w-[1920px]",
          props.className,
        )}
      >
        {children}
      </div>
    </Component>
  );
}
