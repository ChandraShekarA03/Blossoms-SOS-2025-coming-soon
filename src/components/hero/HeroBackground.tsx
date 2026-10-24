'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import GhostFibers with SSR disabled for WebGL canvas
const GhostFibers = dynamic(() => import('./GhostFibers'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#140F0D]" aria-hidden="true" />,
});

interface HeroBackgroundProps {
  children?: React.ReactNode;
}

/**
 * HeroBackground
 * 
 * Minimalist, high-end Corporate Brown Hero with React Bits GhostFibers.
 * Palette:
 * - Base: Deep Espresso Obsidian (#140F0D)
 * - Fiber Glow: Warm Bronze (#C28854)
 * - Fiber Highlights: Pale Champagne (#FAF5F0)
 * - Secondary: Deep Roast (#1E1512)
 */
export function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#140F0D]">
      {/* Layer 0: React Bits GhostFibers Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75">
        <GhostFibers
          glowColor="#C28854"
          lineColor="#FAF5F0"
          secondaryColor="#1E1512"
          gradient="depth"
          layers={3}
          twist={1.2}
          threads={72}
          fiberStyle="dots"
          depthOfField={0.85}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          speed={0.4}
          brightness={1.05}
          vignette={0.4}
          grain={0.04}
        />
      </div>

      {/* Layer 1: Minimalist Ambient Radial Vignette */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(20, 15, 13, 0.2) 0%, rgba(20, 15, 13, 0.65) 75%, #140F0D 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Foreground Content (relative z-10 for unblocked clicks) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {children}
      </div>
    </div>
  );
}
