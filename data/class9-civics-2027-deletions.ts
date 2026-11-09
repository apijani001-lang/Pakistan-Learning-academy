export type Civics2027Deletion = {
  chapter: number;
  examNote?: string;
};

export const civics2027Deletions: Civics2027Deletion[] = [];

export const civics2027DeletionSummary = {
  subject: "Civics",
  class: 9,
  examination: "Annual Examination 2027",
  session: "2026-27",

  totalChapters: 5,

  fullyExcludedChapters: [],
  partiallyAffectedChapters: [],

  deletedTopicsVerified: false,

  status: "2027 ALP deletions not independently verified",

  note:
    "The BISE Lahore 2025-2027 syllabus is used as the Class 9 baseline. No chapter, topic or exercise question has been marked deleted without verified 2027 subject-specific evidence. The 2026 ALP list must not be treated as the 2027 list.",

  source: {
    board: "BISE Lahore",
    document: "Syllabi and Courses of Reading 2025-2027",
    officialUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};