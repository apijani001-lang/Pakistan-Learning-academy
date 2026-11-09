// data/class9-commercial-geography-2027.ts

export type CommercialGeography2027Section = {
  number: number;
  title: string;
  titleUrdu: string;
  class: 9 | 10;
  topics: string[];
};

export const commercialGeography2027Info = {
  subject: "Commercial Geography",
  subjectUrdu: "تجارتی جغرافیہ",

  class: 9,
  group: "Arts / Humanities",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  textbookTitle: "Commercial Geography (for Class IX-X)",
  textbookUrduTitle: "کمرشل جغرافیہ",

  textbookEdition: "Edition verification pending",

  authors: [
    "K.U. Qureshi",
    "Dr. Azhar Hameed",
    "Faqeer Niaz Ahmad",
    "Muhammad Afzal Qureshi",
  ],

  publisher: "Shaheen Publishers, Urdu Bazar, Lahore",

  medium: "English",

  totalSections: 11,
  class9Sections: 5,
  class10Sections: 6,

  totalMarks: 150,

  partI: {
    class: 9,
    marks: 75,
    duration: "2 hours 30 minutes",
  },

  partII: {
    class: 10,
    marks: 75,
    duration: "2 hours 30 minutes",
  },

  verification: {
    officialBoardSyllabus: true,
    class9SectionSequence: true,
    class10SectionSequence: true,
    class9Marks: true,
    class9Duration: true,
    prescribedBook: true,
    authors: true,
    publisher: true,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The BISE Lahore 2025-2027 syllabus lists five sections for Class IX and six sections for Class X.",
    "Class IX Part-I carries 75 marks and has a duration of 2 hours 30 minutes.",
    "The prescribed combined textbook is Commercial Geography (for Class IX-X).",
    "The section sequence and listed topics are transcribed from the official board syllabus.",
    "Original textbook page-by-page visual verification is pending.",
    "No unverified 2027 ALP deletions have been applied.",
  ],

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export const commercialGeographySections2027: CommercialGeography2027Section[] =
  [
    // CLASS IX — PART I

    {
      number: 1,
      title: "Meaning and Scope of Commercial Geography",
      titleUrdu: "تجارتی جغرافیہ کا مفہوم اور دائرہ کار",
      class: 9,
      topics: [
        "Definition of Commercial Geography",
        "Scope of Commercial Geography",
        "Importance of Commercial Geography",
      ],
    },

    {
      number: 2,
      title: "Basic Concepts",
      titleUrdu: "بنیادی تصورات",
      class: 9,
      topics: [
        "Geographical Concepts Relevant to Commercial Activity",
        "Location",
        "Distribution",
        "Interaction",
      ],
    },

    {
      number: 3,
      title: "Basis of Commercial Activity",
      titleUrdu: "تجارتی سرگرمیوں کی بنیاد",
      class: 9,
      topics: [
        "Trade",
        "Transportation",
        "Financing",
        "Warehousing",
        "Insurance",
        "Communications",
      ],
    },

    {
      number: 4,
      title: "Commercial Resources of Pakistan",
      titleUrdu: "پاکستان کے تجارتی وسائل",
      class: 9,
      topics: [
        "Locational Attributes of Pakistan",
        "Commercial Resources of Pakistan",
        "Agricultural Resources",
        "Crops",
        "Forests",
        "Livestock and Livestock Products",
        "Hides and Skins",
        "Fisheries",
        "Poultry",
        "Mineral Resources",
        "Industrial Resources",
        "Power Resources",
      ],
    },

    {
      number: 5,
      title: "Agriculture – Production and Distribution",
      titleUrdu: "زراعت — پیداوار اور تقسیم",
      class: 9,
      topics: [
        "Major Crops and Their Distribution Pattern",
        "Wheat",
        "Rice",
        "Pulses",
        "Maize",
        "Cash Crops",
        "Sugarcane",
        "Cotton",
        "Tobacco",
        "Oilseeds",
      ],
    },

    // CLASS X — PART II

    {
      number: 6,
      title: "Important Mineral Resources and Their Distribution",
      titleUrdu: "اہم معدنی وسائل اور ان کی تقسیم",
      class: 10,
      topics: [
        "Coal",
        "Oil and Gas",
        "Chrome",
        "Rock Salt",
        "Iron and Copper",
        "Gypsum and Limestone",
        "Marbles",
        "Gold and Gemstones",
      ],
    },

    {
      number: 7,
      title: "Industrial Products of Pakistan",
      titleUrdu: "پاکستان کی صنعتی مصنوعات",
      class: 10,
      topics: [
        "Major Industrial Products and Their Distribution",
        "Food and Beverage Industries",
        "Textile Industries",
        "Chemical Industries",
        "Engineering Industries",
        "Miscellaneous Industries",
      ],
    },

    {
      number: 8,
      title: "Means of Transportation and Communications",
      titleUrdu: "ذرائع نقل و حمل اور مواصلات",
      class: 10,
      topics: [
        "Transportation in Terms of Time, Distance and Cost",
        "Different Modes of Transportation",
        "Roads and Highways",
        "Rivers",
        "Sea Routes",
        "Post Office",
        "Telegraph",
        "Telephone",
        "Radio and Television",
        "Other Communication Systems",
      ],
    },

    {
      number: 9,
      title: "Major Commercial Activities",
      titleUrdu: "اہم تجارتی سرگرمیاں",
      class: 10,
      topics: [
        "Financial Institutions and Services",
        "Application of Set Theory in Trade",
        "Domestic Trade and Its Significance",
        "Foreign Trade and Its Significance",
        "Imports",
        "Exports",
        "Comparative Advantage Theory",
        "Introduction to Balance of Payment",
      ],
    },

    {
      number: 10,
      title: "Important Commercial Cities and Ports",
      titleUrdu: "اہم تجارتی شہر اور بندرگاہیں",
      class: 10,
      topics: [
        "Role of Cities and Ports in Commercial Activities",
        "Major Commercial Cities of Pakistan",
        "Major Ports of Pakistan",
        "Seven Big World Cities and Their Main Commercial Activities",
      ],
    },

    {
      number: 11,
      title: "Commercial Geography and National Integration",
      titleUrdu: "تجارتی جغرافیہ اور قومی یکجہتی",
      class: 10,
      topics: [
        "Meaning of National Integration",
        "Commercial Activity as a Means to Integration",
        "Spatial Interaction as a Means to Integration",
      ],
    },
  ];