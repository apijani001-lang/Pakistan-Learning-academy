import Link from "next/link";

import {
  computer2027Info,
  computerChapters2027,
} from "@/data/class9-computer-2027";

import {
  computer2027Deletions,
  computer2027DeletionSummary,
} from "@/data/class9-computer-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function Computer2027Library({ bookUrl }: Props) {
  return (
    <main className="space-y-8">
      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-6 text-white shadow-xl sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
            Class 9 · Academic Session 2026–27
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Computer Science & Entrepreneurship
          </h1>

          <p className="mt-3 text-lg text-blue-100">
            Class 9 Computer Science textbook learning library for Annual
            Examination 2027.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {bookUrl ? (
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-indigo-800 transition hover:bg-blue-50"
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
          detail="Punjab Curriculum"
        />
        <SummaryCard
          label="Academic Session"
          value="2026–27"
          detail="Annual Exam 2027"
        />
        <SummaryCard
          label="Textbook Units"
          value={String(computer2027Info.totalChapters)}
          detail="Revised sequence"
        />
        <SummaryCard
          label="Verified Deletions"
          value={String(computer2027Deletions.length)}
          detail="No confirmed exclusions"
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
              The revised nine-unit sequence is based on available textbook
              listings. The original official textbook PDF has not yet been
              visually verified. Chapter topics, page numbers and examination
              details will be updated after verification.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Library */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Class 9 Computer Science Chapters
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Explore the available chapter sequence. Detailed topics and
            textbook page references are pending official verification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {computerChapters2027.map((chapter) => {
            const deletion = computer2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg font-extrabold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {chapter.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Chapter {chapter.number}
                    </p>

                    <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                {chapter.topics.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="text-sm text-slate-600 dark:text-slate-300"
                      >
                        • {topic}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Detailed topics and page references will be added after
                    official textbook verification.
                  </p>
                )}

                {deletion?.examNote && (
                  <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    {deletion.examNote}
                  </p>
                )}

                <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    No verified deletion recorded
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
          <InfoRow label="Subject" value={computer2027Info.subject} />
          <InfoRow label="Class" value="9" />
          <InfoRow
            label="Academic Session"
            value={computer2027Info.session}
          />
          <InfoRow
            label="Examination"
            value={computer2027Info.examination}
          />
          <InfoRow
            label="Total Marks"
            value="Pending official verification"
          />
          <InfoRow
            label="Exam Duration"
            value="Pending official verification"
          />
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {computer2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: {computer2027DeletionSummary.status}
        </p>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/30">
        <h2 className="font-bold text-indigo-900 dark:text-indigo-200">
          Official Curriculum Source
        </h2>

        <p className="mt-2 text-sm leading-6 text-indigo-900 dark:text-indigo-100">
          Check PECTAA publications and curriculum updates for the latest
          official textbook and examination information.
        </p>

        <a
          href="https://pectaa.edu.pk/curriculum-compliance/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex font-semibold text-indigo-700 underline underline-offset-4 dark:text-indigo-300"
        >
          Visit PECTAA Curriculum & Compliance
        </a>
      </section>

      <div className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Class 9 Computer Science · 2026–27
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