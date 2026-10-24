import React from 'react';
import Link from 'next/link';
import { EventCategory } from '@/types/content';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { ArrowRight, Layers } from 'lucide-react';

interface CategoryCardProps {
  category: EventCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl bg-[#1C1512]/80 border border-[#FAF5F0]/10 hover:border-[#C28854]/40 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1">
      <div>
        {/* Top Header with Category Icon & Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center p-2 bg-[#140F0D] border border-[#FAF5F0]/15 shadow-inner text-[#C28854] group-hover:scale-110 transition-transform"
            >
              <CategoryIcon category={category.slug} size={28} />
            </div>
            <div>
              <span 
                className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold text-[#140F0D] tracking-wide"
                style={{ backgroundColor: category.accentColor }}
              >
                {category.name}
              </span>
              <span className="block text-[10px] text-[#C4B4A7] font-mono mt-0.5">
                /{category.slug}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#C4B4A7] bg-[#140F0D] px-2.5 py-1 rounded-lg border border-[#FAF5F0]/10">
            <Layers className="w-3.5 h-3.5 text-[#C28854]" />
            <span className="font-semibold text-[#FAF5F0]">{category.events.length}</span>
            <span>Events</span>
          </div>
        </div>

        {/* Tagline */}
        <h3 className="text-xl font-serif font-bold text-[#FAF5F0] mb-2 group-hover:text-[#C28854] transition-colors leading-snug">
          {category.tagline}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed line-clamp-3 font-light">
          {category.description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-[#FAF5F0]/10 flex items-center justify-between">
        <span className="text-xs font-medium text-[#C4B4A7] group-hover:text-[#FAF5F0] transition-colors">
          Explore sub-events
        </span>
        <Link
          href={`/events/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C28854] group-hover:translate-x-1 transition-transform focus:outline-none focus:underline"
          aria-label={`View all ${category.name} events`}
        >
          <span>View Guidelines</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
