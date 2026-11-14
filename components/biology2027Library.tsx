
import {
  biology2027Info,
  biologyChapters2027,
} from "@/data/class9-biology-2027";

type Biology2027LibraryProps = {
  bookUrl: string;
};

export default function Biology2027Library({
  bookUrl,
}: Biology2027LibraryProps) {
  // Student preparation view mein sirf examinable chapters show honge.
  // Deleted topics, deleted questions aur excluded chapter names display nahi honge.
  const examinableChapters = biologyChapters2027.filter(
    (chapter) => chapter.examStatus === "included-with-deletions"
  );

  return (
    <section className="space-y-6">
      {/* Academic Session */}
      <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-900 dark:bg-green-950/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-400">
              Current Academic Session
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              Biology — {biology2027Info.session}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {biology2027Info.examination}
            </p>
          </div>

          <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
            2027 Syllabus
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.totalChapters}
            </p>
            <p className="text-xs text-gray-500">Textbook Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-green-600">
              {examinableChapters.length}
            </p>
            <p className="text-xs text-gray-500">Preparation Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.paperDuration}
            </p>
            <p className="text-xs text-gray-500">Paper Duration</p>
          </div>
        </div>
      </div>

      {/* Complete Textbook */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Complete Biology Textbook
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Full textbook reading ke liye original book open karein.
          Textbook learning aur examination preparation alag rakhi gayi hain.
        </p>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
        >
          Read Complete Biology Book ↗
        </a>
      </div>

      {/* Examination Pattern */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Examination Information
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.objectiveMarks}
            </p>
            <p className="text-xs text-gray-500">Objective Marks</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.subjectiveMarks}
            </p>
            <p className="text-xs text-gray-500">Subjective Marks</p>
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Paper Duration: {biology2027Info.paperDuration}
        </p>
      </div>

      {/* Examinable Chapters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Biology Chapter Library
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            Class 9 Biology — Annual Examination 2027 preparation chapters.
          </p>
        </div>

        {examinableChapters.map((chapter) => (
          <article
            key={chapter.number}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-start gap-4 p-4 sm:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 font-bold text-green-800 dark:bg-green-950 dark:text-green-300">
                {String(chapter.number).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                  Chapter {chapter.number}
                </p>

                <h4 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                  {chapter.title}
                </h4>

                {chapter.page !== null && (
                  <p className="mt-1 text-xs text-gray-500">
                    Starting page: {chapter.page}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {chapter.examNote}
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                Included
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Official Reference */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
        <h3 className="text-sm font-bold text-blue-900 dark:text-blue-300">
          Official Syllabus Reference
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-900 dark:text-blue-200">
          PECTAA Smart Syllabus and examination notification for
          Academic Session 2026–27, Annual Examination 2027.
        </p>

        <p className="mt-2 text-xs leading-6 text-blue-800 dark:text-blue-300">
          Chapter-wise information in the existing project data has
          been transcribed from secondary reproductions. Direct
          original-PDF visual verification is still pending.
        </p>

        <a
          href={biology2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-bold text-blue-700 underline dark:text-blue-300"
        >
          Visit PECTAA Official Downloads ↗
        </a>
      </div>
    </section>
  );
}
