export const parchaBafi2027Info = {
  subject: "Parcha Bafi (Textile and Clothing)",
  subjectUrdu: "لباس اور پارچہ بافی",

  class: 9,
  group: "arts",

  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "PECTAA / PCTB",
  textbookEdition: "Verification pending",

  medium: ["Urdu"],

  // Chapter details are not yet independently verified.
  totalChapters: null,

  // BISE Lahore scheme: Part-I 60, Part-II 60,
  // Practical 30.
  totalMarks: 150,
  partIMarks: 60,
  partIPracticalMarks: 30,
  partITheoryMarks: 60,
  partIITotalMarks: 60,
  practicalMarks: 30,

  // Exact paper duration is not independently confirmed.
  examDuration: null,

  notification: null,
  notificationDate: null,

  verification: {
    officialBookListing: true,
    subjectNameMapping: true,
    classIXChapterSequence: false,
    chapterTopics: false,
    originalTextbookPdfVisualCheck: false,
    examSchemeMarks: true,
    examDuration: false,
    alp2027: false,
  },

  note:
    "PECTAA lists Parcha Bafi (Textile and Clothing) for Class IX. BISE Lahore uses the subject title Clothing & Textile. The available 2025-2027 syllabus scheme indicates 60 marks for Part-I theory and 30 practical marks, with 60 marks for Part-II. The original textbook and detailed Class IX chapter contents have not yet been visually verified. No unverified chapter or topic has been added.",

  sources: {
    officialCurriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",

    officialTextbookPdf:
      "https://drive.google.com/file/d/1DOfWIk1Tt_WonJrNssSby3lYsJ6HjXe0/view",

    boardSyllabusReference:
      "BISE Lahore Syllabus 2025-2027, Clothing & Textile",

    syllabusReferenceUrl:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};

export type ParchaBafi2027Chapter = {
  number: number;
  title: string;
  titleUrdu?: string;
  topics: string[];
};

export const parchaBafiChapters2027: ParchaBafi2027Chapter[] = [];