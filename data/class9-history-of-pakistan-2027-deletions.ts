// data/class9-history-of-pakistan-2027-deletions.ts

export type HistoryPakistan2027Deletion = {
  chapter?: number;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const historyPakistan2027Deletions: HistoryPakistan2027Deletion[] = [];

export const historyPakistan2027DeletionSummary = {
  subject: "History of Pakistan",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 16,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "The BISE Lahore 2025-2027 syllabus lists 16 chapters for Class IX History of Pakistan. However, a subject-specific Annual Examination 2027 ALP deletion notification has not been independently verified. No chapter, historical event, personality, date or topic has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9ChapterSequence: true,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};