
import {
  chemistry2027Info,
  chemistryChapters2027,
} from "@/data/class9-chemistry-2027";

import {
  chemistry2027Deletions,
} from "@/data/class9-chemistry-2027-deletions";

type Props = {
  bookUrl: string;
};

export default function Chemistry2027Library({ bookUrl }: Props) {
  const includedChapters = chemistryChapters2027.filter(
    (chapter) => chapter.examStatus === "included-with-deletions"
  );

  const excludedChapters = chemistryChapters2027.filter(
    (chapter) => chapter.examStatus === "fully-excluded"
  );

  const totalDeletedTopics = chemistry2027Deletions.reduce(
    (total, chapter) => total + chapter.excludedTopics.length,
    0
  );

  const totalDeletedQuestionGroups = chemistry2027Deletions.reduce(
    (total, chapter) =>
      total +
      chapter.excludedQuestions.mcqs.length +
      chapter.excludedQuestions.saqs.length +
      chapter.excludedQuestions.crqs.length +
      chapter.excludedQuestions.dqs.length +
      chapter.excludedQuestions.iqs.length,
    0
  );

  return (
    <section className="mt-8 space-y-8">
      <div className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            Class 9 Chemistry
          </span>

          <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            {chemistry2027Info.session}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
          Chemistry Smart Syllabus 2027
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
          Annual Examination 2027 ke liye chapter-wise syllabus,
          reported deleted topics aur exercise question references.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {chemistry2027Info.totalChapters}
            </p>
            <p className="mt-1 text-xs text-purple-100">Total Chapters</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {includedChapters.length}
            </p>
            <p className="mt-1 text-xs text-purple-100">Included Chapters</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {excludedChapters.length}
            </p>
            <p className="mt-1 text-xs text-purple-100">Fully Excluded</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {chemistry2027Info.totalMarks}
            </p>
            <p className="mt-1 text-xs text-purple-100">Paper Marks</p>
          </div>
        </div>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-purple-100"
        >
          Open Complete Chemistry Textbook ↗
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Reported Deleted Topics
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            {totalDeletedTopics}
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Listed Question References
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            {totalDeletedQuestionGroups}
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Paper Duration
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            {chemistry2027Info.paperDuration}
          </p>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <h3 className="text-xl font-extrabold text-gray-900">
            Chapter-wise Chemistry Syllabus
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Har chapter ka examination status aur reported excluded content.
          </p>
        </div>

        <div className="space-y-4">
          {chemistryChapters2027.map((chapter) => {
            const deletion = chemistry2027Deletions.find(
              (item) => item.unit === chapter.number
            );

            const isExcluded =
              chapter.examStatus === "fully-excluded";

            return (
              <article
                key={chapter.number}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${
                  isExcluded
                    ? "border-red-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
                      Chapter {chapter.number}
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-gray-900">
                      {chapter.title}
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">
                      {chapter.examNote}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${
                      isExcluded
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {isExcluded
                      ? "Fully Excluded"
                      : "Included with Deletions"}
                  </span>
                </div>

                {deletion && (
                  <div className="border-t border-gray-100 bg-gray-50 p-5">
                    {deletion.excludedTopics.length > 0 && (
                      <div>
                        <h5 className="font-bold text-red-700">
                          Reported Deleted Topics
                        </h5>

                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
                          {deletion.excludedTopics.map((topic, index) => (
                            <li key={`${chapter.number}-topic-${index}`}>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!isExcluded && (
                      <div className="mt-5">
                        <h5 className="font-bold text-gray-800">
                          Reported Excluded Exercise Questions
                        </h5>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {[
                            ["MCQs", deletion.excludedQuestions.mcqs],
                            ["Short Answer Questions", deletion.excludedQuestions.saqs],
                            ["CRQs", deletion.excludedQuestions.crqs],
                            ["Detailed Questions", deletion.excludedQuestions.dqs],
                            ["Investigative Questions", deletion.excludedQuestions.iqs],
                          ].map(([label, questions]) => {
                            const items = questions as string[];

                            return (
                              <div
                                key={label as string}
                                className="rounded-xl border border-gray-200 bg-white p-3"
                              >
                                <p className="text-xs font-bold text-gray-500">
                                  {label as string}
                                </p>

                                <p className="mt-2 text-sm font-semibold leading-6 text-gray-800">
                                  {items.length > 0
                                    ? items.join(", ")
                                    : "No reference listed"}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {isExcluded && (
                      <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700">
                        Is chapter ko Annual Examination 2027 ke
                        reported syllabus mein completely excluded
                        bataya gaya hai.
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
        <h3 className="font-extrabold text-indigo-950">
          Chemistry Paper Information
        </h3>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <p>
            <strong>Academic Session:</strong>{" "}
            {chemistry2027Info.session}
          </p>

          <p>
            <strong>Examination:</strong>{" "}
            {chemistry2027Info.examination}
          </p>

          <p>
            <strong>Total Marks:</strong>{" "}
            {chemistry2027Info.totalMarks}
          </p>

          <p>
            <strong>Paper Duration:</strong>{" "}
            {chemistry2027Info.paperDuration}
          </p>

          <p>
            <strong>Notification:</strong>{" "}
            {chemistry2027Info.notification}
          </p>

          <p>
            <strong>Notification Date:</strong>{" "}
            {chemistry2027Info.notificationDate}
          </p>
        </div>

        <a
          href={chemistry2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-indigo-800 underline underline-offset-4"
        >
          Visit PECTAA Official Downloads ↗
        </a>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-bold text-amber-900">
          Important Source Verification Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900">
          {chemistry2027Info.verificationNote}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900">
          Deleted topics aur question references available
          secondary reproductions se transcribe kiye gaye hain.
          Original PECTAA notification ke PDF ke saath direct
          visual verification abhi pending hai. Final examination
          preparation se pehle official notification ko zaroor
          check karein.
        </p>
      </div>
    </section>
  );
}
