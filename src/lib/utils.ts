import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  SLIDER_BG_ROUTES,
  IMAGE_BG_ROUTES,
  CENTERIZED_TITLE_ROUTES,
  TITLE_WITH_ACTIONS_ROUTES,
  TITLE_AND_IMAGE_ROUTES,
} from "./paths";
import SliderBg from "@/components/FirstSection/SliderBg";
import ImageBg from "@/components/FirstSection/ImageBg";
import CenterizedTitle from "@/components/FirstSection/FirstTitleSection/CenterizedTitle";
import TitleBg from "@/components/FirstSection/FirstTitleSection/TitleBg";
import React, { RefObject } from "react";
import TitleAndImage from "@/components/FirstSection/TitleAndImage";
import { TextDirection } from "@/app/_hooks/useTextDirection";
import { IReactToPrintProps } from "react-to-print";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shareCurrentURL() {
  if (navigator.share) {
    navigator
      .share({
        title: "مشاركة الرابط",
        url: window.location.href,
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed:", error));
  } else {
    console.log("Web Share API not supported in this browser");
    // You might want to provide a fallback sharing method here
  }
}

export const routes = [
  { key: "home", path: HOME_ROUTE },
  // { key: "about", path: ABOUT_ROUTE },
  // { key: "services", path: SERVICES_ROUTE },
  // { key: "branches", path: BRANCHES_ROUTE },
  // { key: "jobs", path: JOBS_ROUTE },
  { key: "contact", path: CONTACT_ROUTE },
  // { key: "joinUs", path: JOIN_US_ROUTE },
  { key: "news", path: NEWS_ROUTE, includeSubPaths: true },
];

export type TranslationFunction = (key: string) => string;

export function getBgComponent(pathname: string): React.ComponentType | null {
  if (SLIDER_BG_ROUTES.includes(pathname)) {
    return SliderBg;
  } else if (IMAGE_BG_ROUTES.includes(pathname)) {
    return ImageBg;
  } else if (TITLE_AND_IMAGE_ROUTES.includes(pathname)) {
    return TitleAndImage;
  }
  return null;
}

export function getTitleComponent(
  pathname: string,
): React.ComponentType | null {
  if (CENTERIZED_TITLE_ROUTES.includes(pathname)) {
    return CenterizedTitle;
  } else if (TITLE_WITH_ACTIONS_ROUTES.includes(pathname)) {
    return TitleBg;
  }
  return null;
}

export const scrollToElement = (
  container: RefObject<HTMLDivElement>,
  elementId: string,
  duration: number,
) => {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    if (container.current) container.current.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Easing function
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export function getPageTitle({
  t,
  pathname,
}: {
  t: TranslationFunction;
  pathname: string;
}): string {
  const key = pathname.split("/").pop() || "home";
  const keyCamelCase = key
    .split("-")
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("");
  return t(`Header.navLinks.${keyCamelCase}`);
}

const getPrintProps = ({
  dir,
  content,
}: {
  dir: TextDirection;
  content: IReactToPrintProps["content"];
}): IReactToPrintProps => ({
  content,
  pageStyle: `
    body {
      direction: ${dir};
    }
  `,
  bodyClass: "print-body",
  documentTitle: ".",
});

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { getPrintProps };
