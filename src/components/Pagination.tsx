import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
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
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="white"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-10 w-10 p-0 text-sm"
        >
          <i className="ri-arrow-right-line flippable"></i>
        </Button>
        {getPageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <span className={cn("h-10 w-10 bg-white p-0 text-sm")}>...</span>
            ) : (
              <Button
                variant="white"
                onClick={() => onPageChange(pageNumber as number)}
                className={cn(
                  "h-10 w-10 p-0 text-sm",
                  currentPage === pageNumber
                    ? "bg-primary text-white"
                    : "bg-white",
                )}
              >
                {pageNumber}
              </Button>
            )}
          </React.Fragment>
        ))}
        <Button
          variant="white"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-10 w-10 p-0 text-sm"
        >
          <i className="ri-arrow-left-line flippable"></i>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
