export type FoodNutrition2027Deletion = {
  chapter: number;
  topic?: string;
  examNote?: string;
};

export const foodNutrition2027Deletions: FoodNutrition2027Deletion[] = [];

export const foodNutrition2027DeletionSummary = {
  subject: "Food and Nutrition",
  class: 9,
  session: "2026-27",
  examination: "Annual Examination 2027",

  totalChapters: 5,

  fullyExcludedChapters: [] as number[],
  partiallyAffectedChapters: [] as number[],

  deletedTopicsVerified: false,

  status: "No subject-specific 2027 ALP deletion independently verified",

  note:
    "No chapter, topic, exercise or question has been marked deleted. The official textbook PDF and any subject-specific Annual Examination 2027 smart syllabus or ALP notification must be verified before applying exclusions. The chapter count is provisional and must be checked against the original textbook.",

  source: {
    authority: "PECTAA",
    officialUrl: "https://pectaa.edu.pk/curriculum-compliance/",
    bookCatalogueUrl: "https://pectaa.edu.pk/books-and-publications/",
    verificationStatus: "Official book listing located; textbook and ALP details pending",
  },
};