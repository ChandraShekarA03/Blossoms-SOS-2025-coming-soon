import React from 'react';
import type { Metadata } from 'next';
import { CategoryCard } from '@/components/events/CategoryCard';
import { EVENT_CATEGORIES } from '@/content/events';
import { Sparkles, Info, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Festival Disciplines & Events',
  description: 'Explore the 32 competition events across Art, Literary, Music, Theatre, and Dance at Blossoms School of Sciences.',
};

export default function EventsPage() {
  const totalEvents = EVENT_CATEGORIES.reduce((acc, cat) => acc + cat.events.length, 0);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1512] border border-[#FAF5F0]/15 text-xs font-bold text-[#C28854] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Disciplines • {totalEvents} Official Sub-Events</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#FAF5F0] tracking-tight leading-tight">
          Explore Festival Disciplines.
        </h1>
        <p className="mt-4 text-base text-[#C4B4A7] leading-relaxed font-light">
          Blossoms features five foundational artistic pillars. Discover competition formats, evaluation criteria, and performance parameters for each category below.
        </p>

        {/* Guardrail Notice */}
        <div className="mt-6 p-4 rounded-xl bg-[#1C1512]/60 border border-[#FAF5F0]/15 flex items-start gap-3 text-xs text-[#C4B4A7]">
          <ShieldCheck className="w-4 h-4 text-[#C28854] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#FAF5F0]">Registration Notice:</strong> All listed events represent perennial festival competitions. Registration for the upcoming 2026 edition will open upon issuance of the official Deanery circular.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENT_CATEGORIES.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      {/* Informational Callout */}
      <div className="mt-16 p-8 rounded-3xl bg-[#1C1512] border border-[#FAF5F0]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/10 text-[#C28854] shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-[#FAF5F0]">Looking for Competition Timelines?</h3>
            <p className="text-xs sm:text-sm text-[#C4B4A7] mt-1 max-w-xl leading-relaxed font-light">
              Event venues and session schedules from the previous 2024–2025 cycle are preserved in our historical timeline. Upcoming dates will be populated as soon as the university calendar is released.
            </p>
          </div>
        </div>
        <a 
          href="/schedule" 
          className="shrink-0 px-5 py-2.5 rounded-xl bg-[#C28854] hover:bg-[#D4955B] text-[#140F0D] text-xs font-bold transition-colors"
        >
          View Schedule →
        </a>
      </div>
    </div>
  );
}
