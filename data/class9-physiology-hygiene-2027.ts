export const physiologyHygiene2027Info = {
  subject: "Physiology & Hygiene",
  subjectUrdu: "فعلیات و حفظانِ صحت",
  class: 9,
  group: "arts",
  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookEdition: "Exact edition pending original textbook verification",
  medium: "English / Urdu",

  totalChapters: 7,
  totalMarks: 75,
  examDuration: "2 hours 30 minutes",

  partOneMarks: 75,
  partTwoMarks: 75,
  practicalMarks: null,

  notification: null,
  notificationDate: null,

  verification: {
    officialBoardSyllabusListed: true,
    classNineChapterListVerified: true,
    originalTextbookPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: true,
  },

  note:
    "The BISE Lahore 2025-2027 syllabus identifies these seven chapters for Part-I (Class IX). The listed chapter titles and topics are transcribed from the board syllabus. The original textbook edition and any subject-specific Annual Examination 2027 ALP deletions still require separate verification.",

  sources: {
    biseLahore:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    pectaa:
      "https://pectaa.edu.pk/books-and-publications/",

    curriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type PhysiologyHygiene2027Chapter = {
  number: number;
  title: string;
  topics: string[];
};

export const physiologyHygieneChapters2027: PhysiologyHygiene2027Chapter[] =
  [
    {
      number: 1,
      title: "Our Food and Eating Habits",
      topics: [
        "Ingredients of food: carbohydrates, proteins, fats, mineral salts, vitamins and water",
        "Energy requirements of cells and sources of energy",
        "Chemical composition and nature of food substances",
        "Nutritional requirements",
        "Balanced diet: quantity, calorific value and quality",
        "Regular meal times and healthy eating habits",
        "Hand hygiene and mouth care",
        "Care of teeth and proper mastication",
        "Avoidance of overeating",
      ],
    },
    {
      number: 2,
      title: "Building Materials of Human Body",
      topics: [
        "Protoplasm: brief physical and chemical nature",
        "Cell membrane and cytoplasm",
        "Functions of cell membrane and cytoplasm",
        "Tissues: epithelial, muscular, cartilage and bone",
        "Organs: definition and selected examples",
      ],
    },
    {
      number: 3,
      title: "Types of Microorganisms",
      topics: [
        "Nature and categories of microorganisms",
        "Environments in which microorganisms survive and grow",
        "Importance of microorganisms for human beings",
        "Microbes",
        "Viruses",
        "Bacteria",
        "Unicellular organisms",
      ],
    },
    {
      number: 4,
      title: "Digestive System",
      topics: [
        "Digestive organs",
        "External morphology of mouth, teeth, tongue and salivary glands",
        "Gullet and stomach",
        "Small and large intestines",
        "Liver, gallbladder and pancreas",
        "Mechanism of digestion in the mouth",
        "Mechanism of digestion in the stomach",
        "Mechanism of digestion in the intestines",
        "Assimilation of food",
      ],
    },
    {
      number: 5,
      title: "Circulatory System",
      topics: [
        "Structure of the heart",
        "Blood vessels: arteries, veins and capillaries",
        "Functions of the heart and blood vessels",
        "Composition and functions of blood",
        "Transportation, coagulation and temperature control",
        "Blood transfusion and blood groups",
      ],
    },
    {
      number: 6,
      title: "Respiratory System",
      topics: [
        "Structure and functions of the nose, pharynx, trachea and bronchi",
        "Structure and detailed study of the lungs",
        "Mechanism of respiration",
        "Breathing: inspiration and expiration",
        "Exchange and transportation of gases",
        "Exchange of gases in body tissues",
      ],
    },
    {
      number: 7,
      title: "Excretory System",
      topics: [
        "Meaning of excretion",
        "Excretory organs",
        "Structure of the kidney",
        "Structure of the skin",
        "Physiology of excretion",
        "Role of kidneys in excretion",
        "Role of skin in excretion",
      ],
    },
  ];