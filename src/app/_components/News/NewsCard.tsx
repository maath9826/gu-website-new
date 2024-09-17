import React from "react";
import { NewsItem } from "@/lib/types";

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="flex flex-col  bg-white ">
      <img
        src={item.image}
        alt={item.title}
        className="w-full sm:h-[238px] 1920:h-[314px]  object-cover  "
      />
      <div className="sm:p-[22px] 1920:p-[30px]">
        <h4 className="text-base sm:text-xs 1920:text-base  text-primary  font-medium mb-[24px] sm:mb-[18px] 1920:mb-[24px]">
          {item.subtitle}
        </h4>
        <h3 className="text-[18px] 1920:text-[24px] font-medium">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
