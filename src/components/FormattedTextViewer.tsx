import React from "react";

import Wrapper from "./Wrapper";
import FileOperations from "./FileOperations";
import { Button } from "./ui/button";

export default function FormattedTextViewer({
  children,
}: {
  children: string;
}) {
  return (
    <Wrapper className="mx-auto mt-[36px] flex max-w-none flex-col gap-[35px] bg-white px-[24px] py-[40px] text-justify sm:px-[40px]">
      <div className="tiptap" id="print-section">
        {children}
      </div>
      <FileOperations className="self-end"></FileOperations>
    </Wrapper>
  );
}
