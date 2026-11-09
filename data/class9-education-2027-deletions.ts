export type Education2027Deletion = {
  chapter: number;
  examNote?: string;
};

export const education2027Deletions: Education2027Deletion[] = [];

export const education2027DeletionSummary = {
  subject: "Education",
  class: 9,
  examination: "Annual Examination 2027",
  session: "2026-27",

  totalChapters: 5,

  fullyExcludedChapters: [],
  partiallyAffectedChapters: [],

  deletedTopicsVerified: false,

  status: "No verified Education 2027 ALP deletion list",

  note:
    "The BISE Lahore 2025-2027 syllabus is used as the baseline. Education is not included in the seven subjects listed in PECTAA notification 1238. No chapter, topic or exercise question has been marked deleted.",

  source: {
    board: "BISE Lahore",
    document: "Syllabi and Courses of Reading 2025-2027",
    academicSession: "2025-2027",
    officialUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};