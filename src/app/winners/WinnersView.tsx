'use client';

import React, { useState } from 'react';
import { WinnerEntry } from '@/types/content';
import { Trophy, Search, Award, ShieldCheck, MapPin } from 'lucide-react';

interface WinnersViewProps {
  winners: WinnerEntry[];
}

export function WinnersView({ winners }: WinnersViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWinners = winners.filter((entry) => {
    const q = searchQuery.toLowerCase();
    return (
      entry.eventName.toLowerCase().includes(q) ||
      (entry.dateAndVenue && entry.dateAndVenue.toLowerCase().includes(q)) ||
      entry.firstPlace.toLowerCase().includes(q) ||
      entry.secondPlace.toLowerCase().includes(q) ||
      entry.thirdPlace.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Integrity & Privacy Callout */}
      <div className="p-4 rounded-2xl bg-[#140F0D] border border-[#C28854]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-xs text-[#C4B4A7]">
          <ShieldCheck className="w-5 h-5 text-[#C28854] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#FAF5F0]">Privacy Compliance & Archival Notice:</strong> All results below strictly document the <strong>2024–2025 Blossoms festival cycle (Team Onyx)</strong>. In strict compliance with data privacy standards, all personal student telephone numbers present in legacy spreadsheets have been permanently excised.
          </p>
        </div>
        <span className="shrink-0 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#C28854] text-[#140F0D]">
          Verified 2025 Records
        </span>
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#C4B4A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by event name, student name, or register ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#140F0D] border border-[#FAF5F0]/15 text-xs text-[#FAF5F0] placeholder-[#C4B4A7]/60 focus:outline-none focus:ring-2 focus:ring-[#C28854]"
          />
        </div>
        <div className="text-xs text-[#C4B4A7] font-mono">
          Showing <strong className="text-[#FAF5F0]">{filteredWinners.length}</strong> of {winners.length} results
        </div>
      </div>

      {/* Results Cards / Grid */}
      {filteredWinners.length === 0 ? (
        <div className="p-12 text-center text-sm text-[#C4B4A7] bg-[#140F0D] rounded-2xl border border-[#FAF5F0]/10">
          No competition results match &quot;{searchQuery}&quot;. Try a different student name or event title.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredWinners.map((entry, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-2xl bg-[#1C1512]/70 border border-[#FAF5F0]/10 hover:border-[#C28854]/40 transition-colors flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Event Name & Venue */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-serif font-bold text-[#FAF5F0]">
                    {entry.eventName}
                  </h3>
                  <span className="shrink-0 p-1.5 rounded-lg bg-[#140F0D] text-[#C28854]">
                    <Trophy className="w-4 h-4" />
                  </span>
                </div>

                {entry.dateAndVenue && (
                  <p className="text-xs text-[#C4B4A7] flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#C28854] shrink-0" />
                    <span>{entry.dateAndVenue}</span>
                  </p>
                )}

                {/* Podium Standings */}
                <div className="space-y-3 pt-2 border-t border-[#FAF5F0]/10 text-xs">
                  {/* First Place */}
                  <div className="p-3 rounded-xl bg-[#140F0D]/90 border border-[#C28854]/40 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#C28854]">
                      <Award className="w-4 h-4" />
                      <span>1st Place (Winner)</span>
                    </div>
                    <p className="text-[#FAF5F0] whitespace-pre-line leading-relaxed pl-6 font-medium">
                      {entry.firstPlace || '—'}
                    </p>
                  </div>

                  {/* Second Place */}
                  <div className="p-3 rounded-xl bg-[#140F0D]/60 border border-[#D4955B]/30 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#D4955B]">
                      <Award className="w-4 h-4" />
                      <span>2nd Place (Runner-up)</span>
                    </div>
                    <p className="text-[#C4B4A7] whitespace-pre-line leading-relaxed pl-6">
                      {entry.secondPlace || '—'}
                    </p>
                  </div>

                  {/* Third Place */}
                  <div className="p-3 rounded-xl bg-[#140F0D]/40 border border-[#FAF5F0]/10 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#C4B4A7]/90">
                      <Award className="w-4 h-4" />
                      <span>3rd Place</span>
                    </div>
                    <p className="text-[#C4B4A7]/80 whitespace-pre-line leading-relaxed pl-6">
                      {entry.thirdPlace || '—'}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
