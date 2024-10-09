import { fetchRankings } from "@/lib/api_services/rankings-apis";
import { cookies, headers } from "next/headers";
import AcademicRankingsClientSide from "./AcademicRankingsClientSide";

const AcademicRankings: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let rankingsData;

  try {
    rankingsData = await fetchRankings(lang);
  } catch (error) {
    console.error("Failed to fetch academic rankings:", error);
  }

  return (
    rankingsData &&
    rankingsData.length > 0 && (
      <AcademicRankingsClientSide rankings={rankingsData} />
    )
  );
};

export default AcademicRankings;
