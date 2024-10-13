import { getTranslations } from "next-intl/server";
import OrganizationalStructureClientPage from "./ClientPage";
import {
  fetchOrganizationalStructure,
  OrganizationalStructure,
} from "@/lib/api_services/organizational-structure-apis";

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
    title: t("organizationalStructureTitle"),
  };
}

export default async function Page() {
  let organizationalStructure: OrganizationalStructure | undefined;

  try {
    organizationalStructure = await fetchOrganizationalStructure();
  } catch (error) {
    console.error("Failed to fetch organizational structure:", error);
  }

  return (
    organizationalStructure && (
      <OrganizationalStructureClientPage
        organizationalStructure={organizationalStructure}
      />
    )
  );
}
