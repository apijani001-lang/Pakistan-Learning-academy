// data/class9-al-quran-dars-e-nizami-2027.ts

export type AlQuran2027Section = {
  number: number;
  title: string;
  titleUrdu: string;
  details: string[];
};

export const alQuran2027Info = {
  subject: "Al-Quran",
  subjectUrdu: "القرآن",

  class: 9,
  group: "Dars-e-Nizami",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  partI: {
    class: 9,
    marks: 75,
    duration: null as string | null,
  },

  partII: {
    class: 10,
    marks: 75,
    duration: null as string | null,
  },

  totalMarks: 150,

  totalSections: 3,

  textbook: {
    title: "Selected Authentic Tafsir References",
    prescribedBook: null as string | null,
    author: null as string | null,
    publisher: null as string | null,
    note: "The board syllabus permits selection from an authentic Tafsir.",
  },

  verification: {
    officialBoardSyllabus: true,
    class9Scope: true,
    class10Scope: true,
    marksScheme: true,
    duration: false,
    exactTextbookEdition: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "This subject belongs to the separate Dars-e-Nizami Group.",
    "Class 9 Part-I covers Surah Al-Fatiha and Surah Al-Baqarah, verses 1 to 252.",
    "Class 10 Part-II covers the remaining portion of Surah Al-Baqarah and the complete Surah Aal-e-Imran.",
    "The syllabus mentions translation, summaries of Surah themes and important events.",
    "No additional chapter divisions or examination duration have been invented.",
    "No subject-specific Annual Examination 2027 ALP deletion has been independently verified.",
  ],

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};

export const alQuranSections2027: AlQuran2027Section[] = [
  {
    number: 1,
    title: "Surah Al-Fatiha",
    titleUrdu: "سورۃ الفاتحہ",
    details: [
      "Complete Surah Al-Fatiha",
      "Translation",
      "Summary of the Surah",
      "Important themes and events",
    ],
  },

  {
    number: 2,
    title: "Surah Al-Baqarah — Verses 1–252",
    titleUrdu: "سورۃ البقرہ — آیات 1 تا 252",
    details: [
      "Verses 1 to 252",
      "Translation",
      "Summary of the Surah themes",
      "Important events mentioned in the prescribed verses",
    ],
  },

  {
    number: 3,
    title: "Class 10 Reference — Part II",
    titleUrdu: "جماعت دہم — حصہ دوم",
    details: [
      "Remaining verses of Surah Al-Baqarah",
      "Complete Surah Aal-e-Imran",
      "Translation",
      "Summary of Surah themes and important events",
    ],
  },
];