'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/hooks';

export interface SpriteSheetAnimationProps {
  sheetSrc: string;
  frameWidth: number;
  frameHeight: number;
  totalFrames: number;
  frameRateFps?: number;
  scale?: number;
  alt?: string;
  isDecorative?: boolean;
  loop?: boolean;
  className?: string;
}

/**
 * SpriteSheetAnimation
 * 
 * Step-based frame-by-frame sprite animator for Aseprite exported sheets.
 * 
 * ACCESSIBILITY & RESOURCE CONSTRAINTS:
 * 1. Reduced Motion: Immediately freezes animation at frame 0 if prefers-reduced-motion is active.
 * 2. Visibility API: Pauses timer loop when browser tab is inactive to preserve device battery.
 * 3. Nearest-Neighbor: Forces pixelated scaling via CSS.
 */
export function SpriteSheetAnimation({
  sheetSrc,
  frameWidth,
  frameHeight,
  totalFrames,
  frameRateFps = 8,
  scale = 2,
  alt = '',
  isDecorative = true,
  loop = true,
  className = '',
}: SpriteSheetAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const isReducedMotion = usePrefersReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isReducedMotion || totalFrames <= 1) {
      return;
    }

    const intervalMs = 1000 / frameRateFps;

    const startLoop = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev + 1 >= totalFrames) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        startLoop();
      }
    };

    startLoop();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [totalFrames, frameRateFps, loop, isReducedMotion]);

  const activeFrame = isReducedMotion ? 0 : currentFrame;
  const displayWidth = frameWidth * scale;
  const displayHeight = frameHeight * scale;
  const backgroundOffsetX = -activeFrame * displayWidth;

  return (
    <div
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : alt}
      aria-hidden={isDecorative ? 'true' : undefined}
      className={`inline-block select-none overflow-hidden pixelated ${className}`}
      style={{
        width: `${displayWidth}px`,
        height: `${displayHeight}px`,
        backgroundImage: `url(${sheetSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `${backgroundOffsetX}px 0px`,
        backgroundSize: `${displayWidth * totalFrames}px ${displayHeight}px`,
        imageRendering: 'pixelated',
      }}
    />
  );
}
