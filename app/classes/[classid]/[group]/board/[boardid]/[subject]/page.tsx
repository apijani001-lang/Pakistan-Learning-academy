
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import Class9SmartLibrary from "@/components/Class9SmartLibrary";
type PageProps = {
  params: Promise<{
    classid: string;
    group: string;
    boardid: string;
    subject: string;
  }>;
};

type BookInfo = {
  title: string;
  edition: string;
  medium: string;
  driveId: string;
  description: string;
};

type ChapterInfo = {
  title: string;
  page: number;
  excludedFromExam: boolean;
};

type UrduAlpItem = {
  title: string;
  author: string;
  pages: string;
};

const classNames: Record<string, string> = {
  "9": "Class 9",
  "10": "Class 10",
  "11": "Class 11",
  "12": "Class 12",
};

const groupNames: Record<string, string> = {
  science: "Science Group",
  arts: "Arts Group",
};

const boardNames: Record<string, string> = {
  lahore: "BISE Lahore",
  gujranwala: "BISE Gujranwala",
  faisalabad: "BISE Faisalabad",
  multan: "BISE Multan",
  rawalpindi: "BISE Rawalpindi",
  sargodha: "BISE Sargodha",
  bahawalpur: "BISE Bahawalpur",
  "dg-khan": "BISE Dera Ghazi Khan",
  sahiwal: "BISE Sahiwal",
  karachi: "BSEK Karachi",
  "biek-karachi": "BIEK Karachi",
  hyderabad: "BISE Hyderabad",
  sukkur: "BISE Sukkur",
  larkana: "BISE Larkana",
  mirpurkhas: "BISE Mirpurkhas",
  peshawar: "BISE Peshawar",
  mardan: "BISE Mardan",
  swat: "BISE Swat",
  abbottabad: "BISE Abbottabad",
  bannu: "BISE Bannu",
  kohat: "BISE Kohat",
  "di-khan": "BISE Dera Ismail Khan",
  malakand: "BISE Malakand",
  quetta: "BBISE Quetta",
  fbise: "FBISE Islamabad",
  "ajk-mirpur": "BISE AJK Mirpur",
  gb: "Gilgit-Baltistan Board",
};

const subjectNames: Record<string, string> = {
  english: "English",
  "english-literature": "English Literature",
  urdu: "Urdu",
  islamiat: "Islamiyat",
  "tarjuma-tul-quran": "Tarjuma-tul-Quran",
  mathematics: "Mathematics",
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  "computer-science": "Computer Science",
  "general-mathematics": "General Mathematics",
  "general-science": "General Science",
  "pakistan-studies": "Pakistan Studies",
  education: "Education",
  civics: "Civics",
  economics: "Economics",
  "art-and-model-drawing": "Art and Model Drawing",
  "home-economics": "Home Economics",
  punjabi: "Punjabi",
  farsi: "Farsi",
};

const punjabBoards = [
  "lahore",
  "gujranwala",
  "faisalabad",
  "multan",
  "rawalpindi",
  "sargodha",
  "bahawalpur",
  "dg-khan",
  "sahiwal",
];

const PECTAA_BOOKS_URL =
  "https://pectaa.edu.pk/books-and-publications/";

const officialBooks: Record<string, BookInfo> = {
  english: {
    title: "English 9",
    edition: "2025â€“26 textbook",
    medium: "English Medium",
    driveId: "1mWBO-wzXqv0Oq9oazcjM-Y16EqmPqBtj",
    description:
      "Class 9 English textbook listed in the official PECTAA e-book library. The textbook edition and examination syllabus session are separate details.",
  },
  urdu: {
    title: "Urdu 9",
    edition: "2025â€“26",
    medium: "Urdu Medium",
    driveId: "1JPgnI_hL6D0EMPG36IdjcqB2OFBHLp52",
    description:
      "Class 9 Urdu textbook listed in the official PECTAA e-book library. The 2026â€“27 examination syllabus is shown separately below.",
  },
  mathematics: {
    title: "Mathematics 9",
    edition: "2025â€“26",
    medium: "English Medium",
    driveId: "1IHxM96F221JY3uL4jEIRWQ8NxskXyilF",
    description:
      "Class 9 Mathematics English-medium textbook listed in the official PECTAA library.",
  },
  physics: {
    title: "Physics 9",
    edition: "2025â€“26",
    medium: "English Medium",
    driveId: "14TEL4poDp5vvAP7JZ3dYXJ4U_9fPexm3",
    description:
      "Class 9 Physics textbook listed in the official PECTAA e-book library.",
  },
  chemistry: {
    title: "Chemistry 9",
    edition: "2025â€“26",
    medium: "English Medium",
    driveId: "1OY1Unpm8VkLCGQfbLFrE8wLn3fzXmZpc",
    description:
      "Class 9 Chemistry textbook listed in the official PECTAA e-book library.",
  },
  biology: {
    title: "Biology 9",
    edition: "2025â€“26",
    medium: "English Medium",
    driveId: "1rH5qC3FM12nPcH1zIVbm25tMKWxMv-3P",
    description:
      "Class 9 Biology textbook listed in the official PECTAA e-book library.",
  },
};

const englishChapters: ChapterInfo[] = [
  {
    title: "The Saviour of Mankind",
    page: 1,
    excludedFromExam: false,
  },
  {
    title: "Patriotism",
    page: 16,
    excludedFromExam: false,
  },
  {
    title: "Daffodils â€” William Wordsworth",
    page: 31,
    excludedFromExam: false,
  },
  {
    title: "Hazrat Asma",
    page: 49,
    excludedFromExam: false,
  },
  {
    title: "Women Empowerment through Entrepreneurship",
    page: 58,
    excludedFromExam: true,
  },
  {
    title: "The Value of Time",
    page: 72,
    excludedFromExam: false,
  },
  {
    title: "If â€” Rudyard Kipling",
    page: 86,
    excludedFromExam: false,
  },
  {
    title: "The Impact of Globalisation on Culture and Economy",
    page: 93,
    excludedFromExam: true,
  },
  {
    title: "Quality Education: A Key to Success",
    page: 106,
    excludedFromExam: false,
  },
  {
    title: "The Silent Predator and the Majestic Prey â€” Snow Leopard and Markhor",
    page: 120,
    excludedFromExam: true,
  },
  {
    title: "The Dear Departed â€” One-Act Play",
    page: 132,
    excludedFromExam: false,
  },
];

const urduAlpExcludedLessons: UrduAlpItem[] = [
  {
    title: "Ø§Ø¨ØªØ¯Ø§Ø¦ÛŒ Ø­Ø³Ø§Ø¨",
    author: "Ø§Ø¨Ù†Ù Ø§Ù†Ø´Ø§",
    pages: "69â€“76",
  },
  {
    title: "Ø¨Ú¾ÛŒÚ‘ÛŒØ§",
    author: "ÙØ§Ø±ÙˆÙ‚ Ø³Ø±ÙˆØ±",
    pages: "86â€“93",
  },
  {
    title: "Ú©Ø±Ú©Ù¹ Ø§ÙˆØ± Ù…Ø´Ø§Ø¹Ø±Û",
    author: "Ø¯Ù„Ø§ÙˆØ± ÙÚ¯Ø§Ø±",
    pages: "111â€“117",
  },
  {
    title: "Ø­ÙØ³Ù† ØªÙˆ Ø³ÛÛŒ Ø¬ÛØ§Úº Ù…ÛŒÚº ÛÛ’ ØªÛŒØ±Ø§ ÙØ³Ø§Ù†Û Ú©ÛŒØ§",
    author: "Ø®ÙˆØ§Ø¬Û Ø­ÛŒØ¯Ø± Ø¹Ù„ÛŒ Ø¢ØªØ´",
    pages: "122â€“126",
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { classid, boardid, subject } = await params;

  const className = classNames[String(Number(classid))];
  const boardName = boardNames[boardid];
  const subjectName = subjectNames[subject];

  return {
    title:
      className && boardName && subjectName
        ? `${subjectName} ${className} ${boardName} | Pakistan Learning Academy`
        : "Subject Not Found | Pakistan Learning Academy",
    description:
      className && boardName && subjectName
        ? `Explore official textbook access and verified chapter resources for ${subjectName}, ${className}, ${boardName}.`
        : "Free educational resources at Pakistan Learning Academy.",
  };
}

async function SubjectContent({ params }: PageProps) {
  await connection();

  const { classid, group, boardid, subject } = await params;

  const classNumber = String(Number(classid));
  const className = classNames[classNumber];
  const groupName = groupNames[group];
  const boardName = boardNames[boardid];
  const subjectName = subjectNames[subject];

  if (!className || !groupName || !boardName || !subjectName) {
    notFound();
  }

  const isClass9 = classNumber === "9";
  const isPunjabBoard = punjabBoards.includes(boardid);

  const isEnglishLiteratureAvailable =
    isClass9 &&
    boardid === "lahore" &&
    group === "arts";

  const book =
    isClass9 && isPunjabBoard
      ? officialBooks[subject]
      : undefined;

  const isEnglishBook = Boolean(book && subject === "english");
  const isUrduBook = Boolean(book && subject === "urdu");

  const driveUrl = book
    ? `https://drive.google.com/file/d/${book.driveId}/view`
    : undefined;

  const coverUrl = book
    ? `https://drive.google.com/thumbnail?id=${book.driveId}&sz=w1000`
    : undefined;

  const boardUrl =
    `/classes/${classNumber}/${group}/board/${boardid}`;

  const isScienceSubject = [
    "physics",
    "chemistry",
    "biology",
    "computer-science",
  ].includes(subject);

  const subjectGroupMismatch =
    (isClass9 &&
      isPunjabBoard &&
      ((isScienceSubject && group === "arts") ||
        (subject === "general-science" && group !== "arts"))) ||
    (subject === "english-literature" && !isEnglishLiteratureAvailable);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href={boardUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
          >
            {"← Back to "}{boardName}
          </Link>

          <p className="mt-9 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            {className} | {groupName}
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {subjectName}
            <span className="text-emerald-400"> Learning</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
              {className}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
              {groupName}
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              {boardName}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Official textbook access, verified chapter lists,
            study notes and chapter-wise learning resources.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        {subject !== "english-literature" && (
        <>
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Official Textbook Library
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            {subjectName} Textbook
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Official book access aur edition details yahan available hain.
            Chapter-wise information ko original textbook aur official
            syllabus se cross-check kiya ja raha hai.
          </p>
        </div>

        {subjectGroupMismatch ? (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <h3 className="text-xl font-black text-amber-950">
              Group aur subject ki verification required hai
            </h3>
            <p className="mt-3 leading-7 text-amber-900">
              Is subject ko selected group ke saath show karne se pehle
              current Punjab Board scheme verify karni hogi.
            </p>
          </div>
        ) : book ? (
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[280px_1fr] md:gap-10 md:p-9">
            <div className="flex min-h-[340px] items-center justify-center rounded-2xl bg-slate-100 p-5">
              <img
                src={coverUrl}
                alt={`${book.title} textbook cover`}
                className="max-h-[360px] w-auto max-w-full rounded-lg object-contain shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Official PECTAA listing
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  {book.edition}
                </span>
                {isUrduBook && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    2026â€“27 ALP shown below
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-3xl font-black text-slate-950">
                {book.title}
              </h3>

              <p className="mt-3 text-sm font-semibold text-slate-500">
                {book.medium} Â· Punjab Curriculum
              </p>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                {book.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
                >
                  Read Complete Book â†—
                </a>

                <a
                  href={PECTAA_BOOKS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Official PECTAA Library â†—
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                The original textbook is hosted by its official external
                source. Pakistan Learning Academy does not claim ownership
                of the textbook.
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <h3 className="text-2xl font-black text-slate-900">
              Official book verification in progress
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Is subject ki correct edition, medium aur official textbook
              source verify hone ke baad yahan add kiya jayega.
            </p>
            <a
              href={PECTAA_BOOKS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              Check Official PECTAA Books â†—
            </a>
          </div>
        )}
        </>
        )}

        {isUrduBook && (
          <div className="mt-12">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Urdu 9 Â· Annual Examination 2027
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">
                Official Urdu ALP 2026â€“27
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Neeche diye gaye 4 lessons PECTAA ke Grade 9 ALP
                notification dated 6 November 2026 ke mutabiq
                Annual Examination 2027 se excluded hain.
                Ye lessons complete textbook mein phir bhi maujood hain.
              </p>
            </div>

            <div className="mb-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-3xl font-black text-emerald-800">15</p>
                <p className="mt-1 text-sm font-semibold text-emerald-900">
                  Lessons in exam focus
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-3xl font-black text-amber-800">4</p>
                <p className="mt-1 text-sm font-semibold text-amber-900">
                  Lessons excluded from exam
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-black text-slate-900">19</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Total Urdu lessons
                </p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
                Excluded from Annual Exam 2027
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                PECTAA Notification: 06-11-2026
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {urduAlpExcludedLessons.map((lesson, index) => (
                <article
                  key={lesson.title}
                  className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-black text-amber-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      Excluded
                    </span>
                  </div>

                  <h3
                    dir="rtl"
                    className="mt-5 text-right text-xl font-bold leading-9 text-slate-950"
                  >
                    {lesson.title}
                  </h3>

                  <p
                    dir="rtl"
                    className="mt-3 text-right text-sm font-semibold text-slate-600"
                  >
                    Ù…ØµÙ†Ù: {lesson.author}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">
                    Textbook pages: {lesson.pages}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="font-bold text-blue-950">
                Important: Textbook aur exam syllabus alag hain
              </h3>
              <p className="mt-2 text-sm leading-7 text-blue-900">
                Excluded lessons complete Urdu textbook se delete nahi
                kiye gaye. Students inhein reading aur general learning
                ke liye parh sakte hain. ALP exclusion ka matlab sirf
                yeh hai ke notification ke mutabiq in lessons ko
                Annual Examination 2027 ke prescribed exam focus
                mein shamil nahi kiya gaya.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Chapter reading verification
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Urdu textbook ke tamam chapter titles aur unke exact
                starting pages official book ke contents page se
                verify hone ke baad chapter-wise Read Chapter links
                add kiye jayenge. Filhal unverified chapter links
                publish nahi kiye ja rahe.
              </p>

              {driveUrl && (
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Open Urdu Textbook â†—
                </a>
              )}
            </div>
          </div>
        )}

        {isEnglishBook && (
          <div className="mt-12">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                English 9 Â· 2025â€“26 textbook
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">
                Complete Chapter Library
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Har button official textbook ko relevant starting page
                par kholta hai. Neeche diye gaye exam labels sirf
                2025â€“26 session ke historical reference hain;
                inhein Annual Examination 2027 ka confirmed syllabus
                na samjha jaye.
              </p>
            </div>

            <div className="mb-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-3xl font-black text-emerald-800">8</p>
                <p className="mt-1 text-sm font-semibold text-emerald-900">
                  Included in 2025â€“26 ALP
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-3xl font-black text-amber-800">3</p>
                <p className="mt-1 text-sm font-semibold text-amber-900">
                  Excluded in 2025â€“26 ALP
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-black text-slate-900">11</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Total textbook units
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {englishChapters.map((chapter, index) => (
                <article
                  key={chapter.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 font-black text-emerald-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={
                        chapter.excludedFromExam
                          ? "rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800"
                          : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                      }
                    >
                      {chapter.excludedFromExam
                        ? "2025â€“26: Excluded"
                        : "2025â€“26: Included"}
                    </span>
                  </div>

                  <h3 className="mt-5 flex-1 text-lg font-bold leading-7 text-slate-900">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    Textbook starting page: {chapter.page}
                  </p>

                  <a
                    href={`${driveUrl}#page=${chapter.page}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    Read Chapter â†—
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-950">
                Previous session examination notice
              </h3>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                Units 5, 8 aur 10 ko 2025â€“26 English ALP reference
                mein excluded show kiya gaya tha. Yeh historical
                information hai. Annual Examination 2027 ke liye
                latest English ALP ko separately verify karna zaroori hai.
              </p>
            </div>
          </div>
        )}

       {isClass9 &&
  isPunjabBoard &&
  !isEnglishBook &&
  !isUrduBook &&
  (subject !== "english-literature" || isEnglishLiteratureAvailable) && (
    <Class9SmartLibrary
      subject={subject}
      bookUrl={driveUrl}
    />
  )}

{!isEnglishBook &&
  !isUrduBook &&
  !(
    isClass9 &&
    isPunjabBoard &&
    [
      "mathematics",
      "physics",
      "chemistry",
      "biology",
      "computer-science",
      "general-science",
      "islamiat",
      "civics",
      "economics",
      "education",
      "art-and-model-drawing",
      "home-economics",
      "geography",
      "punjabi",
      "english-literature",
    ].includes(subject)
  ) && (          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-2xl font-black text-slate-900">
              Verified {subjectName} Chapters
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Is subject ki chapter list original textbook se verify
              hone ke baad publish hogi. Unverified chapter names
              display nahi kiye ja rahe.
            </p>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="font-bold text-emerald-950">
            Textbook accuracy policy
          </h3>
          <p className="mt-2 text-sm leading-7 text-emerald-900">
            Official book links, edition details aur chapter titles
            ko source ke saath verify kiya jayega. Academy ke apne
            notes aur explanations original learning material honge;
            unhein textbook ka word-for-word text nahi kaha jayega.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function SubjectPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="font-semibold text-emerald-700">
            Loading subject...
          </p>
        </main>
      }
    >
      <SubjectContent params={params} />
    </Suspense>
  );
}



