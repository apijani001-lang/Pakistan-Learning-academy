
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

const classNames: Record<string, string> = {
  "9": "Class 9",
  "10": "Class 10",
  "11": "Class 11",
  "12": "Class 12",
};

const groupNames: Record<string, string> = {
  science: "Science Group",
  arts: "Arts / Humanities Group",
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
  islamiat: "Islamiat",
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
    edition: "2025–26 textbook",
    medium: "English Medium",
    driveId: "1mWBO-wzXqv0Oq9oazcjM-Y16EqmPqBtj",
    description:
      "Class 9 English textbook listed in the official PECTAA e-book library.",
  },
  urdu: {
    title: "Urdu 9",
    edition: "2025–26 textbook",
    medium: "Urdu Medium",
    driveId: "1JPgnI_hL6D0EMPG36IdjcqB2OFBHLp52",
    description:
      "Class 9 Urdu textbook listed in the official PECTAA e-book library.",
  },
  mathematics: {
    title: "Mathematics 9",
    edition: "2025–26 textbook",
    medium: "English Medium",
    driveId: "1IHxM96F221JY3uL4jEIRWQ8NxskXyilF",
    description:
      "Class 9 Mathematics textbook listed in the official PECTAA library.",
  },
  physics: {
    title: "Physics 9",
    edition: "2025–26 textbook",
    medium: "English Medium",
    driveId: "14TEL4poDp5vvAP7JZ3dYXJ4U_9fPexm3",
    description:
      "Class 9 Physics textbook listed in the official PECTAA e-book library.",
  },
  chemistry: {
    title: "Chemistry 9",
    edition: "2025–26 textbook",
    medium: "English Medium",
    driveId: "1OY1Unpm8VkLCGQfbLFrE8wLn3fzXmZpc",
    description:
      "Class 9 Chemistry textbook listed in the official PECTAA e-book library.",
  },
  biology: {
    title: "Biology 9",
    edition: "2025–26 textbook",
    medium: "English Medium",
    driveId: "1rH5qC3FM12nPcH1zIVbm25tMKWxMv-3P",
    description:
      "Class 9 Biology textbook listed in the official PECTAA e-book library.",
  },
};

const smartLibrarySubjects = [
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
        ? `Study ${subjectName} with textbook access, chapter-wise learning and syllabus resources at Pakistan Learning Academy.`
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
    isClass9 && boardid === "lahore" && group === "arts";

  const book =
    isClass9 && isPunjabBoard ? officialBooks[subject] : undefined;

  const driveUrl = book
    ? `https://drive.google.com/file/d/${book.driveId}/view`
    : undefined;

  const coverUrl = book
    ? `https://drive.google.com/thumbnail?id=${book.driveId}&sz=w1000`
    : undefined;

  const boardUrl =
    `/classes/${classNumber}/${group}/board/${boardid}`;

  const homeUrl = "/";

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
    (subject === "english-literature" &&
      !isEnglishLiteratureAvailable);

  const showSmartLibrary =
    isClass9 &&
    isPunjabBoard &&
    smartLibrarySubjects.includes(subject) &&
    !subjectGroupMismatch;

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      {/* Premium hero */}
      <section className="relative overflow-hidden bg-[#07172c] px-5 py-12 text-white md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href={homeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
            >
              <span aria-hidden="true">⌂</span>
              Home
            </Link>

            <Link
              href={boardUrl}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200 transition hover:bg-emerald-300/20"
            >
              ← Back to {boardName}
            </Link>
          </div>

          <div className="mt-12 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">
              Pakistan Learning Academy · Learning Portal
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {subjectName}
              <span className="block bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent">
                Complete Learning
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Textbook access, chapter-wise syllabus resources and
              learning material — all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[className, groupName, boardName].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
                >
                  {item}
                </span>
              ))}
              {isClass9 && (
                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
                  Academic Session 2026–27
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-5 py-10 md:py-14">
        {/* Official textbook comes first */}
        {book && (
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-slate-100 to-violet-50 p-7">
                <img
                  src={coverUrl}
                  alt={`${book.title} textbook cover`}
                  className="max-h-[330px] w-auto max-w-full rounded-xl object-contain shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                    Official textbook listing
                  </span>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-800">
                    {book.edition}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
                  {book.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {book.medium} · Punjab Curriculum
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  {book.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-violet-700 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-violet-800"
                  >
                    Read Complete Book ↗
                  </a>

                  <a
                    href={PECTAA_BOOKS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:border-violet-400 hover:text-violet-800"
                  >
                    Official PECTAA Library ↗
                  </a>
                </div>

                <p className="mt-5 text-xs leading-6 text-slate-500">
                  Textbook edition and examination syllabus are separate
                  details. Always follow the applicable official syllabus
                  for examination preparation.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Group verification warning */}
        {subjectGroupMismatch && (
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-black text-amber-950">
              Group aur subject ki verification required hai
            </h2>
            <p className="mt-2 leading-7 text-amber-900">
              Is subject ko selected group ke saath show karne se pehle
              current board scheme verify karni hogi.
            </p>
          </section>
        )}

        {/* Smart syllabus and chapter library */}
        {showSmartLibrary && (
          <section className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
                  Chapter-wise Learning
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  {subjectName} Chapter Library
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Neeche available chapter-wise syllabus aur learning
                  resources dekhein. Smart Syllabus ki exclusions ko
                  complete textbook se alag rakha jayega.
                </p>
              </div>

              <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-800">
                Class 9 · 2026–27
              </span>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
              <Class9SmartLibrary
                subject={subject}
                bookUrl={driveUrl}
              />
            </div>
          </section>
        )}

        {/* Other subjects without a verified chapter component */}
        {!showSmartLibrary && !subjectGroupMismatch && (
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
              Learning Resources
            </p>

            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {subjectName} Chapter Resources
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Is subject ki verified chapter list aur learning resources
              ko official textbook aur applicable syllabus ke saath
              match karke add kiya jayega. Unverified chapter titles
              ya examination content display nahi kiya jayega.
            </p>

            {driveUrl && (
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl bg-violet-700 px-5 py-3 font-bold text-white transition hover:bg-violet-800"
              >
                Open Official Textbook ↗
              </a>
            )}
          </section>
        )}

        {/* Accuracy notice */}
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="font-black text-emerald-950">
            Learning Content Accuracy Policy
          </h2>
          <p className="mt-2 text-sm leading-7 text-emerald-900">
            Academy ke notes, explanations, practice questions aur
            translations original educational material honge. Official
            textbook aur syllabus ko reference ke taur par use kiya
            jayega; unverified material ko official ya textbook ka
            exact content label nahi kiya jayega.
          </p>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          <Link
            href={homeUrl}
            className="font-bold text-violet-700 transition hover:text-violet-900"
          >
            ← Back to Home
          </Link>

          <Link
            href={boardUrl}
            className="font-bold text-slate-600 transition hover:text-slate-950"
          >
            Back to {boardName} →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SubjectPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb]">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-6 text-center shadow-sm">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />
            <p className="mt-4 font-bold text-slate-700">
              Loading subject...
            </p>
          </div>
        </main>
      }
    >
      <SubjectContent params={params} />
    </Suspense>
  );
}