import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/types";

const MainNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[38px] w-full max-w-mobile sm:max-w-desktop 1920:max-w-desktop-lg bg-white sm:h-[451px] 1920:h-[596px] text-start">
      <div className="flex-1 p-[19px] sm:p-[33px] 1920:p-[44px]">
        <div className="max-w-[240px] sm:max-w-[413px] 1920:max-w-[545px]">
          <h4 className="text-[14px] sm:text-[16px] mb-[10px]  sm:mb-[18px] 1920:mb-[24px] font-bold text-primary">
            {item.subtitle}
          </h4>
          <h3 className="text-[21px] sm:text-[36px] 1920:text-[48px]  leading-[1.4em]    font-bold mb-[35px] sm:mb-[56px] 1920:mb-[74px]">
            {item.title}
          </h3>
          <Button className="text-xs 1920:text-base w-fit px-[14px] py-[7px] sm:px-[24px] sm:py-[12px] 1920:px-[32px] 1920:py-[16px]">
            اقرأ المزيد
          </Button>
        </div>
      </div>

      <img
        src={item.image}
        alt={item.title}
        className="w-full flex-1 h-full sm:h-full object-cover "
      />
    </div>
  );
};

export default MainNewsCard;
