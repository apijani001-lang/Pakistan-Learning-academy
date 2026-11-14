
import {
  education2027Info,
  educationChapters2027,
} from "@/data/class9-education-2027";

export default function Education2027Library() {
  return (
    <main className="my-8 space-y-7">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-800 p-6 text-white shadow-xl sm:p-9">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
          Class 9 · Humanities / Arts Group
        </span>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          Education
        </h1>

        <p className="mt-2 text-xl text-purple-100" dir="rtl">
          تعلیم
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-50">
          Class 9 Education library for academic session 2026–27
          and Annual Examination 2027.
        </p>

        <a
          href={education2027Info.source.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-900 transition hover:bg-purple-50"
        >
          BISE Lahore Official Syllabus
        </a>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          label="Total Marks"
          value={String(education2027Info.totalMarks)}
        />
        <StatCard
          label="Listed Chapters"
          value={String(educationChapters2027.length)}
        />
        <StatCard
          label="Paper Duration"
          value={education2027Info.duration}
        />
        <StatCard
          label="Exam Year"
          value="2027"
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <InfoCard
          title="Academic Session"
          value={education2027Info.session}
        />
        <InfoCard
          title="Prescribed Book"
          value={education2027Info.textbook}
        />
        <InfoCard
          title="Textbook Edition"
          value={education2027Info.textbookEdition}
        />
        <InfoCard
          title="Medium"
          value={education2027Info.medium.join(", ")}
        />
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200">
          Syllabus Verification Notice
        </h2>

        <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {education2027Info.verificationNote}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          No unverified chapter or topic has been marked as deleted.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Class 9 Education — Chapter List
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Chapter titles from the BISE Lahore 2025–2027 syllabus
            reference. Detailed topics are not displayed as confirmed
            Annual Examination 2027 content until their status is verified.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {educationChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-extrabold text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-purple-700 dark:text-purple-400">
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

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="font-bold text-blue-900 dark:text-blue-200">
          Smart Syllabus / ALP Status
        </h2>

        <p className="mt-2 text-sm leading-7 text-blue-900 dark:text-blue-100">
          Education is not included in the seven subjects listed in
          PECTAA Notification 1238. No subject-specific Education
          Annual Examination 2027 deletion list has been independently
          verified. No chapters, topics or exercise questions have
          been removed based on assumptions.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          Status: No verified Education 2027 deletions applied
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="font-bold text-slate-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p>
            <strong>Board:</strong> {education2027Info.source.board}
          </p>
          <p>
            <strong>Document:</strong> {education2027Info.source.document}
          </p>
          <p>
            <strong>Academic Session:</strong>{" "}
            {education2027Info.source.academicSession}
          </p>
          <p>
            <strong>Prescribed Book:</strong>{" "}
            {education2027Info.source.prescribedBook}
          </p>
          <p>
            <strong>Authors:</strong> {education2027Info.source.authors}
          </p>
          <p>
            <strong>Publisher:</strong> {education2027Info.source.publisher}
          </p>
        </div>

        <a
          href={education2027Info.source.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-purple-700 underline underline-offset-4 dark:text-purple-300"
        >
          Open Official BISE Lahore Syllabus
        </a>
      </section>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Education · Class 9 · 2026–27
      </p>
    </main>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>
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
