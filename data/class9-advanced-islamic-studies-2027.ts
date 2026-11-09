// data/class9-advanced-islamic-studies-2027.ts

export type AdvancedIslamicStudies2027Part = {
  part: 1 | 2;
  class: 9 | 10;
  title: string;
  marks: number;
  duration: string;

  sections: {
    title: string;
    titleUrdu: string;
    marks: number;
    syllabusDetails: string[];
  }[];

  totalMarks: number;
};

export const advancedIslamicStudies2027Info = {
  subject: "Advanced Islamic Studies",
  subjectUrdu: "اسلامیات اختیاری",

  class: 9,
  group: "Arts / Humanities",
  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  textbookTitle: "Islamiat Ikhtiyari",
  textbookUrduTitle: "اسلامیات اختیاری",

  textbookEdition: "Edition verification pending",

  authors: [
    "Zakir Qazi Habib-ur-Rehman Al-Hari",
    "Allama Mirza Yousaf Hassan",
    "Professor Rashid Ahmad",
    "Professor Abdul Hay Anwar",
  ],

  publisher: "Publisher details require original book verification",

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
    class9SubjectDistribution: true,
    class10SubjectDistribution: true,
    originalTextbookVisualCheck: false,
    publisherVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The BISE Lahore 2025-2027 syllabus lists Advanced Islamic Studies as an elective subject.",
    "Part-I is for Class IX and Part-II is for Class X.",
    "Class IX includes Quran, Ahadith, Seerat-e-Tayyiba and Arabic Grammar.",
    "Class X includes Quran, Ahadith, Islamic Teachings and Arabic Grammar.",
    "No unverified 2027 ALP deletions have been applied.",
    "The original textbook and publisher details require further verification.",
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

export const advancedIslamicStudiesParts2027: AdvancedIslamicStudies2027Part[] =
  [
    {
      part: 1,
      class: 9,
      title: "Part-I — Class IX",
      marks: 75,
      duration: "2 hours 30 minutes",
      totalMarks: 75,

      sections: [
        {
          title: "The Holy Quran",
          titleUrdu: "القرآن",
          marks: 25,
          syllabusDetails: [
            "Verses 1 to 10",
            "Quranic syllabus allocation specified by BISE Lahore",
          ],
        },
        {
          title: "Ahadith",
          titleUrdu: "الاحادیث",
          marks: 10,
          syllabusDetails: [
            "Hadith numbers 1 to 12",
          ],
        },
        {
          title: "Seerat-e-Tayyiba",
          titleUrdu: "سیرت طیبہ",
          marks: 30,
          syllabusDetails: [
            "Seerat-e-Tayyiba syllabus section",
            "Detailed topic sequence requires original textbook verification",
          ],
        },
        {
          title: "Arabic Grammar",
          titleUrdu: "قواعد عربی",
          marks: 10,
          syllabusDetails: [
            "Arabic grammar syllabus section",
            "Detailed topic sequence requires original textbook verification",
          ],
        },
      ],
    },

    {
      part: 2,
      class: 10,
      title: "Part-II — Class X",
      marks: 75,
      duration: "2 hours 30 minutes",
      totalMarks: 75,

      sections: [
        {
          title: "The Holy Quran",
          titleUrdu: "القرآن",
          marks: 25,
          syllabusDetails: [
            "Verses 11 to 19",
          ],
        },
        {
          title: "Ahadith",
          titleUrdu: "الاحادیث",
          marks: 10,
          syllabusDetails: [
            "Hadith numbers 13 to 25",
          ],
        },
        {
          title: "Islamic Teachings",
          titleUrdu: "تعلیمات اسلام",
          marks: 30,
          syllabusDetails: [
            "Islamic Teachings syllabus section",
            "Detailed topic sequence requires original textbook verification",
          ],
        },
        {
          title: "Arabic Grammar",
          titleUrdu: "قواعد عربی",
          marks: 10,
          syllabusDetails: [
            "Arabic grammar syllabus section",
            "Detailed topic sequence requires original textbook verification",
          ],
        },
      ],
    },
  ];