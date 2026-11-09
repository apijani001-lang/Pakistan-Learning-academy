// components/seeratUlRasool2027library.tsx

import Link from "next/link";

import {
  seeratUlRasool2027Info,
  seeratUlRasoolTopics2027,
} from "@/data/class9-seerat-ul-rasool-2027";

import {
  seeratUlRasool2027Deletions,
  seeratUlRasool2027DeletionSummary,
} from "@/data/class9-seerat-ul-rasool-2027-deletions";

export default function SeeratUlRasool2027Library({
  bookUrl,
}: {
  bookUrl?: string;
}) {
  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm dark:border-sky-900/50 dark:from-sky-950/30 dark:via-gray-900 dark:to-indigo-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 dark:bg-sky-900/50 dark:text-sky-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
            Dars-e-Nizami Group
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Seerat-ul-Rasool ﷺ
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-sky-800 dark:text-sky-300"
          dir="rtl"
        >
          سیرت الرسول خاتم النبیین ﷺ
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Seerat-ul-Rasool syllabus for the Dars-e-Nizami
          group, including the life, character, important events
          and teachings of Prophet Muhammad ﷺ.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800"
          >
            Open Reference Book
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Subject Information */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Subject Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Academic Session
            </p>

            <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
              {seeratUlRasool2027Info.academicSession}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Detailed Syllabus Marks
            </p>

            <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
              {seeratUlRasool2027Info.partI.marksOnDetailedPage} Marks
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Examination Duration
            </p>

            <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
              {seeratUlRasool2027Info.partI.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Marks Discrepancy */}
      <section className="rounded-2xl border border-orange-300 bg-orange-50 p-5 dark:border-orange-900/60 dark:bg-orange-950/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-orange-900 dark:text-orange-200">
            Important: Marks Verification
          </h2>

          <span className="rounded-full bg-orange-200 px-3 py-1 text-xs font-bold text-orange-900 dark:bg-orange-900/60 dark:text-orange-200">
            Discrepancy Found
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-orange-900 dark:text-orange-200">
          {seeratUlRasool2027Info.marksVerification.note}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-orange-200 bg-white p-4 dark:border-orange-900/50 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Detailed syllabus — Page 79
            </p>

            <p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
              {seeratUlRasool2027Info.marksVerification.detailedPageMarks}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Marks
            </p>
          </div>

          <div className="rounded-xl border border-orange-200 bg-white p-4 dark:border-orange-900/50 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Dars-e-Nizami overview — Page 78
            </p>

            <p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
              {seeratUlRasool2027Info.marksVerification.overviewPageMarks}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Marks
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm font-semibold text-orange-900 dark:text-orange-200">
          Final marks confirmation is pending from the Board.
        </p>
      </section>

      {/* Prescribed Book */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Book
        </h2>

        <div className="mt-4 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {seeratUlRasool2027Info.prescribedBook.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <strong>Author:</strong>{" "}
            {seeratUlRasool2027Info.prescribedBook.author}
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            <strong>Publisher:</strong>{" "}
            {seeratUlRasool2027Info.prescribedBook.publisher}
          </p>
        </div>
      </section>

      {/* Syllabus Topics */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Syllabus Topics
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Ten topic headings from the detailed BISE Lahore
            syllabus reference, page 79.
          </p>
        </div>

        <div className="space-y-4">
          {seeratUlRasoolTopics2027.map((topic) => (
            <article
              key={topic.number}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sm font-extrabold text-sky-800 dark:bg-sky-900/50 dark:text-sky-200">
                  {topic.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                    {topic.title}
                  </h3>

                  <p
                    className="mt-2 text-base leading-8 text-gray-700 dark:text-gray-300"
                    dir="rtl"
                  >
                    {topic.titleUrdu}
                  </p>

                  {topic.details.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {topic.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {topic.verificationNote && (
                    <p className="mt-3 rounded-lg bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-950/30 dark:text-orange-200">
                      {topic.verificationNote}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 ALP & Deletion Status
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Verification Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {seeratUlRasool2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{seeratUlRasool2027Deletions.length}</strong>
        </p>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Based on the BISE Lahore Secondary School Syllabus
          2025–2027, detailed subject page 79.
        </p>

        <a
          href={seeratUlRasool2027Info.source}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-900 dark:text-sky-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

      {/* Navigation */}
      <div>
        <Link
          href="/classes"
          className="inline-flex rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Back to Classes
        </Link>
      </div>
    </main>
  );
}