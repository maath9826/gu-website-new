import React from "react";
import { twMerge } from "tailwind-merge";

export default function ImageBg({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex min-h-[260px] justify-center sm:min-h-[420px] 1920:min-h-[592px]">
      <TextSection title={title} subtitle={subtitle} />
      <ImageSection />
    </div>
  );
}

function TextSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative z-30 w-full max-w-mobile pt-[71px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[96px] xl:px-0 1920:max-w-desktop-lg 1920:pt-[138px]">
      <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
        <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
          {subtitle}
        </h3>
        <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
          {title}
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
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
}
