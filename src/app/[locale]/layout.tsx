import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import useTextDirection from "@/app/_hooks/useTextDirection";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

import Script from "next/script";
import CommonSections from "@/components/common-sections/CommonSections";
import SuccessModal from "@/components/modals/SuccessModal";
import { usePathname } from "@/i18n.config";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  const dir = useTextDirection();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <script src="/js/scrollbarWidth.js" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <CommonSections></CommonSections>
          <Footer></Footer>
          <SuccessModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
