
export const english2027Deletions = {
  subject: "English",
  class: 9,
  academicSession: "2026-27",
  annualExam: 2027,
  notification: "PECTAA/C&C Unit/2026/1238",
  notificationDate: "6 November 2026",

  fullyExcludedUnits: [
    {
      unit: 5,
      title: "Women Empowerment through Entrepreneurship",
      pages: "58–71",
      status: "fully-excluded",
      excludedContent: [
        "Complete Unit 5",
        "All reading material",
        "All vocabulary and word meanings",
        "All grammar and language exercises within the unit",
        "All short and long questions",
        "All objective and subjective questions",
      ],
    },
    {
      unit: 8,
      title: "The Impact of Globalisation on Culture and Economy",
      pages: "93–105",
      status: "fully-excluded",
      excludedContent: [
        "Complete Unit 8",
        "All reading material",
        "All vocabulary and word meanings",
        "All grammar and language exercises within the unit",
        "All short and long questions",
        "All objective and subjective questions",
      ],
    },
    {
      unit: 10,
      title:
        "The Silent Predator and the Majestic Prey – Snow Leopard and Markhor",
      pages: "120–131",
      status: "fully-excluded",
      excludedContent: [
        "Complete Unit 10",
        "All reading material",
        "All vocabulary and word meanings",
        "All grammar and language exercises within the unit",
        "All short and long questions",
        "All objective and subjective questions",
      ],
    },
  ],

  reviewExclusions: [
    {
      section: "Review-I",
      rule: "Exclude questions and material taken from Unit 5.",
      exactQuestionNumbers: null,
    },
    {
      section: "Review-II",
      rule: "Exclude questions and material taken from Units 8 and 10.",
      exactQuestionNumbers: null,
    },
  ],

  generalRules: [
    "No objective questions from Units 5, 8 or 10.",
    "No subjective questions from Units 5, 8 or 10.",
    "No other examination questions from the three excluded units.",
    "The remaining eight textbook units stay in the examination syllabus.",
    "English Grammar and Composition 9-10 remains part of the paper according to the notified paper pattern.",
  ],

  excludedUnitNumbers: [5, 8, 10],

  includedUnitNumbers: [1, 2, 3, 4, 6, 7, 9, 11],

  verificationNote:
    "Whole-unit exclusions and page ranges are cross-checked against available 2027 syllabus references. Exact review exercise question numbers have not been independently verified from the original official PDF, so they are intentionally not invented.",
} as const;
