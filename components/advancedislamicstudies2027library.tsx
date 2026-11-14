
import Link from "next/link";

import {
  advancedIslamicStudies2027Info,
  advancedIslamicStudiesParts2027,
} from "@/data/class9-advanced-islamic-studies-2027";

import {
  advancedIslamicStudies2027DeletionSummary,
} from "@/data/class9-advanced-islamic-studies-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function AdvancedIslamicStudies2027Library({
  bookUrl,
}: Props) {
  const info = advancedIslamicStudies2027Info;

  const class9Part = advancedIslamicStudiesParts2027.find(
    (part) => part.class === 9
  );

  const class10Part = advancedIslamicStudiesParts2027.find(
    (part) => part.class === 10
  );

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-teal-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
            CLASS 9
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {info.examination}
          </span>
          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
            {info.group}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-emerald-800 dark:text-emerald-300" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 elective Islamic Studies syllabus, including
          Quranic studies, Ahadith, Seerat-e-Tayyiba and Arabic
          Grammar for the 2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Open Textbook ↗
          </a>
        )}
      </section>

      {class9Part && (
        <>
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Class 9 Examination Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Total Marks",
                  value: `${class9Part.totalMarks}`,
                },
                {
                  label: "Paper Duration",
                  value: class9Part.duration,
                },
                {
                  label: "Subject Sections",
                  value: `${class9Part.sections.length}`,
                },
                {
                  label: "Academic Session",
                  value: info.academicSession,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Class 9 Syllabus — Part I
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Subject distribution and marks from the BISE Lahore
                2025–2027 syllabus.
              </p>
            </div>

            <div className="space-y-4">
              {class9Part.sections.map((section, index) => (
                <article
                  key={`${section.title}-${index}`}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                      <p className="mt-1 text-xl text-emerald-800 dark:text-emerald-300" dir="rtl">
                        {section.titleUrdu}
                      </p>
                    </div>

                    <span className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-extrabold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                      {section.marks} Marks
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {section.syllabusDetails.map((detail, detailIndex) => (
                      <li
                        key={`${section.title}-${detailIndex}`}
                        className="flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Class 9 Marks Distribution
            </h2>

            <div className="mt-5 space-y-5">
              {class9Part.sections.map((section) => {
                const percentage =
                  (section.marks / class9Part.totalMarks) * 100;

                return (
                  <div key={section.title}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {section.title}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {section.marks} / {class9Part.totalMarks}
                      </span>
                    </div>

                    <div className="h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className="h-full rounded-full bg-emerald-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Total Marks
              </span>
              <span className="text-xl font-extrabold text-emerald-700 dark:text-emerald-300">
                {class9Part.totalMarks}
              </span>
            </div>
          </section>
        </>
      )}

      {class10Part && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Class 10 — Part II Reference
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
            These sections belong to Class 10. They are displayed
            separately and are not included in the Class 9
            examination list.
          </p>

          <div className="mt-4 space-y-3">
            {class10Part.sections.map((section) => (
              <div
                key={section.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-white p-4 dark:border-blue-900/50 dark:bg-gray-900"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {section.titleUrdu}
                  </p>
                </div>
                <span className="text-sm font-bold text-blue-800 dark:text-blue-300">
                  {section.marks} Marks
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 ALP & Deletion Status
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Subject-Specific Verification Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {advancedIslamicStudies2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-xs leading-6 text-gray-600 dark:text-gray-400">
          No Quranic verses, Ahadith, Seerat-e-Tayyiba topics or
          Arabic Grammar content has been marked deleted without
          an independently verified subject-specific notification.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong> {info.textbookTitle}
          </p>
          <p className="text-lg" dir="rtl">
            {info.textbookUrduTitle}
          </p>
          <div>
            <strong>Authors:</strong>
            <ul className="mt-2 list-inside list-disc">
              {info.authors.map((author) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>
          <p>
            <strong>Publisher:</strong> {info.publisher}
          </p>
          <p>
            <strong>Edition:</strong> {info.textbookEdition}
          </p>
          <p>
            <strong>Medium:</strong> {info.medium}
          </p>
        </div>

        <p className="mt-4 rounded-xl bg-orange-50 p-4 text-sm leading-6 text-orange-800 dark:bg-orange-950/20 dark:text-orange-200">
          Original textbook and publisher details still require
          visual verification. The syllabus distribution above
          is separate from the unverified textbook details.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official References
        </h2>

        <div className="mt-4 space-y-3">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
          >
            BISE Lahore Official Syllabus ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
          >
            PECTAA Official Books & Publications ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
          >
            PECTAA Curriculum & Compliance ↗
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
