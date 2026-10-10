// Central editable site content.
// TODO for editor (no code needed after Decap is wired):
// all URLs, phones, socials and donate links live here / in public/content/*.json
// and are editable via /admin.

export interface DonateLink {
  id: 'click' | 'payme' | 'uzum';
  name: string;
  url: string;
  note?: string;
}

export interface SocialLinks {
  facebook: string;
  telegram: string;
  instagram: string;
}

export const socials: SocialLinks = {
  facebook: 'https://www.facebook.com/UzbekistanRedCrescent',
  // TODO: replace with the new official channel URL when provided
  telegram: 'https://t.me/uzredcrescent',
  // TODO: replace with the real Instagram handle when provided
  instagram: 'https://www.instagram.com/uzredcrescent',
};

// TODO: replace '#' with real merchant / fundraising links from Click, Payme, Uzum
export const donateLinks: DonateLink[] = [
  {
    id: 'click',
    name: 'Click',
    url: '#',
    note: 'TODO: insert Click fundraising link',
  },
  {
    id: 'payme',
    name: 'Payme',
    url: '#',
    note: 'TODO: insert Payme fundraising link',
  },
  {
    id: 'uzum',
    name: 'Uzum Bank',
    url: '#',
    note: 'TODO: insert Uzum fundraising link',
  },
];

// Real-photo map (partial set — more photos can be added via /admin uploads).
// Files live in public/photos/real/.
export const photos = {
  hero: '/photos/real/volon-ndrt-team-back-01.jpg',
  about: '/photos/real/team-office-group-03.jpg',
  donateBanner: '/photos/real/donate-food-package-05.jpg',
  academyBanner: '/photos/real/volon-first-aid-manikin-02.jpg',
  activities: {
    medical: '/photos/real/donate-food-package-05.jpg',
    emergency: '/photos/real/volon-tent-setup-03.jpg',
    first_aid: '/photos/real/volon-stadium-first-aid-06.jpg',
    donation: '/photos/real/donate-aid-elderly-01.jpg',
    volunteer: '/photos/real/volon-group-outdoor-07.jpg',
    law: '/photos/real/team-principles-hall-02.jpg',
  },
  newsPool: [
    '/photos/real/volon-stadium-first-aid-06.jpg',
    '/photos/real/donate-home-care-02.jpg',
    '/photos/real/seminar-yard-meeting-02.jpg',
  ],
} as const;
