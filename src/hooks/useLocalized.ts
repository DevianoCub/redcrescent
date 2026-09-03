import { useTranslation } from 'react-i18next';
import type { Lang, Localized } from '../data/types';

const LANGS: Lang[] = ['ru', 'uz', 'en'];

export function useLocalized() {
  const { i18n } = useTranslation();
  const current = (LANGS.includes(i18n.language as Lang) ? i18n.language : 'uz') as Lang;

  return <T>(localized: Localized<T>): T => localized[current] ?? localized.uz;
}
