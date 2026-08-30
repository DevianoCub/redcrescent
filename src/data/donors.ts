export interface Donor {
  id: string;
  name: string;
  amount: number;
  date: string;
  isAnonymous: boolean;
}

export interface Sponsor {
  id: string;
  name: string;
  description: string;
  website: string;
}

export const donors: Donor[] = [
  { id: '1', name: 'User_1337', amount: 500000, date: '2025-08-22', isAnonymous: true },
  { id: '2', name: 'Company_A', amount: 1500000, date: '2025-08-21', isAnonymous: false },
  { id: '3', name: 'User_0042', amount: 250000, date: '2025-08-20', isAnonymous: true },
  { id: '4', name: 'Company_B', amount: 800000, date: '2025-08-19', isAnonymous: false },
  { id: '5', name: 'User_8812', amount: 120000, date: '2025-08-18', isAnonymous: true },
  { id: '6', name: 'User_5567', amount: 75000, date: '2025-08-17', isAnonymous: true },
  { id: '7', name: 'Company_C', amount: 2500000, date: '2025-08-16', isAnonymous: false },
  { id: '8', name: 'User_2290', amount: 300000, date: '2025-08-15', isAnonymous: true },
  { id: '9', name: 'User_7734', amount: 50000, date: '2025-08-14', isAnonymous: true },
  { id: '10', name: 'Company_D', amount: 1000000, date: '2025-08-13', isAnonymous: false },
  { id: '11', name: 'User_1123', amount: 15000, date: '2025-08-12', isAnonymous: true },
  { id: '12', name: 'User_9981', amount: 200000, date: '2025-08-11', isAnonymous: true },
  { id: '13', name: 'Company_E', amount: 2000000, date: '2025-08-10', isAnonymous: false },
  { id: '14', name: 'User_4456', amount: 35000, date: '2025-08-09', isAnonymous: true },
  { id: '15', name: 'User_6678', amount: 60000, date: '2025-08-08', isAnonymous: true },
];

export const sponsors: Sponsor[] = [
  { id: '1', name: 'Company_A', description: 'Technology & Innovation', website: '#' },
  { id: '2', name: 'Company_B', description: 'Healthcare Solutions', website: '#' },
  { id: '3', name: 'Company_C', description: 'Financial Services', website: '#' },
  { id: '4', name: 'Company_D', description: 'Energy & Resources', website: '#' },
  { id: '5', name: 'Company_E', description: 'International Trade', website: '#' },
];

export const totalDonations = donors.reduce((sum, d) => sum + d.amount, 0);
