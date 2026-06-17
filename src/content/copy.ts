export type Lang = 'en' | 'ka';

export const nav = {
  en: { menu: 'menu', order: 'order', box: 'box', about: 'about', contact: 'contact', reserve: 'reserve', reserveTasting: 'reserve a tasting' },
  ka: { menu: 'მენიუ', order: 'შეკვეთა', box: 'ნაკრები', about: 'ჩვენ შესახებ', contact: 'დაგვეკონტაქტეთ', reserve: 'დაჯავშნა', reserveTasting: 'დეგუსტაციის დაჯავშნა' },
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
      'კოქტეილ-დესერტი შოტი არ არის. ეს ლუკმად ქცეული კოქტეილია — ის ჭაჭა, რომელსაც ხანგრძლივი ვახშმის შემდეგ ნელა მოსვამდი, ახლა ერთ პატარა, საკვებ მომენტად იქცა.',
      'სამი დამფუძნებელი. ერთი სამზარეულო. თითოეული კუბი ხელითაა აწყობილი.',
    ],
  },
};

export const sharedLabels = {
  en: {
    line: 'line',
    setIs: 'A set is 8 cubes.',
    language: 'language',
  },
  ka: {
    line: 'სერია',
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
};

export const signatures: SignatureItem[] = [
  {
    id: '01',
    line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    name: { en: 'Cream Kiss', ka: 'კრემ-კოცნა' },
    blurb: {
      en: 'A walnut churchkhela, caramelised the day before and broken by hand, folded into Tbilisi double-cream and dark muscovado. The walnut sits on top while the cube is still warm — it keeps the crunch all the way through the bite.',
      ka: 'წინა დღეს კარამელიზებულ ნიგვზის ჩურჩხელას ხელით ვტეხთ და თბილისურ ნაღებსა და მუქ მუსკოვადოს ვურევთ. ნიგოზს კუბს ზემოდან მაშინ ვადებთ, როცა ჯერ კიდევ თბილია — ამიტომ თითოეულ ლუკმას ბოლომდე მიჰყვება ხრაშუნი.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    },
    img: '/cubes/cream-kiss.png',
    accent: 'rgba(196, 140, 70, 0.30)',
  },
  {
    id: '02',
    line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    name: { en: 'Honey Chacha', ka: 'თაფლის ჭაჭა' },
    blurb: {
      en: 'Chestnut honey, chacha and fresh lemon zest, set into a bright summer cube. It is a little firmer, made to pause for a second on the tongue, with a wedge of lime laid on top after it cools.',
      ka: 'წაბლის თაფლი, ჭაჭა და ახალი ლიმონის ცედრა — ნათელ, საზაფხულო კუბად ქცეული. ოდნავ უფრო მყარია, რომ ენაზე წამით გაჩერდეს; გაცივების შემდეგ ზემოდან ლაიმის ნაჭერს ვადებთ.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    },
    img: '/cubes/honey-chacha.png',
    accent: 'rgba(220, 170, 70, 0.32)',
  },
  {
    id: '03',
    line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    name: { en: 'Kinza Garden', ka: 'ქინძის ბაღი' },
    blurb: {
      en: 'Fresh cilantro, gin, limoncello and pressed lemon, set into a clear herbal cube. Green on the tongue, citrus on the finish, with just enough bite from the gin. A single kinza leaf is pressed on top once it has cooled.',
      ka: 'ახალი ქინძი, ჯინი, ლიმონჩელო და დაწურული ლიმონი — გამჭვირვალე, მწვანილოვან კუბად ქცეული. ენაზე მწვანე სიგრილე, ბოლოს ციტრუსი და ჯინის ზუსტად საკმარისი სიმწარე. გაცივების შემდეგ ზემოდან ერთ ქინძის ფოთოლს ვადებთ.',
    },
    meta: {
      line: { en: 'Signature · Georgian-inspired', ka: 'საავტორო · ქართული შთაგონებით' },
    },
    img: '/cubes/kinza-garden.png',
    accent: 'rgba(130, 185, 110, 0.32)',
  },
];

export type ClassicSet = {
  id: string;
  name: { en: string; ka: string };
  blurb: { en: string; ka: string };
  accent: string;
};

export const classics: ClassicSet[] = [
  {
    id: 'c01',
    name: { en: 'Vodka & Orange', ka: 'ვოდკა-ფორთოხალი' },
    blurb: {
      en: 'Clean vodka and fresh-pressed orange, set bright and easy. The crowd-pleaser.',
      ka: 'სუფთა ვოდკა და ახლად დაწურული ფორთოხალი — მსუბუქი, ცოცხალი და ყველასთვის საყვარელი.',
    },
    accent: 'rgba(240, 150, 60, 0.45)',
  },
  {
    id: 'c02',
    name: { en: 'Vodka & Cherry', ka: 'ვოდკა-ალუბალი' },
    blurb: {
      en: 'Vodka over deep sour-cherry, set firm. Tart, ruby, a single cherry on top.',
      ka: 'ვოდკა მუქი, მომჟავო ალუბლით — მყარი, ლალისფერი და ზემოდან ერთი ალუბლით.',
    },
    accent: 'rgba(180, 40, 70, 0.45)',
  },
  {
    id: 'c03',
    name: { en: 'Aperol Spritz', ka: 'აპეროლ შპრიცი' },
    blurb: {
      en: 'Aperol, prosecco, orange — a summer cube with a bitter edge.',
      ka: 'აპეროლი, პროსეკო და ფორთოხალი — საზაფხულო კუბი მსუბუქი სიმწარით.',
    },
    accent: 'rgba(240, 110, 40, 0.45)',
  },
  {
    id: 'c04',
    name: { en: 'Tequila Sunrise', ka: 'ტეკილა სანრაიზი' },
    blurb: {
      en: 'Tequila, orange and a grenadine sunrise — layered gold into red.',
      ka: 'ტეკილა, ფორთოხალი და გრენადინი — ოქროსფრიდან წითლამდე ჩასული ფენები.',
    },
    accent: 'rgba(245, 150, 50, 0.45)',
  },
  {
    id: 'c05',
    name: { en: 'Mojito', ka: 'მოხიტო' },
    blurb: {
      en: 'White rum, lime, fresh mint — set crisp and bright.',
      ka: 'თეთრი რომი, ლაიმი, ახალი პიტნა — მკვეთრად და ცოცხლად აწყობილი.',
    },
    accent: 'rgba(120, 180, 130, 0.45)',
  },
];

export const menuClassics = {
  en: {
    eyebrow: 'Classics',
    head: 'Beyond the signatures.',
    sub: 'Familiar cocktails, set the same way. Every set is 8 cubes. Minimum order ₾250, Tbilisi delivery.',
  },
  ka: {
    eyebrow: 'კლასიკა',
    head: 'საავტორო გემოებს მიღმაც.',
    sub: 'ნაცნობი კოქტეილები იმავე ფორმით. ერთ ნაკრებში 8 კუბია. მინიმალური შეკვეთა ₾250, მიწოდება თბილისში.',
  },
};

export type BundleTier = {
  id: string;
  name: { en: string; ka: string };
  kicker: { en: string; ka: string };
  guests: { en: string; ka: string };
  cubes: { en: string; ka: string };
  price: string;
  body: { en: string; ka: string };
  mix: Array<{
    label: { en: string; ka: string };
    count: string;
  }>;
  note: { en: string; ka: string };
  featured?: boolean;
};

export const menuBundles = {
  en: {
    eyebrow: 'Baskets',
    head: 'Baskets for your table.',
    sub: 'Pick a ready mix for the size of your night. We tune the exact flavours with you before we set the cubes.',
    priceLabel: 'basket price',
    mixLabel: 'inside',
    cta: 'build my basket',
    foot: 'Need a different guest count? We scale the same logic up or down and keep the mix balanced.',
  },
  ka: {
    eyebrow: 'ნაკრები',
    head: 'ნაკრები შენი მაგიდისთვის.',
    sub: 'აირჩიე მზა მიქსი შენი საღამოს ზომისთვის. ზუსტ გემოებს ერთად შევარჩევთ, სანამ კუბებს დავაყენებთ.',
    priceLabel: 'ნაკრების ფასი',
    mixLabel: 'შიგნით',
    cta: 'ნაკრების აწყობა',
    foot: 'სხვა რაოდენობის სტუმარია? იგივე ლოგიკით გავზრდით ან შევამცირებთ და ბალანსს შევინარჩუნებთ.',
  },
  tiers: [
    {
      id: '01',
      name: { en: 'First Round', ka: 'პირველი წრე' },
      kicker: { en: 'Starter basket', ka: 'სტარტერი' },
      guests: { en: '5–10 people', ka: '5–10 სტუმარი' },
      cubes: { en: '40 cubes', ka: '40 კუბი' },
      price: '₾288',
      body: {
        en: 'A lively first tray for birthdays, apartment dinners and small pre-games: enough signature character to feel special, with easy classics carrying the room.',
        ka: 'პირველი ცოცხალი თეფში დაბადების დღეებისთვის, სახლში ვახშმისთვის და პატარა პრე-გეიმისთვის: საკმარისი საავტორო ხასიათი და მარტივი კლასიკა, რომ ყველამ თავისი იპოვოს.',
      },
      mix: [
        { label: { en: 'Signature cubes', ka: 'საავტორო კუბები' }, count: '8' },
        { label: { en: 'Classic cocktail cubes', ka: 'კლასიკური კოქტეილები' }, count: '16' },
        { label: { en: 'Vodka & juice cubes', ka: 'ვოდკა-წვენის კუბები' }, count: '16' },
      ],
      note: { en: 'Best when guests take 3–5 bites each.', ka: 'საუკეთესოა, როცა თითო სტუმარს 3–5 ლუკმა შეხვდება.' },
    },
    {
      id: '02',
      name: { en: 'Table Glow', ka: 'მაგიდის ნათება' },
      kicker: { en: 'Most balanced', ka: 'ყველაზე დაბალანსებული' },
      guests: { en: '12–20 people', ka: '12–20 სტუმარი' },
      cubes: { en: '80 cubes', ka: '80 კუბი' },
      price: '₾640',
      body: {
        en: 'The safest business choice for mixed crowds: enough signatures for the story, enough classics for repeat bites, and a clean vodka-juice lane for easy reach.',
        ka: 'ყველაზე უსაფრთხო არჩევანი შერეული აუდიტორიისთვის: საავტორო გემოები ამბისთვის, კლასიკა განმეორებისთვის და მარტივი ვოდკა-წვენის ხაზი ყველასთვის.',
      },
      mix: [
        { label: { en: 'Signature cubes', ka: 'საავტორო კუბები' }, count: '24' },
        { label: { en: 'Classic cocktail cubes', ka: 'კლასიკური კოქტეილები' }, count: '32' },
        { label: { en: 'Vodka & juice cubes', ka: 'ვოდკა-წვენის კუბები' }, count: '24' },
      ],
      note: { en: 'Our default recommendation for office nights and dinner parties.', ka: 'ჩვენი ძირითადი რეკომენდაცია ოფისის საღამოებისა და ვახშმებისთვის.' },
      featured: true,
    },
    {
      id: '03',
      name: { en: 'Full Room', ka: 'სრული დარბაზი' },
      kicker: { en: 'Event basket', ka: 'ღონისძიებისთვის' },
      guests: { en: '25–40 people', ka: '25–40 სტუმარი' },
      cubes: { en: '160 cubes', ka: '160 კუბი' },
      price: '₾1,344',
      body: {
        en: 'A full dessert bar for launches, weddings and brand nights. More signatures up front, broad classics through the middle, and simple cubes to keep the table moving.',
        ka: 'სრული დესერტ-ბარი პრეზენტაციებისთვის, ქორწილებისთვის და ბრენდის საღამოებისთვის. წინ მეტი საავტორო გემო, შუაში ფართო კლასიკა და მარტივი კუბები უწყვეტი მოძრაობისთვის.',
      },
      mix: [
        { label: { en: 'Signature cubes', ka: 'საავტორო კუბები' }, count: '56' },
        { label: { en: 'Classic cocktail cubes', ka: 'კლასიკური კოქტეილები' }, count: '64' },
        { label: { en: 'Vodka & juice cubes', ka: 'ვოდკა-წვენის კუბები' }, count: '40' },
      ],
      note: { en: 'Built to sit beautifully on a long table or move with service.', ka: 'ლამაზად ეწყობა გრძელ მაგიდაზეც და სერვისით გატარებისთვისაც.' },
    },
  ] satisfies BundleTier[],
};

export const moreFlavours = {
  en: {
    eyebrow: 'and beyond the signatures',
    cta: 'See the full menu  →',
  },
  ka: {
    eyebrow: 'საავტორო გემოებს მიღმა',
    cta: 'ნახე სრული მენიუ  →',
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
    sub: 'Tell us about the night. We answer within a working day, with a draft menu and next steps.',
    minOrder: 'Minimum order ₾250. A set is 8 cubes.',
    whatsappLead: 'Prefer to message?',
    whatsappCta: 'Contact us on WhatsApp',
    fields: {
      name:   { label: 'Your name' },
      phone:  { label: 'Phone' },
      email:  { label: 'Email (optional)' },
      date:   { label: 'When is the event?' },
      venue:  { label: 'Address' },
      guests: { label: 'How many people?' },
      basket: { label: 'Which basket are you interested in?' },
      note:   { label: 'Anything else? (optional)' },
    },
    basketPlaceholder: 'Choose a basket',
    customBasket: 'Custom basket',
    submit: 'send',
    sending: 'sending…',
    success: 'thank you. we have your brief and will answer within a working day.',
    failure: 'something went wrong. write to hello@zhuzhu.ge or message us on WhatsApp.',
    foot: 'No automation. A real person reads this.',
    tasting: 'Planning a large event? We can set up a private tasting first — just mention it in your message.',
  },
  ka: {
    head: 'დაჯავშნე ღონისძიება',
    sub: 'მოგვიყევი შენი საღამოს შესახებ. ერთ სამუშაო დღეში გიპასუხებთ — მენიუს პირველ ვერსიასა და შემდეგ ნაბიჯებს გამოგიგზავნით.',
    minOrder: 'მინიმალური შეკვეთა ₾250. ერთი ნაკრები — 8 კუბი.',
    whatsappLead: 'მოწერა გირჩევნია?',
    whatsappCta: 'მოგვწერე WhatsApp-ზე',
    fields: {
      name:   { label: 'შენი სახელი' },
      phone:  { label: 'ტელეფონი' },
      email:  { label: 'ელფოსტა (სურვილისამებრ)' },
      date:   { label: 'როდის არის ღონისძიება?' },
      venue:  { label: 'მისამართი' },
      guests: { label: 'რამდენი სტუმარი?' },
      basket: { label: 'რომელი ნაკრები გაინტერესებს?' },
      note:   { label: 'კიდევ რამე? (სურვილისამებრ)' },
    },
    basketPlaceholder: 'აირჩიე ნაკრები',
    customBasket: 'ინდივიდუალური ნაკრები',
    submit: 'გაგზავნა',
    sending: 'იგზავნება…',
    success: 'მადლობა. ინფორმაცია მივიღეთ და ერთ სამუშაო დღეში გიპასუხებთ.',
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ პირდაპირ hello@zhuzhu.ge ან WhatsApp-ზე.',
    foot: 'ცოცხალი ადამიანი წაიკითხავს.',
    tasting: 'დიდ ღონისძიებას გეგმავთ? შეგვიძლია მანამდე კერძო დეგუსტაციაც მოვაწყოთ — უბრალოდ მოგვწერეთ შეტყობინებაში.',
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
    follow:  'გამოგვყევი',
    legal:   'წესები',
    language: 'ენა',
    addr: ['ჟუჟუ ატელიე', 'თბილისი · საქართველო'],
    mail:  'hello@zhuzhu.ge',
    brandLine: 'ხელით აწყობილი კოქტეილ-დესერტები. თბილისი.',
    tagline: '„არ სვამ — ლუკმად აგემოვნებ.“',
    socials: [
      { label: 'ინსტაგრამი', href: 'https://instagram.com/she_zhuzhu_ndi' },
      { label: 'ტიკტოკი',    href: 'https://tiktok.com/@she_zhuzhu_ndi' },
      { label: 'ფეისბუქი',    href: 'https://www.facebook.com/profile.php?id=61589724820624' },
    ],
    legals: ['პირობები', 'კონფიდენციალურობა'],
    rights: '© 2026 ჟუჟუ. ხელით აწყობილია თბილისში.',
    setIn: 'საიტზე გამოყენებულია Spectral, Manrope და Noto Serif Georgian.',
  },
};

export const menuPage = {
  en: {
    head: 'Our signatures, and beyond.',
    sub: 'Georgian-inspired signatures, hand-set in Tbilisi, with classics beneath them. Every set is eight cubes.',
  },
  ka: {
    head: 'ჩვენი საავტორო გემოები და მეტი.',
    sub: 'ქართული შთაგონებით შექმნილი საავტორო კუბები, ხელით აწყობილი თბილისში. ქვემოთ — კლასიკა. თითო ნაკრებში რვა კუბია.',
  },
};

export const orderPage = {
  en: {
    head: 'Choose a basket. Or build your own.',
    sub: 'Start with one of our ready event baskets, or tell us your guest count and we will shape the mix. Set the day before, delivered chilled within Tbilisi.',
    flavoursEyebrow: 'individual flavours',
    flavoursHead: 'Prefer to choose cube by cube?',
    flavoursSub: 'Use the list below as your flavour board. We will help turn it into the right quantity for your event.',
  },
  ka: {
    head: 'აირჩიე ნაკრები. ან ავაწყოთ შენი.',
    sub: 'დაიწყე მზა ღონისძიების ნაკრებით, ან მოგვწერე სტუმრების რაოდენობა და მიქსს ჩვენ მოვარგებთ. კუბებს წინა დღეს ვამზადებთ და თბილისში გაგრილებულს გიგზავნით.',
    flavoursEyebrow: 'ცალკეული გემოები',
    flavoursHead: 'გინდა კუბებად აარჩიო?',
    flavoursSub: 'ქვემოთ ნახე გემოების სია. რაოდენობას შენი ღონისძიებისთვის ჩვენ მოვარგებთ.',
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
    successSub: 'Want to send a friend our way? Anyone with a wedding, birthday or corporate evening coming up — share this message below.',
    // Follow + what-we-do + links (shown under the form)
    followLabel: 'follow the kitchen',
    followSub: 'New cubes land here first.',
    aboutHead: 'What we actually do.',
    aboutBody: 'We set cocktail-dessert tables for events — weddings, brand nights, private dinners — across Tbilisi. We’re open to international collabs, too — anywhere worth setting jello.',
    menuCta: 'see the full menu  →',
    homeCta: 'visit the main site  →',
    reachLabel: 'reach us',
    waBtn: 'WhatsApp',
    emailBtn: 'Email us',
    shareSelf: 'share ZhuZhu',
    sharePitchTitle: 'ZhuZhu — cocktail desserts, Tbilisi',
    sharePitchText: 'ZhuZhu — cocktail desserts, hand-set in Tbilisi. You don’t sip them, you bite them. Book them for your next event:',
    shareTitle: 'ZhuZhu — cocktail desserts, Tbilisi',
    shareText: 'Hey, I think you’d find this interesting for your next event — ZhuZhu makes cocktail desserts in Tbilisi:',
    copyBtn: 'copy message',
    copiedBtn: 'copied ✓',
    shareBtn: 'share',
    perksHead: 'Three things worth knowing.',
    perks: [
      {
        n: '01',
        title: 'The mystery box — coming soon.',
        body: 'Nine new cubes at your door every month. We’re setting up subscriptions now — join the waitlist for first access.',
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
        body: 'Know someone with a wedding, a birthday or a corporate evening coming up? Send them a quick note about us — it helps us grow, and we look after people who send people.',
        microprint: null,
        cta: 'send to a friend  →',
        href: 'share:friend',
      },
    ],
    failure: 'Something went wrong. Write to hello@zhuzhu.ge directly.',
  },
  ka: {
    eyebrow: 'დღეს ჟუჟუ გასინჯე',
    head: 'დარჩი ახლოს.',
    sub: 'დაგვიტოვე ელფოსტა და პირველმა გაიგე მომავალი თვის გემოებზე, ყუთის გახსნაზე და დაბადების დღის პატარა სიურპრიზებზე.',
    emailLabel: 'ელფოსტა',
    emailPh: 'you@example.com',
    monthLabel: 'დაბადების თვე (სურვილისამებრ)',
    monthHint: 'რომ დაბადების დღის საჩუქრების ამოქმედებისას გაგახაროთ',
    monthOptions: ['—', 'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
    submit: 'დამამატე სიაში',
    submitting: 'ემატები…',
    micro: 'სპამი არ იქნება — მხოლოდ ის ლუკმები, რომლებიც ნამდვილად ღირს. ყველა პასუხს ჩვენ თვითონ ვკითხულობთ.',
    successHead: 'სიაში ხარ.',
    successSub: 'გინდა მეგობარსაც გააგებინო? თუ ვინმეს წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო აქვს, გაუზიარე ეს ტექსტი ქვემოთ.',
    followLabel: 'გამოგვყევი სამზარეულოში',
    followSub: 'ახალი კუბები ჯერ აქ ჩნდება.',
    aboutHead: 'რას ვაკეთებთ სინამდვილეში.',
    aboutBody: 'ღონისძიებებისთვის კოქტეილ-დესერტების მაგიდებს ვაწყობთ — ქორწილებზე, ბრენდის საღამოებზე და კერძო ვახშმებზე, თბილისში. საერთაშორისო კოლაბორაციებისთვისაც ღია ვართ — ყველგან, სადაც ჟელეს დაყენება ღირს.',
    menuCta: 'ნახე სრული მენიუ  →',
    homeCta: 'მთავარ საიტზე გადასვლა  →',
    reachLabel: 'დაგვიკავშირდი',
    waBtn: 'WhatsApp',
    emailBtn: 'მოგვწერე ელფოსტით',
    shareSelf: 'გააზიარე ჟუჟუ',
    sharePitchTitle: 'ჟუჟუ — კოქტეილ-დესერტები, თბილისი',
    sharePitchText: 'ჟუჟუ — ხელით აწყობილი კოქტეილ-დესერტები თბილისში. არ სვამ — ლუკმად აგემოვნებ. დაჯავშნე შენი შემდეგი ღონისძიებისთვის:',
    shareTitle: 'ჟუჟუ — კოქტეილ-დესერტები, თბილისი',
    shareText: 'ჰეი, მგონია, ეს შენი შემდეგი ღონისძიებისთვის საინტერესო იქნება — ჟუჟუ თბილისში კოქტეილ-დესერტებს ამზადებს:',
    copyBtn: 'ტექსტის კოპირება',
    copiedBtn: 'დაკოპირდა ✓',
    shareBtn: 'გაგზავნა',
    perksHead: 'სამი რამ, რაც უნდა იცოდე.',
    perks: [
      {
        n: '01',
        title: 'საიდუმლო ყუთი — მალე.',
        body: 'ყოველ თვე ცხრა ახალი კუბი პირდაპირ შენს კართან. გამოწერას ახლა ვამზადებთ — ჩაეწერე სიაში, რომ პირველმა მიიღო წვდომა.',
        cta: 'ჩაეწერე სიაში  →',
        href: '/box',
      },
      {
        n: '02',
        title: 'დაბადების დღის საჩუქრები — მზადების პროცესშია.',
        body: 'მუდმივი მომხმარებლებისთვის პატარა საჩუქარს ვამზადებთ: დაბადების დღეზე, მას შემდეგ, რაც ერთხელ მაინც შეგვიკვეთავ. დატოვე დაბადების თვე და პირველმა გაიგე, როცა ეს ფუნქცია ამოქმედდება.',
        microprint: 'ჯერ მზადების პროცესშია — თარიღებს ჯერ არ ვპირდებით.',
        cta: null,
        href: null,
      },
      {
        n: '03',
        title: 'გაუზიარე მეგობარს.',
        body: 'იცი ვინმე, ვისაც წინ ქორწილი, დაბადების დღე ან კორპორატიული საღამო აქვს? გაუგზავნე მოკლე ტექსტი ჩვენზე — ეს ზრდაში გვეხმარება, ჩვენ კი მათ ვუფრთხილდებით, ვინც ახალ ადამიანებს გვაცნობს.',
        microprint: null,
        cta: 'მეგობართან გაგზავნა  →',
        href: 'share:friend',
      },
    ],
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ პირდაპირ hello@zhuzhu.ge.',
  },
};

export const boxPage = {
  en: {
    eyebrow: 'coming soon',
    head: 'The mystery box.',
    sub: 'A new set of cubes at your door, every month — nine bites, new flavours, never the same twice. We are setting up monthly subscriptions now. Join the waitlist and you will be the first in when it opens.',
    note: '9 cubes · Tbilisi delivery',
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
      { n: '01', name: 'Join the waitlist', d: 'Leave your email. When subscriptions open you get first access.' },
      { n: '02', name: 'We curate',  d: 'Every month, we set a new line. Kinza today, sour cherry tomorrow, walnut churchkhela next month — we follow the season and the kitchen.' },
      { n: '03', name: 'You bite',   d: 'We hand-deliver within Tbilisi during the first week of every month. Allergens are listed on the box; flavours stay a secret until you open it.' },
    ],
    finalHead: 'Nine new bites, every month — soon.',
    finalCta: 'join the waitlist',
  },
  ka: {
    eyebrow: 'მალე',
    head: 'საიდუმლო ყუთი.',
    sub: 'ყოველ თვე ახალი ნაკრები შენს კართან — ცხრა ლუკმა, ახალი გემოები და არასდროს ერთი და იგივე. ყოველთვიურ გამოწერას ახლა ვამზადებთ. ჩაეწერე სიაში და გახსნისთანავე პირველებს შორის იქნები.',
    note: '9 კუბი · მიწოდება თბილისში',
    emailLabel: 'შენი ელფოსტა',
    emailPh: 'you@example.com',
    cta: 'ჩაეწერე სიაში',
    submitting: 'ემატები…',
    success: 'სიაში ხარ. გამოწერის გახსნისთანავე მოგწერთ.',
    failure: 'რაღაც შეცდომა მოხდა. მოგვწერეთ hello@zhuzhu.ge და დაგამატებთ.',
    waitlistNote: 'ახლა არაფერს იხდი — ეს მხოლოდ ადგილს გინახავს. გადახდის დაწყებამდე აუცილებლად მოგწერთ.',
    stepsHead: 'როგორ იმუშავებს',
    steps: [
      { n: '01', name: 'ჩაეწერე სიაში', d: 'დატოვე ელფოსტა. გამოწერის გახსნისას პირველმა მიიღო წვდომა.' },
      { n: '02', name: 'ჩვენ გემოებს ვარჩევთ', d: 'ყოველ თვე ახალ ხაზს ვაწყობთ. დღეს ქინძი, ხვალ ალუბალი, შემდეგ თვეში — ნიგვზის ჩურჩხელა. სეზონსა და სამზარეულოს მივყვებით.' },
      { n: '03', name: 'შენ აგემოვნებ', d: 'ყოველი თვის პირველ კვირაში ყუთს თბილისში ხელით მოგაწვდით. ალერგენები ყუთზე იქნება მითითებული; გემოები კი საიდუმლოდ დარჩება, სანამ არ გახსნი.' },
    ],
    finalHead: 'ცხრა ახალი ლუკმა ყოველ თვე — მალე.',
    finalCta: 'ჩაეწერე სიაში',
  },
};

export const aboutPage = {
  en: {
    head: 'Three founders.<br>One kitchen.',
    origin: [
      'ZhuZhu started with a craving. Keti, studying in the United States for a while, first met the jello shot at a party there and couldn’t stop thinking about it: a whole cocktail, reduced to a single bite.',
      'Back home she called two friends. Anna — a chemistry obsessive who cleaned up at the school chem olympiads and knows exactly why a cube holds or weeps. Lado — a chef working the line in a Tbilisi hotel kitchen. Their strengths fit together a little too well.',
      'Georgia made sense for it: an alcohol-loving country, a young and international crowd, and a generation ready for the idea. So we started experimenting — this time with Georgian flavours — and quietly surprised ourselves with how good it got.',
      'We’ve been perfecting the recipes ever since, chasing inspiration wherever we find it (which is mostly code for tasting a great many cocktails lately). Every cube is still set by hand.',
    ],
  },
  ka: {
    head: 'სამი დამფუძნებელი.<br>ერთი სამზარეულო.',
    origin: [
      'ჟუჟუ ერთი სურვილით დაიწყო. ქეთი ცოტა ხანს ამერიკაში სწავლობდა, როცა წვეულებაზე პირველად გასინჯა ჯელო-შოტი და თავიდან ვეღარ ამოიგდო: მთელი კოქტეილი, ერთ ლუკმად ქცეული.',
      'საქართველოში დაბრუნებულმა ორ მეგობარს დაურეკა. ანა — ქიმიაზე შეყვარებული, სკოლის ქიმიის ოლიმპიადების გამორჩეული მონაწილე, რომელმაც ზუსტად იცის, რატომ იჭერს კუბი ფორმას ან რატომ იწყებს „ტირილს“. ლადო — შეფი თბილისის სასტუმროს სამზარეულოდან. მათი ძლიერი მხარეები ერთმანეთს ზედმეტად კარგად დაემთხვა.',
      'საქართველო ამისთვის ბუნებრივი ადგილი აღმოჩნდა: ქვეყანა, რომელსაც ალკოჰოლი უყვარს, ახალგაზრდა და საერთაშორისო აუდიტორია და თაობა, რომელიც ასეთი იდეისთვის მზად იყო. ასე დავიწყეთ ექსპერიმენტები — ამჯერად ქართული გემოებით — და შედეგმა ჩვენც ჩუმად გაგვაკვირვა.',
      'მას შემდეგ რეცეპტებს ვხვეწავთ და შთაგონებას ყველგან ვეძებთ (რაც, ძირითადად, ბოლო დროს ბევრი კარგი კოქტეილის გასინჯვას ნიშნავს). თითოეული კუბი დღემდე ხელით იწყობა.',
    ],
  },
};

export const founders = [
  {
    name: { en: 'Keti', ka: 'ქეთი' },
    role: { en: 'Brand & business', ka: 'ბრენდი და ბიზნესი' },
    bio: {
      en: 'IE University graduate; interned at Google; now building products at Bending Spoons in Milan. Keti runs the brand surface — the site, the story — and what the world sees and clicks.',
      ka: 'IE University-ის კურსდამთავრებული; სტაჟირება Google-ში; ახლა პროდუქტებზე მუშაობს მილანის Bending Spoons-ში. ქეთი ბრენდის ხილულ მხარეს უძღვება — საიტს, ამბავს და ყველაფერს, რასაც ადამიანები ხედავენ და აჭერენ.',
    },
    accent: 'rgba(196, 140, 70, 0.30)',
  },
  {
    name: { en: 'Anna', ka: 'ანა' },
    role: { en: 'Food safety & quality control', ka: 'სურსათის უსაფრთხოება და ხარისხის კონტროლი' },
    bio: {
      en: 'A food safety specialist at Food Consulting and a Food Engineering tutor at the Agricultural University of Georgia. Anna brings HACCP, risk analysis and lab food-testing experience to the kitchen — the gelatine, the acidity, the allergens, the documentation, and the standards that keep every cube consistent.',
      ka: 'Food Consulting-ში სურსათის უსაფრთხოების სპეციალისტია და საქართველოს აგრარულ უნივერსიტეტში სურსათის ინჟინერიის ტუტორი. ანას სამზარეულოში მოაქვს HACCP-ის, რისკების ანალიზისა და ლაბორატორიული ტესტირების გამოცდილება — ჟელატინი, მჟავიანობა, ალერგენები, დოკუმენტაცია და სტანდარტები, რომ თითოეული კუბი სტაბილური იყოს.',
    },
    accent: 'rgba(220, 170, 70, 0.32)',
  },
  {
    name: { en: 'Lado', ka: 'ლადო' },
    role: { en: 'Chef, recipes & photography', ka: 'შეფი, რეცეპტები და ფოტოგრაფია' },
    bio: {
      en: 'A chef in the kitchen at Radisson, Tbilisi. Lado owns the food itself — the recipes, the heat, the taste, every cube on every tray — and the lens behind the photos.',
      ka: 'შეფი თბილისის Radisson-ის სამზარეულოში. ლადო თავად საკვებზეა პასუხისმგებელი — რეცეპტებზე, ტემპერატურაზე, გემოზე, თითოეულ კუბზე თითოეულ თეფშზე — და იმ ობიექტივზეც, რომლის უკანაც ჩვენი ფოტოები იქმნება.',
    },
    accent: 'rgba(180, 50, 80, 0.30)',
  },
];

// Visible on /order AND used to generate FAQPage JSON-LD on the same page.
// Keep questions natural — Google's guidance is that FAQ schema must
// reflect content that's visibly answered on the page.
export const orderFaqs = [
  {
    q: { en: 'What is the minimum order?',
         ka: 'რა არის მინიმალური შეკვეთა?' },
    a: { en: 'Minimum order is ₾250 — about eighteen to twenty cubes depending on the line you pick.',
         ka: 'მინიმალური შეკვეთა ₾250-ია — დაახლოებით თვრამეტიდან ოც კუბამდე, არჩეული ხაზის მიხედვით.' },
  },
  {
    q: { en: 'How far in advance should I order?',
         ka: 'რამდენი ხნით ადრე უნდა შემოვუკვეთო?' },
    a: { en: 'Ideally a week. Three days is the practical minimum so we can set the cubes the day before and deliver them properly chilled.',
         ka: 'იდეალურია ერთი კვირით ადრე. სამი დღე მინიმუმია, რომ წინა დღეს მოვამზადოთ კუბები და სათანადოდ გაცივებული მოგაწოდოთ.' },
  },
  {
    q: { en: 'Do you deliver outside Tbilisi?',
         ka: 'ხდება თუ არა მიწოდება თბილისის გარეთ?' },
    a: { en: 'Tbilisi only for now. The cubes are a cold-chain item — every minute outside refrigeration changes the texture.',
         ka: 'ჯერჯერობით მხოლოდ თბილისში. კუბები ცივ ჯაჭვს მოითხოვს — ყოველი წუთი მაცივრის გარეთ ცვლის მათ ტექსტურას.' },
  },
  {
    q: { en: 'Are the cubes alcoholic?',
         ka: 'შეიცავს თუ არა კუბები ალკოჰოლს?' },
    a: { en: 'Most of the signatures and classics contain alcohol — chacha, gin, Khvanchkara, Baileys. We also keep alcohol-free options: Berry Mint, Pomegranate Citrus, Tarragon Lemonade. We mark them clearly so service can route guests correctly.',
         ka: 'სიგნატურებისა და კლასიკის უმეტესობა შეიცავს ალკოჰოლს — ჭაჭა, ჯინი, ხვანჩკარა, ბეილისი. ასევე გვაქვს უალკოჰოლო ვარიანტები: Berry Mint, Pomegranate Citrus, Tarragon Lemonade. მკაფიოდ ვნიშნავთ მათ.' },
  },
  {
    q: { en: 'How long do they last?',
         ka: 'რამდენ ხანს ინახება?' },
    a: { en: 'Hand-set the day before, best eaten within twenty-four hours of delivery, kept refrigerated until service. After that the texture drifts.',
         ka: 'წინა დღეს ხელით აწყობილი, საუკეთესოა მიწოდებიდან ოცდაოთხ საათში მოხმარდეს, მოწოდებამდე — გაცივებული. ამის შემდეგ ტექსტურა იცვლება.' },
  },
  {
    q: { en: 'Can you do custom flavours?',
         ka: 'შესაძლებელია თუ არა ინდივიდუალური გემოები?' },
    a: { en: 'No. Three Georgian-inspired signatures and six classics — that is the menu. Hand-set quality is only possible because we keep the kitchen focused.',
         ka: 'არა. სამი ქართული საავტორო გემო და ექვსი კლასიკა — ეს არის მენიუ. ხელის ხარისხი მხოლოდ მაშინაა შესაძლებელი, როცა სამზარეულო ფოკუსირებულია.' },
  },
];

export const orderFaqMeta = {
  en: {
    eyebrow: 'Common questions',
    head: 'Before you order.',
    sub: 'Six things people ask us before the first event. Anything else — WhatsApp us.',
  },
  ka: {
    eyebrow: 'ხშირი კითხვები',
    head: 'სანამ შემოუკვეთავ.',
    sub: 'ექვსი რამ, რასაც ხალხი ხშირად გვეკითხება პირველი ღონისძიების წინ. სხვა რამე — WhatsApp-ით მოგვწერე.',
  },
};

export const journal = {
  // Index page copy + list of posts.
  index: {
    en: {
      eyebrow: 'journal',
      head: 'Notes from the kitchen.',
      sub: 'Short pieces — the format, the ingredients, the night service we built ZhuZhu for.',
    },
    ka: {
      eyebrow: 'ჟურნალი',
      head: 'ჩანაწერები სამზარეულოდან.',
      sub: 'მოკლე ჩანაწერები — ფორმატი, ინგრედიენტები, ის საღამოს მომსახურება, რომლისთვისაც ჟუჟუ შევქმენით.',
    },
  },
  posts: [
    {
      slug: 'what-is-a-cocktail-dessert',
      date: '2026-06-09',          // ISO date for JSON-LD + display
      readingMinutes: 3,
      title: {
        en: 'What is a cocktail dessert?',
        ka: 'რა არის კოქტეილ-დესერტი?',
      },
      lede: {
        en: 'Not a shot. Not a jelly. A cocktail measured in bites — a Tbilisi format we set by hand.',
        ka: 'არც შოტი, არც ჟელე. კოქტეილი ლუკმად გაზომილი — თბილისური ფორმატი, ხელით ნაკეთები.',
      },
    },
  ],
};

export const contactPage = {
  en: {
    eyebrow: 'contact',
    head: 'Let’s talk.',
    sub: 'Three ways to reach us. We answer within a working day.',
    waLabel: 'WhatsApp',
    waNote: 'Fastest — usually within a few hours.',
    waCta: 'Open WhatsApp',
    emailLabel: 'Email',
    emailNote: 'For longer briefs, attachments, anything quieter.',
    emailCta: 'hello@zhuzhu.ge',
    socialLabel: 'Follow along',
    socialNote: 'Tonight’s flavours, new sets, behind the kitchen.',
    addrHead: 'The atelier',
    addrLines: ['ZhuZhu Atelier', 'Tbilisi · Georgia'],
  },
  ka: {
    eyebrow: 'კონტაქტი',
    head: 'მოგვწერე.',
    sub: 'სამი გზა დაგვეკონტაქტო. ერთ სამუშაო დღეში გიპასუხებთ.',
    waLabel: 'WhatsApp',
    waNote: 'ყველაზე სწრაფი — ჩვეულებრივ რამდენიმე საათში გიპასუხებთ.',
    waCta: 'WhatsApp-ში გახსნა',
    emailLabel: 'ელფოსტა',
    emailNote: 'უფრო ვრცელი ბრიფისთვის, დანართებისთვის, წყნარი მიმოწერისთვის.',
    emailCta: 'hello@zhuzhu.ge',
    socialLabel: 'გვადევნე',
    socialNote: 'დღევანდელი გემოები, ახალი ნაკრებები, სამზარეულოს კულუარები.',
    addrHead: 'ატელიე',
    addrLines: ['ჟუჟუ ატელიე', 'თბილისი · საქართველო'],
  },
};

export const pageMeta = {
  home: {
    en: { title: 'ZhuZhu (ჟუჟუ) — Cocktail desserts · Tbilisi atelier',
          desc: 'ZhuZhu (ჟუჟუ) — cocktail desserts hand-set in Tbilisi. Honey Chacha, Cream Kiss, Kinza Garden. Weddings, brand evenings, after-hours tables. Hello@zhuzhu.ge.' },
    ka: { title: 'ჟუჟუ (ZhuZhu) — კოქტეილ-დესერტები · თბილისის ატელიე',
          desc: 'ჟუჟუ — ხელით აწყობილი კოქტეილ-დესერტები თბილისში. Honey Chacha, Cream Kiss, Kinza Garden. ქორწილებისთვის, ბრენდის საღამოებისთვის. hello@zhuzhu.ge.' },
  },
  menu: {
    en: { title: 'Menu — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'Three signature cocktail desserts hand-set in Tbilisi. Cream Kiss, Honey Chacha, Kinza Garden.' },
    ka: { title: 'მენიუ. ჟუჟუ, კოქტეილ-დესერტები.',
          desc: 'სამი საავტორო კოქტეილ-დესერტი, ხელით აწყობილი თბილისში: კრემ-კოცნა, თაფლის ჭაჭა და ქინძის ბაღი.' },
  },
  order: {
    en: { title: 'Order — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'Order ZhuZhu (ჟუჟუ) cocktail desserts for your event in Tbilisi. Minimum ₾250, hand-set the day before, delivered chilled.' },
    ka: { title: 'შეკვეთა — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები · თბილისი',
          desc: 'შეუკვეთე ჟუჟუს კოქტეილ-დესერტები შენი ღონისძიებისთვის. მინიმალური ₾250, წინა დღეს ხელით აწყობილი, თბილისში გადანახული.' },
  },
  about: {
    en: { title: 'About — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'ZhuZhu (ჟუჟუ) — three founders, one kitchen. The story behind the Tbilisi cocktail-dessert atelier.' },
    ka: { title: 'ჩვენ შესახებ — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები · თბილისი',
          desc: 'ჟუჟუ — სამი დამფუძნებელი, ერთი სამზარეულო. თბილისის კოქტეილ-დესერტების ატელიეს ისტორია.' },
  },
  box: {
    en: { title: 'The mystery box — ZhuZhu (ჟუჟუ), cocktail desserts',
          desc: 'A monthly subscription of hand-set ZhuZhu cocktail desserts. Nine new flavours, delivered in Tbilisi the first week of every month.' },
    ka: { title: 'საიდუმლო ყუთი — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები',
          desc: 'ჟუჟუს კოქტეილ-დესერტების ყოველთვიური გამოწერა. ცხრა ახალი გემო თბილისში, თვის პირველ კვირაში.' },
  },
  tastedUs: {
    en: { title: 'The list — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'You tasted ZhuZhu (ჟუჟუ) tonight. Stay close — monthly flavours, birthday perks, and the first word on the box.' },
    ka: { title: 'სია — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები · თბილისი',
          desc: 'დღეს ჟუჟუ გასინჯე. დარჩი ახლოს — ყოველთვიური გემოები, დაბადების დღის საჩუქრები და პირველი ამბავი საიდუმლო ყუთზე.' },
  },
  contact: {
    en: { title: 'Contact — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'Reach ZhuZhu (ჟუჟუ) by WhatsApp, email, or socials. Tbilisi atelier — we answer within a working day.' },
    ka: { title: 'კონტაქტი — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები · თბილისი',
          desc: 'დაგვეკონტაქტეთ WhatsApp-ით, ელფოსტით ან სოციალურით. ჟუჟუ ატელიე, თბილისი — ერთ სამუშაო დღეში გიპასუხებთ.' },
  },
  journal: {
    en: { title: 'Journal — ZhuZhu (ჟუჟუ), cocktail desserts · Tbilisi',
          desc: 'Notes from the ZhuZhu (ჟუჟუ) kitchen. The format, the ingredients, and the Tbilisi night service we built it for.' },
    ka: { title: 'ჟურნალი — ჟუჟუ (ZhuZhu), კოქტეილ-დესერტები · თბილისი',
          desc: 'ჩანაწერები ჟუჟუს სამზარეულოდან — ფორმატი, ინგრედიენტები და თბილისის საღამოს მომსახურება.' },
  },
  'journal/what-is-a-cocktail-dessert': {
    en: { title: 'What is a cocktail dessert? — ZhuZhu (ჟუჟუ), Tbilisi',
          desc: 'A cocktail dessert is a cocktail measured in bites — eaten on the tongue, never sipped from a glass. The format ZhuZhu (ჟუჟუ) hand-sets in Tbilisi.' },
    ka: { title: 'რა არის კოქტეილ-დესერტი? — ჟუჟუ (ZhuZhu), თბილისი',
          desc: 'კოქტეილ-დესერტი არის კოქტეილი, ლუკმად გაზომილი — ენაზე, არასოდეს ჭიქით. ფორმატი, რომელსაც ჟუჟუ ხელით აწყობს თბილისში.' },
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
    eyebrow: 'როგორ მოგემსახურებით',
    head: 'ჟუჟუს შეკვეთის ორი გზა.',
    modes: [
      { n: '01', title: 'გაგრილებული მიწოდება', body: 'კუბებს წინა დღეს ვამზადებთ და თბილისში გაგრილებულს გიგზავნით — ყუთით, ალერგენების მითითებით და დასაწყობად მზად. თქვენ აწყობთ თეფშებზე, ჩვენ კი ყველაფერს მარტივად ვტოვებთ.' },
      { n: '02', title: 'სრული მომსახურება ღონისძიებაზე', body: 'ქორწილებზე, ბრენდის საღამოებსა და დიდ ღონისძიებებზე ჩვენი გუნდი ადგილზე მოდის. მოგვაქვს კუბები, ვაწყობთ, ვემსახურებით სტუმრებს და საღამოს ბოლომდე ვრჩებით, რომ ყველას ყურადღება მივაქციოთ.' },
    ],
    note: 'არ იცით, რომელი ვარიანტი გერგებათ? ქვემოთ მოგვიყევით თქვენი ღონისძიების შესახებ და შესაბამის ფორმატს გირჩევთ.',
  },
};
