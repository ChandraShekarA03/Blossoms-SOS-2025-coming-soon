import React from 'react';
import type { Metadata } from 'next';
import { WinnersView } from './WinnersView';
import { HISTORICAL_WINNERS_2025 } from '@/content/winners';
import { Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Competition Winners & Results',
  description: 'Verified student winners across 32 competition events at Blossoms School of Sciences (2024–2025 cycle).',
};

export default function WinnersPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1512] border border-[#FAF5F0]/15 text-xs font-bold text-[#C28854] mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>Competition Standings & Results</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#FAF5F0] tracking-tight leading-tight">
          Competition Winners & Honors.
        </h1>
        <p className="mt-4 text-base text-[#C4B4A7] leading-relaxed font-light">
          Celebrating student achievement across Art, Literary, Music, Theatre, and Dance preliminary rounds. All records below strictly represent the 2024–2025 festival cycle.
        </p>
      </div>

      {/* Main Results View */}
      <WinnersView winners={HISTORICAL_WINNERS_2025} />
    </div>
  );
}
