'use client';

import React, { useState, useEffect } from 'react';
import { EasterEggWrapper } from './EasterEggWrapper';

/**
 * InteractiveFlower
 * 
 * Handcrafted Pixel Flower Easter Egg.
 * 
 * Interaction:
 * - Idle state: A closed seedling/bud.
 * - Interaction (Click / Space / Enter): Blooms into an open blossom,
 *   revealing a gentle festival secret message.
 * - After 4 seconds, returns to subtle rested bloom.
 */
export function InteractiveFlower() {
  const [isBloomed, setIsBloomed] = useState<boolean>(false);
  const [bloomCount, setBloomCount] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleBloom = () => {
    setIsBloomed(true);
    setBloomCount((prev) => prev + 1);
    setShowMessage(true);
  };

  useEffect(() => {
    if (!showMessage) return;
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [showMessage, bloomCount]);

  return (
    <div className="relative inline-block">
      <EasterEggWrapper
        ariaLabel={isBloomed ? 'A blooming Blossoms pixel flower' : 'A sleeping pixel seedling, tap to nurture'}
        tooltipText="Tap the seedling to see it bloom"
        onClick={handleBloom}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          {isBloomed ? (
            // Handcrafted Pixel Flower (Inline SVG representing crisp pixelated bloom)
            <svg
              width="24"
              height="24"
              viewBox="0 0 12 12"
              className="pixelated transition-transform duration-300 group-hover:scale-110"
              style={{ shapeRendering: 'crispEdges' }}
              aria-hidden="true"
            >
              {/* Stem & Leaves */}
              <rect x="5" y="6" width="2" height="5" fill="#C4E7E5" />
              <rect x="3" y="8" width="2" height="2" fill="#C4E7E5" />
              <rect x="7" y="7" width="2" height="2" fill="#C4E7E5" />
              {/* Flower Petals (Sunset Orange & Mango) */}
              <rect x="4" y="2" width="4" height="1" fill="#F36B2E" />
              <rect x="3" y="3" width="6" height="2" fill="#F36B2E" />
              <rect x="2" y="4" width="8" height="2" fill="#F36B2E" />
              <rect x="4" y="6" width="4" height="1" fill="#F36B2E" />
              {/* Flower Core */}
              <rect x="5" y="4" width="2" height="2" fill="#F59A1E" />
              {/* Highlight */}
              <rect x="5" y="4" width="1" height="1" fill="#FFFFFF" />
            </svg>
          ) : (
            // Handcrafted Pixel Seedling (Closed Bud)
            <svg
              width="24"
              height="24"
              viewBox="0 0 12 12"
              className="pixelated transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{ shapeRendering: 'crispEdges' }}
              aria-hidden="true"
            >
              <rect x="5" y="7" width="2" height="4" fill="#C4E7E5" />
              <rect x="5" y="4" width="2" height="3" fill="#F59A1E" />
              <rect x="4" y="5" width="4" height="2" fill="#F36B2E" />
            </svg>
          )}
        </div>
      </EasterEggWrapper>

      {/* Secret Message Overlay */}
      {showMessage && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-[#253C96] text-[#FFFFFF] text-xs font-mono shadow-lg border border-[#C4E7E5]/30 whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {bloomCount === 1 ? '✨ A blossom ignited!' : `🌸 Bloomed ${bloomCount} times!`}
        </div>
      )}
    </div>
  );
}
