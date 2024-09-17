import React from "react";
import { twMerge } from "tailwind-merge";

const ConferenceImportance: React.FC = () => {
  return (
    <section className="mt-[82px] flex flex-col items-center  gap-[21px] px-[8px] sm:mt-[171px] sm:gap-[60px] sm:px-[60px]">
      <h2 className="lg-title   text-center sm:max-w-[494px]">
        أهمـــــية مــــعـــــرض ومؤتمر العراق للتعليم
      </h2>
      <div className="flex flex-col gap-[19px] sm:gap-[70px]">
        <Section
          points={section1Points}
          imageSrc="/images/about/conference-importance/1.jpg"
          imageAlt="Conference importance 1"
        />
        <Section
          className="sm:flex-row-reverse"
          points={section2Points}
          imageSrc="/images/about/conference-importance/2.jpg"
          imageAlt="Conference importance 2"
        />
      </div>
    </section>
  );
};

const CheckedPoint: React.FC<CheckedPointProps> = ({
  text,
}) => (
  <div className="flex items-start gap-[20px]">
    <div className="mt-[6px] flex h-[25px] min-h-[25px] w-[25px] min-w-[25px] items-center justify-center rounded-full bg-primary sm:mt-0">
      <i className="fa-solid fa-check text-[15px] text-foreground"></i>
    </div>
    <p className="text-[18px] font-medium leading-[29px]">
      {text}
    </p>
  </div>
);

const Section: React.FC<SectionProps> = ({
  points,
  imageSrc,
  imageAlt,
  className,
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-[14px] sm:max-w-[1708px] sm:flex-row sm:gap-[38px]",
      className,
    )}
  >
    <div className="flex flex-col gap-[40px] rounded-[30px] bg-[#F2F2F2] px-[20px] py-[25px] sm:gap-[20px] sm:px-[30px] sm:py-[30px] ">
      {points.map((point, index) => (
        <CheckedPoint key={index} text={point} />
      ))}
    </div>
    <img
      src={imageSrc}
      alt={imageAlt}
      className="rounded-[20px] object-cover sm:rounded-[25px]"
    />
  </div>
);

const section1Points: string[] = [
  "ستكون جزءا من حدث التعليم الأكبر في العراق والتجمع التجاري والأكاديمي لنخب مقدمي الخدمات التخصصية للمؤسسات التعليمية.",
  'فرصة للتواصل المباشر مع المؤسسة الوطنية البريطانية "The Times" ومؤسسات التصنيفات الأخرى للتعليم وتنسيق الشراكة ضمن معرض ومؤتمر العراق للتعليم.',
  'فرصة فريدة للتواصل المباشر مع دور النشر العالمية مثل "ELSEVIER" المختصة بنشر الكتب الطبية والعلمية.',
  'حضور منظمة تصنيف الجامعات العالمي (QS) "World University Rankings" وهو تصنيف عالمي لأفضل 800 جامعة في العالم تنشره شركة كواكواريلي سيموندس.',
  "تعزيز التواصل والتفاعل وتطوير شبكة العلاقات وخلق قنوات تواصل فعالة بين المؤسسات التعليمية/التربوية والطلبة.",
  "تغطية إعلامية متميزة وصدى إعلامي واسع.",
  "الترويج والتسويق المبتكر وعرض القيم الأكاديمية والمناهج ذات العلاقة بالموسم الدراسي الجديد.",
  "تعزيز حضور العلامة التجارية ومشاركة التجارب الملهمة وقصص النجاح.",
  "فرصة فريدة لإنشاء شراكات عالمية وإقليمية ومشاريع توأمة مع الجامعات العالمية.",
  "استثمار فرصة تواجد المؤثرين وصناع المحتوى العلمي والأكاديمي لتسليط الضوء على مؤسستك وتسويق خدماتك.",
];

const section2Points: string[] = [
  "فرص استثمار التكنولوجيا والتحول الرقمي والحلول التقنية وتقنيات التعليم بمختلف قطاعات التربية والتعليم.",
  "دعم مساعي الشركات والمشاريع الرائدة في مجال تعليم أشق الطرق وعرض الأفكار والحلول المبتكرة وخلق آفاق التعاون مع المستثمرين.",
  "مساحات تفاعلية وكلمات ملهمة لصناع القرار محلياً، إقليمياً، وعالمياً.",
  "تسليط الضوء على التعددية اللغوية للطلبة بمختلف فئاتهم العمرية، وإشراك المدربين والخبراء والمراكز المهتمة بذلك.",
  "فرصة للارتقاء بالخدمات الأكاديمية وواقع التعليم في العراق وتسليط الضوء على التحديات والفرص، والمشاركة في صنع القرار.",
  "المشاركة بمبادرات التوظيف للمواهب والخريجين والباحثين عن الأعمال.",
  "حضور أكاديمي مرتقب لنخبة الشخصيات المؤثرة وأصحاب القرار بمجال التعليم.",
  "دعم البرامج الأكاديمية والمبادرات والبحوث العلمية.",
  "فهم احتياجات الطلبة بمختلف فئاتهم العمرية والمساهمة في التطوير المهني والمشاركة بمنتدى أصوات الطلبة المفتوح.",
  "المشاركة في تصميم فرص العمل وتأهيل الطلبة ومراحل التحضير والدخول إلى مجتمع العمل المهني.",
  "التواجد الأكاديمي ضمن النخب التعليمية الرائدة في العراق.",
  "المشاركة في مختلف أنشطة المؤتمر وفعالياته وحلقات النقاش التفاعلية.",
];

type SectionProps = {
  points: string[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

type CheckedPointProps = {
  text: string;
};

export default ConferenceImportance;
