// data/class9-al-quran-dars-e-nizami-2027-deletions.ts

export type AlQuran2027Deletion = {
  section?: number;
  topic?: string;
  examNote?: string;
};

export const alQuran2027Deletions: AlQuran2027Deletion[] = [];

export const alQuran2027DeletionSummary = {
  subject: "Al-Quran",
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
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Al-Quran in the Dars-e-Nizami group. No Surah, Ayah, translation, summary or topic has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9Scope: true,
    examinationScheme: true,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};