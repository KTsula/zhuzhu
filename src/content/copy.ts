export type Lang = 'en' | 'ka';

export const nav = {
  en: { menu: 'menu',   order: 'order',   about: 'about', reserve: 'reserve' },
  ka: { menu: 'მენიუ', order: 'შეკვეთა', about: 'ჩვენ',   reserve: 'შეკვეთა' },
};

export const hero = {
  en: {
    slogan: 'Cocktail desserts. Set by hand, in Tbilisi.',
    sub: 'Three cubes. Served in bites, never in glasses.',
    cta: 'book your event',
  },
  ka: {
    slogan: 'შეჟუჟუნდი.',
    sub: 'სამი კუბი. ლუკმად მიწოდებული, ჭიქით არასოდეს.',
    cta: 'დაჯავშნე ღონისძიება',
  },
};

export const manifesto = {
  en: {
    paras: [
      'A cocktail dessert is not a shot. It is a cocktail measured in bites — the chacha you would sip after a long dinner, suspended in a single edible moment.',
      'Three founders. One kitchen. Every cube set by hand.',
    ],
  },
  ka: {
    paras: [
      'კოქტეილ-დესერტი არ არის შოტი. ის კოქტეილია ლუკმად გაზომილი — ის ჭაჭა, რომელსაც სადილის შემდეგ წრუპავდი, ერთ ლუკმაში დაშერული.',
      'სამი დამფუძნებელი. ერთი სამზარეულო. ყოველი კუბი ხელით აწყობილი.',
    ],
  },
};

export type SignatureItem = {
  id: string;
  line: { en: string; ka: string };
  name: { en: string; ka: string };
  blurb: { en: string; ka: string };
  meta: { line: { en: string; ka: string } };
  img: string;
  accent: string;
  price: number;
};

export const signatures: SignatureItem[] = [
  {
    id: '01',
    line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    name: { en: 'Churchkhela Cream', ka: 'ჩურჩხელის კრემი' },
    blurb: {
      en: 'A walnut churchkhela, caramelised the day before and broken by hand, folded into Tbilisi double-cream and dark muscovado. The walnut sits on top while the cube is still warm — it keeps the crunch all the way through the bite.',
      ka: 'ნიგვზის ჩურჩხელა, წინა დღეს კარამელიზებული და ხელით დატეხილი, თბილისური ორმაგი ნაღების და მუსკოვადოს შაქრის შერევით. ნიგოზი კუბის ზედაპირზე, ჯერ კიდევ თბილ ფონზე — კრახი ბოლომდე რჩება.',
    },
    meta: {
      line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    },
    img: '/cubes/walnut-toffee.png',
    accent: 'rgba(196, 140, 70, 0.30)',
    price: 14,
  },
  {
    id: '02',
    line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    name: { en: 'Honey Lemon', ka: 'თაფლი-ლიმონი' },
    blurb: {
      en: 'Mountain honey-water from Kvemo Kartli, slow-warmed with fresh lemon zest and a long-aged Bagrationi chacha. A summer cube — set firmer, meant to be held a second on the tongue. A wedge of lime is laid on top after the cube has cooled.',
      ka: 'ქვემო ქართლის მთის თაფლი, ლიმონის კანითა და გრძელვადიანი ბაგრატიონის ჭაჭით ნელ-ნელა გათბობილი. საზაფხულო კუბი — უფრო მაგრად დაყენებული, რომ ენაზე ერთი წამი დარჩეს. ლაიმის ნაჭერი თავზე, კუბის გაგრილების შემდეგ.',
    },
    meta: {
      line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    },
    img: '/cubes/tarragon-lime.png',
    accent: 'rgba(220, 170, 70, 0.32)',
    price: 10,
  },
  {
    id: '03',
    line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    name: { en: 'Red Wine Berry', ka: 'წითელი ღვინო-კენკრა' },
    blurb: {
      en: 'A red-dry Saperavi from Kakheti, reduced six hours with sour cherry, blackberry and a pinch of black pepper. A glass-bottled morello rests on top — the only piece of fruit that survives the cube whole. Wine in three bites.',
      ka: 'კახური საფერავი მშრალი, ექვს საათში გადადუღებული მაყვალთან, ბალთან და შავი პილპილის წვერთან ერთად. მინის ქილაში დავარგებული მორელო თავზე — ერთადერთი ხილი, რომელიც კუბში მთლიანი რჩება. ღვინო სამ ლუკმაში.',
    },
    meta: {
      line: { en: 'The Signature Three', ka: 'სამი ხელწერა' },
    },
    img: '/cubes/saperavi-cherry.png',
    accent: 'rgba(180, 50, 80, 0.30)',
    price: 16,
  },
];

export const packages = {
  en: {
    label: 'order',
    head: 'Three suggested boxes — or build your own.',
    sub: 'The signature three are priced per cube. Minimum order ₾250. We set the cubes the day before and deliver them chilled within Tbilisi.',
    popular: 'most ordered',
    buildCta: 'build your box  →',
    buildNote: 'None of these fit? Build your own box — choose the cubes, set the count, see the total live.',
  },
  ka: {
    label: 'შეკვეთა',
    head: 'სამი შემოთავაზებული ყუთი — ან ააწყვე საკუთარი.',
    sub: 'სამი ხელწერა კუბზე ფასდება. მინიმალური შეკვეთა ₾250. კუბებს წინა დღეს ვაყენებთ და თბილისის ფარგლებში გაგრილებულად ვაწვდით.',
    popular: 'ყველაზე გაყიდვადი',
    buildCta: 'ააწყვე ყუთი  →',
    buildNote: 'არცერთი არ გერგებათ? ააწყვეთ საკუთარი — აირჩიეთ კუბები, განსაზღვრეთ რაოდენობა, ნახეთ ჯამი ცოცხლად.',
  },
};

export type Pkg = {
  tag: string;
  name: { en: string; ka: string };
  counts: Record<string, number>;
  cubes: number;
  total: number;
  blurb: { en: string; ka: string };
  fit: { en: string; ka: string };
  cta: { en: string; ka: string };
  popular?: boolean;
};

export const packageList: Pkg[] = [
  {
    tag: '01',
    name: { en: 'The Small Plate', ka: 'პატარა თეფში' },
    counts: { '01': 15, '02': 5, '03': 5 },
    cubes: 25,
    total: 300,
    blurb: {
      en: 'An intimate room of ten. Honey-led, balanced by a few cream and wine cubes.',
      ka: 'ათი სტუმრის ინტიმური საღამო. თაფლი-ლიმონი ლიდერობს, კრემითა და ღვინის კუბებით დაბალანსებული.',
    },
    fit: { en: 'sized for 8–12 guests', ka: '8–12 სტუმარზე' },
    cta: { en: 'order this box', ka: 'შეუკვეთე' },
  },
  {
    tag: '02',
    name: { en: 'The Even Three', ka: 'სამის რიგი' },
    counts: { '01': 10, '02': 10, '03': 10 },
    cubes: 30,
    total: 400,
    blurb: {
      en: 'A table of fifteen. Equal weight to each cube — the way we taste them ourselves.',
      ka: 'თხუთმეტი სტუმრის სუფრა. თითოეულ კუბს თანაბარი წილი — ისე, როგორც თვითონ ვაგემოვნებთ.',
    },
    fit: { en: 'sized for 12–18 guests', ka: '12–18 სტუმარზე' },
    cta: { en: 'order this box', ka: 'შეუკვეთე' },
    popular: true,
  },
  {
    tag: '03',
    name: { en: 'The Long Spread', ka: 'გრძელი ტრაპეზი' },
    counts: { '01': 20, '02': 15, '03': 15 },
    cubes: 50,
    total: 650,
    blurb: {
      en: 'Wedding-scale. Service over three hours; passer + ceramic recommended.',
      ka: 'ქორწილის მასშტაბი. სამ საათიანი მომსახურება; მიმტანი + კერამიკული თეფშები რეკომენდებულია.',
    },
    fit: { en: 'sized for 25–35 guests', ka: '25–35 სტუმარზე' },
    cta: { en: 'order this box', ka: 'შეუკვეთე' },
  },
];

export const booking = {
  en: {
    head: 'book your event',
    sub: 'Tell us about the night. We answer within a working day, with a draft menu and a quote.',
    fields: {
      name:    { label: 'Your name',           ph: 'Mariam Davitashvili' },
      contact: { label: 'Email or phone',      ph: 'mariam@stamba.ge' },
      date:    { label: 'When is the event?',  ph: '12 · 06 · 2026' },
      venue:   { label: 'Where?',              ph: 'Stamba Hotel, Tbilisi' },
      guests:  { label: 'How many people?',    ph: '24 guests' },
      note:    { label: 'Anything else? (optional)', ph: 'Time of day, theme, allergens, special requests…' },
    },
    submit: 'send',
    sending: 'sending…',
    success: 'thank you. we have your brief and will answer within a working day.',
    failure: 'something went wrong. write to hello@zhuzhu.ge directly.',
    foot: 'No automation. A real person reads this.',
  },
  ka: {
    head: 'დაჯავშნე ღონისძიება',
    sub: 'მოგვიყევით საღამოს შესახებ. ერთ სამუშაო დღეში გიპასუხებთ — ვადგენთ მენიუს და ფასს.',
    fields: {
      name:    { label: 'თქვენი სახელი',                    ph: 'მარიამ დავითაშვილი' },
      contact: { label: 'ელფოსტა ან ტელეფონი',              ph: 'mariam@stamba.ge' },
      date:    { label: 'როდის არის ღონისძიება?',           ph: '12 · 06 · 2026' },
      venue:   { label: 'სად?',                              ph: 'სტამბა, თბილისი' },
      guests:  { label: 'რამდენი სტუმარი?',                  ph: '24 სტუმარი' },
      note:    { label: 'სხვა რამე? (არასავალდებულო)',      ph: 'საათი, თემა, ალერგენები, განსაკუთრებული მოთხოვნები…' },
    },
    submit: 'გაგზავნა',
    sending: 'იგზავნება…',
    success: 'მადლობა. ბრიფი მივიღეთ და ერთ სამუშაო დღეში გიპასუხებთ.',
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ პირდაპირ hello@zhuzhu.ge.',
    foot: 'ცოცხალი ადამიანი წაიკითხავს.',
  },
};

export const footer = {
  en: {
    contact: 'contact',
    follow:  'follow',
    legal:   'legal',
    addr: ['ZhuZhu Atelier', 'Tbilisi · Georgia'],
    mail:  'hello@zhuzhu.ge',
    tagline: '“You don’t sip — you bite.”',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/she_zhuzhu_ndi' },
      { label: 'TikTok',    href: 'https://tiktok.com/@she_zhuzhu_ndi' },
      { label: 'Facebook',  href: 'https://www.facebook.com/' },
    ],
    legals: ['Terms', 'Privacy'],
    rights: '© 2026 ZhuZhu · Hand-set in Tbilisi.',
    setIn: 'Site set in Spectral & Manrope & Noto Serif Georgian.',
  },
  ka: {
    contact: 'კონტაქტი',
    follow:  'სოციალური',
    legal:   'სამართლებრივი',
    addr: ['ჟუჟუ ატელიე', 'თბილისი · საქართველო'],
    mail:  'hello@zhuzhu.ge',
    tagline: '„შეჟუჟუნდი — არ წრუპავ, ვიკვამ.“',
    socials: [
      { label: 'ინსტაგრამი', href: 'https://instagram.com/she_zhuzhu_ndi' },
      { label: 'ტიკტოკი',    href: 'https://tiktok.com/@she_zhuzhu_ndi' },
      { label: 'ფეისბუქი',    href: 'https://www.facebook.com/' },
    ],
    legals: ['პირობები', 'კონფიდენციალურობა'],
    rights: '© 2026 ჟუჟუ · ხელნაკეთი თბილისში.',
    setIn: 'საიტი აწყობილია Spectral-სა და Manrope-სა და Noto Serif Georgian-ში.',
  },
};

export const pageMeta = {
  home: {
    en: { title: 'ZhuZhu — Cocktail desserts · Tbilisi atelier',
          desc: 'Cocktail desserts hand-set in Tbilisi. Saperavi, walnut churchkhela, chacha honey-lemon. For weddings, brand activations and after-hours events.' },
    ka: { title: 'ჟუჟუ — კოქტეილ-დესერტები · თბილისის ატელიე',
          desc: 'კოქტეილ-დესერტები ხელით აწყობილი თბილისში. საფერავი, ნიგვზის ჩურჩხელა, ჭაჭა-თაფლი-ლიმონი. ქორწილებისთვის, ღონისძიებებისთვის.' },
  },
};
