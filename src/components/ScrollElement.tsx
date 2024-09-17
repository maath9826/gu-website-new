import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function ScrollElement({ children, ...props }: ComponentProps) {
  return (
    <div className={twMerge("w-screen-pure", props.className)}>{children}</div>
  );
}
