export const homeEconomics2027Info = {
  subject: "Elements of Home Economics",
  subjectUrdu: "مبادیاتِ ہوم اکنامکس",
  class: 9,
  group: "arts",
  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookEdition: "Exact edition pending official PDF verification",
  medium: "Urdu",

  totalChapters: null,
  totalMarks: 75,
  examDuration: "2 hours 30 minutes",

  notification: null,
  notificationDate: null,

  verification: {
    officialBoardSyllabusListed: true,
    chapterListComplete: false,
    originalPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: true,
  },

  note:
    "Elements of Home Economics is listed as a Class IX elective in the BISE Lahore 2025-2027 syllabus. The available syllabus outline identifies the sections below, but does not provide a complete independently verified chapter list. These entries must not be treated as the complete textbook contents. No chapter or topic has been marked deleted.",

  sources: {
    biseLahore:
      "https://www.biselahore.com/downloads/notifications/misc/Old%20-%20Syllabus_9th%2610th_%282025_27%29.pdf",
    syllabusOutline:
      "https://www.learningall.com/wp-content/uploads/2012/12/elements-of-home-economics-ssc1.pdf",
    pectaa:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};

export type HomeEconomics2027Section = {
  number: number;
  title: string;
  topics: string[];
  verification: "provisional";
};

export const homeEconomicsChapters2027: HomeEconomics2027Section[] = [
  {
    number: 1,
    title: "Significance and Scope of Home Economics",
    topics: [
      "Definition of Home Economics",
      "Relationship of Home Economics with other areas of learning",
      "Importance of Home Economics as a field of study",
    ],
    verification: "provisional",
  },
  {
    number: 2,
    title: "Understanding One's Self and Others",
    topics: [
      "Understanding one's self and others",
      "Children's growth and development",
      "Children's needs and problems",
      "Relationships with family members, classmates, teachers and friends",
      "Principles of child care",
      "Importance of play in a child's life",
      "Selection of toys",
    ],
    verification: "provisional",
  },
  {
    number: 5,
    title: "Home Management and Housing",
    topics: [
      "Definition and scope of Home Management",
      "Management in home-making tasks",
      "Principles and processes of management",
      "Family resources and their use",
      "Role of the consumer",
      "Family values, goals and standards",
      "Family size and quality of life",
      "Planning for home and family",
      "Beauty and comfort in the home",
      "Use of space and arrangement of furniture",
      "Application of art in daily living",
      "Design and contemporary craft design",
    ],
    verification: "provisional",
  },
];