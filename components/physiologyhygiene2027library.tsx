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
  return (
    <main className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-emerald-800 to-cyan-900 p-6 text-white shadow-xl sm:p-10">
        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm">
          Class 9 · Arts Elective · Academic Session 2026–27
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Physiology &amp; Hygiene
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-teal-100">
          Explore the Class 9 syllabus, human body systems, nutrition,
          microorganisms and personal health education.
        </p>

        <p className="mt-2 text-lg text-teal-100">
          {physiologyHygiene2027Info.subjectUrdu}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-900 transition hover:bg-teal-50"
            >
              Open Textbook
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Textbook PDF verification pending
            </span>
          )}

          <a
            href={physiologyHygiene2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
          >
            PECTAA Official Books
          </a>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          label="Class"
          value="9th"
          detail="Arts Elective"
        />

        <SummaryCard
          label="Chapters"
          value={String(physiologyHygiene2027Info.totalChapters)}
          detail="Board syllabus"
        />

        <SummaryCard
          label="Total Marks"
          value={String(physiologyHygiene2027Info.totalMarks)}
          detail="Part-I examination"
        />

        <SummaryCard
          label="Duration"
          value="2h 30m"
          detail="Board syllabus"
        />
      </section>

      {/* Verification Notice */}
      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Textbook Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The seven Class IX chapters are identified in the
              BISE Lahore 2025–2027 syllabus. The original textbook
              PDF has not yet been visually checked. Chapter 2's
              displayed title is a readable transcription and needs
              confirmation against the original textbook.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Library */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Class 9 Chapter Library
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Seven chapters listed in the available Class IX board syllabus.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {physiologyHygieneChapters2027.map((chapter) => {
            const deletion = physiologyHygiene2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {chapter.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Chapter {chapter.number}
                    </p>

                    <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                {chapter.topics.length > 0 && (
                  <div className="mt-5">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Topics
                    </h4>

                    <ul className="space-y-2">
                      {chapter.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                          <span className="shrink-0 text-emerald-600">
                            •
                          </span>

                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {deletion?.examNote && (
                  <div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    {deletion.examNote}
                  </div>
                )}

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    Included in the listed board syllabus
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Examination Information */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <InfoRow
            label="Subject"
            value={physiologyHygiene2027Info.subject}
          />

          <InfoRow label="Class" value="9" />

          <InfoRow
            label="Group"
            value="Arts / Elective"
          />

          <InfoRow
            label="Academic Session"
            value={physiologyHygiene2027Info.session}
          />

          <InfoRow
            label="Examination"
            value={physiologyHygiene2027Info.examination}
          />

          <InfoRow
            label="Total Marks"
            value={String(physiologyHygiene2027Info.totalMarks)}
          />

          <InfoRow
            label="Exam Duration"
            value={physiologyHygiene2027Info.examDuration}
          />

          <InfoRow
            label="Medium"
            value={physiologyHygiene2027Info.medium}
          />
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {physiologyHygiene2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          {physiologyHygiene2027DeletionSummary.status}
        </p>
      </section>

      {/* Official Sources */}
      <section className="rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="font-bold text-teal-900 dark:text-teal-200">
          Official Curriculum Sources
        </h2>

        <p className="mt-2 text-sm leading-6 text-teal-900 dark:text-teal-100">
          Consult the board syllabus and PECTAA catalogue for
          official subject and textbook information.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={physiologyHygiene2027Info.sources.biseLahore}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href={physiologyHygiene2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Books
          </a>

          <a
            href={physiologyHygiene2027Info.sources.curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Curriculum
          </a>
        </div>
      </section>

      <div className="text-center text-xs text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Physiology &amp; Hygiene · 2026–27
      </div>
    </main>
  );
}

function SummaryCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {detail}
      </p>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}