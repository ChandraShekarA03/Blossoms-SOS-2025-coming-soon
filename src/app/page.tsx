import React from 'react';
import Link from 'next/link';
import { HeroBackground } from '@/components/hero/HeroBackground';
import { EVENT_CATEGORIES } from '@/content/events';
import { EDITIONS } from '@/content/editions';
import { ArrowRight, Trophy, Calendar, Award, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const upcomingEdition = EDITIONS['2026'];
  const archive2025 = EDITIONS['2025'];

  return (
    <div className="flex flex-col bg-[#140F0D] text-[#FAF5F0]">
      {/* 1. HERO SECTION: Corporate Brown (#140F0D) with React Bits GhostFibers */}
      <section aria-labelledby="hero-heading" className="relative">
        <HeroBackground>
          <div className="max-w-4xl flex flex-col items-start gap-8">
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#1C1512]/90 border border-[#FAF5F0]/15 text-xs font-medium text-[#C4B4A7] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C28854] animate-pulse" />
              <span className="tracking-wide">
                {upcomingEdition.title} • Official Theme & Dates Pending Circular Release
              </span>
            </div>

            {/* Display Editorial Headline */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-[0.25em] text-[#C28854] font-semibold">
                School of Sciences • Annual Inter-Deanery Cultural Fest
              </span>
              <h1 
                id="hero-heading" 
                className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#FAF5F0] leading-[1.08]"
              >
                Where Scientific Rigor Meets Artistic Grace.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#C4B4A7] max-w-2xl leading-relaxed font-light">
              The premier cultural celebration of the School of Sciences at CHRIST (Deemed to be University), Bangalore. Fostering intellectual inquiry, stagecraft, and enduring student solidarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/events"
                className="px-7 py-3.5 rounded-xl bg-[#C28854] text-[#140F0D] font-bold text-sm shadow-lg hover:bg-[#D4955B] transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C28854]"
              >
                <span>Explore 5 Disciplines</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/archive/2025"
                className="px-7 py-3.5 rounded-xl bg-[#1C1512]/80 text-[#FAF5F0] border border-[#FAF5F0]/20 hover:border-[#C28854] font-medium text-sm transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C28854]"
              >
                <Trophy className="w-4 h-4 text-[#C28854]" />
                <span>2025 Historical Archive</span>
              </Link>
            </div>

            {/* Minimalist Integrity Notice */}
            <div className="pt-4 border-t border-[#FAF5F0]/10 flex items-center gap-2.5 text-xs text-[#C4B4A7]/80">
              <ShieldCheck className="w-4 h-4 text-[#C28854] shrink-0" />
              <span>
                All 32 event criteria reflect verified perennial festival disciplines. Historical trophies belong to the 2024–2025 cycle.
              </span>
            </div>
          </div>
        </HeroBackground>
      </section>

      {/* 2. FESTIVAL MANIFESTO: High-End Minimalist Editorial Statement */}
      <section className="py-24 border-t border-[#FAF5F0]/10 bg-[#100C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C28854] font-semibold block mb-3">
              The Philosophy
            </span>
            <blockquote className="text-2xl sm:text-3xl font-serif text-[#FAF5F0] leading-snug">
              &ldquo;Science provides the framework to observe and question reality; art provides the courage to express and reshape it.&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-[#FAF5F0]/10">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#C28854]">01 / COLLABORATIVE RIGOR</span>
              <h3 className="text-lg font-serif text-[#FAF5F0]">Beyond the Laboratory</h3>
              <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                From Computer Science to Forensic and Life Sciences, over 2,000 students step beyond mathematical formulas to stage theatre, craft poetry, and unroll original visual canvases.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#C28854]">02 / PROGRESSION PATH</span>
              <h3 className="text-lg font-serif text-[#FAF5F0]">Two-Stage Elevation</h3>
              <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                Preliminary auditions held within Block 2 classrooms elevate the deanery&apos;s strongest talent into the university-wide finals on the Main Auditorium and Sky View stages.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#C28854]">03 / ADJUDICATION</span>
              <h3 className="text-lg font-serif text-[#FAF5F0]">Strict Objective Integrity</h3>
              <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                32 competitive formats are judged by vetted external adjudicators, enforcing strict time limits, originality rules, and team synergy rubrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FIVE DISCIPLINES: Minimalist Curated Index Roster */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="disciplines-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C28854] font-semibold block mb-2">
              Perennial Pillars
            </span>
            <h2 id="disciplines-heading" className="text-3xl sm:text-4xl font-serif text-[#FAF5F0]">
              The Five Disciplines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#C4B4A7] max-w-md">
            Explore rules, evaluation rubrics, and team structures for all 32 official festival competitions.
          </p>
        </div>

        {/* Minimalist Interactive List */}
        <div className="divide-y divide-[#FAF5F0]/10 border-y border-[#FAF5F0]/10">
          {EVENT_CATEGORIES.map((category, index) => {
            const indexStr = `0${index + 1}`;
            return (
              <Link
                key={category.slug}
                href={`/events/${category.slug}`}
                className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#1C1512]/40 px-4 sm:px-6 -mx-4 sm:-mx-6 transition-all duration-200"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10">
                  <span className="text-sm font-mono text-[#C28854] font-semibold">
                    {indexStr}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#FAF5F0] group-hover:text-[#C28854] transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#1C1512] text-[#C4B4A7] border border-[#FAF5F0]/10">
                        {category.events.length} Competitions
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#C4B4A7] mt-1 max-w-xl">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-[#C4B4A7] group-hover:text-[#C28854] transition-colors">
                  <span className="hidden sm:inline">View Category</span>
                  <div className="w-8 h-8 rounded-full border border-[#FAF5F0]/15 flex items-center justify-center group-hover:border-[#C28854] group-hover:scale-110 transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C28854] hover:underline"
          >
            <span>Browse Full Directory of 32 Sub-Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. HISTORICAL MILESTONE: Team Onyx Legacy Dossier */}
      <section className="py-20 bg-[#100C0A] border-t border-[#FAF5F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1512]/60 border border-[#FAF5F0]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#C28854] text-[#140F0D]">
                  2024–2025 ARCHIVE
                </span>
                <span className="text-xs text-[#C4B4A7] font-mono">
                  Deanery Cycle
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#FAF5F0]">
                {archive2025.teamName}: &ldquo;{archive2025.teamSlogan}&rdquo;
              </h2>
              <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                In the 2024–2025 university fest season, the School of Sciences competed under the mantle of Team Onyx, securing runner-up accolades in the university Inauguration and the coveted &apos;We the Best&apos; Trophy.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#FAF5F0]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140F0D] border border-[#FAF5F0]/10">
                  <Award className="w-3.5 h-3.5 text-[#C28854]" />
                  <span>2nd Place: University Inauguration</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140F0D] border border-[#FAF5F0]/10">
                  <Award className="w-3.5 h-3.5 text-[#C28854]" />
                  <span>2nd Place: &apos;We the Best&apos; Trophy</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140F0D] border border-[#FAF5F0]/10">
                  <Award className="w-3.5 h-3.5 text-[#C28854]" />
                  <span>3rd Place: Deanery Procession</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="/archive/2025"
                className="px-6 py-3 rounded-xl bg-[#C28854] text-[#140F0D] font-bold text-xs hover:bg-[#D4955B] transition-colors flex items-center justify-center gap-2"
              >
                <span>Enter 2025 Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCESS GATEWAYS: Schedule & Standings */}
      <section className="py-20 border-t border-[#FAF5F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Schedule Gateway */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1512]/50 border border-[#FAF5F0]/10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C28854] uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>Chronology & Locations</span>
                </div>
                <h3 className="text-2xl font-serif text-[#FAF5F0]">
                  Festival Schedule
                </h3>
                <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                  Review the chronological sequence of 32 preliminary and final rounds from the 2024–2025 festival cycle across Block 1, Block 2, and Central Block.
                </p>
              </div>
              <div className="pt-4 border-t border-[#FAF5F0]/10">
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C28854] hover:underline"
                >
                  <span>Open Festival Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Standings Gateway */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1512]/50 border border-[#FAF5F0]/10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C28854] uppercase tracking-wider">
                  <Trophy className="w-4 h-4" />
                  <span>Student Accolades</span>
                </div>
                <h3 className="text-2xl font-serif text-[#FAF5F0]">
                  Competition Winners
                </h3>
                <p className="text-xs sm:text-sm text-[#C4B4A7] leading-relaxed">
                  Access 33 verified podium standings from the 2024–2025 festival cycle, curated with strict student data privacy standards.
                </p>
              </div>
              <div className="pt-4 border-t border-[#FAF5F0]/10">
                <Link
                  href="/winners"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C28854] hover:underline"
                >
                  <span>Browse Winner Standings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
