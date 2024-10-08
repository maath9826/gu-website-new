import { fetchColleges } from "@/lib/api_services/colleges-apis";
import { cookies } from "next/headers";
import OurCollegesClientSide from "./OurCollegesClientSide";

const OurColleges: React.FC = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "ar";

  let collegesData;

  try {
    collegesData = await fetchColleges(lang);
  } catch (error) {
    console.error("Failed to fetch colleges:", error);
  }

  return (
    collegesData &&
    collegesData.length > 0 && <OurCollegesClientSide colleges={collegesData} />
  );
};

export default OurColleges;
