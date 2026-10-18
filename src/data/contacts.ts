import type { Localized } from './types';

export interface ContactInfo {
  address: Localized;
  phone: Localized;
  email: string;
  fax?: string;
}
