// data/class9-english-literature-2027-deletions.ts

export type EnglishLiterature2027Deletion = {
  section?: string;
  book?: string;
  poem?: string;
  story?: string;
  topic?: string;
  examNote?: string;
};

export const englishLiterature2027Deletions: EnglishLiterature2027Deletion[] =
  [];

export const englishLiterature2027DeletionSummary = {
  subject: "English Literature",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  fullyExcludedSections: [] as string[],
  partiallyAffectedSections: [] as string[],

  deletedPoemsVerified: false,
  deletedStoriesVerified: false,
  deletedPlayContentVerified: false,

  status: "2027 subject-specific ALP deletion details not verified",

  note:
    "The BISE Lahore 2025-2027 syllabus identifies the prescribed poetry collection, short-story book and play. However, a subject-specific Annual Examination 2027 ALP deletion notification has not been independently verified. No poem, short story, play scene or literary topic has been marked deleted. Do not assume any prescribed content is excluded without official confirmation.",

  verification: {
    officialBoardSyllabus: true,
    individualPoemTitles: false,
    individualStoryTitles: false,
    originalBooksVisualCheck: false,
    alp2027: false,
  },

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};