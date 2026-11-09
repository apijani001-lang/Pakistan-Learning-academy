import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import {
  CLASS_NAMES,
  getBoard,
  SMART_SESSION,
} from "@/lib/smart-syllabus-2027";

type Props = {
  params: Promise<{ boardid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardid } = await params;
  const board = getBoard(boardid);

  return {
    title: board
      ? `${board.name} Classes | Smart Syllabus ${SMART_SESSION}`
      : "Select Class | Pakistan Learning Academy",
    description:
      "Choose your class for the Smart Syllabus learning pathway.",
  };
}

async function ClassPicker({ params }: Props) {
  await connection();

  const { boardid } = await params;
  const board = getBoard(boardid);

  if (!board) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/smart-syllabus-2026-27"
            className="text-sm font-semibold text-emerald-300 hover:text-white"
          >
            ← Change Board
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[.25em] text-emerald-300">
            Step 2 of 3 · Select Class
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Choose Your <span className="text-emerald-300">Class</span>
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            Selected board:{" "}
            <strong className="text-white">{board.name}</strong>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(CLASS_NAMES).map(([id, name]) => (
            <Link
              key={id}
              href={`/smart-syllabus-2026-27/${boardid}/${id}`}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl"
            >
              <span className="text-sm font-bold text-emerald-700">
                CLASS {id}
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900">
                {name}
              </h2>

              <p className="mt-5 font-bold text-emerald-700">
                View Subjects →
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          Board-specific syllabus verification is shown on the subject
          pathway. Please use the official board notice and prescribed
          textbook for final examination decisions.
        </p>
      </section>
    </main>
  );
}

export default function SmartSyllabusClassPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="p-10 text-center font-semibold">
          Loading classes...
        </main>
      }
    >
      <ClassPicker params={params} />
    </Suspense>
  );
}