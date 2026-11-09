export const computer2027Info = {
  subject: "Computer Science & Entrepreneurship",
  subjectUrdu: "کمپیوٹر سائنس",
  class: 9,
  group: "science",
  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "PECTAA / Punjab Curriculum and Textbook Board",
  textbookEdition:
    "2026-27 revised edition (official PDF visual verification pending)",

  medium: "English",

  totalChapters: 9,
  totalMarks: null,
  examDuration: null,

  notification: null,
  notificationDate: null,

  verification: {
    officialSubjectListed: true,
    revisedChapterListIndependentlyVerified: false,
    originalPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: false,
  },

  note:
    "The nine-unit chapter sequence is based on available 2026-27 secondary textbook listings. The official textbook PDF has not yet been visually checked. The older 12-unit textbook structure must not be mixed with this revised sequence. No chapter or topic has been marked deleted because a subject-specific Annual Examination 2027 ALP list has not been independently verified.",

  sources: {
    officialPECTAA:
      "https://pectaa.edu.pk/books-and-publications/",
    revisedBookReference:
      "https://libraryonline.pk/resource/9th-class-computer-textbook-0a0efa95/",
  },
};

export type Computer2027Chapter = {
  number: number;
  title: string;
  topics: string[];
};

export const computerChapters2027: Computer2027Chapter[] = [
  {
    number: 1,
    title: "Introduction to Computational Systems",
    topics: [],
  },
  {
    number: 2,
    title: "System Design and Troubleshooting",
    topics: [],
  },
  {
    number: 3,
    title: "Introduction to Computer Networks",
    topics: [],
  },
  {
    number: 4,
    title: "Computational Thinking",
    topics: [],
  },
  {
    number: 5,
    title: "Web Development with HTML, CSS and JavaScript",
    topics: [],
  },
  {
    number: 6,
    title: "Data Science and Data Gathering",
    topics: [],
  },
  {
    number: 7,
    title: "Emerging Technologies in Computer Science",
    topics: [],
  },
  {
    number: 8,
    title: "Ethical, Social, and Legal Concerns in Computer Usage",
    topics: [],
  },
  {
    number: 9,
    title: "Entrepreneurship in Digital Age",
    topics: [],
  },
];