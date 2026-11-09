
export type ChemistryChapter2027 = {
  number: number;
  title: string;
  page: number | null;
  examStatus: "included-with-deletions" | "fully-excluded";
  examNote: string;
};

export const chemistry2027Info = {
  session: "2026–27",
  examination: "Annual Examination 2027",
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",
  totalMarks: 60,
  paperDuration: "2 hours",
  totalChapters: 13,
  examinableChapters: 11,
  fullyExcludedChapters: 2,
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  verificationNote:
    "Chapter information cross-checked against available 2026–27 syllabus reproductions. Direct original PECTAA PDF visual verification remains pending.",
};

export const chemistryChapters2027: ChemistryChapter2027[] = [
  {
    number: 1,
    title: "States of Matter and Phase of Change",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 2,
    title: "Atomic Structure",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 3,
    title: "Chemical Bonding",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 4,
    title: "Stoichiometry",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected exercise questions are excluded.",
  },
  {
    number: 5,
    title: "Energetics",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 6,
    title: "Equilibria",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 7,
    title: "Acid Base Chemistry",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 8,
    title: "Periodic Table and Periodicity",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 9,
    title: "Group Properties and Elements",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 10,
    title: "Environmental Chemistry",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 11,
    title: "Hydrocarbons",
    page: null,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 12,
    title: "Empirical Data Collection and Analysis",
    page: null,
    examStatus: "fully-excluded",
    examNote: "Complete chapter excluded from Annual Examination 2027.",
  },
  {
    number: 13,
    title: "Laboratory and Practical Skills",
    page: null,
    examStatus: "fully-excluded",
    examNote: "Complete chapter excluded from Annual Examination 2027.",
  },
];
