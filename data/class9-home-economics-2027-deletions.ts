export type HomeEconomics2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const homeEconomics2027Deletions: HomeEconomics2027Deletion[] = [];

export const homeEconomics2027DeletionSummary = {
  subject: "Elements of Home Economics",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: null,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "No chapter, topic, exercise or question has been marked deleted. The complete original textbook contents and any subject-specific Annual Examination 2027 ALP notification must be verified before applying exclusions. The available syllabus outline is incomplete, so no missing sections have been assumed.",

  source: {
    authority: "BISE Lahore / PECTAA",
    officialUrl: "https://pectaa.edu.pk/curriculum-compliance/",
    syllabusUrl:
      "https://www.biselahore.com/downloads/notifications/misc/Old%20-%20Syllabus_9th%2610th_%282025_27%29.pdf",
    verificationStatus: "Board syllabus located; complete textbook and ALP pending",
  },
};