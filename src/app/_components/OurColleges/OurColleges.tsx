import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Wrapper from "../../../components/Wrapper";

interface College {
  id: number;
  name: string;
  subtitle: string;
  imageUrl: string;
}

const colleges: College[] = [
  {
    id: 1,
    name: "كلية التقنيات الطبية والصحية",
    subtitle:
      "من خلال تطوير الجيل القادم من المهنيين والمتخصصين في مجال الرعاية الصحية، تمكّن ",
    imageUrl: "/images/college-logo.png",
  },
  {
    id: 2,
    name: "كلية الهندسة",
    subtitle:
      "تتطلع كلية الهندسة إلى أن تصبح مؤسسة رائدة في مجال الهندسة في العراق، ",
    imageUrl: "/images/college-logo.png",
  },
  {
    id: 3,
    name: "كلية العلوم",
    subtitle:
      "تتميّز كلية العلوم بكونها مؤسسة رائدة في مجال العلوم في العراق، وتسعى إلى ",
    imageUrl: "/images/college-logo.png",
  },
  {
    id: 4,
    name: "كلية الاقتصاد والعلوم السياسية",
    subtitle:
      "تهدف كلية الاقتصاد والعلوم السياسية إلى إعداد جيل من الخبراء والمتخصصين في مجال الاقتصاد ",
    imageUrl: "/images/college-logo.png",
  },
  {
    id: 5,
    name: "كلية القانون",
    subtitle:
      "تسعى كلية القانون إلى إعداد جيل من الفقهاء والقضاة الذين يملكون المعرفة والخبرة ",
    imageUrl: "/images/college-logo.png",
  },
  {
    id: 6,
    name: "كلية الآداب",
    subtitle:
      "تهدف كلية الآداب إلى إعداد جيل من الخبراء والمتخصصين في مجال اللغة والآداب ",
    imageUrl: "/images/college-logo.png",
  },
];

export default function OurColleges() {
  return (
    <Section wrapperClass="mt-[110px] sm:mt-[157px]">
      <Wrapper className="flex-col">
        <div className="text-center flex flex-col items-center mb-[24px] sm:mb-[90px]">
          <h4 className="font-bold text-secondary text-[16px] leading-[1.25em] px-2 py-1 mb-5">
            جامعة كلكامش
          </h4>
          <h2 className="font-bold text-[48px] leading-[1.25em] px-4 py-2">
            كلياتنا
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4  gap-[15px] sm:gap-6 1920:gap-[34px] max-w-[375px] sm:max-w-[1280px] 1920:max-w-[1920px] mx-auto text-start">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="flex flex-col h-[693px] sm:h-[500px] 1920:h-[693px] bg-white"
            >
              <div className="relative h-[368px] sm:h-[266px] 1920:h-[368px] border-b-[7px] border-secondary flex items-center justify-center bg-[#DBDBDB]">
                <div className="relative aspect-square w-full max-w-[257px] sm:max-w-[183px] 1920:max-w-[257px]">
                  <Image
                    src={college.imageUrl}
                    alt={college.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <h2
                    className="font-bold mt-[24px] sm:mt-[17px] 1920:mt-[24px]
                               text-[24px] sm:text-[17px] 1920:text-[24px]
                               leading-[1.25em]"
                  >
                    {college.name}
                  </h2>
                  <p
                    className=" mt-[24px] sm:mt-[17px] 1920:mt-[24px]
                              text-[19px] sm:text-[14px] 1920:text-[19px]
                              leading-[1.65em] line-clamp-3"
                  >
                    {college.subtitle}
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="w-full mt-4
                                 text-[16px] sm:text-[12px] 1920:text-[16px]
                                 leading-[1.22em]
                                 py-[16px] sm:py-[12px] 1920:py-[16px]"
                >
                  قراءة المزيد
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
