import React from 'react';
import type { Metadata } from 'next';
import { ScheduleView } from './ScheduleView';
import { HISTORICAL_SCHEDULE_2025 } from '@/content/schedule';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Festival Schedule & Timelines',
  description: 'View the official competition schedules, session times, and venue allocations for Blossoms School of Sciences.',
};

export default function SchedulePage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1512] border border-[#FAF5F0]/15 text-xs font-bold text-[#C28854] mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Competition Calendar & Venues</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#FAF5F0] tracking-tight leading-tight">
          Festival Schedule & Timelines.
        </h1>
        <p className="mt-4 text-base text-[#C4B4A7] leading-relaxed font-light">
          Explore dates, venue allocations, and preliminary schedules across all festival disciplines. Switch between editions below to view historical timelines or upcoming announcements.
        </p>
      </div>

      {/* Main Schedule Interactive View */}
      <ScheduleView historicalSchedule={HISTORICAL_SCHEDULE_2025} />
    </div>
  );
}
