'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InteractiveFlower } from '@/components/easter-eggs/InteractiveFlower';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/winners', label: 'Winners' },
  { href: '/archive/2025', label: '2025 Archive', isBadge: true },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // React 19 recommended pattern for adjusting state when prop/route changes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FAF5F0]/10 bg-[#140F0D]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28854] rounded-lg p-1"
          aria-label="Blossoms SOS Home"
        >
          <div className="w-9 h-9 rounded-lg bg-[#261D19] border border-[#FAF5F0]/15 flex items-center justify-center text-lg font-bold text-[#FAF5F0] shadow-sm group-hover:scale-105 transition-transform">
            🌸
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm tracking-wide text-[#FAF5F0] group-hover:text-[#C28854] transition-colors">
              BLOSSOMS SOS
            </span>
            <span className="text-[10px] text-[#C4B4A7] tracking-wider uppercase font-medium">
              School of Sciences
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            if (link.isBadge) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ml-2 px-3 py-1 rounded-full text-xs font-bold border transition-all duration-150 flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#C28854] text-[#140F0D] border-[#C28854]'
                      : 'border-[#C28854]/40 text-[#C28854] hover:bg-[#C28854]/10'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#FAF5F0] bg-[#1C1512] font-semibold border border-[#FAF5F0]/15'
                    : 'text-[#C4B4A7] hover:text-[#FAF5F0] hover:bg-[#1C1512]/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Interactive Easter Egg */}
        <div className="hidden md:flex items-center gap-3">
          <InteractiveFlower />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <InteractiveFlower />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#FAF5F0] hover:bg-[#1C1512] focus:outline-none focus:ring-2 focus:ring-[#C28854]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#140F0D]/98 backdrop-blur-xl border-b border-[#FAF5F0]/15 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <nav className="flex flex-col gap-2 pt-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#261D19] text-[#FAF5F0] font-semibold'
                      : 'text-[#C4B4A7] hover:text-[#FAF5F0] hover:bg-[#1C1512]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.isBadge && (
                    <span className="text-xs px-2 py-0.5 rounded bg-[#C28854] text-[#140F0D] font-bold">
                      Historical
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#FAF5F0]/10 text-xs text-[#C4B4A7] flex flex-col gap-1">
            <p className="font-semibold text-[#FAF5F0]">School of Sciences</p>
            <p>CHRIST (Deemed to be University), Bangalore</p>
            <p className="text-[11px] text-[#C4B4A7]/70 mt-1">Inter-Deanery Cultural Fest</p>
          </div>
        </div>
      )}
    </header>
  );
}
