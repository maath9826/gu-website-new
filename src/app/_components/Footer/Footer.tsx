import { fetchLinks } from "@/lib/api_services/common-apis";
import FooterClient from "./FooterClient";

const Footer = async () => {
  let contactInfo;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <FooterClient contactInfo={contactInfo} />;
};

export default Footer;
