import type { Localized } from './types';

export interface LawDoc {
  id: string;
  title: Localized;
  meta: Localized;
}

export const laws: LawDoc[] = [
  {
    id: 'presidential-decree',
    title: {
      en: "Decree of the President of the Republic of Uzbekistan 'On the Red Crescent Society of Uzbekistan'",
      ru: 'Указ Президента Республики Узбекистан «Об Обществе Красного Полумесяца в Узбекистане»',
      uz: 'O\'zbekiston Respublikasi Prezidentining «O\'zbekiston Qizil Yarim Oy jamiyati to\'g\'risida»gi Farmoni',
    },
    meta: {
      en: 'Presidential Decree No. UP-411, May 28, 1992',
      ru: 'Указ Президента № УП-411 от 28 мая 1992 года',
      uz: 'Prezident Farmoni № PF-411, 1992-yil 28-may',
    },
  },
  {
    id: 'emblem-law',
    title: {
      en: "Law of the Republic of Uzbekistan 'On the Use and Protection of Red Crescent and Red Cross Emblems'",
      ru: 'Закон Республики Узбекистан «Об использовании и защите эмблем красного полумесяца и красного креста»',
      uz: 'O\'zbekiston Respublikasining «Qizil Yarim Oy va Qizil Xoch timsollaridan foydalanish hamda ularni himoya qilish to\'g\'risida»gi Qonuni',
    },
    meta: {
      en: 'Adopted in 2004',
      ru: 'Принят в 2004 году',
      uz: '2004-yilda qabul qilingan',
    },
  },
  {
    id: 'charity',
    title: {
      en: "Law of the Republic of Uzbekistan 'On Charity'",
      ru: 'Закон Республики Узбекистан «О благотворительности»',
      uz: 'O\'zbekiston Respublikasining «Xayriya to\'g\'risida»gi Qonuni',
    },
    meta: {
      en: 'Law of the Republic of Uzbekistan',
      ru: 'Закон Республики Узбекистан',
      uz: 'O\'zbekiston Respublikasi Qonuni',
    },
  },
  {
    id: 'public-associations',
    title: {
      en: "Law of the Republic of Uzbekistan 'On Public Associations'",
      ru: 'Закон Республики Узбекистан «Об общественных объединениях»',
      uz: 'O\'zbekiston Respublikasining «Jamoat birlashmalari to\'g\'risida»gi Qonuni',
    },
    meta: {
      en: 'Law of the Republic of Uzbekistan',
      ru: 'Закон Республики Узбекистан',
      uz: 'O\'zbekiston Respublikasi Qonuni',
    },
  },
  {
    id: 'ngo-guarantees',
    title: {
      en: "Law of the Republic of Uzbekistan 'On Guarantees of Activities of Non-Governmental Non-Profit Organizations'",
      ru: 'Закон Республики Узбекистан «О гарантиях деятельности негосударственных некоммерческих организаций»',
      uz: 'O\'zbekiston Respublikasining «Nodavlat notijorat tashkilotlari faoliyatining kafolatlari to\'g\'risida»gi Qonuni',
    },
    meta: {
      en: 'Law of the Republic of Uzbekistan',
      ru: 'Закон Республики Узбекистан',
      uz: 'O\'zbekiston Respublikasi Qonuni',
    },
  },
];
