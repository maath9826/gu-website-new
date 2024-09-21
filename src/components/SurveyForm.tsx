import React from "react";
import { useTranslations } from "next-intl";
import { Input, InputProps } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { twMerge } from "tailwind-merge";

interface SurveyFormProps {
  title: string;
}

export default function SurveyForm({ title }: SurveyFormProps) {
  const t = useTranslations("Survey");

  const inputFields = [
    { name: "fullName", label: t("fullName"), type: "text", fullWidth: true },
    { name: "email", label: t("email"), type: "email" },
    { name: "phone", label: t("phone"), type: "tel" },
    { name: "college", label: t("college"), type: "text" },
    { name: "department", label: t("department"), type: "text" },
  ];

  return (
    <Section className="mt-[60px] bg-white py-[40px] sm:mt-[150px] sm:max-w-[1225px] sm:py-[87px] 1920:mt-[180px] 1920:max-w-[1316px]">
      <Wrapper className="max-w-none sm:max-w-[740px] 1920:max-w-[740px]">
        <h1 className="mb-[30px] text-center text-[28px] font-medium text-primary sm:mb-[60px] sm:text-[38px]">
          {title}
        </h1>
        <form className="grid grid-cols-1 gap-y-[28px] sm:grid-cols-2 sm:gap-x-[21px] sm:gap-y-[30px] 1920:gap-x-[28px] 1920:gap-y-[39px]">
          {inputFields.map((field) => (
            <div
              key={field.name}
              className={`flex flex-col gap-[18px] sm:gap-[10px] 1920:gap-[18px] ${
                field.fullWidth ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <label
                htmlFor={field.name}
                className="text-right text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
              >
                {field.label}
              </label>
              <InputWithBg
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={t("writeHere")}
              />
            </div>
          ))}
          <div className="flex flex-col gap-[18px] sm:col-span-2 sm:gap-[10px] 1920:gap-[18px]">
            <label
              htmlFor="message"
              className="text-right text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
            >
              {t("message")}
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("writeYourMessage")}
              className="min-h-[280px] bg-[#EFEFEF]"
            />
          </div>
          <div className="flex justify-end sm:col-span-2">
            <Button type="submit" className="!w-full">
              {t("send")}
            </Button>
          </div>
        </form>
      </Wrapper>
    </Section>
  );
}

const InputWithBg = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      ref={ref}
      className={twMerge("bg-[#EFEFEF]", className)}
      {...props}
    />
  ),
);
