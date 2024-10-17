"use client";

import React from "react";
import { BarLoader, BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed start-0 top-0 z-[10000000000] w-full">
      <BarLoader
        color="#99afc9"
        cssOverride={{ width: "100%" }}
        speedMultiplier={0.5}
      />
    </div>
  );
}
