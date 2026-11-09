
export type BiologyDeletion2027 = {
  unit: number;
  title: string;
  excluded: string[];
};

export const biology2027Deletions: BiologyDeletion2027[] = [
  {
    unit: 1,
    title: "The Science of Biology",
    excluded: [
      "1.2 Relation of Biology with other sciences, pages 8–10",
      "1.3 Careers in Biology, pages 10–12",
      "1.5 Science as a collaborative field, pages 13–14",
      "1.8 Malaria – An example of Biological Method, pages 17–20",
      "Key Points, pages 21–22",
      "MCQ No. 9 and 10, page 23",
      "Short answers No. 3 and 5, page 23",
      "Long questions No. 1–3 and 6–7, page 24",
      "All Inquisitive questions, page 24",
    ],
  },
  {
    unit: 2,
    title: "Biodiversity",
    excluded: [
      "Advantages of classification, page 27",
      "Table, page 28",
      "History of classification, page 29",
      "Table, page 31",
      "Table, page 35",
      "Box, page 36",
      "Key Points, page 38",
      "MCQ No. 8–10, page 39",
      "Short answers No. 1, 2 and 4, page 40",
      "Long questions No. 1 and 2, page 40",
      "All Inquisitive questions, page 40",
    ],
  },
  {
    unit: 3,
    title: "The Cell",
    excluded: [
      "Side box and Table, page 52",
      "Table, page 53",
      "3.3 Structural Advantages of Plant and Animal Cells, pages 53–54",
      "Division of Labour within and across cells, pages 56–57",
      "Key Points, page 59",
      "MCQ No. 4, 11 and 14, pages 60–61",
      "Short answers No. 4, 10 and 14, page 61",
      "Long questions No. 8 and 9, page 62",
      "All Inquisitive questions, page 62",
    ],
  },
  {
    unit: 4,
    title: "Cell Cycle",
    excluded: [
      "Box, page 65",
      "4.4 Comparison between Meiosis and Mitosis, pages 73–75",
      "Key Points, page 76",
      "MCQ No. 3 and 8, page 77",
      "Short answers No. 8 and 10, page 78",
      "Long question No. 2, page 78",
      "All Inquisitive questions, page 78",
    ],
  },
  {
    unit: 5,
    title: "Tissues, Organs and Organ System",
    excluded: [
      "Emergent Properties, pages 81–82",
      "Role of Organ System in Homeostasis, page 89",
      "Key Points, page 90",
      "MCQ No. 1, 3 and 7, pages 90–91",
      "Short answers No. 5 and 7, page 92",
      "Long questions No. 6, 9 and 10, page 92",
      "All Inquisitive questions, page 92",
    ],
  },
  {
    unit: 6,
    title: "Biomolecules",
    excluded: [
      "Key Points, pages 105–106",
      "MCQ No. 1 and 8, pages 106–107",
      "Short answers No. 1 and 4, page 108",
      "Long question No. 6, page 108",
      "All Inquisitive questions, page 108",
    ],
  },
  {
    unit: 7,
    title: "Enzymes",
    excluded: [
      "Key Points, page 116",
      "MCQ No. 1 and 4, page 117",
      "Short answers No. 2 and 5, page 118",
      "Long question No. 4, page 118",
      "All Inquisitive questions, page 118",
    ],
  },
  {
    unit: 8,
    title: "Bioenergetics",
    excluded: [
      "Use of Respiratory energy in Body, page 128",
      "Table, page 128",
      "Table, page 129",
      "Figure 8.8, page 129",
      "Key Points, page 130",
      "MCQ No. 3 and 9, page 131",
      "Short answers No. 3, 7, 8, 9 and 13, page 132 (Revised)",
      "Long questions No. 3 and 6, page 132",
      "All Inquisitive questions, page 132",
    ],
  },
  {
    unit: 9,
    title: "Plant Physiology",
    excluded: [
      "Roles of Nitrogen and Magnesium, page 135",
      "Key Points, page 148",
      "MCQ No. 4 and 7, page 149",
      "Short answers No. 1 and 3, page 150",
      "Long questions No. 3 and 8, page 150",
      "All Inquisitive questions, page 150",
    ],
  },
  {
    unit: 10,
    title: "Reproduction in Plants",
    excluded: [
      "Key Points, page 163",
      "MCQ No. 4 and 10, page 164",
      "Short answers No. 3 and 10, pages 165–166",
      "All Inquisitive questions, page 166",
    ],
  },
  {
    unit: 11,
    title: "Biostatistics",
    excluded: [
      "Complete chapter excluded, pages 167–175",
    ],
  },
];

export const biology2027AdditionalExclusions = [
  {
    title: "Glossary",
    excluded: [
      "Complete Glossary excluded, pages 176–180",
    ],
  },
] as const;

export const biology2027DeletionSource = {
  notification: "PECTAA/C&C Unit/2026/1238",
  date: "06-11-2026",
  session: "2026–27",
  examination: "Annual Examination 2027",
  sourceUrl: "https://pectaa.edu.pk/downloads-2-2/",
  transcriptionSource:
    "https://www.prepsure.pk/smart-syllabus/class-9/biology",
  verification:
    "Transcribed from a secondary reproduction of the notification. Direct visual verification against the original PECTAA PDF remains pending.",
} as const;
