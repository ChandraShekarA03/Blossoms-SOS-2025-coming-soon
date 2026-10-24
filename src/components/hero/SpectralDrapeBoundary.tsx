'use client';

import React, { useMemo } from 'react';
import { useMounted, usePrefersReducedMotion } from '@/lib/hooks';

interface SpectralDrapeBoundaryProps {
  className?: string;
  isSpectralDrapeInstalled?: boolean;
}

/**
 * SpectralDrapeBoundary
 * 
 * Clean isolation boundary for the React Bits Pro Spectral Drape component.
 * Free of wipeout elements, blocking overlays, and CPU thrashing.
 */
export function SpectralDrapeBoundary({
  className = '',
  isSpectralDrapeInstalled = false,
}: SpectralDrapeBoundaryProps) {
  const hasMounted = useMounted();
  const prefersReducedMotion = usePrefersReducedMotion();

  const webGLSupported = useMemo(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return Boolean(gl);
    } catch {
      return false;
    }
  }, []);

  // SSR placeholder
  if (!hasMounted) {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none bg-[#080E24] ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  // Reduced motion mode
  if (prefersReducedMotion) {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none bg-radial from-[#0E193C] via-[#080E24] to-[#040712] opacity-80 ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  // Ambient Fallback with Elite Blue (#0251B0) and Volt Lime (#D1FF42)
  if (!isSpectralDrapeInstalled || !webGLSupported) {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} 
        aria-hidden="true"
        data-testid="spectral-drape-fallback"
      >
        {/* Elite Blue ambient glow */}
        <div 
          className="absolute -top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[650px] rounded-full opacity-30 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, #0251B0 0%, #080E24 70%)',
          }}
        />
        {/* Volt Lime subtle high-energy accent */}
        <div 
          className="absolute -bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #D1FF42 0%, transparent 60%)',
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
