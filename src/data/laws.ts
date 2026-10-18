import type { Localized } from './types';

export interface LawDoc {
  id: string;
  title: Localized;
  meta: Localized;
  /** Path to the PDF under public/docs/laws (downloadable, no code changes needed to replace the file) */
  pdf: string;
}
