import { PlaceholderImgData } from "@/components/DynamicImage";
import SliderBg from "@/components/page/SliderBg";
import { getImagePlaceholder } from "@/lib/server-utils";
import { SliderItem, NewsItem } from "@/lib/types";
import { headers } from "next/headers";
import React from "react";
import { getImageUrl } from "@/lib/utils";
import { fetchSliderItems } from "@/lib/api_services/homepage-apis";

export default async function HomeSliderBg() {
  const lang = headers().get("x-locale") || "ar";

  let sliderItems: SliderItem[] = [];
  try {
    sliderItems = await fetchSliderItems(lang);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  // const placeholdersData: PlaceholderImgData[] = await Promise.all(
  //   sliderItems.map(async (item) => {
  //     const { base64, data } = await getImagePlaceholder(
  //       getImageUrl(item.image),
  //     );
  //     return {
  //       base64,
  //       data,
  //     };
  //   }),
  // );

  // return <SliderBg homeSliderData={{ sliderItems, placeholdersData }} />;
  return <SliderBg sliderItems={sliderItems} />;
}
