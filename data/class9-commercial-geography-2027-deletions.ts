// data/class9-commercial-geography-2027-deletions.ts

export type CommercialGeography2027Deletion = {
  section?: number;
  topic?: string;
  subsection?: string;
  examNote?: string;
};

export const commercialGeography2027Deletions: CommercialGeography2027Deletion[] =
  [];

export const commercialGeography2027DeletionSummary = {
  subject: "Commercial Geography",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalClass9Sections: 5,

  fullyExcludedSections: [] as number[],
  partiallyAffectedSections: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Commercial Geography. No chapter, topic, mineral resource, agricultural product, industrial topic or commercial activity has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9SectionSequence: true,
    originalTextbookVisualCheck: false,
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