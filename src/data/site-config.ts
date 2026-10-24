import { SiteConfig } from '@/types/site';

/**
 * Blossoms SOS Global Site Configuration
 * 
 * Configures global metadata, active edition selection, and external links.
 * Changing the active edition switches the primary landing view without code rewriting.
 */
export const siteConfig: SiteConfig = {
  name: 'Blossoms School of Sciences',
  shortName: 'Blossoms SOS',
  institution: 'CHRIST (Deemed to be University), Bangalore',
  faculty: 'School of Sciences',
  tagline: 'Science, Creativity & Student Expression',
  defaultDescription: 'The premier annual cultural festival of the School of Sciences at CHRIST (Deemed to be University), Bangalore.',
  
  // Active edition toggle: Switch between 'upcoming' and '2025'
  activeEditionYear: 'upcoming',
  availableEditions: ['upcoming', '2025'],
  
  canonicalUrl: 'https://blossomssos2025.vercel.app',
  socialLinks: {
    instagram: 'https://instagram.com/christ_university_bangalore',
    youtube: 'https://youtube.com',
  },
};
