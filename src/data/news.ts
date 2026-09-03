import type { Localized } from './types';

export interface NewsItem {
  id: string;
  title: Localized;
  date: Localized;
  excerpt: Localized;
}

export const news: NewsItem[] = [
  {
    id: 'flood-relief',
    title: {
      en: 'Emergency Relief in Flood-Affected Areas',
      ru: 'Экстренная помощь в пострадавших от наводнения районах',
      uz: 'Suv toshqinidan zararlangan hududlarga tez yordam',
    },
    date: {
      en: 'August 15, 2025',
      ru: '15 августа 2025',
      uz: '15-avgust, 2025',
    },
    excerpt: {
      en: 'Rapid response teams deployed to provide humanitarian assistance to communities affected by seasonal flooding.',
      ru: 'Группы быстрого реагирования направлены для оказания гуманитарной помощи пострадавшим от сезонного наводнения.',
      uz: 'Mavsumiy suv toshqinidan zararlangan aholiga insonparvarlik yordami ko\'rsatish uchun tezkor javob guruhlari yuborildi.',
    },
  },
  {
    id: 'blood-donation',
    title: {
      en: 'Blood Donation Campaign Results',
      ru: 'Итоги акции по донорству крови',
      uz: 'Qon donorlik aktsiyasi natijalari',
    },
    date: {
      en: 'August 10, 2025',
      ru: '10 августа 2025',
      uz: '10-avgust, 2025',
    },
    excerpt: {
      en: 'National blood donation drive collected over 5,000 units, exceeding targets across all regions.',
      ru: 'Всенародная акция по донорству крови собрала более 5 000 единиц, превзойдя цели по всем регионам.',
      uz: 'Umumxalq qon donorlik aktsiyasi barcha viloyatlar bo\'ylab 5 000 dan ortiq birlik to\'plab, maqsadlarga erishdi.',
    },
  },
  {
    id: 'volunteer-training',
    title: {
      en: 'New Volunteer Training Program',
      ru: 'Новая программа обучения волонтёров',
      uz: 'Yangi ko\'ngillilar o\'quv dasturi',
    },
    date: {
      en: 'August 5, 2025',
      ru: '5 августа 2025',
      uz: '5-avgust, 2025',
    },
    excerpt: {
      en: 'Launch of enhanced volunteer training program covering first aid, emergency response, and community health.',
      ru: 'Запуск обновлённой программы обучения волонтёров, включающей первую помощь, реагирование на ЧС и общественное здоровье.',
      uz: 'Birinchi yordam, favqulodda vaziyatlarga javob va jamiyat salomatligini o\'z ichiga olgan yangilangan ko\'ngillilar o\'quv dasturining ishga tushirilishi.',
    },
  },
];
