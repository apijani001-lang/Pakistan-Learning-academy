// data/class9-clothing-textile-2027-deletions.ts

export type ClothingTextile2027Deletion = {
  chapter?: number;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const clothingTextile2027Deletions: ClothingTextile2027Deletion[] =
  [];

export const clothingTextile2027DeletionSummary = {
  subject: "Clothing and Textile",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalClass9Chapters: 7,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Clothing and Textile. No chapter, textile topic, clothing topic or practical activity has been marked deleted. Do not assume any content is excluded without official confirmation.",

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

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};
