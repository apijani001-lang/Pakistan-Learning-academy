export const arabic2027Info = {
  subject: "Arabic (Ikhtiyari)",
  subjectUrdu: "عربی اختیاری",

  class: 9,
  group: "arts",

  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "BISE Lahore / PCTB",

  textbookTitle: "Al-Mutala'ah Al-Arabiyyah",
  textbookTitleArabic: "المطالعة العربية",

  textbookEdition: "Exact edition verification pending",

  authors: [
    "Professor Dr. Tahoor Ahmad Zafar",
  ],

  publishers: [
    "Faran Publications, Lahore",
    "Azad Book Depot, Urdu Bazar, Lahore",
  ],

  medium: ["Arabic"],

  totalChapters: null,

  totalMarks: 75,
  objectiveMarks: 15,
  subjectiveMarks: 60,

  examDuration: "2 hours 30 minutes",

  objectivePattern: {
    marks: 15,
    questionCount: 15,
    marksPerQuestion: 1,
    duration: "20 minutes",
  },

  subjectivePattern: [
    {
      question: 2,
      section: "Answers in Arabic",
      marks: 10,
    },
    {
      question: 3,
      section: "Translation of sentences into Arabic",
      marks: 10,
    },
    {
      question: 4,
      section: "Sentence arrangement",
      marks: 3,
    },
    {
      question: 4,
      section: "Applying Arabic grammatical vowel marks (I'rab)",
      marks: 2,
    },
    {
      question: 4,
      section: "Singular and plural",
      marks: 5,
    },
    {
      question: 5,
      section: "Urdu translation of prose",
      marks: 10,
    },
    {
      question: 6,
      section: "Urdu translation of poetry",
      marks: 10,
    },
    {
      question: 7,
      section: "Letter or application",
      marks: 10,
    },
  ],

  classIXContent: {
    part: "Part-I",
    marks: 75,
    duration: "2 hours 30 minutes",
    detailedLessonSequenceVerified: false,
    textbookVisualVerification: false,
  },

  classXContent: {
    part: "Part-II",
    marks: 75,
  },

  verification: {
    officialBoardSyllabus: true,
    paperMarks: true,
    paperDuration: true,
    paperPattern: true,
    textbookTitle: true,
    individualLessonTitles: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  note:
    "Arabic Class IX paper pattern and prescribed textbook information are based on BISE Lahore Syllabus 2025-2027, page 67. The exact lesson sequence and individual textbook contents have not yet been independently verified. No unverified chapter titles or deleted topics have been added.",

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type Arabic2027PaperSection = {
  question: number;
  section: string;
  marks: number;
};

export const arabic2027PaperSections: Arabic2027PaperSection[] =
  arabic2027Info.subjectivePattern;