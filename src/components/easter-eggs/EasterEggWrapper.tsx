'use client';

import React, { KeyboardEvent } from 'react';
import { handleKeyboardActivation } from '@/lib/a11y';

interface EasterEggWrapperProps {
  children: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
  className?: string;
  tooltipText?: string;
}

/**
 * EasterEggWrapper
 * 
 * Enforces the Easter egg accessibility contract:
 * - Proper keyboard interaction (Enter / Space activation)
 * - Clear focus-visible ring adhering to brand palette
 * - Non-blocking pointer events when idle
 * - Mobile touch-target sizing (minimum 44x44px hit area)
 */
export function EasterEggWrapper({
  children,
  ariaLabel,
  onClick,
  className = '',
  tooltipText,
}: EasterEggWrapperProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    handleKeyboardActivation(e, onClick);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      title={tooltipText || ariaLabel}
      className={`group relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-1 rounded-lg cursor-pointer transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59A1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#19244E] active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
