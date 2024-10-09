import { Link } from "@/i18n.config";
import { CardData } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export default function CommonCard({
  el,
  index,
  className,
  uniqueFirstCard = true,
}: {
  el: CardData;
  index: number;
  className?: string;
  uniqueFirstCard?: boolean;
}) {
  return (
    <Link
      target="_blank"
      href={el.href}
      className={twMerge(
        "flex h-[243px] w-full max-w-[343px] flex-col items-start justify-between p-[35px] text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg sm:h-[265px] sm:max-w-none 1920:h-[349px]",
        index == 0 && uniqueFirstCard ? "bg-secondary" : "bg-white",
        className,
      )}
    >
      <img
        src={el.imgUrl}
        alt={el.title}
        className="h-[48px] w-[48px] object-contain sm:h-[60px] sm:w-[60px] 1920:h-[80px] 1920:w-[80px]"
      />
      <div className="flex w-full items-center justify-between gap-[20px]">
        <h4 className="text-start text-[24px] font-medium leading-[1.3em] sm:text-[27px] 1920:text-[36px]">
          {el.title}
        </h4>
        <i className="ri-arrow-left-line text-[32px] flippable 1920:text-[45px]"></i>
      </div>
    </Link>
  );
}
