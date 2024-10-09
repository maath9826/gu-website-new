import { fetchLinks } from "@/lib/api_services/common-apis";
import NavbarClient from "./NavbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

export default async function Navbar() {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <NavbarClient contactInfo={contactInfo} />;
}
