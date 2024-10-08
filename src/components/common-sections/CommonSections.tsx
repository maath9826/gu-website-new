import { fetchEServices, fetchContact } from "@/lib/api_services/common-apis";
import EServicesSection from "./EServicesSection";
import ContactSection from "./ContactSection";
import { cookies } from "next/headers";
import MapSection from "./MapSection";

const CommonSections: React.FC = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "ar";

  let eServicesData;
  let contactData;

  try {
    eServicesData = await fetchEServices(lang);
    contactData = await fetchContact(lang);
  } catch (error) {
    console.error("Failed to fetch common sections data:", error);
  }

  console.log(contactData);

  return (
    <>
      <EServicesSection eServices={eServicesData} />
      <ContactSection contact={contactData} />
      <MapSection></MapSection>
    </>
  );
};

export default CommonSections;
