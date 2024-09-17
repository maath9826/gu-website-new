import { getTranslations } from "next-intl/server";
import NewsClientPage from "./ClientPage";

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
    title: t("newsTitle"),
  };
}

export default function NewsPage() {
  return <NewsClientPage></NewsClientPage>;
}
