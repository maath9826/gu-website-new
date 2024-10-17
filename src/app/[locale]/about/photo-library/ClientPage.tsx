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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PhotoLibraryClientPage() {
  const t = useTranslations("PhotoLibrary");
  const locale = useLocale() as Locale;
  const {
    photoLibrary,
    pagination,
    isLoading,
    searchTerm,
    selectedCollegeId,
    selectedDepartmentId,
    colleges,
    setPage,
    debouncedSearch,
    setSearchTerm,
    setSelectedCollegeId,
    setSelectedDepartmentId,
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

  const handleCollegeChange = (value: string) => {
    if (value === "all") setSelectedCollegeId(null);
    else setSelectedCollegeId(value ? Number(value) : null);

    setPage(1);
    fetchPhotoLibrary();
  };

  const handleDepartmentChange = (value: string) => {
    if (value === "all") setSelectedDepartmentId(null);
    else setSelectedDepartmentId(value ? Number(value) : null);

    setPage(1);
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

  const selectedCollege = colleges.find(
    (college) => college.id === selectedCollegeId,
  );

  return (
    <main className="mt-[36px] sm:mt-[180px]">
      <Section>
        <Wrapper>
          <h1 className="mb-[50px] text-center text-[28px] font-medium sm:text-[47px] 1920:text-[62px]">
            {t("title")}
          </h1>
          <div className="mb-[30px] flex flex-col gap-4 sm:flex-row">
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              onChange={handleSearchChange}
              value={searchTerm}
              className="max-w-[300px]"
            />
            <Select
              onValueChange={handleCollegeChange}
              value={selectedCollegeId?.toString() || ""}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={t("selectCollege")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                {colleges.map((college) => (
                  <SelectItem key={college.id} value={college.id.toString()}>
                    {college.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCollege && (
              <Select
                onValueChange={handleDepartmentChange}
                value={selectedDepartmentId?.toString() || ""}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder={t("selectDepartment")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  {selectedCollege.departments.map((department) => (
                    <SelectItem
                      key={department.id}
                      value={department.id.toString()}
                    >
                      {department.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
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
