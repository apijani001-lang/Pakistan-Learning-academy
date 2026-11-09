import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import {
  CLASS_NAMES,
  getBoard,
  getSmartSubjects,
  SMART_SESSION,
} from "@/lib/smart-syllabus-2027";

type Props = {
  params: Promise<{
    boardid: string;
    classid: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardid, classid } = await params;
  const board = getBoard(boardid);
  const className = CLASS_NAMES[classid];

  return {
    title:
      board && className
        ? `${className} Subjects – ${board.name} | Smart Syllabus ${SMART_SESSION}`
        : "Smart Syllabus Subjects | Pakistan Learning Academy",
    description:
      "Browse subject learning resources for your selected class and education board.",
  };
}

async function SubjectPicker({ params }: Props) {
  await connection();

  const { boardid, classid } = await params;
  const board = getBoard(boardid);
  const className = CLASS_NAMES[classid];

  if (!board || !className) notFound();

  const subjects = getSmartSubjects(classid);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/smart-syllabus-2026-27/${boardid}`}
            className="text-sm font-semibold text-emerald-300 hover:text-white"
          >
            ← Change Class
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[.25em] text-emerald-300">
            Step 3 of 3 · Select Subject
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            {className} <span className="text-emerald-300">Subjects</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
              {board.name}
            </span>

            <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
              Session {SMART_SESSION}
            </span>
          </div>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Apna subject choose karein. Subject page par available
            textbook/library content aur syllabus verification status dekhein.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-7">
          <h2 className="text-2xl font-black text-slate-900">
            Available subject pathways
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Yeh initial subject catalogue hai. Har subject ka selected board
            ke saath official 2026–27 match independently confirm karna
            zaroori hai.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <Link
              key={`${subject.group}-${subject.slug}`}
              href={`/classes/${classid}/${subject.group}/board/${boardid}/${subject.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                  {subject.icon}
                </span>

                <span className="text-xs font-bold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-900 group-hover:text-emerald-700">
                {subject.title}
              </h3>

              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                {subject.group} pathway
              </p>

              <p className="mt-4 text-sm font-bold text-emerald-700">
                Open subject →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          <strong>Important verification notice:</strong> Subject list ka
          matlab yeh nahi ke har listed subject ka official Smart Syllabus is
          board ke liye verified hai. Punjab/PECTAA based Class 9 material ko
          doosre boards par automatically apply nahi kiya jayega. Deleted
          topics aur examination scope sirf relevant official notification
          verify hone par confirm mark honge.
        </div>
      </section>
    </main>
  );
}

export default function SmartSyllabusSubjectsPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="p-10 text-center font-semibold">
          Loading subjects...
        </main>
      }
    >
      <SubjectPicker params={params} />
    </Suspense>
  );
}