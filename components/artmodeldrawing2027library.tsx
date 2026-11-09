
import {
  artModelDrawing2027Info,
  artModelDrawingChapters2027,
} from "@/data/class9-art-model-drawing-2027";

import {
  artModelDrawing2027Deletions,
} from "@/data/class9-art-model-drawing-2027-deletions";

export default function ArtModelDrawing2027Library() {
  const info = artModelDrawing2027Info;

  return (
    <section className="mt-8 space-y-6">
      <div className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            SESSION 2026–27
          </span>
          <span className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-semibold text-amber-200">
            Verification Pending
          </span>
        </div>

        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Art & Model Drawing
        </h2>

        <p className="mt-2 text-sm text-purple-100">
          آرٹ اینڈ ماڈل ڈرائنگ
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-100">
          Explore the Class 9 Art and Model Drawing textbook,
          including drawing, sketching, painting, graphic design,
          architecture, calligraphy and textile crafts.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs text-purple-200">Textbook Edition</p>
            <p className="mt-1 font-bold">{info.textbook.edition}</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-xs text-purple-200">Total Chapters</p>
            <p className="mt-1 font-bold">
              {info.textbook.totalChapters}
            </p>
          </div>

          <div className="col-span-2 rounded-2xl bg-white/10 p-4 sm:col-span-1">
            <p className="text-xs text-purple-200">Medium</p>
            <p className="mt-1 font-bold">
              {info.textbook.medium}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
        <h3 className="font-bold text-amber-900 dark:text-amber-200">
          Important Examination Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-800 dark:text-amber-100">
          {info.examination.note}
        </p>

        <p className="mt-2 text-sm leading-7 text-amber-800 dark:text-amber-100">
          {artModelDrawing2027Deletions.verification.note}
        </p>
      </div>

      <div>
        <div className="mb-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Textbook Chapters
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Class 9 English Medium — {info.textbook.edition}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {artModelDrawingChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-extrabold text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                  {chapter.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold leading-6 text-slate-900 dark:text-white">
                    {chapter.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {chapter.titleUrdu}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {chapter.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Textbook chapter
                </span>

                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                  Exam status not verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="font-bold text-slate-900 dark:text-white">
          Syllabus Verification
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• Textbook chapter list: secondary-source cross-check.</li>
          <li>• Original official PDF visual verification: pending.</li>
          <li>• 2027 examination marks and duration: not confirmed.</li>
          <li>• Subject-specific ALP deletions: not confirmed.</li>
        </ul>

        <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
          Notification reference: {info.notification.number},
          dated {info.notification.date}.
        </p>
      </div>
    </section>
  );
}
