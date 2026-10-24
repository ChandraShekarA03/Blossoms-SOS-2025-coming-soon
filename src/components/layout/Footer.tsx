import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#FAF5F0]/10 bg-[#0C0907] text-[#C4B4A7] text-sm" role="contentinfo">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#261D19] border border-[#FAF5F0]/15 flex items-center justify-center text-base text-[#FAF5F0]">
                🌸
              </div>
              <span className="font-serif font-bold text-base text-[#FAF5F0] tracking-wide">
                BLOSSOMS SOS
              </span>
            </div>
            <p className="text-xs text-[#C4B4A7] leading-relaxed">
              The premier inter-deanery cultural celebration of the School of Sciences at CHRIST (Deemed to be University), Bangalore. Fostering artistic expression, intellectual discourse, and student unity.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-[#140F0D] text-[#C28854] border border-[#C28854]/20">
                School of Sciences • Bengaluru
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF5F0] mb-4">
              Explore Festival
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#C28854] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C28854] transition-colors">
                  About the Festival
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#C28854] transition-colors">
                  All Disciplines
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#C28854] transition-colors">
                  Festival Schedule
                </Link>
              </li>
              <li>
                <Link href="/winners" className="hover:text-[#C28854] transition-colors">
                  Competition Winners
                </Link>
              </li>
              <li>
                <Link href="/archive/2025" className="text-[#C28854] hover:underline flex items-center gap-1 font-bold">
                  <span>2025 Historical Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Five Disciplines */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF5F0] mb-4">
              Pillars of Expression
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/events/art" className="hover:text-[#C28854] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C28854]" />
                  <span>Art & Visual Craft</span>
                </Link>
              </li>
              <li>
                <Link href="/events/literary" className="hover:text-[#C28854] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4955B]" />
                  <span>Literary & Oratory</span>
                </Link>
              </li>
              <li>
                <Link href="/events/music" className="hover:text-[#C28854] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C28854]" />
                  <span>Music & Melody</span>
                </Link>
              </li>
              <li>
                <Link href="/events/theatre" className="hover:text-[#C28854] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4B4A7]" />
                  <span>Theatre & Stagecraft</span>
                </Link>
              </li>
              <li>
                <Link href="/events/dance" className="hover:text-[#C28854] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4955B]" />
                  <span>Dance & Choreography</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Content Integrity & Notice */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF5F0] mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C28854]" />
              <span>Edition Integrity</span>
            </h3>
            <p className="text-xs text-[#C4B4A7] leading-relaxed">
              Official theme, dates, and registration links for the upcoming 2026 edition are pending administrative announcement.
            </p>
            <p className="text-xs text-[#C4B4A7]/80 leading-relaxed">
              All results, schedules, and team trophies displayed in the archive strictly document the completed 2024–2025 festival cycle.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF5F0]/10 bg-[#080605] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4B4A7]/80">
          <p>
            © {currentYear} School of Sciences, CHRIST (Deemed to be University). All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Handcrafted with architectural minimalism</span>
            <span aria-hidden="true">🌱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
