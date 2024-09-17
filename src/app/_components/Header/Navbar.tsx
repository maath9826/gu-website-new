"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import useTextDirection from "@/app/_hooks/useTextDirection";
import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";

import NavElements from "../News/NavElements";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCommonStore from "@/lib/zustand/common";
import Section from "../../../components/Section";

export default function Navbar() {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;

  return (
    <Section className="sm:max-w-[1440px] 1920:max-w-[1920px]  max-w-none">
      <nav className="flex w-full items-center justify-between bg-transparent  flex-row-reverse sm:flex-row text-white  h-[77px]  sm:px-[60px] 1920:px-[136px]">
        <div className="flex gap-[40px] items-center sm:flex sm:justify-between sm:w-full h-full">
          <Link
            href="/"
            className="hover:opacity-70 sm:static absolute left-1/2 -translate-x-1/2 sm:translate-x-0"
          >
            <img
              src={`/images/logo.png`}
              className="h-[47px] 1920:h-[55px]"
              alt={t("appTitle")}
            />
          </Link>
          {/* desktop only  */}
          <div className="hidden sm:block h-full">
            <NavElements />
          </div>

          <div className="hidden sm:flex gap-[24px]">
            {socialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:opacity-70 hover:text-secondary transition clickable-area leading-none"
              >
                <i className={`${social.icon} text-[20px]`}></i>
              </Link>
            ))}
          </div>
          {/* /desktop only  */}
        </div>

        {/*  mobile only  */}
        <NavDrawer></NavDrawer>
        {/*  /mobile only  */}
      </nav>
    </Section>
  );
}

function NavDrawer() {
  const { isDrawerVisible: isDrawerVisible, toggleDrawer } = useCommonStore();
  const locale = useLocale() as Locale;

  const dir = useTextDirection();

  return (
    <div className="sm:hidden flex">
      <Drawer
        direction="right"
        open={isDrawerVisible}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => toggleDrawer(true)}
            size={"icon"}
            className="px-[16px]"
          >
            <i className="ri-menu-line text-[28px] !font-normal"></i>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="right-0 start-auto top-0 mt-0 h-screen  min-w-full rounded-none bg-primary border-0 text-white">
          <DrawerClose
            onClick={() => toggleDrawer(false)}
            className="absolute top-[25px] right-[25px] z-10"
          >
            <i className="ri-close-large-line"></i>
          </DrawerClose>
          <DrawerTitle></DrawerTitle>
          <ScrollArea className="h-screen" dir={dir}>
            <div className="mx-auto w-full p-5">
              <NavElements />
              <div className="mt-[35px] flex justify-center">
                <LocaleSwitcher locale={locale} />
              </div>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

const socialMedia = [
  {
    url: "https://www.instagram.com",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.facebook.com",
    icon: "ri-facebook-circle-fill",
  },
  {
    url: "https://www.linkedin.com",
    icon: "ri-linkedin-box-fill",
  },
  {
    url: "https://www.youtube.com",
    icon: "ri-youtube-fill",
  },
];
