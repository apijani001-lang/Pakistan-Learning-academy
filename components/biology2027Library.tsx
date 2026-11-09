
import {
  biology2027Info,
  biologyChapters2027,
} from "@/data/class9-biology-2027";

import {
  biology2027Deletions,
  biology2027AdditionalExclusions,
  biology2027DeletionSource,
} from "@/data/class9-biology-2027-deletions";

type Biology2027LibraryProps = {
  bookUrl: string;
};

export default function Biology2027Library({
  bookUrl,
}: Biology2027LibraryProps) {
  const includedChapters = biologyChapters2027.filter(
    (chapter) => chapter.examStatus === "included-with-deletions"
  );

  const excludedChapters = biologyChapters2027.filter(
    (chapter) => chapter.examStatus === "fully-excluded"
  );

  return (
    <section className="space-y-6">
      {/* Session information */}
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
            <p className="text-xs text-gray-500">Total Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-green-600">
              {includedChapters.length}
            </p>
            <p className="text-xs text-gray-500">Included Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-red-600">
              {excludedChapters.length}
            </p>
            <p className="text-xs text-gray-500">Excluded Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {biology2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>
        </div>
      </div>

      {/* Textbook */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Complete Biology Textbook
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Open the complete textbook for chapter reading and study.
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

      {/* Exam pattern */}
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

      {/* Chapters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Biology Chapter Library
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Annual Examination 2027 syllabus and deleted topics.
          </p>
        </div>

        {biologyChapters2027.map((chapter) => {
          const deletion = biology2027Deletions.find(
            (item) => item.unit === chapter.number
          );

          const isExcluded =
            chapter.examStatus === "fully-excluded";

          return (
            <article
              key={chapter.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
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
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isExcluded
                        ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                        : "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                    }`}
                  >
                    {isExcluded
                      ? "Completely Excluded"
                      : "Included with Deletions"}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {chapter.examNote}
                </p>

                {deletion && (
                  <div className="mt-4 rounded-xl bg-red-50 p-4 dark:bg-red-950/20">
                    <h5 className="text-sm font-bold text-red-700 dark:text-red-300">
                      Deleted Topics and Questions
                    </h5>

                    <ul className="mt-3 space-y-2">
                      {deletion.excluded.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="mt-0.5 text-red-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Additional exclusions */}
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
        <h3 className="text-lg font-bold text-red-800 dark:text-red-300">
          Additional Syllabus Exclusions
        </h3>

        {biology2027AdditionalExclusions.map((item) => (
          <div key={item.title} className="mt-3">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h4>

            {item.excluded.map((entry, index) => (
              <p
                key={index}
                className="mt-1 text-sm text-gray-700 dark:text-gray-300"
              >
                {entry}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Source and verification note */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300">
          Syllabus Verification Notice
        </h3>

        <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-300">
          {biology2027DeletionSource.verification}
        </p>

        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
          Notification: {biology2027DeletionSource.notification}
        </p>

        <a
          href={biology2027DeletionSource.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-purple-700 underline dark:text-purple-300"
        >
          Check PECTAA Official Downloads ↗
        </a>
      </div>
    </section>
  );
}
