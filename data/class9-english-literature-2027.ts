// data/class9-english-literature-2027.ts

export type EnglishLiterature2027Section = {
  title: string;
  prescribedWork: string;
  coverage: string;
  sourcePages?: string;
  syllabusShare?: string;
};

export const englishLiterature2027Info = {
  subject: "English Literature",
  subjectUrdu: "انگریزی ادب",
  class: 9,
  group: "Arts / Humanities",
  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  totalMarks: 75,
  duration: "2 hours 30 minutes",

  partI: {
    class: 9,
    totalMarks: 75,
    duration: "2 hours 30 minutes",
  },

  partII: {
    class: 10,
    totalMarks: 75,
    duration: "2 hours 30 minutes",
  },

  prescribedBooks: [
    {
      title: "More Poems for Young People",
      publisher: "Oxford University Press",
      coverage: "Pages 1 to 21",
      syllabusShare: "50% of syllabus",
    },
    {
      title: "Anthology of Essays and Short Stories",
      publisher: "West Pakistan Publishing Co. Ltd.",
      coverage: "Short Stories only, pages 1 to 45",
      syllabusShare: "50% of syllabus",
    },
    {
      title: "The Winslow Boy",
      author: "Terence Rattigan",
      publisher: "Modern Plays for Students",
      coverage: "Prescribed play",
    },
  ],

  medium: "English",

  totalSections: 3,

  verification: {
    officialBoardSyllabus: true,
    class9Marks: true,
    examinationDuration: true,
    prescribedPoetryBook: true,
    prescribedShortStoryBook: true,
    prescribedPlay: true,
    individualPoemTitles: false,
    individualShortStoryTitles: false,
    originalBooksVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The official BISE Lahore 2025-2027 syllabus lists English Literature for Part-I (Class IX).",
    "Poetry accounts for 50% of the prescribed syllabus, using More Poems for Young People, pages 1 to 21.",
    "The Anthology of Essays and Short Stories is prescribed for short stories only, pages 1 to 45.",
    "The prescribed play is The Winslow Boy by Terence Rattigan.",
    "Individual poem and short-story titles have not yet been independently verified from the original books.",
    "No subject-specific Annual Examination 2027 ALP deletion list has been independently verified.",
    "The board syllabus does not provide a detailed question-wise marks distribution in this section.",
  ],

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};

export const englishLiterature2027Sections: EnglishLiterature2027Section[] = [
  {
    title: "Poetry",
    prescribedWork: "More Poems for Young People",
    coverage: "Pages 1 to 21",
    syllabusShare: "50%",
  },
  {
    title: "Short Stories",
    prescribedWork: "Anthology of Essays and Short Stories",
    coverage: "Short Stories only, pages 1 to 45",
    syllabusShare: "50%",
  },
  {
    title: "Play",
    prescribedWork: "The Winslow Boy",
    coverage: "Prescribed play",
  },
];