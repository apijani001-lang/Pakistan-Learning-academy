// data/class9-seerat-e-taiba-2027.ts

export type SeeratETaiba2027Topic = {
  number: number;
  title: string;
  titleUrdu: string;
  details?: string[];
};

export type SeeratETaiba2027Section = {
  number: number;
  title: string;
  titleUrdu: string;
  topics: SeeratETaiba2027Topic[];
};

export const seeratETaiba2027Info = {
  subject: "Seerat-e-Taiba",
  subjectUrdu: "سیرت طیبہ",

  class: 9,
  group: "Dars-e-Nizami",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  syllabusSource: "BISE Lahore Secondary School Syllabus 2025-2027",
  officialSyllabusPages: "70-71",

  totalMarks: null as number | null,
  examinationDuration: null as string | null,

  verification: {
    officialSubjectListing: true,
    officialSyllabusPages: true,
    seeratTopics: true,
    hadithHeadings: true,
    separateClass9MarksScheme: false,
    separateExaminationDuration: false,
    originalTextbookVisualCheck: false,
    alp2027: false,
  },

  notes: [
    "The BISE Lahore contents list Seerat-e-Taiba under the Dars-e-Nizami group on pages 70-71.",
    "The available syllabus pages contain Seerat-related topics, character and Hadith headings.",
    "A separate Class 9 marks distribution and examination duration have not been independently established from these pages.",
    "English headings are explanatory translations. Consult the original Urdu syllabus and prescribed book for exact wording.",
  ],

  source:
    "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
};

export const seeratETaibaSections2027: SeeratETaiba2027Section[] = [
  {
    number: 1,
    title: "The Status and Mission of Prophet Muhammad ﷺ",
    titleUrdu: "افضل الرسل حضرت محمد خاتم النبیین ﷺ",

    topics: [
      {
        number: 1,
        title: "Prophethood and Messengership",
        titleUrdu: "رسالت",
      },
      {
        number: 2,
        title: "Infallibility and Its Significance",
        titleUrdu: "معصوم",
      },
      {
        number: 3,
        title: "The Status and Greatness of Prophethood",
        titleUrdu: "منصب اور اس کی عظمت",
      },
      {
        number: 4,
        title: "The Preaching and Efforts of the Prophets",
        titleUrdu: "انبیاء علیہم السلام کی تبلیغ اور کوشش",
      },
      {
        number: 5,
        title: "Brief References to Prophet Ibrahim, Prophet Musa and Prophet Isa (peace be upon them)",
        titleUrdu: "حضرت ابراہیم، حضرت موسیٰ اور حضرت عیسیٰ علیہم السلام کا مختصر ذکر",
      },
    ],
  },

  {
    number: 2,
    title: "Great Character — Khulq-e-Azeem",
    titleUrdu: "خلق عظیم",

    topics: [
      {
        number: 1,
        title: "Childhood",
        titleUrdu: "عہد طفولیت",
      },
      {
        number: 2,
        title: "Youth",
        titleUrdu: "عہد شباب",
      },
      {
        number: 3,
        title: "Simplicity and Humility",
        titleUrdu: "سادگی اور بے تکلفی",
      },
      {
        number: 4,
        title: "Fulfilling Promises",
        titleUrdu: "ایفائے عہد",
      },
      {
        number: 5,
        title: "Helping Others",
        titleUrdu: "دوسروں کے کام آنا",
      },
      {
        number: 6,
        title: "Kindness and Compassion",
        titleUrdu: "شفقت اور پیار",
      },
      {
        number: 7,
        title: "Kindness Towards Family, Companions and Enemies",
        titleUrdu: "گھر والوں، ساتھیوں اور دشمنوں کے ساتھ حسن سلوک",
      },
      {
        number: 8,
        title: "Equality",
        titleUrdu: "مساوات",
      },
      {
        number: 9,
        title: "Determination and Steadfastness",
        titleUrdu: "عزم و استقلال",
      },
    ],
  },
];

export const seeratETaibaHadithHeadings2027 = [
  "Prayer and Accountability",
  "Fasting",
  "Recitation of the Quran",
  "Good Character",
  "Modesty",
  "Maintaining Family Relations",
  "Guidance Towards Good",
  "Serving Humanity",
  "Respecting Elders",
  "Kindness Towards Others",
  "Honouring Neighbours",
  "Avoiding Dishonesty",
  "Avoiding Arrogance",
  "Avoiding Envy",
  "Respecting the Rights of Muslims",
  "Mutual Compassion",
] as const;