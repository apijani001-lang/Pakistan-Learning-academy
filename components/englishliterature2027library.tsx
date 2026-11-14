
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
      <section className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            {info.group}
          </span>
          <span className="rounded-full bg-green-300/20 px-3 py-1 text-xs font-bold text-green-100">
            ANNUAL EXAMINATION 2027
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-purple-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-indigo-100">
          Class 9 English Literature prescribed poetry,
          short stories and drama for the 2026–27 academic
          session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-purple-50"
          >
            Open Textbook ↗
          </a>
        )}
      </section>

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
            <p className="mt-2 text-2xl font-extrabold text-purple-700 dark:text-purple-300">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Prescribed Books and Literary Works
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400">
          These three prescribed works are identified in the
          BISE Lahore 2025–2027 syllabus.
        </p>

        <div className="mt-5 space-y-4">
          {info.prescribedBooks.map((book, index) => (
            <article
              key={`${book.title}-${index}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300">
                    Prescribed Work {index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-extrabold text-gray-900 dark:text-white">
                    {book.title}
                  </h3>

                  {"author" in book && book.author && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Author: {book.author}
                    </p>
                  )}

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Publisher: {book.publisher}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    <strong>Coverage:</strong> {book.coverage}
                  </p>
                </div>

                {book.syllabusShare && (
                  <span className="rounded-lg bg-purple-100 px-3 py-2 text-xs font-bold text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                    {book.syllabusShare}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {bookUrl ? (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-700"
          >
            Open Complete Textbook ↗
          </a>
        ) : (
          <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
            Individual original book download links are not
            provided because the prescribed books have not
            yet been visually verified.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Literature Sections
        </h2>

        <div className="mt-5 space-y-4">
          {englishLiterature2027Sections.map((section, index) => (
            <article
              key={`${section.title}-${index}`}
              className="rounded-xl border border-gray-100 p-5 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {index + 1}. {section.title}
                </h3>

                {section.syllabusShare && (
                  <span className="rounded-lg bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                    {section.syllabusShare}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                <strong>Prescribed Work:</strong>{" "}
                {section.prescribedWork}
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                <strong>Coverage:</strong> {section.coverage}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
        <h2 className="text-xl font-extrabold text-amber-950 dark:text-amber-200">
          2027 ALP / Deleted Content Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {englishLiterature2027DeletionSummary.note}
        </p>

        <div className="mt-4 rounded-xl bg-white/70 p-4 dark:bg-gray-900/60">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
            Verified deleted items: {englishLiterature2027Deletions.length}
          </p>

          <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-gray-400">
            No poem, short story, play scene or literary topic
            has been marked deleted without official confirmation.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
          Content Verification
        </h2>

        <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li>✓ Official board syllabus identified</li>
          <li>✓ Prescribed poetry collection identified</li>
          <li>✓ Prescribed short-story collection identified</li>
          <li>✓ Prescribed play identified</li>
          <li>! Individual poem titles need original-book verification</li>
          <li>! Individual short-story titles need original-book verification</li>
          <li>! Subject-specific 2027 ALP status not verified</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="font-extrabold text-gray-900 dark:text-white">
          Official References
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-semibold">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline underline-offset-4 dark:text-purple-300"
          >
            BISE Lahore — Class 9 & 10 Syllabus 2025–2027 ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline underline-offset-4 dark:text-purple-300"
          >
            PECTAA Official Books and Publications ↗
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
