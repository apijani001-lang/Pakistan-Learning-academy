
"use client";

import Link from "next/link";

import {
  arabic2027Info,
  arabic2027PaperSections,
} from "@/data/class9-arabic-2027";

import {
  arabic2027Deletions,
  arabic2027DeletionSummary,
} from "@/data/class9-arabic-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function Arabic2027Library({ bookUrl }: Props) {
  const info = arabic2027Info;

  return (
    <main className="space-y-6">
      <section className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 dark:border-purple-900 dark:from-purple-950/40 dark:via-gray-950 dark:to-indigo-950/40">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
            Class 9
          </span>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
            Arts / Humanities
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-200">
            Annual 2027
          </span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Arabic Library
        </h2>

        <p
          className="mt-2 text-2xl font-semibold text-purple-700 dark:text-purple-300"
          dir="rtl"
        >
          عربی اختیاری
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Arabic syllabus, prescribed textbook information and
          examination paper pattern for the 2026–27 academic session.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Marks", value: info.totalMarks },
          { label: "Objective Marks", value: info.objectiveMarks },
          { label: "Subjective Marks", value: info.subjectiveMarks },
          { label: "Exam Duration", value: info.examDuration },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </p>

            <p className="mt-2 text-2xl font-bold text-purple-700 dark:text-purple-300">
              {item.value ?? "Not verified"}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong> {info.textbookTitle}
          </p>

          <p>
            <strong>Arabic Title:</strong> {info.textbookTitleArabic}
          </p>

          <p>
            <strong>Author:</strong> {info.authors.join(" / ")}
          </p>

          <p>
            <strong>Publisher:</strong> {info.publishers.join(" / ")}
          </p>

          <p>
            <strong>Medium:</strong> {info.medium.join(" / ")}
          </p>
        </div>

        {bookUrl ? (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Open Textbook
          </a>
        ) : (
          <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
            Original textbook PDF has not yet been visually verified. We are
            not displaying an unverified book download link.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Class 9 Arabic Paper Pattern
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Official BISE Lahore syllabus pattern
          </p>
        </div>

        <div className="mb-5 rounded-xl bg-purple-50 p-4 dark:bg-purple-950/30">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Objective Section
              </p>

              <p className="mt-1 text-2xl font-bold text-purple-700 dark:text-purple-300">
                {info.objectivePattern.marks} Marks
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {info.objectivePattern.questionCount} questions ·{" "}
                {info.objectivePattern.duration}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subjective Section
              </p>

              <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                {info.subjectiveMarks} Marks
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {arabic2027PaperSections.map((section, index) => (
            <div
              key={`${section.question}-${index}`}
              className="flex flex-col justify-between gap-2 rounded-xl border border-gray-100 p-4 dark:border-gray-800 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Question {section.question}
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {section.section}
                </p>
              </div>

              <span className="w-fit rounded-lg bg-purple-100 px-3 py-2 text-sm font-bold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                {section.marks} Marks
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">
          2027 ALP / Deleted Topics Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-200">
          {arabic2027DeletionSummary.note}
        </p>

        <div className="mt-4 rounded-xl bg-white/70 p-4 dark:bg-gray-900/60">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Verified deleted topics: {arabic2027Deletions.length}
          </p>

          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            No Arabic lesson or topic has been marked excluded without
            subject-specific official confirmation.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Content Verification
        </h3>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✓ Official board syllabus and paper scheme checked</li>
          <li>✓ Prescribed textbook title and author checked</li>
          <li>! Individual lesson sequence still needs verification</li>
          <li>! Original textbook PDF visual verification pending</li>
          <li>! 2027 subject-specific ALP status not verified</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Official Reference
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-700 hover:underline dark:text-purple-300"
          >
            BISE Lahore — Class 9 & 10 Syllabus 2025–2027
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-700 hover:underline dark:text-purple-300"
          >
            PECTAA — Books and Publications
          </a>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/classes"
          className="inline-flex rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Back to Classes
        </Link>
      </div>
    </main>
  );
}
