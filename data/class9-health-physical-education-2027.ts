export const healthPhysicalEducation2027Info = {
  subject: "Health & Physical Education",
  subjectUrdu: "صحت و جسمانی تعلیم",

  class: 9,
  group: "arts",

  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookEdition: "Exact edition pending official textbook verification",

  medium: "Urdu / English",

  totalChapters: null,

  theoryMarks: 60,
  practicalMarks: 30,
  totalMarks: 90,

  examDuration: null,
  practicalDuration: null,

  notification: null,
  notificationDate: null,

  verification: {
    officialBoardSyllabusListed: true,
    classNineSubjectListed: true,
    originalTextbookPdfVisualCheck: "pending",
    chapterListVerified: false,
    alp2027Verified: false,
    marksSchemeVerified: true,
    practicalSchemeVerified: true,
  },

  note:
    "BISE Lahore's 2025-2027 syllabus lists Health & Physical Education as a Humanities elective. Part-I carries 60 theory marks and 30 practical marks. The complete Class IX chapter list and exact textbook edition have not yet been independently verified. No chapter titles or deleted topics have been invented.",

  sources: {
    biseLahore:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    pectaa:
      "https://pectaa.edu.pk/books-and-publications/",

    curriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type HealthPhysicalEducation2027Chapter = {
  number: number;
  title: string;
  topics: string[];
};

export const healthPhysicalEducationChapters2027: HealthPhysicalEducation2027Chapter[] =
  [];