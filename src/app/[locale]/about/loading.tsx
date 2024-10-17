import Loading from "@/components/Loading";
import React from "react";

export default function loading() {
  return (
    <>
      <Loading></Loading>
      <div className="relative mt-[-137px] h-screen">
        <div className="h-[137px] bg-black/50"></div>
      </div>
    </>
  );
}
