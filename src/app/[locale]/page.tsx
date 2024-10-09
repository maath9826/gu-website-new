import OurGoals from "../_components/OurGoals/OurGoals";
import News from "../_components/News/News/News";
import Statistics from "../_components/Statistics/Statistics";
import HomepageCards from "../_components/CardsSection/HomepageCards";
import OurColleges from "../_components/OurColleges/OurColleges";
import AcademicRankings from "../_components/AcademicRankings/AcademicRankings";
import SliderBg from "@/components/page/SliderBg";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <SliderBg></SliderBg>
      <main className="relative z-30 flex flex-col items-center">
        <HomepageCards></HomepageCards>
        <News></News>
        <Statistics></Statistics>
        <OurGoals></OurGoals>
        <OurColleges></OurColleges>
        <AcademicRankings></AcademicRankings>
      </main>
    </>
  );
}
