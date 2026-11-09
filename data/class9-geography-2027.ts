export const geography2027Info = {
  subject: "Geography",
  subjectUrdu: "جغرافیہ",

  class: 9,
  group: "arts",

  session: "2026-27",
  examination: "Annual Examination 2027",

  textbookAuthority: "Punjab Curriculum and Textbook Board",
  textbookEdition: "Exact edition pending original textbook verification",

  prescribedBook: "Geography for Class IX-X",
  authors: [
    "Sajjad Hussain Sajjad",
    "Kashif Shafique",
    "Sohail Ahmad Majuka",
  ],
  publisher: "Azad Book Depot, Lahore",

  medium: "English / Urdu",

  totalChapters: 5,
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
    chapterTopicsVerified: true,
    originalTextbookPdfVisualCheck: "pending",
    alp2027Verified: false,
    marksSchemeVerified: true,
  },

  note:
    "The five Class IX chapters and their listed topics are transcribed from the BISE Lahore 2025-2027 official syllabus, page 53. The prescribed book is Geography for Class IX-X. The original textbook edition and subject-specific Annual Examination 2027 ALP deletions still require separate verification.",

  sources: {
    biseLahore:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    pectaa:
      "https://pectaa.edu.pk/books-and-publications/",

    curriculum:
      "https://pectaa.edu.pk/curriculum-compliance/",
  },
};

export type Geography2027Chapter = {
  number: number;
  title: string;
  topics: string[];
};

export const geographyChapters2027: Geography2027Chapter[] = [
  {
    number: 1,
    title: "Understanding Geography",
    topics: [
      "Definition and Nature of Geography",
      "The Principle and Spirit of Geography",
      "Purposes of Geography",
      "Scope and Main Branches of Geography",
      "Natural and Social Sciences",
      "Relationship of Geography with Other Subjects",
      "Muslims' Contribution to Geography",
      "Role of Muslims in the Development of Physical and Regional Geography",
      "Important Geographical Concepts of the Muslims",
      "Prominent Muslim Geographers of Islamic Period",
    ],
  },

  {
    number: 2,
    title: "Earth and Its Basic Concerns",
    topics: [
      "Introduction",
      "Shape of the Earth",
      "Size of the Earth",
      "Movements of the Earth",
      "Relation of the Earth",
      "Revolution of the Earth",
      "Reasons for Different Seasons",
      "Lunar and Solar Eclipse",
      "Latitudes and Longitudes",
    ],
  },

  {
    number: 3,
    title: "The Earth",
    topics: [
      "Structure of the Earth",
      "Effects of Mountains on Human Life",
      "Effects of Plateaus on Human Life",
      "Effects of Plains on Human Life",
      "Elements of Change of the Earth's Surface",
      "Internal Agents of Change on Earth's Surface",
      "Effects of Earthquakes on Human Life",
    ],
  },

  {
    number: 4,
    title: "Oceans and Seas",
    topics: [
      "Introduction",
      "Effects of Oceans and Seas on Human Life",
      "Movements of Oceans",
      "Types of Oceanic Currents",
      "Causes of Oceanic Currents",
      "Effects of Oceanic Currents",
    ],
  },

  {
    number: 5,
    title: "The Atmosphere",
    topics: [
      "Introduction",
      "Composition of the Atmosphere",
      "Structure of the Atmosphere",
      "Components of Weather and Climate",
      "Factors Affecting Temperature",
      "Temperature Distribution",
      "Atmospheric Pressure",
      "Types of Winds",
      "Clouds and Types of Clouds",
      "Rainfall and Types of Rainfall",
      "Impacts of Climate on Human Life",
    ],
  },
];