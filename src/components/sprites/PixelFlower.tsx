"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface PixelFlowerProps {
  className?: string;
  size?: number; // base size in pixels
  showLabel?: boolean;
}

export function PixelFlower({ className, size = 32, showLabel = false }: PixelFlowerProps) {
  const [bloomed, setBloomed] = useState(false);
  const [blooming, setBlooming] = useState(false);

  const handleActivate = () => {
    if (blooming) return;
    setBlooming(true);
    setBloomed((prev) => !prev);
    setTimeout(() => {
      setBlooming(false);
    }, 700);
  };

  return (
    <div className={cn("inline-flex flex-col items-center select-none", className)}>
      <button
        type="button"
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
        aria-label="Interactive Pixel Flower — click or press Space to bloom"
        title="Click to bloom the Blossoms pixel flower!"
        className={cn(
          "relative cursor-pointer transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36B2E] rounded-md p-1",
          blooming && "animate-bloom"
        )}
        style={{ width: size + 8, height: size + 8 }}
      >
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem & Leaves */}
          <rect x="7" y="9" width="2" height="6" fill="#253C96" />
          <rect x="5" y="11" width="2" height="2" fill="#C4E7E5" />
          <rect x="9" y="10" width="2" height="2" fill="#C4E7E5" />
          <rect x="7" y="15" width="2" height="1" fill="#19244E" />

          {/* Flower Center */}
          <rect x="7" y="5" width="2" height="2" fill="#F59A1E" />

          {/* Petals - Morph when bloomed */}
          {bloomed ? (
            <>
              {/* Bloomed state - expanded 5-color petals */}
              <rect x="6" y="2" width="4" height="2" fill="#F36B2E" />
              <rect x="7" y="1" width="2" height="1" fill="#F59A1E" />
              <rect x="3" y="5" width="3" height="2" fill="#F36B2E" />
              <rect x="10" y="5" width="3" height="2" fill="#F36B2E" />
              <rect x="6" y="8" width="4" height="2" fill="#F36B2E" />
              {/* Petal Highlights */}
              <rect x="4" y="4" width="2" height="2" fill="#C4E7E5" />
              <rect x="10" y="4" width="2" height="2" fill="#C4E7E5" />
              <rect x="4" y="7" width="2" height="1" fill="#C4E7E5" />
              <rect x="10" y="7" width="2" height="1" fill="#C4E7E5" />
            </>
          ) : (
            <>
              {/* Bud state - compact */}
              <rect x="7" y="3" width="2" height="2" fill="#F36B2E" />
              <rect x="5" y="5" width="2" height="2" fill="#F36B2E" />
              <rect x="9" y="5" width="2" height="2" fill="#F36B2E" />
              <rect x="7" y="7" width="2" height="2" fill="#F36B2E" />
              <rect x="6" y="4" width="1" height="1" fill="#F59A1E" />
              <rect x="9" y="4" width="1" height="1" fill="#F59A1E" />
            </>
          )}
        </svg>
      </button>
      {showLabel && (
        <span className="text-[10px] uppercase font-mono text-[#C4E7E5]/70 mt-0.5 tracking-wider">
          {bloomed ? "Bloomed!" : "Tap Flower"}
        </span>
      )}
    </div>
  );
}
