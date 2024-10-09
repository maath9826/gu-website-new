import { fetchColleges } from "@/lib/api_services/colleges-apis";
import { cookies, headers } from "next/headers";
import OurCollegesClientSide from "./OurCollegesClientSide";

const OurColleges: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

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
