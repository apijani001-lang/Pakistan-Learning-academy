export type Computer2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const computer2027Deletions: Computer2027Deletion[] = [];

export const computer2027DeletionSummary = {
  subject: "Computer Science & Entrepreneurship",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 9,
  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "No chapter, topic, exercise or question has been marked deleted. A subject-specific official Annual Examination 2027 smart syllabus or ALP notification must be verified before applying any exclusions. Do not assume that a general smart syllabus notification applies to Computer Science.",

  source: {
    authority: "PECTAA",
    officialUrl: "https://pectaa.edu.pk/curriculum-compliance/",
    verificationStatus: "Pending",
  },
};