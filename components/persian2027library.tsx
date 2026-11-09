"use client";

import Link from "next/link";

import {
  persian2027Info,
  persian2027PaperSections,
} from "@/data/class9-persian-2027";

import {
  persian2027Deletions,
  persian2027DeletionSummary,
} from "@/data/class9-persian-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function Persian2027Library({ bookUrl }: Props) {
  const info = persian2027Info;

  return (
    <main className="space-y-6">
      {/* Header */}
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
          Persian Library
        </h2>

        <p
          className="mt-2 text-3xl font-semibold text-purple-700 dark:text-purple-300"
          dir="rtl"
        >
          فارسی
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Persian syllabus, prescribed textbook information and
          examination paper pattern for the 2026–27 academic session.
        </p>
      </section>

      {/* Exam Overview */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Total Marks",
            value: info.partI.totalMarks,
          },
          {
            label: "Objective Marks",
            value: info.partI.objectiveMarks,
          },
          {
            label: "Subjective Marks",
            value: info.partI.subjectiveMarks,
          },
          {
            label: "Exam Duration",
            value: info.partI.duration,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </p>

            <p className="mt-2 text-2xl font-bold text-purple-700 dark:text-purple-300">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* Textbook */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong> {info.textbookTitle}
          </p>

          <p>
            <strong>Urdu Title:</strong> {info.textbookUrduTitle}
          </p>

          <p>
            <strong>Authors:</strong> {info.authorsEditors.join(", ")}
          </p>

          <p>
            <strong>Publisher:</strong> {info.publisher}
          </p>

          <p>
            <strong>Medium:</strong> {info.medium}
          </p>

          <p>
            <strong>Edition:</strong> {info.textbookEdition}
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
            Original Persian textbook PDF has not yet been visually verified.
            We are not displaying an unverified download link.
          </p>
        )}
      </section>

      {/* Paper Pattern */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Class 9 Persian Paper Pattern
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            BISE Lahore syllabus 2025–2027
          </p>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-950/30">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Objective Section
            </p>

            <p className="mt-1 text-2xl font-bold text-purple-700 dark:text-purple-300">
              15 Marks
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              15 questions · 20 minutes
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subjective Section
            </p>

            <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
              60 Marks
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Short answers, prose and poetry
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {persian2027PaperSections.map((section, index) => (
            <div
              key={`${section.question}-${index}`}
              className="flex flex-col justify-between gap-2 rounded-xl border border-gray-100 p-4 dark:border-gray-800 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {section.question}
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </div>

              <span className="w-fit rounded-lg bg-purple-100 px-3 py-2 text-sm font-bold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                {section.marks} Marks
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          The objective and subjective marks together make 75 marks.
        </p>
      </section>

      {/* Deletion Status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">
          2027 ALP / Deleted Topics Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-200">
          {persian2027DeletionSummary.note}
        </p>

        <div className="mt-4 rounded-xl bg-white/70 p-4 dark:bg-gray-900/60">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Verified deleted topics: {persian2027Deletions.length}
          </p>

          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            No Persian lesson, poetry or translation exercise has been marked
            excluded without official confirmation.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Content Verification
        </h3>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✓ Official board syllabus and examination scheme checked</li>
          <li>✓ Prescribed textbook reference recorded</li>
          <li>! Individual chapter and lesson titles need verification</li>
          <li>! Original textbook PDF visual verification pending</li>
          <li>! 2027 subject-specific ALP status not verified</li>
        </ul>
      </section>

      {/* Official Sources */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Official Reference
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">
          <a
            href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-700 hover:underline dark:text-purple-300"
          >
            BISE Lahore — Class 9 & 10 Syllabus 2025–2027
          </a>

          <a
            href="https://pectaa.edu.pk/books-and-publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-purple-700 hover:underline dark:text-purple-300"
          >
            PECTAA — Books and Publications
          </a>
        </div>
      </section>

      {/* Back Button */}
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