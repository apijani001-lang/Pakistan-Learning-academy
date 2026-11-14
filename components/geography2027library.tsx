
import {
  geography2027Info,
  geographyChapters2027,
} from "@/data/class9-geography-2027";

type Geography2027LibraryProps = {
  bookUrl?: string;
};

export default function Geography2027Library({
  bookUrl,
}: Geography2027LibraryProps) {
  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-900 p-6 text-white shadow-xl sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">
            Arts Group
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">
            Annual Examination 2027
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          Geography
        </h1>

        <p className="mt-2 text-2xl font-bold text-emerald-100" dir="rtl">
          جغرافیہ
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-50">
          Class 9 Geography textbook chapter library and examination
          information for academic session 2026–27.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
          >
            Open Geography Textbook
          </a>
        )}
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Class IX Marks"
          value={String(geography2027Info.partOneMarks)}
        />
        <StatCard
          label="Class X Marks"
          value={String(geography2027Info.partTwoMarks)}
        />
        <StatCard
          label="Class IX Chapters"
          value={String(geographyChapters2027.length)}
        />
        <StatCard
          label="Paper Duration"
          value={geography2027Info.examDuration}
        />
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Class 9 Geography Chapters
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Five Class IX chapters listed in the BISE Lahore 2025–2027
            syllabus. These are textbook chapter headings; they are not
            a confirmation that every topic is examinable in 2027.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {geographyChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Chapter {chapter.number}
                  </p>

                  <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Class IX · Textbook chapter
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">⚠️</span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Annual Examination 2027 Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              {geography2027Info.note}
            </p>

            <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
              Subject-specific 2027 ALP deletion verification is pending.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Prescribed Textbook Information
        </h2>

        <div className="mt-5 space-y-4">
          <InfoRow
            label="Prescribed Book"
            value={geography2027Info.prescribedBook}
          />

          <InfoRow
            label="Authors"
            value={geography2027Info.authors.join(", ")}
          />

          <InfoRow
            label="Publisher"
            value={geography2027Info.publisher}
          />

          <InfoRow
            label="Medium"
            value={geography2027Info.medium}
          />

          <InfoRow
            label="Academic Session"
            value={geography2027Info.session}
          />

          <InfoRow
            label="Textbook Edition"
            value={geography2027Info.textbookEdition}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="font-bold text-slate-900 dark:text-white">
          Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          No Geography topic or chapter has been marked deleted without
          independent official verification. The subject-specific
          Annual Examination 2027 ALP list remains unverified.
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: Verification pending
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-900 dark:bg-teal-950/30">
        <h2 className="font-bold text-teal-900 dark:text-teal-200">
          Official Board References
        </h2>

        <p className="mt-2 text-sm leading-6 text-teal-900 dark:text-teal-100">
          Consult the official board syllabus and PECTAA textbook
          catalogue for academic information.
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href={geography2027Info.sources.biseLahore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href={geography2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Books Catalogue
          </a>

          <a
            href={geography2027Info.sources.curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-800 underline underline-offset-4 dark:text-teal-300"
          >
            PECTAA Curriculum
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Geography · Class 9 · 2026–27
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

      <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
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
