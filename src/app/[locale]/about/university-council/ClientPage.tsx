import React from "react";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { CouncilMember } from "@/lib/api_services/council-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import DynamicImage from "@/components/DynamicImage";

interface UniversityCouncilClientPageProps {
  councilMembers: CouncilMember[] | undefined;
}

export default function UniversityCouncilClientPage({
  councilMembers,
}: UniversityCouncilClientPageProps) {
  if (!councilMembers) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle title="مجلس الجامعة" />
      <Section className="text-start">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-4 sm:gap-[22px] 1920:grid-cols-5">
            <PresidentCard member={councilMembers[0]} />
            {councilMembers.slice(1).map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}

function PresidentCard({ member }: { member: CouncilMember }) {
  return (
    <div className="flex flex-col justify-between bg-white sm:col-span-3 sm:px-[20px]">
      <div className="flex h-full items-center">
        <div className="flex h-full w-full flex-col gap-[25px] text-primary sm:flex-row sm:py-[20px]">
          <DynamicImage
            src={getImageUrl(member.image)}
            alt={member.name}
            wrapperClass="w-full sm:w-[40%]"
          />
          <div className="flex flex-col justify-center px-[8px] py-[20px] sm:w-[60%] sm:items-start sm:justify-start sm:px-[12px] sm:py-[40px] 1920:px-[20px]">
            <h2 className="text-[18px] font-bold text-foreground sm:text-[26px] 1920:text-[34px]">
              {member.name}
            </h2>
            <h3 className="mt-[10px] text-[14px] font-medium">
              {member.position}
            </h3>
            <p className="mt-[16px] text-[16px] leading-[24px] sm:mt-[28px] 1920:mt-[58px]">
              {member.description}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}

function MemberCard({ member }: { member: CouncilMember }) {
  return (
    <div className="flex flex-col justify-between bg-white px-[18px]">
      <div className="flex flex-col gap-[35px] pb-[57px] pt-[18px]">
        <DynamicImage
          src={getImageUrl(member.image)}
          alt={member.name}
          className="w-full object-cover"
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[21px] font-medium text-foreground">
            {member.name}
          </h2>
          <h3 className="mt-[12px] max-w-[200px] text-[16px] font-medium leading-[24px] text-primary">
            {member.position}
          </h3>
          <p className="mt-[12px] text-[14px] text-muted">
            {member.description}
          </p>
        </div>
      </div>
      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}
