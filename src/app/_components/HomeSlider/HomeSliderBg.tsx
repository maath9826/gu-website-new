import { PlaceholderImgData } from "@/components/DynamicImage";
import SliderBg from "@/components/page/SliderBg";
import { fetchNews } from "@/lib/api_services/news-apis";
import { getImagePlaceholder } from "@/lib/server-utils";
import { NewsItem } from "@/lib/types";
import { headers } from "next/headers";
import React from "react";
import { newsItems } from "../../../lib/data";
import { getImageUrl } from "@/lib/utils";

export default async function HomeSliderBg() {
  const lang = headers().get("x-locale") || "ar";

  let newsItems: NewsItem[] = [];
  try {
    newsItems = await fetchNews(lang);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  // const placeholdersData: PlaceholderImgData[] = await Promise.all(
  //   newsItems.map(async (item) => {
  //     const { base64, data } = await getImagePlaceholder(
  //       getImageUrl(item.image),
  //     );
  //     return {
  //       base64,
  //       data,
  //     };
  //   }),
  // );

  // return <SliderBg homeSliderData={{ newsItems, placeholdersData }} />;
  return <SliderBg newsItems={newsItems} />;
}
