import {
  economics2027Info,
  economicsChapters2027,
} from "@/data/class9-economics-2027";

import {
  economics2027Deletions,
  economics2027DeletionSummary,
} from "@/data/class9-economics-2027-deletions";

export default function Economics2027Library() {
  return (
    <main className="my-8 space-y-6">
      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white shadow-lg sm:p-8">
        <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
          Class 9 · Humanities / Arts Group
        </div>

        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Economics
        </h2>

        <p className="mt-2 text-lg text-emerald-100">
          معاشیات
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50">
          Class 9 Economics syllabus for the 2026–27 academic session,
          based on the BISE Lahore 2025–2027 syllabus reference.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Total Marks" value={economics2027Info.totalMarks} />
          <Stat label="Chapters" value={economics2027Info.totalChapters} />
          <Stat label="Duration" value="2.5 Hours" />
          <Stat label="Exam Year" value="2027" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <InfoCard
          title="Academic Session"
          value={economics2027Info.session}
        />
        <InfoCard
          title="Textbook Edition"
          value={economics2027Info.textbookEdition}
        />
        <InfoCard
          title="Medium"
          value="English / Urdu"
        />
        <InfoCard
          title="Examination"
          value="Annual Examination 2027"
        />
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200">
          Important Syllabus Verification Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {economics2027Info.verificationNote}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-200">
          No unverified chapter or topic has been marked as deleted.
        </p>
      </section>

      <section>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Complete Chapter List
          </h3>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Class 9 Economics — Part I
          </p>
        </div>

        <div className="space-y-4">
          {economicsChapters2027.map((chapter) => {
            const deletion = economics2027Deletions.find(
              (item: any) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      {chapter.number}
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                        Chapter {chapter.number}
                      </p>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {chapter.title}
                      </h4>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Included in baseline
                  </span>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-300">
                    Topics
                  </h5>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-sm leading-6 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        <span className="mt-0.5 font-bold text-emerald-600">
                          ✓
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {deletion && (
                  <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                    {deletion.examNote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Deleted Topics Status
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {economics2027DeletionSummary.note}
        </p>

        <div className="mt-4 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <p className="font-bold text-emerald-800 dark:text-emerald-300">
            No verified Economics 2027 deletion list has been applied.
          </p>
        </div>
      </section>

      <footer className="rounded-2xl bg-gray-100 p-5 text-sm leading-7 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <p>
          <strong>Reference:</strong> {economics2027Info.source.board}
        </p>

        <p>
          <strong>Document:</strong> {economics2027Info.source.document}
        </p>

        <p>
          <strong>Academic Session:</strong>{" "}
          {economics2027Info.source.academicSession}
        </p>

        <p className="mt-3">
          This library presents the syllabus baseline. Always follow
          the latest official board notification for examination
          instructions and any future syllabus changes.
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
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <p className="mt-2 font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}