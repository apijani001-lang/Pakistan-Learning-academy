// data/class9-urdu-literature-2027-deletions.ts

export type UrduLiterature2027Deletion = {
  chapter?: number;
  title?: string;
  topic?: string;
  section?: string;
  examNote?: string;
};

export const urduLiterature2027Deletions: UrduLiterature2027Deletion[] = [];

export const urduLiterature2027DeletionSummary = {
  subject: "Urdu Literature",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalClass9Entries: 6,

  fullyExcludedEntries: [] as number[],
  partiallyAffectedEntries: [] as number[],

  deletedTopicsVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified for Class 9 Urdu Literature. No prose, poetry, ghazal, literary topic or other syllabus content has been marked deleted. Do not assume any content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    class9Scheme: true,
    originalTextbookVisualCheck: false,
    individualLiteraryTitles: false,
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