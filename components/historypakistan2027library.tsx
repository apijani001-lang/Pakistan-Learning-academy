// components/historypakistan2027library.tsx

import Link from "next/link";

import {
  historyPakistan2027Info,
  historyPakistanChapters2027,
} from "@/data/class9-history-of-pakistan-2027";

import {
  historyPakistan2027Deletions,
  historyPakistan2027DeletionSummary,
} from "@/data/class9-history-of-pakistan-2027-deletions";

type HistoryPakistan2027LibraryProps = {
  bookUrl?: string;
};

export default function HistoryPakistan2027Library({
  bookUrl,
}: HistoryPakistan2027LibraryProps) {
  const class9Chapters = historyPakistanChapters2027.filter(
    (chapter) => chapter.class === 9
  );

  const class10Chapters = historyPakistanChapters2027.filter(
    (chapter) => chapter.class === 10
  );

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 shadow-sm dark:border-amber-900/50 dark:from-amber-950/30 dark:via-gray-900 dark:to-orange-950/20 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          History of Pakistan
        </h1>

        <p className="mt-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
          تاریخِ پاکستان
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 History of Pakistan textbook chapters, examination
          information and syllabus guidance for the 2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
          >
            Open Textbook
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Examination Information */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Class IX Marks",
              value: "75",
            },
            {
              label: "Exam Duration",
              value: "2 Hours 30 Minutes",
            },
            {
              label: "Class IX Chapters",
              value: String(historyPakistan2027Info.class9Chapters),
            },
            {
              label: "Combined Book Chapters",
              value: String(historyPakistan2027Info.totalChapters),
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
            Class 9 Complete Chapter List
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Official BISE Lahore syllabus sequence: Part-I, Class IX.
          </p>
        </div>

        <div className="space-y-3">
          {class9Chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-amber-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-amber-700 sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-base font-extrabold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                {chapter.number}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                  {chapter.title}
                </h3>

                <p
                  className="mt-2 text-lg leading-8 text-gray-700 dark:text-gray-300"
                  dir="rtl"
                >
                  {chapter.titleUrdu}
                </p>

                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Class IX · Part-I
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Class 10 Chapters — Reference Only
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The prescribed combined IX–X textbook contains a separate Part-II
          for Class 10. These chapters are not part of the Class 9 chapter
          list shown above.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          {class10Chapters.length} chapters belong to Class 10.
        </p>
      </section>

      {/* ALP / Deletion Status */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 Syllabus & ALP Status
        </h2>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
            Verification Pending
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {historyPakistan2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Currently recorded verified deletion entries:{" "}
          <strong>{historyPakistan2027Deletions.length}</strong>
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
            {historyPakistan2027Info.textbookTitle}
          </p>

          <p dir="rtl" className="text-lg">
            {historyPakistan2027Info.textbookUrduTitle}
          </p>

          <p>
            <strong>Authors:</strong>{" "}
            {historyPakistan2027Info.authors}
          </p>

          <p>
            <strong>Publisher:</strong>{" "}
            {historyPakistan2027Info.publisher}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {historyPakistan2027Info.medium}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {historyPakistan2027Info.academicSession}
          </p>
        </div>
      </section>

      {/* Source and Verification */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The chapter sequence and Class IX examination scheme are based on
          the BISE Lahore 2025–2027 syllabus. Original textbook page-by-page
          visual verification and a subject-specific 2027 ALP notification
          remain pending.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-900 dark:text-amber-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/classes"
          className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Back to Classes
        </Link>
      </div>
    </main>
  );
}