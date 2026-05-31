export type Lang = 'en' | 'ka';

export const nav = {
  en: { menu: 'menu', order: 'order', box: 'box', about: 'about', reserve: 'reserve', reserveTasting: 'reserve a tasting' },
  ka: { menu: 'მენიუ', order: 'შეკვეთა', box: 'ნაკრები', about: 'ჩვენ', reserve: 'დაჯავშნა', reserveTasting: 'დეგუსტაციის დაჯავშნა' },
};

export const hero = {
  en: {
    slogan: 'Cocktail desserts. Set by hand, in Tbilisi.',
    sub: 'Three cubes. Served in bites, never in glasses.',
    cta: 'book your event',
  },
  ka: {
    slogan: 'კოქტეილ-დესერტები. ხელით აწყობილი თბილისში.',
    sub: 'სამი კუბი. ლუკმად მიწოდებული, არასოდეს — ჭიქით.',
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
      'კოქტეილ-დესერტი არ არის შოტი. ის ლუკმად ქცეული კოქტეილია — ჭაჭა, რომელსაც ხანგრძლივი ვახშმის შემდეგ ნელა დალევდი, ახლა ერთ საკვებ მომენტშია მოქცეული.',
      'სამი დამფუძნებელი. ერთი სამზარეულო. ყოველი კუბი ხელით აწყობილი.',
    ],
  },
};

export const sharedLabels = {
  en: {
    line: 'line',
    price: 'price',
    perSet: '/ set',
    language: 'language',
  },
  ka: {
    line: 'სერია',
    price: 'ფასი',
    perSet: '/ ნაკრები',
    language: 'ენა',
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
    line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    name: { en: 'Cream Kiss', ka: 'კრემ-კოცნა' },
    blurb: {
      en: 'A walnut churchkhela, caramelised the day before and broken by hand, folded into Tbilisi double-cream and dark muscovado. The walnut sits on top while the cube is still warm — it keeps the crunch all the way through the bite.',
      ka: 'ნიგვზის ჩურჩხელა, წინა დღეს კარამელიზებული და ხელით დატეხილი, თბილისურ ორმაგ ნაღებსა და მუქი მუსკოვადოს შაქარში შერეული. ნიგოზი კუბს ზემოდან ედება, სანამ ჯერ კიდევ თბილია — ხრაშუნი ბოლომდე მიჰყვება თითოეულ ლუკმას.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    },
    img: '/cubes/cream-kiss.png',
    accent: 'rgba(196, 140, 70, 0.30)',
    price: 14,
  },
  {
    id: '02',
    line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    name: { en: 'Honey Chacha', ka: 'თაფლის ჭაჭა' },
    blurb: {
      en: 'Mountain honey-water from Kvemo Kartli, slow-warmed with fresh lemon zest and a long-aged Bagrationi chacha. A summer cube — set firmer, meant to be held a second on the tongue. A wedge of lime is laid on top after the cube has cooled.',
      ka: 'ქვემო ქართლის მთის თაფლიანი წყალი, ახალი ლიმონის ცედრითა და დიდხანს დავარგებული ბაგრატიონის ჭაჭით ნელა შემთბარი. საზაფხულო კუბი — უფრო მყარად დაყენებული, რომ ენაზე ერთი წამით გაჩერდეს. ლაიმის ნაჭერი ზემოდან ედება, როცა კუბი გაცივდება.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    },
    img: '/cubes/honey-chacha.png',
    accent: 'rgba(220, 170, 70, 0.32)',
    price: 13,
  },
  {
    id: '03',
    line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    name: { en: 'Kinza Garden', ka: 'ქინძის ბაღი' },
    blurb: {
      en: 'Garden cilantro, cut the morning we set the cube, steeped into a juniper-forward gin with house limoncello and fresh-pressed lemon. A clear, herbal cube — green on the tongue, citrus on the finish, just enough bite from the gin. A single kinza leaf is pressed on top once it has cooled.',
      ka: 'ბაღის ქინძი, კუბის აწყობის დილით მოჭრილი, ღვიის არომატის მქონე ჯინში, სახლის ლიმონჩელოსა და ახლად დაწურულ ლიმონში ჩაყენებული. გამჭვირვალე, ბალახოვანი კუბი — მწვანე ენაზე, ციტრუსი დასასრულზე, ჯინის ოდნავი სიმწვავით. ერთი ქინძის ფოთოლი ზემოდან ედება, როცა გაცივდება.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'ქართული საავტორო გემოები' },
    },
    img: '/cubes/kinza-garden.png',
    accent: 'rgba(130, 185, 110, 0.32)',
    price: 12,
  },
];

export type ClassicSet = {
  id: string;
  name: { en: string; ka: string };
  blurb: { en: string; ka: string };
  accent: string;
  price: number; // per-cube; displayed as price × 8 / set
};

export const classics: ClassicSet[] = [
  {
    id: 'c01',
    name: { en: 'Mojito', ka: 'მოხიტო' },
    blurb: {
      en: 'White rum, lime, fresh mint — set crisp and bright.',
      ka: 'თეთრი რომი, ლაიმი, ახალი პიტნა — მკვეთრად და ცოცხლად აწყობილი.',
    },
    accent: 'rgba(120, 180, 130, 0.45)',
    price: 5,
  },
  {
    id: 'c02',
    name: { en: 'Aperol Spritz', ka: 'აპეროლ შპრიცი' },
    blurb: {
      en: 'Aperol, prosecco, orange — a summer cube with a bitter edge.',
      ka: 'აპეროლი, პროსეკო, ფორთოხალი — საზაფხულო კუბი მცირე სიმწარით.',
    },
    accent: 'rgba(240, 130, 50, 0.45)',
    price: 6,
  },
  {
    id: 'c03',
    name: { en: 'Espresso Baileys', ka: 'ესპრესო-ბეილისი' },
    blurb: {
      en: 'Single-origin espresso folded into Baileys cream.',
      ka: 'ერთჯერადი ესპრესო ბეილისის ნაღებში შერეული.',
    },
    accent: 'rgba(160, 100, 60, 0.45)',
    price: 6,
  },
  {
    id: 'c04',
    name: { en: 'Tarragon Lemonade', ka: 'ტარხუნა-ლიმონათი' },
    blurb: {
      en: 'House tarragon syrup, lemon, soda — alcohol-free.',
      ka: 'ტარხუნის სიროფი, ლიმონი, სოდა — უალკოჰოლო.',
    },
    accent: 'rgba(150, 200, 100, 0.45)',
    price: 4,
  },
  {
    id: 'c05',
    name: { en: 'Berry Mint', ka: 'კენკრა-პიტნა' },
    blurb: {
      en: 'Wild raspberry, blackberry, fresh mint — alcohol-free.',
      ka: 'ველური ჟოლო, მაყვალი, ახალი პიტნა — უალკოჰოლო.',
    },
    accent: 'rgba(200, 60, 100, 0.45)',
    price: 4,
  },
  {
    id: 'c06',
    name: { en: 'Pomegranate Citrus', ka: 'ბროწეული-ციტრუსი' },
    blurb: {
      en: 'Cold-pressed pomegranate, orange, lime — alcohol-free.',
      ka: 'ცივად დაწურული ბროწეული, ფორთოხალი, ლაიმი — უალკოჰოლო.',
    },
    accent: 'rgba(180, 40, 60, 0.45)',
    price: 5,
  },
];

export const menuClassics = {
  en: {
    eyebrow: 'Classics',
    head: 'Beyond the signatures.',
    sub: 'Familiar cocktails, set the same way. Same minimum order, same Tbilisi delivery.',
  },
  ka: {
    eyebrow: 'კლასიკა',
    head: 'სიგნატურის მიღმა.',
    sub: 'ნაცნობი კოქტეილები, იმავე ფორმით. იგივე მინიმუმი, იგივე თბილისური მიწოდება.',
  },
};

export const moreFlavours = {
  en: {
    eyebrow: 'and beyond the three',
    cta: 'See the full menu  →',
  },
  ka: {
    eyebrow: 'სამის მიღმა',
    cta: 'სრული მენიუ  →',
  },
};

export const packages = {
  en: {
    label: 'order',
    head: 'Three suggested boxes — or build your own.',
    sectionTitle: 'Suggested boxes.',
    sub: 'The signature three are priced per cube. Minimum order ₾250. We set the cubes the day before and deliver them chilled within Tbilisi.',
    popular: 'most ordered',
    buildCta: 'build your box  →',
    buildNote: 'None of these fit? Build your own box — choose the cubes, set the count, see the total live.',
  },
  ka: {
    label: 'შეკვეთა',
    head: 'სამი შემოთავაზებული ყუთი — ან ააწყვე შენი.',
    sectionTitle: 'შემოთავაზებული ყუთები.',
    sub: 'სამი ხელწერის ფასი თითო კუბზე ითვლება. მინიმალური შეკვეთა ₾250. კუბებს წინა დღეს ვამზადებთ და თბილისის ფარგლებში გაგრილებულს გიგზავნით.',
    popular: 'ყველაზე ხშირად შეკვეთილი',
    buildCta: 'ააწყვე ყუთი  →',
    buildNote: 'არცერთი ვარიანტი არ გერგება? ააწყვე შენი ყუთი — აირჩიე კუბები, განსაზღვრე რაოდენობა და ჯამი მაშინვე ნახე.',
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
      en: 'An intimate room of ten. Honey-led, balanced by a few cream and kinza cubes.',
      ka: 'ინტიმური საღამო ათი სტუმრისთვის. თაფლის ჭაჭა ლიდერობს, კრემისა და ქინძის რამდენიმე კუბი კი ბალანსს ქმნის.',
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
      ka: 'სუფრა თხუთმეტი სტუმრისთვის. თითოეულ კუბს თანაბარი ადგილი აქვს — ზუსტად ისე, როგორც ჩვენ თვითონ ვაგემოვნებთ.',
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
      ka: 'ქორწილის მასშტაბი. სამსაათიანი მომსახურება; რეკომენდებულია მიმტანი და კერამიკული თეფშები.',
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
    sub: 'მოგვიყევი საღამოს შესახებ. ერთ სამუშაო დღეში გიპასუხებთ — მენიუსა და ფასის პირველ ვერსიას გამოგიგზავნით.',
    fields: {
      name:    { label: 'შენი სახელი',                       ph: 'მარიამ დავითაშვილი' },
      contact: { label: 'ელფოსტა ან ტელეფონი',              ph: 'mariam@stamba.ge' },
      date:    { label: 'როდის არის ღონისძიება?',           ph: '12 · 06 · 2026' },
      venue:   { label: 'სად?',                              ph: 'სტამბა, თბილისი' },
      guests:  { label: 'რამდენი სტუმარი?',                  ph: '24 სტუმარი' },
      note:    { label: 'კიდევ რამე? (არასავალდებულო)',     ph: 'დრო, თემა, ალერგენები, განსაკუთრებული მოთხოვნები…' },
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
    language: 'language',
    addr: ['ZhuZhu Atelier', 'Tbilisi · Georgia'],
    mail:  'hello@zhuzhu.ge',
    brandLine: 'Cocktail desserts, set by hand. Tbilisi.',
    tagline: '“You don’t sip — you bite.”',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/she_zhuzhu_ndi' },
      { label: 'TikTok',    href: 'https://tiktok.com/@she_zhuzhu_ndi' },
      { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61589724820624' },
    ],
    legals: ['Terms', 'Privacy'],
    rights: '© 2026 ZhuZhu. Hand-set in Tbilisi.',
    setIn: 'Site set in Spectral & Manrope & Noto Serif Georgian.',
  },
  ka: {
    contact: 'კონტაქტი',
    follow:  'სოციალური',
    legal:   'სამართლებრივი',
    language: 'ენა',
    addr: ['ჟუჟუ ატელიე', 'თბილისი · საქართველო'],
    mail:  'hello@zhuzhu.ge',
    brandLine: 'კოქტეილ-დესერტები, ხელით აწყობილი. თბილისი.',
    tagline: '„შეჟუჟუნდი — არ სვამ, ლუკმად აგემოვნებ.“',
    socials: [
      { label: 'ინსტაგრამი', href: 'https://instagram.com/she_zhuzhu_ndi' },
      { label: 'ტიკტოკი',    href: 'https://tiktok.com/@she_zhuzhu_ndi' },
      { label: 'ფეისბუქი',    href: 'https://www.facebook.com/profile.php?id=61589724820624' },
    ],
    legals: ['პირობები', 'კონფიდენციალურობა'],
    rights: '© 2026 ჟუჟუ. ხელით აწყობილი თბილისში.',
    setIn: 'საიტი აწყობილია Spectral-ით, Manrope-ით და Noto Serif Georgian-ით.',
  },
};

export const menuPage = {
  en: {
    head: 'Three signatures, and beyond.',
    sub: 'Three Georgian-inspired signatures, hand-set in Tbilisi. Classics beneath them. One cube per bite, eight to a set.',
  },
  ka: {
    head: 'სამი ხელწერა და მეტი.',
    sub: 'სამი ქართული საავტორო გემო, თბილისში ხელით აწყობილი. ქვემოთ — კლასიკა. ერთი ლუკმა, რვა ერთ ნაკრებში.',
  },
};

export const orderPage = {
  en: {
    head: 'Three cubes. Your numbers.',
    sub: 'Per-cube pricing. Minimum order ₾250. Set the day before, delivered chilled within Tbilisi.',
  },
  ka: {
    head: 'სამი კუბი. შენი რაოდენობა.',
    sub: 'ფასი თითო კუბზე ითვლება. მინიმალური შეკვეთა ₾250. კუბებს წინა დღეს ვამზადებთ და თბილისის ფარგლებში გაგრილებულს გიგზავნით.',
  },
};

export const tastedUs = {
  en: {
    eyebrow: 'you tasted us tonight',
    head: 'The list.',
    sub: 'Drop your email — we will send you next month’s flavours, birthday perks, and the first word on the box.',
    emailLabel: 'your email',
    emailPh: 'you@example.com',
    monthLabel: 'birth month (optional)',
    monthHint: 'for the complimentary birthday box',
    monthOptions: ['—', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    submit: 'join the list',
    submitting: 'joining…',
    micro: 'no spam — just the bites that matter. one of us reads every reply.',
    successHead: 'You are on the list.',
    successSub: 'Want to send a friend our way? Anyone with a wedding, birthday or corporate evening coming up — they get ₾50 off, you get a complimentary box on us.',
    shareTitle: 'ZhuZhu — cocktail desserts, Tbilisi',
    shareText: 'I tasted these last night in Tbilisi — book them for your next thing.',
    copyBtn: 'copy link',
    copiedBtn: 'copied ✓',
    shareBtn: 'share',
    perksHead: 'Three things you should know.',
    perks: [
      {
        n: '01',
        title: 'The mystery box.',
        body: '₾80 a month. Eight cubes. New flavours every time. Hand-delivered in Tbilisi the first week of every month.',
        cta: 'subscribe  →',
        href: '/box',
      },
      {
        n: '02',
        title: 'A free box on your birthday.',
        body: 'Order from us once — wedding, dinner, brand evening — and we send you a complimentary box every year on the week of your birthday.',
        microprint: 'you must have ordered from us at least once to qualify.',
        cta: null,
        href: null,
      },
      {
        n: '03',
        title: 'Send a friend.',
        body: 'Know someone with a wedding, a birthday or a corporate evening coming up? Send them your link — when they book with us, you get a complimentary box, they get ₾50 off.',
        microprint: 'your share link appears once you join the list.',
        cta: null,
        href: null,
      },
    ],
    failure: 'Something went wrong. Write to hello@zhuzhu.ge directly.',
  },
  ka: {
    eyebrow: 'ჩვენ დღეს გაგვინსინჯე',
    head: 'სია.',
    sub: 'დაგვიტოვე ელფოსტა — გაცნობებთ მომდევნო თვის გემოებზე, დაბადების დღის სიურპრიზებზე და ნაკრების პირველი ცნობებზე.',
    emailLabel: 'ელფოსტა',
    emailPh: 'you@example.com',
    monthLabel: 'დაბადების თვე (არასავალდებულო)',
    monthHint: 'უფასო დაბადების დღის ნაკრებისთვის',
    monthOptions: ['—', 'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
    submit: 'შემოვუერთდე',
    submitting: 'იგზავნება…',
    micro: 'სპამი არ იქნება — მხოლოდ ის ლუკმები, რომელიც ღირს. ყველა პასუხს ერთ-ერთი ჩვენგანი კითხულობს.',
    successHead: 'სიაში ხარ.',
    successSub: 'გინდა მეგობარი მოგვწერო? ვისაც წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო ელის — მათ ₾50 ფასდაკლება, შენ — უფასო ნაკრები ჩვენგან.',
    shareTitle: 'ჟუჟუ — კოქტეილ-დესერტები, თბილისი',
    shareText: 'ეს გუშინ თბილისში გავსინჯე — შენი მომდევნო ღონისძიებისთვის ღირს.',
    copyBtn: 'ბმულის კოპირება',
    copiedBtn: 'დაკოპირდა ✓',
    shareBtn: 'გაგზავნა',
    perksHead: 'სამი რამე, რაც უნდა იცოდე.',
    perks: [
      {
        n: '01',
        title: 'საიდუმლო ნაკრები.',
        body: '₾80 თვეში. რვა კუბი. ახალი გემოები ყოველთვე. თვის პირველ კვირას ხელით ვაწვდით თბილისში.',
        cta: 'გამოიწერე  →',
        href: '/box',
      },
      {
        n: '02',
        title: 'უფასო ნაკრები დაბადების დღეზე.',
        body: 'ერთხელ შემოგვიკვეთე — ქორწილისთვის, სადილისთვის, ბრენდის საღამოსთვის — და ყოველ წელს დაბადების დღის კვირას უფასო ნაკრებს გამოგიგზავნით.',
        microprint: 'მინიმუმ ერთხელ მაინც უნდა შემოგვიკვეთო.',
        cta: null,
        href: null,
      },
      {
        n: '03',
        title: 'მოგვწერე მეგობარი.',
        body: 'იცი ვინმე, ვისაც წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო ელის? გადაუგზავნე შენი ბმული — როცა ისინი შემოგვიკვეთენ, შენ უფასო ნაკრებს მიიღებ, ისინი — ₾50 ფასდაკლებას.',
        microprint: 'შენი ბმული გამოჩნდება სიაში შემოსვლის შემდეგ.',
        cta: null,
        href: null,
      },
    ],
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ პირდაპირ hello@zhuzhu.ge.',
  },
};

export const boxPage = {
  en: {
    eyebrow: 'a monthly cube',
    head: 'The mystery box.',
    sub: 'A new set of flavours at your door, every month. We tell you when it ships — we never tell you what is in it.',
    price: '₾80',
    cadence: '/ month',
    priceNote: '8 cubes · Tbilisi delivery · cancel anytime',
    cta: 'subscribe',
    stepsHead: 'How it works.',
    steps: [
      { n: '01', name: 'Subscribe', d: '₾80 a month, billed by Paddle. Card or Apple Pay. Cancel anytime in one click.' },
      { n: '02', name: 'We curate',  d: 'Every month, we set a new line. Kinza today, sour cherry tomorrow, walnut churchkhela next month — we follow the season and the kitchen.' },
      { n: '03', name: 'You bite',   d: 'We hand-deliver within Tbilisi during the first week of every month. Allergens are listed on the box; flavours stay a secret until you open it.' },
    ],
    finalHead: 'Eight new bites, every month.',
    finalCta: 'start the subscription',
  },
  ka: {
    eyebrow: 'ყოველთვიური ნაკრები',
    head: 'საიდუმლო ნაკრები.',
    sub: 'ახალი გემოები შენს კართან, ყოველ თვე. გეტყვით, როდის გამოვაგზავნით — არასოდეს ვამბობთ, რა იქნება შიგნით.',
    price: '₾80',
    cadence: '/ თვე',
    priceNote: '8 კუბი · თბილისში მიწოდება · ნებისმიერ დროს გაუქმდება',
    cta: 'გამოიწერე',
    stepsHead: 'როგორ მუშაობს.',
    steps: [
      { n: '01', name: 'გამოწერა',  d: '₾80 თვეში, Paddle-ით. ბარათით ან Apple Pay-ით. ერთი დაჭერით გაუქმდება.' },
      { n: '02', name: 'ჩვენ ვადგენთ', d: 'ყოველ თვე ვაყენებთ ახალ ხაზს. დღეს ქინძი, ხვალ ალუბალი, შემდეგ თვე — ნიგვზის ჩურჩხელა. სეზონს და სამზარეულოს მივყვებით.' },
      { n: '03', name: 'შენ აგემოვნებ', d: 'თვის პირველ კვირას ხელით ვაწვდით თბილისში. ალერგენები ყუთზე უწერია; გემოები საიდუმლოდ რჩება, სანამ არ გახსნი.' },
    ],
    finalHead: 'რვა ახალი ლუკმა, ყოველ თვე.',
    finalCta: 'დაიწყე გამოწერა',
  },
};

export const aboutPage = {
  en: {
    head: 'Three founders.<br>One kitchen.',
    origin: [
      'ZhuZhu began on a winter night, when three friends, a chef, a food chemist and a developer, sat too long over a bottle of Saperavi, arguing about what a cocktail could be if it were not a drink.',
      'Lado worked on the taste, Anna on the chemistry, Keti on the brand. Three weeks later we had the first cube: a Saperavi set firm, a single sour cherry on top.',
      'We have been setting them by hand ever since. Weddings, brand evenings, hotel menus, the occasional private dinner that asks us not to mention we came.',
    ],
  },
  ka: {
    head: 'სამი დამფუძნებელი.<br>ერთი სამზარეულო.',
    origin: [
      'ჟუჟუ ერთ ზამთრის საღამოს დაიწყო, როცა სამმა მეგობარმა — შეფმა, საკვების ქიმიკოსმა და დეველოპერმა — საფერავის ბოთლთან დიდხანს იკამათეს, რა შეიძლება იყოს კოქტეილი, თუ ის სასმელი არ არის.',
      'ლადო გემოზე მუშაობდა, ანა — ქიმიაზე, ქეთი — ბრენდზე. სამი კვირის შემდეგ პირველი კუბი მზად იყო: მყარად დაყენებული საფერავი და ზემოდან ერთი ალუბალი.',
      'მას შემდეგ კუბებს ხელით ვამზადებთ — ქორწილებისთვის, ბრენდის საღამოებისთვის, სასტუმროების მენიუებისთვის და ხანდახან ისეთი კერძო ვახშმისთვისაც, რომელიც გვთხოვს, არ ვთქვათ, რომ იქ ვიყავით.',
    ],
  },
};

export const founders = [
  {
    name: { en: 'Keti', ka: 'ქეთი' },
    role: { en: 'Site, business, photography', ka: 'საიტი, ბიზნესი, ფოტოგრაფია' },
    bio: {
      en: 'The site, the pricing, the lens. Keti runs the brand surface. What the world sees and what it clicks.',
      ka: 'საიტი, ფასები, ობიექტივი. ქეთი მართავს ბრენდის ხილულ მხარეს — იმას, რასაც სამყარო ხედავს და რაზეც აჭერს.',
    },
    accent: 'rgba(196, 140, 70, 0.30)',
  },
  {
    name: { en: 'Anna', ka: 'ანა' },
    role: { en: 'Food chemistry, compliance, kitchen', ka: 'საკვების ქიმია, სტანდარტები, სამზარეულო' },
    bio: {
      en: 'The gelatine, the acid, the law. Anna keeps the cube together and the kitchen on the right side of HACCP.',
      ka: 'ჟელატინი, მჟავიანობა, წესები. ანა კუბს ფორმას უნარჩუნებს და სამზარეულოს HACCP-ის სტანდარტებთან აწყობს.',
    },
    accent: 'rgba(220, 170, 70, 0.32)',
  },
  {
    name: { en: 'Lado', ka: 'ლადო' },
    role: { en: 'Chef, recipes, production', ka: 'შეფი, რეცეპტები, წარმოება' },
    bio: {
      en: 'The recipes, the heat, the taste. Lado owns the food itself: every cube on every tray.',
      ka: 'რეცეპტები, ტემპერატურა, გემო. ლადო საკვებს მართავს — ყოველი კუბი, ყოველ თეფშზე.',
    },
    accent: 'rgba(180, 50, 80, 0.30)',
  },
];

export const pageMeta = {
  home: {
    en: { title: 'ZhuZhu — Cocktail desserts · Tbilisi atelier',
          desc: 'Cocktail desserts hand-set in Tbilisi. Walnut churchkhela, honey chacha, kinza gin. For weddings, brand activations and after-hours events.' },
    ka: { title: 'ჟუჟუ — კოქტეილ-დესერტები · თბილისის ატელიე',
          desc: 'კოქტეილ-დესერტები ხელით აწყობილი თბილისში. ნიგვზის ჩურჩხელა, თაფლის ჭაჭა, ქინძა-ჯინი. ქორწილებისთვის, ღონისძიებებისთვის.' },
  },
  menu: {
    en: { title: 'Menu. ZhuZhu, cocktail desserts.',
          desc: 'Three signature cocktail desserts hand-set in Tbilisi. Cream Kiss, Honey Chacha, Kinza Garden.' },
    ka: { title: 'მენიუ. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'სამი საფირმო კოქტეილ-დესერტი, ხელით აწყობილი თბილისში: კრემ-კოცნა, თაფლის ჭაჭა, ქინძის ბაღი.' },
  },
  order: {
    en: { title: 'Order. ZhuZhu, cocktail desserts.',
          desc: 'Order ZhuZhu cocktail desserts for your event. Per-cube pricing, minimum ₾250. Tbilisi delivery.' },
    ka: { title: 'შეკვეთა. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'შეუკვეთე ჟუჟუს კოქტეილ-დესერტები შენი ღონისძიებისთვის. ფასი თითო კუბზე, მინიმალური შეკვეთა ₾250, მიწოდება თბილისში.' },
  },
  about: {
    en: { title: 'About. ZhuZhu, cocktail desserts.',
          desc: 'Three founders, one kitchen, two nights a week. The ZhuZhu origin.' },
    ka: { title: 'ჩვენ შესახებ. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'სამი დამფუძნებელი, ერთი სამზარეულო და ჟუჟუს ისტორია.' },
  },
  box: {
    en: { title: 'The mystery box. ZhuZhu, cocktail desserts.',
          desc: 'A monthly subscription of hand-set cocktail desserts. Eight new flavours, delivered in Tbilisi the first week of every month.' },
    ka: { title: 'საიდუმლო ნაკრები. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'ყოველთვიური გამოწერა ხელით აწყობილი კოქტეილ-დესერტებისთვის. რვა ახალი გემო თბილისში, თვის პირველ კვირას.' },
  },
  tastedUs: {
    en: { title: 'The list. ZhuZhu, cocktail desserts.',
          desc: 'You tasted us tonight. Stay close — monthly flavours, birthday perks, and the first word on the box.' },
    ka: { title: 'სია. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'ჩვენ დღეს გაგვინსინჯე. დაუკავშირდი ჩვენს სიას — ყოველთვიური გემოები, დაბადების დღის სიურპრიზები და ნაკრების პირველი ცნობები.' },
  },
};
