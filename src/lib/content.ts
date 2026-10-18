// Content access layer.
//
// Source of truth is JSON under src/content/ (edited via the /admin panel).
// Decap CMS stores flat, language-suffixed keys (title_ru, title_uz, ...);
// this module adapts them to the app's Localized shape.

import type { Localized } from '../data/types';
import type { NewsItem } from '../data/news';
import type { LawDoc } from '../data/laws';
import type { Office } from '../data/offices';
import type { ContactInfo } from '../data/contacts';
import type { SocialLinks, DonateLink } from '../data/site';

import siteJson from '../content/site.json';
import newsJson from '../content/news.json';
import lawsJson from '../content/laws.json';
import officesJson from '../content/offices.json';

/** Build a Localized value; uz/en fall back to ru when empty. */
function L(ru?: string, uz?: string, en?: string): Localized {
  const base = (ru ?? '').trim();
  return {
    ru: base,
    uz: (uz ?? '').trim() || base,
    en: (en ?? '').trim() || base,
  };
}

function image(path?: string): string | undefined {
  if (!path) return undefined;
  const p = path.trim();
  if (!p) return undefined;
  if (p.startsWith('/') || p.startsWith('http')) return p;
  return `/photos/real/${p}`;
}

/* ------------------------------------------------------------------ */
/* Contacts / socials / donate links                                   */
/* ------------------------------------------------------------------ */

const c = siteJson.contacts;

export const contactInfo: ContactInfo = {
  address: L(c.address_ru, c.address_uz, c.address_en),
  phone: L(c.phone, c.phone, c.phone),
  email: c.email,
  fax: c.fax,
};

export const socials: SocialLinks = {
  facebook: siteJson.socials.facebook,
  telegram: siteJson.socials.telegram,
  instagram: siteJson.socials.instagram,
};

export const donateLinks: DonateLink[] = (siteJson.donate_links ?? []).map((d) => ({
  id: d.id as DonateLink['id'],
  name: d.name,
  url: d.url,
}));

/* ------------------------------------------------------------------ */
/* News                                                                */
/* ------------------------------------------------------------------ */

interface RawNews {
  id?: string;
  published?: boolean;
  category_ru?: string;
  category_uz?: string;
  category_en?: string;
  date_ru?: string;
  date_uz?: string;
  date_en?: string;
  title_ru?: string;
  title_uz?: string;
  title_en?: string;
  excerpt_ru?: string;
  excerpt_uz?: string;
  excerpt_en?: string;
  body_ru?: string;
  body_uz?: string;
  body_en?: string;
  image?: string;
  gallery?: Array<string | { image?: string }>;
}

function toGallery(raw: RawNews['gallery']): string[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  const paths = raw
    .map((g) => image(typeof g === 'string' ? g : g?.image))
    .filter((p): p is string => Boolean(p));
  return paths.length ? paths : undefined;
}

function adaptNews(raw: RawNews): NewsItem {
  return {
    id: raw.id ?? '',
    title: L(raw.title_ru, raw.title_uz, raw.title_en),
    date: L(raw.date_ru, raw.date_uz, raw.date_en),
    excerpt: L(raw.excerpt_ru, raw.excerpt_uz, raw.excerpt_en),
    body: raw.body_ru || raw.body_uz || raw.body_en
      ? L(raw.body_ru, raw.body_uz, raw.body_en)
      : undefined,
    category: raw.category_ru || raw.category_uz || raw.category_en
      ? L(raw.category_ru, raw.category_uz, raw.category_en)
      : undefined,
    image: image(raw.image),
    gallery: toGallery(raw.gallery),
    published: raw.published,
  };
}

export const news: NewsItem[] = (newsJson as { items: RawNews[] }).items
  .map(adaptNews)
  .filter((n) => n.published !== false);

export function getNews(id: string): NewsItem | undefined {
  return news.find((n) => n.id === id);
}

/* ------------------------------------------------------------------ */
/* Laws                                                                */
/* ------------------------------------------------------------------ */

interface RawLaw {
  id?: string;
  title_ru?: string;
  title_uz?: string;
  title_en?: string;
  meta_ru?: string;
  meta_uz?: string;
  meta_en?: string;
  pdf?: string;
}

export const laws: LawDoc[] = (lawsJson as { items: RawLaw[] }).items.map((l) => ({
  id: l.id ?? '',
  title: L(l.title_ru, l.title_uz, l.title_en),
  meta: L(l.meta_ru, l.meta_uz, l.meta_en),
  pdf: l.pdf ?? '',
}));

/* ------------------------------------------------------------------ */
/* Offices                                                             */
/* ------------------------------------------------------------------ */

export const offices: Office[] = (officesJson as { items: Office[] }).items.filter((o) => o.id);

/** Counts driven by the office `type` field (editable via /admin). */
export const officeStats = {
  /** Territorial organizations: provinces + republic + city (excludes the railway branch). */
  offices: offices.filter((o) => o.type !== 'tarmoq').length,
  /** First-level territories: provinces + the autonomous republic. */
  territories: offices.filter((o) => o.type === 'viloyat' || o.type === 'respublika').length,
  /** Separate city-level organizations. */
  cities: offices.filter((o) => o.type === 'shahar').length,
};
