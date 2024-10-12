import React from "react";
import { useTranslations } from "next-intl";
import SurveyForm from "@/components/SurveyForm";

export default function EmployerSurveyPage() {
  const tNavLinks = useTranslations("Header.navLinks");

  return (
    <SurveyForm
      title={tNavLinks("employerSurvey")}
      endpoint="/employer_survey"
    />
  );
}
