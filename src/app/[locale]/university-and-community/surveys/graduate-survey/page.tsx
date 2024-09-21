import React from "react";
import { useTranslations } from "next-intl";
import SurveyForm from "@/components/SurveyForm";

export default function GraduatesSurveyPage() {
  const tNavLinks = useTranslations("Header.navLinks");

  return <SurveyForm title={tNavLinks("graduateSurvey")} />;
}
