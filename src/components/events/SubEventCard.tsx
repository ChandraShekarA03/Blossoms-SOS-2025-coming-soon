import React from 'react';
import { SubEvent } from '@/types/content';
import { Users, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface SubEventCardProps {
  event: SubEvent;
  accentColor?: string;
}

export function SubEventCard({ event, accentColor = '#C28854' }: SubEventCardProps) {
  return (
    <article 
      className="p-6 rounded-2xl bg-[#1C1512]/70 border border-[#FAF5F0]/10 hover:border-[#C28854]/40 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
      aria-labelledby={`event-${event.id}-title`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span 
            className="px-2.5 py-0.5 rounded-full text-xs font-bold text-[#140F0D] tracking-wide"
            style={{ backgroundColor: accentColor }}
          >
            {event.category.toUpperCase()}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-[#C4B4A7] font-medium bg-[#140F0D] px-2.5 py-1 rounded-md border border-[#FAF5F0]/10">
            <Users className="w-3.5 h-3.5 text-[#C28854]" />
            <span>{event.teamSize}</span>
          </span>
        </div>

        {/* Title */}
        <h3 
          id={`event-${event.id}-title`}
          className="text-lg font-serif font-bold text-[#FAF5F0] mb-2 group-hover:text-[#C28854] transition-colors"
        >
          {event.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-[#C4B4A7] leading-relaxed mb-4 font-light">
          {event.shortDescription}
        </p>

        {/* Evaluation Criteria Checklist */}
        <div className="space-y-1.5 pt-2 border-t border-[#FAF5F0]/10">
          <span className="text-[11px] font-semibold text-[#C28854] uppercase tracking-wider block mb-1">
            Core Evaluation Points
          </span>
          <ul className="space-y-1 text-xs text-[#C4B4A7]/90 font-light">
            {event.points.slice(0, 4).map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C28854] shrink-0 mt-0.5" />
                <span className="leading-snug">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Historical Timing & Registration Notice Footer */}
      <div className="mt-6 pt-4 border-t border-[#FAF5F0]/10 flex flex-col gap-2 text-xs">
        {event.historicalVenue && (
          <div className="flex items-center gap-1.5 text-[11px] text-[#C4B4A7]">
            <MapPin className="w-3.5 h-3.5 text-[#C28854] shrink-0" />
            <span>2025 Venue: <strong className="text-[#FAF5F0]">{event.historicalVenue}</strong></span>
          </div>
        )}
        {event.historicalTiming && (
          <div className="flex items-center gap-1.5 text-[11px] text-[#C4B4A7]">
            <Clock className="w-3.5 h-3.5 text-[#C4B4A7] shrink-0" />
            <span>2025 Timing: <strong className="text-[#FAF5F0]">{event.historicalTiming}</strong></span>
          </div>
        )}
        
        {/* Registration State Guardrail */}
        <div className="mt-2 pt-2">
          <span className="inline-block w-full text-center py-2 px-3 rounded-xl bg-[#140F0D] border border-[#FAF5F0]/15 text-[11px] text-[#C4B4A7] font-medium">
            Upcoming Circular Pending
          </span>
        </div>
      </div>
    </article>
  );
}
