"use client";

import FileOperations from "@/components/FileOperations";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";

import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";

import React from "react";

export default function OrganizationalStructureClientPage() {
  return (
    <main>
      <ActionsTitle
        title="الهيكل التنظيمي"
        fileOperations={
          <FileOperations
            showDownloadButton={true}
            pdfStyles={{ body: { flexDirection: "column" } }}
          ></FileOperations>
        }
      ></ActionsTitle>
      <Section className="text-start">
        <Wrapper>
          <img
            id="print-section"
            src="/images/hero-bg.jpg"
            alt="hero-bg"
            className="w-full"
          />
        </Wrapper>
      </Section>
    </main>
  );
}
