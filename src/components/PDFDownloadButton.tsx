import React from "react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { useTranslations } from "next-intl";

export interface PDFStyles {
  [key: string]: React.CSSProperties;
}

interface PDFDownloadButtonProps {
  pdfStyles?: PDFStyles;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  pdfStyles = {},
}) => {
  const t = useTranslations("Common");

  const [isLoading, setIsLoading] = React.useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const element = document.getElementById("print-section");
    if (!element) {
      console.error("Print section not found");
      setIsLoading(false);
      return;
    }

    // Clone the element
    const clonedElement = element.cloneNode(true) as HTMLElement;

    // Apply custom styles to the cloned element
    applyPDFStyles(clonedElement, pdfStyles);

    const opt = {
      margin: 10,
      filename: "organizational_structure.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(clonedElement)
      .set(opt)
      .save()
      .then(() => {
        setIsLoading(false);
      });
  };

  const applyPDFStyles = (element: HTMLElement, customStyles: PDFStyles) => {
    // Apply styles
    Object.entries(customStyles).forEach(([selector, styles]) => {
      const elements =
        selector === "body" ? [element] : element.querySelectorAll(selector);
      elements.forEach((el) => {
        Object.assign((el as HTMLElement).style, styles);
      });
    });
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading}
      variant="ghost"
      size="icon"
      className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
    >
      <span>{isLoading ? t("loading") + "..." : t("download")}</span>

      <i className="ri-file-pdf-2-fill text-[20px]"></i>
    </Button>
  );
};

export default PDFDownloadButton;
