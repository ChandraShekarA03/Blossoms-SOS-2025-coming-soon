'use client';

import React, { useState } from 'react';
import { EventCategorySlug } from '@/types/content';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { Sparkles } from 'lucide-react';

interface CategoryEasterEggProps {
  category: EventCategorySlug;
  size?: number;
}

const CATEGORY_MESSAGES: Record<EventCategorySlug, string> = {
  art: '🎨 Art: Expressive vision, color theory, and composition across media.',
  literary: '📜 Literary: Thoughtful discourse, eloquence, and the power of language.',
  music: '🎵 Music: Resonance, acoustic precision, and harmony across genres.',
  theatre: '🎭 Theatre: Dramatic storytelling, character arcs, and stage presence.',
  dance: '🩰 Dance: Kinetic rhythm, mudra discipline, and synchronized choreography.',
};

export function CategoryEasterEgg({ category, size = 32 }: CategoryEasterEggProps) {
  const [activated, setActivated] = useState(false);

  const handleActivate = () => {
    setActivated(true);
    const timer = setTimeout(() => {
      setActivated(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      <button
        type="button"
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleActivate();
          }
        }}
        aria-label={`Interact with ${category} motif`}
        title="Click to view discipline ethos"
        className="p-3 rounded-xl bg-[#1C1512] border border-[#FAF5F0]/15 hover:border-[#C28854] hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C28854] text-[#C28854] group"
      >
        <CategoryIcon 
          category={category} 
          size={size} 
          className={activated ? 'animate-bounce text-[#F59A1E]' : 'group-hover:rotate-6 transition-transform'} 
        />
      </button>

      {/* Accessible Floating Toast Micro-Interaction */}
      {activated && (
        <div 
          role="status" 
          aria-live="polite"
          className="absolute -top-12 z-30 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#140F0D] border border-[#C28854] text-[#FAF5F0] text-[11px] font-medium shadow-xl flex items-center gap-1.5 animate-in fade-in zoom-in duration-150"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C28854] shrink-0" />
          <span>{CATEGORY_MESSAGES[category]}</span>
        </div>
      )}
    </div>
  );
}
