import React from "react";
import { twMerge } from "tailwind-merge";

export default function ImageBg() {
  return (
    <div className="min-h-[297px] sm:min-h-[420px] 1920:min-h-[592px] relative flex justify-center">
      <TextSection />
      <ImageSection />
    </div>
  );
}

function TextSection() {
  return (
    <div className="relative z-30 sm:max-w-desktop 1920:max-w-desktop-lg w-full sm:mx-auto sm:px-[30px] pt-[51px] sm:pt-[96px] 1920:pt-[138px] text-start max-w-mobile">
      <div className="max-w-[654px] 1920:max-w-[789px] mt-[30px] sm:mt-[24px] 1920:mt-[34px]">
        <h3 className="text-[16px] leading-[22px] sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px] text-white/70 font-light">
          الرئيسية
        </h3>
        <h1 className="text-[25px] leading-[30px] sm:text-[48px] sm:leading-[54px] 1920:text-[60px] 1920:leading-[72px] text-white mt-[9px] sm:mt-[22px] 1920:mt-[32px] line-clamp-3">
          مواقع ذات صلة
        </h1>
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="navbar-inclusive-background w-full">
      <img
        src="/images/hero-bg.jpg"
        alt="hero bg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
}
