// src/components/ui/textarea.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[180px] w-full resize-none  bg-background px-[14px] py-[18px] text-sm focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50  ring-secondary ring-offset-secondary focus-visible:ring-secondary",
          "bg-white rounded-none text-primary leading-[1.35em] placeholder-primary/40",
          "h-[60px] text-[14px]",
          "sm:h-[60px] sm:text-[14px]",
          "1920:h-[61px] 1920:text-[16px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
