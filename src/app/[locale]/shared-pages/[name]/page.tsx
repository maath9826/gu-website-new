import { fetchSharedPageData } from "@/lib/api_services/shared-pages-apis";
import { headers } from "next/headers";
import SharedPageClient from "./SharedPageClient";
import { SharedPageData } from "@/lib/types";

export default async function Page({ params }: { params: { name: string } }) {
  let pageData: SharedPageData | null = null;

  try {
    pageData = await fetchSharedPageData(params.name);
  } catch (error) {
    console.error("Failed to fetch shared page data:", error);
  }

  return <SharedPageClient pageData={pageData} />;
}
