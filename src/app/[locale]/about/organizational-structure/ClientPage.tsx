"use client";

import React from "react";
import FileOperations from "@/components/FileOperations";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { OrganizationalStructure } from "@/lib/api_services/organizational-structure-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

interface OrganizationalStructureClientPageProps {
  organizationalStructure: OrganizationalStructure | undefined;
}

export default function OrganizationalStructureClientPage({
  organizationalStructure,
}: OrganizationalStructureClientPageProps) {
  if (!organizationalStructure) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle
        title="الهيكل التنظيمي"
        fileOperations={
          <FileOperations
            showDownloadButton={true}
            pdfStyles={{ body: { flexDirection: "column" } }}
          />
        }
      />
      <Section className="text-start">
        <Wrapper>
          <Image
            id="print-section"
            src={getImageUrl(organizationalStructure.file)}
            alt="Organizational Structure"
            width={1200}
            height={800}
            className="w-full"
          />
        </Wrapper>
      </Section>
    </main>
  );
}
