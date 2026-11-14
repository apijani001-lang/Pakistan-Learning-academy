
import {
  artModelDrawing2027Info,
  artModelDrawingChapters2027,
} from "@/data/class9-art-model-drawing-2027";

import {
  artModelDrawing2027Deletions,
} from "@/data/class9-art-model-drawing-2027-deletions";

export default function ArtModelDrawing2027Library() {
  const info = artModelDrawing2027Info;
  const textbook = info.textbook;
  const examination = info.examination;

  return (
    <main className="mt-8 space-y-8">
      <section className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            SESSION {info.academicSession}
          </span>
          <span className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-bold text-amber-200">
            Verification Pending
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-2xl font-bold text-purple-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-100">
          Class 9 Art and Model Drawing textbook learning library.
          Explore drawing, sketching, painting, graphic design,
          architecture, calligraphy and textile crafts.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs text-purple-200">Textbook Chapters</p>
            <p className="mt-1 text-2xl font-extrabold">
              {textbook.totalChapters}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs text-purple-200">Edition</p>
            <p className="mt-1 font-bold">{textbook.edition}</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-white/10 p-4 sm:col-span-1">
            <p className="text-xs text-purple-200">Medium</p>
            <p className="mt-1 font-bold">{textbook.medium}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          Annual Examination 2027 — Verification Notice
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {examination.note}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {artModelDrawing2027Deletions.verification.note}
        </p>

        <span className="mt-4 inline-flex rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">
          Exam Status: Not Verified
        </span>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Complete Textbook Chapters
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Textbook chapter listing for Class 9. These chapters
            are not individually confirmed for Annual Examination 2027.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {artModelDrawingChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-extrabold text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400" dir="rtl">
                    {chapter.titleUrdu}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {chapter.description}
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                  Examination status not verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
          Textbook and Examination Details
        </h2>

        <div className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
          <p>
            <strong>Subject:</strong> {info.subject}
          </p>
          <p>
            <strong>Class:</strong> {info.class}
          </p>
          <p>
            <strong>Academic Session:</strong> {info.academicSession}
          </p>
          <p>
            <strong>Annual Examination:</strong> {info.annualExamination}
          </p>
          <p>
            <strong>Textbook:</strong> {textbook.title}
          </p>
          <p>
            <strong>Edition:</strong> {textbook.edition}
          </p>
          <p>
            <strong>Medium:</strong> {textbook.medium}
          </p>
          <p>
            <strong>Examination Marks:</strong> Not verified
          </p>
          <p>
            <strong>Examination Duration:</strong> Not verified
          </p>
          <p>
            <strong>ALP Deletions:</strong> Not confirmed
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            Notification Reference
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {info.notification.number}, dated {info.notification.date}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {info.notification.applicability}
          </p>
        </div>

        <a
          href="https://pectaa.edu.pk/books-and-publications/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-purple-700 underline underline-offset-4 dark:text-purple-300"
        >
          PECTAA Official Books and Publications ↗
        </a>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="font-bold text-amber-950 dark:text-amber-200">
          Source Verification
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {info.verificationNote}
        </p>
      </section>
    </main>
  );
}
