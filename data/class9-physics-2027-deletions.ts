
export type PhysicsDeletion2027 = {
  unit: number;
  title: string;
  excludedTopics: string[];
  excludedQuestions: {
    mcqs: string[];
    shortAnswers: string[];
    crqs: string[];
    comprehensive: string[];
    numericals: string[];
  };
};

export const physics2027Deletions: PhysicsDeletion2027[] = [
  {
    unit: 1,
    title: "Physical Quantities and Measurements",
    excludedTopics: [
      "1.6 Mass measuring instruments — page 16",
      "1.7 Time measuring instruments — page 17",
      "1.8 Errors in measurements — pages 18–19",
      "1.10 Uncertainty in a measurement — page 20",
      "1.12 Precision and Accuracy — pages 21–22",
    ],
    excludedQuestions: {
      mcqs: ["1.3", "1.6", "1.8", "1.11"],
      shortAnswers: ["1.5", "1.8", "1.9", "1.10", "1.11"],
      crqs: ["1.1", "1.2", "1.4", "1.8", "1.10"],
      comprehensive: ["1.3", "1.4", "1.5"],
      numericals: ["1.2", "1.5", "1.7", "1.9"],
    },
  },
  {
    unit: 2,
    title: "Kinematics",
    excludedTopics: [
      "2.3 Types of Motion — page 33",
      "2.8 Gradient of a distance-time graph — page 41",
      "2.10 Gradient of a speed-time graph — page 43",
    ],
    excludedQuestions: {
      mcqs: ["2.5", "2.6", "2.8", "2.9", "2.10"],
      shortAnswers: ["2.6", "2.7", "2.8"],
      crqs: ["2.1", "2.3", "2.4", "2.5"],
      comprehensive: ["2.3", "2.5", "2.7"],
      numericals: ["2.5", "2.8", "2.10"],
    },
  },
  {
    unit: 3,
    title: "Dynamics",
    excludedTopics: [
      "3.2 Fundamental forces — pages 55–56",
      "3.3 Forces in a free body diagram — page 57",
      "3.5 Limitations of Newton's laws of motion — page 61",
      "3.7 Mechanical and electronic balances — pages 64–65",
    ],
    excludedQuestions: {
      mcqs: ["3.4", "3.7", "3.8"],
      shortAnswers: ["3.7", "3.8", "3.10"],
      crqs: ["3.3 (Revised)"],
      comprehensive: ["3.6"],
      numericals: ["3.5", "3.6", "3.8", "3.9"],
    },
  },
  {
    unit: 4,
    title: "Turning Effects of Force",
    excludedTopics: [
      "4.7 Centre of gravity and centre of mass — pages 88–90",
      "4.11 Improvement of stability — page 95",
      "4.12 Application of stability in real life — page 96",
      "Rotational motion versus translational motion — page 97",
    ],
    excludedQuestions: {
      mcqs: ["4.4", "4.5", "4.6", "4.8"],
      shortAnswers: ["4.5", "4.6", "4.8", "4.9", "4.10"],
      crqs: ["4.3", "4.5"],
      comprehensive: ["4.2", "4.4"],
      numericals: ["4.2", "4.5", "4.6", "4.9", "4.10"],
    },
  },
  {
    unit: 5,
    title: "Work, Energy and Power",
    excludedTopics: [
      "5.4 Sources of energy — pages 113–117",
      "5.6 Advantages and disadvantages of methods of energy production — page 118",
    ],
    excludedQuestions: {
      mcqs: ["5.2", "5.4", "5.7"],
      shortAnswers: ["5.3", "5.6", "5.10"],
      crqs: ["5.2", "5.5", "5.8", "5.9"],
      comprehensive: ["5.3", "5.5"],
      numericals: ["5.2", "5.5", "5.7", "5.8", "5.9", "5.12", "5.13"],
    },
  },
  {
    unit: 6,
    title: "Mechanical Properties of Matter",
    excludedTopics: [
      "Applications of Hooke's law — page 130",
      "6.7 Measurement of atmospheric pressure — pages 137–138",
      "6.8 Measurement of pressure by manometer — page 138",
      "Activities 6.1 and 6.6 — pages 129 and 142",
    ],
    excludedQuestions: {
      mcqs: ["6.2", "6.4", "6.5"],
      shortAnswers: ["6.2", "6.6", "6.9"],
      crqs: [
        "6.1",
        "6.3",
        "6.4",
        "6.6",
        "6.7",
        "6.8",
        "6.9",
        "6.10 (Revised)",
      ],
      comprehensive: [
        "6.1 (Applications of Hooke's law portion excluded)",
        "6.2",
        "6.5 (Revised)",
      ],
      numericals: ["6.3", "6.8", "6.10", "6.11", "6.12"],
    },
  },
  {
    unit: 7,
    title: "Thermal Properties of Matter",
    excludedTopics: [
      "7.1 Kinetic molecular theory of matter — pages 149–150",
      "7.4 Sensitivity, range and linearity of thermometers — pages 155–156",
      "7.5 Structure of a liquid-in-glass thermometer — page 156",
    ],
    excludedQuestions: {
      mcqs: ["7.1", "7.2", "7.7", "7.10", "7.11"],
      shortAnswers: [
        "7.1",
        "7.2",
        "7.3",
        "7.6",
        "7.9",
        "7.10",
        "7.11",
        "7.14",
        "7.15",
      ],
      crqs: [
        "7.1",
        "7.4",
        "7.5",
        "7.7",
        "7.8",
        "7.10",
        "7.11",
        "7.12 (Revised)",
      ],
      comprehensive: ["7.1", "7.4", "7.5"],
      numericals: ["7.5", "7.6"],
    },
  },
  {
    unit: 8,
    title: "Magnetism",
    excludedTopics: [
      "Applications of permanent magnets — page 168",
      "Magnetic relay — page 170",
      "Telephone receiver — page 171",
      "8.8 Domain theory of magnetism and alignment of domains — pages 172–173",
      "8.10 Application of magnets in recording technology — pages 175–176",
      "8.11 Soft iron as magnetic shield — pages 176–177",
    ],
    excludedQuestions: {
      mcqs: ["8.3", "8.4", "8.6", "8.7", "8.8 (Revised)"],
      shortAnswers: ["8.5", "8.6", "8.7"],
      crqs: ["8.3", "8.5"],
      comprehensive: ["8.5", "8.6"],
      numericals: [],
    },
  },
  {
    unit: 9,
    title: "Nature of Science",
    excludedTopics: [
      "9.4 Interdisciplinary research — pages 186–187",
      "9.6 Scientific base of technology and engineering — pages 190–191",
    ],
    excludedQuestions: {
      mcqs: ["9.4", "9.5", "9.7", "9.11"],
      shortAnswers: ["9.3", "9.7", "9.8"],
      crqs: ["9.5", "9.6", "9.8", "9.9", "9.10"],
      comprehensive: ["9.2", "9.4"],
      numericals: [],
    },
  },
];

export const physics2027DeletionSource = {
  notification: "PECTAA/C&C Unit/2026/1238",
  date: "06-11-2026",
  session: "2026–27",
  examination: "Annual Examination 2027",
  officialUrl: "https://pectaa.edu.pk/downloads-2-2/",
  transcriptionSources: [
    "https://www.prepsure.pk/smart-syllabus/class-9/physics",
    "https://freebooks.pk/smart-syllabus/physics-class-9-smart-syllabus-2027/",
  ],
  verification:
    "Cross-checked against two secondary reproductions of the notification. Direct original PECTAA PDF visual verification remains pending.",
} as const;
