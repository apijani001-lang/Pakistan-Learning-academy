
export type UrduLesson2027 = {
  number: number;
  title: string;
  titleUrdu: string;
  author: string;
  page: string;
  examStatus: "included" | "fully-excluded";
  examNote: string;
};

export const urdu2027Info = {
  session: "2026–27",
  examination: "Annual Examination 2027",
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",
  totalLessons: 19,
  examinableLessons: 15,
  fullyExcludedLessons: 4,
  authorIntroductionsExcluded: true,
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  verificationNote:
    "Four fully excluded lessons and their textbook page ranges are transcribed from available 2027 syllabus reproductions. Complete textbook contents and all retained lesson titles still require verification against the current official textbook.",
};

export const urduExcludedLessons2027: UrduLesson2027[] = [
  {
    number: 9,
    title: "Ibtidai Hisab",
    titleUrdu: "ابتدائی حساب",
    author: "Ibn-e-Insha",
    page: "69–76",
    examStatus: "fully-excluded",
    examNote: "Complete lesson excluded from Annual Examination 2027.",
  },
  {
    number: 11,
    title: "Bheriya",
    titleUrdu: "بھیڑیا",
    author: "Farooq Sarwar",
    page: "86–93",
    examStatus: "fully-excluded",
    examNote: "Complete lesson excluded from Annual Examination 2027.",
  },
  {
    number: 15,
    title: "Cricket aur Mushaira",
    titleUrdu: "کرکٹ اور مشاعرہ",
    author: "Dilawar Figar",
    page: "111–117",
    examStatus: "fully-excluded",
    examNote: "Complete lesson excluded from Annual Examination 2027.",
  },
  {
    number: 17,
    title: "Sun To Sahi Jahan Mein Hai Tera Fasana Kya",
    titleUrdu: "سُن تو سہی جہاں میں ہے تیرا فسانہ کیا",
    author: "Khwaja Haidar Ali Aatish",
    page: "122–126",
    examStatus: "fully-excluded",
    examNote: "Complete ghazal excluded from Annual Examination 2027.",
  },
];

export const urdu2027GeneralExclusions = [
  "Authors and poets introductions are not to be included in board examination questions.",
] as const;

export const urdu2027Source = {
  officialNotification: "PECTAA/C&C Unit/2026/1238",
  officialDate: "6 November 2026",
  officialUrl: "https://pectaa.edu.pk/downloads-2-2/",
  transcriptionSources: [
    "https://www.prepsure.pk/smart-syllabus/class-9/urdu",
    "https://freebooks.pk/smart-syllabus/urdu-class-9-smart-syllabus-2027/",
  ],
  verification:
    "The four excluded lessons and page ranges are cross-referenced against available secondary reproductions. Direct visual verification of the original PECTAA PDF and the complete current textbook contents remains pending.",
} as const;
