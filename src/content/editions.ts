import { EditionMetadata } from "@/types/content";

export const EDITIONS: Record<string, EditionMetadata> = {
  "2026": {
    year: "2026",
    title: "Blossoms SOS 2026",
    isUpcoming: true,
    themeConfirmed: false,
    themeTitle: "Upcoming Edition — Theme Unannounced",
  },
  "2025": {
    year: "2024–2025",
    title: "Blossoms SOS 2024–2025",
    isUpcoming: false,
    themeConfirmed: true,
    themeTitle: "Team Onyx (School of Sciences)",
    teamName: "Team Onyx",
    teamColor: "White (Symbolizing clarity, brilliance & unity)",
    teamSlogan: "From flames to flights, White Onyx Ignites.",
    achievements: [
      {
        title: "Inauguration Ceremony",
        place: "Second Place",
        trophyType: "silver"
      },
      {
        title: "'We the Best' Trophy",
        place: "Second Place",
        trophyType: "silver"
      },
      {
        title: "Deanery Procession",
        place: "Third Place",
        trophyType: "bronze"
      }
    ]
  }
};
