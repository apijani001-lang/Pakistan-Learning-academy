
export type IslamiatDeletion2027 = {
  chapter: number;
  category: string;
  categoryUrdu: string;
  excludedTopics: string[];
  examNote: string;
};

export const islamiyat2027Deletions: IslamiatDeletion2027[] = [
  {
    chapter: 1,
    category: "Selected Ahadith",
    categoryUrdu: "منتخب احادیث مبارکہ",
    excludedTopics: [
      "Hadith number 3",
      "Hadith number 6",
      "Hadith number 7",
      "Hadith number 12",
      "Hadith number 14",
    ],
    examNote:
      "In five Ahadith se examination questions aur translation nahi poochi jayegi.",
  },
  {
    chapter: 4,
    category: "Ethics and Manners",
    categoryUrdu: "اخلاق و آداب",
    excludedTopics: [
      "Ikhlas-o-Taqwa — اخلاص و تقویٰ",
      "Parda Poshi — پردہ پوشی",
      "Jhoot — جھوٹ",
      "Gheebat-o-Buhtan — غیبت و بہتان",
      "Jadoo — جادو",
      "Faal aur Tauham Parasti — فال اور توہم پرستی",
    ],
    examNote:
      "Listed topics se objective, subjective ya kisi bhi doosri qisam ka question nahi aayega.",
  },
  {
    chapter: 5,
    category: "Islamic Rulings",
    categoryUrdu: "اسلامی احکام",
    excludedTopics: [
      "Qasam ke Ahkam-o-Masail — قسم کے احکام و مسائل",
      "Islami Riyasat — اسلامی ریاست",
    ],
    examNote:
      "Dono listed topics examination syllabus se excluded hain.",
  },
  {
    chapter: 6,
    category: "Personalities",
    categoryUrdu: "شخصیات",
    excludedTopics: [
      "Sahaba: Hazrat Amr bin Umayyah",
      "Sahaba: Hazrat Abdullah bin Amr bin Al-Aas",
      "Sahaba: Hazrat Jabir bin Abdullah",
      "Sahabiyat: Hazrat Shifa",
      "Sahabiyat: Hazrat Umm-e-Sulaim",
      "Sahabiyat: Hazrat Umm-e-Atiyyah",
      "Sufiya: Hazrat Abul Qasim Qushayri",
      "Sufiya: Sheikh Fariduddin Attar",
      "Sufiya: Hazrat Maulana Abdul Rahman Jami",
      "Ulama-o-Mufakkireen: Imam Shatibi",
      "Ulama-o-Mufakkireen: Imam Jalaluddin Suyuti",
      "Ulama-o-Mufakkireen: Ibn Rushd",
    ],
    examNote:
      "Listed personalities excluded hain. Chapter 6 se detailed question bhi paper ka hissa nahi banega.",
  },
  {
    chapter: 7,
    category: "Complete Chapter",
    categoryUrdu: "مکمل باب",
    excludedTopics: [
      "Khud Aitmaadi aur Khud Inhisari — خود اعتمادی و خود انحصاری",
      "Jismani aur Zehni Sehat aur Jismani Riyazat — جسمانی و ذہنی صحت اور جسمانی ریاضت",
      "Islam mein Mustaqbil ki Mansooba Bandi ki Ahmiyat — اسلام میں مستقبل کی منصوبہ بندی کی اہمیت",
      "Islami Tehzeeb ke Imtiyazat — اسلامی تہذیب کے امتیازات",
      "Complete Chapter 7",
    ],
    examNote:
      "Complete chapter excluded hai. Is chapter se detailed question bhi nahi aayega.",
  },
];

export const islamiyat2027PaperInstructions = [
  {
    title: "Short Questions",
    instruction:
      "Question numbers 2, 3 aur 4 ke short questions sirf textbook exercises mein diye gaye short questions se select honge.",
  },
  {
    title: "Hadith Translation",
    instruction:
      "Translation ke liye sirf Chapter 1 ki 15 selected Ahadith mein se questions poochhe jayenge. Book ke doosre maqamat par di gayi Ahadith ka translation is section mein nahi poochha jayega.",
  },
  {
    title: "Detailed Questions",
    instruction:
      "Chapter 6 aur Chapter 7 se koi detailed question examination paper ka hissa nahi banega.",
  },
] as const;

export const islamiyat2027DeletionSummary = {
  totalAffectedChapters: 5,
  partiallyAffectedChapters: 4,
  fullyExcludedChapters: 1,
  excludedHadithNumbers: [3, 6, 7, 12, 14],
  chapter6DetailedQuestionExcluded: true,
  chapter7DetailedQuestionExcluded: true,
} as const;

export const islamiyat2027DeletionSource = {
  notification: "PECTAA/C&C Unit/2026/1238",
  date: "6 November 2026",
  session: "2026–27",
  examination: "Annual Examination 2027",
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  transcriptionSources: [
    "https://www.prepsure.pk/smart-syllabus/class-9/islamiat",
    "https://punjabtest.com/class-9-islamiyat-smart-syllabus-2027",
  ],
  verification:
    "Deleted topics and paper instructions cross-checked against available reproductions of the 2026–27 PECTAA notification. Direct original PDF visual verification remains pending.",
} as const;
