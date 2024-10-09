import { fetchGoals } from "@/lib/api_services/goals-apis";
import OurGoalsClientSide from "./OurGoalsClientSide";
import { cookies, headers } from "next/headers";

const OurGoals: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let goalsData;

  try {
    goalsData = await fetchGoals(lang);
  } catch (error) {
    console.error("Failed to fetch goals:", error);
  }

  return (
    goalsData &&
    goalsData.length > 0 && <OurGoalsClientSide goals={goalsData} />
  );
};

export default OurGoals;
