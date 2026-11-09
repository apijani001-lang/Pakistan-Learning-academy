// components/urduLiterature2027library.tsx

import Link from "next/link";

import {
  urduLiterature2027Info,
  urduLiteratureSections2027,
} from "@/data/class9-urdu-literature-2027";

import {
  urduLiterature2027Deletions,
  urduLiterature2027DeletionSummary,
} from "@/data/class9-urdu-literature-2027-deletions";

type UrduLiterature2027LibraryProps = {
  bookUrl?: string;
};

export default function UrduLiterature2027Library({
  bookUrl,
}: UrduLiterature2027LibraryProps) {
  const class9Section = urduLiteratureSections2027.find(
    (section) => section.class === 9
  );

  const class10Section = urduLiteratureSections2027.find(
    (section) => section.class === 10
  );

  const class9Entries = class9Section?.entries ?? [];

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 p-6 shadow-sm dark:border-purple-900/50 dark:from-purple-950/30 dark:via-gray-900 dark:to-fuchsia-950/20 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-200">
            Elective Subject
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Urdu Literature
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-purple-800 dark:text-purple-300"
          dir="rtl"
        >
          اردو اختیاری
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Urdu Literature syllabus information, prose, poetry,
          ghazal, literary topics and examination guidance for the
          2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-800"
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
              value: String(urduLiterature2027Info.partI.marks),
            },
            {
              label: "Exam Duration",
              value: urduLiterature2027Info.partI.duration,
            },
            {
              label: "Class IX Entries",
              value: String(class9Entries.length),
            },
            {
              label: "Combined Book Parts",
              value: String(urduLiterature2027Info.totalParts),
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

      {/* Class 9 Literature */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Literature
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Part-I literary selections and page references listed in
            the BISE Lahore syllabus.
          </p>
        </div>

        <div className="space-y-4">
          {class9Entries.map((entry) => (
            <article
              key={`${entry.class}-${entry.number}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-purple-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 font-extrabold text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                    {entry.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {entry.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                      {entry.genre}
                    </p>
                  </div>
                </div>

                <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  Page {entry.pages}
                </span>
              </div>

              <p
                className="mt-4 text-xl leading-9 text-gray-800 dark:text-gray-200"
                dir="rtl"
              >
                {entry.titleUrdu}
              </p>

              {entry.verificationNote && (
                <p className="mt-3 rounded-xl bg-orange-50 p-3 text-xs leading-6 text-orange-800 dark:bg-orange-950/30 dark:text-orange-200">
                  Verification note: {entry.verificationNote}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Literary Topics */}
      {class9Section?.additionalTopics &&
        class9Section.additionalTopics.length > 0 && (
          <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Literary & Rhetorical Topics
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              The following literary terms are listed in the syllabus
              reference. Their exact textbook coverage should be
              cross-checked before final publication.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {class9Section.additionalTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm font-medium text-purple-900 dark:border-purple-800 dark:bg-gray-900 dark:text-purple-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>
        )}

      {/* Class 10 Reference */}
      {class10Section && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Class 10 — Part-II Reference
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
            The combined textbook also contains a separate Class 10
            section. It is not included in the Class 9 examination
            list above.
          </p>

          <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
            {class10Section.entries.length} reference entries are
            recorded for Part-II.
          </p>
        </section>
      )}

      {/* ALP Status */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 ALP & Deletion Status
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Verification Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {urduLiterature2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{urduLiterature2027Deletions.length}</strong>
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
            {urduLiterature2027Info.textbookTitle}
          </p>

          <p dir="rtl" className="text-lg">
            {urduLiterature2027Info.textbookUrduTitle}
          </p>

          <p>
            <strong>Authors:</strong>{" "}
            {urduLiterature2027Info.authors}
          </p>

          <p>
            <strong>Publisher:</strong>{" "}
            {urduLiterature2027Info.publisher}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {urduLiterature2027Info.medium}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {urduLiterature2027Info.academicSession}
          </p>
        </div>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Examination marks, duration and prescribed book information
          are based on the BISE Lahore 2025–2027 syllabus. Individual
          literary titles and original textbook pages still require
          visual verification.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-purple-700 underline underline-offset-4 hover:text-purple-900 dark:text-purple-300"
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