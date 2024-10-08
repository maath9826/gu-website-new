"use client";

import { fetchLinks } from "@/lib/api_services/common-apis";
import TopbarClient from "./TopbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

const TopbarServer = () => {
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

  return <TopbarClient contactInfo={contactInfo} />;
};

export default TopbarServer;
