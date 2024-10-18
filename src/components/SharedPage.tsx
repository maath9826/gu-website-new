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
      <FormattedTextViewer content="content"></FormattedTextViewer>
    </main>
  );
}
