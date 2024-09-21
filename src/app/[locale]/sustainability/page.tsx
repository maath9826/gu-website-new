import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import useTextDirection from "@/app/_hooks/useTextDirection";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { shareCurrentURL } from "@/lib/utils";
import FormattedTextViewer from "@/components/FormattedTextViewer";

export default function SustainabilityPage() {
  return (
    <FormattedTextViewer
      content={` نص تجريبي يوضع للعناوين الرئيسية في بعض الصفحات ويتم استبداله
      لاحقا حسب المحتوى المتوفر هذا النص هو نص تجريبي يبدأ بعد النقطة
      وقد تم وضعه كمحتوى تجريبي. شهدت الملاعب المغلقة لجامعة كلكامش
      لقاءات نسوية لمراحل المتوسطة والإعدادية بين تربيات الكرخ الثانية
      والرصافة الثانية بمعدل فريقين لكل تربية بهدف الكشف عن الخبرات
      والإمكانيات الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة
      التي تساهم في حصد الإنجازات والبطولات خلال المشاركات الدولية.
      الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة وعلى كافة
      الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
      المستدامة في خدمة المجتمع.`}
    ></FormattedTextViewer>
  );
}
