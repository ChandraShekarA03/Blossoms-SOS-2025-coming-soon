"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface PixelButterflyProps {
  className?: string;
  size?: number;
}

export function PixelButterfly({ className, size = 28 }: PixelButterflyProps) {
  const [fluttering, setFluttering] = useState(false);

  return (
    <div
      role="img"
      aria-label="Decorative pixel-art butterfly"
      className={cn("inline-block select-none pointer-events-auto transition-transform duration-300", className)}
      onMouseEnter={() => setFluttering(true)}
      onMouseLeave={() => setFluttering(false)}
      onClick={() => setFluttering(!fluttering)}
    >
      <svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        className={cn("pixelated drop-shadow-md animate-flutter", fluttering && "scale-125")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antennae */}
        <rect x="5" y="2" width="1" height="2" fill="#19244E" />
        <rect x="10" y="2" width="1" height="2" fill="#19244E" />
        <rect x="4" y="1" width="1" height="1" fill="#F36B2E" />
        <rect x="11" y="1" width="1" height="1" fill="#F36B2E" />

        {/* Head & Body */}
        <rect x="7" y="4" width="2" height="2" fill="#F36B2E" />
        <rect x="7" y="6" width="2" height="6" fill="#19244E" />

        {/* Left Upper Wing */}
        <rect x="3" y="3" width="3" height="4" fill="#F59A1E" />
        <rect x="2" y="4" width="1" height="3" fill="#F36B2E" />
        <rect x="4" y="4" width="1" height="2" fill="#C4E7E5" />

        {/* Right Upper Wing */}
        <rect x="10" y="3" width="3" height="4" fill="#F59A1E" />
        <rect x="13" y="4" width="1" height="3" fill="#F36B2E" />
        <rect x="11" y="4" width="1" height="2" fill="#C4E7E5" />

        {/* Left Lower Wing */}
        <rect x="4" y="8" width="2" height="3" fill="#253C96" />
        <rect x="3" y="9" width="1" height="2" fill="#C4E7E5" />

        {/* Right Lower Wing */}
        <rect x="10" y="8" width="2" height="3" fill="#253C96" />
        <rect x="12" y="9" width="1" height="2" fill="#C4E7E5" />
      </svg>
    </div>
  );
}
