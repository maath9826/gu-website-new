import React from "react";
import ActionsTitle from "./page/FirstTitleSection/ActionsTitle";
import FileOperations from "./FileOperations";
import Section from "./Section";
import Wrapper from "./Wrapper";
import FormattedTextViewer from "./FormattedTextViewer";

export default function SharedPage() {
  return (
    <main>
      <ActionsTitle title="الهيكل التنظيمي"></ActionsTitle>
      <img
        id="print-section"
        src="/images/hero-bg.jpg"
        alt="hero-bg"
        className="w-full"
      />
      <FormattedTextViewer>
        نص تجريبي يوضع للعناوين الرئيسية في بعض الصفحات ويتم استبداله لاحقا حسب
        المحتوى المتوفر هذا النص هو نص تجريبي يبدأ بعد النقطة وقد تم وضعه كمحتوى
        تجريبي. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة
        والإعدادية بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل
        تربية بهدف الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا
        الوطنية بالدماء الشابة التي تساهم في حصد الإنجازات والبطولات خلال
        المشاركات الدولية. الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة
        وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
        المستدامة في خدمة المجتمع.
      </FormattedTextViewer>
    </main>
  );
}
