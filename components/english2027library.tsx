
"use client";

import { useState } from "react";
import {
  english2027Info,
  englishChapters2027,
  englishReviewSections2027,
} from "@/data/class9-english-2027";
import { english2027Deletions } from "@/data/class9-english-2027-deletions";

type English2027LibraryProps = {
  bookUrl?: string;
};

export default function English2027Library({
  bookUrl,
}: English2027LibraryProps) {
  const [showExcluded, setShowExcluded] = useState(false);

  const includedUnits = englishChapters2027.filter(
    (unit) => unit.examStatus === "included"
  );

  const excludedUnits = englishChapters2027.filter(
    (unit) => unit.examStatus === "excluded"
  );

  return (
    <main className="space-y-6">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-blue-900 to-sky-800 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            CLASS 9
          </span>
          <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
            SESSION 2026–27
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            ANNUAL EXAM 2027
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          English 2027
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
          Class 9 English Smart Syllabus, retained units, excluded units,
          revision sections and examination information.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-2xl font-extrabold">75</p>
            <p className="mt-1 text-xs text-blue-100">Total Marks</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-2xl font-extrabold">19</p>
            <p className="mt-1 text-xs text-blue-100">Objective</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-2xl font-extrabold">56</p>
            <p className="mt-1 text-xs text-blue-100">Subjective</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-2xl font-extrabold">2:30</p>
            <p className="mt-1 text-xs text-blue-100">Hours</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            {includedUnits.length}
          </p>
          <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-200">
            Included Units
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-2xl font-bold text-red-700 dark:text-red-300">
            {excludedUnits.length}
          </p>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Excluded Units
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            11
          </p>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Textbook Units
          </p>
        </div>

        <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 dark:border-violet-900 dark:bg-violet-950/30">
          <p className="text-2xl font-bold text-violet-700 dark:text-violet-300">
            2027
          </p>
          <p className="mt-1 text-sm text-violet-800 dark:text-violet-200">
            Board Exam
          </p>
        </div>
      </section>

      {bookUrl && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
          <h3 className="font-bold text-blue-900 dark:text-blue-200">
            Official Textbook
          </h3>
          <p className="mt-2 text-sm text-blue-800 dark:text-blue-300">
            Open the Class 9 English textbook using the available book link.
          </p>
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            Open English Book
          </a>
        </section>
      )}

      <section className="space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
            Examination Syllabus
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            These eight units remain included in the 2027 English syllabus.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {includedUnits.map((unit) => (
            <article
              key={unit.unit}
              className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-900 dark:bg-gray-900"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Unit {unit.unit}
                  </p>
                  <h4 className="mt-2 font-bold text-gray-900 dark:text-white">
                    {unit.title}
                  </h4>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                  Included
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                {unit.type.toUpperCase()} · Pages {unit.pageStart}–{unit.pageEnd}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold text-red-900 dark:text-red-200">
              Excluded Units
            </h3>
            <p className="mt-1 text-sm text-red-800 dark:text-red-300">
              Three complete units are excluded from the 2027 board examination.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowExcluded((value) => !value)}
            className="rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-800 hover:bg-red-100 dark:border-red-800 dark:bg-gray-900 dark:text-red-200"
          >
            {showExcluded ? "Hide Details" : "View Details"}
          </button>
        </div>

        {showExcluded && (
          <div className="mt-4 space-y-3">
            {excludedUnits.map((unit) => (
              <article
                key={unit.unit}
                className="rounded-xl border border-red-200 bg-white p-4 dark:border-red-900 dark:bg-gray-900"
              >
                <p className="text-xs font-bold text-red-700 dark:text-red-300">
                  UNIT {unit.unit} · PAGES {unit.pageStart}–{unit.pageEnd}
                </p>
                <h4 className="mt-2 font-bold text-gray-900 dark:text-white">
                  {unit.title}
                </h4>
                <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                  Completely excluded from the 2027 board examination.
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
          Review Sections
        </h3>
        <div className="mt-4 space-y-3">
          {englishReviewSections2027.map((review) => (
            <div
              key={review.name}
              className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
            >
              <h4 className="font-bold text-gray-900 dark:text-white">
                {review.name}
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Textbook page {review.page}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {review.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
        <h3 className="text-lg font-extrabold text-violet-900 dark:text-violet-200">
          English Grammar and Composition
        </h3>
        <p className="mt-2 text-sm leading-7 text-violet-900 dark:text-violet-200">
          English Grammar and Composition 9–10 is also part of the English
          examination. Prepare grammar, composition and the prescribed paper
          pattern alongside the retained textbook units.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="font-bold text-gray-900 dark:text-white">
          Syllabus Information
        </h3>
        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <p>
            <strong>Notification:</strong> {english2027Info.notification}
          </p>
          <p>
            <strong>Date:</strong> {english2027Info.notificationDate}
          </p>
          <p>
            <strong>Session:</strong> {english2027Info.academicSession}
          </p>
          <p>
            <strong>Annual Examination:</strong> {english2027Info.annualExam}
          </p>
        </div>
        <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
          Verification note: {english2027Info.verificationNote}
        </p>
      </section>
    </main>
  );
}
