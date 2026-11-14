
import {
  physiologyHygiene2027Info,
  physiologyHygieneChapters2027,
} from "@/data/class9-physiology-hygiene-2027";

import {
  physiologyHygiene2027Deletions,
  physiologyHygiene2027DeletionSummary,
} from "@/data/class9-physiology-hygiene-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function PhysiologyHygiene2027Library({
  bookUrl,
}: Props) {
  const info = physiologyHygiene2027Info;

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950 via-emerald-900 to-cyan-950 p-6 text-white shadow-xl sm:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
            ARTS / ELECTIVE
          </span>
          <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-bold text-emerald-100">
            SESSION {info.session}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-teal-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-teal-100">
          Explore the human body, nutrition, microorganisms,
          digestive system, circulation, respiration and
          excretion through the Class 9 board syllabus.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-bold text-emerald-950 transition hover:bg-teal-50"
            >
              Open Complete Textbook ↗
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Original textbook visual verification pending
            </span>
          )}

          <a
            href={info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
          >
            PECTAA Official Books ↗
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Class", "9"],
            ["Total Chapters", String(info.totalChapters)],
            ["Total Marks", String(info.totalMarks)],
            ["Duration", info.examDuration],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-teal-700 dark:text-teal-300">
                {value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs leading-6 text-gray-500 dark:text-gray-400">
          These marks and duration refer to Class IX Part-I.
          Class X Part-II is a separate examination component.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <h2 className="font-extrabold text-amber-950 dark:text-amber-200">
          Textbook Verification Notice
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {info.note}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-200">
          The original textbook PDF still needs page-by-page
          visual verification. The chapter list and topics below
          are transcribed from the board syllabus reference.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Chapter Library
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            All seven chapters listed for Class IX Part-I.
            Expand each chapter to review its syllabus topics.
          </p>
        </div>

        <div className="space-y-4">
          {physiologyHygieneChapters2027.map((chapter) => (
            <details
              key={chapter.number}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                  {chapter.number}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    Chapter {chapter.number}
                  </span>

                  <span className="mt-1 block font-bold leading-6 text-gray-900 dark:text-white">
                    {chapter.title}
                  </span>

                  <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                    {chapter.topics.length} listed topics
                  </span>
                </span>

                <span className="text-xl text-emerald-700 transition-transform group-open:rotate-180 dark:text-emerald-300">
                 ⌄
                </span>
              </summary>

              <div className="border-t border-gray-100 px-5 py-5 dark:border-gray-800">
                <h3 className="mb-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                  Syllabus Topics
                </h3>

                <ul className="space-y-3">
                  {chapter.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-xl bg-emerald-50 p-3 text-xs leading-6 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                  Listed in the BISE Lahore Class IX 2025–2027
                  syllabus. Subject-specific 2027 ALP exclusion
                  has not been independently confirmed.
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {physiologyHygiene2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {physiologyHygiene2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries: {physiologyHygiene2027Deletions.length}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          No chapter, topic, exercise or question has been
          marked deleted without an official subject-specific
          notification.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Subject Details
        </h2>

        <div className="mt-4 grid gap-3 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
          <p><strong>Subject:</strong> {info.subject}</p>
          <p><strong>Class:</strong> {info.class}</p>
          <p><strong>Group:</strong> Arts / Elective</p>
          <p><strong>Session:</strong> {info.session}</p>
          <p><strong>Examination:</strong> {info.examination}</p>
          <p><strong>Textbook Authority:</strong> {info.textbookAuthority}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Medium:</strong> {info.medium}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="font-extrabold text-teal-950 dark:text-teal-200">
          Official Syllabus & Curriculum Sources
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.biseLahore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            BISE Lahore Official Syllabus ↗
          </a>

          <a
            href={info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Official Books ↗
          </a>

          <a
            href={info.sources.curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Curriculum & Compliance ↗
          </a>
        </div>
      </section>
    </main>
  );
}