import React from "react";
import Loading from "./Loading";

export default function LoadingWithNavbar() {
  return (
    <>
      <Loading></Loading>
      <div className="relative mt-[-137px] h-screen">
        <div className="h-[137px] bg-black/50"></div>
      </div>
    </>
  );
}
