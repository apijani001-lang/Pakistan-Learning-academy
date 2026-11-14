
import {
  historyPakistan2027Info,
  historyPakistanChapters2027,
} from "@/data/class9-history-of-pakistan-2027";

type HistoryPakistan2027LibraryProps = {
  bookUrl?: string;
};

export default function HistoryPakistan2027Library({
  bookUrl,
}: HistoryPakistan2027LibraryProps) {
  const class9Chapters = historyPakistanChapters2027.filter(
    (chapter) => chapter.class === 9
  );

  const class10Chapters = historyPakistanChapters2027.filter(
    (chapter) => chapter.class === 10
  );

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 via-orange-800 to-rose-900 p-6 text-white shadow-xl sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">
            Academic Session 2026–27
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          History of Pakistan
        </h1>

        <p className="mt-2 text-2xl font-bold" dir="rtl">
          تاریخِ پاکستان
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-orange-100">
          Class 9 History of Pakistan textbook chapters, examination
          information and syllabus guidance for Annual Examination 2027.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-amber-900 transition hover:bg-orange-50"
            >
              Open Textbook
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Textbook link will be added after verification
            </span>
          )}

          <a
            href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/40 px-5 py-3 text-sm font-bold transition hover:bg-white/10"
          >
            Official Board Syllabus
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          label="Class IX Marks"
          value={String(historyPakistan2027Info.partI.totalMarks)}
          detail="Class 9 examination"
        />

        <SummaryCard
          label="Exam Duration"
          value={historyPakistan2027Info.partI.duration}
          detail="Board examination"
        />

        <SummaryCard
          label="Class 9 Chapters"
          value={String(class9Chapters.length)}
          detail="Part-I"
        />

        <SummaryCard
          label="Combined Book"
          value={String(historyPakistan2027Info.totalChapters)}
          detail="Classes 9 and 10"
        />
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Class 9 Complete Chapter List
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Part-I chapter sequence from the BISE Lahore 2025–2027
            syllabus. These are textbook chapter titles, not a separately
            verified list of 2027 examinable topics.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {class9Chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-extrabold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Chapter {chapter.number}
                  </p>

                  <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p
                    className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300"
                    dir="rtl"
                  >
                    {chapter.titleUrdu}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Class IX · Part-I
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="text-lg font-bold text-blue-900 dark:text-blue-200">
          Class 10 Chapters — Reference Only
        </h2>

        <p className="mt-2 text-sm leading-7 text-blue-900 dark:text-blue-100">
          The combined textbook also contains a separate Part-II for
          Class 10. These chapters are not included in the Class 9
          chapter list above.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          {class10Chapters.length} chapters belong to Class 10.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">⚠️</span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Annual Examination 2027 Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The BISE Lahore 2025–2027 syllabus provides the Class IX
              chapter sequence and examination scheme. However, a
              subject-specific Annual Examination 2027 ALP deletion
              notification has not been independently verified.
              Therefore, no chapter, historical event, personality,
              date or topic is being labelled deleted or excluded.
            </p>

            <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
              Status: Subject-specific 2027 ALP verification pending
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
            label="Book"
            value={historyPakistan2027Info.textbookTitle}
          />

          <InfoRow
            label="Urdu Title"
            value={historyPakistan2027Info.textbookUrduTitle}
          />

          <InfoRow
            label="Authors"
            value={historyPakistan2027Info.authors.join(", ")}
          />

          <InfoRow
            label="Publisher"
            value={historyPakistan2027Info.publisher}
          />

          <InfoRow
            label="Medium"
            value={historyPakistan2027Info.medium}
          />

          <InfoRow
            label="Academic Session"
            value={historyPakistan2027Info.academicSession}
          />

          <InfoRow
            label="Edition"
            value={historyPakistan2027Info.textbookEdition}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="font-bold text-slate-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Chapter sequence and Class IX examination scheme are based
          on the BISE Lahore 2025–2027 syllabus. Original textbook
          page-by-page visual verification and subject-specific 2027
          ALP verification remain pending.
        </p>

        <a
          href={historyPakistan2027Info.sources.boardSyllabus}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-amber-700 underline underline-offset-4 dark:text-amber-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · History of Pakistan · Class 9
      </p>
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
