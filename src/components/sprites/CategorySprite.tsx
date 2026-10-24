"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { EventCategorySlug } from "@/types/content";

interface CategorySpriteProps {
  category: EventCategorySlug | "science";
  className?: string;
  size?: number;
}

export function CategorySprite({ category, className, size = 36 }: CategorySpriteProps) {
  return (
    <div
      role="img"
      aria-label={`${category} pixel-art motif`}
      className={cn("inline-flex items-center justify-center select-none", className)}
    >
      {category === "art" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Palette body */}
          <rect x="3" y="4" width="10" height="8" fill="#19244E" />
          <rect x="4" y="3" width="8" height="10" fill="#253C96" />
          <rect x="5" y="4" width="6" height="8" fill="#C4E7E5" />
          {/* Thumb hole */}
          <rect x="10" y="8" width="2" height="2" fill="#0D1326" />
          {/* Color Dabs */}
          <rect x="5" y="5" width="2" height="2" fill="#F36B2E" />
          <rect x="8" y="5" width="2" height="2" fill="#F59A1E" />
          <rect x="5" y="8" width="2" height="2" fill="#253C96" />
          {/* Paintbrush dipping */}
          <rect x="11" y="2" width="2" height="5" fill="#F59A1E" />
          <rect x="12" y="7" width="2" height="2" fill="#F36B2E" />
        </svg>
      )}

      {category === "literary" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scroll */}
          <rect x="3" y="4" width="9" height="9" fill="#C4E7E5" />
          <rect x="2" y="3" width="11" height="2" fill="#F59A1E" />
          <rect x="2" y="12" width="11" height="2" fill="#F59A1E" />
          {/* Scroll lines of text */}
          <rect x="5" y="6" width="5" height="1" fill="#19244E" />
          <rect x="5" y="8" width="5" height="1" fill="#19244E" />
          <rect x="5" y="10" width="3" height="1" fill="#19244E" />
          {/* Quill Pen */}
          <rect x="10" y="2" width="2" height="4" fill="#F36B2E" />
          <rect x="11" y="6" width="2" height="3" fill="#253C96" />
          <rect x="12" y="9" width="1" height="2" fill="#0D1326" />
        </svg>
      )}

      {category === "music" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Synth chassis */}
          <rect x="2" y="5" width="12" height="7" fill="#19244E" />
          <rect x="3" y="6" width="10" height="2" fill="#253C96" />
          {/* Sliders and knobs */}
          <rect x="4" y="6" width="1" height="2" fill="#F36B2E" />
          <rect x="6" y="6" width="1" height="2" fill="#F59A1E" />
          <rect x="8" y="6" width="1" height="2" fill="#C4E7E5" />
          {/* Piano keys */}
          <rect x="3" y="9" width="10" height="3" fill="#FFFFFF" />
          <rect x="4" y="9" width="1" height="2" fill="#0D1326" />
          <rect x="6" y="9" width="1" height="2" fill="#0D1326" />
          <rect x="8" y="9" width="1" height="2" fill="#0D1326" />
          <rect x="10" y="9" width="1" height="2" fill="#0D1326" />
          {/* Floating musical note */}
          <rect x="11" y="2" width="2" height="3" fill="#F36B2E" />
          <rect x="13" y="2" width="1" height="1" fill="#F59A1E" />
        </svg>
      )}

      {category === "theatre" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Mask - Comedy (Sunset Orange) */}
          <rect x="2" y="3" width="6" height="8" fill="#F36B2E" />
          <rect x="3" y="2" width="4" height="1" fill="#F59A1E" />
          <rect x="3" y="5" width="1" height="1" fill="#0D1326" />
          <rect x="6" y="5" width="1" height="1" fill="#0D1326" />
          {/* Smile */}
          <rect x="3" y="8" width="1" height="1" fill="#0D1326" />
          <rect x="4" y="9" width="2" height="1" fill="#0D1326" />
          <rect x="6" y="8" width="1" height="1" fill="#0D1326" />

          {/* Right Mask - Tragedy (Brilliant Blue) */}
          <rect x="8" y="6" width="6" height="8" fill="#253C96" />
          <rect x="9" y="5" width="4" height="1" fill="#C4E7E5" />
          <rect x="9" y="8" width="1" height="1" fill="#0D1326" />
          <rect x="12" y="8" width="1" height="1" fill="#0D1326" />
          {/* Frown */}
          <rect x="10" y="11" width="2" height="1" fill="#0D1326" />
          <rect x="9" y="12" width="1" height="1" fill="#0D1326" />
          <rect x="12" y="12" width="1" height="1" fill="#0D1326" />
        </svg>
      )}

      {category === "dance" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dancer silhouette / tap shoes in motion */}
          <rect x="7" y="2" width="2" height="2" fill="#F59A1E" />
          <rect x="6" y="4" width="4" height="5" fill="#F36B2E" />
          {/* Raised Arm */}
          <rect x="4" y="3" width="2" height="2" fill="#F59A1E" />
          <rect x="10" y="4" width="2" height="2" fill="#F59A1E" />
          {/* Dynamic legs */}
          <rect x="5" y="9" width="2" height="4" fill="#253C96" />
          <rect x="9" y="8" width="3" height="2" fill="#253C96" />
          <rect x="11" y="10" width="2" height="2" fill="#253C96" />
          {/* Shoes */}
          <rect x="4" y="13" width="3" height="1" fill="#C4E7E5" />
          <rect x="12" y="12" width="2" height="1" fill="#C4E7E5" />
          {/* Motion sparkle */}
          <rect x="2" y="8" width="1" height="1" fill="#C4E7E5" />
          <rect x="13" y="4" width="1" height="1" fill="#F59A1E" />
        </svg>
      )}

      {category === "science" && (
        <svg
          viewBox="0 0 16 16"
          width={size}
          height={size}
          className="pixelated drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flask Neck */}
          <rect x="7" y="3" width="2" height="3" fill="#C4E7E5" />
          <rect x="6" y="2" width="4" height="1" fill="#253C96" />
          {/* Flask Body */}
          <rect x="5" y="6" width="6" height="2" fill="#C4E7E5" />
          <rect x="4" y="8" width="8" height="2" fill="#C4E7E5" />
          <rect x="3" y="10" width="10" height="4" fill="#C4E7E5" />
          {/* Liquid */}
          <rect x="4" y="11" width="8" height="2" fill="#253C96" />
          <rect x="4" y="10" width="8" height="1" fill="#F36B2E" />
          {/* Sprouting leaf out of the beaker */}
          <rect x="6" y="1" width="1" height="2" fill="#F59A1E" />
          <rect x="5" y="0" width="2" height="1" fill="#C4E7E5" />
          <rect x="8" y="0" width="2" height="1" fill="#F59A1E" />
        </svg>
      )}
    </div>
  );
}
