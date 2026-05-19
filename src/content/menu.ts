export type Category = 'georgian' | 'premium' | 'classic' | 'non-alcoholic';

export interface Flavour {
  id: string;
  name: string;
  /** Short italic line, one sentence */
  description: string;
  category: Category;
  allergens: string[];
  /** Optional Georgian translation of the name */
  ka?: string;
}

export const categoryLabel: Record<Category, string> = {
  georgian: 'Georgian',
  premium: 'Premium',
  classic: 'Classic',
  'non-alcoholic': 'Alcohol-free',
};

export const categoryTagClass: Record<Category, string> = {
  georgian: 'wine',
  premium: 'gold',
  classic: '',
  'non-alcoholic': 'green',
};

export const flavours: Flavour[] = [
  {
    id: 'saperavi-berry-sangria',
    name: 'Saperavi Berry Sangria',
    ka: 'საფერავი ბერი სანგრია',
    description: 'Deep saperavi, citrus and forest berries, set with patience.',
    category: 'georgian',
    allergens: ['sulfites', 'citrus'],
  },
  {
    id: 'chacha-honey-lemon',
    name: 'Chacha Honey Lemon',
    ka: 'ჭაჭა თაფლი ლიმონი',
    description: 'Honey-rounded chacha, a long ribbon of lemon zest.',
    category: 'georgian',
    allergens: ['citrus'],
  },
  {
    id: 'churchkhela-cream',
    name: 'Churchkhela Cream',
    ka: 'ჩურჩხელის კრემი',
    description: 'Walnut, grape molasses, soft cream — a Tbilisi memory in one bite.',
    category: 'georgian',
    allergens: ['walnut', 'dairy'],
  },
  {
    id: 'frangelico-sour',
    name: 'Frangelico Sour',
    ka: 'ფრანჯელიკო სოური',
    description: 'Toasted hazelnut, sharp lemon, a whisper of sugar.',
    category: 'premium',
    allergens: ['hazelnut', 'citrus'],
  },
  {
    id: 'espresso-baileys',
    name: 'Espresso Baileys',
    ka: 'ესპრესო ბეილისი',
    description: 'Slow espresso, soft Irish cream, cocoa nib on top.',
    category: 'premium',
    allergens: ['dairy'],
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    ka: 'აპეროლ სპრიცი',
    description: 'Bittersweet orange, prosecco bubbles set into clarity.',
    category: 'classic',
    allergens: ['sulfites'],
  },
  {
    id: 'martini-bianco-lemon',
    name: 'Martini Bianco Lemon',
    ka: 'მარტინი ბიანკო ლიმონი',
    description: 'Aromatic vermouth, lemon oils, finished with mint.',
    category: 'classic',
    allergens: ['sulfites', 'citrus'],
  },
  {
    id: 'mojito',
    name: 'Mojito',
    ka: 'მოხიტო',
    description: 'White rum, lime, mint pressed by hand.',
    category: 'classic',
    allergens: ['citrus'],
  },
  {
    id: 'tarkhuna-lemonade',
    name: 'Tarragon Lemonade',
    ka: 'ტარხუნის ლიმონათი',
    description: 'Pale green, herbal, unmistakably Georgian.',
    category: 'non-alcoholic',
    allergens: ['citrus'],
  },
  {
    id: 'feijoa-citrus',
    name: 'Feijoa Citrus',
    ka: 'ფეიჰოა და ციტრუსი',
    description: 'Autumn feijoa, lemon, late-season honey.',
    category: 'non-alcoholic',
    allergens: ['citrus'],
  },
  {
    id: 'pomegranate-citrus',
    name: 'Pomegranate Citrus',
    ka: 'ბროწეული და ციტრუსი',
    description: 'Pressed pomegranate, blood orange, a touch of rose.',
    category: 'non-alcoholic',
    allergens: ['citrus'],
  },
  {
    id: 'berry-mint-mocktail',
    name: 'Berry Mint Mocktail',
    ka: 'კენკრა და პიტნა',
    description: 'Wild berries, cold mint, set to a perfect slice.',
    category: 'non-alcoholic',
    allergens: [],
  },
];
