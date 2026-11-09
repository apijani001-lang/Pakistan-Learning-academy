// data/class9-advanced-islamic-studies-2027-deletions.ts

export type AdvancedIslamicStudies2027Deletion = {
  section?: string;
  topic?: string;
  reference?: string;
  examNote?: string;
};

export const advancedIslamicStudies2027Deletions: AdvancedIslamicStudies2027Deletion[] =
  [];

export const advancedIslamicStudies2027DeletionSummary = {
  subject: "Advanced Islamic Studies",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalSections: 4,

  fullyExcludedSections: [] as string[],
  partiallyAffectedSections: [] as string[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Advanced Islamic Studies. No Quranic verses, Ahadith, Seerat-e-Tayyiba topics or Arabic Grammar content has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9ExaminationScheme: true,
    originalTextbookVisualCheck: false,
    detailedTopicVerification: false,
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