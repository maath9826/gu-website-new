// src/app/[locale]/photo-library/page.tsx

import { getTranslations } from "next-intl/server";
import { PhotoLibraryStoreProvider } from "@/lib/providers/photo-library-provider";
import { PhotoLibraryResponse } from "@/lib/api_services/news-apis";
import PhotoLibraryClientPage from "./ClientPage";
import { getPhotoLibrary } from "@/lib/api_services/photo-library-apis";

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
  let photoLibraryResponse: PhotoLibraryResponse | undefined;

  try {
    photoLibraryResponse = await getPhotoLibrary(1);
  } catch (error) {
    console.error("Failed to fetch photo library:", error);
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
        }}
      >
        <PhotoLibraryClientPage />
      </PhotoLibraryStoreProvider>
    )
  );
}
