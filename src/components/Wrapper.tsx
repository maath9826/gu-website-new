import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function Wrapper({ children, ...props }: ComponentProps) {
  return (
    <div
      {...props}
      className={twMerge(
        `mx-[16px] w-full max-w-mobile sm:max-w-desktop 1920:max-w-desktop-lg`,
        props.className,
      )}
    >
      {children}
    </div>
  );
}
