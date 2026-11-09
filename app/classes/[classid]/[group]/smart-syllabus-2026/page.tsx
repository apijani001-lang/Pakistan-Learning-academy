
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  GraduationCap,
  Languages,
  Microscope,
  Monitor,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    classid: string;
    group: string;
  }>;
};

const scienceSubjects = [
  { name: "Physics", slug: "physics", icon: Calculator, description: "Concepts, laws, numerical problems and board preparation." },
  { name: "Chemistry", slug: "chemistry", icon: FlaskConical, description: "Chemical concepts, reactions and examination practice." },
  { name: "Biology", slug: "biology", icon: Microscope, description: "Biological concepts, diagrams and important questions." },
  { name: "Mathematics", slug: "mathematics", icon: Calculator, description: "Formulas, exercises and step-by-step solutions." },
  { name: "Computer Science", slug: "computer-science", icon: Monitor, description: "Computer concepts, theory and practical learning." },
  { name: "English", slug: "english", icon: Languages, description: "Grammar, textbook lessons and writing practice." },
  { name: "Urdu", slug: "urdu", icon: BookOpen, description: "Textbook lessons, tashreeh and language practice." },
  { name: "Islamiat", slug: "islamiat", icon: BookOpen, description: "Textbook topics and structured revision." },
  { name: "Tarjuma-tul-Quran", slug: "tarjuma-tul-quran", icon: BookOpen, description: "Quranic lessons, translation and learning material." },
];

const artsSubjects = [
  { name: "General Mathematics", slug: "general-mathematics", icon: Calculator, description: "Mathematics concepts and examination practice." },
  { name: "General Science", slug: "general-science", icon: Microscope, description: "Science concepts and textbook-based revision." },
  { name: "English", slug: "english", icon: Languages, description: "Grammar, textbook lessons and writing practice." },
  { name: "Urdu", slug: "urdu", icon: BookOpen, description: "Textbook lessons, tashreeh and language practice." },
  { name: "Islamiat", slug: "islamiat", icon: BookOpen, description: "Textbook topics and structured revision." },
  { name: "Tarjuma-tul-Quran", slug: "tarjuma-tul-quran", icon: BookOpen, description: "Quranic lessons, translation and learning material." },
  { name: "Pakistan Studies", slug: "pakistan-studies", icon: Globe, description: "History, geography and important national topics." },
  { name: "Computer Science", slug: "computer-science", icon: Monitor, description: "Computer concepts and theory." },
];

function SmartSyllabusLoading() {
  return (
    <main className="min-h-screen bg-[#f4f8f7] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="animate-pulse">
          <div className="h-10 w-64 rounded-xl bg-slate-200" />
          <div className="mt-5 h-6 w-96 max-w-full rounded-lg bg-slate-200" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-64 rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="h-14 w-14 rounded-2xl bg-slate-200" />
                <div className="mt-7 h-6 w-40 rounded-lg bg-slate-200" />
                <div className="mt-4 h-4 w-full rounded bg-slate-200" />
                <div className="mt-3 h-4 w-3/4 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

async function SmartSyllabusContent({ params }: PageProps) {
  await connection();

  const { classid, group } = await params;

  const classNumber = Number(classid);
  const normalizedGroup = group.toLowerCase();

  const validClass = [9, 10, 11, 12].includes(classNumber);
  const validGroup = ["science", "arts"].includes(normalizedGroup);

  if (!validClass || !validGroup) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-black text-slate-900">
            Syllabus Not Available
          </h1>
          <p className="mt-3 text-slate-600">
            Please select a valid class and study group.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-950"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const subjects =
    normalizedGroup === "arts" ? artsSubjects : scienceSubjects;

  const groupName =
    normalizedGroup.charAt(0).toUpperCase() +
    normalizedGroup.slice(1);

  return (
    <main className="min-h-screen bg-[#f4f8f7] pb-20 text-slate-800">
      <section className="relative overflow-hidden bg-[#071b2b] px-5 py-14 text-white md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href={`/classes/${classid}/${normalizedGroup}`}
            className="mb-9 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to {groupName}
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-300">
              <GraduationCap size={32} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Pakistan Learning Academy
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Class {classNumber} · {groupName} Group
              </p>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-extrabold tracking-wider text-emerald-200">
            <ShieldCheck size={15} />
            GOVERNMENT OF PUNJAB · PECTAA
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Smart Syllabus <span className="text-emerald-400">2026</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
            Apne subject ko select karein aur Smart Syllabus learning section
            explore karein. Official syllabus documents verify hone ke baad
            included aur excluded topics ki details publish ki jayengi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold">
              Class {classNumber}
            </span>
            <span className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold">
              {groupName} Group
            </span>
            <span className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold">
              {subjects.length} Subject Sections
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-amber-700" size={25} />
            <div>
              <h2 className="font-extrabold text-amber-950">
                Official Syllabus Verification
              </h2>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                Yeh Smart Syllabus portal ka initial structure hai. Kisi
                chapter ya topic ko deleted, included ya officially approved
                tabhi show kiya jayega jab relevant class aur subject ka
                official PECTAA document verify ho jaye.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <Sparkles size={17} />
              EXPLORE YOUR SUBJECTS
            </div>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Class {classNumber} Smart Syllabus Subjects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Subject select karein. Har subject ke liye alag syllabus,
              chapter-wise learning aur assessment section tayyar kiya jayega.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;

              return (
                <Link
                  key={subject.slug}
                  href={`/classes/${classid}/${normalizedGroup}/smart-syllabus-2026/${subject.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      Subject {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {subject.name}
                  </h3>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                    {subject.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-bold text-emerald-700">
                      Smart Syllabus 2026
                    </span>

                    <span className="flex items-center gap-2 text-sm font-extrabold text-slate-800 group-hover:text-emerald-700">
                      Explore <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#071b2b] p-7 text-white md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                <BookOpen size={18} />
                COMPLETE TEXTBOOK LEARNING
              </div>

              <h2 className="mt-3 text-2xl font-black">
                Smart Syllabus ke saath full textbook bhi
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Smart Syllabus complete textbook learning ka replacement nahi
                hai. Students dono learning systems use kar sakenge.
              </p>
            </div>

            <Link
              href={`/classes/${classid}/${normalizedGroup}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-extrabold text-[#071b2b] hover:bg-emerald-400"
            >
              Full Textbook Learning
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function SmartSyllabusPage({ params }: PageProps) {
  return (
    <Suspense fallback={<SmartSyllabusLoading />}>
      <SmartSyllabusContent params={params} />
    </Suspense>
  );
}
