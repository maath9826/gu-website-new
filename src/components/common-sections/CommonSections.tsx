import { fetchEServices, fetchContact } from "@/lib/api_services/common-apis";
import EServicesSection from "./EServicesSection";
import ContactSection from "./ContactSection";
import { cookies, headers } from "next/headers";
import MapSection from "./MapSection";

const CommonSections: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let eServicesData;
  let contactData;

  try {
    eServicesData = await fetchEServices(lang);
    contactData = await fetchContact(lang);
  } catch (error) {
    console.error("Failed to fetch common sections data:", error);
  }

  return (
    <>
      <EServicesSection eServices={eServicesData} />
      <ContactSection contact={contactData} />
      <MapSection></MapSection>
    </>
  );
};

export default CommonSections;
