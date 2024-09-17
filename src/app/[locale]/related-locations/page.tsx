import Section from "@/components/Section";
import ScrollableContainerUpperSection from "../../../components/ScrollableContainer/UpperSection";
import TitlesWrapper from "@/components/TitlesWrapper";
import { Link } from "@/i18n.config";

export default function page() {
  return (
    <Section>
      <TitlesWrapper>
        <h3 className="title-sm !text-primary mt-[62px] sm:mt-[151px]">
          مواقع ذات صلة
        </h3>
        <h2 className="title">جامعة كلكامش</h2>
        <RelatedLocationsGrid></RelatedLocationsGrid>
      </TitlesWrapper>
    </Section>
  );
}

const RelatedLocationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 1920:grid-cols-5 gap-[22px] mt-[45px] sm:mt-[80px]">
      {relatedLocations.map((location, index) => (
        <div
          key={index}
          className="bg-white py-[40px] px-[30px] flex flex-col gap-[12px] items-center text-center justify-between"
        >
          <h3 className="text-[24px] font-medium leading-[1.3em]">
            {location.title}
          </h3>
          <Link
            target="_blank"
            href={location.url}
            className="text-[14px] text-primary font-medium leading-[1.25em]"
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
