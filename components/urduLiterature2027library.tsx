
import Link from "next/link";

import {
  urduLiterature2027Info,
  urduLiteratureSections2027,
} from "@/data/class9-urdu-literature-2027";

import {
  urduLiterature2027Deletions,
  urduLiterature2027DeletionSummary,
} from "@/data/class9-urdu-literature-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function UrduLiterature2027Library({
  bookUrl,
}: Props) {
  const info = urduLiterature2027Info;

  const class9Section = urduLiteratureSections2027.find(
    (section) => section.class === 9
  );

  const class10Section = urduLiteratureSections2027.find(
    (section) => section.class === 10
  );

  const class9Entries = class9Section?.entries ?? [];

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-fuchsia-950 to-slate-950 p-6 text-white shadow-xl sm:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            {info.academicSession}
          </span>
          <span className="rounded-full bg-fuchsia-300/20 px-3 py-1 text-xs font-bold text-fuchsia-100">
            ARTS / HUMANITIES
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-fuchsia-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-purple-100">
          Class 9 Urdu Literature: prose, poetry, ghazal,
          literary terminology and prescribed textbook
          selections for Annual Examination 2027.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-purple-50"
          >
            Open Complete Textbook ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Class 9 Marks", String(info.partI.marks)],
            ["Paper Duration", info.partI.duration],
            ["Literary Entries", String(class9Entries.length)],
            ["Combined Book Parts", String(info.totalParts)],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="mt-2 text-xl font-extrabold text-purple-700 dark:text-purple-300">
                {value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs leading-6 text-gray-500 dark:text-gray-400">
          Class 9 Part-I and Class 10 Part-II are separate
          examination components of the combined textbook.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Prescribed Literature
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            These six entries are listed in the Class IX
            Part-I syllabus. Original textbook visual
            verification is still pending for some titles.
          </p>
        </div>

        <div className="space-y-4">
          {class9Entries.map((entry) => (
            <article
              key={`${entry.class}-${entry.number}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-extrabold text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
                    {entry.number}
                  </span>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                      {entry.genre}
                    </span>
                    <h3 className="mt-1 font-bold text-gray-900 dark:text-white">
                      {entry.title}
                    </h3>
                  </div>
                </div>

                <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
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
                <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-6 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
                  Verification: {entry.verificationNote}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {class9Section?.additionalTopics &&
        class9Section.additionalTopics.length > 0 && (
          <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
              Literary and Rhetorical Topics
            </h2>

            <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
              These literary terms are listed in the Class 9
              syllabus. Their detailed textbook explanations
              can be added after original book verification.
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

      {class10Section && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
            Class 10 — Part-II Reference
          </h2>

          <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
            The combined textbook contains a separate Class 10
            section. These entries are not included in the
            Class 9 examination list above.
          </p>

          <p className="mt-3 font-bold text-blue-800 dark:text-blue-300">
            {class10Section.entries.length} Class 10 entries ·
            {` ${class10Section.marks} marks`}
          </p>
        </section>
      )}

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          2027 ALP and Deletion Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {urduLiterature2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {urduLiterature2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries: {urduLiterature2027Deletions.length}
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Prescribed Textbook Information
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p><strong>Book:</strong> {info.textbookTitle}</p>

          <p className="text-lg" dir="rtl">
            {info.textbookUrduTitle}
          </p>

          <p><strong>Authors:</strong> {info.authors}</p>
          <p><strong>Publisher:</strong> {info.publisher}</p>
          <p><strong>Medium:</strong> {info.medium}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Academic Session:</strong> {info.academicSession}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-extrabold text-gray-900 dark:text-white">
          Official Syllabus and Book References
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
          Examination marks, duration and prescribed book
          information are based on the BISE Lahore 2025–2027
          syllabus. Some individual literary titles still
          require original textbook visual verification.
        </p>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline underline-offset-4 dark:text-purple-300"
          >
            BISE Lahore Official Syllabus ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline underline-offset-4 dark:text-purple-300"
          >
            PECTAA Official Books ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline underline-offset-4 dark:text-purple-300"
          >
            PECTAA Curriculum and Compliance ↗
          </a>
        </div>
      </section>

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
