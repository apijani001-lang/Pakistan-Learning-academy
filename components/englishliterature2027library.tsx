"use client";

import Link from "next/link";

import {
  englishLiterature2027Info,
  englishLiterature2027Sections,
} from "@/data/class9-english-literature-2027";

import {
  englishLiterature2027Deletions,
  englishLiterature2027DeletionSummary,
} from "@/data/class9-english-literature-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function EnglishLiterature2027Library({
  bookUrl,
}: Props) {
  const info = englishLiterature2027Info;

  return (
    <main className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 dark:border-purple-900 dark:from-purple-950/40 dark:via-gray-950 dark:to-indigo-950/40">
        <div className="mb-4 flex flex-wrap items-center gap-2">
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
          English Literature Library
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 English Literature syllabus, prescribed literary works and
          examination information for the 2026–27 academic session.
        </p>
      </section>

      {/* Overview */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Total Marks",
            value: info.totalMarks,
          },
          {
            label: "Exam Duration",
            value: info.duration,
          },
          {
            label: "Prescribed Sections",
            value: info.totalSections,
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

      {/* Prescribed Books */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Books and Literary Works
        </h3>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Official BISE Lahore syllabus references.
        </p>

        <div className="mt-5 space-y-4">
          {info.prescribedBooks.map((book, index) => (
            <div
              key={`${book.title}-${index}`}
              className="rounded-xl border border-gray-100 p-4 dark:border-gray-800"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {book.title}
                  </p>

                  {"author" in book && book.author && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Author: {book.author}
                    </p>
                  )}

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Publisher: {book.publisher}
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Coverage: {book.coverage}
                  </p>
                </div>

                {book.syllabusShare && (
                  <span className="h-fit w-fit rounded-lg bg-purple-100 px-3 py-2 text-xs font-bold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
                    {book.syllabusShare}
                  </span>
                )}
              </div>
            </div>
          ))}
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
            Original prescribed books have not yet been visually verified.
            Individual book download links are therefore not provided.
          </p>
        )}
      </section>

      {/* Sections */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Class 9 Literature Sections
        </h3>

        <div className="mt-5 space-y-4">
          {englishLiterature2027Sections.map((section, index) => (
            <div
              key={`${section.title}-${index}`}
              className="rounded-xl border border-gray-100 p-5 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {index + 1}. {section.title}
                </h4>

                {section.syllabusShare && (
                  <span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                    {section.syllabusShare}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                <strong>Prescribed Work:</strong>{" "}
                {section.prescribedWork}
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Coverage:</strong> {section.coverage}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deletion Status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">
          2027 ALP / Deleted Content Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-200">
          {englishLiterature2027DeletionSummary.note}
        </p>

        <div className="mt-4 rounded-xl bg-white/70 p-4 dark:bg-gray-900/60">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Verified deleted items: {englishLiterature2027Deletions.length}
          </p>

          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            No poem, story or play content has been marked deleted without
            official confirmation.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Content Verification
        </h3>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✓ Official board syllabus checked</li>
          <li>✓ Prescribed poetry collection identified</li>
          <li>✓ Prescribed short-story collection identified</li>
          <li>✓ Prescribed play identified</li>
          <li>! Individual poem and story titles need verification</li>
          <li>! Original books visual verification pending</li>
          <li>! 2027 subject-specific ALP status not verified</li>
        </ul>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Official Reference
        </h3>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300"
        >
          BISE Lahore — Class 9 & 10 Syllabus 2025–2027
        </a>
      </section>

      {/* Back */}
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
