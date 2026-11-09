
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{ classid: string }>;
};

const classDetails: Record<string, { title: string; subtitle: string }> = {
  "9": {
    title: "Class 9",
    subtitle: "Build your foundation with chapter-wise learning and practice.",
  },
  "10": {
    title: "Class 10",
    subtitle: "Prepare confidently for your board examinations.",
  },
  "11": {
    title: "Class 11",
    subtitle: "Explore your intermediate subjects with structured lessons.",
  },
  "12": {
    title: "Class 12",
    subtitle: "Strengthen your concepts and prepare for final examinations.",
  },
};

const groups = [
  {
    id: "science",
    title: "Science Group",
    description:
      "Physics, Chemistry, Mathematics and Biology or Computer Science resources.",
    icon: "🔬",
    subjects: "Science subjects, notes and chapter practice",
  },
  {
    id: "arts",
    title: "Arts Group",
    description:
      "Humanities subjects, explanations, study notes and exam preparation.",
    icon: "📚",
    subjects: "Arts subjects, notes and chapter practice",
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { classid } = await params;
  const classNumber = String(Number(classid));
  const details = classDetails[classNumber];

  return {
    title: details
      ? `${details.title} Subjects | Pakistan Learning Academy`
      : "Class Not Found | Pakistan Learning Academy",
    description: details
      ? `Explore ${details.title} Science and Arts groups with free learning resources.`
      : "Explore free educational resources at Pakistan Learning Academy.",
  };
}

function ClassLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-700" />
        <p className="mt-4 font-medium text-slate-600">
          Loading class resources...
        </p>
      </div>
    </main>
  );
}

async function ClassContent({ params }: PageProps) {
  const { classid } = await params;
  const classNumber = String(Number(classid));
  const details = classDetails[classNumber];

  if (!details) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-8 inline-flex text-sm text-emerald-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Pakistan Learning Academy
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {details.title}{" "}
            <span className="text-emerald-400">Learning</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {details.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Choose Your Study Group
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Select Your Group
          </h2>

          <p className="mt-4 text-slate-600">
            Apna group select karein aur subjects explore karein.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {groups.map((group) => (
            <article
              key={group.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                {group.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {group.description}
              </p>

              <p className="mt-5 text-sm font-medium text-emerald-800">
                {group.subjects}
              </p>

              <Link
                href={`/classes/${classNumber}/${group.id}`}
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white transition hover:bg-emerald-800"
              >
                Explore {group.title} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white">
          <h2 className="text-2xl font-black">Free Learning for Everyone</h2>

          <p className="mt-3 max-w-3xl leading-7 text-emerald-100">
            Yahan students ko Urdu explanations, study notes aur chapter-wise
            practice resources provide kiye jayenge.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ClassPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ClassLoading />}>
      <ClassContent params={params} />
    </Suspense>
  );
}
