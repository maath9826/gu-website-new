import { getTranslations } from "next-intl/server";
import { PhotoLibraryStoreProvider } from "@/lib/providers/photo-library-provider";
import PhotoLibraryClientPage from "./ClientPage";
import {
  getPhotoLibrary,
  PhotoLibraryResponse,
} from "@/lib/api_services/photo-library-apis";
import { headers } from "next/headers";
import { fetchColleges } from "@/lib/api_services/colleges-apis";
import { College } from "@/lib/types";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("photoLibraryTitle"),
  };
}

export default async function PhotoLibraryPage() {
  const lang = headers().get("x-locale") || "ar";
  let photoLibraryResponse: PhotoLibraryResponse | undefined;
  let collegesResponse: College[] = [];

  try {
    photoLibraryResponse = await getPhotoLibrary({ page: 1 });
    collegesResponse = await fetchColleges(lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    photoLibraryResponse && (
      <PhotoLibraryStoreProvider
        initialState={{
          photoLibrary: photoLibraryResponse.data,
          pagination: {
            currentPage: photoLibraryResponse.current_page,
            totalPages: photoLibraryResponse.last_page,
            perPage: photoLibraryResponse.per_page,
            total: photoLibraryResponse.total,
          },
          colleges: collegesResponse,
        }}
      >
        <PhotoLibraryClientPage />
      </PhotoLibraryStoreProvider>
    )
  );
}
