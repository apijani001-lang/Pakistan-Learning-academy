import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, GraduationCap, Lightbulb, Target } from "lucide-react";

type Props = {
  classid: string;
  group: string;
  boardid: string;
  chapter: string;
};

const vocabulary = [
  ["saviour", "a person who saves", "نجات دہندہ"],
  ["mankind", "all human beings", "انسانیت"],
  ["chaos", "complete disorder or confusion", "افراتفری"],
  ["compassion", "sympathy and concern for others", "ہمدردی"],
  ["eloquence", "the ability to speak fluently and effectively", "فصاحت و بلاغت"],
  ["embodiment", "a perfect example of a quality", "مجسم نمونہ"],
  ["everlasting", "lasting forever", "ہمیشہ رہنے والا"],
  ["proclaim", "to announce publicly", "اعلان کرنا"],
  ["solitude", "the state of being alone", "تنہائی"],
  ["verge", "the edge or point of something", "کنارہ"],
  ["transformation", "a complete change", "تبدیلی"],
  ["tolerance", "patience and respect for differences", "برداشت"],
];

const shortQuestions = [
  {
    q: "What is the central idea of Unit 1, The Saviour of Mankind?",
    a: "The unit presents the life, character and mission of Prophet Muhammad (peace be upon him), and explains how his message of belief in one God, justice, compassion and good conduct guided humanity.",
    ur: "اس سبق کا مرکزی خیال رسول اکرم ﷺ کی زندگی، کردار اور پیغام ہے۔ یہ سبق توحید، انصاف، ہمدردی اور اچھے اخلاق کی اہمیت بیان کرتا ہے۔",
  },
  {
    q: "What does the word 'compassion' mean?",
    a: "Compassion means feeling concern for people who are suffering and wanting to help them.",
    ur: "Compassion کا مطلب مصیبت میں مبتلا لوگوں کے لیے ہمدردی محسوس کرنا اور ان کی مدد کی خواہش رکھنا ہے۔",
  },
  {
    q: "Why are reading and critical-thinking skills important in this unit?",
    a: "They help students identify the main idea, find relevant details, understand the writer's purpose and prepare an objective summary.",
    ur: "یہ مہارتیں مرکزی خیال سمجھنے، اہم معلومات تلاش کرنے، مصنف کا مقصد جاننے اور غیر جانب دار خلاصہ لکھنے میں مدد دیتی ہیں۔",
  },
  {
    q: "What is an objective summary?",
    a: "An objective summary presents the main ideas and important supporting details of a text briefly, without adding personal opinions.",
    ur: "غیر جانب دار خلاصہ کسی عبارت کے مرکزی خیالات اور اہم تفصیلات کو مختصر انداز میں بیان کرتا ہے اور ذاتی رائے شامل نہیں کرتا۔",
  },
  {
    q: "What is the purpose of using a thesaurus?",
    a: "A thesaurus helps a reader find synonyms and choose words that express the intended meaning more accurately.",
    ur: "تھیسارس ہم معنی الفاظ تلاش کرنے اور مناسب لفظ منتخب کرنے میں مدد دیتا ہے۔",
  },
];

const mcqs = [
  { q: "A person who saves others is called a:", options: ["spectator", "saviour", "visitor", "speaker"], answer: 1, why: "Saviour means a person who saves or rescues others." },
  { q: "The word 'chaos' means:", options: ["peace", "order", "confusion", "comfort"], answer: 2, why: "Chaos means complete disorder or confusion." },
  { q: "Which skill helps locate specific information quickly?", options: ["Scanning", "Copying", "Decorating", "Guessing"], answer: 0, why: "Scanning is used to find specific information in a text." },
  { q: "An objective summary should avoid:", options: ["main ideas", "key details", "personal opinions", "clear wording"], answer: 2, why: "An objective summary reports the text rather than the writer's personal opinion." },
  { q: "A thesaurus is mainly used to find:", options: ["synonyms", "dates", "maps", "equations"], answer: 0, why: "A thesaurus provides synonyms and related words." },
  { q: "Which of these is an adjective?", options: ["kindness", "kind", "kindly", "kindle"], answer: 1, why: "Kind describes a noun, so it is an adjective." },
];

export default function EnglishChapter2027({ classid, group, boardid, chapter }: Props) {
  const subjectUrl = `/classes/${classid}/${group}/board/${boardid}/english`;
  const testUrl = `${subjectUrl}/${chapter}/test`;

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-5 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href={subjectUrl} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
            <ArrowLeft size={17} /> Back to English Units
          </Link>
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-white/15 px-3 py-1">CLASS 9</span>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-200">SESSION 2026–27</span>
            <span className="rounded-full bg-white/15 px-3 py-1">ANNUAL EXAM 2027</span>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-200">EXAM-INCLUDED UNIT</span>
          </div>
          <h1 className="mt-5 text-3xl font-black sm:text-5xl">Unit 1: The Saviour of Mankind</h1>
          <p className="mt-4 max-w-3xl leading-7 text-blue-100">Original study notes, vocabulary, reading skills, grammar practice and exam-focused revision for Punjab Board Class 9.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={testUrl} className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-300"> <GraduationCap size={18}/> Open Chapter Test</Link>
            <a href="https://pectaa.edu.pk/downloads-2-2/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">Official PECTAA resources</a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-9">
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-emerald-700"/><div><h2 className="font-extrabold text-emerald-950">Smart Syllabus filter applied</h2><p className="mt-1 text-sm leading-6 text-emerald-900">Unit 1 is included in the Grade 9 English 2026–27 examination syllabus. The three fully excluded units (5, 8 and 10) are not included in this exam-preparation page. Review-section questions must also be filtered so that material from excluded units is not used.</p></div></div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3"><BookOpen className="text-blue-700"/><h2 className="text-2xl font-black text-slate-900">Lesson overview and summary</h2></div>
          <p className="mt-5 leading-8 text-slate-700">This unit introduces the life, character and universal mission of Prophet Muhammad (peace be upon him). It presents the contrast between the social and moral conditions of Arabia before Islam and the values taught through his message. The lesson highlights belief in the Oneness of Allah, justice, mercy, equality, patience and care for others. His example is presented as a lasting source of guidance for individuals and society.</p>
          <p className="mt-4 leading-8 text-slate-700">For revision, students should be able to identify the central idea, distinguish main ideas from supporting details, locate information through skimming and scanning, and write a concise objective summary in their own words.</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3"><Target className="text-indigo-700"/><h2 className="text-2xl font-black text-slate-900">Learning outcomes and skills</h2></div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{[
            "Identify the mission and teachings discussed in the lesson.",
            "Use skimming to understand the overall message of a text.",
            "Use scanning to locate names, facts and specific details.",
            "Identify the main idea and supporting details in paragraphs.",
            "Prepare an objective summary without personal opinions.",
            "Use a thesaurus and understand words through context.",
            "Recognise parts of speech, especially adjectives.",
            "Use suitable expressions in a discussion.",
          ].map((item) => <li key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={17}/>{item}</li>)}</ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3"><Lightbulb className="text-amber-600"/><h2 className="text-2xl font-black text-slate-900">Important vocabulary</h2></div>
          <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead><tr className="bg-slate-100 text-slate-800"><th className="p-3">Word</th><th className="p-3">Simple meaning</th><th className="p-3">Urdu meaning</th></tr></thead><tbody>{vocabulary.map(([word, meaning, urdu]) => <tr key={word} className="border-b border-slate-100"><td className="p-3 font-bold text-slate-900">{word}</td><td className="p-3 text-slate-700">{meaning}</td><td className="p-3 text-slate-700" dir="rtl">{urdu}</td></tr>)}</tbody></table></div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">Short questions with model answers</h2>
          <div className="mt-5 space-y-5">{shortQuestions.map((item, index) => <article key={item.q} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-extrabold text-slate-900">Q{index + 1}. {item.q}</h3><p className="mt-3 text-sm leading-7 text-slate-700"><strong>Answer:</strong> {item.a}</p><p className="mt-2 text-right text-sm leading-7 text-slate-600" dir="rtl"><strong>اردو وضاحت:</strong> {item.ur}</p></article>)}</div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">Grammar and writing focus</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-blue-50 p-5"><h3 className="font-extrabold text-blue-950">Adjectives</h3><p className="mt-2 text-sm leading-7 text-blue-900">An adjective describes a noun or pronoun. Examples: a kind person, a truthful leader, a difficult question. In each phrase, the adjective gives more information about the noun.</p></article>
            <article className="rounded-2xl bg-violet-50 p-5"><h3 className="font-extrabold text-violet-950">Objective summary</h3><p className="mt-2 text-sm leading-7 text-violet-900">Read the passage, identify its central idea, note only the essential supporting points, arrange them logically and rewrite them briefly in your own words. Do not add personal comments.</p></article>
            <article className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-extrabold text-emerald-950">Skimming and scanning</h3><p className="mt-2 text-sm leading-7 text-emerald-900">Skimming gives a quick understanding of the whole text. Scanning helps locate a particular fact, name, date or keyword.</p></article>
            <article className="rounded-2xl bg-amber-50 p-5"><h3 className="font-extrabold text-amber-950">Writing practice</h3><p className="mt-2 text-sm leading-7 text-amber-900">Prepare a short paragraph on kindness, using a clear topic sentence, relevant supporting details and a concluding sentence. Check grammar, spelling and punctuation.</p></article>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">Practice MCQs</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">{mcqs.map((item, index) => <article key={item.q} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-bold text-slate-900">{index + 1}. {item.q}</h3><ol className="mt-3 space-y-2 text-sm text-slate-700">{item.options.map((option, optionIndex) => <li key={option} className={optionIndex === item.answer ? "font-bold text-emerald-700" : ""}>{String.fromCharCode(65 + optionIndex)}. {option}{optionIndex === item.answer ? " ✓" : ""}</li>)}</ol><p className="mt-3 rounded-lg bg-emerald-50 p-3 text-xs leading-6 text-emerald-900">{item.why}</p></article>)}</div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-950"><strong>Content note:</strong> These are original academy study notes based on the unit title and published learning outcomes, not copied textbook paragraphs or an official answer key. Students should use the current prescribed textbook for exact passage details. Exam inclusion is based on PECTAA Grade 9 notification No. PECTAA/C&C Unit/2026/1238 dated 6 November 2026.</section>
      </div>
    </main>
  );
}
