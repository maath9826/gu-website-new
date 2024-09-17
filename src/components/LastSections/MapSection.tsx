"use client";

import MapLinkButton from "@/components/MapLinkButton";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function MapSection() {
  return (
    <div className="relative h-[330px] sm:h-[653px] w-full overflow-hidden mt-[82px] sm:mt-0">
      {/* <LocationMap latitude={33.222307} longitude={44.3888341}></LocationMap> */}
      <iframe
        className="gmapelement w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.686773749098!2d44.39140365950111!3d33.222306973591124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d51e5f965023%3A0x269c2efce4992572!2z2KzYp9mF2LnYqSDZg9mE2YPYp9mF2LQg2KfZhNin2YfZhNmK2Kk!5e0!3m2!1sar!2siq!4v1717235472677!5m2!1sar!2siq"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <div className="absolute start-[16px] top-[16px] z-[10000]">
        <MapLinkButton
          latitude={33.222307}
          longitude={44.3888341}
        ></MapLinkButton>
      </div> */}
    </div>
  );
}
