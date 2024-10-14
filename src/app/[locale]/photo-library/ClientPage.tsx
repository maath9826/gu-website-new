// src/app/[locale]/photo-library/ClientPage.tsx

"use client";

import React, { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { usePhotoLibraryStore } from "@/lib/providers/photo-library-provider";
import Pagination from "@/components/Pagination";
import { formatElapsedTime, getImageUrl } from "@/lib/utils";
import { Gallery, GalleryItem } from "@/components/Gallery";
import { Locale, usePathname } from "@/i18n.config";
import { Input } from "@/components/ui/input";

export default function PhotoLibraryClientPage() {
  const t = useTranslations("PhotoLibrary");
  const locale = useLocale() as Locale;
  const {
    photoLibrary,
    pagination,
    isLoading,
    searchTerm,
    setPage,
    debouncedSearch,
    setSearchTerm,
    fetchPhotoLibrary,
  } = usePhotoLibraryStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setPage(1);
    debouncedSearch(term);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchPhotoLibrary();
  };

  const galleryItems = photoLibrary.map((item): GalleryItem => {
    const elapsedTime = formatElapsedTime(item.created_at, locale);
    const description = item.ar_college_name
      ? `${elapsedTime} — ${item.ar_college_name}`
      : elapsedTime;

    return {
      id: item.id.toString(),
      title: item.ar_title,
      description: description,
      imgUrl: getImageUrl(item.images[0]?.image),
      tag: item.images?.length.toString(),
    };
  });

  return (
    <main className="mt-[36px] sm:mt-[180px]">
      <Section>
        <Wrapper>
          <h1 className="mb-[50px] text-center text-[28px] font-medium sm:text-[47px] 1920:text-[62px]">
            {t("title")}
          </h1>
          <div className="mb-[30px]">
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              onChange={handleSearchChange}
              value={searchTerm}
              className="max-w-[300px]"
            />
          </div>
          <Gallery items={galleryItems} />
          <Section className="mt-[50px] sm:mt-[50px]">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={pagination.perPage}
              totalItems={pagination.total}
            />
          </Section>
        </Wrapper>
      </Section>
    </main>
  );
}
