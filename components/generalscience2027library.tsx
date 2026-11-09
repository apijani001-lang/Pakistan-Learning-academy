import {
  generalScience2027Info,
  generalScienceChapters2027,
} from "@/data/class9-general-science-2027";

import {
  generalScience2027Deletions,
  generalScience2027DeletionSummary,
} from "@/data/class9-general-science-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function GeneralScience2027Library({ bookUrl }: Props) {
  // Combined syllabus mein se sirf Class 9 ke pehle 6 chapters
  const class9Chapters = generalScienceChapters2027.slice(0, 6);

  return (
    <main className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 p-6 text-white shadow-xl sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
            Class 9 · Academic Session 2026–27
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            General Science
          </h1>

          <p className="mt-3 text-lg text-emerald-100">
            Class 9 General Science learning library for Annual Examination
            2027.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {bookUrl ? (
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Open Textbook
              </a>
            ) : (
              <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
                Textbook PDF link will be added after verification
              </span>
            )}

            <a
              href="https://pectaa.edu.pk/books-and-publications/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              PECTAA Official Books
            </a>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          label="Class"
          value="9th"
          detail="Humanities / Arts Group"
        />

        <SummaryCard
          label="Academic Session"
          value="2026–27"
          detail="Annual Exam 2027"
        />

        <SummaryCard
          label="Class 9 Chapters"
          value={String(class9Chapters.length)}
          detail="Board syllabus sequence"
        />

        <SummaryCard
          label="Verified Deletions"
          value={String(generalScience2027Deletions.length)}
          detail="No confirmed exclusions"
        />
      </section>

      {/* Textbook Verification */}
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
              The chapter sequence is based on the BISE Lahore combined
              Classes 9 and 10 syllabus for 2025–2027. The first six chapters
              are displayed here as the Class 9 portion. The original
              textbook PDF has not yet been visually checked, so detailed
              textbook page references are pending.
            </p>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Class 9 General Science Chapters
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Explore the six chapters listed for Class 9. Each chapter includes
            the available syllabus topics.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {class9Chapters.map((chapter) => {
            const deletion = generalScience2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {chapter.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Chapter {chapter.number}
                    </p>

                    <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                {chapter.topics.length > 0 ? (
                  <ul className="mt-5 space-y-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <span className="shrink-0 text-emerald-600">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Detailed topics will be added after textbook verification.
                  </p>
                )}

                {deletion?.examNote && (
                  <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    {deletion.examNote}
                  </p>
                )}

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    No verified deletion recorded
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Examination Details */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <InfoRow label="Subject" value={generalScience2027Info.subject} />

          <InfoRow label="Class" value="9" />

          <InfoRow
            label="Academic Session"
            value={generalScience2027Info.session}
          />

          <InfoRow
            label="Examination"
            value={generalScience2027Info.examination}
          />

          <InfoRow
            label="Total Marks"
            value={`${generalScience2027Info.totalMarks}`}
          />

          <InfoRow
            label="Exam Duration"
            value={generalScience2027Info.examDuration}
          />

          <InfoRow
            label="Prescribed Publisher"
            value={generalScience2027Info.publisher}
          />
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {generalScience2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: {generalScience2027DeletionSummary.status}
        </p>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="font-bold text-teal-900 dark:text-teal-200">
          Official Board Syllabus
        </h2>

        <p className="mt-2 text-sm leading-6 text-teal-900 dark:text-teal-100">
          The examination information is based on the BISE Lahore 2025–2027
          syllabus. Check the official board document for updates.
        </p>

        <a
          href={generalScience2027Info.sources.biseLahore}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex font-semibold text-teal-700 underline underline-offset-4 dark:text-teal-300"
        >
          Open BISE Lahore Syllabus
        </a>
      </section>

      <div className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Class 9 General Science · 2026–27
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
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>

      <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {detail}
      </p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
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