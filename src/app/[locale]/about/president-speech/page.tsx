import { getTranslations } from "next-intl/server";
import PresidentSpeechClientPage from "./ClientPage";
import { fetchPresidentSpeech } from "@/lib/api_services/president-speech-apis";
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
    title: t("presidentSpeechTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let presidentSpeech;

  try {
    presidentSpeech = await fetchPresidentSpeech(lang);
  } catch (error) {
    console.error("Failed to fetch president's speech:", error);
  }

  return <PresidentSpeechClientPage presidentSpeech={presidentSpeech} />;
}
