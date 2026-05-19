export interface Package {
  id: string;
  name: string;
  ka?: string;
  /** e.g. "50 shots" — the headline volume */
  size: string;
  /** Plain number in ₾; undefined for "by quote" */
  priceGel?: number;
  priceLabel?: string;
  blurb: string;
  flavours: string;
  featured?: boolean;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: 'party-starter',
    name: 'Party Starter',
    ka: 'პატარა ივენთი',
    size: '50 shots',
    priceGel: 250,
    flavours: '3 flavours — two alcoholic, one non.',
    blurb:
      'Lidded cups, simple labels, a tray. House parties, pre-parties, intimate birthdays.',
  },
  {
    id: 'event-box',
    name: 'Event Box',
    ka: 'დაბადების დღე',
    size: '100 shots',
    priceGel: 500,
    flavours: '4–5 flavours, dressed trays, printed menu cards.',
    blurb:
      'Allergen tags, your choice of colour palette. Birthdays, engagements, small weddings.',
    featured: true,
    badge: 'Most popular',
  },
  {
    id: 'premium-jelly-bar',
    name: 'Premium Jelly Bar',
    ka: 'ქორწილი / გალა',
    size: '200–300 shots',
    priceGel: 1200,
    flavours: '6–8 flavours, dressed bar on site, one host.',
    blurb:
      'Garnishes, chilled display, decor. The full-room moment. Weddings, gala dinners.',
  },
];

export const processSteps = [
  {
    n: '01',
    title: 'Clarify',
    ka: 'გასუფთავება',
    text: 'Spirits, juice and syrup weighed to the gram. Allergens flagged on every batch card.',
  },
  {
    n: '02',
    title: 'Set',
    ka: 'დადგმა',
    text: 'Poured into lidded cups, set at 0–5°C for 24 hours minimum. Tray-batched, time-stamped.',
  },
  {
    n: '03',
    title: 'Dress',
    ka: 'გაფორმება',
    text: 'Garnish, label, menu card. Branded stickers and colours matched to your palette.',
  },
  {
    n: '04',
    title: 'Deliver',
    ka: 'მიწოდება',
    text: 'Cooler-box transport. Setup on site within thirty minutes of arrival.',
  },
];
