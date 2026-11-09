// data/class9-seerat-ul-rasool-2027.ts

export type SeeratUlRasool2027Topic = {
  number: number;
  title: string;
  titleUrdu: string;
  details: string[];
  verificationNote?: string;
};

export const seeratUlRasool2027Info = {
  subject: "Seerat-ul-Rasool",
  subjectUrdu: "سیرت الرسول خاتم النبیین ﷺ",

  class: 9,
  group: "Dars-e-Nizami",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  partI: {
    class: 9,
    marksOnDetailedPage: 50,
    duration: "2 hours",
  },

  totalTopics: 10,

  prescribedBook: {
    title: "Rahmat-e-Alam",
    author: "Syed Salman Nadvi",
    publisher: "Kutub Khana Majeedia, Multan",
  },

  marksVerification: {
    detailedPageMarks: 50,
    overviewPageMarks: 100,
    discrepancy: true,
    note:
      "BISE Lahore syllabus page 79 states 50 marks for Part-I Class IX, while the Dars-e-Nizami overview on page 78 lists 100 marks. The discrepancy requires confirmation from the Board. The detailed page figure is displayed separately and is not treated as finally reconciled.",
  },

  verification: {
    officialSubjectListing: true,
    officialDetailedSyllabus: true,
    class9Scope: true,
    duration: true,
    detailedPageMarks: true,
    marksDiscrepancy: true,
    prescribedBook: true,
    originalBookVisualCheck: false,
    exactUrduTextVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The detailed Seerat-ul-Rasool syllabus is printed on page 79 of the BISE Lahore 2025-2027 syllabus.",
    "The detailed page identifies Part-I Class IX, 50 marks and 2 hours.",
    "The Dars-e-Nizami overview on page 78 lists 100 marks. This conflict has not been resolved.",
    "Some Urdu OCR text is unclear. The English headings are explanatory translations and should be checked against the original printed syllabus.",
    "No unverified ALP deletions have been applied.",
  ],

  source:
    "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
};

export const seeratUlRasoolTopics2027: SeeratUlRasool2027Topic[] = [
  {
    number: 1,
    title: "The Family of Prophet Muhammad ﷺ",
    titleUrdu: "رسول اللہ ﷺ کے خاندان",

    details: [
      "A brief introduction to Prophet Ibrahim (AS).",
      "A brief introduction to the Quraysh.",
    ],
  },

  {
    number: 2,
    title: "Childhood of Prophet Muhammad ﷺ",
    titleUrdu: "رسول اللہ ﷺ کا بچپن",

    details: [
      "From birth until the passing of Abdul Muttalib.",
    ],
  },

  {
    number: 3,
    title: "Guardianship of Abu Talib and Important Events of Youth",
    titleUrdu: "ابو طالب کی کفالت اور آپ ﷺ کے جوانی کے اہم واقعات",

    details: [
      "Hilf al-Fudul.",
      "Reconstruction of the Ka'bah.",
      "Commercial journeys.",
      "Marriage to Hazrat Khadijah (RA).",
    ],
    verificationNote:
      "The Urdu wording is transcribed from the board syllabus; original printed text visual verification is pending.",
  },

  {
    number: 4,
    title: "Prophethood and the Makkan Life",
    titleUrdu: "بعثت اور مکی زندگی",

    details: [
      "Declaration of Prophethood.",
      "Invitation to Islam and preaching.",
      "Difficulties and hardships.",
      "Acceptance of Islam by important personalities.",
      "Migration to Abyssinia.",
      "The social boycott in Shi'b Abi Talib.",
      "The Year of Sorrow.",
      "Journey to Ta'if.",
      "Pledges of Aqabah.",
    ],
  },

  {
    number: 5,
    title: "Migration to Madinah and Early Madinan Events",
    titleUrdu: "ہجرت مدینہ اور مدنی زندگی کے ابتدائی واقعات",

    details: [
      "The journey of migration.",
      "Construction of Masjid Quba.",
      "Construction of Masjid-e-Nabawi.",
      "Brotherhood in Madinah.",
      "Change of Qiblah.",
      "Charter of Madinah.",
    ],
    verificationNote:
      "One word in the original OCR between the brotherhood and Qiblah references is unclear and has not been reconstructed.",
  },

  {
    number: 6,
    title: "Important Events of Madinan Life and Major Campaigns",
    titleUrdu: "مدنی زندگی کے اہم واقعات اور غزوات",

    details: [
      "Battle of Badr.",
      "Battle of Uhud.",
      "Battle of Khandaq.",
      "Conquest of Makkah.",
      "Treaty of Hudaybiyyah.",
      "Farewell Pilgrimage.",
      "Announcement of the completion of religion.",
    ],
  },

  {
    number: 7,
    title: "Final Illness, Passing and Funeral Arrangements",
    titleUrdu: "مرض، وصال اور تجہیز و تکفین",

    details: [
      "The final illness of Prophet Muhammad ﷺ.",
      "His passing and funeral arrangements.",
    ],
    verificationNote:
      "The exact Urdu wording of this heading requires visual confirmation from the original PDF.",
  },

  {
    number: 8,
    title: "Wives and Children of Prophet Muhammad ﷺ",
    titleUrdu: "ازواج مطہرات اور اولاد",

    details: [
      "An overview of the blessed wives.",
      "An overview of the children of Prophet Muhammad ﷺ.",
    ],
  },

  {
    number: 9,
    title: "Character and Habits of Prophet Muhammad ﷺ",
    titleUrdu: "آپ ﷺ کے اخلاق و عادات",

    details: [
      "Character and moral conduct.",
      "Personal habits and daily conduct.",
    ],
  },

  {
    number: 10,
    title: "The Message of Seerat-e-Taiba to Humanity",
    titleUrdu: "سیرت طیبہ کا ادبی پیغام انسانیت کے نام",

    details: [
      "The message of the life of Prophet Muhammad ﷺ for humanity.",
    ],
  },
];