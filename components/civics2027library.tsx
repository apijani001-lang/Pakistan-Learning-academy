
import {
  civics2027Info,
  civicsChapters2027,
} from "@/data/class9-civics-2027";

export default function Civics2027Library() {
  return (
    <main className="my-8 space-y-6">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 p-6 text-white shadow-lg sm:p-8">
        <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
          Class 9 · Humanities / Arts Group
        </div>

        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Civics
        </h1>

        <p className="mt-2 text-xl text-blue-100" dir="rtl">
          شہریات
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
          Class 9 Civics library for academic session 2026–27 and
          Annual Examination 2027.
        </p>

        <a
          href={civics2027Info.source.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-50"
        >
          View Official Board Syllabus
        </a>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat
          label="Total Marks"
          value={civics2027Info.totalMarks}
        />
        <Stat
          label="Chapters"
          value={civicsChapters2027.length}
        />
        <Stat
          label="Duration"
          value={civics2027Info.duration}
        />
        <Stat
          label="Exam Year"
          value={civics2027Info.annualExamination}
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <InfoCard
          title="Academic Session"
          value={civics2027Info.session}
        />
        <InfoCard
          title="Textbook Edition"
          value={civics2027Info.textbookEdition}
        />
        <InfoCard
          title="Medium"
          value={civics2027Info.medium.join(", ")}
        />
        <InfoCard
          title="Examination"
          value="Annual Examination 2027"
        />
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>

          <div>
            <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200">
              Important 2027 Syllabus Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              {civics2027Info.verificationNote}
            </p>

            <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
              Subject-specific 2027 ALP deletion verification is pending.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Class 9 Civics Chapters
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Chapter titles from the BISE Lahore 2025–2027 syllabus
            reference. These titles are not a confirmation that every
            chapter or topic is included in the 2027 examination.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {civicsChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-extrabold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
                    Chapter {chapter.number}
                  </p>

                  <h3 className="mt-1 text-lg font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Textbook chapter title · 2027 exam topics awaiting
                    official verification
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          No subject-specific Civics Annual Examination 2027 deletion
          list has been independently verified. Deleted chapters,
          topics and exercise questions will not be assumed or invented.
          The 2026 ALP list will not be treated as the 2027 list.
        </p>

        <div className="mt-4 rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
          <p className="font-bold text-amber-800 dark:text-amber-300">
            Status: 2027 ALP verification pending
          </p>
        </div>
      </section>

      <footer className="rounded-2xl bg-slate-100 p-5 text-sm leading-7 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <p>
          <strong>Board:</strong> {civics2027Info.source.board}
        </p>

        <p>
          <strong>Document:</strong> {civics2027Info.source.document}
        </p>

        <p>
          <strong>Academic Session:</strong>{" "}
          {civics2027Info.source.academicSession}
        </p>

        <a
          href={civics2027Info.source.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
        >
          Open BISE Lahore Syllabus PDF
        </a>

        <p className="mt-4">
          Pakistan Learning Academy · Class 9 Civics
        </p>
      </footer>
    </main>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-blue-950/30 p-4">
      <p className="text-xs text-blue-100">{label}</p>
      <p className="mt-1 text-xl font-extrabold">{value}</p>
    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-bold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
