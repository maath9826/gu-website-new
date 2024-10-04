import Section from "@/components/Section";
import ScrollableContainerUpperSection from "../../../components/scrollable-container/UpperSection";
import TitlesWrapper from "@/components/TitlesWrapper";
import { Link } from "@/i18n.config";
import PageWithFirstSection from "@/components/page/Page";

export default function page() {
  return (
    <PageWithFirstSection>
      <Section>
        <TitlesWrapper>
          <h3 className="title-sm mt-[62px] !text-primary sm:mt-[151px]">
            مواقع ذات صلة
          </h3>
          <h2 className="title">جامعة كلكامش</h2>
          <RelatedLocationsGrid></RelatedLocationsGrid>
        </TitlesWrapper>
      </Section>
    </PageWithFirstSection>
  );
}

const RelatedLocationsGrid = () => {
  return (
    <div className="mt-[45px] grid grid-cols-1 gap-[22px] sm:mt-[80px] sm:grid-cols-4 1920:grid-cols-5">
      {relatedLocations.map((location, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between gap-[12px] bg-white px-[30px] py-[40px] text-center"
        >
          <h3 className="text-[24px] font-medium leading-[1.3em]">
            {location.title}
          </h3>
          <Link
            target="_blank"
            href={location.url}
            className="text-[14px] font-medium leading-[1.25em] text-primary"
          >
            زيارة الموقع
          </Link>
        </div>
      ))}
    </div>
  );
};

const relatedLocations = [
  { title: "وزارة التعليم العالي والبحث العلمي", url: "#" },
  { title: "دائرة التعليم الجامعي الأهلي", url: "#" },
  { title: "اتحاد الجامعات العربية", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
  { title: "وزارة التعليم العالي والبحث العلمي", url: "#" },
  { title: "دائرة التعليم الجامعي الأهلي", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
];
