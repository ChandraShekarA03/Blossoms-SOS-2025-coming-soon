'use client';

import React, { useState } from 'react';
import { ScheduleItem, EventCategorySlug } from '@/types/content';
import { Calendar, Clock, MapPin, Filter, AlertCircle, History, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScheduleViewProps {
  historicalSchedule: ScheduleItem[];
}

export function ScheduleView({ historicalSchedule }: ScheduleViewProps) {
  const [activeEdition, setActiveEdition] = useState<'upcoming' | '2025'>('2025');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHistorical = historicalSchedule.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.venueDisplay.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group historical items by date
  const groupedByDate: Record<string, ScheduleItem[]> = {};
  filteredHistorical.forEach((item) => {
    if (!groupedByDate[item.date]) {
      groupedByDate[item.date] = [];
    }
    groupedByDate[item.date].push(item);
  });

  const categoryColor: Record<EventCategorySlug, string> = {
    art: '#C28854',
    literary: '#D4955B',
    music: '#C28854',
    theatre: '#C4B4A7',
    dance: '#D4955B',
  };

  return (
    <div className="space-y-10">
      {/* Edition Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/15 w-fit" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeEdition === '2025'}
          onClick={() => setActiveEdition('2025')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeEdition === '2025'
              ? 'bg-[#C28854] text-[#140F0D] shadow-md'
              : 'text-[#C4B4A7] hover:text-[#FAF5F0]'
          }`}
        >
          <History className="w-4 h-4 text-[#140F0D]" />
          <span>2024–2025 Historical Timeline</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#140F0D] text-[#FAF5F0] font-mono">
            32 Events
          </span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeEdition === 'upcoming'}
          onClick={() => setActiveEdition('upcoming')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeEdition === 'upcoming'
              ? 'bg-[#C28854] text-[#140F0D] shadow-md'
              : 'text-[#C4B4A7] hover:text-[#FAF5F0]'
          }`}
        >
          <Sparkles className="w-4 h-4 text-[#C28854]" />
          <span>Upcoming Edition (2026)</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#C28854]/20 text-[#C28854] font-mono">
            Pending
          </span>
        </button>
      </div>

      {/* UPCOMING TAB: Intentional Graceful Empty State */}
      {activeEdition === 'upcoming' && (
        <div className="p-12 sm:p-16 rounded-3xl bg-[#1C1512]/50 border border-[#FAF5F0]/10 text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
          <div className="w-14 h-14 rounded-2xl bg-[#140F0D] border border-[#C28854]/30 flex items-center justify-center text-[#C28854]">
            <Calendar className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-serif text-[#FAF5F0]">
            Official 2026 Schedule Not Yet Released
          </h2>
          <p className="text-sm text-[#C4B4A7] leading-relaxed font-light">
            The Deanery of Sciences has not yet announced the active competition dates, session slots, or venue bookings for the upcoming Blossoms edition.
          </p>
          <div className="p-4 rounded-xl bg-[#140F0D]/80 border border-[#FAF5F0]/10 text-xs text-[#C4B4A7] text-left flex items-start gap-3 mt-2 font-light">
            <AlertCircle className="w-4 h-4 text-[#C28854] shrink-0 mt-0.5" />
            <p>
              Please switch to the <strong>2024–2025 Historical Timeline</strong> tab above to view the sequence of events, typical venue allocations, and preliminary progression paths from the previous year.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveEdition('2025')}
            className="mt-4 px-6 py-2.5 rounded-xl bg-[#C28854] text-[#140F0D] text-xs font-bold hover:bg-[#D4955B] transition-colors"
          >
            Switch to 2024–2025 Historical Timeline
          </button>
        </div>
      )}

      {/* HISTORICAL TAB: Complete Chronological Timeline */}
      {activeEdition === '2025' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Historical Guardrail Banner */}
          <div className="p-4 rounded-xl bg-[#140F0D] border border-[#C28854]/30 flex items-start gap-3 text-xs text-[#C4B4A7]">
            <History className="w-4 h-4 text-[#C28854] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#FAF5F0]">Historical Record:</strong> The timeline below reflects the actual preliminary and final rounds held between <strong>10 November 2025 and 19 December 2025</strong> for Team Onyx.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#C4B4A7] font-semibold flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {['all', 'art', 'literary', 'music', 'theatre', 'dance'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#C28854] text-[#140F0D] font-bold'
                      : 'bg-[#1C1512] text-[#C4B4A7] hover:text-[#FAF5F0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="sm:w-64">
              <input
                type="text"
                placeholder="Search event or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-1.5 rounded-xl bg-[#140F0D] border border-[#FAF5F0]/15 text-xs text-[#FAF5F0] placeholder-[#C4B4A7]/60 focus:outline-none focus:ring-2 focus:ring-[#C28854]"
              />
            </div>
          </div>

          {/* Timeline View */}
          <div className="space-y-8">
            {Object.keys(groupedByDate).length === 0 ? (
              <div className="p-8 text-center text-xs text-[#C4B4A7] bg-[#140F0D] rounded-2xl">
                No events match the selected filter.
              </div>
            ) : (
              Object.entries(groupedByDate).map(([date, items]) => {
                const dateObj = new Date(date);
                const formattedDate = dateObj.toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                });

                return (
                  <div key={date} className="space-y-3">
                    {/* Date Heading */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-[#261D19] text-[#FAF5F0] text-xs font-bold font-mono">
                        {formattedDate}
                      </span>
                      <div className="h-px flex-1 bg-[#FAF5F0]/10" />
                    </div>

                    {/* Events Table / Card List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 rounded-xl bg-[#1C1512]/60 border border-[#FAF5F0]/10 hover:border-[#C28854]/40 transition-colors flex items-start justify-between gap-4"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-2 h-2 rounded-full shrink-0" 
                                style={{ backgroundColor: categoryColor[item.category] }} 
                              />
                              <h3 className="text-sm font-serif font-bold text-[#FAF5F0]">
                                {item.eventName}
                              </h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-[#C4B4A7]">
                              <span className="flex items-center gap-1 font-light">
                                <Clock className="w-3.5 h-3.5 text-[#C4B4A7]" />
                                {item.timeDisplay}
                              </span>
                              <span className="flex items-center gap-1 font-light">
                                <MapPin className="w-3.5 h-3.5 text-[#C28854]" />
                                {item.venueDisplay}
                              </span>
                            </div>
                          </div>

                          <div className="shrink-0 flex flex-col items-end gap-1">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#140F0D] text-[#C4B4A7] border border-[#FAF5F0]/15 capitalize">
                              <CheckCircle2 className="w-3 h-3 text-[#C28854]" />
                              Completed
                            </span>
                            <span className="text-[10px] text-[#C4B4A7] uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
