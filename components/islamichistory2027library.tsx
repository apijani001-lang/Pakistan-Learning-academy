// components/islamichistory2027library.tsx

import Link from "next/link";

import {
  islamicHistory2027Info,
  islamicHistoryChapters2027,
} from "@/data/class9-islamic-history-2027";

import {
  islamicHistory2027Deletions,
  islamicHistory2027DeletionSummary,
} from "@/data/class9-islamic-history-2027-deletions";

export default function IslamicHistory2027Library({
  bookUrl,
}: {
  bookUrl?: string;
}) {
  const class9Chapters = islamicHistoryChapters2027.filter(
    (chapter) => chapter.class === 9
  );

  const class10Chapters = islamicHistoryChapters2027.filter(
    (chapter) => chapter.class === 10
  );

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-teal-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
            Arts / Humanities
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Islamic History
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-emerald-800 dark:text-emerald-300"
          dir="rtl"
        >
          تاریخِ اسلام
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Islamic History syllabus, historical periods,
          important personalities and examination information for
          the 2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Open Textbook
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Examination Scheme */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Class 9 Theory",
              value: `${islamicHistory2027Info.partI.marks} Marks`,
            },
            {
              label: "Examination Duration",
              value: islamicHistory2027Info.partI.duration,
            },
            {
              label: "Class 9 Chapters",
              value: `${islamicHistory2027Info.class9Chapters} Chapters`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Class 9 Chapters */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Syllabus — Part I
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            The following five chapters are listed under Part I
            in the BISE Lahore 2025–2027 syllabus.
          </p>
        </div>

        <div className="space-y-4">
          {class9Chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-extrabold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Class IX · Part I
                  </p>
                </div>
              </div>

              {chapter.topics.length > 0 && (
                <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
                  <h4 className="mb-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                    Syllabus Topics
                  </h4>

                  <ul className="list-inside list-disc space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {chapter.topics.map((topic, index) => (
                      <li key={`${chapter.number}-${index}`}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {chapter.verificationNote && (
                <div className="border-t border-orange-100 bg-orange-50/60 px-5 py-3 dark:border-orange-900/30 dark:bg-orange-950/20">
                  <p className="text-xs leading-6 text-orange-800 dark:text-orange-200">
                    {chapter.verificationNote}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Class 10 — Part II Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          These four chapters are shown separately as the Part-II
          reference for the combined IX–X textbook. They are not
          included in the Class 9 chapter list.
        </p>

        <div className="mt-4 space-y-3">
          {class10Chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="rounded-xl border border-purple-100 bg-white p-4 dark:border-purple-900/40 dark:bg-gray-900"
            >
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {chapter.number}. {chapter.title}
              </p>

              {chapter.topics.length > 0 && (
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {chapter.topics.map((topic, index) => (
                    <li key={`${chapter.number}-${index}`}>
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-orange-100/70 p-4 dark:bg-orange-950/30">
          <p className="text-sm leading-6 text-orange-900 dark:text-orange-200">
            <strong>Verification note:</strong> The official syllabus
            PDF labels the Part-II heading as Class IX, although Part-I
            is also labelled Class IX. This apparent inconsistency
            needs confirmation from the board. Part-II is therefore
            displayed separately and not treated as Class 9 content.
          </p>
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
          {islamicHistory2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{islamicHistory2027Deletions.length}</strong>
        </p>
      </section>

      {/* Textbook Details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong>{" "}
            {islamicHistory2027Info.textbookTitle}
          </p>

          <p>
            <strong>Author:</strong>{" "}
            {islamicHistory2027Info.author}
          </p>

          <p>
            <strong>Publisher:</strong>{" "}
            {islamicHistory2027Info.publisher}
          </p>

          <p>
            <strong>Edition:</strong>{" "}
            {islamicHistory2027Info.textbookEdition}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {islamicHistory2027Info.medium}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {islamicHistory2027Info.academicSession}
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20">
          <p className="text-sm leading-6 text-orange-800 dark:text-orange-200">
            The original textbook has not yet been visually checked.
            Chapter topics are syllabus references and should not
            be treated as a complete textbook transcription.
          </p>
        </div>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Examination scheme and chapter references are based on
          the BISE Lahore 2025–2027 syllabus.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

      {/* Back */}
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