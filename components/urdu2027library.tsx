
import {
  urdu2027Info,
  urduExcludedLessons2027,
  urdu2027GeneralExclusions,
} from "@/data/class9-urdu-2027";

import {
  urdu2027Deletions,
  urdu2027DeletionSummary,
} from "@/data/class9-urdu-2027-deletions";

type Props = {
  bookUrl: string;
};

export default function Urdu2027Library({ bookUrl }: Props) {
  return (
    <section className="mt-8 space-y-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            Class 9 Urdu
          </span>

          <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            {urdu2027Info.session}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
          Urdu Smart Syllabus 2027
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
          Annual Examination 2027 ke liye lesson-wise syllabus,
          excluded lessons aur examination guidance.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {urdu2027DeletionSummary.totalBookLessons}
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Total Lessons
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {urdu2027DeletionSummary.retainedLessons}
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Retained Lessons
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {urdu2027DeletionSummary.fullyExcludedLessons}
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Fully Excluded
            </p>
          </div>
        </div>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50"
        >
          Open Complete Urdu Textbook ↗
        </a>
      </div>

      <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
        <h3 className="text-lg font-extrabold text-red-900">
          Completely Excluded Lessons
        </h3>

        <p className="mt-1 text-sm text-red-800">
          In lessons se Annual Examination 2027 ke liye
          questions include nahi kiye jayenge, according to
          the available syllabus transcription.
        </p>

        <div className="mt-5 space-y-3">
          {urduExcludedLessons2027.map((lesson) => {
            const deletion = urdu2027Deletions.find(
              (item) => item.lessonNumber === lesson.number
            );

            return (
              <article
                key={lesson.number}
                className="rounded-xl border border-red-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold text-red-700">
                      Lesson {lesson.number}
                    </p>

                    <h4 className="mt-1 font-bold text-gray-900">
                      {lesson.title}
                    </h4>

                    <p
                      dir="rtl"
                      className="mt-2 text-lg font-semibold text-gray-800"
                    >
                      {lesson.titleUrdu}
                    </p>
                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                    Fully Excluded
                  </span>
                </div>

                <div className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                  <p>
                    <strong>Author:</strong> {lesson.author}
                  </p>

                  <p>
                    <strong>Book pages:</strong> {lesson.page}
                  </p>
                </div>

                {deletion && (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600">
                    {deletion.excludedContent.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                )}

                <p className="mt-3 text-sm font-semibold text-red-700">
                  {lesson.examNote}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-extrabold text-amber-950">
          Additional Examination Exclusion
        </h3>

        {urdu2027GeneralExclusions.map((item, index) => (
          <p
            key={index}
            className="mt-2 text-sm leading-7 text-amber-900"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="font-extrabold text-gray-900">
          Urdu Examination Information
        </h3>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <p>
            <strong>Academic Session:</strong>{" "}
            {urdu2027Info.session}
          </p>

          <p>
            <strong>Examination:</strong>{" "}
            {urdu2027Info.examination}
          </p>

          <p>
            <strong>Total Lessons:</strong>{" "}
            {urdu2027Info.totalLessons}
          </p>

          <p>
            <strong>Examinable Lessons:</strong>{" "}
            {urdu2027Info.examinableLessons}
          </p>

          <p>
            <strong>Notification:</strong>{" "}
            {urdu2027Info.notification}
          </p>

          <p>
            <strong>Notification Date:</strong>{" "}
            {urdu2027Info.notificationDate}
          </p>
        </div>

        <a
          href={urdu2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-emerald-800 underline underline-offset-4"
        >
          Visit PECTAA Official Downloads ↗
        </a>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-bold text-amber-900">
          Source Verification Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900">
          {urdu2027Info.verificationNote}
        </p>
      </div>
    </section>
  );
}
