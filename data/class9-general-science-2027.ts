export const generalScience2027Info = {
  subject: "General Science",
  subjectUrdu: "جنرل سائنس",
  class: 9,
  group: "arts",
  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookEdition: "2025-2027 BISE Lahore syllabus reference",
  publisher: "Naseer Sons, Lahore",
  medium: "English",

  totalChapters: 11,
  totalMarks: 75,
  examDuration: "2 hours 30 minutes",

  notification: null,
  notificationDate: null,

  verification: {
    officialBoardSyllabusLocated: true,
    chapterSequenceVerified: true,
    originalTextbookPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: true,
  },

  note:
    "Chapter sequence, Class 9 marks and paper duration are taken from the BISE Lahore 2025-2027 syllabus. The original textbook PDF has not yet been visually checked. No chapter or topic has been marked deleted because a subject-specific Annual Examination 2027 ALP list has not been independently verified.",

  sources: {
    biseLahore:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
    pectaa:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};

export type GeneralScience2027Chapter = {
  number: number;
  title: string;
  topics: string[];
};

export const generalScienceChapters2027: GeneralScience2027Chapter[] = [
  {
    number: 1,
    title: "Introduction and Role of Science",
    topics: [
      "History of Science and Islamic contribution to knowledge",
      "Contributions of Muslim and Pakistani scientists",
      "Branches of Science and their interrelationship",
      "Role of Science and Technology in improving quality of life",
      "Limitations of Science",
    ],
  },
  {
    number: 2,
    title: "Our Life and Chemistry",
    topics: [
      "Basic elements of life: Carbon, Hydrogen and Oxygen",
      "Photosynthesis and respiration",
      "Allotropic forms of carbon",
      "Types of carbon compounds and their abundance in nature",
      "Water as a solvent and density of water and ice",
      "Composition of air and its constituents",
      "Rare gases and their uses",
      "Importance of essential elements for health and daily life",
    ],
  },
  {
    number: 3,
    title: "Biochemistry and Biotechnology",
    topics: [
      "Metabolism and the fate of carbohydrates, fats and proteins",
      "Enzymes and their role in metabolism and daily life",
      "Blood and its functions",
      "DNA as hereditary material",
      "Genetic engineering",
      "Improvement of crops and control of crop diseases",
      "Antibiotics and vaccines",
      "Recycling of waste and scarce materials",
    ],
  },
  {
    number: 4,
    title: "Human Health",
    topics: [
      "Major components of food",
      "Food, energy and human energy requirements",
      "Balanced diet for different stages of life",
      "Nervous system and glands",
      "Different stages of life",
      "Importance of exercise and physical fitness",
      "First aid and its administration",
    ],
  },
  {
    number: 5,
    title: "Diseases, Causes and Prevention",
    topics: [
      "Diseases and their causes",
      "Viruses, bacteria, parasites and germs",
      "How germs spread",
      "Protection from germs and infectious diseases",
      "Smoke, smoking and ill health",
      "Mental illness and its treatment",
      "Differences between drugs, medicines and narcotics",
      "Uses and abuses of drugs in society",
    ],
  },
  {
    number: 6,
    title: "Environment and Natural Resources",
    topics: [
      "Atmosphere and its different layers",
      "Greenhouse effect and climatic patterns",
      "Different kinds of pollution and their reduction",
      "Minerals and fossil fuels",
      "Conservation of natural resources",
      "Crops and fruits of Pakistan",
      "Agricultural production and mechanization",
      "Dairy and poultry products",
      "Wildlife, national parks and endangered species",
      "Effects of population growth on environment and quality of life",
    ],
  },
  {
    number: 7,
    title: "Energy",
    topics: [
      "Introduction to energy and its forms",
      "Energy demands and methods of acquiring energy",
      "Conventional and non-conventional energy resources",
      "Measurement and units of energy",
      "Energy and the environment",
      "Thermal pollution and nuclear fuel hazards",
      "Energy conservation at home, school and industries",
    ],
  },
  {
    number: 8,
    title: "Current Electricity",
    topics: [
      "Introduction to current electricity",
      "Components of electrical circuits",
      "Direct current and alternating current",
      "Domestic electricity supply",
      "Electrical safety precautions",
      "Ammeter, voltmeter and multimeter",
      "Analogue and digital meters",
    ],
  },
  {
    number: 9,
    title: "Basic Electronics",
    topics: [
      "Basic working principle of a semiconductor diode",
      "Radio waves and radio systems",
      "Television, cable and satellite TV",
      "Computers and microprocessors",
      "Information Technology",
      "Communication systems",
    ],
  },
  {
    number: 10,
    title: "Science and Technology",
    topics: [
      "Advancement of Science and Technology",
      "Laser and optical fibre systems",
      "Satellites and radar",
      "Radioactivity and radioactive substances",
      "Uses of radiation and radioisotopes",
      "X-rays, ultrasound, ECG and EEG",
      "MRI, CT scan and angiography",
      "Important industries of Pakistan and use of technology",
    ],
  },
  {
    number: 11,
    title: "Space and Pakistan Nuclear Program",
    topics: [
      "Space exploration and its benefits",
      "Pakistan's Space Programme (SUPARCO)",
      "Pakistan's Nuclear Programme",
      "Dengue Fever",
    ],
  },
];