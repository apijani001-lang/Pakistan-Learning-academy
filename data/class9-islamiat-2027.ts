
export type IslamiatChapter2027 = {
  number: number;
  title: string;
  titleUrdu: string;
  examStatus: "included-with-deletions" | "fully-excluded";
  examNote: string;
};

export const islamiyat2027Info = {
  session: "2026–27",
  examination: "Annual Examination 2027",
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",
  totalMarks: 100,
  paperDuration: "3 hours",
  totalChapters: 7,
  fullyExcludedChapters: 1,
  partiallyAffectedChapters: 4,
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  verificationNote:
    "Deletion information is transcribed from available reproductions of the PECTAA 2026–27 notification. Direct visual verification of the original notification PDF and complete textbook chapter titles remains pending.",
} as const;

export const islamiyatChapters2027: IslamiatChapter2027[] = [
  {
    number: 1,
    title: "Chapter 1",
    titleUrdu: "باب اوّل",
    examStatus: "included-with-deletions",
    examNote:
      "Selected Ahadith are excluded. Remaining prescribed content is examinable.",
  },
  {
    number: 2,
    title: "Chapter 2",
    titleUrdu: "باب دوم",
    examStatus: "included-with-deletions",
    examNote:
      "No specific deletion is listed in the available 2027 transcription.",
  },
  {
    number: 3,
    title: "Chapter 3",
    titleUrdu: "باب سوم",
    examStatus: "included-with-deletions",
    examNote:
      "No specific deletion is listed in the available 2027 transcription.",
  },
  {
    number: 4,
    title: "Chapter 4",
    titleUrdu: "باب چہارم",
    examStatus: "included-with-deletions",
    examNote:
      "Selected topics related to ethics and manners are excluded.",
  },
  {
    number: 5,
    title: "Chapter 5",
    titleUrdu: "باب پنجم",
    examStatus: "included-with-deletions",
    examNote:
      "Rulings about oaths and the Islamic state are excluded.",
  },
  {
    number: 6,
    title: "Chapter 6",
    titleUrdu: "باب ششم",
    examStatus: "included-with-deletions",
    examNote:
      "Selected biographies and personalities are excluded. No detailed question is set from this chapter.",
  },
  {
    number: 7,
    title: "Islamic Teachings and the Requirements of the Modern Age",
    titleUrdu: "اسلامی تعلیمات اور عصر حاضر کے تقاضے",
    examStatus: "fully-excluded",
    examNote:
      "Complete chapter excluded from Annual Examination 2027. No detailed question is set from this chapter.",
  },
];
