
export type BiologyChapter2027 = {
  number: number;
  title: string;
  page: number | null;
  examStatus: "included-with-deletions" | "fully-excluded";
  examNote: string;
};

export const biology2027Info = {
  session: "2026–27",
  examination: "Annual Examination 2027",
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",
  totalMarks: 60,
  objectiveMarks: 12,
  subjectiveMarks: 48,
  paperDuration: "2 hours",
  totalChapters: 11,
  examinableChapters: 10,
  fullyExcludedChapters: 1,
  officialReference: "https://pectaa.edu.pk/downloads-2-2/",
  verificationNote:
    "Chapter-wise details transcribed from available notification reproductions. Direct original-PDF verification remains pending.",
};

export const biologyChapters2027: BiologyChapter2027[] = [
  {
    number: 1,
    title: "The Science of Biology",
    page: 1,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 2,
    title: "Biodiversity",
    page: 25,
    examStatus: "included-with-deletions",
    examNote: "Selected topics, tables and exercise questions are excluded.",
  },
  {
    number: 3,
    title: "The Cell",
    page: 41,
    examStatus: "included-with-deletions",
    examNote: "Selected topics, tables and exercise questions are excluded.",
  },
  {
    number: 4,
    title: "Cell Cycle",
    page: 63,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 5,
    title: "Tissues, Organs and Organ Systems",
    page: 79,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 6,
    title: "Biomolecules",
    page: 93,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 7,
    title: "Enzymes",
    page: 109,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 8,
    title: "Bioenergetics",
    page: 119,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 9,
    title: "Plant Physiology",
    page: 133,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 10,
    title: "Reproduction in Plants",
    page: 151,
    examStatus: "included-with-deletions",
    examNote: "Selected topics and exercise questions are excluded.",
  },
  {
    number: 11,
    title: "Biostatistics",
    page: 167,
    examStatus: "fully-excluded",
    examNote: "Complete chapter excluded from Annual Examination 2027.",
  },
];
