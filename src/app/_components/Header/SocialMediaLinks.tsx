"use client";

import React from "react";
import { Link } from "@/i18n.config";
import { twMerge } from "tailwind-merge";

const socialMedia = [
  {
    url: "https://www.instagram.com",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.facebook.com",
    icon: "ri-facebook-circle-fill",
  },
  {
    url: "https://www.linkedin.com",
    icon: "ri-linkedin-box-fill",
  },
  {
    url: "https://www.youtube.com",
    icon: "ri-youtube-fill",
  },
];

export default function SocialMediaLinks({ ...props }) {
  return (
    <div className={twMerge("hidden gap-[24px] sm:flex", props.className)}>
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative leading-none transition clickable-area hover:text-secondary hover:opacity-70"
        >
          <i className={`${social.icon} text-[20px]`}></i>
        </Link>
      ))}
    </div>
  );
}
