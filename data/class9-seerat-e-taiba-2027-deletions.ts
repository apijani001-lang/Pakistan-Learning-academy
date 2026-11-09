// data/class9-seerat-e-taiba-2027-deletions.ts

export type SeeratETaiba2027Deletion = {
  section?: number;
  topic?: number;
  title?: string;
  examNote?: string;
};

export const seeratETaiba2027Deletions: SeeratETaiba2027Deletion[] = [];

export const seeratETaiba2027DeletionSummary = {
  subject: "Seerat-e-Taiba",
  group: "Dars-e-Nizami",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalSections: 2,

  fullyExcludedSections: [] as number[],
  partiallyAffectedSections: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Seerat-e-Taiba. No topic has been marked deleted. Do not assume any topic is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    subjectListing: true,
    originalTextbookVisualCheck: false,
    exactHadithTextVerification: false,
    separateMarksScheme: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};