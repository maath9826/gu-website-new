import { getTranslations } from "next-intl/server";
import UniversityCouncilClientPage from "./ClientPage";
import { fetchCouncilMembers } from "@/lib/api_services/council-apis";
import { headers } from "next/headers";

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
    title: t("universityCouncilTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let councilMembers;

  try {
    councilMembers = await fetchCouncilMembers(lang);
    console.log("councilMembers -- --", councilMembers);
  } catch (error) {
    console.error("Failed to fetch council members:", error);
  }

  return <UniversityCouncilClientPage councilMembers={councilMembers} />;
}
