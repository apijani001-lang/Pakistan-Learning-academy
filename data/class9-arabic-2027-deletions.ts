export type Arabic2027Deletion = {
  chapter?: number;
  lesson?: number;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const arabic2027Deletions: Arabic2027Deletion[] = [];

export const arabic2027DeletionSummary = {
  subject: "Arabic (Ikhtiyari)",
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
    "The BISE Lahore 2025-2027 syllabus provides the Arabic Class IX paper pattern and prescribed textbook reference. However, a subject-specific Annual Examination 2027 ALP deletion notification has not been independently verified. No lesson, chapter, grammar topic, translation exercise, poetry passage or writing task has been marked deleted. Do not assume any content is excluded without official confirmation.",

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