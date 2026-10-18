// Central editable site content.
// Editable values (contacts, socials, donate links) now live in src/content/site.json
// and are exposed by src/lib/content.ts — change them via /admin, no code needed.
// This file keeps only the typed shapes and non-CMS assets (photo map, captions).

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

// Real-photo map (partial set — more photos can be added via /admin uploads).
// Files live in public/photos/real/.
export const photos = {
  hero: '/photos/real/volon-ndrt-team-back-01.jpg',
  about: '/photos/real/team-office-group-03.jpg',
  donateBanner: '/photos/real/donate-food-package-05.jpg',
  academyBanner: '/photos/real/volon-first-aid-manikin-02.jpg',
  // Group photo with the volunteers' leader (name editable below, no code needed later via /admin)
  volonLeader: '/photos/real/volon-leader-group-11.jpg',
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
    '/photos/real/donate-home-visit-06.jpg',
    '/photos/real/volon-evacuation-bus-09.jpg',
    '/photos/real/volon-youth-hall-10.jpg',
    '/photos/real/donate-distribution-event-08.jpg',
    '/photos/real/seminar-university-group-13.jpg',
  ],
} as const;

// TODO: вписать имя и должность лидера волонтёров (пришлёт владелец)
export const volonLeaderCaption = {
  ru: 'Лидер волонтёров Общества с командой',
  uz: 'Jamiyat ko‘ngillilari yetakchisi jamoa bilan',
  en: 'The Society volunteers leader with the team',
};
