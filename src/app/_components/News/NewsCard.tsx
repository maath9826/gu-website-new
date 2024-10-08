import React from "react";
import { NewsItem } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="flex flex-col bg-white">
      <img
        src={getImageUrl(item.image)}
        alt={item.title}
        className="w-full object-cover sm:h-[238px] 1920:h-[314px]"
      />
      <div className="sm:p-[22px] 1920:p-[30px]">
        <h4 className="mb-[24px] text-base font-medium text-primary sm:mb-[18px] sm:text-xs 1920:mb-[24px] 1920:text-base">
          {item.description}
        </h4>
        <h3 className="text-[18px] font-medium 1920:text-[24px]">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
