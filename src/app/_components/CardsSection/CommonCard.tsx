import { Link } from "@/i18n.config";
import { CardData } from "@/lib/types";
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
      href={el.href}
      className={twMerge(
        "flex flex-col justify-between hover:opacity-90 max-w-[343px] sm:max-w-none w-full p-[35px] h-[243px] sm:h-[265px] 1920:h-[349px]   items-start text-center transition-all duration-300 hover:shadow-lg",
        index == 0 && uniqueFirstCard ? "bg-secondary" : "bg-white",
        className
      )}
    >
      <img
        src={el.imgUrl}
        alt={el.title}
        className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] 1920:w-[80px] 1920:h-[80px] object-contain"
      />
      <div className="flex justify-between items-center w-full">
        <h4 className="text-[24px] sm:text-[27px] 1920:text-[36px] leading-[1.2em] font-medium">
          {el.title}
        </h4>
        <i className="ri-arrow-left-line flippable text-[32px] 1920:text-[45px]"></i>
      </div>
    </Link>
  );
}
