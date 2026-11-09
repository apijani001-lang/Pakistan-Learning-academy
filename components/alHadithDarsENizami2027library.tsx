// components/alHadithDarsENizami2027library.tsx

import Link from "next/link";

import {
  alHadith2027Info,
  alHadithSections2027,
} from "@/data/class9-al-hadith-dars-e-nizami-2027";

import {
  alHadith2027Deletions,
  alHadith2027DeletionSummary,
} from "@/data/class9-al-hadith-dars-e-nizami-2027-deletions";

export default function AlHadithDarsENizami2027Library({
  bookUrl,
}: {
  bookUrl?: string;
}) {
  const class9Sections = alHadithSections2027;

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 shadow-sm dark:border-teal-900/50 dark:from-teal-950/30 dark:via-gray-900 dark:to-emerald-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">
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
          Al-Hadith
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-teal-800 dark:text-teal-300"
          dir="rtl"
        >
          الحدیث
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Al-Hadith syllabus for the Dars-e-Nizami group,
          including prescribed topics, translation, brief explanation
          and examination information for the 2026–27 session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            Open Reference Book
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
              label: "Total Marks",
              value: `${alHadith2027Info.partI.marks} Marks`,
            },
            {
              label: "Examination Duration",
              value: alHadith2027Info.partI.duration,
            },
            {
              label: "Total Hadith Topics",
              value: `${alHadith2027Info.totalTopics} Topics`,
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

      {/* Paper Distribution */}
      <section className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5 dark:border-teal-900/50 dark:bg-teal-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Paper Marks Distribution
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-100 bg-white p-4 dark:border-teal-900/40 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              First Section
            </p>

            <p className="mt-2 text-2xl font-extrabold text-teal-800 dark:text-teal-300">
              {alHadith2027Info.paperDistribution.firstSectionMarks} Marks
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              43 prescribed topics
            </p>
          </div>

          <div className="rounded-xl border border-teal-100 bg-white p-4 dark:border-teal-900/40 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Second Section
            </p>

            <p className="mt-2 text-2xl font-extrabold text-teal-800 dark:text-teal-300">
              {alHadith2027Info.paperDistribution.secondSectionMarks} Marks
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              20 prescribed topics
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <strong>Question pattern:</strong>{" "}
          {alHadith2027Info.questionPattern}
        </p>
      </section>

      {/* Class 9 Sections */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Prescribed Topics
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            The following sections and topic headings are based on
            the BISE Lahore 2025–2027 syllabus. They are topic
            references, not complete Hadith texts.
          </p>
        </div>

        <div className="space-y-6">
          {class9Sections.map((section) => (
            <article
              key={section.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="border-b border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-800/50">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {section.topics.length} prescribed topics
                    </p>
                  </div>

                  <span className="rounded-xl bg-teal-100 px-4 py-2 text-sm font-extrabold text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">
                    {section.marks} Marks
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {section.topics.map((topic) => (
                  <div
                    key={`${section.number}-${topic.number}`}
                    className="flex items-start gap-3 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
                      {topic.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        {topic.title}
                      </p>

                      <p
                        className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300"
                        dir="rtl"
                      >
                        {topic.titleUrdu}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Class 10 — Part II Reference
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
          According to the BISE Lahore scheme, Al-Fiqah is listed
          for Part-II (Class 10). It is a separate subject, not
          a continuation of the Class 9 Al-Hadith paper.
        </p>

        <div className="mt-4 rounded-xl border border-purple-100 bg-white p-4 dark:border-purple-900/40 dark:bg-gray-900">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {alHadith2027Info.class10Reference.subject}
          </h3>

          <p
            className="mt-2 text-xl text-gray-700 dark:text-gray-300"
            dir="rtl"
          >
            {alHadith2027Info.class10Reference.subjectUrdu}
          </p>

          <p className="mt-3 text-sm font-semibold text-purple-800 dark:text-purple-300">
            {alHadith2027Info.class10Reference.marks} Marks
          </p>
        </div>
      </section>

      {/* Reference Books */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Reference Books
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          Reference books listed in the BISE Lahore syllabus:
        </p>

        <div className="mt-5 space-y-4">
          {alHadith2027Info.prescribedReferences.map(
            (book, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-4 dark:border-gray-700"
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  {index + 1}. {book.title}
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Author:</strong> {book.author}
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Publisher:</strong> {book.publisher}
                </p>
              </div>
            )
          )}
        </div>

        <div className="mt-4 rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20">
          <p className="text-sm leading-6 text-orange-800 dark:text-orange-200">
            Original reference books and exact Hadith wording
            have not yet been visually verified. Consult the
            prescribed editions before treating the Arabic
            headings as exact source text.
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
          {alHadith2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{alHadith2027Deletions.length}</strong>
        </p>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Examination scheme, marks distribution and prescribed
          reference books are based on the BISE Lahore 2025–2027
          syllabus.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900 dark:text-teal-300"
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