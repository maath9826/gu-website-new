import React, { Fragment } from "react";
import FirstSection from "./FirstSection";

export default function PageWithFirstSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={className}>
      <FirstSection />
      {children}
    </main>
  );
}
