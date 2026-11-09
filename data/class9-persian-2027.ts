// data/class9-persian-2027.ts

export type Persian2027PaperSection = {
  question: string;
  description: string;
  marks: number;
};

export const persian2027Info = {
  subject: "Persian (Farsi)",
  subjectUrdu: "فارسی",
  class: 9,
  group: "Arts / Humanities",
  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  textbookTitle: "Persian Adab",
  textbookUrduTitle: "فارسی ادب",
  textbookClasses: "Classes IX-X",
  textbookEdition: "Verification pending",

  authorsEditors: [
    "Dr. Khalida Aftab",
    "Muhammad Naeem",
    "Moeen-ud-Din Nizami",
    "Nawaz Ali Sheikh",
  ],

  publisher: "Azad Book Depot, Lahore",
  medium: "Persian",

  totalChapters: null,

  partI: {
    class: 9,
    totalMarks: 75,
    objectiveMarks: 15,
    subjectiveMarks: 60,
    duration: "2 hours 30 minutes",
    objectiveDuration: "20 minutes",
    subjectiveDuration: "2 hours 10 minutes",
    objectiveQuestions: 15,
    marksPerObjectiveQuestion: 1,
  },

  partII: {
    class: 10,
    totalMarks: 75,
  },

  totalCombinedMarks: 150,

  verification: {
    officialBoardSyllabus: true,
    class9Marks: true,
    examinationDuration: true,
    objectivePattern: true,
    subjectivePattern: true,
    prescribedBookTitle: true,
    publisher: true,
    individualChapterTitles: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The official BISE Lahore syllabus for 2025-2027 lists Persian as a Class IX and Class X subject.",
    "Class IX Part-I carries 75 marks, including 15 objective and 60 subjective marks.",
    "The subjective paper includes short-answer questions, Urdu translation of a paragraph, and Urdu translation and explanation of poetry.",
    "Individual lesson and chapter titles have not yet been verified from the original textbook.",
    "No subject-specific Annual Examination 2027 ALP deletion list has been independently verified.",
    "Textbook edition details require further verification.",
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

export const persian2027PaperSections: Persian2027PaperSection[] = [
  {
    question: "Question 2",
    description: "Short-answer questions",
    marks: 12,
  },
  {
    question: "Question 3",
    description: "Short-answer questions",
    marks: 12,
  },
  {
    question: "Question 4",
    description: "Short-answer questions",
    marks: 12,
  },
  {
    question: "Question 5",
    description: "Translate a Persian paragraph into Urdu",
    marks: 14,
  },
  {
    question: "Question 6 (Part A)",
    description: "Translate Persian poetry into Urdu",
    marks: 6,
  },
  {
    question: "Question 6 (Part B)",
    description: "Explanation of Persian poetry",
    marks: 4,
  },
];