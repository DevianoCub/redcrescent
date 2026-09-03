import type { Localized } from './types';

export interface HistoryEvent {
  id: string;
  year: string;
  text: Localized;
}

export const history: HistoryEvent[] = [
  {
    id: 'founding',
    year: '1925',
    text: {
      en: 'Founded on November 14, 1925, with its headquarters in Samarkand.',
      ru: 'Основано 14 ноября 1925 года, штаб-квартира находилась в Самарканде.',
      uz: '1925-yil 14-noyabrda tashkil etilgan bo\'lib, shtab-kvartirasi Samarqandda joylashgan edi.',
    },
  },
  {
    id: 'first-congress',
    year: '1927',
    text: {
      en: 'Held the 1st All-Uzbekistan Congress; over 1,100 members.',
      ru: 'Прошёл 1-й Всеузбекский съезд; более 1 100 членов.',
      uz: '1-Umumo\'zbekiston qurultoyi o\'tkazildi; 1100 dan ortiq a\'zo.',
    },
  },
  {
    id: 'ambulance-aviation',
    year: '1934',
    text: {
      en: 'Created the first ambulance aviation units in Central Asia.',
      ru: 'Созданы первые в Центральной Азии отряды санитарной авиации.',
      uz: 'Markaziy Osiyoda birinchi sanitariya aviatsiya otryadlari tuzildi.',
    },
  },
  {
    id: 'ww2',
    year: '1941–45',
    text: {
      en: 'During World War II, trained about 7,000 nurses; three nurses received the Florence Nightingale Medal.',
      ru: 'В годы Великой Отечественной войны подготовлено около 7 000 медсестёр; три медсестры награждены медалью Флоренс Найтингейл.',
      uz: 'Ikkinchi Jahon urushi yillarida qariyb 7000 hamshira tayyorlandi; uch hamshira Florens Naytingel medali bilan taqdirlandi.',
    },
  },
  {
    id: 'membership',
    year: '1956',
    text: {
      en: 'Membership exceeded 1 million people.',
      ru: 'Число членов превысило 1 миллион человек.',
      uz: 'A\'zolar soni 1 million kishidan oshdi.',
    },
  },
  {
    id: 'earthquake',
    year: '1966–67',
    text: {
      en: 'Humanitarian aid during the devastating Tashkent earthquake.',
      ru: 'Оказание гуманитарной помощи при разрушительном Ташкентском землетрясении.',
      uz: 'Vayronagarchilikli Toshkent zilzilasi paytida insonparvarlik yordami ko\'rsatildi.',
    },
  },
  {
    id: 'mehr-shafqat',
    year: '1989',
    text: {
      en: "Established the 'Mehr-Shafqat' service to help the elderly and low-income citizens.",
      ru: 'Создана служба «Мехр-шафкат» для помощи пожилым и малообеспеченным гражданам.',
      uz: 'Keksalar va kam ta\'minlangan fuqarolarga yordam berish uchun «Mehr-shafqat» xizmati tuzildi.',
    },
  },
  {
    id: 'decree',
    year: '1992',
    text: {
      en: 'Presidential Decree; became an independent public organization.',
      ru: 'Указ Президента; обрело статус независимой общественной организации.',
      uz: 'Prezident Farmoni; mustaqil jamoat tashkiloti maqomini oldi.',
    },
  },
  {
    id: 'federation',
    year: '1995',
    text: {
      en: 'Admitted as a full member of the International Federation of Red Cross and Red Crescent Societies.',
      ru: 'Принято полноправным членом Международной Федерации Обществ Красного Креста и Красного Полумесяца.',
      uz: 'Xalqaro Qizil Xoch va Qizil Yarim Oy Jamiyatlari Federatsiyasiga to\'liq a\'zo qilib qabul qilindi.',
    },
  },
  {
    id: 'charter',
    year: '1998',
    text: {
      en: '18th Congress adopted a new Charter.',
      ru: 'На 18-м съезде принят новый Устав.',
      uz: '18-qurultoyda yangi Nizom qabul qilindi.',
    },
  },
  {
    id: 'emblem-law',
    year: '2004',
    text: {
      en: 'Law of Uzbekistan on the use and protection of Red Crescent and Red Cross emblems adopted.',
      ru: 'Принят Закон Республики Узбекистан об использовании и защите эмблем Красного Полумесяца и Красного Креста.',
      uz: 'Qizil Yarim Oy va Qizil Xoch timsollaridan foydalanish va ularni himoya qilish to\'g\'risidagi Qonun qabul qilindi.',
    },
  },
  {
    id: 'centenary',
    year: '2025',
    text: {
      en: 'The Society celebrates its 100th anniversary.',
      ru: 'Общество отмечает своё 100-летие.',
      uz: 'Jamiyat o\'zining 100 yilligini nishonlamoqda.',
    },
  },
];
