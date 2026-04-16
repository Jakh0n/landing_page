import type {
  NavLink,
  Course,
  Teacher,
  Testimonial,
  Feature,
  PricingPlan,
  Stat,
  FAQItem,
  ContactInfo,
} from "@/types";

/** Rasm manbalari: Unsplash (barqaror URL, w=1200) */
const IMG = {
  course: {
    ieltsGen:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    /** Academic: kutubxona / o‘qish muhiti */
    ieltsAc:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
    speaking:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    writing:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    /** TOEFL: noutbuk bilan ta’lim */
    toefl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    general:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=80",
  },
  teacher: {
    t1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&q=80&auto=format",
    t2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80&auto=format",
    t3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&q=80&auto=format",
    t4: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&q=80&auto=format",
  },
  student: {
    s1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80&auto=format",
    s2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80&auto=format",
    s3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80&auto=format",
    s4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80&auto=format",
    s5: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80&auto=format",
  },
} as const;

export const SITE_NAME = "Ezyly";
export const SITE_TAGLINE =
  "IELTS, umumiy ingliz tili va imtihon tayyorgarligi — Cambridge-style feedback bilan band oching.";

export const NAVBAR_CTA = "Joyni band qilish";

export const NAV_LINKS: NavLink[] = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Afzalliklar", href: "#features" },
  { label: "Kurslar", href: "#courses" },
  { label: "O‘qituvchilar", href: "#teachers" },
  { label: "Tariflar", href: "#pricing" },
  { label: "Savol-javob", href: "#faq" },
  { label: "Aloqa", href: "#contact" },
];

export const HERO = {
  badge:
    "IELTS General & Academic — yangi guruh: joylar 18 tagacha cheklangan",
  titleBefore: "IELTS’da natija qilmoqchimisiz? ",
  titleBrand: "Bizda aniq yo‘l bor",
  subtitle:
    "Mock testlar, speaking tahlili va mentor feedback orqali sizning zaif joylaringiz aniqlanadi va aniq rivojlanish yo‘li beriladi.",
  ctaPrimary: "Bepul sinov darsiga yozilish",
  ctaSecondary: "IELTS kurslarini ko‘rish",
  scrollHint: "Pastga",
  floating: [
    { key: "students", label: "980+ IELTS o‘quvchisi" },
    { key: "courses", label: "40+ modul va mock" },
    { key: "rate", label: "Band 7+ maqsad — 9 oy ichida" },
  ],
} as const;

export const STATS: Stat[] = [
  { value: 980, suffix: "+", label: "IELTS / ingliz o‘quvchilari" },
  { value: 40, suffix: "+", label: "Mock test va modul" },
  { value: 14, suffix: "+", label: "IELTS mentorlari" },
  { value: 96, suffix: "%", label: "Maqsad bandiga yetish" },
];

export const FEATURES: Feature[] = [
  {
    icon: "BookOpen",
    title: "Har bo‘lim o‘z navbatida — chalkashlik yo‘q",
    description:
      "Listeningdan Speakinggacha: qayerda qolib ketayotganingiz ko‘rinadi, keyingi qadam har doim aniq. «Nimadan boshlashni bilmayman» degan holat tugaydi.",
  },
  {
    icon: "Target",
    title: "Uyda emas — imtihon stulida qanday chiqishni bilasiz",
    description:
      "Vaqt bilan mock: xato qayerda ekanini birga ko‘ramiz va aynan o‘sha joy ustida ishlaymiz. Nazariy emas, sinovdan keyingi aniq yo‘l.",
  },
  {
    icon: "Headphones",
    title: "Mentor essayingizni o‘qiydi — oddiy «yaxshi» emas",
    description:
      "Writing va Speaking bo‘yicha band deskriptor asosida izoh: nimani birinchi tuzatish kerak, qayerdan ball oshadi — sizga tushunarli tilda.",
  },
  {
    icon: "Clock",
    title: "Ish, o‘qish — jadvalingizga mos",
    description:
      "Qisqa bloklar, istalgan vaqtda qayta ko‘rish. Bo‘sh daqiqangizda ham oldinga siljish oson, «vaqt yo‘q» bahonasi zaiflashadi.",
  },
  {
    icon: "Award",
    title: "General yoki Academic — aralash emas",
    description:
      "Maqsadingizga mos formatni tanlaysiz: keraksiz modullarni tortib yurmasdan, energiyangizni to‘g‘ri joyga qo‘yasiz.",
  },
  {
    icon: "Users",
    title: "O‘zingizga gapirmasdan Speaking oshmaydi",
    description:
      "Video darsdan keyin haqiqiy suhbat va jamoa — til boshda emas, og‘zingizda chiqadi. Jimjit kitob o‘qish emas, jonli mashg‘ulot.",
  },
];

export const COURSE_CATEGORIES = [
  "Hammasi",
  "IELTS",
  "General English",
  "Speaking",
  "Exam Prep",
] as const;

export const COURSES: Course[] = [
  {
    id: "1",
    title: "IELTS General Training — to‘liq tayyorgarlik",
    category: "IELTS",
    instructor: "James Hawes",
    rating: 4.9,
    students: 186,
    price: 54.99,
    originalPrice: 189.99,
    thumbnail: IMG.course.ieltsGen,
    duration: "48 soat",
    lessons: 120,
  },
  {
    id: "2",
    title: "IELTS Academic — Band 7+ intensive",
    category: "IELTS",
    instructor: "Emma Richardson",
    rating: 4.9,
    students: 142,
    price: 59.99,
    originalPrice: 219.99,
    thumbnail: IMG.course.ieltsAc,
    duration: "52 soat",
    lessons: 140,
  },
  {
    id: "3",
    title: "Speaking & Pronunciation Lab",
    category: "Speaking",
    instructor: "Sophie Clarke",
    rating: 4.8,
    students: 98,
    price: 39.99,
    originalPrice: 129.99,
    thumbnail: IMG.course.speaking,
    duration: "24 soat",
    lessons: 72,
  },
  {
    id: "4",
    title: "IELTS Writing: Task 1 & Task 2 mastery",
    category: "IELTS",
    instructor: "David Palmer",
    rating: 4.9,
    students: 213,
    price: 44.99,
    originalPrice: 159.99,
    thumbnail: IMG.course.writing,
    duration: "36 soat",
    lessons: 90,
  },
  {
    id: "5",
    title: "TOEFL iBT — complete preparation",
    category: "Exam Prep",
    instructor: "James Hawes",
    rating: 4.8,
    students: 74,
    price: 49.99,
    originalPrice: 179.99,
    thumbnail: IMG.course.toefl,
    duration: "40 soat",
    lessons: 100,
  },
  {
    id: "6",
    title: "General English — Upper Intermediate (B2–C1)",
    category: "General English",
    instructor: "Emma Richardson",
    rating: 4.7,
    students: 131,
    price: 34.99,
    originalPrice: 119.99,
    thumbnail: IMG.course.general,
    duration: "32 soat",
    lessons: 80,
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: "1",
    name: "James Hawes",
    subject: "IELTS & Exam Skills (Lead Instructor)",
    bio: "Cambridge CELTA, 12+ yildan ortiq IELTS va TOEFL ga tayyorlaydi. Imtihon tekshiruvchi uslubidagi tayyorgarlik: band deskriptorlar, vaqt boshqaruvi va realistik mock testlar.",
    rating: 4.9,
    students: 420,
    avatar: IMG.teacher.t1,
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "2",
    name: "Emma Richardson",
    subject: "Speaking, Pronunciation & Fluency",
    bio: "Britaniya ingliz tili mutaxassisi. Speaking lab va talaffuz darslarini olib boradi. Tuzilgan feedback va mashqlar bilan o‘quvchilarni 6.5–7+ bandga chiqarishga yordam beradi.",
    rating: 4.9,
    students: 310,
    avatar: IMG.teacher.t2,
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "David Palmer",
    subject: "Academic Writing & IELTS Writing",
    bio: "Amaliy lingvistika bo‘yicha magistr. Har yili yuzlab Task 1 va Task 2 inshalarini tekshiradi. Yuqori bandlar uchun bog‘liqlik, savolga javob va lug‘at diapazonini o‘rgatadi.",
    rating: 4.8,
    students: 265,
    avatar: IMG.teacher.t3,
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "4",
    name: "Sophie Clarke",
    subject: "General English & Grammar",
    bio: "CELTA sertifikatli o‘qituvchi (B1–C1). Grammatika va lug‘atni kundalik ingliz va imtihon kontekstlarida mustahkamlaydi — aniq, amaliy, ortiqcha bezak yo‘q.",
    rating: 4.8,
    students: 178,
    avatar: IMG.teacher.t4,
    socials: { twitter: "#", linkedin: "#" },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Oldin: IELTS Writing 6.0, nima noto‘g‘ri — tushunmasdim. Keyin: Task 2 struktura va mentor feedback — 7.5 oldim.",
    rating: 5,
    name: "Dilshod",
    role: "22 yosh · Toshkent",
    course: "IELTS Writing",
    avatar: IMG.student.s1,
  },
  {
    id: "2",
    quote:
      "Oldin: Speakingda «qotib» qolardim. Keyin: haftada 2 marta club + audio feedback — 3 oyda 6.5 dan 7.5 ga.",
    rating: 5,
    name: "Madina",
    role: "19 yosh · Samarqand",
    course: "Speaking Lab",
    avatar: IMG.student.s2,
  },
  {
    id: "3",
    quote:
      "Oldin: IELTS General kerak edi, lekin Academic bilan aralashardi. Keyin: alohida General yo‘l — Listening/Reading aniq bo‘ldi.",
    rating: 5,
    name: "Javohir",
    role: "28 yosh · Namangan",
    course: "IELTS General",
    avatar: IMG.student.s3,
  },
  {
    id: "4",
    quote:
      "Oldin: ota-onam onlayn ingliz tiliga ishonmasdi. Keyin: mock natijalar va mentor yozishma — ular ham ko‘rdi, band oshdi.",
    rating: 4,
    name: "Nilufar",
    role: "17 yosh · Farg‘ona",
    course: "IELTS Academic",
    avatar: IMG.student.s4,
  },
  {
    id: "5",
    quote:
      "Oldin: TOEFL format noaniq edi. Keyin: section-by-section mock — 6 haftada maqsad ballga yetdim.",
    rating: 5,
    name: "Behzod",
    role: "31 yosh · Qo‘qon",
    course: "TOEFL iBT",
    avatar: IMG.student.s5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Boshlang‘ich",
    description:
      "IELTS bilan tanishish va mustaqil mashq — cheklangan mentor javoblari.",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      "General English va kirish modullari",
      "Cheklangan mock testlar",
      "Forumda savollar",
      "Email orqali yordam",
      "Mobil qurilmadan kirish",
    ],
    highlighted: false,
    cta: "Boshlash",
  },
  {
    name: "Pro",
    description:
      "IELTS/TOEFL uchun asosiy tanlov: Writing/Speaking feedback va ko‘proq mock.",
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      "Barcha IELTS va Exam Prep kurslari",
      "Oyiga bir nechta Writing tekshiruvi",
      "Speaking audio feedback",
      "Ustuvor yozishmalar",
      "Darslarni oflayn yuklash",
      "Mock test tahlili",
      "Band maqsad bo‘yicha yo‘l-xarita",
    ],
    highlighted: true,
    cta: "Proga o‘tish",
  },
  {
    name: "VIP",
    description:
      "Qisqa muddatda band oshirish: shaxsiy reja va chuqur Writing/Speaking kuzatuv.",
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      "Pro’dagi hamma narsa",
      "Shaxsiy IELTS rejasi",
      "Tez-tez essay va Speaking tekshiruvi",
      "Mentor bilan mini-sessiyalar",
      "Maxsus materiallar",
      "Sertifikat / progress hisoboti",
      "Jamoa uchun alohida shartlar",
    ],
    highlighted: false,
    cta: "Bog‘lanish",
  },
];

export const PRICING_UI = {
  /** Kartadagi nom bilan takrorlanmasin */
  badgePopular: "Eng ko‘p tanlangan",
  monthly: "Oyiga",
  yearly: "Yiliga",
  saveBadge: "20% tejaysiz",
  perMonth: "oy",
  perYear: "yil",
} as const;

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "IELTS General va Academic farqi nima?",
    answer:
      "General odatda immigratsiya va ish uchun, Academic esa universitet uchun. Siz bizda mos guruhni tanlaysiz — darslar va mock testlar shu formatga mos.",
  },
  {
    question: "Ingliz tili darajam past — boshlash mumkinmi?",
    answer:
      "Ha. Avval General English yoki kirish modullari bilan boshlaysiz, keyin IELTS intensivega o‘tasiz — ketma-ketlik aniq.",
  },
  {
    question: "Speaking va Writing qanday tekshiriladi?",
    answer:
      "Siz audio yoki matn yuborasiz, mentor band descriptor bo‘yicha qaytaradi. Pro va VIP da tez-tekshiruv ko‘proq.",
  },
  {
    question: "Qancha vaqt band ochish mumkin?",
    answer:
      "Individual. Ko‘pchilik haftasiga 5–8 soat bilan 2–4 oy ichida sezilarli o‘sish ko‘radi — mock natijalar bilan kuzatiladi.",
  },
  {
    question: "Agar kurs mos kelmasa?",
    answer:
      "Tarif shartlarida ko‘rsatilgan muddat ichida bekor yoki boshqa kursga o‘tish imkoniyati bor.",
  },
  {
    question: "Sertifikat beriladimi?",
    answer:
      "Platforma tugatish sertifikati mavjud. Asosiy maqsad esa IELTS/TOEFL balli — mock va real imtihon natijalari muhim.",
  },
  {
    question: "To‘lov usullari?",
    answer:
      "Karta va boshqa mahalliy qulay usullar — aniq ro‘yxat ro‘yxatdan o‘tganda beriladi.",
  },
  {
    question: "Bitirgach ham materiallarga kirish bormi?",
    answer:
      "Ha, tarifga qarab ma’lum muddatga yozuvlar va mock arxiviga kirish saqlanadi.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: "Toshkent sh., Navoiy ko‘chasi, 12 («Ezyly» ingliz tili markazi)",
  phone: "+998 90 123 45 67",
  email: "hello@ezyly.uz",
  hours: "Dush–Juma: 09:00–18:00",
};

export const FOOTER_LINKS = {
  about: [
    { label: "Biz haqimizda", href: "#" },
    { label: "Jamoa", href: "#teachers" },
    { label: "Vakansiyalar", href: "#" },
    { label: "Matbuot", href: "#" },
  ],
  courses: [
    { label: "IELTS General", href: "#courses" },
    { label: "IELTS Academic", href: "#courses" },
    { label: "Speaking Lab", href: "#courses" },
    { label: "TOEFL iBT", href: "#courses" },
  ],
  company: [
    { label: "Maxfiylik siyosati", href: "#" },
    { label: "Foydalanish shartlari", href: "#" },
    { label: "Cookie", href: "#" },
    { label: "Sayt xaritasi", href: "#" },
  ],
};

export const FOOTER_UI = {
  aboutTitle: "Haqimizda",
  coursesTitle: "Yo‘nalishlar",
  newsletterTitle: "Yangiliklar",
  newsletterText:
    "IELTS yangi guruhlari va chegirmalar — birinchi bo‘lib bilib oling.",
  emailPlaceholder: "Email manzilingiz",
  subscribeAria: "Obuna",
  rights: "Barcha huquqlar himoyalangan.",
} as const;

export const CTA_SECTION = {
  badge:
    "Bugun 23:59 gacha: birinchi oyda 20% chegirma (yangi o‘quvchilar uchun)",
  title: "IELTS bandingizni keyingi bosqichga olib chiqing",
  subtitle:
    "Har hafta yangi o‘quvchilar qo‘shilmoqda — bu oygi guruhda joylar cheklangan. Bepul sinov darsidan boshlang.",
  ctaPrimary: "Tarifni tanlash",
  ctaSecondary: "IELTS kurslarini ko‘rish",
} as const;

export const EXIT_LEAD_POPUP = {
  title: "Ketmay turib — 1 daqiqa",
  description:
    "Sizga «7 kunlik IELTS mini-reja + Writing checklist»ni bepul yuboramiz: Task 1/2 struktura, haftalik mock rejasi.",
  hint: "Spam yo‘q. Faqat foydali 3–5 xabar.",
  emailLabel: "Email yoki Telegram",
  emailPlaceholder: "@username yoki siz@email.com",
  submit: "Checklistni olish",
  close: "Yopish",
} as const;

export const SECTION_COPY = {
  features: {
    badge: "Nega aynan biz?",
    title: "Natija uchun nima kerak bo‘lsa — shu yo‘l bilan beramiz",
    subtitle:
      "Tizim, mock va mentor bir joyda. Tushunarli reja, ortiqcha chalkashlik yo‘q — band ochish uchun nimalar qilish kerakligini bilasiz.",
  },
  courses: {
    badge: "IELTS va ingliz tili",
    title: "IELTS General, Academic va boshqalar",
    subtitle:
      "IELTS General Training dan tortib TOEFL va General English gacha — filtrlab tanlang.",
    viewAll: "Barcha kurslar",
  },
  teachers: {
    badge: "Native-level mentors",
    title: "Kim bilan o‘rganasiz",
    subtitle:
      "Cambridge CELTA, IELTS/TOEFL tajribasi — bio va metodika ingliz tilida (marketing uchun aniq).",
  },
  testimonials: {
    badge: "Natijalar",
    title: "Band va fikrlar",
    subtitle:
      "IELTS, Speaking va TOEFL bo‘yicha — o‘zbek talabalarning qisqa tarixlari.",
  },
  pricing: {
    badge: "Tariflar",
    title: "IELTS yo‘lida qaysi daraja kerak?",
    subtitle:
      "Kirishdan chuqur feedbackgacha — kerakli tarifni tanlang, keyin yangilang.",
  },
  faq: {
    badge: "Savol-javob",
    title: "IELTS va ingliz tili haqida",
    subtitle:
      "Ro‘yxatdan oldin eng ko‘p so‘raladigan savollar — qisqa va aniq.",
  },
  contact: {
    badge: "Aloqa",
    title: "Kurs yoki band bo‘yicha yozing",
    subtitle:
      "IELTS General/Academic, Speaking yoki tarif — javob tez, maslahat bepul.",
  },
} as const;

export const CONTACT_FORM = {
  name: "Ism",
  email: "Email",
  phone: "Telefon (ixtiyoriy)",
  message: "Xabar",
  namePh: "Ismingiz",
  emailPh: "siz@email.com",
  phonePh: "+998 90 000 00 00",
  messagePh: "Qaysi kurs yoki IELTS band maqsadi?",
  sending: "Yuborilmoqda…",
  submit: "Xabar yuborish",
  follow: "Ijtimoiy tarmoqlar",
  mapTitle: "Xarita (tez orada)",
} as const;

export const COURSE_CARD_UI = {
  by: "mentor:",
  discount: "CHEGIRMA",
  enroll: "Yozilish",
} as const;
