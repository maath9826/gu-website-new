import React from "react";
import { twMerge } from "tailwind-merge";
export default function Section({
  children,
  wrapperClass,
  as: Component = "div",
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> & {
  wrapperClass?: string;
  as?: React.ElementType;
}) {
  return (
    <Component className={`w-full flex justify-center ${wrapperClass ?? ""}`}>
      <div
        {...props}
        className={twMerge(
          "sm:max-w-[1440px] 1920:max-w-[1920px] w-full flex justify-center mx-auto max-w-[375px]",
          props.className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
