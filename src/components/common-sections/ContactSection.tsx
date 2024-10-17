"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Contact } from "@/lib/types";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axiosInstance from "@/lib/axios";
import useCommonStore from "@/lib/zustand/common";

interface ContactSectionProps {
  contact: Contact | undefined;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const t = useTranslations("Common.Contact");

  if (!contact) {
    return null;
  }

  return (
    <section className="mt-[100px] flex w-full flex-col sm:mt-[150px] sm:flex-row 1920:mt-[180px]">
      <ContactInfoSection contact={contact} />
      <ContactFormSection />
    </section>
  );
};

const ContactInfoSection: React.FC<{ contact: Contact }> = ({ contact }) => {
  const t = useTranslations("Common");
  const tContact = useTranslations("Home.contact");

  return (
    <div className="w-full bg-white px-4 py-[49px] sm:w-1/2 sm:px-[83px] sm:py-[109px] 1920:px-[110px] 1920:py-[145px]">
      <h2 className="mb-[30px] text-start text-[28px] font-medium leading-[1.22em] text-primary sm:mb-[122px] sm:text-[50px] 1920:mb-[162px] 1920:text-[70px]">
        {tContact("title")}
      </h2>
      <div className="mb-[40px] space-y-[40px] sm:mb-[53px] sm:space-y-[53px] 1920:mb-[60px] 1920:space-y-[60px]">
        <ContactInfo title={t("email")} value={contact.email} />
        <ContactInfo title={t("phoneNumber")} value={contact.phone} />
        <ContactInfo title={t("address")} value={contact.address} />
      </div>
      {/* <div>
        <p className="mb-[40px] text-start text-[24px] leading-[1.33em] text-primary/60 sm:mb-[25px] sm:text-[22px] 1920:mb-[38px] 1920:text-[26px]">
          {t("downloadApp")}
        </p>
        <div className="flex justify-start gap-[14px]">
          <Link href="">
          
          <Image
            src="/images/common/app-store.png"
            alt="Download on the App Store"
            width={135}
            height={40}

          />
          </Link>

          <Link href="">
          <Image
            src="/images/common/google-play.png"
            alt="Get it on Google Play"
            width={135}
            height={40}

          />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

const ContactFormSection: React.FC = () => {
  const t = useTranslations("Common.Contact.form");
  const tCommon = useTranslations("Common");
  const openSuccessModal = useCommonStore((state) => state.openSuccessModal);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputFields = [
    { name: "name", label: t("name"), type: "text", fullWidth: true },
    { name: "email", label: t("email"), type: "email", fullWidth: false },
    { name: "phone", label: t("phoneNumber"), type: "tel", fullWidth: false },
    {
      name: "c_name",
      label: t("institution"),
      type: "text",
      fullWidth: true,
    },
    { name: "message", label: t("message"), type: "textarea", fullWidth: true },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await axiosInstance.post("/contactus", formValues);
      if (response.status === 200) {
        openSuccessModal(tCommon("generalSuccessMessage"));
        // Reset form
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F0F1EC] px-4 py-[49px] sm:w-1/2 sm:px-[83px] sm:py-[109px] 1920:px-[110px] 1920:py-[145px]">
      <h2 className="mb-[20px] text-start text-[28px] font-medium leading-[1.35em] text-primary sm:mb-[54px] sm:text-[28px] 1920:mb-[71px] 1920:text-[38px]">
        {t("title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-y-[28px] sm:grid-cols-2 sm:gap-x-[21px] sm:gap-y-[30px] 1920:gap-x-[28px] 1920:gap-y-[39px]"
      >
        {inputFields.map((field) => (
          <div
            key={field.name}
            className={`flex flex-col gap-[18px] sm:gap-[10px] 1920:gap-[18px] ${
              field.fullWidth ? "sm:col-span-2" : "sm:col-span-1"
            }`}
          >
            <label
              htmlFor={field.name}
              className="text-start text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                name={field.name}
                rows={4}
                placeholder={t("writeYourMessage")}
                required
              />
            ) : (
              <Input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={t("writeHere")}
                required
              />
            )}
          </div>
        ))}
        <div className="flex justify-end sm:col-span-full">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? tCommon("loading") + "..." : t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

const ContactInfo: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="text-start">
      <p className="text-[24px] leading-[1.33em] text-primary/60 sm:text-[22px] 1920:text-[26px]">
        {title}
      </p>
      <p className="text-[18px] leading-[1.33em] text-primary sm:text-[18px] 1920:text-[32px]">
        {value}
      </p>
    </div>
  );
};

export default ContactSection;
