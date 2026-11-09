export type GeneralScience2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const generalScience2027Deletions: GeneralScience2027Deletion[] = [];

export const generalScience2027DeletionSummary = {
  subject: "General Science",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 6,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "The combined BISE Lahore 2025-2027 syllabus covers Classes 9 and 10. The first six chapters are treated as the Class 9 portion for this library. No chapter, topic, exercise or question has been marked deleted because a subject-specific Annual Examination 2027 ALP list has not been independently verified.",

  source: {
    authority: "BISE Lahore",
    document: "Syllabus for Classes 9 and 10, Session 2025-2027",
    officialUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
    verificationStatus: "Board syllabus located; 2027 ALP pending",
  },
};