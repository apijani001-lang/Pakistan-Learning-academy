
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    classid: string;
    group: string;
    boardid: string;
  }>;
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

const subjectGroups = {
  science: [
    {
      title: "English",
      slug: "english",
      description: "Grammar, reading, writing and textbook lessons.",
      icon: "📘",
    },
    {
      title: "Urdu",
      slug: "urdu",
      description: "Urdu lessons, tashreeh and writing practice.",
      icon: "📗",
    },
    {
      title: "Islamiat",
      slug: "islamiat",
      description: "Islamic studies and textbook preparation.",
      icon: "🕌",
    },
    {
      title: "Mathematics",
      slug: "mathematics",
      description: "Mathematical concepts and solved exercises.",
      icon: "📐",
    },
    {
      title: "Physics",
      slug: "physics",
      description: "Physics concepts and numerical practice.",
      icon: "⚛️",
    },
    {
      title: "Chemistry",
      slug: "chemistry",
      description: "Chemical concepts, equations and exercises.",
      icon: "🧪",
    },
    {
      title: "Biology",
      slug: "biology",
      description: "Biology concepts, diagrams and questions.",
      icon: "🧬",
    },
    {
      title: "Computer Science",
      slug: "computer-science",
      description: "Computer concepts and practical learning.",
      icon: "💻",
    },
  ],
  arts: [
    {
      title: "English",
      slug: "english",
      description: "Grammar, reading, writing and textbook lessons.",
      icon: "📘",
    },
    {
      title: "Urdu",
      slug: "urdu",
      description: "Urdu lessons, tashreeh and writing practice.",
      icon: "📗",
    },
    {
      title: "Islamiat",
      slug: "islamiat",
      description: "Islamic studies and textbook preparation.",
      icon: "🕌",
    },
    {
      title: "General Mathematics",
      slug: "general-mathematics",
      description: "Mathematics concepts and practice.",
      icon: "📐",
    },
    {
      title: "General Science",
      slug: "general-science",
      description: "General science concepts and exercises.",
      icon: "🔬",
    },
    {
      title: "Education",
      slug: "education",
      description: "Educational concepts and important questions.",
      icon: "🎓",
    },
    {
      title: "Civics",
      slug: "civics",
      description: "Civic knowledge and citizenship studies.",
      icon: "🏛️",
    },
  ],
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { classid, group, boardid } = await params;

  const className = classNames[String(Number(classid))];
  const groupName = groupNames[group];
  const boardName = boardNames[boardid];

  return {
    title:
      className && groupName && boardName
        ? `${className} ${boardName} Subjects | Pakistan Learning Academy`
        : "Board Subjects | Pakistan Learning Academy",
    description:
      "Explore board-organized subjects and learning resources at Pakistan Learning Academy.",
  };
}

async function BoardContent({ params }: PageProps) {
  await connection();

  const { classid, group, boardid } = await params;

  const classNumber = String(Number(classid));
  const className = classNames[classNumber];
  const groupName = groupNames[group];
  const boardName = boardNames[boardid];

  const subjects =
    subjectGroups[group as keyof typeof subjectGroups];

  if (!className || !groupName || !boardName || !subjects) {
    notFound();
  }

  const boardUrl =
    `/classes/${classNumber}/${group}/board/${boardid}`;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/classes/${classNumber}/${group}`}
            className="text-sm font-semibold text-emerald-300 transition hover:text-white"
          >
            ← Back to {groupName}
          </Link>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Pakistan Learning Academy
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Explore <span className="text-emerald-400">Subjects</span>
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

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Apna subject select karein aur uske chapters,
            video lessons, MCQs, short questions aur detailed
            answers explore karein.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Board-wise Learning
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            {boardName} Subjects
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Neeche subjects ki initial catalogue di gayi hai.
            Actual chapters aur syllabus selected class aur
            board ki official textbooks se verify kiye jayenge.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <Link
              key={subject.slug}
              href={`${boardUrl}/${subject.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                  {subject.icon}
                </div>

                <span className="text-sm font-bold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-900 transition group-hover:text-emerald-700">
                {subject.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                {subject.description}
              </p>

              <div className="mt-6 font-bold text-emerald-700">
                Explore Subject →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
            Learning Resources
          </p>

          <h2 className="mt-5 text-2xl font-black md:text-3xl">
            Complete Chapter-wise Preparation
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-emerald-100">
            Hamara learning system chapter-wise videos,
            textbook-aligned explanations, MCQs, short
            questions, detailed long answers aur full chapter
            tests ko support karega. Content selected board
            ke mutabiq verify karke publish kiya jayega.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function BoardSubjectsPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="font-semibold text-emerald-700">
            Loading board subjects...
          </p>
        </main>
      }
    >
      <BoardContent params={params} />
    </Suspense>
  );
}
