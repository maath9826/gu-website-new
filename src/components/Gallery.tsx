"use client";

import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  tag?: string;
}

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="flex flex-col bg-white">
      <div className="relative flex items-center justify-center bg-black/10 sm:h-[238px] 1920:h-[314px]">
        {isError ? (
          <i className="ri-image-fill text-[80px] text-black/50"></i>
        ) : (
          <>
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={400}
              height={300}
              onError={(e) => {
                setIsError(true);
              }}
              className={twMerge("h-full w-full object-cover")}
            />
            <div className="absolute end-[12px] top-[12px] flex items-center justify-center gap-[4px] rounded-[3px] bg-white px-[6px] py-[4px] text-primary">
              <span className="text-[16px] font-bold leading-none">
                {item.tag}
              </span>
              <i className="ri-image-2-fill text-[26px] leading-none"></i>
            </div>
          </>
        )}
      </div>
      <div className="p-[22px] 1920:p-[30px]">
        <h4 className="mb-[18px] text-xs font-medium text-primary sm:mb-[18px] 1920:mb-[24px] 1920:text-base">
          {item.description}
        </h4>
        <h3 className="text-[18px] font-medium 1920:text-[24px]">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-[38px] sm:grid-cols-3 1920:gap-[50px]">
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { Gallery, GalleryCard };
