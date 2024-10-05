import { getTranslations } from "next-intl/server";
import OrganizationalStructureClientPage from "./ClientPage";

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

export default function Page() {
  return (
    <OrganizationalStructureClientPage></OrganizationalStructureClientPage>
  );
}
