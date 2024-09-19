"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    openIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    iconSize?: number;
    rotationAmount?: number;
  }
>(
  (
    {
      className,
      children,
      openIcon,
      closeIcon,
      iconSize = 28,
      rotationAmount = 180,
      ...props
    },
    ref,
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className,
        )}
        {...props}
      >
        {children}
        {openIcon && closeIcon ? (
          <div
            className={twMerge(
              "relative origin-center transition-transform duration-300 ease-in-out",
              "group-data-[state=open]:rotate-custom",
            )}
            style={
              {
                width: iconSize,
                height: iconSize,
                "--rotation-amount": `${rotationAmount}deg`,
              } as React.CSSProperties
            }
          >
            <div className="delay-[0.25s] absolute inset-0 flex items-center justify-center transition-opacity duration-150 group-data-[state=open]:opacity-0">
              {closeIcon}
            </div>
            <div className="delay-[0.25s] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-data-[state=open]:opacity-100">
              {openIcon}
            </div>
          </div>
        ) : (
          <ChevronDown className="h-7 w-7 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
