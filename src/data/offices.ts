export type OfficeType = 'viloyat' | 'respublika' | 'shahar' | 'tarmoq';

export interface Office {
  id: string;
  /** Territorial category — drives the statistics counters. Editable via /admin. */
  type?: OfficeType;
  name: string;
  city: string;
  address: string;
  phone: string;
  rais: string;
  director: string;
  lat: number;
  lng: number;
}
