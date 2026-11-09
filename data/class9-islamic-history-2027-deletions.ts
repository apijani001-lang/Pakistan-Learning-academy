// data/class9-islamic-history-2027-deletions.ts

export type IslamicHistory2027Deletion = {
  chapter?: number;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const islamicHistory2027Deletions: IslamicHistory2027Deletion[] =
  [];

export const islamicHistory2027DeletionSummary = {
  subject: "Islamic History / Muslim History",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalClass9Chapters: 5,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Islamic History. No chapter, historical event, personality or topic has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9ChapterCount: true,
    examinationScheme: true,
    originalTextbookVisualCheck: false,
    detailedChapterVerification: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};