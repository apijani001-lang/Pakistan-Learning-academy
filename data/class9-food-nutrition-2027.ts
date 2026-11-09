export const foodNutrition2027Info = {
  subject: "Food and Nutrition",
  subjectUrdu: "غذا اور غذائیت",
  class: 9,
  group: "arts",
  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "PECTAA / Punjab Curriculum and Textbook Board",
  textbookEdition: "Official Class IX listing; exact edition pending PDF verification",
  medium: "Urdu",

  totalChapters: 5,
  totalMarks: null,
  examDuration: null,

  notification: null,
  notificationDate: null,

  verification: {
    officialBookListed: true,
    chapterSequenceIndependentlyVerified: false,
    originalPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: false,
  },

  note:
    "The PECTAA official Class IX catalogue lists Ghiza aur Ghizayat as an elective book. The five-chapter sequence is based on available secondary textbook listings. The original official PDF has not yet been visually checked. No chapter or topic has been marked deleted, and no 2027 examination marks or duration are claimed.",

  sources: {
    officialPECTAA:
      "https://pectaa.edu.pk/books-and-publications/",
    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type FoodNutrition2027Chapter = {
  number: number;
  title: string;
  titleUrdu: string;
  topics: string[];
};

export const foodNutritionChapters2027: FoodNutrition2027Chapter[] = [
  {
    number: 1,
    title: "Introduction to Food and Nutrition",
    titleUrdu: "غذا اور غذائیت کا تعارف",
    topics: [],
  },
  {
    number: 2,
    title: "Energy and Nutrients",
    titleUrdu: "توانائی اور غذائی اجزاء",
    topics: [],
  },
  {
    number: 3,
    title: "Balanced Diet",
    titleUrdu: "متوازن غذا",
    topics: [],
  },
  {
    number: 4,
    title: "Composition of Foods",
    titleUrdu: "غذاؤں کے اجزائے ترکیبی",
    topics: [],
  },
  {
    number: 5,
    title: "Purchasing and Storing Food Items",
    titleUrdu: "اشیائے خور و نوش کی خریداری اور ذخیرہ کرنا",
    topics: [],
  },
];