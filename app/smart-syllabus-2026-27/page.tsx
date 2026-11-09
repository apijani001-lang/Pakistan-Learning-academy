import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { SMART_BOARDS, SMART_SESSION } from "@/lib/smart-syllabus-2027";

export const metadata: Metadata = {
  title: "Select Your Education Board | Smart Syllabus 2026–27",
  description:
    "Choose your Pakistani education board to explore the Smart Syllabus 2026–27 for Classes 9 to 12.",
};

async function BoardPicker() {
  await connection();

  const regions = [...new Set(SMART_BOARDS.map((board) => board.region))];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-semibold text-emerald-300 hover:text-white"
          >
            ← Home
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[.25em] text-emerald-300">
            Pakistan Learning Academy
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Smart Syllabus{" "}
            <span className="text-emerald-300">{SMART_SESSION}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Sab se pehle apna education board select karein. Agle step mein
            class aur phir subjects choose kar sakenge.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
            Step 1 of 3 · Select Board
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        {regions.map((region) => (
          <div key={region} className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-8 rounded-full bg-emerald-500" />
              <h2 className="text-xl font-black text-slate-900">{region}</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SMART_BOARDS.filter((board) => board.region === region).map(
                (board) => (
                  <Link
                    key={board.id}
                    href={`/smart-syllabus-2026-27/${board.id}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                        🏫
                      </span>
                      <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">
                        →
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                      {board.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Select this board
                    </p>
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}

        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          Academic accuracy note: board selection sirf navigation set karta
          hai. Official 2026–27 syllabus, deleted topics aur textbook
          applicability har board ke liye alag verify ki jayegi. Unverified
          material ko official ya confirmed nahi kaha jayega.
        </p>
      </section>
    </main>
  );
}

export default function SmartSyllabusBoardPage() {
  return (
    <Suspense
      fallback={
        <main className="p-10 text-center font-semibold">
          Loading boards...
        </main>
      }
    >
      <BoardPicker />
    </Suspense>
  );
}