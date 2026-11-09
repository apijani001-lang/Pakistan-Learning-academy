// data/class9-al-hadith-dars-e-nizami-2027.ts

export type AlHadith2027Topic = {
  number: number;
  title: string;
  titleUrdu: string;
};

export type AlHadith2027Section = {
  number: number;
  title: string;
  marks: number;
  topics: AlHadith2027Topic[];
};

export const alHadith2027Info = {
  subject: "Al-Hadith",
  subjectUrdu: "الحدیث",

  class: 9,
  group: "Dars-e-Nizami",

  academicSession: "2026-27",
  examination: "Annual Examination 2027",

  partI: {
    class: 9,
    marks: 75,
    duration: "2 hours 30 minutes",
  },

  paperDistribution: {
    firstSectionMarks: 45,
    secondSectionMarks: 30,
    totalMarks: 75,
  },

  questionPattern:
    "Five questions based on translation and brief explanation of the prescribed Ahadith.",

  totalSections: 2,
  totalTopics: 63,

  class10Reference: {
    subject: "Al-Fiqah",
    subjectUrdu: "الفقہ",
    marks: 75,
    note:
      "The BISE Lahore scheme lists Al-Fiqah for Part-II (Class X), not Al-Hadith.",
  },

  prescribedReferences: [
    {
      title: "Riyad-us-Saliheen",
      author: "Imam Yahya bin Sharaf al-Nawawi",
      publisher: "Maktaba Rahmania, Urdu Bazar, Lahore",
    },
    {
      title: "Zad-ut-Talibin with Hashiya Murad-ur-Raghibin",
      author: "Muhammad Ashiq Ilahi al-Burhani",
      publisher: "Maktaba Haqqania, Multan",
    },
    {
      title: "Bulugh al-Maram min Adillat al-Ahkam",
      author: "Imam Hafiz Ahmad bin Ali al-Asqalani",
      publisher: "Maktaba Salafiyyah, Lahore",
    },
    {
      title: "Kanz-ul-Ummal",
      author: "Ascribed in the board syllabus to Dast Ghaib Shirazi",
      publisher: "Jamia Al-Zahra, Karachi",
    },
  ],

  verification: {
    officialBoardSyllabus: true,
    class9Marks: true,
    class9Duration: true,
    sectionMarks: true,
    topicCount: true,
    originalReferenceBooksVisualCheck: false,
    exactHadithTextVerification: false,
    alp2027: false,
  },

  notes: [
    "The Class IX Al-Hadith syllabus contains two sections: 45 marks and 30 marks.",
    "The board syllabus lists 43 topics in the first section and 20 topics in the second section.",
    "The examination includes questions requiring translation and brief explanation of the prescribed Ahadith.",
    "The topic headings below are readable English renderings of the Arabic headings extracted from the official syllabus. They are not full Hadith texts.",
    "Some Arabic source lines contain OCR errors. Exact Hadith wording and numbering must be checked against the prescribed reference books.",
    "Part-II (Class X) is Al-Fiqah, not a continuation of Al-Hadith.",
    "No subject-specific Annual Examination 2027 ALP deletion notification has been independently verified.",
  ],

  sources: {
    boardSyllabus:
      "https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf",
  },
};

export const alHadithSections2027: AlHadith2027Section[] = [
  {
    number: 1,
    title: "First Section",
    marks: 45,

    topics: [
      { number: 1, title: "Sincerity", titleUrdu: "الإخلاص" },
      { number: 2, title: "Repentance", titleUrdu: "التوبة" },
      { number: 3, title: "Patience", titleUrdu: "الصبر" },
      { number: 4, title: "Truthfulness", titleUrdu: "الصدق" },
      { number: 5, title: "Watchfulness of Allah", titleUrdu: "المراقبة" },
      { number: 6, title: "Piety", titleUrdu: "التقوى" },
      { number: 7, title: "Certainty, Trust and Steadfastness", titleUrdu: "اليقين والتوكل والاستقامة" },
      { number: 8, title: "Reflection on Allah's Creation", titleUrdu: "التفكر في عظيم مخلوقات الله" },
      { number: 9, title: "Avoiding Religious Innovations", titleUrdu: "النهي عن البدع ومحدثات الأمور" },
      { number: 10, title: "Guidance Towards Good and Calling Others to Guidance", titleUrdu: "الدلالة على الخير والدعاء إلى هدى أو ضلالة" },
      { number: 11, title: "Cooperation in Goodness and Piety", titleUrdu: "التعاون على البر والتقوى" },
      { number: 12, title: "Sincere Advice", titleUrdu: "النصيحة" },
      { number: 13, title: "Enjoining Good and Forbidding Wrong", titleUrdu: "الأمر بالمعروف والنهي عن المنكر" },
      { number: 14, title: "Reconciliation Among People", titleUrdu: "الإصلاح بين الناس" },
      { number: 15, title: "Care for Orphans, Girls and Vulnerable People", titleUrdu: "ملاحظة اليتيم والبنات وسائر الضعفاء" },
      { number: 16, title: "Advice Regarding Women", titleUrdu: "الوصية بالنساء" },
      { number: 17, title: "Rights of the Husband", titleUrdu: "حق الزوج على المرأة" },
      { number: 18, title: "Providing for the Family", titleUrdu: "النفقة على العيال" },
      { number: 19, title: "Rights of Neighbours", titleUrdu: "حق الجار والوصية به" },
      { number: 20, title: "Kindness to Parents and Maintaining Family Ties", titleUrdu: "بر الوالدين وصلة الأرحام" },
      { number: 21, title: "Prohibition of Severing Family Relations", titleUrdu: "تحريم العقوق وقطيعة الرحم" },
      { number: 22, title: "Kindness to Relatives", titleUrdu: "بر صداقة الأب والأم والأقارب" },
      { number: 23, title: "Good Conduct Towards Family and Respect for Scholars", titleUrdu: "الزوجة وتوقير العلماء الكبار وأهل الفضل" },
      { number: 24, title: "Respect for the Household and Companions of the Prophet ﷺ", titleUrdu: "إكرام بيت رسول الله ﷺ وأصحابه وبيان فضلهم" },
      { number: 25, title: "Warning Against Harming Righteous People", titleUrdu: "التحذير من إيذاء الصالحين" },
      { number: 26, title: "Guidance in Worldly Life", titleUrdu: "الهدى في الدنيا" },
      { number: 27, title: "Hunger and Simple Living", titleUrdu: "الجوع وخشونة العيش" },
      { number: 28, title: "Contentment, Moderation and Avoiding Unnecessary Asking", titleUrdu: "القناعة والعفاف والاقتصاد في المعيشة والإنفاق" },
      { number: 29, title: "Permissibility of Taking Without Asking", titleUrdu: "جواز الأخذ من غير مسألة" },
      { number: 30, title: "Earning Through One's Own Work", titleUrdu: "الحث على الأكل من عمل يده" },
      { number: 31, title: "Generosity and Spending in Good Causes", titleUrdu: "الكرم والجود والإنفاق في وجوه الخير" },
      { number: 32, title: "Avoiding Stinginess", titleUrdu: "النهي عن البخل" },
      { number: 33, title: "Compassion and Mutual Support", titleUrdu: "الإيثار والمواساة" },
      { number: 34, title: "Remembering the Hereafter and Limiting Worldly Attachment", titleUrdu: "التنفس في أمور الآخرة والاستكثار مما يترك به" },
      { number: 35, title: "Virtue of Grateful Wealth and Responsible Spending", titleUrdu: "فضل الغني الشاكر ومن أخذ المال من وجهه وصرفه في وجوهه المأمور بها" },
      { number: 36, title: "Remembering Death and Keeping Hopes Modest", titleUrdu: "ذكر الموت وقصر الأمل" },
      { number: 37, title: "Visiting Graves and the Supplication of Visitors", titleUrdu: "استحباب زيارة القبور للرجال وما يقوله الزائر" },
      { number: 38, title: "Disliking the Wish for Death Due to Hardship", titleUrdu: "كراهية تمني الموت بسبب ضر نزل به" },
      { number: 39, title: "Piety and Avoiding Doubtful Matters", titleUrdu: "الورع وترك الشبهات" },
      { number: 40, title: "Seclusion During Times of Corruption", titleUrdu: "استحباب العزلة عند الفساد" },
      { number: 41, title: "Virtue of Social Participation and Congregational Gatherings", titleUrdu: "فضل الاختلاط بالناس وحضور جمعهم وجماعاتهم" },
      { number: 42, title: "Humility Towards Believers", titleUrdu: "التواضع وخفض الجناح للمؤمنين" },
      { number: 43, title: "Prohibition of Pride and Self-Admiration", titleUrdu: "تحريم الكبر والإعجاب" },
    ],
  },

  {
    number: 2,
    title: "Second Section",
    marks: 30,

    topics: [
      { number: 1, title: "Good Character, Forbearance and Gentleness", titleUrdu: "حسن الخلق والحلم والأناة والرفق" },
      { number: 2, title: "Forgiveness and Turning Away from the Ignorant", titleUrdu: "العفو والإعراض عن الجاهلين" },
      { number: 3, title: "Enduring Harm with Patience", titleUrdu: "احتمال الأذى" },
      { number: 4, title: "Anger and Its Restraint", titleUrdu: "الغضب" },
      { number: 5, title: "Gentleness and Care in Leadership", titleUrdu: "المروءة والأمور بالرفق بالرعية والوالي العادل" },
      { number: 6, title: "Obeying Authorities in Matters That Are Not Sinful", titleUrdu: "وجوب طاعة ولاة الأمور في غير معصية" },
      { number: 7, title: "Avoiding the Pursuit of Authority and Leadership", titleUrdu: "النهي عن سؤال الإمارة واختيار الولاية" },
      { number: 8, title: "Conduct of Rulers and Judges", titleUrdu: "حب السلطان والقاضي وغيرهما" },
      { number: 9, title: "Avoiding Appointment to Positions of Authority Without Suitability", titleUrdu: "النهي عن تولية الإمارة والقضاء وغيرهما" },
      { number: 10, title: "Modesty, Keeping Secrets and Fulfilling Promises", titleUrdu: "كتاب الأدب: الحياء وحفظ السر والوفاء بالعهد" },
      { number: 11, title: "Maintaining Good Habits", titleUrdu: "الأمر بالمحافظة على ما اعتاده من الخير" },
      { number: 12, title: "Kind Speech and a Pleasant Expression", titleUrdu: "استحباب طيب الكلام وطلاقة الوجه عند اللقاء" },
      { number: 13, title: "Speaking Clearly and Explaining Well", titleUrdu: "استحباب بيان الكلام وإيضاحه للمخاطب" },
      { number: 14, title: "Listening Attentively to Others", titleUrdu: "إصغاء الجليس لحديث جليسه" },
      { number: 15, title: "Good Manners in Conversation", titleUrdu: "عنوان يحتاج إلى مراجعة النص الأصلي" },
      { number: 16, title: "Dignity and Calmness", titleUrdu: "الوقار والسكينة" },
      { number: 17, title: "Performing Prayer with Excellence", titleUrdu: "الندب إلى إتقان الصلاة" },
      { number: 18, title: "Honouring Guests", titleUrdu: "إكرام الضيف" },
      { number: 19, title: "Congratulating Others on Good News and Farewell Etiquette", titleUrdu: "استحباب التبشير والتهنئة بالخيرات ووداع الصاحب" },
      { number: 20, title: "Etiquette of Eid", titleUrdu: "آداب العيد" },
    ],
  },
];