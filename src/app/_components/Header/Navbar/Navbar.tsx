"use client";

import { fetchLinks } from "@/lib/api_services/common-apis";
import NavbarClient from "./NavbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

export default function Navbar() {
  const [contactInfo, setContactInfo] = useState<RawContact | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        setContactInfo(await fetchLinks());
      } catch (error) {
        console.error("Failed to fetch contact information:", error);
      }
    };

    getData();
  });

  return <NavbarClient contactInfo={contactInfo} />;
}
