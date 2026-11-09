
export type UrduDeletion2027 = {
  lessonNumber: number;
  section: "prose" | "poetry" | "ghazal";
  title: string;
  titleUrdu: string;
  author: string;
  pageRange: string;
  excludedContent: string[];
  examNote: string;
};

export const urdu2027Deletions: UrduDeletion2027[] = [
  {
    lessonNumber: 9,
    section: "prose",
    title: "Ibtidai Hisab",
    titleUrdu: "ابتدائی حساب",
    author: "Ibn-e-Insha",
    pageRange: "69–76",
    excludedContent: [
      "Complete prose lesson",
      "All objective questions from this lesson",
      "All subjective questions from this lesson",
      "All other examination question types from this lesson",
    ],
    examNote:
      "Complete lesson excluded from Annual Examination 2027.",
  },
  {
    lessonNumber: 11,
    section: "prose",
    title: "Bheriya",
    titleUrdu: "بھیڑیا",
    author: "Farooq Sarwar",
    pageRange: "86–93",
    excludedContent: [
      "Complete prose lesson",
      "All objective questions from this lesson",
      "All subjective questions from this lesson",
      "All other examination question types from this lesson",
    ],
    examNote:
      "Complete lesson excluded from Annual Examination 2027.",
  },
  {
    lessonNumber: 15,
    section: "poetry",
    title: "Cricket aur Mushaira",
    titleUrdu: "کرکٹ اور مشاعرہ",
    author: "Dilawar Figar",
    pageRange: "111–117",
    excludedContent: [
      "Complete poem",
      "All objective questions from this poem",
      "All subjective questions from this poem",
      "All other examination question types from this poem",
    ],
    examNote:
      "Complete poem excluded from Annual Examination 2027.",
  },
  {
    lessonNumber: 17,
    section: "ghazal",
    title: "Sun To Sahi Jahan Mein Hai Tera Fasana Kya",
    titleUrdu: "سُن تو سہی جہاں میں ہے تیرا فسانہ کیا",
    author: "Khwaja Haidar Ali Aatish",
    pageRange: "122–126",
    excludedContent: [
      "Complete ghazal",
      "All objective questions from this ghazal",
      "All subjective questions from this ghazal",
      "All other examination question types from this ghazal",
    ],
    examNote:
      "Complete ghazal excluded from Annual Examination 2027.",
  },
];

export const urdu2027AdditionalExclusions = [
  {
    title: "Authors and Poets Introductions",
    titleUrdu: "مصنفین اور شعرا کے تعارف",
    examNote:
      "Board examination mein authors aur poets ke introductions se kisi qisam ka sawal nahi poocha jayega.",
  },
] as const;

export const urdu2027DeletionSummary = {
  totalBookLessons: 19,
  fullyExcludedLessons: 4,
  retainedLessons: 15,
  excludedSections: {
    prose: 2,
    poetry: 1,
    ghazal: 1,
  },
  authorsAndPoetsIntroductionsExcluded: true,
} as const;

export const urdu2027DeletionSource = {
  notification: "PECTAA/C&C Unit/2026/1238",
  date: "6 November 2026",
  session: "2026–27",
  examination: "Annual Examination 2027",
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  secondaryReferences: [
    "https://www.prepsure.pk/smart-syllabus/class-9/urdu",
    "https://punjabtest.com/class-9-urdu-smart-syllabus-2027",
    "https://freebooks.pk/smart-syllabus/urdu-class-9-smart-syllabus-2027/",
  ],
  verification:
    "Four excluded lessons and their page ranges are cross-referenced against available 2027 syllabus reproductions. Direct original PECTAA PDF visual verification remains pending.",
} as const;
