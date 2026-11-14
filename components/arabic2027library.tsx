
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
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 p-6 text-white shadow-xl sm:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            {info.session}
          </span>
          <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-bold text-emerald-100">
            ARTS / IKHTIYARI
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-4xl font-bold text-emerald-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-100">
          Arabic language, translation, grammar, prose and
          poetry paper preparation for Class 9 Annual
          Examination 2027.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50"
          >
            Open Textbook ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Confirmed Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Total Marks", info.totalMarks],
            ["Objective Marks", info.objectiveMarks],
            ["Subjective Marks", info.subjectiveMarks],
            ["Paper Duration", info.examDuration],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="mt-2 text-xl font-extrabold text-emerald-700 dark:text-emerald-300">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
        <h2 className="text-lg font-extrabold text-emerald-950 dark:text-emerald-200">
          Objective Paper
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Questions
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {info.objectivePattern.questionCount}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Marks per Question
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {info.objectivePattern.marksPerQuestion}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 dark:bg-gray-900">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Duration
            </p>
            <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
              {info.objectivePattern.duration}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Subjective Paper Pattern
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          The following sections and marks are taken from the
          BISE Lahore Class IX Arabic paper pattern.
        </p>

        <div className="mt-5 space-y-3">
          {arabic2027PaperSections.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 font-extrabold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
                {item.question}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {item.section}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Question {item.question}
                </p>
              </div>

              <span className="shrink-0 rounded-lg bg-teal-50 px-3 py-2 text-sm font-extrabold text-teal-800 dark:bg-teal-950/40 dark:text-teal-200">
                {item.marks} marks
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          Textbook and Lesson Verification
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {info.note}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          The exact lesson sequence and individual textbook
          contents are not yet independently verified.
          Therefore, no invented chapter titles or lesson
          lists are displayed.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p><strong>Title:</strong> {info.textbookTitle}</p>
          <p className="text-xl" dir="rtl">
            {info.textbookTitleArabic}
          </p>
          <p><strong>Authority:</strong> {info.textbookAuthority}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Medium:</strong> {info.medium.join(", ")}</p>

          <div>
            <strong>Author(s):</strong>
            <ul className="mt-1 list-inside list-disc">
              {info.authors.map((author) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Publisher references:</strong>
            <ul className="mt-1 list-inside list-disc">
              {info.publishers.map((publisher) => (
                <li key={publisher}>{publisher}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          2027 ALP / Deleted Content Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {arabic2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {arabic2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries: {arabic2027Deletions.length}
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="font-extrabold text-gray-900 dark:text-white">
          Official References
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 underline underline-offset-4 dark:text-emerald-300"
          >
            BISE Lahore Official Syllabus ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 underline underline-offset-4 dark:text-emerald-300"
          >
            PECTAA Official Books ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 underline underline-offset-4 dark:text-emerald-300"
          >
            PECTAA Curriculum and Compliance ↗
          </a>
        </div>
      </section>
    </main>
  );
}
