export type Punjabi2027Deletion = {
  section: string;
  lesson?: number;
  poem?: number;
  topic?: string;
  examNote?: string;
};

export const punjabi2027Deletions: Punjabi2027Deletion[] = [];

export const punjabi2027DeletionSummary = {
  subject: "Punjabi Ikhtiyari",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalSections: 2,

  fullyExcludedLessons: [] as number[],
  partiallyAffectedLessons: [] as number[],

  fullyExcludedPoems: [] as number[],
  partiallyAffectedPoems: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "BISE Lahore 2025-2027 syllabus identifies the Class IX Punjabi prose and poetry ranges. However, a subject-specific Annual Examination 2027 ALP deletion notification has not been independently verified. No prose lesson, poem, grammar topic, writing task or exercise has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    boardSyllabusRanges: true,
    originalTextbookVisualCheck: false,
    individualLessonTitles: false,
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