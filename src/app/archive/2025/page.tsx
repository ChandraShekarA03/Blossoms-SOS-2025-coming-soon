import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EDITIONS } from '@/content/editions';
import { HISTORICAL_WINNERS_2025 } from '@/content/winners';
import { HISTORICAL_SCHEDULE_2025 } from '@/content/schedule';
import { Trophy, Award, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: '2024–2025 Historical Archive | Team Onyx',
  description: 'Historical archive of Blossoms SOS 2024–2025: Team Onyx identity, university trophies, schedule timeline, and verified student competition results.',
};

export default function Archive2025Page() {
  const edition = EDITIONS['2025'];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Archive Hero Header */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140F0D] border border-[#C28854]/40 text-xs font-bold text-[#C28854]">
          <Trophy className="w-3.5 h-3.5" />
          <span>Official Historical Archive • Academic Cycle 2024–2025</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FAF5F0] tracking-tight leading-tight">
          Blossoms SOS 2024–2025: Team Onyx Legacy.
        </h1>

        <p className="text-base sm:text-lg text-[#C4B4A7] leading-relaxed font-light">
          Preserving the cultural milestones, inter-deanery accolades, and competition records of the School of Sciences during the 2024–2025 university fest season.
        </p>

        {/* Archival Shield Notice */}
        <div className="p-4 rounded-xl bg-[#140F0D] border border-[#FAF5F0]/10 flex items-start gap-3 text-xs text-[#C4B4A7]">
          <ShieldCheck className="w-5 h-5 text-[#C28854] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#FAF5F0]">Archival Integrity Guarantee:</strong> All information on this page documents the concluded 2024–2025 festival. Expired Google registration forms have been deactivated to prevent confusion with future editions.
          </p>
        </div>
      </div>

      {/* Team Identity Dossier */}
      <section aria-labelledby="team-identity-heading" className="p-8 sm:p-10 rounded-3xl bg-[#1C1512]/80 border border-[#FAF5F0]/10 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FAF5F0]/10 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#C28854] uppercase tracking-wider">
              Deanery Festival Identity
            </span>
            <h2 id="team-identity-heading" className="text-3xl font-serif text-[#FAF5F0] mt-1">
              {edition.teamName}
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#140F0D] border border-[#FAF5F0]/15 text-xs text-[#FAF5F0]">
            <span className="w-3 h-3 rounded-full bg-white border border-[#140F0D]" />
            <span>Theme Color: <strong>White</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-[#C28854]">
              &quot;{edition.teamSlogan}&quot;
            </h3>
            <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed font-light">
              Representing purity of scientific purpose, unity across diverse departments, and fierce creative spark, White Onyx was the chosen emblem under which over 2,000 science students assembled for the inter-deanery march and stage showdowns.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/10">
              <span className="block text-2xl font-bold text-[#FAF5F0] font-mono">32</span>
              <span className="text-[11px] text-[#C4B4A7]">Competitions</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/10">
              <span className="block text-2xl font-bold text-[#C28854] font-mono">3</span>
              <span className="text-[11px] text-[#C4B4A7]">Major Trophies</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#140F0D] border border-[#FAF5F0]/10">
              <span className="block text-2xl font-bold text-[#FAF5F0] font-mono">33</span>
              <span className="text-[11px] text-[#C4B4A7]">Podium Records</span>
            </div>
          </div>
        </div>
      </section>

      {/* University Trophies & Accolades */}
      <section aria-labelledby="trophies-heading" className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C28854]">
            University Stage Honors
          </span>
          <h2 id="trophies-heading" className="text-2xl sm:text-3xl font-serif text-[#FAF5F0] mt-1">
            2025 Inter-Deanery Trophies Won
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {edition.achievements?.map((ach, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#140F0D] border border-[#C28854]/30 flex flex-col justify-between space-y-4 hover:border-[#C28854] transition-colors"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1C1512] flex items-center justify-center text-[#C28854]">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#FAF5F0]">
                  {ach.title}
                </h3>
                <p className="text-xs text-[#C4B4A7] font-light">
                  University-wide inter-deanery award adjudicated at CHRIST Central Campus.
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF5F0]/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#C4B4A7]">Standing:</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C28854] text-[#140F0D]">
                  {ach.place}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Data Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Results link */}
        <div className="p-8 rounded-3xl bg-[#1C1512]/60 border border-[#FAF5F0]/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C28854] mb-2 uppercase">
              <Award className="w-4 h-4 text-[#C28854]" />
              <span>Full Winner Standings</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#FAF5F0]">
              2025 Event Results Archive
            </h3>
            <p className="text-xs sm:text-sm text-[#C4B4A7] mt-2 leading-relaxed font-light">
              Explore the complete directory of {HISTORICAL_WINNERS_2025.length} student winner records across Art, Literary, Music, Theatre, and Dance, protected with 100% privacy compliance.
            </p>
          </div>
          <Link
            href="/winners"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C28854] hover:underline"
          >
            <span>Open Verified Results Table</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Schedule link */}
        <div className="p-8 rounded-3xl bg-[#1C1512]/60 border border-[#FAF5F0]/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C4B4A7] mb-2 uppercase">
              <Calendar className="w-4 h-4 text-[#C4B4A7]" />
              <span>Complete Session Timeline</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#FAF5F0]">
              2025 Chronological Calendar
            </h3>
            <p className="text-xs sm:text-sm text-[#C4B4A7] mt-2 leading-relaxed font-light">
              Review all {HISTORICAL_SCHEDULE_2025.length} competition session dates, starting from the Inauguration in Quadrangle through to final events.
            </p>
          </div>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C4B4A7] hover:underline"
          >
            <span>View 2025 Historical Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
