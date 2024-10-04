import { Button } from "@/components/ui/button";
import { Link } from "@/i18n.config";
import { NEWS_ROUTE } from "@/lib/paths";

export default function ActionsTitle() {
  return (
    <div className="mb-[12px] text-start sm:mb-[53px]">
      <Link href={NEWS_ROUTE}>
        <Button className="w-fit gap-1">
          <i className="ri-arrow-right-s-line text-[22px] text-[#99AFC9]"></i>
          <span>الرجــوع</span>
        </Button>
      </Link>
      <h1 className="mt-[35px] text-[24px] font-bold leading-[1.22em] sm:mt-[43px] sm:text-[40px] 1920:text-[48px]">
        رئيس جامعة كلكامش واللجنة الوزارية يتفقدون سير امتحانات الطلبة لمختلف
        الكليات
      </h1>
      <div className="mt-[48px] flex items-center gap-[16px] font-bold text-primary sm:mt-[33px]">
        <span>اكاديمية الماجستير</span>
        <span>—</span>
        <span>قبل 6 ساعات</span>
      </div>
    </div>
  );
}
