import { Button } from "@/components/ui/button";
import { Link } from "@/i18n.config";
import { NEWS_ROUTE } from "@/lib/paths";
import React from "react";

interface NewsCardButtonProps {
  children: React.ReactNode;
}

const NewsCardButton: React.FC<NewsCardButtonProps> = ({ children }) => {
  return (
    <Button
      variant={"outline"}
      className="!px-[12px] !py-[5px] !text-[14px] !font-normal leading-[20px] pointer-events-none ltr:sm:!text-[14px] ltr:!text-[11px]"
    >
      {children}
    </Button>
  );
};

export default NewsCardButton;
