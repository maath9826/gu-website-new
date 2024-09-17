import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  return (
    <section className="flex flex-col sm:flex-row w-full mt-[100px] sm:mt-[150px] 1920:mt-[180px]">
      <ContactInfoSection />
      <ContactFormSection />
    </section>
  );
}

function ContactInfoSection() {
  return (
    <div className="w-full sm:w-1/2 bg-white py-[49px] px-4 sm:py-[109px] sm:px-[83px] 1920:py-[145px] 1920:px-[110px]">
      <h2 className="text-[28px] sm:text-[50px] 1920:text-[70px] font-medium text-primary mb-[30px] sm:mb-[122px] 1920:mb-[162px] text-right leading-[1.22em]">
        نحب ان نسمع منك
      </h2>
      <div className="space-y-[40px] sm:space-y-[53px] 1920:space-y-[60px] mb-[40px] sm:mb-[53px] 1920:mb-[60px]">
        <ContactInfo title="البريد الالكتروني" value="info@gau.edu.iq" />
        <ContactInfo title="رقم الهاتف" value="07832000090 - 07732000090" />
        <ContactInfo
          title="عنوان الجامعة"
          value="العراق / بغداد / الدورة / حي الصحة / قرب جامع ياسين"
        />
      </div>
      <div>
        <p className="text-[24px] sm:text-[22px] 1920:text-[26px] text-primary/60 mb-[40px] sm:mb-[25px] 1920:mb-[38px] text-right leading-[1.33em]">
          تحميل تطبيق الجامعة
        </p>
        <div className="flex justify-start gap-[14px]">
          <Image
            src="/images/common/app-store.png"
            alt="Download on the App Store"
            width={135}
            height={40}
          />
          <Image
            src="/images/common/google-play.png"
            alt="Get it on Google Play"
            width={135}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

function ContactFormSection() {
  const t = useTranslations("Common.Contact.form");

  const inputFields = [
    {
      name: "fullName",
      label: t("name"),
      type: "text",
      placeholder: t("writeHere"),
      fullWidth: true,
    },
    {
      name: "email",
      label: t("email"),
      type: "email",
      placeholder: t("writeHere"),
      fullWidth: false,
    },
    {
      name: "phone",
      label: t("phoneNumber"),
      type: "tel",
      placeholder: t("writeHere"),
      fullWidth: false,
    },
    {
      name: "institution",
      label: t("institution"),
      type: "text",
      placeholder: t("writeHere"),
      fullWidth: true,
    },
    {
      name: "message",
      label: t("message"),
      type: "textarea",
      placeholder: t("writeYourMessage"),
      fullWidth: true,
    },
  ];

  return (
    <div className="w-full sm:w-1/2 bg-[#F0F1EC] py-[49px] px-4 sm:py-[109px] sm:px-[83px] 1920:py-[145px] 1920:px-[110px]">
      <h2 className="text-[28px] sm:text-[28px] 1920:text-[38px] font-medium text-primary leading-[1.35em] mb-[20px] sm:mb-[54px] 1920:mb-[71px] text-right">
        {t("title")}
      </h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-[28px] sm:gap-y-[30px] sm:gap-x-[21px] 1920:gap-y-[39px] 1920:gap-x-[28px]">
        {inputFields.map((field) => (
          <div
            key={field.name}
            className={`flex flex-col gap-[18px] sm:gap-[10px] 1920:gap-[18px] ${
              field.fullWidth ? "sm:col-span-2" : "sm:col-span-1"
            }`}
          >
            <label
              htmlFor={field.name}
              className="text-[16px] sm:text-[18px] 1920:text-[21px] font-medium text-primary leading-[1.35em] text-right"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                name={field.name}
                rows={4}
                placeholder={field.placeholder}
              />
            ) : (
              <Input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
        <div className="sm:col-span-full flex justify-end">
          <Button type="submit">{t("send")}</Button>
        </div>
      </form>
    </div>
  );
}

function ContactInfo({ title, value }: { title: string; value: string }) {
  return (
    <div className="text-right ">
      <p className="text-[24px] sm:text-[22px] 1920:text-[26px] text-primary/60 leading-[1.33em]">
        {title}
      </p>
      <p className="text-[18px] sm:text-[18px] 1920:text-[32px] text-primary leading-[1.33em]">
        {value}
      </p>
    </div>
  );
}
