import {
  punjabi2027Info,
  punjabi2027Sections,
} from "@/data/class9-punjabi-2027";

import {
  punjabi2027Deletions,
  punjabi2027DeletionSummary,
} from "@/data/class9-punjabi-2027-deletions";

type Punjabi2027LibraryProps = {
  bookUrl?: string;
};

export default function Punjabi2027Library({
  bookUrl,
}: Punjabi2027LibraryProps) {
  const info = punjabi2027Info;

  return (
    <div className="space-y-8">

      {/* Subject information */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Class 9 · Arts Group
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              Punjabi Ikhtiyari
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              پنجابی · Annual Examination 2027
            </p>
          </div>

          <div className="rounded-2xl bg-violet-50 px-5 py-4 text-center dark:bg-violet-950/40">
            <p className="text-2xl font-extrabold text-violet-700 dark:text-violet-300">
              {info.totalMarks}
            </p>

            <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Total Marks
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            {
              label: "Objective",
              value: String(info.objectiveMarks),
            },
            {
              label: "Subjective",
              value: String(info.subjectiveMarks),
            },
            {
              label: "Duration",
              value: "2h 30m",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
            >
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <strong>Textbook:</strong> {info.textbookTitle}
          </p>

          <p>
            <strong>Authors:</strong> {info.authors.join(", ")}
          </p>

          <p>
            <strong>Publisher:</strong> {info.publisher}
          </p>

          <p>
            <strong>Academic Session:</strong> {info.session}
          </p>

          <p>
            <strong>Textbook Edition:</strong> {info.textbookEdition}
          </p>
        </div>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Open Punjabi Textbook
          </a>
        )}
      </section>

      {/* Syllabus sections */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Class 9 Punjabi Syllabus
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          BISE Lahore 2025-2027 syllabus ke mutabiq
          Class IX prose aur poetry ki prescribed ranges.
        </p>

        <div className="mt-5 space-y-4">
          {punjabi2027Sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-extrabold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {section.lessonRange}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Textbook pages: {section.pages}
                  </p>

                  <p className="mt-3 text-xs text-amber-700 dark:text-amber-300">
                    Individual lesson and poem titles are awaiting
                    original textbook verification.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Paper pattern */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Examination Information
        </h3>

        <div className="mt-4 space-y-3">
          {info.paperPattern.map((item) => (
            <div
              key={item.section}
              className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 dark:border-slate-800"
            >
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {item.section}
              </span>

              <span className="font-bold text-slate-900 dark:text-white">
                {item.marks} marks
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ALP status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
        <h3 className="font-bold text-amber-900 dark:text-amber-300">
          2027 ALP / Deleted Lessons Status
        </h3>

        <p className="mt-3 text-sm leading-6 text-amber-900/80 dark:text-amber-200/80">
          {punjabi2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          Verified deletion entries: {punjabi2027Deletions.length}
        </p>
      </section>

      {/* Sources and verification */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/60 dark:bg-blue-950/20">
        <h3 className="font-bold text-blue-900 dark:text-blue-300">
          Sources &amp; Verification
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-900/80 dark:text-blue-200/80">
          Prose aur poetry ki prescribed ranges BISE Lahore
          2025-2027 syllabus se li gayi hain. Original textbook
          ke individual lesson titles aur detailed contents ki
          visual verification abhi pending hai.
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href="https://pectaa.edu.pk/books-and-publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            PECTAA Books Catalogue
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        Pakistan Learning Academy · Session 2026-27
      </p>
    </div>
  );
}