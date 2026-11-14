
"use client";

import {
  persian2027Info,
  persian2027PaperSections,
} from "@/data/class9-persian-2027";

import {
  persian2027DeletionSummary,
} from "@/data/class9-persian-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function Persian2027Library({ bookUrl }: Props) {
  const info = persian2027Info;

  return (
    <main className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-purple-950 via-indigo-900 to-violet-800 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            ARTS / HUMANITIES
          </span>
          <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-bold text-green-100">
            ANNUAL 2027
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-extrabold">
          Persian Library
        </h2>

        <p dir="rtl" className="mt-3 text-3xl font-bold text-purple-100">
          فارسی
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-purple-100">
          Class 9 Persian prescribed textbook information and
          examination paper preparation for academic session 2026–27.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total Marks", value: info.partI.totalMarks },
            { label: "Objective", value: info.partI.objectiveMarks },
            { label: "Subjective", value: info.partI.subjectiveMarks },
            { label: "Duration", value: info.partI.duration },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-xl font-extrabold">{item.value}</p>
              <p className="mt-1 text-xs text-purple-100">{item.label}</p>
            </div>
          ))}
        </div>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-purple-50"
          >
            Open Persian Textbook
          </a>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Book:</strong> {info.textbookTitle}</p>
          <p><strong>Urdu Title:</strong> {info.textbookUrduTitle}</p>
          <p><strong>Classes:</strong> {info.textbookClasses}</p>
          <p><strong>Authors / Editors:</strong> {info.authorsEditors.join(", ")}</p>
          <p><strong>Publisher:</strong> {info.publisher}</p>
          <p><strong>Medium:</strong> {info.medium}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
        </div>

        {!bookUrl && (
          <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
            Original textbook PDF visual verification pending.
            Unverified download link is not displayed.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Class 9 Persian Paper Pattern
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          BISE Lahore syllabus 2025–2027.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-950/30">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Objective Section
            </p>
            <p className="mt-1 text-2xl font-bold text-purple-700 dark:text-purple-300">
              {info.partI.objectiveMarks} Marks
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.partI.objectiveQuestions} questions ·{" "}
              {info.partI.objectiveDuration}
            </p>
          </div>

          <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subjective Section
            </p>
            <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">
              {info.partI.subjectiveMarks} Marks
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.partI.subjectiveDuration}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
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
          Objective aur subjective marks mila kar 75 marks bante hain.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">
          2027 ALP / Deleted Topics Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-200">
          {persian2027DeletionSummary.note}
        </p>

        <p className="mt-4 text-sm font-bold text-amber-900 dark:text-amber-200">
          Status: {persian2027DeletionSummary.status}
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Content Verification
        </h3>

        <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          {info.notes.map((note, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 text-purple-600">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/20">
        <h3 className="text-lg font-bold text-blue-950 dark:text-blue-200">
          Official References
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline dark:text-blue-300"
          >
            BISE Lahore — Class 9 & 10 Syllabus 2025–2027
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline dark:text-blue-300"
          >
            PECTAA — Books and Publications
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline dark:text-blue-300"
          >
            PECTAA — Curriculum Compliance
          </a>
        </div>
      </section>
    </main>
  );
}
