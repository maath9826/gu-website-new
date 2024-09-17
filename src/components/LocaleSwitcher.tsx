"use client";

import {
  DelayedSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import useTextDirection from "../app/_hooks/useTextDirection";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("Header.localSwitcher");
  const pathname = usePathname();
  const router = useRouter();

  const dir = useTextDirection();

  const changeLocale = (newLocale: Locale) => {
    // console.log("changeLocale");

    router.replace(pathname, { locale: newLocale });
  };

  // console.log(locale);

  return (
    <DelayedSelect dir={dir} onValueChange={changeLocale} defaultValue={locale}>
      <SelectTrigger
        icon={
          <></>
          // <i className="fa-solid fa-chevron-down text-[16px] text-black/20"></i>
        }
        className="text-[12px] leading-none shadow-none outline-none ring-0  sm:p-0 sm:px-0 bg-transparent  p-0 font-light w-[34px] h-[22px] border rounded-[4px] items-center justify-center text-white "
        style={{ boxShadow: "none" }}
      >
        <SelectValue placeholder={t("select a language")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem
            key={loc}
            value={loc}
            onClick={(e) => {
              console.log("sdasdsad");
            }}
          >
            {loc.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </DelayedSelect>
  );
}
