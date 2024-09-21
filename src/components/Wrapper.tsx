import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function Wrapper({
  children,
  mobileMaxWidth,
  ...props
}: ComponentProps & { mobileMaxWidth?: string }) {
  return (
    <div
      {...props}
      className={twMerge(
        `${mobileMaxWidth ? `max-w-${mobileMaxWidth}` : "max-w-mobile"} mx-[16px] w-full sm:max-w-desktop 1920:max-w-desktop-lg`,
        props.className,
      )}
    >
      {children}
    </div>
  );
}
