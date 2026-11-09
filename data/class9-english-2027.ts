
export const english2027Info = {
  subject: "English",
  class: 9,
  academicSession: "2026-27",
  annualExam: 2027,
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",
  totalMarks: 75,
  objectiveMarks: 19,
  subjectiveMarks: 56,
  totalTime: "2 hours 30 minutes",
  totalUnits: 11,
  includedUnits: 8,
  excludedUnits: 3,
  textbookEdition: "Punjab Curriculum and Textbook Board English 9",
  verificationNote:
    "Unit titles and page references are cross-checked against available textbook references. The original PECTAA notification PDF and textbook have not yet been visually verified page by page.",
} as const;

export type EnglishChapter2027 = {
  unit: number;
  title: string;
  pageStart: number;
  pageEnd: number;
  type: "prose" | "poem" | "play";
  examStatus: "included" | "excluded";
  reason?: string;
};

export const englishChapters2027: EnglishChapter2027[] = [
  {
    unit: 1,
    title: "The Saviour of Mankind",
    pageStart: 1,
    pageEnd: 15,
    type: "prose",
    examStatus: "included",
  },
  {
    unit: 2,
    title: "Patriotism",
    pageStart: 16,
    pageEnd: 30,
    type: "prose",
    examStatus: "included",
  },
  {
    unit: 3,
    title: "Daffodils",
    pageStart: 31,
    pageEnd: 48,
    type: "poem",
    examStatus: "included",
  },
  {
    unit: 4,
    title: "Hazrat Asma",
    pageStart: 49,
    pageEnd: 57,
    type: "prose",
    examStatus: "included",
  },
  {
    unit: 5,
    title: "Women Empowerment through Entrepreneurship",
    pageStart: 58,
    pageEnd: 71,
    type: "prose",
    examStatus: "excluded",
    reason: "Completely excluded under PECTAA notification 1238.",
  },
  {
    unit: 6,
    title: "The Value of Time",
    pageStart: 72,
    pageEnd: 82,
    type: "prose",
    examStatus: "included",
  },
  {
    unit: 7,
    title: "If",
    pageStart: 86,
    pageEnd: 92,
    type: "poem",
    examStatus: "included",
  },
  {
    unit: 8,
    title: "The Impact of Globalisation on Culture and Economy",
    pageStart: 93,
    pageEnd: 105,
    type: "prose",
    examStatus: "excluded",
    reason: "Completely excluded under PECTAA notification 1238.",
  },
  {
    unit: 9,
    title: "Quality Education: A Key to Success",
    pageStart: 106,
    pageEnd: 119,
    type: "prose",
    examStatus: "included",
  },
  {
    unit: 10,
    title: "The Silent Predator and the Majestic Prey – Snow Leopard and Markhor",
    pageStart: 120,
    pageEnd: 131,
    type: "prose",
    examStatus: "excluded",
    reason: "Completely excluded under PECTAA notification 1238.",
  },
  {
    unit: 11,
    title: "The Dear Departed",
    pageStart: 132,
    pageEnd: 159,
    type: "play",
    examStatus: "included",
  },
];

export const englishReviewSections2027 = [
  {
    name: "Review-I",
    page: 83,
    examStatus: "included",
    note: "Review questions related to excluded Unit 5 must not be used.",
  },
  {
    name: "Review-II",
    page: 160,
    examStatus: "included",
    note: "Review questions related to excluded Units 8 and 10 must not be used.",
  },
] as const;

export const englishIncludedUnits2027 = englishChapters2027.filter(
  (chapter) => chapter.examStatus === "included"
);

export const englishExcludedUnits2027 = englishChapters2027.filter(
  (chapter) => chapter.examStatus === "excluded"
);
