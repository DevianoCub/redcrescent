import type { Localized } from './types';

export interface NewsItem {
  id: string;
  title: Localized;
  date: Localized;
  excerpt: Localized;
  /** Long-form body, one entry per language. Paragraphs separated by blank lines. */
  body?: Localized;
  /** Optional category label (editable via /admin). */
  category?: Localized;
  image?: string;
  gallery?: string[];
  /** Set to false in /admin to hide a news item without deleting it. */
  published?: boolean;
}
