export type Economics2027Deletion = {
  chapter: number;
  examNote?: string;
};

export const economics2027Deletions: Economics2027Deletion[] = [];

export const economics2027DeletionSummary = {
  subject: "Economics",
  class: 9,
  examination: "Annual Examination 2027",
  session: "2026-27",

  totalChapters: 7,
  fullyExcludedChapters: [],
  partiallyAffectedChapters: [],

  deletedTopicsVerified: false,

  status: "No verified 2027 ALP deletion list available",

  note:
    "No Economics chapter or topic has been marked excluded. The BISE Lahore 2025-27 syllabus is used as the baseline. Any future official 2027 notification must be checked before applying deletions.",

  source: {
    board: "BISE Lahore",
    document: "Syllabus and Courses of Reading 2025-2027",
    officialUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};