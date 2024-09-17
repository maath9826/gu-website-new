"use client";

import NewsTags from "@/app/_components/News/NewsTags";
import OurApp from "@/app/_components/OurApp";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n.config";
import { newsItems } from "@/lib/data";
import { NEWS_ROUTE } from "@/lib/paths";
import { NewsItem } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useMemo, useState } from "react";

export default function NewsClientPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  //@ts-ignore
  const locale = useLocale();

  const t = useTranslations("Home.news");

  const translatedNewsItems = useMemo(() => {
    return newsItems(t.raw("news"));
  }, [locale]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 620 ? 3 : 9);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = translatedNewsItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(translatedNewsItems.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex items-center flex-col mt-[45px] sm:mt-[104px] mx-auto">
      <Section className="flex flex-col justify-center sm:max-w-[1240px] max-w-[375px] px-[12px]">
        <div className="mb-[40px] grid w-full grid-cols-[repeat(auto-fill,1fr)] justify-center gap-[10px] sm:mb-[100px] sm:grid-cols-[repeat(auto-fill,384px)] sm:gap-y-[67px] sm:gap-x-[32px]">
          {currentItems.map((newsItem, index) => (
            <Card key={index} newsItem={newsItem} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Section>

      <OurApp></OurApp>
    </main>
  );
}

function Card({ newsItem }: { newsItem: NewsItem }) {
  return (
    <Link
      href={`${NEWS_ROUTE}/${newsItem.id}`}
      className="flex w-full justify-center  hover:opacity-90 sm:w-fit"
    >
      <div className="flex flex-col text-start">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="sm:h-[241px] w-full h-[187px] rounded-[16px] object-cover mb-[22px] sm:mb-[32px]"
        />
        <NewsTags></NewsTags>
        <div className="sm:mt-[24px] mt-[9px] mb-[10px] flex flex-col sm:mb-[24px]">
          <h4 className="line-clamp-3 text-[18px] font-medium leading-[36px] text-foreground sm:text-[32px] sm:leading-[40px] mb-[16px] tracking-[-0.01em]">
            {newsItem.title}
          </h4>
          <p className="line-clamp-2 text-[16px] leading-[26px]  sm:text-[18px] sm:leading-[26px] text-muted">
            {newsItem.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 rtl:space-x-reverse">
      <Button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <div className="rtl:hidden">
          <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
        <div className="ltr:hidden">
          <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
      </Button>
      {getPageNumbers().map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === "..." ? (
            <span className="px-2">...</span>
          ) : (
            <Button
              variant={currentPage === pageNumber ? "default" : "ghost"}
              onClick={() => onPageChange(pageNumber as number)}
              className={`pagination-button ${
                currentPage === pageNumber ? "!bg-secondary !text-white" : ""
              }`}
            >
              {pageNumber}
            </Button>
          )}
        </React.Fragment>
      ))}
      <Button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <div className="ltr:hidden">
          <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
        <div className="rtl:hidden">
          <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
      </Button>
    </div>
  );
};
