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
import useTextDirection from "../app/_hooks/useTextDirection";
import Cookies from "js-cookie";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("Header.localSwitcher");
  const pathname = usePathname();
  const router = useRouter();

  const dir = useTextDirection();

  const changeLocale = (newLocale: Locale) => {
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
        className="h-[22px] w-[34px] items-center justify-center rounded-[4px] border bg-transparent p-0 text-[12px] font-light leading-none text-white shadow-none outline-none ring-0 sm:p-0 sm:px-0"
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
