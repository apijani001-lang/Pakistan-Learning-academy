
import {
  physics2027Info,
  physicsChapters2027,
} from "@/data/class9-physics-2027";

import {
  physics2027Deletions,
  physics2027DeletionSource,
} from "@/data/class9-physics-2027-deletions";

type Physics2027LibraryProps = {
  bookUrl: string;
};

export default function Physics2027Library({
  bookUrl,
}: Physics2027LibraryProps) {
  const totalDeletedTopics = physics2027Deletions.reduce(
    (total, chapter) => total + chapter.excludedTopics.length,
    0
  );

  const totalDeletedQuestionGroups = physics2027Deletions.reduce(
    (total, chapter) =>
      total +
      Object.values(chapter.excludedQuestions).reduce(
        (sum, questions) => sum + questions.length,
        0
      ),
    0
  );

  return (
    <section className="space-y-6">
      {/* Session header */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Current Academic Session
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              Physics — {physics2027Info.session}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {physics2027Info.examination}
            </p>
          </div>

          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            2027 Syllabus
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalChapters}
            </p>
            <p className="text-xs text-gray-500">Total Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-green-600">
              {physics2027Info.examinableChapters}
            </p>
            <p className="text-xs text-gray-500">Included Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalDeletedTopics}
            </p>
            <p className="text-xs text-gray-500">Listed Deleted Topics</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          {totalDeletedQuestionGroups} listed question groups across the
          exercise categories.
        </p>
      </div>

      {/* Textbook */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Complete Physics Textbook
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Open the complete textbook for chapter reading and study.
        </p>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Read Complete Physics Book ↗
        </a>
      </div>

      {/* Examination pattern */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Examination Information
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.paperDuration}
            </p>
            <p className="text-xs text-gray-500">Paper Duration</p>
          </div>
        </div>
      </div>

      {/* Chapter library */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Physics Chapter Library
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Chapter-wise syllabus and deleted examination content.
          </p>
        </div>

        {physicsChapters2027.map((chapter) => {
          const deletion = physics2027Deletions.find(
            (item) => item.unit === chapter.number
          );

          return (
            <article
              key={chapter.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      Chapter {chapter.number}
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                      {chapter.title}
                    </h4>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                    Included with Deletions
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {chapter.examNote}
                </p>

                {deletion && (
                  <div className="mt-4 space-y-4">
                    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20">
                      <h5 className="text-sm font-bold text-red-700 dark:text-red-300">
                        Deleted Topics
                      </h5>

                      <ul className="mt-3 space-y-2">
                        {deletion.excludedTopics.map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-red-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20">
                      <h5 className="text-sm font-bold text-amber-800 dark:text-amber-300">
                        Deleted Exercise Questions
                      </h5>

                      <div className="mt-3 space-y-3">
                        {(
                          [
                            ["MCQs", deletion.excludedQuestions.mcqs],
                            [
                              "Short Answers",
                              deletion.excludedQuestions.shortAnswers,
                            ],
                            [
                              "CRQs",
                              deletion.excludedQuestions.crqs,
                            ],
                            [
                              "Comprehensive Questions",
                              deletion.excludedQuestions.comprehensive,
                            ],
                            [
                              "Numericals",
                              deletion.excludedQuestions.numericals,
                            ],
                          ] as const
                        ).map(([label, questions]) => (
                          <div key={label}>
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                              {label}
                            </p>

                            {questions.length > 0 ? (
                              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                {questions.join(", ")}
                              </p>
                            ) : (
                              <p className="mt-1 text-sm text-gray-500">
                                No deletions listed in the available transcription.
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Source notice */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300">
          Syllabus Verification Notice
        </h3>

        <p className="mt-2 text-xs leading-6 text-gray-700 dark:text-gray-300">
          {physics2027DeletionSource.verification}
        </p>

        <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
          Notification: {physics2027DeletionSource.notification}
        </p>

        <a
          href={physics2027DeletionSource.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-300"
        >
          Check PECTAA Official Downloads ↗
        </a>
      </div>
    </section>
  );
}
