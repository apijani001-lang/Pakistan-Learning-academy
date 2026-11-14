
import {
  punjabi2027Info,
  punjabi2027Sections,
} from "@/data/class9-punjabi-2027";

import {
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
    <main className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-800 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            ARTS GROUP
          </span>
          <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-bold text-green-100">
            ANNUAL 2027
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-extrabold">
          Punjabi Ikhtiyari
        </h2>

        <p dir="rtl" className="mt-3 text-2xl font-bold text-purple-100">
          پنجابی اختیاری
        </p>

        <p className="mt-3 text-sm leading-7 text-purple-100">
          Class 9 Punjabi textbook information, prescribed prose
          and poetry ranges, and examination paper pattern.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total Marks", value: info.totalMarks },
            { label: "Objective", value: info.objectiveMarks },
            { label: "Subjective", value: info.subjectiveMarks },
            { label: "Duration", value: info.examDuration },
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
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 hover:bg-purple-50"
          >
            Open Punjabi Textbook
          </a>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Book:</strong> {info.textbookTitle}</p>
          <p><strong>Authors:</strong> {info.authors.join(", ")}</p>
          <p><strong>Publisher:</strong> {info.publisher}</p>
          <p><strong>Medium:</strong> {info.medium.join(", ")}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Session:</strong> {info.session}</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Punjabi Prescribed Ranges
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
          BISE Lahore 2025–2027 syllabus ke mutabiq available
          prose aur poetry ranges. Individual lesson aur poem
          titles ki original textbook se verification pending hai.
        </p>

        <div className="mt-5 space-y-4">
          {punjabi2027Sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-extrabold text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {section.lessonRange}
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Textbook pages: {section.pages}
                  </p>

                  <p className="mt-3 text-xs leading-5 text-amber-700 dark:text-amber-300">
                    Individual lesson and poem titles are awaiting
                    original textbook verification.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Punjabi Examination Paper Pattern
        </h3>

        <div className="mt-4 space-y-3">
          {info.paperPattern.map((item, index) => (
            <div
              key={`${item.section}-${index}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4 dark:border-gray-800"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.section}
              </span>

              <span className="shrink-0 font-bold text-violet-700 dark:text-violet-300">
                {item.marks} Marks
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="font-bold text-amber-950 dark:text-amber-200">
          Annual Examination 2027 ALP Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {punjabi2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          Status: {punjabi2027DeletionSummary.status}
        </p>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
        <h3 className="font-bold text-blue-950 dark:text-blue-200">
          Sources and Verification
        </h3>

        <p className="mt-3 text-sm leading-7 text-blue-900 dark:text-blue-100">
          {info.note}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline dark:text-blue-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline dark:text-blue-300"
          >
            PECTAA Books Catalogue
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline dark:text-blue-300"
          >
            PECTAA Curriculum
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-gray-400">
        Pakistan Learning Academy · Session 2026–27
      </p>
    </main>
  );
}
