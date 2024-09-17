import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MapLinkButton = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const t = useTranslations("Common.Map");

  const openGoogleMaps = () => {
    // Check if the device is running iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Check if the device is running Android
    const isAndroid = /Android/.test(navigator.userAgent);

    let url;
    if (isIOS) {
      // Use the Apple Maps URL scheme
      url = `maps://maps.apple.com/?q=${latitude},${longitude}`;
    } else if (isAndroid) {
      // Use the Google Maps Android app URL scheme
      url = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
    } else {
      // Fallback to web URL for other devices
      url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }

    // For non-mobile devices (like Windows laptops), always open in a new tab
    if (!isIOS && !isAndroid) {
      window.open(url, "_blank");
    } else {
      // Attempt to open the URL for mobile devices
      window.location.href = url;

      // Fallback to opening in a new tab if the app doesn't open
      setTimeout(() => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
          "_blank"
        );
      }, 500);
    }
  };

  return (
    <Button onClick={openGoogleMaps} className="gap-1.5 items-center">
      <i className="ri-map-pin-2-fill text-[16px] mb-1"></i>
      <span className="text-[12px]">{t("openInGoogleMaps")}</span>
    </Button>
  );
};

export default MapLinkButton;
