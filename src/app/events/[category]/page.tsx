import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EVENT_CATEGORIES } from '@/content/events';
import { SubEventCard } from '@/components/events/SubEventCard';
import { CategoryEasterEgg } from '@/components/easter-eggs/CategoryEasterEgg';
import { ArrowLeft, Layers, ShieldCheck } from 'lucide-react';
import { EventCategorySlug } from '@/types/content';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return EVENT_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = EVENT_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} Competitions | Blossoms SOS`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = EVENT_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#C4B4A7] hover:text-[#C28854] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Disciplines</span>
        </Link>
      </div>

      {/* Category Hero Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1512]/80 border border-[#FAF5F0]/15 shadow-xl mb-14 relative overflow-hidden">
        {/* Subtle bronze top accent bar */}
        <div 
          className="absolute top-0 inset-x-0 h-1.5"
          style={{ backgroundColor: category.accentColor }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold text-[#140F0D] tracking-wide uppercase"
                style={{ backgroundColor: category.accentColor }}
              >
                {category.name}
              </span>
              <span className="text-xs text-[#C4B4A7] font-mono">
                /{category.slug}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF5F0] tracking-tight leading-tight">
              {category.tagline}
            </h1>

            <p className="text-sm sm:text-base text-[#C4B4A7] leading-relaxed font-light">
              {category.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#C4B4A7]">
              <div className="flex items-center gap-1.5 font-semibold">
                <Layers className="w-4 h-4 text-[#C28854]" />
                <span>{category.events.length} Official Competitions</span>
              </div>
              <span>•</span>
              <span>Deanery Preliminary Rounds</span>
            </div>
          </div>

          {/* Interactive Category Ethos Easter Egg */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/15 shrink-0">
            <span className="text-[10px] font-mono text-[#C28854] font-bold mb-3 uppercase tracking-wider">
              Discipline Ethos
            </span>
            <CategoryEasterEgg category={category.slug as EventCategorySlug} size={40} />
            <span className="text-[10px] text-[#C4B4A7] mt-2">Tap to view theme</span>
          </div>
        </div>

        {/* Guardrail Callout */}
        <div className="mt-8 pt-6 border-t border-[#FAF5F0]/10 flex items-start gap-2.5 text-xs text-[#C4B4A7]">
          <ShieldCheck className="w-4 h-4 text-[#C28854] shrink-0 mt-0.5" />
          <p>
            Evaluation rubrics and criteria below reflect verified inter-deanery guidelines. Venue allocations from the 2025 cycle are noted for spatial reference.
          </p>
        </div>
      </div>

      {/* Sub-Events Grid */}
      <section aria-labelledby="sub-events-heading" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 id="sub-events-heading" className="text-2xl font-serif text-[#FAF5F0]">
            {category.name} Competitions & Evaluation Criteria
          </h2>
          <span className="text-xs text-[#C4B4A7] font-mono">
            {category.events.length} Events Listed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.events.map((event) => (
            <SubEventCard 
              key={event.id} 
              event={event} 
              accentColor={category.accentColor} 
            />
          ))}
        </div>
      </section>

      {/* Back Navigation Bar */}
      <div className="mt-16 pt-8 border-t border-[#FAF5F0]/10 flex items-center justify-between">
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#C28854] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Categories</span>
        </Link>
        <Link 
          href="/schedule" 
          className="text-xs text-[#C4B4A7] hover:text-[#C28854] transition-colors"
        >
          Check Event Dates & Venues →
        </Link>
      </div>
    </div>
  );
}
