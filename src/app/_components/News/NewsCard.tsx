import React from "react";
import { NewsItem } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { useLocale } from "next-intl";

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const locale = useLocale();

  const title = locale === "en" ? item.en_title : item.ar_title;
  const description =
    locale === "en" ? item.en_description : item.ar_description;

  return (
    <div className="flex flex-col bg-white">
      <img
        src={getImageUrl(item.image)}
        alt={title}
        className="w-full object-cover sm:h-[238px] 1920:h-[314px]"
      />
      <div className="sm:p-[22px] 1920:p-[30px]">
        <h4 className="mb-[24px] text-base font-medium text-primary sm:mb-[18px] sm:text-xs 1920:mb-[24px] 1920:text-base">
          {description}
        </h4>
        <h3 className="text-[18px] font-medium 1920:text-[24px]">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
