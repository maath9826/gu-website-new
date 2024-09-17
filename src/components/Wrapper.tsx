import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function Wrapper({ children, ...props }: ComponentProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "max-w-mobile sm:max-w-desktop 1920:max-w-desktop-lg w-full mx-[16px]",
        props.className
      )}
    >
      {children}
    </div>
  );
}
