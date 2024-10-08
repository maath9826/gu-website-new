import { fetchRankings } from "@/lib/api_services/rankings-apis";
import { cookies } from "next/headers";
import AcademicRankingsClientSide from "./AcademicRankingsClientSide";

const AcademicRankings: React.FC = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "ar";

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
