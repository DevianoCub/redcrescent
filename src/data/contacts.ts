import type { Localized } from './types';

export interface ContactInfo {
  address: Localized;
  phone: Localized;
  email: string;
}

export const contactInfo: ContactInfo = {
  address: {
    en: '12 Amir Temur Avenue, Tashkent, Uzbekistan',
    ru: 'проспект Амира Темура 12, Ташкент, Узбекистан',
    uz: 'Amir Temur ko\'chasi 12, Toshkent, O\'zbekiston',
  },
  phone: {
    en: '+998 71 236 50 48',
    ru: '+998 71 236 50 48',
    uz: '+998 71 236 50 48',
  },
  email: 'secretariat@redcrescent.uz',
};
