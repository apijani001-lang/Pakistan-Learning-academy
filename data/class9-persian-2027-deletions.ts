// data/class9-persian-2027-deletions.ts

export type Persian2027Deletion = {
  chapter?: number;
  lesson?: number;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const persian2027Deletions: Persian2027Deletion[] = [];

export const persian2027DeletionSummary = {
  subject: "Persian (Farsi)",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: null,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  fullyExcludedLessons: [] as number[],
  partiallyAffectedLessons: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "The BISE Lahore 2025-2027 syllabus provides the Persian Class IX examination scheme and prescribed textbook reference. However, a subject-specific Annual Examination 2027 ALP deletion notification has not been independently verified. No Persian lesson, prose passage, poetry, grammar topic or translation exercise has been marked deleted. No content should be treated as excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    textbookLessonSequence: false,
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