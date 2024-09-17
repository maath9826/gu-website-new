import React from "react";
import Section from "./Section";
import { twMerge } from "tailwind-merge";
import Wrapper from "./Wrapper";

export default function TitlesWrapper({ ...props }) {
  return (
    <Section>
      <Wrapper
        className={twMerge(
          "mb-[22px] sm:mb-[61px] flex flex-col items-center",
          props.className
        )}
      >
        {props.children}
      </Wrapper>
    </Section>
  );
}
