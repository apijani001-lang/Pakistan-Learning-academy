// data/class9-al-hadith-dars-e-nizami-2027-deletions.ts

export type AlHadith2027Deletion = {
  section?: number;
  topic?: number;
  title?: string;
  examNote?: string;
};

export const alHadith2027Deletions: AlHadith2027Deletion[] = [];

export const alHadith2027DeletionSummary = {
  subject: "Al-Hadith",
  group: "Dars-e-Nizami",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalClass9Sections: 2,
  totalClass9Topics: 63,

  fullyExcludedSections: [] as number[],
  partiallyAffectedSections: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Al-Hadith in the Dars-e-Nizami group. No Hadith topic, translation, explanation or section has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9MarksScheme: true,
    sectionDistribution: true,
    originalReferenceBooksVisualCheck: false,
    exactHadithTextVerification: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};