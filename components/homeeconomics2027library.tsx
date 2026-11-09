import {
  homeEconomics2027Info,
  homeEconomicsChapters2027,
} from "@/data/class9-home-economics-2027";

import {
  homeEconomics2027Deletions,
  homeEconomics2027DeletionSummary,
} from "@/data/class9-home-economics-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function HomeEconomics2027Library({ bookUrl }: Props) {
  return (
    <main className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-700 via-pink-700 to-purple-800 p-6 text-white shadow-xl sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
            Class 9 · Academic Session 2026–27
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Elements of Home Economics
          </h1>

          <p className="mt-3 text-lg text-pink-100">
            Class 9 Home Economics learning library for Arts Group students.
          </p>

          <p className="mt-2 text-base text-pink-100">
            {homeEconomics2027Info.subjectUrdu}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {bookUrl ? (
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-pink-800 transition hover:bg-pink-50"
              >
                Open Textbook
              </a>
            ) : (
              <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
                Textbook PDF link pending verification
              </span>
            )}

            <a
              href={homeEconomics2027Info.sources.pectaa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              PECTAA Official Books
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          label="Class"
          value="9th"
          detail="Arts / Elective"
        />

        <SummaryCard
          label="Academic Session"
          value="2026–27"
          detail="Annual Exam 2027"
        />

        <SummaryCard
          label="Verified Marks"
          value={String(homeEconomics2027Info.totalMarks)}
          detail="BISE Lahore syllabus"
        />

        <SummaryCard
          label="Verified Deletions"
          value={String(homeEconomics2027Deletions.length)}
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
              Important Syllabus Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The BISE Lahore syllabus lists Elements of Home Economics as a
              Class IX elective. However, the complete original textbook
              contents have not yet been visually verified. The sections
              below are provisional references, not a confirmed complete
              chapter list. Missing section numbers have intentionally not
              been invented.
            </p>
          </div>
        </div>
      </section>

      {/* Available Sections */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Home Economics — Available Sections
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            These are the available syllabus sections. Their original
            textbook chapter numbers and complete contents still require
            verification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {homeEconomicsChapters2027.map((chapter) => {
            const deletion = homeEconomics2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-lg font-extrabold text-pink-700 dark:bg-pink-950 dark:text-pink-300">
                    {chapter.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                      Available Section
                    </p>

                    <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                {chapter.topics.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <span className="shrink-0 text-pink-600">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {deletion?.examNote && (
                  <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    {deletion.examNote}
                  </p>
                )}

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
                    Section details pending verification
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
            value={homeEconomics2027Info.subject}
          />

          <InfoRow label="Class" value="9" />

          <InfoRow
            label="Academic Session"
            value={homeEconomics2027Info.session}
          />

          <InfoRow
            label="Examination"
            value={homeEconomics2027Info.examination}
          />

          <InfoRow
            label="Total Marks"
            value={String(homeEconomics2027Info.totalMarks)}
          />

          <InfoRow
            label="Exam Duration"
            value="Pending official verification"
          />

          <InfoRow
            label="Medium"
            value={homeEconomics2027Info.medium}
          />

          <InfoRow
            label="Textbook Authority"
            value={homeEconomics2027Info.textbookAuthority}
          />
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {homeEconomics2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: {homeEconomics2027DeletionSummary.status}
        </p>
      </section>

      {/* Official Sources */}
      <section className="rounded-2xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/30">
        <h2 className="font-bold text-purple-900 dark:text-purple-200">
          Official Curriculum Sources
        </h2>

        <p className="mt-2 text-sm leading-6 text-purple-900 dark:text-purple-100">
          Check the official board syllabus and PECTAA catalogue for
          textbook and examination updates.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={homeEconomics2027Info.sources.biseLahore}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-800 underline underline-offset-4 dark:text-purple-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href={homeEconomics2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-800 underline underline-offset-4 dark:text-purple-300"
          >
            PECTAA Books and Publications
          </a>
        </div>
      </section>

      <div className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Home Economics · 2026–27
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