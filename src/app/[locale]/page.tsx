import OurGoals from "../_components/OurGoals/OurGoals";
import News from "../_components/News/News/News";
import Statistics from "../_components/Statistics/Statistics";
import HomepageCards from "../_components/CardsSection/HomepageCards";
import OurColleges from "../_components/OurColleges/OurColleges";
import AcademicRankings from "../_components/AcademicRankings/AcademicRankings";

import HomeSliderBg from "../_components/HomeSlider/HomeSliderBg";

export default async function Home() {
  return (
    <>
      <HomeSliderBg></HomeSliderBg>
      <main className="relative z-30 flex flex-col items-center">
        <HomepageCards />
        <News />
        <Statistics />
        <OurGoals />
        <OurColleges />
        <AcademicRankings />
      </main>
    </>
  );
}
