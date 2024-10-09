import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  // SLIDER_BG_ROUTES,
  // IMAGE_BG_ROUTES,
  // CENTERIZED_TITLE_ROUTES,
  // TITLE_WITH_ACTIONS_ROUTES,
  // TITLE_AND_IMAGE_ROUTE_PATTERNS,
  // ONLY_TITLE_ROUTE_PATTERNS,
} from "./paths";
import SliderBg from "@/components/page/SliderBg";
import ImageBg from "@/components/page/ImageBg";
import CenterizedTitle from "@/components/page/FirstTitleSection/CenterizedTitle";
import React, { RefObject } from "react";
import TitleAndImage from "@/components/page/TitleAndImage";
import { TextDirection } from "@/app/_hooks/useTextDirection";
import { IReactToPrintProps } from "react-to-print";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import OnlyTitle from "@/components/page/OnlyTitle";
import { locales } from "@/i18n.config";
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

// export function getBgComponent(pathname: string): React.ComponentType | null {
//   console.log(pathname);
//   console.log(matchesPattern(pathname, TITLE_AND_IMAGE_ROUTE_PATTERNS));
//   if (matchesPattern(pathname, SLIDER_BG_ROUTES)) {
//     return SliderBg;
//   } else if (matchesPattern(pathname, IMAGE_BG_ROUTES)) {
//     return ImageBg;
//   } else if (matchesPattern(pathname, TITLE_AND_IMAGE_ROUTE_PATTERNS)) {
//     return TitleAndImage;
//   } else if (matchesPattern(pathname, ONLY_TITLE_ROUTE_PATTERNS)) {
//     return OnlyTitle;
//   }
//   return null;
// }

// export function getTitleComponent(
//   pathname: string,
// ): React.ComponentType | null {
//   console.log(matchesPattern(pathname, TITLE_WITH_ACTIONS_ROUTES));
//   if (matchesPattern(pathname, CENTERIZED_TITLE_ROUTES)) {
//     return CenterizedTitle;
//   } else if (matchesPattern(pathname, TITLE_WITH_ACTIONS_ROUTES)) {
//     return ActionsTitle;
//   }
//   return null;
// }

// function matchesPattern(pathname: string, patterns: string[]): boolean {
//   return patterns.some((pattern) => {
//     const regex = new RegExp(`^${pattern}$`);
//     return regex.test(pathname);
//   });
// }

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

export const getImageUrl = (imagePath: string) =>
  process.env.NEXT_PUBLIC_ASSETS_URL + "/" + imagePath;

export function removeLocaleFromPathname(pathname: string): string {
  // Create a regex pattern that matches any of the locales at the start of the pathname
  const localePattern = `^/(${locales.join("|")})`;
  const regex = new RegExp(localePattern);

  // Remove the locale from the pathname if it exists
  return pathname.replace(regex, "");
}

export { getPrintProps };
