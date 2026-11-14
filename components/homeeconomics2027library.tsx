
import {
  homeEconomics2027Info,
  homeEconomicsChapters2027,
} from "@/data/class9-home-economics-2027";

type Props = {
  bookUrl?: string;
};

export default function HomeEconomics2027Library({ bookUrl }: Props) {
  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-800 via-pink-800 to-purple-900 p-6 text-white shadow-xl sm:p-10">
        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
          Class 9 · Arts Elective · Academic Session 2026–27
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Elements of Home Economics
        </h1>

        <p className="mt-3 text-lg text-pink-100">
          Class 9 Home Economics learning library for Arts Group students.
        </p>

        <p className="mt-2 text-base text-pink-100" dir="rtl">
          {homeEconomics2027Info.subjectUrdu}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-pink-900 transition hover:bg-pink-50"
            >
              Open Textbook
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Textbook PDF verification pending
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
      </section>

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
          label="Total Marks"
          value={String(homeEconomics2027Info.totalMarks)}
          detail="BISE Lahore syllabus"
        />

        <SummaryCard
          label="Paper Duration"
          value={homeEconomics2027Info.examDuration}
          detail="Scheme reference"
        />
      </section>

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
              {homeEconomics2027Info.note}
            </p>

            <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
              The sections below are provisional references, not a
              confirmed complete chapter list.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Available Home Economics Sections
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Only the section headings currently available in the
            syllabus outline are displayed. Their original textbook
            chapter numbers and complete contents are still awaiting
            verification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {homeEconomicsChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-lg font-extrabold text-pink-800 dark:bg-pink-950 dark:text-pink-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-700 dark:text-pink-400">
                    Provisional Section
                  </p>

                  <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-xs font-medium text-amber-700 dark:text-amber-300">
                    Original textbook verification pending
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <InfoRow label="Subject" value={homeEconomics2027Info.subject} />
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
            value={homeEconomics2027Info.examDuration}
          />
          <InfoRow
            label="Medium"
            value={homeEconomics2027Info.medium}
          />
          <InfoRow
            label="Textbook Authority"
            value={homeEconomics2027Info.textbookAuthority}
          />
          <InfoRow
            label="Textbook Edition"
            value={homeEconomics2027Info.textbookEdition}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="font-bold text-blue-900 dark:text-blue-200">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-2 text-sm leading-7 text-blue-900 dark:text-blue-100">
          No subject-specific Home Economics Annual Examination 2027
          ALP deletion list has been independently verified. No chapter,
          topic, exercise or question has been marked deleted.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          Status: Subject-specific 2027 ALP verification pending
        </p>
      </section>

      <section className="rounded-2xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/30">
        <h2 className="font-bold text-purple-900 dark:text-purple-200">
          Official Curriculum Sources
        </h2>

        <p className="mt-2 text-sm leading-6 text-purple-900 dark:text-purple-100">
          Consult the official board syllabus and PECTAA catalogue
          for textbook and examination updates.
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
        Pakistan Learning Academy · Home Economics · Class 9 · 2026–27
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
