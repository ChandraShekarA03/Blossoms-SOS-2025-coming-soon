import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CategoryIcon } from '@/components/ui/CategoryIcon';
import { ShieldCheck, ArrowRight, Award, Compass, Sparkles, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Blossoms SOS',
  description: 'The history, architectural mission, and inter-deanery tradition of Blossoms School of Sciences at CHRIST (Deemed to be University).',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202D62] border border-[#C4E7E5]/20 text-xs font-semibold text-[#F59A1E] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Festival History & Governance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F8FAFC] tracking-tight leading-tight">
          Where Scientific Inquiry Meets Artistic Grace.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A3B1CC] leading-relaxed">
          Blossoms SOS is the flagship annual inter-deanery cultural celebration of the School of Sciences at CHRIST (Deemed to be University), Bangalore Central Campus.
        </p>
      </div>

      {/* Main Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: The Festival Mandate */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#F8FAFC] flex items-center gap-3">
              <Compass className="w-6 h-6 text-[#F36B2E]" />
              <span>The Cultural Mandate</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A3B1CC] leading-relaxed">
              <p>
                The School of Sciences unites departments spanning Computer Science, Mathematics, Statistics, Physics, Chemistry, Life Sciences, and Forensic Sciences. Blossoms represents the deanery&apos;s commitment to holistic education—ensuring that analytical minds have an equally fertile space to cultivate expressive creativity.
              </p>
              <p>
                Each year, student performers, writers, designers, actors, and orators participate in rigorous selection trials, advancing from departmental preliminary rounds into the high-stakes university-wide inter-deanery finals.
              </p>
            </div>
          </section>

          {/* Section 2: Two-Tier Festival Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-[#F8FAFC] flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#253C96]" />
              <span>Two-Stage Festival Architecture</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#202D62]/60 border border-[#C4E7E5]/15">
                <span className="text-xs font-bold font-mono text-[#F59A1E] uppercase">Stage I</span>
                <h3 className="text-lg font-bold text-[#F8FAFC] mt-1 mb-2">School Prelims</h3>
                <p className="text-xs text-[#A3B1CC] leading-relaxed">
                  Conducted across classrooms and labs in Block 2 and Central Block. Students compete within the School of Sciences to determine the official deanery finalists across all 32 sub-events.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#202D62]/60 border border-[#C4E7E5]/15">
                <span className="text-xs font-bold font-mono text-[#C4E7E5] uppercase">Stage II</span>
                <h3 className="text-lg font-bold text-[#F8FAFC] mt-1 mb-2">University Finals</h3>
                <p className="text-xs text-[#A3B1CC] leading-relaxed">
                  The selected finalists represent the School of Sciences against peer deaneries (Commerce, Management, Humanities, Law, Engineering) on main campus stages including the Main Auditorium and Sky View.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Five Disciplines */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-[#F8FAFC]">The Five Foundational Pillars</h2>
            <div className="space-y-4">
              {[
                { name: 'Art', count: '9 Events', desc: 'Painting, Photography, Digital Poster, Rangoli, Charcoal, Collage, Cartooning, Greeting Cards, Pot Painting', slug: 'art' as const },
                { name: 'Literary', count: '7 Events', desc: 'Debate, JAM (Just A Minute), Quiz, Creative Writing, Potpourri, Air Crash, Extempore', slug: 'literary' as const },
                { name: 'Music', count: '6 Events', desc: 'Indian Classical Vocal, Western Acoustic, Indian Folk, Instrumental Solo, Western Solo, Rap / Beatbox', slug: 'music' as const },
                { name: 'Theatre', count: '5 Events', desc: 'Street Theatre (Nukkad Natak), Mime, Proscenium Play, Mono Acting, Reel Making', slug: 'theatre' as const },
                { name: 'Dance', count: '5 Events', desc: 'Classical Dance Solo, Western Contemporary, Folk & Tribal Ensemble, Theme Dance, Street Dance Battle', slug: 'dance' as const },
              ].map((p) => (
                <div key={p.name} className="p-4 rounded-xl bg-[#141D3F] border border-[#C4E7E5]/10 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#202D62] text-[#F59A1E] shrink-0">
                    <CategoryIcon category={p.slug} size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm text-[#F8FAFC]">{p.name}</h3>
                      <span className="text-xs text-[#F59A1E] font-medium">{p.count}</span>
                    </div>
                    <p className="text-xs text-[#A3B1CC]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Governance, Ethics & Historical Boundaries */}
        <div className="lg:col-span-4 space-y-6">
          {/* Institutional Note */}
          <div className="p-6 rounded-2xl bg-[#141D3F] border border-[#C4E7E5]/20 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#F59A1E]">GOVERNANCE NOTE</span>
              <Sparkles className="w-4 h-4 text-[#F59A1E]" />
            </div>
            <h3 className="text-base font-bold text-[#F8FAFC]">
              Historical vs. Active Governance
            </h3>
            <p className="text-xs text-[#A3B1CC] leading-relaxed">
              In strict adherence to product integrity, leadership structures, student coordinators, and themes from the 2024–2025 festival cycle are preserved strictly as historical records.
            </p>
            <p className="text-xs text-[#A3B1CC] leading-relaxed">
              The organizing committee and student team for the upcoming 2026 edition will be published when faculty coordinators officially release the new festival charter.
            </p>
          </div>

          {/* Historical Legacy Callout */}
          <div className="p-6 rounded-2xl bg-[#202D62] border border-[#F59A1E]/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F59A1E]">
              <Award className="w-4 h-4" />
              <span>Team Onyx (2024–2025)</span>
            </div>
            <p className="text-xs text-[#F8FAFC] font-semibold italic">
              &quot;From flames to flights, White Onyx Ignites.&quot;
            </p>
            <p className="text-xs text-[#A3B1CC] leading-relaxed">
              In 2025, the School of Sciences competed under the moniker <strong>Team Onyx</strong>, securing runner-up accolades in the university Inauguration and the prestigious &apos;We the Best&apos; Trophy.
            </p>
            <div className="pt-2">
              <Link
                href="/archive/2025"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F59A1E] hover:underline"
              >
                <span>Read 2025 Archive Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Integrity Shield */}
          <div className="p-5 rounded-2xl bg-[#141D3F]/60 border border-[#C4E7E5]/15 flex items-start gap-3 text-xs text-[#A3B1CC]">
            <ShieldCheck className="w-4 h-4 text-[#C4E7E5] shrink-0 mt-0.5" />
            <p>
              Information on this website is curated from official circulars, verified university stage records, and audited student council documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
