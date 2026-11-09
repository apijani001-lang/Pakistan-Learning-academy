// data/class9-urdu-literature-2027.ts

export type UrduLiterature2027Entry = {
  number: number;
  genre: string;
  title: string;
  titleUrdu: string;
  pages: string;
  class: 9 | 10;
  verificationNote?: string;
};

export type UrduLiterature2027Section = {
  part: 1 | 2;
  class: 9 | 10;
  title: string;
  entries: UrduLiterature2027Entry[];
  additionalTopics?: string[];
  marks: number;
  duration: string;
};

export const urduLiterature2027Info = {
  subject: "Urdu Literature",
  subjectUrdu: "اردو اختیاری",

  class: 9,
  group: "Arts / Humanities",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  textbookTitle: "Bustan-e-Adab (Urdu Ikhtiyari)",
  textbookUrduTitle: "بستانِ ادب (اردو اختیاری)",

  textbookEdition: "Edition verification pending",

  authors:
    "Professor Talat Ayab Zaidi, Professor Ahmad Ali Shah, Iftikhar Ahmad",

  publisher: "West Pakistan Publishing Limited, Lahore",

  medium: "Urdu",

  totalParts: 2,
  totalMarks: 150,

  partI: {
    class: 9,
    marks: 75,
    duration: "2 hours 30 minutes",
  },

  partII: {
    class: 10,
    marks: 75,
    duration: "2 hours 30 minutes",
  },

  verification: {
    officialBoardSyllabus: true,
    class9Marks: true,
    class9Duration: true,
    prescribedBook: true,
    authors: true,
    publisher: true,
    originalBookVisualCheck: false,
    individualLiteraryTitlesVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The BISE Lahore 2025-2027 syllabus identifies Urdu Ikhtiyari as a separate elective subject.",
    "Part-I belongs to Class IX and Part-II belongs to Class X.",
    "The Class IX page references and available Urdu text have been transcribed from the board syllabus.",
    "Some individual literary titles and page descriptions require original textbook visual verification.",
    "No unverified 2027 ALP deletions have been applied.",
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

export const urduLiteratureSections2027: UrduLiterature2027Section[] = [
  {
    part: 1,
    class: 9,
    title: "Part-I — Class IX",
    marks: 75,
    duration: "2 hours 30 minutes",

    entries: [
      {
        number: 1,
        genre: "Prose",
        title: "Sar Guzasht-e-Azad",
        titleUrdu: "سرگزشت آزاد",
        pages: "7",
        class: 9,
        verificationNote:
          "The extracted board syllabus text contains an unclear extended title. Original page verification is pending.",
      },
      {
        number: 2,
        genre: "Prose",
        title: "Ibtidai Science",
        titleUrdu: "ابتدائی سائنس",
        pages: "102",
        class: 9,
      },
      {
        number: 3,
        genre: "Poetry",
        title: "Husn Kakrovi",
        titleUrdu: "حسن کاکوروی",
        pages: "182",
        class: 9,
      },
      {
        number: 4,
        genre: "Poetry",
        title: "Poetry selection",
        titleUrdu: "منتخب نظم",
        pages: "202",
        class: 9,
        verificationNote:
          "The individual title is unclear in the extracted board syllabus text.",
      },
      {
        number: 5,
        genre: "Poetry",
        title: "Poetry selection",
        titleUrdu: "منتخب نظم",
        pages: "223",
        class: 9,
        verificationNote:
          "The individual title is unclear in the extracted board syllabus text.",
      },
      {
        number: 6,
        genre: "Ghazal",
        title: "Nawa-e-Murghan-e-Dagh",
        titleUrdu: "نوائے مرغانِ داغ",
        pages: "236",
        class: 9,
      },
    ],

    additionalTopics: [
      "Tashbeeh (تشبیہ)",
      "Istiara (استعارہ)",
      "Majaz-e-Mursal (مجاز مرسل)",
      "Kinaya (کنایہ)",
      "Matla (مطلع)",
      "Maqta (مقطع)",
      "Qafia (قافیہ)",
      "Radif (ردیف)",
      "Sanat-e-Tazad (صنعت تضاد)",
      "Sanat-e-Takrar (صنعت تکرار)",
      "Husn-e-Taleel (حسن تعلیل)",
      "Muraat-un-Nazeer (مراعات النظیر)",
      "Sanat-e-Tajnis (صنعت تجنیس)",
    ],
  },

  {
    part: 2,
    class: 10,
    title: "Part-II — Class X",
    marks: 75,
    duration: "2 hours 30 minutes",

    entries: [
      {
        number: 1,
        genre: "Prose",
        title: "Kulliyat-e-Miyani",
        titleUrdu: "کلیاتِ میانی",
        pages: "104",
        class: 10,
        verificationNote:
          "The extracted Urdu title requires original textbook visual verification.",
      },
      {
        number: 2,
        genre: "Letters",
        title: "Letters by Muhammad Ali",
        titleUrdu: "خطوط از محمد علی",
        pages: "178",
        class: 10,
        verificationNote:
          "The author's full name is unclear in the extracted board syllabus text.",
      },
      {
        number: 3,
        genre: "Ghazal",
        title: "Allama Iqbal",
        titleUrdu: "علامہ اقبال",
        pages: "238",
        class: 10,
      },
      {
        number: 4,
        genre: "Poetry",
        title: "Allama Iqbal",
        titleUrdu: "علامہ اقبال",
        pages: "247",
        class: 10,
      },
      {
        number: 5,
        genre: "Literary selection",
        title: "Selection requiring verification",
        titleUrdu: "منتخب ادبی حصہ",
        pages: "203",
        class: 10,
        verificationNote:
          "The exact literary category and title require original textbook visual verification.",
      },
    ],

    additionalTopics: [
      "Essay writing",
      "Academic topics",
      "Literary topics",
      "Biographical topics",
    ],
  },
];