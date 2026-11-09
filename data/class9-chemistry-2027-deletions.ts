
export type ChemistryDeletion2027 = {
  unit: number;
  title: string;
  excludedTopics: string[];
  excludedQuestions: {
    mcqs: string[];
    saqs: string[];
    crqs: string[];
    dqs: string[];
    iqs: string[];
  };
};

export const chemistry2027Deletions: ChemistryDeletion2027[] = [
  {
    unit: 1,
    title: "States of Matter and Phase of Change",
    excludedTopics: [
      "1.2 States of Matter, pages 4–6",
      "1.4 Allotropic Forms of Substances, page 8",
      "1.8 Effect of Temperature on the Solubility of Solutes, pages 11–13",
    ],
    excludedQuestions: {
      mcqs: ["i", "iv", "vii", "ix", "x (Revised)"],
      saqs: ["iii", "v", "iv", "vii (Revised)"],
      crqs: ["i", "ii", "iv", "v", "vi", "vii", "viii (Revised)"],
      dqs: ["ii", "iii", "iv", "v (Revised)"],
      iqs: ["ii"],
    },
  },
  {
    unit: 2,
    title: "Atomic Structure",
    excludedTopics: [
      "2.3 Isotopes and their Masses: Radioactive Isotopes, Applications of Radioactive Isotopes and Ionization of Atoms by Radioactive Sources, pages 24–26",
    ],
    excludedQuestions: {
      mcqs: ["iii", "iv", "vii", "x (Revised)"],
      saqs: ["iv", "v"],
      crqs: ["iv", "v"],
      dqs: ["i", "ii", "iii", "iv (Revised)"],
      iqs: ["i"],
    },
  },
  {
    unit: 3,
    title: "Chemical Bonding",
    excludedTopics: [
      "3.6 Compare the Properties of Ionic and Covalent Compounds, page 44",
      "3.8 Nature of Bonding and Properties, pages 46–48",
    ],
    excludedQuestions: {
      mcqs: ["v", "ix"],
      saqs: ["ii", "iv"],
      crqs: ["v", "vi"],
      dqs: ["ii", "iv", "v"],
      iqs: ["i", "ii"],
    },
  },
  {
    unit: 4,
    title: "Stoichiometry",
    excludedTopics: [],
    excludedQuestions: {
      mcqs: ["viii", "ix", "x"],
      saqs: ["ii"],
      crqs: ["iv", "v"],
      dqs: ["iii"],
      iqs: ["i", "ii"],
    },
  },
  {
    unit: 5,
    title: "Energetics",
    excludedTopics: [
      "Partial portion of 5.3 Exothermic and Endothermic Reactions, last paragraph, pages 71–74",
    ],
    excludedQuestions: {
      mcqs: ["vi", "vii", "ix", "x"],
      saqs: ["iv"],
      crqs: ["i", "iii"],
      dqs: ["i", "iv"],
      iqs: ["ii"],
    },
  },
  {
    unit: 6,
    title: "Equilibria",
    excludedTopics: [
      "6.3 Changing the Physical Conditions of a Chemical Reaction, pages 86–89",
    ],
    excludedQuestions: {
      mcqs: ["iii", "iv", "vii", "x"],
      saqs: ["ii", "v"],
      crqs: ["iv", "v"],
      dqs: ["iii", "v"],
      iqs: ["i", "ii"],
    },
  },
  {
    unit: 7,
    title: "Acid Base Chemistry",
    excludedTopics: [
      "7.5 Acid Rain and its Effects, page 102",
    ],
    excludedQuestions: {
      mcqs: ["vii", "x"],
      saqs: ["v"],
      crqs: ["ii"],
      dqs: ["iv", "v"],
      iqs: ["i"],
    },
  },
  {
    unit: 8,
    title: "Periodic Table and Periodicity",
    excludedTopics: [
      "8.5 Metallic Character and Reactivity, pages 114–115",
    ],
    excludedQuestions: {
      mcqs: ["viii", "ix"],
      saqs: ["ix", "x"],
      crqs: ["v"],
      dqs: ["iv", "vi"],
      iqs: ["ii"],
    },
  },
  {
    unit: 9,
    title: "Group Properties and Elements",
    excludedTopics: [
      "9.5 Physical Properties of Metals and Non-Metals, pages 124–125",
    ],
    excludedQuestions: {
      mcqs: ["viii", "ix"],
      saqs: ["v"],
      crqs: ["iii", "vi", "vii (Revised)"],
      dqs: ["iii", "vi"],
      iqs: ["iii"],
    },
  },
  {
    unit: 10,
    title: "Environmental Chemistry",
    excludedTopics: [
      "10.4 Global Warming (Greenhouse Effect), pages 136–139",
      "10.5 Strategies to Reduce Environmental Issues, pages 139–141",
    ],
    excludedQuestions: {
      mcqs: ["i", "iv", "viii", "ix (Revised)"],
      saqs: ["ii", "iii", "vi", "vii"],
      crqs: ["iii", "iv", "v"],
      dqs: ["ii", "iii", "iv", "v (Revised)"],
      iqs: ["i", "ii", "iii (Revised)"],
    },
  },
  {
    unit: 11,
    title: "Hydrocarbons",
    excludedTopics: [
      "11.4 Important Reactions, pages 151–153",
    ],
    excludedQuestions: {
      mcqs: ["iii", "vi", "ix", "x (Revised)"],
      saqs: ["iii", "viii", "ix"],
      crqs: ["iv", "v", "vi (Revised)"],
      dqs: ["iii", "v"],
      iqs: ["i"],
    },
  },
  {
    unit: 12,
    title: "Empirical Data Collection and Analysis",
    excludedTopics: [
      "Complete chapter excluded from Annual Examination 2027.",
    ],
    excludedQuestions: {
      mcqs: [],
      saqs: [],
      crqs: [],
      dqs: [],
      iqs: [],
    },
  },
  {
    unit: 13,
    title: "Laboratory and Practical Skills",
    excludedTopics: [
      "Complete chapter excluded from Annual Examination 2027.",
    ],
    excludedQuestions: {
      mcqs: [],
      saqs: [],
      crqs: [],
      dqs: [],
      iqs: [],
    },
  },
];

export const chemistry2027DeletionSource = {
  notification: "PECTAA/C&C Unit/2026/1238",
  date: "06-11-2026",
  session: "2026–27",
  examination: "Annual Examination 2027",
  officialUrl: "https://pectaa.edu.pk/downloads-2-2/",
  transcriptionSources: [
    "https://www.prepsure.pk/smart-syllabus/class-9/chemistry",
    "https://freebooks.pk/smart-syllabus/chemistry-class-9-smart-syllabus-2027/",
  ],
  verification:
    "Chapter-wise entries transcribed and cross-checked against available secondary reproductions of the PECTAA notification. Direct original PECTAA PDF visual verification remains pending.",
} as const;
