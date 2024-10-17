"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, Locale } from "@/i18n.config";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import useTextDirection from "@/app/_hooks/useTextDirection";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCommonStore from "@/lib/zustand/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems, topbarNavItems } from "@/lib/data";
import { MenuItem, RawContact } from "@/lib/types";
import { twMerge } from "tailwind-merge";
import Section from "@/components/Section";
import NavElements from "../../News/NavElements";

interface NavbarClientProps {
  contactInfo: RawContact | undefined;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ contactInfo }) => {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;

  return (
    <Section className="max-w-none sm:max-w-[1440px] 1920:max-w-[1920px]">
      <nav className="flex h-[77px] w-full flex-row-reverse items-center justify-between bg-transparent text-white sm:flex-row sm:px-[60px] 1920:px-[136px]">
        <div className="flex h-full items-center gap-[40px] sm:flex sm:w-full sm:justify-between">
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 hover:opacity-70 sm:static sm:translate-x-0"
          >
            <img
              src={`/images/logo.png`}
              className="h-[47px] 1920:h-[55px]"
              alt={t("appTitle")}
            />
          </Link>
          <div className="hidden h-full sm:block">
            <NavElements />
          </div>
          <SocialMediaLinks contactInfo={contactInfo} />
        </div>
        <NavDrawer contactInfo={contactInfo} />
      </nav>
    </Section>
  );
};

const SocialMediaLinks: React.FC<{ contactInfo: RawContact | undefined }> = ({
  contactInfo,
}) => {
  if (!contactInfo) return null;

  const socialMedia = [
    { icon: "ri-instagram-line", url: contactInfo.instagram },
    { icon: "ri-facebook-circle-fill", url: contactInfo.facebook },
    { icon: "ri-linkedin-box-fill", url: contactInfo.linkedin },
    { icon: "ri-youtube-fill", url: contactInfo.youtube },
  ];

  return (
    <div className="hidden gap-[24px] sm:flex">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative leading-none transition clickable-area hover:text-secondary hover:opacity-70"
        >
          <i className={`${social.icon} text-[20px]`}></i>
        </Link>
      ))}
    </div>
  );
};

function NavDrawer({ contactInfo }: { contactInfo: RawContact | undefined }) {
  const { isDrawerVisible, toggleDrawer } = useCommonStore();
  const locale = useLocale() as Locale;
  const dir = useTextDirection();
  const tNavLinks = useTranslations("Header.navLinks");
  const sharedPagesT = useTranslations("SharedPages");
  const t = useTranslations();

  const renderMenuItem = (item: MenuItem, index: number, depth: number = 0) => {
    const paddingStart = 16 * depth + "px";

    if (!item.items || item.items.length === 0) {
      return item.path ? (
        <Link
          key={index}
          href={item.path}
          className="block py-4 text-start text-base font-medium"
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
          onClick={() => toggleDrawer(false)}
        >
          {item.label}
        </Link>
      ) : (
        <p
          key={index}
          className="block py-4 text-start text-base font-medium"
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
        >
          {item.label}
        </p>
      );
    }

    return (
      <AccordionItem
        value={`item-${depth}-${index}`}
        key={index}
        className="w-full"
      >
        <AccordionTrigger
          className={twMerge("text-base font-medium")}
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
        >
          {item.label}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start">
          {item.items.map((subItem, subIndex) =>
            renderMenuItem(subItem, subIndex, depth + 1),
          )}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div className="flex sm:hidden">
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
        <DrawerContent className="right-0 start-auto top-0 mt-0 h-screen min-w-full rounded-none border-0 bg-primary px-[25px] text-white">
          <div className="flex justify-between border-b border-white/30 py-6">
            <DrawerClose onClick={() => toggleDrawer(false)} className="">
              <i className="ri-close-large-line"></i>
            </DrawerClose>
            <SocialMediaLinks contactInfo={contactInfo}></SocialMediaLinks>
            <LocaleSwitcher locale={locale} />
          </div>
          <ScrollArea className="h-screen" dir={dir}>
            <div className="mx-auto flex w-full flex-col gap-6 p-5">
              <Accordion
                type="multiple"
                className="flex w-full flex-col items-start"
              >
                {navItems(tNavLinks, sharedPagesT).map((item, index) =>
                  renderMenuItem(item, index),
                )}
              </Accordion>
              <div className="h-[1px] w-full bg-white/30"></div>
              <Accordion
                type="multiple"
                className="flex w-full flex-col items-start"
              >
                {topbarNavItems(t).map((item, index) =>
                  renderMenuItem(item, index),
                )}
              </Accordion>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarClient;
