
import {
  generalScience2027Info,
  generalScienceChapters2027,
} from "@/data/class9-general-science-2027";

type Props = {
  bookUrl?: string;
};

export default function GeneralScience2027Library({ bookUrl }: Props) {
  // Combined Classes 9–10 syllabus ke pehle 6 chapters Class 9 portion hain.
  const class9Chapters = generalScienceChapters2027.slice(0, 6);

  return (
    <main className="space-y-8">
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
          detail="BISE Lahore syllabus sequence"
        />

        <SummaryCard
          label="Total Marks"
          value={String(generalScience2027Info.totalMarks)}
          detail={generalScience2027Info.examDuration}
        />
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Annual Examination 2027 Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The chapter sequence and examination information are based on
              the BISE Lahore Classes 9 and 10 syllabus for 2025–2027.
              The first six chapters are displayed as the Class 9 portion.
              A subject-specific Annual Examination 2027 Smart Syllabus /
              ALP deletion list has not yet been independently verified.
              Therefore, these chapter titles should not be treated as a
              confirmed list of examinable topics for the 2027 examination.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Class 9 General Science Chapters
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Chapter sequence from the BISE Lahore 2025–2027 syllabus.
            Detailed exam-preparation topics will be added after
            subject-specific 2027 syllabus verification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {class9Chapters.map((chapter) => (
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

                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Chapter listed in the base board syllabus. 2027
                    examinable topics are awaiting verification.
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
          <InfoRow
            label="Subject"
            value={generalScience2027Info.subject}
          />

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
            value={String(generalScience2027Info.totalMarks)}
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

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          No subject-specific General Science Annual Examination 2027
          ALP deletion list has been independently verified yet.
          Deleted topics, exercises and questions will not be assumed
          or invented.
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: Verification pending
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="font-bold text-teal-900 dark:text-teal-200">
          Official Board Syllabus
        </h2>

        <p className="mt-2 text-sm leading-6 text-teal-900 dark:text-teal-100">
          Refer to the BISE Lahore Classes 9 and 10 syllabus for
          the 2025–2027 session.
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
