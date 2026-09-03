export type Lang = 'ru' | 'uz' | 'en';

export type Localized<T = string> = Record<Lang, T>;
