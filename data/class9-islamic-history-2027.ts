// data/class9-islamic-history-2027.ts

export type IslamicHistory2027Chapter = {
  number: number;
  class: 9 | 10;
  title: string;
  topics: string[];
  verificationNote?: string;
};

export const islamicHistory2027Info = {
  subject: "Islamic History / Muslim History",
  subjectUrdu: "تاریخِ اسلام / تاریخِ مسلم",

  class: 9,
  group: "Arts / Humanities",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  textbookTitle: "History of Islam Classes IX-X",
  textbookEdition: "Edition verification pending",

  author: "Dr. Shahid Mukhtar",
  publisher: "Imtiaz Book Depot",

  medium: "English",

  totalChapters: 9,
  class9Chapters: 5,
  class10Chapters: 4,

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
    class9ChapterSequence: true,
    class10ChapterSequence: true,
    marksScheme: true,
    duration: true,
    prescribedBook: true,
    author: true,
    publisher: true,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "Chapter sequence and examination scheme are transcribed from the BISE Lahore 2025-2027 syllabus.",
    "The official PDF lists five chapters in Part-I for Class IX.",
    "The official PDF lists four chapters in Part-II. Its heading says Class IX, although it is Part-II of the combined IX-X textbook. This apparent inconsistency requires confirmation.",
    "Part-II is displayed separately as Class X reference, not as part of the Class IX syllabus.",
    "The Chapter 3 topic list contains an incomplete phrase in the extracted PDF text. It has not been completed by guesswork.",
    "Original textbook visual verification is pending.",
    "No subject-specific Annual Examination 2027 ALP deletion has been independently verified.",
    "Historical events are presented as academic syllabus topics, not as practical military guidance.",
  ],

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",

    officialBooks:
      "https://pectaa.edu.pk/books-and-publications/",
  },
};

export const islamicHistoryChapters2027: IslamicHistory2027Chapter[] = [
  // CLASS IX — PART I

  {
    number: 1,
    class: 9,
    title: "Condition of the Pre-Islamic World",
    topics: [
      "Condition of the world in general",
      "Religious conditions of pre-Islamic Arabia",
      "Social conditions of pre-Islamic Arabia",
      "Economic conditions of pre-Islamic Arabia",
      "Political conditions of pre-Islamic Arabia",
    ],
  },

  {
    number: 2,
    class: 9,
    title: "The Life of Prophet Muhammad ﷺ",
    topics: [
      "Life before the declaration of Nubuwwat",
      "Daawat and sacrifices of early Muslims",
      "Hijrat-e-Habsha",
      "Shaab-e-Abi Talib",
      "Miraj",
      "Journey to Taif",
      "Ba'at-e-Aquba",
      "Hijrat-e-Madina",
      "Mesaq-e-Madina",
      "Brief historical account of the Ghazwat",
      "Conquest of Makkah",
      "Hajjat-ul-Wida",
      "Khutba-ul-Wida",
    ],
  },

  {
    number: 3,
    class: 9,
    title: "Teachings of Prophet Muhammad ﷺ",
    topics: [
      "Teachings of the Holy Prophet ﷺ",
      "Social Reformer",
      "Head of State",
      "Supreme Commander",
      "Chief",
      "Statesman and Administrator",
      "Education",
      "Upholder of the Dignity of Labour",
    ],
    verificationNote:
      "The official PDF extraction ends with an incomplete phrase, 'Perfect Ma'. It has deliberately not been reconstructed or guessed.",
  },

  {
    number: 4,
    class: 9,
    title: "Description of Khulfa-e-Rashideen",
    topics: [
      "Brief biographical description of Khulfa-e-Rashideen",
      "Hazrat Abu Bakar Siddique رضي الله تعالى عنه",
      "Hazrat Umar-e-Farooq رضي الله تعالى عنه",
      "Hazrat Usman-e-Ghani رضي الله تعالى عنه",
      "Hazrat Ali Al-Murtaza رضي الله تعالى عنه",
    ],
  },

  {
    number: 5,
    class: 9,
    title: "Achievements of Khulfa-e-Rashideen",
    topics: [
      "Contributions of Khulfa-e-Rashideen towards the cause of Islam",
      "Historical expansion of the Islamic State",
      "Historical contributions of Hazrat Saad Bin Abi Waqas",
      "Historical contributions of Hazrat Khalid Bin Walid",
      "Historical contributions of Hazrat Abu Obyedah Bin Jarrah",
      "Historical contributions of Hazrat Umar Bin Al-Aas",
      "Historical contributions of Hazrat Abu Musa Al-Ashri",
      "Administration and judiciary under the Pious Caliphs",
    ],
  },

  // CLASS X — PART II REFERENCE

  {
    number: 6,
    class: 10,
    title: "Umayyad",
    topics: [
      "Hazrat Amir Muawiya",
      "Yazid and the historical events of Karbala",
      "Hazrat Imam Hussain رضي الله تعالى عنه",
      "Hazrat Abdullah Bin Zubair",
      "Abdul Malik bin Marwan",
      "Walid bin Abdul Malik",
      "Suleman bin Abdul Malik",
      "Umar bin Abdul Aziz",
      "Causes of the decline of the Umayyads",
    ],
  },

  {
    number: 7,
    class: 10,
    title: "Achievements of Umayyad",
    topics: [
      "Historical expansion and propagation of Islam",
      "Cultural and scientific achievements",
      "Administration and judiciary",
    ],
  },

  {
    number: 8,
    class: 10,
    title: "Abbasid",
    topics: [
      "Al-Saffah",
      "Al-Mansoor",
      "Haroon-ur-Rashid",
      "Bar-Maki",
      "Mamun-ur-Rashid",
      "Al-Muatasim",
    ],
  },

  {
    number: 9,
    class: 10,
    title: "Achievements of Abbasid",
    topics: [
      "Cultural, scientific and literary achievements",
      "Historical propagation and expansion of Islam",
      "Administrative reforms",
      "Socio-economic development",
      "Causes of the decline of Abbasides",
    ],
  },
];