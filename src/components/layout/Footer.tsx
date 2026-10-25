import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site-config';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#C7D1DD]/15 bg-[#0B101B] text-[#C7D1DD] text-sm relative z-20" role="contentinfo">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Logos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-[#162032] border border-[#C7D1DD]/20 p-1 flex items-center justify-center shadow-md">
                <Image
                  src="/blossoms_logo.png"
                  alt="Blossoms 2025 Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-base text-[#FFFFFF] tracking-wide leading-tight">
                  BLOSSOMS 2025
                </span>
                <span className="text-[10px] font-mono text-[#D1FF42] uppercase tracking-wider font-semibold">
                  School of Sciences
                </span>
              </div>
            </div>

            <p className="text-xs text-[#C7D1DD] leading-relaxed font-normal">
              Blossoms is the intra-deanery cultural fest at Christ (Deemed To Be University) Bangalore with the motto &lsquo;Be the best&rsquo;. Representing Team Onyx from the School of Sciences.
            </p>

            {/* Christ University Logo Badge */}
            <div className="pt-2">
              <a 
                href="https://www.christuniversity.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white/95 hover:bg-white px-3 py-1.5 rounded-lg shadow-sm border border-white/30 transition-all hover:scale-105"
                title="CHRIST (Deemed to be University)"
              >
                <Image
                  src="/Christ_logo.png"
                  alt="CHRIST (Deemed to be University)"
                  width={110}
                  height={36}
                  className="h-6 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  About Blossoms &amp; Team Onyx
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Event Categories
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Festival Schedule
                </Link>
              </li>
              <li>
                <Link href="/winners" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Winners &amp; Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-4">
              Event Categories
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/events/art" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Art Events (9)
                </Link>
              </li>
              <li>
                <Link href="/events/literary" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Literary Events (8)
                </Link>
              </li>
              <li>
                <Link href="/events/music" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Music Events (6)
                </Link>
              </li>
              <li>
                <Link href="/events/theatre" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Theatre Events (5)
                </Link>
              </li>
              <li>
                <Link href="/events/dance" className="hover:text-[#D1FF42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FF42]">
                  Dance Events (4)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-3">
              Follow &amp; Contact
            </h3>
            
            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#162032] border border-[#C7D1DD]/20 flex items-center justify-center text-[#C7D1DD] hover:text-[#D1FF42] hover:border-[#D1FF42]/40 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}

              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#162032] border border-[#C7D1DD]/20 flex items-center justify-center text-[#C7D1DD] hover:text-[#D1FF42] hover:border-[#D1FF42]/40 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              )}

              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#162032] border border-[#C7D1DD]/20 flex items-center justify-center text-[#C7D1DD] hover:text-[#D1FF42] hover:border-[#D1FF42]/40 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              )}
            </div>

            <div className="space-y-2 text-xs pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D1FF42] shrink-0 mt-0.5" />
                <span>CHRIST (Deemed to be University), Hosur Road, Bengaluru 560029</span>
              </p>
              {siteConfig.contactEmail && (
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D1FF42] shrink-0" />
                  <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-[#D1FF42] transition-colors">
                    {siteConfig.contactEmail}
                  </a>
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-[#C7D1DD]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7D1DD]/60">
          <p>© 2025 Blossoms - School of Sciences, Christ (Deemed To Be University). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#D1FF42] transition-colors">
              About
            </Link>
            <Link href="/events" className="hover:text-[#D1FF42] transition-colors">
              Events
            </Link>
            <Link href="/schedule" className="hover:text-[#D1FF42] transition-colors">
              Schedule
            </Link>
            <Link href="/winners" className="hover:text-[#D1FF42] transition-colors">
              Winners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
