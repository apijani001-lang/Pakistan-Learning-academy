export type ParchaBafi2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const parchaBafi2027Deletions: ParchaBafi2027Deletion[] = [];

export const parchaBafi2027DeletionSummary = {
  subject: "Parcha Bafi (Textile and Clothing)",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: null,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 ALP deletion details not independently verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion list has been independently verified. No chapter, topic, exercise, practical activity or question has been marked deleted. The exact Class IX textbook chapter sequence and original textbook contents are also awaiting verification. Do not assume any content is excluded without an official subject-specific notification.",

  verification: {
    officialBookListing: true,
    subjectNameMapping: true,
    chapterSequence: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  sources: {
    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};