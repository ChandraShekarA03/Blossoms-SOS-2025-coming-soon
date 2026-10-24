/* eslint-disable @next/next/no-img-element */
import React from 'react';

export interface PixelSpriteProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  scale?: number;
  className?: string;
  isDecorative?: boolean;
}

/**
 * PixelSprite
 * 
 * Renders pixel-art sprites with pixel-perfect nearest-neighbor scaling.
 * Enforces accessibility standards: decorative sprites are hidden from screen readers,
 * while interactive/informative sprites require descriptive alternative text.
 */
export function PixelSprite({
  src,
  alt = '',
  width,
  height,
  scale = 2,
  className = '',
  isDecorative = true,
}: PixelSpriteProps) {
  const renderedWidth = width * scale;
  const renderedHeight = height * scale;

  return (
    <span
      className={`inline-block select-none overflow-hidden ${className}`}
      style={{
        width: `${renderedWidth}px`,
        height: `${renderedHeight}px`,
      }}
      aria-hidden={isDecorative ? 'true' : undefined}
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : alt}
    >
      <img
        src={src}
        alt={isDecorative ? '' : alt}
        width={renderedWidth}
        height={renderedHeight}
        className="w-full h-full object-contain pixelated"
        loading="lazy"
        draggable={false}
      />
    </span>
  );
}
