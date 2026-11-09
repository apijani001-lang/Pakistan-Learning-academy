export type HealthPhysicalEducation2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const healthPhysicalEducation2027Deletions: HealthPhysicalEducation2027Deletion[] =
  [];

export const healthPhysicalEducation2027DeletionSummary = {
  subject: "Health & Physical Education",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: null,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "No chapter, topic, exercise or question has been marked deleted. The original textbook contents and any subject-specific Annual Examination 2027 ALP notification must be verified before applying exclusions. The available board syllabus confirms the subject and examination marks scheme, but does not establish a complete verified chapter-wise deletion list.",

  source: {
    authority: "BISE Lahore / PECTAA",

    syllabusUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    verificationStatus:
      "Subject and marks scheme located; original textbook and 2027 ALP verification pending",
  },
};