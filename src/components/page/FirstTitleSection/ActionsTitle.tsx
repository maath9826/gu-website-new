import FileOperations from "@/components/FileOperations";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Link } from "@/i18n.config";
import { NEWS_ROUTE } from "@/lib/paths";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function ActionsTitle({
  showBackButton = false,
  backHref = "",
  title,
  description,
  className,
  fileOperations,
}: {
  showBackButton?: boolean;
  title?: string;
  description?: string;
  backHref?: string;
  className?: string;
  fileOperations?: ReactNode;
}) {
  return (
    <Section className="mt-[61px] !max-w-none flex-col items-center sm:mt-[160px]">
      <Wrapper>
        <div className="flex justify-between">
          <div
            className={twMerge("mb-[12px] text-start sm:mb-[53px]", className)}
          >
            {showBackButton && (
              <Link href={backHref}>
                <Button className="w-fit gap-1">
                  <i className="ri-arrow-right-s-line text-[22px] text-[#99AFC9]"></i>
                  <span>الرجــوع</span>
                </Button>
              </Link>
            )}

            {title && (
              <h1
                className={twMerge(
                  "mt-[35px] text-[24px] font-bold leading-[1.22em] sm:mt-[43px] sm:text-[40px] 1920:text-[48px]",
                  !description &&
                    !showBackButton &&
                    "text-center sm:text-start",
                )}
              >
                {title}
              </h1>
            )}
            {description && <p>{description}</p>}

            {/* <div className="mt-[48px] flex items-center gap-[16px] font-bold text-primary sm:mt-[33px]">
            <span>اكاديمية الماجستير</span>
            <span>—</span>
            <span>قبل 6 ساعات</span>
          </div> */}
          </div>
          {fileOperations}
        </div>
      </Wrapper>
    </Section>
  );
}
