// src/components/ui/input.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffixIcon?: React.ReactNode;
  inputClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffixIcon, inputClass, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative bg-white flex focus-within:ring-2 ring-offset-secondary focus-within:ring-secondary ",
          className
        )}
      >
        <input
          type={type}
          className={cn(
            "flex h-[52px] w-full  py-2 bg-transparent file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 px-[16px] text-sm  rounded-full",
            "rounded-none text-primary leading-[1.35em] placeholder-primary/40",
            "h-[60px] text-[14px]",
            "sm:h-[46px] sm:text-[14px]",
            "1920:h-[61px] 1920:text-[16px] border-0",
            inputClass
          )}
          ref={ref}
          {...props}
        />
        {suffixIcon && (
          <span className="flex items-center justify-center pointer-events-none">
            {suffixIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
