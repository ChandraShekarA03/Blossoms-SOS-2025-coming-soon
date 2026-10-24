import { CategoryMetadata } from '@/types/events';

/**
 * Blossoms SOS Core Event Categories
 * 
 * Five perennial categories established across festival editions.
 * Uses exact brand palette tokens with high contrast semantic pairings.
 */
export const eventCategories: CategoryMetadata[] = [
  {
    slug: 'art',
    name: 'Art',
    tagline: 'Colors, Form & Creative Vision',
    description: 'Visual arts competitions ranging from fine brushwork, photography, and digital graphics to traditional floor and body arts.',
    themeColor: '#F36B2E',      // Sunset Orange
    accentColor: '#F59A1E',     // Mango
    iconName: 'Palette',
    spriteId: 'sprite-art-brush',
  },
  {
    slug: 'literary',
    name: 'Literary',
    tagline: 'Thought, Discourse & Written Word',
    description: 'Intellectual and expressive competitions including formal debate, impromptu speaking, rapid-fire trivia, and written composition.',
    themeColor: '#253C96',      // Brilliant Blue
    accentColor: '#C4E7E5',     // Ocean Water
    iconName: 'BookOpen',
    spriteId: 'sprite-lit-book',
  },
  {
    slug: 'music',
    name: 'Music',
    tagline: 'Melody, Rhythm & Sonic Energy',
    description: 'Solo and ensemble musical contests spanning traditional Indian folk vocalizations, Western acoustic sets, and full band battles.',
    themeColor: '#F59A1E',      // Mango
    accentColor: '#F36B2E',     // Sunset Orange
    iconName: 'Music',
    spriteId: 'sprite-music-note',
  },
  {
    slug: 'theatre',
    name: 'Theatre',
    tagline: 'Drama, Expression & Cinematic Craft',
    description: 'Stage and screen performance disciplines including solo character portrayals, impactful street plays, proscenium drama, and short films.',
    themeColor: '#C4E7E5',      // Ocean Water
    accentColor: '#253C96',     // Brilliant Blue
    iconName: 'Drama',
    spriteId: 'sprite-theatre-mask',
  },
  {
    slug: 'dance',
    name: 'Dance',
    tagline: 'Rhythm, Movement & Choreography',
    description: 'Expressive movement competitions celebrating classical Indian mudras, contemporary duets, and high-energy ensemble formations.',
    themeColor: '#F36B2E',      // Sunset Orange
    accentColor: '#C4E7E5',     // Ocean Water
    iconName: 'Footprints',
    spriteId: 'sprite-dance-dancer',
  },
];
