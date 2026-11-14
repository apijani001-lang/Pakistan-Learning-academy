
import {
  economics2027Info,
  economicsChapters2027,
} from "@/data/class9-economics-2027";

export default function Economics2027Library() {
  return (
    <main className="my-8 space-y-7">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white shadow-xl sm:p-9">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
          Class 9 · Humanities / Arts Group
        </span>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          Economics
        </h1>

        <p className="mt-2 text-xl text-emerald-100" dir="rtl">
          معاشیات
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50">
          Class 9 Economics learning library for academic session
          2026–27 and Annual Examination 2027.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-emerald-900 transition hover:bg-emerald-50"
        >
          View BISE Lahore Syllabus
        </a>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Total Marks" value={economics2027Info.totalMarks} />
        <Stat label="Chapters" value={economics2027Info.totalChapters} />
        <Stat label="Paper Duration" value={economics2027Info.duration} />
        <Stat label="Exam Year" value="2027" />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Academic Session" value={economics2027Info.session} />
        <InfoCard title="Textbook" value={economics2027Info.textbook} />
        <InfoCard title="Edition" value={economics2027Info.textbookEdition} />
        <InfoCard title="Medium" value={economics2027Info.medium.join(" / ")} />
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200">
          Important 2027 Syllabus Verification Notice
        </h2>

        <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {economics2027Info.verificationNote}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          No unverified Economics chapter or topic has been marked deleted.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Class 9 Economics — Complete Chapter List
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          The following seven chapter titles are taken from the
          BISE Lahore Class IX Part-I syllabus reference.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {economicsChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-extrabold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                    Chapter {chapter.number}
                  </p>

                  <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    Class IX · Part I
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-4 space-y-3">
          <InfoRow label="Subject" value={economics2027Info.subject} />
          <InfoRow label="Class" value="9" />
          <InfoRow label="Group" value="Humanities / Arts" />
          <InfoRow label="Academic Session" value={economics2027Info.session} />
          <InfoRow label="Annual Examination" value="2027" />
          <InfoRow label="Total Marks" value={String(economics2027Info.totalMarks)} />
          <InfoRow label="Duration" value={economics2027Info.duration} />
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="font-bold text-blue-900 dark:text-blue-200">
          Smart Syllabus / ALP Status
        </h2>

        <p className="mt-2 text-sm leading-7 text-blue-900 dark:text-blue-100">
          Economics is not among the seven subjects listed in
          PECTAA Notification 1238. No subject-specific Economics
          2027 deletion list has been independently verified.
          Therefore, no topics or exercises are being removed
          based on assumptions.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          Status: No verified 2027 Economics deletion list applied
        </p>
      </section>

      <footer className="rounded-2xl bg-slate-100 p-5 text-sm leading-7 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <p>
          <strong>Board:</strong> {economics2027Info.source.board}
        </p>
        <p>
          <strong>Document:</strong> {economics2027Info.source.document}
        </p>
        <p>
          <strong>Academic Session:</strong>{" "}
          {economics2027Info.source.academicSession}
        </p>
        <p className="mt-3">
          Always follow the latest official board notification for
          examination instructions and syllabus changes.
        </p>
        <p className="mt-3 font-semibold">
          Pakistan Learning Academy · Economics · Class 9
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
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
      <p className="text-xs text-emerald-100">{label}</p>
      <p className="mt-2 text-xl font-extrabold">{value}</p>
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
