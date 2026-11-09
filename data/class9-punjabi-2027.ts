export const punjabi2027Info = {
  subject: "Punjabi Ikhtiyari",
  subjectUrdu: "پنجابی",

  class: 9,
  group: "arts",

  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookTitle: "Punjabi Adab te Zaban",
  textbookEdition: "Exact edition verification pending",

  authors: [
    "Syed Akhtar Hussain Akhtar",
    "Dr. Zakir Hameed Shahid",
  ],

  publisher: "Pak Imperial Book Depot, Lahore",

  medium: ["Punjabi"],

  totalChapters: null,

  totalMarks: 75,
  objectiveMarks: 15,
  subjectiveMarks: 60,
  examDuration: "2 hours 30 minutes",

  paperPattern: [
    {
      section: "Nasar",
      marks: 25,
    },
    {
      section: "Nazm",
      marks: 15,
    },
    {
      section: "Letter / Story",
      marks: 10,
    },
    {
      section: "Grammar",
      marks: 15,
    },
    {
      section: "Syllabus Reading",
      marks: 10,
    },
  ],

  classIXContent: {
    prose: {
      title: "Textbook Prose",
      lessonRange: "Lessons 2 to 7",
      pages: "9-42",
      verifiedFromBoardSyllabus: true,
    },

    poetry: {
      title: "Textbook Poetry",
      poemRange: "Poems 1 to 15",
      pages: "90-119",
      verifiedFromBoardSyllabus: true,
    },
  },

  verification: {
    officialBoardSyllabus: true,
    officialBookListing: true,
    paperMarks: true,
    paperDuration: true,
    proseAndPoetryRanges: true,
    exactLessonTitles: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  note:
    "Class IX Punjabi syllabus information is based on the BISE Lahore 2025-2027 syllabus, page 68. Prose lessons 2-7 and poems 1-15 are listed with their page ranges. Exact individual lesson and poem titles have not yet been independently checked against the original textbook. No unverified lesson or poem titles have been invented.",

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type Punjabi2027Section = {
  title: string;
  lessonRange: string;
  pages: string;
  topics: string[];
};

export const punjabi2027Sections: Punjabi2027Section[] = [
  {
    title: "Nasar (Prose)",
    lessonRange: "Lessons 2 to 7",
    pages: "9-42",
    topics: [],
  },
  {
    title: "Nazm (Poetry)",
    lessonRange: "Poems 1 to 15",
    pages: "90-119",
    topics: [],
  },
];