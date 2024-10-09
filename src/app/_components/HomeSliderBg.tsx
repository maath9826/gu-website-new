import SliderBg from "@/components/page/SliderBg";
import { fetchNews } from "@/lib/api_services/news-apis";
import { NewsItem } from "@/lib/types";
import { cookies, headers } from "next/headers";
import React from "react";

export default async function HomeSliderBg() {
  const lang = headers().get("x-locale") || "ar";

  let newsItems: NewsItem[] = [];
  try {
    newsItems = await fetchNews(lang);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }
  return <SliderBg newsItems={newsItems} />;
}
