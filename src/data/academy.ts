export type Language = 'en' | 'ur';

export const ACADEMY_CONFIG = {
  whatsappNumber: '923000000000',
  whatsappDisplay: '+92 300 0000000',
  email: 'info@noorquran-placeholder.org',
} as const;

export const ROUTES = {
  home: '/',
  courses: '/courses',
  courseDetail: '/course-detail',
  readQuran: '/read-quran',
  tafseer: '/tafseer',
  teachers: '/teachers',
  fees: '/fees',
  freeTrial: '/free-trial',
  onlineClasses: '/online-classes',
  homeTuition: '/home-tuition',
  about: '/about',
  contact: '/contact',
  faqs: '/faqs',
  privacy: '/privacy',
  terms: '/terms',
  studentDashboard: '/student-dashboard',
} as const;

export const IMAGES = {
  heroQuranStudy:
    'https://lh3.googleusercontent.com/aida/ALJJyrCf-PZeuHZLTPvK86evzcYhl9ZfiGhGf9KFG6c2-wxAF54hGeCwo-Fqf1muBubzliEccp-mkOcuFZ87P3PNyjULhudC7ooAO48I_0TjPrukid03cCDf08LRTjUZ1e3MfIKr_63mXcVup-Hy_wfHK98aZ4h8_IfLr-BK69BPB459HGaD2WWSPIVEDlJZ3pGkyvFMDe7bcNPftCRLTxdNIS0OAUzG4TmrgAUDmMzRGNxiPt5oEOOQ2ebLKSw',
  onlineClassLearning:
    'https://lh3.googleusercontent.com/aida/ALJJyrBVYdg4OdgKQib7-AI-69kiMaci2A8vPQuMwmfiAYuxmtnMGqycaEdfrNMg60MTfLaswZs4RxIrOjXyBrVR5ESXhnIoTLkPzzaUz_xS5kJEGhpW8JRD_fr6eZ8IIv2wM-IEKK0jwjGdKVvm4tL4gjnFwpuFaxu6KXzKDwmcWsJpoBXHNUWj-8OV-nhIuU3S2XoYgqJWg9b-Df2ZKRf8wnjEPy9kkRYcLTLJ7uWisswoIsCVrG4i3CO1eqkcZs09OA',
  aboutQuranHeritage:
    'https://lh3.googleusercontent.com/aida/ALJJyrDlrkRFS6I8PZeoMwnPxYPAtYHjpMYKRV4BY6jmZTqeoVEnnXxZKS76VAswnnxehvwau40qAoRZeF843fux-soZpOcYAwW5fK-l4JjMm3hBEbeMHWYjs9Dm857ArL28KUQ45P9G2husfU03IRwZNzWrdwT7YaqWXqPnTYDXYBD7BQ5kUCcdLYFvD7EfAUKlamxWsOvnCrBqW417ZVR8BL1sdQ72D0QfCE2Gl_5cA_QAvMBRMlpOC6FR3h2_whU',
} as const;

export type CourseSlug =
  | 'noorani-qaida'
  | 'nazra-quran'
  | 'hifz-ul-quran'
  | 'quran-with-tajweed'
  | 'quran-with-urdu-translation'
  | 'quran-with-english-translation'
  | 'quran-tafseer';

export const COURSE_ALIASES: Record<string, CourseSlug> = {
  'noorani-qaida': 'noorani-qaida',
  'nazra-quran': 'nazra-quran',
  hifz: 'hifz-ul-quran',
  'hifz-ul-quran': 'hifz-ul-quran',
  tajweed: 'quran-with-tajweed',
  'quran-with-tajweed': 'quran-with-tajweed',
  'urdu-translation': 'quran-with-urdu-translation',
  'quran-with-urdu-translation': 'quran-with-urdu-translation',
  'english-translation': 'quran-with-english-translation',
  'quran-with-english-translation': 'quran-with-english-translation',
  tafseer: 'quran-tafseer',
  'quran-tafseer': 'quran-tafseer',
};

export interface CourseDetailItem {
  slug: CourseSlug;
  tabLabel: Record<Language, string>;
  bookingValue: string;
  level: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  syllabus: Record<Language, string[]>;
  benefits: Record<Language, string[]>;
}

export const COURSE_DATA: Record<CourseSlug, CourseDetailItem> = {
  'noorani-qaida': {
    slug: 'noorani-qaida',
    tabLabel: { en: 'Noorani Qaida', ur: 'نورانی قاعدہ' },
    bookingValue: 'Noorani Qaida',
    level: {
      en: 'Suitable for: Young Children & Beginners',
      ur: 'مناسب: چھوٹے بچے اور مبتدی',
    },
    title: { en: 'Noorani Qaida', ur: 'نورانی قاعدہ' },
    summary: {
      en: 'Foundational course teaching Arabic letters, vowels (Harakat), joining rules, and correct pronunciation from the very first lesson.',
      ur: 'پہلے سبق سے ہی عربی حروف، حرکات، حروف جوڑنے کے قواعد اور درست تلفظ سکھانے کا بنیادی کورس۔',
    },
    syllabus: {
      en: [
        'Recognition of individual and compound Arabic letters',
        'Short vowels (Fatha, Kasra, Damma), Sukoon, and Tanween',
        'Madd, Shaddah, and foundational Makharij (articulation points)',
        'Step-by-step practice reading short Quranic words and verses',
      ],
      ur: [
        'مفرد اور مرکب عربی حروف کی پہچان',
        'حرکات، سکون اور تنوین کی مکمل مشق',
        'مد، تشدید اور بنیادی مخارج',
        'قرآنی الفاظ اور مختصر آیات پڑھنے کی بتدریج مشق',
      ],
    },
    benefits: {
      en: [
        'Builds strong pronunciation habits before starting the Quran',
        'Patient, child-friendly pacing with gentle teacher feedback',
        'Available in 1-on-1 or small group format (max 4 students)',
      ],
      ur: [
        'قرآن شروع کرنے سے پہلے درست تلفظ کی مضبوط بنیاد',
        'بچوں کے مزاج کے مطابق نرم اور صبر آزما تدریس',
        'انفرادی یا 4 طلبہ تک کے مختصر گروپ میں دستیاب',
      ],
    },
  },
  'nazra-quran': {
    slug: 'nazra-quran',
    tabLabel: { en: 'Nazra Quran', ur: 'ناظرہ قرآن' },
    bookingValue: 'Nazra Quran',
    level: { en: 'Suitable for: Children & Adults', ur: 'مناسب: بچے اور بڑے' },
    title: { en: 'Nazra Quran', ur: 'ناظرہ قرآن' },
    summary: {
      en: 'Complete Quran reading from Juz 1 to Juz 30 with steady teacher correction. Can be paired with Tajweed rules upon request.',
      ur: 'پہلے سپارے سے تیسویں سپارے تک استاد کی نگرانی میں مکمل قرآن پڑھنا۔ ضرورت کے مطابق تجوید بھی شامل کی جا سکتی ہے۔',
    },
    syllabus: {
      en: [
        'Guided reading from Juz 1 through Juz 30',
        'Real-time correction of fluency, stops (Waqf), and rhythm',
        'Optional integration of practical Tajweed rules alongside reading',
        'Daily revision of previous lessons for steady retention',
      ],
      ur: [
        'پہلے سپارے سے تیسویں سپارے تک مکمل ناظرہ خوانی',
        'روانی، وقف اور درست ادائیگی کی فوری اصلاح',
        'طالب علم کی ضرورت کے مطابق تجوید کے قواعد کی شمولیت',
        'پچھلے اسباق کی باقاعدہ دہرائی',
      ],
    },
    benefits: {
      en: [
        'Develops confident, fluent Quran recitation',
        'Flexible pacing tailored to children and working adults',
        'Choice of male or female teacher in Urdu or English',
      ],
      ur: [
        'اعتماد اور روانی کے ساتھ تلاوت کی صلاحیت',
        'بچوں اور بڑوں کے لیے موزوں رفتار',
        'اردو یا انگریزی میں مرد یا خاتون استاد کا انتخاب',
      ],
    },
  },
  'hifz-ul-quran': {
    slug: 'hifz-ul-quran',
    tabLabel: { en: 'Hifz-ul-Quran', ur: 'حفظِ قرآن' },
    bookingValue: 'Hifz-ul-Quran',
    level: {
      en: 'Suitable for: Dedicated Children & Adults',
      ur: 'مناسب: شوقین بچے اور بڑے',
    },
    title: { en: 'Hifz-ul-Quran', ur: 'حفظِ قرآن' },
    summary: {
      en: 'Structured Quran memorization (full Quran or selected Surahs) with daily Sabaq, Sabqi, and Manzil revision tracking.',
      ur: 'روزانہ سبق، سبقی اور منزل کے منظم نظام کے ساتھ مکمل قرآن یا منتخب سورتوں کا حفظ۔',
    },
    syllabus: {
      en: [
        'Daily new memorization (Sabaq) tailored to student capacity',
        'Recent revision (Sabqi) to lock in current Juz',
        'Long-term revision (Manzil) for previously memorized Juz',
        'Full Quran Hifz or targeted Surahs (e.g., Juz Amma, Surah Yaseen, Mulk)',
      ],
      ur: [
        'طالب علم کی استعداد کے مطابق روزانہ نیا سبق',
        'حالیہ یاد کیے گئے حصے کی دہرائی (سبقی)',
        'پرانے سپاروں کی پختہ دہرائی (منزل)',
        'مکمل قرآن یا منتخب سورتوں کا حفظ',
      ],
    },
    benefits: {
      en: [
        'Systematic three-tier revision prevents forgetting',
        'Regular progress updates for parents',
        'Adjustable daily duration beyond the 1-hour standard upon request',
      ],
      ur: [
        'تین سطحی دہرائی کا منظم نظام',
        'والدین کو باقاعدہ کارکردگی کی اطلاع',
        'ضرورت کے مطابق کلاس کے وقت میں لچک',
      ],
    },
  },
  'quran-with-tajweed': {
    slug: 'quran-with-tajweed',
    tabLabel: { en: 'Quran with Tajweed', ur: 'قرآن مع تجوید' },
    bookingValue: 'Quran with Tajweed',
    level: {
      en: 'Suitable for: All Levels (Separate or with Nazra)',
      ur: 'مناسب: تمام سطحیں (الگ یا ناظرہ کے ساتھ)',
    },
    title: { en: 'Quran with Tajweed', ur: 'قرآن مع تجوید' },
    summary: {
      en: 'Focused study of Noon Sakinah, Meem Sakinah, Madd, Qalqalah, and Makharij—offered as a separate course or alongside Nazra Quran.',
      ur: 'نون ساکن، میم ساکن، مد، قلقلہ اور مخارج کی عملی مشق—الگ کورس یا ناظرہ قرآن کے ساتھ دستیاب۔',
    },
    syllabus: {
      en: [
        'Articulation points (Makharij al-Huruf) and letter characteristics (Sifaat)',
        'Rules of Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
        'Rules of Meem Sakinah, Qalqalah, Tafkheem, and Tarqeeq',
        'Types of Madd and practical application during live recitation',
      ],
      ur: [
        'مخارج الحروف اور صفاتِ حروف کا تفصیلی مطالعہ',
        'نون ساکن و تنوین کے قواعد (اظہار، ادغام، اقلاب، اخفاء)',
        'میم ساکن، قلقلہ، تفخیم اور ترقیق',
        'مدود کی اقسام اور تلاوت میں عملی مشق',
      ],
    },
    benefits: {
      en: [
        'Can be taken standalone or integrated into Nazra Quran',
        'Corrects subtle pronunciation errors in Salah and daily recitation',
        'Clear explanations in either Urdu or English',
      ],
      ur: [
        'الگ کورس یا ناظرہ کے ساتھ پڑھنے کی سہولت',
        'نماز اور روزمرہ تلاوت کی درستگی',
        'اردو یا انگریزی میں آسان وضاحت',
      ],
    },
  },
  'quran-with-urdu-translation': {
    slug: 'quran-with-urdu-translation',
    tabLabel: { en: 'Urdu Translation', ur: 'اردو ترجمہ' },
    bookingValue: 'Quran with Urdu Translation',
    level: {
      en: 'Suitable for: Urdu-Speaking Youth & Adults',
      ur: 'مناسب: اردو بولنے والے نوجوان اور بڑے',
    },
    title: {
      en: 'Quran with Urdu Translation',
      ur: 'قرآن مع اردو ترجمہ',
    },
    summary: {
      en: 'Word-by-word and contextual Urdu translation so students understand the direct message of the verses they recite.',
      ur: 'لفظ بہ لفظ اور با محاورہ اردو ترجمہ تاکہ طلبہ تلاوت کی جانے والی آیات کا پیغام سمجھ سکیں۔',
    },
    syllabus: {
      en: [
        'Word-by-word Urdu meanings of frequently occurring Quranic vocabulary',
        'Idiomatic Urdu translation following sentence flow',
        'Key themes of each Surah and connection to daily Salah',
        'Interactive Q&A during 1-on-1 or small group sessions',
      ],
      ur: [
        'کثرت سے آنے والے قرآنی الفاظ کے لفظی معنی',
        'سلیس اور با محاورہ اردو ترجمہ',
        'سورتوں کے مرکزی مضامین اور نماز سے تعلق',
        'انفرادی یا مختصر گروپ میں سوال و جواب',
      ],
    },
    benefits: {
      en: [
        'Brings deeper focus (Khushu) to daily prayers',
        'Accessible for Urdu-speaking students worldwide',
        'Builds foundational Quranic Arabic vocabulary',
      ],
      ur: [
        'نماز میں خشوع و خضوع پیدا ہوتا ہے',
        'دنیا بھر میں اردو بولنے والے طلبہ کے لیے موزوں',
        'قرآنی عربی الفاظ کی پہچان میں مدد',
      ],
    },
  },
  'quran-with-english-translation': {
    slug: 'quran-with-english-translation',
    tabLabel: { en: 'English Translation', ur: 'انگریزی ترجمہ' },
    bookingValue: 'Quran with English Translation',
    level: {
      en: 'Suitable for: English-Speaking Youth & Adults',
      ur: 'مناسب: انگریزی بولنے والے طلبہ',
    },
    title: {
      en: 'Quran with English Translation',
      ur: 'قرآن مع انگریزی ترجمہ',
    },
    summary: {
      en: 'Accessible English translation designed for international students in the UK, USA, Canada, Europe, and English-medium learners.',
      ur: 'برطانیہ، امریکہ، کینیڈا، یورپ اور انگریزی میڈیم طلبہ کے لیے مستند اور آسان فہم انگریزی ترجمہ۔',
    },
    syllabus: {
      en: [
        'Clear, accurate English translation of Quranic verses',
        'Key Arabic root words and recurring Quranic expressions',
        'Understanding Surah themes and moral guidance',
        'Discussion-friendly pacing for youth and adult learners',
      ],
      ur: [
        'قرآنی آیات کا واضح اور مستند انگریزی ترجمہ',
        'اہم عربی الفاظ اور اصطلاحات کا فہم',
        'سورتوں کے بنیادی پیغام اور اخلاقی رہنمائی',
        'نوجوانوں اور بڑوں کے لیے موزوں رفتار',
      ],
    },
    benefits: {
      en: [
        'Ideal for diaspora families raising children in English-speaking countries',
        'Connects recitation directly with comprehension',
        'Flexible scheduling across UK, US, Canada, and EU timezones',
      ],
      ur: [
        'بیرونِ ملک مقیم خاندانوں کے لیے بہترین',
        'تلاوت کو فہمِ قرآن سے جوڑتا ہے',
        'برطانیہ، امریکہ، کینیڈا اور یورپ کے اوقات کے مطابق شیڈول',
      ],
    },
  },
  'quran-tafseer': {
    slug: 'quran-tafseer',
    tabLabel: { en: 'Quran Tafseer', ur: 'تفسیرِ قرآن' },
    bookingValue: 'Quran Tafseer',
    level: {
      en: 'Suitable for: Adults & Advanced Learners',
      ur: 'مناسب: بڑے اور اعلیٰ سطح کے طلبہ',
    },
    title: { en: 'Quran Tafseer', ur: 'تفسیرِ قرآن' },
    summary: {
      en: 'In-depth explanation of Quranic verses, historical context (Asbab al-Nuzul), and practical guidance for applying the Quran in daily life.',
      ur: 'آیاتِ قرآنی کی گہری تشریح، شانِ نزول اور عملی زندگی میں قرآن پر عمل کی رہنمائی—اردو یا انگریزی میں دستیاب۔',
    },
    syllabus: {
      en: [
        'Verse-by-verse explanation and thematic connections',
        'Historical context (Asbab al-Nuzul) where applicable',
        'Practical lessons for family life, character, and worship',
        'Available in Urdu or English in 1-on-1 or small groups (max 4)',
      ],
      ur: [
        'آیت بہ آیت تشریح اور آیات کا باہمی ربط',
        'شانِ نزول اور تاریخی پس منظر',
        'خاندانی زندگی، اخلاق اور عبادات کے لیے عملی اسباق',
        'اردو یا انگریزی میں انفرادی یا 4 طلبہ کے گروپ میں دستیاب',
      ],
    },
    benefits: {
      en: [
        'Deepens understanding beyond literal translation',
        'Respectful, thoughtful discussion with dedicated teachers',
        'See our dedicated Quran Tafseer page for full program options',
      ],
      ur: [
        'لفظی ترجمے سے بڑھ کر گہرا فہم',
        'اساتذہ کے ساتھ بامقصد علمی گفتگو',
        'مکمل تفصیلات کے لیے ہمارا تفسیرِ قرآن صفحہ دیکھیں',
      ],
    },
  },
};

export type SurahKey = 'fatiha' | 'ikhlas' | 'falaq' | 'nas';

export interface AyahItem {
  num: number;
  ar: string;
  ur: string;
  en: string;
}

export interface SurahItem {
  key: SurahKey;
  optionLabel: string;
  title: string;
  audioUrl: string;
  ayahs: AyahItem[];
}

export const SURAH_DATA: Record<SurahKey, SurahItem> = {
  fatiha: {
    key: 'fatiha',
    optionLabel: '1. Al-Fatiha (The Opening) — الفاتحہ',
    title: 'Surah Al-Fatiha (The Opening) — سورۃ الفاتحہ',
    audioUrl: 'https://server8.mp3quran.net/afs/001.mp3',
    ayahs: [
      {
        num: 1,
        ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        ur: 'اللہ کے نام سے جو بے حد مہربان نہایت رحم والا ہے۔',
        en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      },
      {
        num: 2,
        ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        ur: 'سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا رب ہے۔',
        en: 'All praise is due to Allah, Lord of the worlds.',
      },
      {
        num: 3,
        ar: 'الرَّحْمَٰنِ الرَّحِيمِ',
        ur: 'بے حد مہربان نہایت رحم والا۔',
        en: 'The Entirely Merciful, the Especially Merciful.',
      },
      {
        num: 4,
        ar: 'مَالِكِ يَوْمِ الدِّينِ',
        ur: 'بدلے کے دن کا مالک۔',
        en: 'Sovereign of the Day of Recompense.',
      },
      {
        num: 5,
        ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ur: 'ہم تیری ہی عبادت کرتے ہیں اور تجھی سے مدد مانگتے ہیں۔',
        en: 'It is You we worship and You we ask for help.',
      },
      {
        num: 6,
        ar: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        ur: 'ہمیں سیدھے راستے کی ہدایت عطا فرما۔',
        en: 'Guide us to the straight path.',
      },
      {
        num: 7,
        ar: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        ur: 'ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔',
        en: 'The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.',
      },
    ],
  },
  ikhlas: {
    key: 'ikhlas',
    optionLabel: '112. Al-Ikhlas (The Sincerity) — الاخلاص',
    title: 'Surah Al-Ikhlas (The Sincerity) — سورۃ الاخلاص',
    audioUrl: 'https://server8.mp3quran.net/afs/112.mp3',
    ayahs: [
      {
        num: 1,
        ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        ur: 'کہہ دیجیے کہ وہ اللہ ایک ہے۔',
        en: 'Say, He is Allah, [who is] One.',
      },
      {
        num: 2,
        ar: 'اللَّهُ الصَّمَدُ',
        ur: 'اللہ بے نیاز ہے۔',
        en: 'Allah, the Eternal Refuge.',
      },
      {
        num: 3,
        ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ur: 'نہ اس سے کوئی پیدا ہوا اور نہ وہ کسی سے پیدا ہوا۔',
        en: 'He neither begets nor is born.',
      },
      {
        num: 4,
        ar: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        ur: 'اور اس کا کوئی ہمسر نہیں۔',
        en: 'Nor is there to Him any equivalent.',
      },
    ],
  },
  falaq: {
    key: 'falaq',
    optionLabel: '113. Al-Falaq (The Daybreak) — الفلق',
    title: 'Surah Al-Falaq (The Daybreak) — سورۃ الفلق',
    audioUrl: 'https://server8.mp3quran.net/afs/113.mp3',
    ayahs: [
      {
        num: 1,
        ar: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        ur: 'کہہ دیجیے میں صبح کے رب کی پناہ مانگتا ہوں۔',
        en: 'Say, I seek refuge in the Lord of daybreak.',
      },
      {
        num: 2,
        ar: 'مِن شَرِّ مَا خَلَقَ',
        ur: 'ہر اس چیز کے شر سے جو اس نے پیدا کی۔',
        en: 'From the evil of that which He created.',
      },
      {
        num: 3,
        ar: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        ur: 'اور اندھیری رات کے شر سے جب وہ چھا جائے۔',
        en: 'And from the evil of darkness when it settles.',
      },
      {
        num: 4,
        ar: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        ur: 'اور گرہوں میں پھونک مارنے والیوں کے شر سے۔',
        en: 'And from the evil of the blowers in knots.',
      },
      {
        num: 5,
        ar: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        ur: 'اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔',
        en: 'And from the evil of an envier when he envies.',
      },
    ],
  },
  nas: {
    key: 'nas',
    optionLabel: '114. An-Nas (Mankind) — الناس',
    title: 'Surah An-Nas (Mankind) — سورۃ الناس',
    audioUrl: 'https://server8.mp3quran.net/afs/114.mp3',
    ayahs: [
      {
        num: 1,
        ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        ur: 'کہہ دیجیے میں لوگوں کے رب کی پناہ مانگتا ہوں۔',
        en: 'Say, I seek refuge in the Lord of mankind.',
      },
      {
        num: 2,
        ar: 'مَلِكِ النَّاسِ',
        ur: 'لوگوں کے بادشاہ کی۔',
        en: 'The Sovereign of mankind.',
      },
      {
        num: 3,
        ar: 'إِلَٰهِ النَّاسِ',
        ur: 'لوگوں کے معبود کی۔',
        en: 'The God of mankind.',
      },
      {
        num: 4,
        ar: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        ur: 'وسوسہ ڈالنے والے پیچھے ہٹ جانے والے کے شر سے۔',
        en: 'From the evil of the retreating whisperer.',
      },
      {
        num: 5,
        ar: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        ur: 'جو لوگوں کے سینوں میں وسوسے ڈالتا ہے۔',
        en: 'Who whispers [evil] into the breasts of mankind.',
      },
      {
        num: 6,
        ar: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        ur: 'جنوں اور انسانوں میں سے۔',
        en: 'From among the jinn and mankind.',
      },
    ],
  },
};

export type AiQuestionKey = 'courses' | 'teachers' | 'trial' | 'timings' | 'apps' | 'fees';

export const AI_COPY = {
  en: {
    fab: 'Ask AI Assistant',
    title: 'Noor Quran AI Assistant',
    subtitle: 'English & اردو Support',
    welcome: 'Assalamu Alaikum! Welcome to Noor Quran Learning Academy. How can I help you today?',
    suggestLabel: 'Suggested questions:',
    placeholder: 'Type your question...',
    trialBtn: 'Book Free Trial',
    waBtn: 'WhatsApp',
    emailBtn: 'Email',
    q: {
      courses: 'Which Quran courses do you offer?',
      teachers: 'Do you have male and female teachers?',
      trial: 'How can I book a free trial?',
      timings: 'What are your class timings?',
      apps: 'Which apps do you use for online classes?',
      fees: 'How can I get fee details?',
    },
    a: {
      courses:
        'We offer 7 courses in Urdu & English: Noorani Qaida, Nazra Quran, Hifz-ul-Quran, Quran with Tajweed (separate or with Nazra), Quran with Urdu Translation, Quran with English Translation, and Quran Tafseer.',
      teachers:
        'Yes! We currently have 1 male teacher and 2 female teachers. You can select your preferred teacher in the Free Trial Booking form. Teacher qualifications and profiles are placeholders until real details are added.',
      trial:
        'You can request a 3-day free trial using the Book Free Trial button below. Please note that submitting the form does not automatically confirm the booking—our academy will contact you to confirm teacher availability and schedule.',
      timings:
        'Regular classes run 4 days per week for 1 hour (shorter or longer durations can be requested). Friday, Saturday, and Sunday are regular off days, though classes may be arranged if both student and teacher agree.',
      apps:
        'We conduct online classes via WhatsApp, IMO, Zoom, and Google Meet. Class details are shared directly once your schedule is confirmed by the academy.',
      fees:
        "We do not display fixed fees online. Fees depend on the course, 1-on-1 or group format (max 4 students), student's country, weekly schedule, and class duration. Please contact us via WhatsApp or Email for fee details.",
      fallback:
        'I cannot confirm specific fees, teacher credentials, or live slot availability here. Please contact Noor Quran Learning Academy directly via WhatsApp or Email below, and our coordinator will be happy to assist you.',
    },
  },
  ur: {
    fab: 'اے آئی اسسٹنٹ سے پوچھیں',
    title: 'نور قرآن اے آئی اسسٹنٹ',
    subtitle: 'انگریزی اور اردو سپورٹ',
    welcome: 'السلام علیکم! نور قرآن لرننگ اکیڈمی میں خوش آمدید۔ آج میں آپ کی کیا مدد کر سکتا ہوں؟',
    suggestLabel: 'تجویز کردہ سوالات:',
    placeholder: 'اپنا سوال لکھیں...',
    trialBtn: 'مفت ٹرائل بک کریں',
    waBtn: 'واٹس ایپ',
    emailBtn: 'ای میل',
    q: {
      courses: 'آپ کون سے قرآن کورسز کراتے ہیں؟',
      teachers: 'کیا آپ کے پاس مرد اور خواتین اساتذہ ہیں؟',
      trial: 'میں مفت ٹرائل کیسے بک کر سکتا ہوں؟',
      timings: 'آپ کی کلاسز کے اوقات کیا ہیں؟',
      apps: 'آن لائن کلاسز کے لیے کون سی ایپس استعمال ہوتی ہیں؟',
      fees: 'فیس کی تفصیلات کیسے معلوم ہوں گی؟',
    },
    a: {
      courses:
        'ہم اردو اور انگریزی میں 7 کورسز کراتے ہیں: نورانی قاعدہ، ناظرہ قرآن، حفظِ قرآن، قرآن مع تجوید (الگ یا ناظرہ کے ساتھ)، اردو ترجمہ، انگریزی ترجمہ اور تفسیرِ قرآن۔',
      teachers:
        'جی ہاں! ہمارے پاس فی الحال 1 مرد استاد اور 2 خواتین اساتذہ موجود ہیں۔ آپ مفت ٹرائل فارم میں اپنی پسند کے استاد کا انتخاب کر سکتے ہیں۔',
      trial:
        "آپ نیچے دیے گئے 'مفت ٹرائل بک کریں' بٹن سے 3 دن کے مفت ٹرائل کی درخواست دے سکتے ہیں۔ فارم جمع کرانے سے بکنگ خودکار طور پر پکی نہیں ہوتی، اکیڈمی دستیابی کی تصدیق کے لیے رابطہ کرے گی۔",
      timings:
        'باقاعدہ کلاسز ہفتے میں 4 دن اور معیاری دورانیہ 1 گھنٹہ ہے۔ جمعہ، ہفتہ اور اتوار عام تعطیل ہوتی ہے، تاہم باہمی اتفاق سے کلاس رکھی جا سکتی ہے۔',
      apps:
        'آن لائن کلاسز واٹس ایپ، ایمو، زوم اور گوگل میٹ پر ہوتی ہیں۔ شیڈول کی تصدیق کے بعد کلاس کی تفصیلات آپ کو بھیج دی جائیں گی۔',
      fees:
        'ہم مقررہ فیس شائع نہیں کرتے۔ فیس کورس، انفرادی یا گروپ کلاس، ملک، ہفتہ وار شیڈول اور دورانیے پر منحصر ہے۔ تفصیلات کے لیے واٹس ایپ یا ای میل پر رابطہ کریں۔',
      fallback:
        'میں یہاں فیس، اساتذہ کی اسناد یا وقت کی دستیابی کی حتمی تصدیق نہیں کر سکتا۔ براہ کرم نیچے واٹس ایپ یا ای میل کے ذریعے اکیڈمی سے براہِ راست رابطہ کریں۔',
    },
  },
} as const;

export interface TrialSubmission {
  id: string;
  submittedAt: string;
  studentName: string;
  studentAge: string;
  parentName: string;
  country: string;
  whatsapp: string;
  email: string;
  course: string;
  preferredLanguage: string;
  preferredTeacher: string;
  classType: string;
  preferredDays: string;
  preferredTime: string;
  preferredApp: string;
  notes: string;
}

export interface HomeTuitionSubmission {
  id: string;
  submittedAt: string;
  name: string;
  phone: string;
  location: string;
  details: string;
}

export interface ContactSubmission {
  id: string;
  submittedAt: string;
  name: string;
  contact: string;
  topic: string;
  message: string;
}

const STORAGE_KEYS = {
  trials: 'noor_trial_requests',
  homeTuition: 'noor_home_tuition_requests',
  contacts: 'noor_contact_messages',
} as const;

function readStorageArray<T>(key: string): T[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function appendStorageItem<T>(key: string, item: T): void {
  try {
    const existing = readStorageArray<T>(key);
    existing.unshift(item);
    window.localStorage.setItem(key, JSON.stringify(existing.slice(0, 20)));
  } catch {
    // Ignore storage quota or private mode failures
  }
}

export function saveTrialSubmission(data: Omit<TrialSubmission, 'id' | 'submittedAt'>): TrialSubmission {
  const entry: TrialSubmission = {
    ...data,
    id: `TR-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
  };
  appendStorageItem(STORAGE_KEYS.trials, entry);
  return entry;
}

export function getTrialSubmissions(): TrialSubmission[] {
  return readStorageArray<TrialSubmission>(STORAGE_KEYS.trials);
}

export function saveHomeTuitionSubmission(
  data: Omit<HomeTuitionSubmission, 'id' | 'submittedAt'>
): HomeTuitionSubmission {
  const entry: HomeTuitionSubmission = {
    ...data,
    id: `HT-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
  };
  appendStorageItem(STORAGE_KEYS.homeTuition, entry);
  return entry;
}

export function getHomeTuitionSubmissions(): HomeTuitionSubmission[] {
  return readStorageArray<HomeTuitionSubmission>(STORAGE_KEYS.homeTuition);
}

export function saveContactSubmission(
  data: Omit<ContactSubmission, 'id' | 'submittedAt'>
): ContactSubmission {
  const entry: ContactSubmission = {
    ...data,
    id: `CT-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
  };
  appendStorageItem(STORAGE_KEYS.contacts, entry);
  return entry;
}

export function getContactSubmissions(): ContactSubmission[] {
  return readStorageArray<ContactSubmission>(STORAGE_KEYS.contacts);
}
