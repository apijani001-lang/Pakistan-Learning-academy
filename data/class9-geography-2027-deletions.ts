export type Geography2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const geography2027Deletions: Geography2027Deletion[] = [];

export const geography2027DeletionSummary = {
  subject: "Geography",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 5,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "The five Class IX chapters are listed in the BISE Lahore 2025-2027 syllabus. However, a subject-specific Annual Examination 2027 ALP deletion list has not been independently verified. No chapter, topic, exercise or question has been marked deleted. Do not assume that the entire textbook or any topic is excluded without official confirmation.",

  source: {
    authority: "BISE Lahore / PECTAA",

    syllabusUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    verificationStatus:
      "Class IX syllabus and chapter topics located; subject-specific 2027 ALP verification pending",
  },
};