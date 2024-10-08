import { fetchStatistics } from "@/lib/api_services/statistics-apis";
import StatisticsClientSide from "./StatisticsClientSide";

const Statistics: React.FC = async () => {
  let statisticsData;

  try {
    statisticsData = await fetchStatistics();
  } catch (error) {
    console.error("Failed to fetch statistics:", error);
  }

  return statisticsData && <StatisticsClientSide statistics={statisticsData} />;
};

export default Statistics;
