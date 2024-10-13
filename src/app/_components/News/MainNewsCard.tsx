import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const MainNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const t = useTranslations("Common");
  const locale = useLocale();

  const title = locale === "en" ? item.en_title : item.ar_title;
  const description =
    locale === "en" ? item.en_description : item.ar_description;

  return (
    <div className="flex w-full max-w-mobile flex-col gap-[20px] bg-white text-start sm:h-[451px] sm:max-w-desktop sm:flex-row sm:gap-[38px] 1920:h-[596px] 1920:max-w-desktop-lg">
      <div className="flex-1 p-[19px] sm:p-[33px] 1920:p-[44px]">
        <div className="max-w-[240px] sm:max-w-[413px] 1920:max-w-[545px]">
          <h4 className="mb-[10px] text-[14px] font-bold text-primary sm:mb-[18px] sm:text-[16px] 1920:mb-[24px]">
            {description}
          </h4>
          <h3 className="mb-[35px] text-[21px] font-bold leading-[1.4em] sm:mb-[56px] sm:text-[36px] 1920:mb-[74px] 1920:text-[48px]">
            {title}
          </h3>
          <Button className="w-fit px-[14px] py-[7px] text-xs sm:px-[24px] sm:py-[12px] 1920:px-[32px] 1920:py-[16px] 1920:text-base">
            {t("readMore")}
          </Button>
        </div>
      </div>

      <img
        src={getImageUrl(item.image)}
        alt={item.ar_title}
        className="h-full w-full flex-1 object-cover sm:h-full"
      />
    </div>
  );
};

export default MainNewsCard;
