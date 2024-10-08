import React from "react";
import Link from "next/link";
import { RawContact } from "@/lib/types";

interface SocialMediaLinksProps {
  contactInfo: RawContact | undefined;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ contactInfo }) => {
  if (!contactInfo) return <></>;

  const socialLinks = [
    { icon: "ri-instagram-line", url: contactInfo.instagram },
    { icon: "ri-facebook-circle-fill", url: contactInfo.facebook },
    { icon: "ri-linkedin-box-fill", url: contactInfo.linkedin },
    { icon: "ri-youtube-fill", url: contactInfo.youtube },
  ];

  return (
    <div className="flex gap-[26px] sm:gap-[24px]">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[24px] hover:text-secondary"
        >
          <i className={link.icon}></i>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
