export type PhysiologyHygiene2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const physiologyHygiene2027Deletions: PhysiologyHygiene2027Deletion[] =
  [];

export const physiologyHygiene2027DeletionSummary = {
  subject: "Physiology & Hygiene",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 7,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "The BISE Lahore 2025-2027 syllabus identifies seven Class IX chapters. However, no subject-specific Annual Examination 2027 ALP deletion list has been independently verified. Therefore, no chapter, topic, exercise or question has been marked deleted. The complete original textbook and any applicable official examination notification must be checked before exclusions are applied.",

  source: {
    authority: "BISE Lahore / PECTAA",
    syllabusUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",
    verificationStatus:
      "Class IX board syllabus located; original textbook and subject-specific 2027 ALP verification pending",
  },
};