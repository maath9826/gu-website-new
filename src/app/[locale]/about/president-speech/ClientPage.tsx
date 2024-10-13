import React from "react";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { PresidentSpeech } from "@/lib/api_services/president-speech-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import FileOperations from "@/components/FileOperations";
import DynamicImage from "@/components/DynamicImage";

interface PresidentSpeechClientPageProps {
  presidentSpeech: PresidentSpeech | undefined;
}

export default function PresidentSpeechClientPage({
  presidentSpeech,
}: PresidentSpeechClientPageProps) {
  console.log(presidentSpeech);
  if (!presidentSpeech) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle
        title="كلمة رئيس الجامعة"
        fileOperations={
          <FileOperations
            showDownloadButton={true}
            pdfStyles={{ body: { flexDirection: "column" } }}
          ></FileOperations>
        }
      />
      <Section className="text-start">
        <Wrapper>
          <PresidentCard presidentSpeech={presidentSpeech} />
        </Wrapper>
      </Section>
    </main>
  );
}

function PresidentCard({
  presidentSpeech,
}: {
  presidentSpeech: PresidentSpeech;
}) {
  return (
    <div className="print flex flex-col justify-between bg-white">
      <div
        className="flex flex-col gap-[31px] text-primary sm:flex-row-reverse sm:gap-[70px] sm:p-[50px] 1920:gap-[140px] print:flex-col"
        id="print-section"
      >
        <div className="flex flex-col gap-[50px] sm:w-[378px] sm:min-w-[378px]">
          <DynamicImage
            src={getImageUrl(presidentSpeech.image)}
            alt={presidentSpeech.name}
          />
          <div className="flex flex-col px-[20px] sm:px-0">
            <h2 className="text-[18px] font-bold text-foreground sm:text-[22px] 1920:text-[34px]">
              {presidentSpeech.name}
            </h2>
            <h3 className="mt-[10px] text-[14px] font-medium">
              {presidentSpeech.position}
            </h3>
          </div>
        </div>
        <p className="px-[20px] text-justify text-[16px] leading-[1.75em] sm:px-0 sm:text-[20px]">
          {presidentSpeech.description}
        </p>
      </div>
      <div className="mx-auto mt-[20px] h-[5px] w-[calc(100%-40px)] bg-secondary sm:mt-0 sm:w-[calc(100%-100px)]"></div>
    </div>
  );
}
