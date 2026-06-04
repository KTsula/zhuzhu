export type Lang = 'en' | 'ka';

export const nav = {
  en: { menu: 'menu', order: 'order', box: 'box', about: 'about', reserve: 'reserve', reserveTasting: 'reserve a tasting' },
  ka: { menu: 'მენიუ', order: 'შეკვეთა', box: 'ნაკრები', about: 'ჩვენ', reserve: 'დაჯავშნა', reserveTasting: 'დეგუსტაციის დაჯავშნა' },
};

export const hero = {
  en: {
    slogan: 'Cocktail desserts. Set by hand, in Tbilisi.',
    cta: 'book your event',
  },
  ka: {
    slogan: 'კოქტეილ-დესერტები. ხელით აწყობილი თბილისში.',
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
    setIs: 'A set is 8 cubes.',
    language: 'language',
  },
  ka: {
    line: 'სერია',
    price: 'ფასი',
    perSet: '/ ნაკრები',
    setIs: 'ერთი ნაკრები — 8 კუბი.',
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
  price: number; // per-cube base; serving = price × 8
};

export const classics: ClassicSet[] = [
  {
    id: 'c01',
    name: { en: 'Vodka & Orange', ka: 'ვოდკა-ფორთოხალი' },
    blurb: {
      en: 'Clean vodka and fresh-pressed orange, set bright and easy. The crowd-pleaser.',
      ka: 'სუფთა ვოდკა და ახლად დაწურული ფორთოხალი — ნათლად და მსუბუქად აწყობილი. საყვარელი ყველასთვის.',
    },
    accent: 'rgba(240, 150, 60, 0.45)',
    price: 5,
  },
  {
    id: 'c02',
    name: { en: 'Vodka & Cherry', ka: 'ვოდკა-ალუბალი' },
    blurb: {
      en: 'Vodka over deep sour-cherry, set firm. Tart, ruby, a single cherry on top.',
      ka: 'ვოდკა მუქ ალუბალზე, მყარად დაყენებული. მჟავე, ლალისფერი, ერთი ალუბალი ზემოდან.',
    },
    accent: 'rgba(180, 40, 70, 0.45)',
    price: 5,
  },
  {
    id: 'c03',
    name: { en: 'Aperol Spritz', ka: 'აპეროლ შპრიცი' },
    blurb: {
      en: 'Aperol, prosecco, orange — a summer cube with a bitter edge.',
      ka: 'აპეროლი, პროსეკო, ფორთოხალი — საზაფხულო კუბი მცირე სიმწარით.',
    },
    accent: 'rgba(240, 110, 40, 0.45)',
    price: 7,
  },
  {
    id: 'c04',
    name: { en: 'Tequila Sunrise', ka: 'ტეკილა სანრაიზი' },
    blurb: {
      en: 'Tequila, orange and a grenadine sunrise — layered gold into red.',
      ka: 'ტეკილა, ფორთოხალი და გრენადინის ამოსვლა — ოქროსფერიდან წითელში გადასული ფენები.',
    },
    accent: 'rgba(245, 150, 50, 0.45)',
    price: 7,
  },
  {
    id: 'c05',
    name: { en: 'Mojito', ka: 'მოხიტო' },
    blurb: {
      en: 'White rum, lime, fresh mint — set crisp and bright.',
      ka: 'თეთრი რომი, ლაიმი, ახალი პიტნა — მკვეთრად და ცოცხლად აწყობილი.',
    },
    accent: 'rgba(120, 180, 130, 0.45)',
    price: 7,
  },
];

export const menuClassics = {
  en: {
    eyebrow: 'Classics',
    head: 'Beyond the signatures.',
    sub: 'Familiar cocktails, set the same way. Priced per set — every set is 8 cubes. Minimum order ₾250, Tbilisi delivery.',
  },
  ka: {
    eyebrow: 'კლასიკა',
    head: 'სიგნატურის მიღმა.',
    sub: 'ნაცნობი კოქტეილები, იმავე ფორმით. ფასი თითო ნაკრებზე — ერთი ნაკრები 8 კუბია. მინიმალური შეკვეთა ₾250, მიწოდება თბილისში.',
  },
};

export const moreFlavours = {
  en: {
    eyebrow: 'and beyond the signatures',
    cta: 'See the full menu  →',
  },
  ka: {
    eyebrow: 'ხელწერების მიღმა',
    cta: 'სრული მენიუ  →',
  },
};

// WhatsApp contact — same number both languages. `href` uses the wa.me format
// (digits only, no plus or spaces). `display` is the human-readable number.
export const whatsapp = {
  number: '+995 598 12 88 41',
  href: 'https://wa.me/995598128841',
};

export const booking = {
  en: {
    head: 'book your event',
    sub: 'Tell us about the night. We answer within a working day, with a draft menu and a quote.',
    minOrder: 'Minimum order ₾250. A set is 8 cubes.',
    whatsappLead: 'Prefer to message?',
    whatsappCta: 'Contact us on WhatsApp',
    fields: {
      name:   { label: 'Your name' },
      phone:  { label: 'Phone' },
      email:  { label: 'Email (optional)' },
      date:   { label: 'When is the event?' },
      venue:  { label: 'Where?' },
      guests: { label: 'How many people?' },
      note:   { label: 'Anything else? (optional)' },
    },
    submit: 'send',
    sending: 'sending…',
    success: 'thank you. we have your brief and will answer within a working day.',
    failure: 'something went wrong. write to hello@zhuzhu.ge or message us on WhatsApp.',
    foot: 'No automation. A real person reads this.',
    tasting: 'Planning a large event? We can set up a private tasting first — just mention it in your message.',
  },
  ka: {
    head: 'დაჯავშნე ღონისძიება',
    sub: 'მოგვიყევი საღამოს შესახებ. ერთ სამუშაო დღეში გიპასუხებთ — მენიუსა და ფასის პირველ ვერსიას გამოგიგზავნით.',
    minOrder: 'მინიმალური შეკვეთა ₾250. ერთი ნაკრები — 8 კუბი.',
    whatsappLead: 'გირჩევნია მოგვწერო?',
    whatsappCta: 'მოგვწერე WhatsApp-ზე',
    fields: {
      name:   { label: 'შენი სახელი' },
      phone:  { label: 'ტელეფონი' },
      email:  { label: 'ელფოსტა (არასავალდებულო)' },
      date:   { label: 'როდის არის ღონისძიება?' },
      venue:  { label: 'სად?' },
      guests: { label: 'რამდენი სტუმარი?' },
      note:   { label: 'კიდევ რამე? (არასავალდებულო)' },
    },
    submit: 'გაგზავნა',
    sending: 'იგზავნება…',
    success: 'მადლობა. ბრიფი მივიღეთ და ერთ სამუშაო დღეში გიპასუხებთ.',
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ პირდაპირ hello@zhuzhu.ge ან WhatsApp-ზე.',
    foot: 'ცოცხალი ადამიანი წაიკითხავს.',
    tasting: 'გეგმავთ დიდ ღონისძიებას? შეგვიძლია წინასწარ კერძო დეგუსტაცია მოვაწყოთ — უბრალოდ მიუთითეთ შეტყობინებაში.',
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
    head: 'Our signatures, and beyond.',
    sub: 'Georgian-inspired signatures, hand-set in Tbilisi, with classics beneath them. Every set is eight cubes.',
  },
  ka: {
    head: 'ჩვენი ხელწერები და მეტი.',
    sub: 'ქართული საავტორო გემოები, თბილისში ხელით აწყობილი. ქვემოთ — კლასიკა. ყოველი ნაკრები — რვა კუბი.',
  },
};

export const orderPage = {
  en: {
    head: 'Your plates. Your numbers.',
    sub: 'Priced per set — a set is always 8 cubes. Minimum order ₾250. Set the day before, delivered chilled within Tbilisi.',
  },
  ka: {
    head: 'შენი ნაკრებები. შენი რაოდენობა.',
    sub: 'ფასი თითო ნაკრებზე ითვლება — ერთი ნაკრები ყოველთვის 8 კუბია. მინიმალური შეკვეთა ₾250. წინა დღეს ვამზადებთ და თბილისის ფარგლებში გაგრილებულს გიგზავნით.',
  },
};

export const tastedUs = {
  en: {
    eyebrow: 'you tasted us tonight',
    head: 'Stay close.',
    sub: 'Drop your email and you hear it here first — next month’s flavours, the box when it opens, the odd birthday surprise.',
    emailLabel: 'your email',
    emailPh: 'you@example.com',
    monthLabel: 'birth month (optional)',
    monthHint: 'so we can spoil you when birthday perks go live',
    monthOptions: ['—', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    submit: 'keep me close',
    submitting: 'joining…',
    micro: 'no spam — just the bites that matter. one of us reads every reply.',
    successHead: 'You are on the list.',
    successSub: 'Want to send a friend our way? Anyone with a wedding, birthday or corporate evening coming up — share your link below.',
    // Follow + what-we-do + links (shown under the form)
    followLabel: 'follow the kitchen',
    followSub: 'New cubes land here first.',
    aboutHead: 'What we actually do.',
    aboutBody: 'We set cocktail-dessert tables for events — weddings, brand nights, private dinners — across Tbilisi. And we travel: honestly, who wouldn’t fly somewhere to set jello?',
    menuCta: 'see the full menu  →',
    homeCta: 'visit the main site  →',
    shareTitle: 'ZhuZhu — cocktail desserts, Tbilisi',
    shareText: 'I tasted these last night in Tbilisi — book them for your next thing.',
    copyBtn: 'copy link',
    copiedBtn: 'copied ✓',
    shareBtn: 'share',
    perksHead: 'Three things worth knowing.',
    perks: [
      {
        n: '01',
        title: 'The mystery box — coming soon.',
        body: 'Eight new cubes at your door every month. We’re setting up subscriptions now — join the waitlist for first access and a founding-member price.',
        cta: 'join the waitlist  →',
        href: '/box',
      },
      {
        n: '02',
        title: 'Birthday perks — in the works.',
        body: 'We’re building something for our regulars: a little treat on your birthday once you’ve ordered from us. Leave your birth month and you’ll be first to know when it’s live.',
        microprint: 'still cooking — no promises on dates yet.',
        cta: null,
        href: null,
      },
      {
        n: '03',
        title: 'Send a friend.',
        body: 'Know someone with a wedding, a birthday or a corporate evening coming up? Send them your link — it helps us grow, and we look after people who send people.',
        microprint: 'your share link appears once you join the list.',
        cta: null,
        href: null,
      },
    ],
    failure: 'Something went wrong. Write to hello@zhuzhu.ge directly.',
  },
  ka: {
    eyebrow: 'ჩვენ დღეს გაგვინსინჯე',
    head: 'დარჩი ახლოს.',
    sub: 'დაგვიტოვე ელფოსტა და პირველი აქ გაიგებ — მომავალი თვის გემოებს, ნაკრების გახსნას და დაბადების დღის სიურპრიზებს.',
    emailLabel: 'ელფოსტა',
    emailPh: 'you@example.com',
    monthLabel: 'დაბადების თვე (არასავალდებულო)',
    monthHint: 'რომ დაბადების დღის სიურპრიზების ამოქმედებისას გაგახაროთ',
    monthOptions: ['—', 'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
    submit: 'შემინახე ახლოს',
    submitting: 'იგზავნება…',
    micro: 'სპამი არ იქნება — მხოლოდ ის ლუკმები, რომელიც ღირს. ყველა პასუხს ერთ-ერთი ჩვენგანი კითხულობს.',
    successHead: 'სიაში ხარ.',
    successSub: 'გინდა მეგობარი მოგვწერო? ვისაც წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო ელის — გაუზიარე ქვემოთ მოცემული ბმული.',
    followLabel: 'გაგვყევი',
    followSub: 'ახალი კუბები ჯერ აქ ჩნდება.',
    aboutHead: 'რას ვაკეთებთ სინამდვილეში.',
    aboutBody: 'ვაწყობთ კოქტეილ-დესერტების მაგიდებს ღონისძიებებზე — ქორწილებზე, ბრენდის საღამოებზე, კერძო ვახშმებზე — მთელ თბილისში. და ვმოგზაურობთ: მართლა, ვინ არ გაფრინდებოდა სადმე ჟელეს დასაყენებლად?',
    menuCta: 'სრული მენიუ  →',
    homeCta: 'მთავარ საიტზე  →',
    shareTitle: 'ჟუჟუ — კოქტეილ-დესერტები, თბილისი',
    shareText: 'ეს გუშინ თბილისში გავსინჯე — შენი მომდევნო ღონისძიებისთვის ღირს.',
    copyBtn: 'ბმულის კოპირება',
    copiedBtn: 'დაკოპირდა ✓',
    shareBtn: 'გაგზავნა',
    perksHead: 'სამი რამ, რაც ღირს იცოდე.',
    perks: [
      {
        n: '01',
        title: 'საიდუმლო ნაკრები — მალე.',
        body: 'რვა ახალი კუბი შენს კართან ყოველ თვე. გამოწერას ახლა ვამზადებთ — ჩაეწერე სიაში პირველი წვდომისა და დამფუძნებლის ფასისთვის.',
        cta: 'ჩაეწერე სიაში  →',
        href: '/box',
      },
      {
        n: '02',
        title: 'დაბადების დღის სიურპრიზები — მზადდება.',
        body: 'მუდმივი მომხმარებლებისთვის რაღაცას ვამზადებთ: პატარა საჩუქარს დაბადების დღეზე, როცა ერთხელ მაინც შემოგვიკვეთავ. დატოვე დაბადების თვე და პირველი გაიგებ ამოქმედებას.',
        microprint: 'ჯერ მზადდება — თარიღებზე ჯერ არ გპირდებით.',
        cta: null,
        href: null,
      },
      {
        n: '03',
        title: 'მოგვწერე მეგობარი.',
        body: 'იცი ვინმე, ვისაც წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო ელის? გადაუგზავნე შენი ბმული — ეს გვეხმარება ზრდაში და ვუფრთხილდებით მათ, ვინც გვაკავშირებს ხალხს.',
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
    eyebrow: 'coming soon',
    head: 'The mystery box.',
    sub: 'A new set of cubes at your door, every month — eight bites, new flavours, never the same twice. We are setting up monthly subscriptions now. Join the waitlist and you will be the first in when it opens.',
    price: '₾80',
    cadence: '/ month',
    priceNote: '8 cubes · Tbilisi delivery · planned pricing',
    // Waitlist (subscriptions not live yet)
    emailLabel: 'your email',
    emailPh: 'you@example.com',
    cta: 'join the waitlist',
    submitting: 'joining…',
    success: 'You are on the list. We will write the moment the box opens.',
    failure: 'Something went wrong. Write to hello@zhuzhu.ge and we will add you.',
    waitlistNote: 'No charge now — this just reserves your spot. We will email you before billing ever starts.',
    stepsHead: 'How it will work.',
    steps: [
      { n: '01', name: 'Join the waitlist', d: 'Leave your email. When subscriptions open you get first access and a founding-member price.' },
      { n: '02', name: 'We curate',  d: 'Every month, we set a new line. Kinza today, sour cherry tomorrow, walnut churchkhela next month — we follow the season and the kitchen.' },
      { n: '03', name: 'You bite',   d: 'We hand-deliver within Tbilisi during the first week of every month. Allergens are listed on the box; flavours stay a secret until you open it.' },
    ],
    finalHead: 'Eight new bites, every month — soon.',
    finalCta: 'join the waitlist',
  },
  ka: {
    eyebrow: 'მალე',
    head: 'საიდუმლო ნაკრები.',
    sub: 'ახალი ნაკრები შენს კართან, ყოველ თვე — რვა ლუკმა, ახალი გემოები, არასოდეს ერთი და იგივე. ყოველთვიურ გამოწერას ახლა ვამზადებთ. ჩაეწერე სიაში და გახსნისთანავე პირველი იქნები.',
    price: '₾80',
    cadence: '/ თვე',
    priceNote: '8 კუბი · თბილისში მიწოდება · დაგეგმილი ფასი',
    emailLabel: 'შენი ელფოსტა',
    emailPh: 'you@example.com',
    cta: 'ჩაეწერე სიაში',
    submitting: 'იგზავნება…',
    success: 'სიაში ხარ. გამოწერის გახსნისთანავე მოგწერთ.',
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ hello@zhuzhu.ge და დაგამატებთ.',
    waitlistNote: 'ახლა გადახდა არ ხდება — ეს მხოლოდ ადგილს გიმაგრებს. გადახდის დაწყებამდე აუცილებლად მოგწერთ.',
    stepsHead: 'როგორ იმუშავებს.',
    steps: [
      { n: '01', name: 'ჩაეწერე სიაში', d: 'დატოვე ელფოსტა. გამოწერის გახსნისას პირველი წვდომა და დამფუძნებლის ფასი გექნება.' },
      { n: '02', name: 'ჩვენ ვადგენთ', d: 'ყოველ თვე ვაყენებთ ახალ ხაზს. დღეს ქინძი, ხვალ ალუბალი, შემდეგ თვე — ნიგვზის ჩურჩხელა. სეზონს და სამზარეულოს მივყვებით.' },
      { n: '03', name: 'შენ აგემოვნებ', d: 'თვის პირველ კვირას ხელით ვაწვდით თბილისში. ალერგენები ყუთზე უწერია; გემოები საიდუმლოდ რჩება, სანამ არ გახსნი.' },
    ],
    finalHead: 'რვა ახალი ლუკმა, ყოველ თვე — მალე.',
    finalCta: 'ჩაეწერე სიაში',
  },
};

export const aboutPage = {
  en: {
    head: 'Three founders.<br>One kitchen.',
    origin: [
      'ZhuZhu started with a craving. Keti, studying in the United States — a stretch at Cornell — first met the jello shot at a party there and couldn’t stop thinking about it: a whole cocktail, reduced to a single bite.',
      'Back home she called two friends. Anuki — a chemist and quality-control specialist who knows exactly why a cube holds or weeps. Lado — a chef working the line in a Tbilisi hotel kitchen. Their strengths fit together a little too well.',
      'Georgia made sense for it: an alcohol-loving country, a young and international crowd, and a generation ready for the idea. So we started experimenting — this time with Georgian flavours — and quietly surprised ourselves with how good it got.',
      'We’ve been perfecting the recipes ever since, chasing inspiration wherever we find it (which is mostly code for tasting a great many cocktails lately). Every cube is still set by hand.',
    ],
  },
  ka: {
    head: 'სამი დამფუძნებელი.<br>ერთი სამზარეულო.',
    origin: [
      'ჟუჟუ სურვილით დაიწყო. ქეთიმ, რომელიც ამერიკაში სწავლობდა — ცოტა ხანს კორნელშიც — პირველად იქ, წვეულებაზე გასინჯა ჯელო-შოტი და თავიდან ვერ ამოიგდო: მთელი კოქტეილი, ერთ ლუკმად ქცეული.',
      'სამშობლოში დაბრუნებულმა ორ მეგობარს დაურეკა. ანუკი — ქიმიკოსი და ხარისხის კონტროლის სპეციალისტი, რომელმაც ზუსტად იცის, რატომ ჩერდება ან „ტირის“ კუბი. ლადო — შეფი, რომელიც თბილისის სასტუმროს სამზარეულოში მუშაობს. მათი ძლიერი მხარეები ცოტა მეტისმეტადაც კარგად ერგებოდა ერთმანეთს.',
      'საქართველო იდეალური ადგილი იყო ამისთვის: ალკოჰოლის მოყვარული ქვეყანა, ახალგაზრდა და საერთაშორისო საზოგადოება და თაობა, რომელიც მზად იყო ამ იდეისთვის. ასე დავიწყეთ ექსპერიმენტები — ამჯერად ქართული გემოებით — და თავადაც გაგვიკვირდა, რამდენად კარგი გამოვიდა.',
      'მას შემდეგ რეცეპტებს ვხვეწავთ და შთაგონებას ვეძებთ ყველგან (რაც ძირითადად ნიშნავს, რომ ბოლო დროს უამრავი საინტერესო კოქტეილი გავსინჯეთ). ყოველი კუბი დღემდე ხელით იწყობა.',
    ],
  },
};

export const founders = [
  {
    name: { en: 'Keti', ka: 'ქეთი' },
    role: { en: 'Brand, business, photography', ka: 'ბრენდი, ბიზნესი, ფოტოგრაფია' },
    bio: {
      en: 'IE Business School; interned at Google; now building products at Bending Spoons in Milan. Keti runs the brand surface — the site, the pricing, the lens — and what the world sees and clicks.',
      ka: 'IE Business School; სტაჟირება Google-ში; ახლა პროდუქტებზე მუშაობს Bending Spoons-ში, მილანში. ქეთი მართავს ბრენდის ხილულ მხარეს — საიტს, ფასებს, ობიექტივს — იმას, რასაც სამყარო ხედავს და რაზეც აჭერს.',
    },
    accent: 'rgba(196, 140, 70, 0.30)',
  },
  {
    name: { en: 'Anuki', ka: 'ანუკი' },
    role: { en: 'Food chemistry & quality control', ka: 'საკვების ქიმია და ხარისხის კონტროლი' },
    bio: {
      en: 'A chemist and quality-control specialist. Anuki keeps the cube together — the gelatine, the acid, the standards — and the kitchen on the right side of HACCP.',
      ka: 'ქიმიკოსი და ხარისხის კონტროლის სპეციალისტი. ანუკი კუბს ფორმას უნარჩუნებს — ჟელატინი, მჟავიანობა, სტანდარტები — და სამზარეულოს HACCP-ის წესებთან აწყობს.',
    },
    accent: 'rgba(220, 170, 70, 0.32)',
  },
  {
    name: { en: 'Lado', ka: 'ლადო' },
    role: { en: 'Chef, recipes, production', ka: 'შეფი, რეცეპტები, წარმოება' },
    bio: {
      en: 'A chef in the kitchen at Radisson, Tbilisi. Lado owns the food itself — the recipes, the heat, the taste, every cube on every tray.',
      ka: 'შეფი თბილისის Radisson-ის სამზარეულოში. ლადო თავად საკვებს მართავს — რეცეპტები, ტემპერატურა, გემო, ყოველი კუბი ყოველ თეფშზე.',
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

export const serve = {
  en: {
    eyebrow: 'how we serve',
    head: 'Two ways to have us.',
    modes: [
      { n: '01', title: 'Chilled delivery', body: 'We set the cubes the day before and deliver them chilled within Tbilisi — boxed, labelled with allergens, ready to plate. You arrange them; we keep it simple.' },
      { n: '02', title: 'Full-event service', body: 'For weddings, brand evenings and larger events, our team comes to you. We bring the cubes, present and serve them, and stay through the night so every guest is looked after.' },
    ],
    note: 'Not sure which fits? Tell us about your event in the form below — we will recommend the right one.',
  },
  ka: {
    eyebrow: 'როგორ ვმსახურობთ',
    head: 'ორი გზა, რომ ჩვენთან იყოთ.',
    modes: [
      { n: '01', title: 'გაგრილებული მიწოდება', body: 'კუბებს წინა დღეს ვამზადებთ და თბილისის ფარგლებში გაგრილებულს გიგზავნით — ყუთით, ალერგენების მითითებით და მზად დასაწყობად. დანარჩენს თქვენ აწყობთ; ჩვენ მარტივად ვტოვებთ.' },
      { n: '02', title: 'სრული მომსახურება ღონისძიებაზე', body: 'ქორწილებზე, ბრენდის საღამოებსა და დიდ ღონისძიებებზე ჩვენი გუნდი თქვენთან მოდის. მოგვაქვს კუბები, ვაწყობთ და ვმასპინძლობთ, საღამოს ბოლომდე ვრჩებით, რომ ყველა სტუმარი მოვლილი იყოს.' },
    ],
    note: 'არ ხართ დარწმუნებული, რომელი გერგებათ? მოგვიყევით თქვენი ღონისძიების შესახებ ქვემოთ — შემოგთავაზებთ სწორ ვარიანტს.',
  },
};
