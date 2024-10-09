import { fetchLinks } from "@/lib/api_services/common-apis";
import TopbarClient from "./TopbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

const Topbar = async () => {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return contactInfo && <TopbarClient contactInfo={contactInfo} />;
};

export default Topbar;
