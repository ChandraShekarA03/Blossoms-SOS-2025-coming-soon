import React from 'react';
import Link from 'next/link';
import { Home, Compass, Trophy } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-3xl bg-[#202D62]/50 border border-[#C4E7E5]/20 shadow-2xl">
        {/* Navigation Compass Anchor */}
        <div className="flex justify-center mb-2">
          <div className="p-4 rounded-2xl bg-[#141D3F] border border-[#F59A1E]/30 shadow-inner text-[#F59A1E]">
            <Compass className="w-8 h-8" />
          </div>
        </div>

        {/* 404 Badge */}
        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F36B2E] text-white">
          ERROR 404 • ROUTE NOT FOUND
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#F8FAFC]">
          Lost in the Quadrangle?
        </h1>

        <p className="text-xs sm:text-sm text-[#A3B1CC] leading-relaxed">
          The festival page you are looking for may have moved, had its schedule archived, or never existed in the official calendar.
        </p>

        {/* Recovery Links */}
        <div className="pt-4 flex flex-col gap-2.5 text-xs font-semibold">
          <Link
            href="/"
            className="w-full py-3 rounded-xl bg-[#F36B2E] text-white hover:bg-[#E05A1D] transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Festival Homepage</span>
          </Link>
          <Link
            href="/events"
            className="w-full py-3 rounded-xl bg-[#253C96] text-white hover:bg-[#1E307A] transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore 5 Disciplines</span>
          </Link>
          <Link
            href="/archive/2025"
            className="w-full py-3 rounded-xl bg-[#141D3F] text-[#F59A1E] border border-[#F59A1E]/30 hover:border-[#F59A1E] transition-colors flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            <span>Visit 2025 Historical Archive</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
