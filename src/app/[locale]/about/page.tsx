import { getTranslations } from "next-intl/server";
import AboutClientPage from "./ClientPage";
import { fetchAboutData } from "@/lib/api_services/about-apis";
import { headers } from "next/headers";
import ImageBg from "@/components/page/ImageBg";

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
    title: t("aboutTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let aboutData;

  try {
    aboutData = await fetchAboutData(lang);
  } catch (error) {
    console.error("Failed to fetch about data:", error);
  }

  return (
    <>
      <ImageBg title="عن جامعة كلكامش الأهلية" subtitle="حول الجامعة"></ImageBg>
      <AboutClientPage aboutData={aboutData} />
    </>
  );
}
