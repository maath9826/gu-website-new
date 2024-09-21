import React from "react";

import Wrapper from "./Wrapper";
import FormattedTextViewerActionsSection from "./FormattedTextViewerActionsSection";
import { Button } from "./ui/button";

export default function FormattedTextViewer({ content }: { content: string }) {
  return (
    <Wrapper
      className="mx-auto mt-[36px] flex flex-col gap-[35px] bg-white px-[24px] py-[40px] text-justify sm:px-[40px]"
      mobileMaxWidth="none"
    >
      <div className="tiptap" id="print-section">
        {content}
      </div>
      <FormattedTextViewerActionsSection></FormattedTextViewerActionsSection>
    </Wrapper>
  );
}
