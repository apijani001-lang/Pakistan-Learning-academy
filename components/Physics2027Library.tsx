
import {
  physics2027Info,
  physicsChapters2027,
} from "@/data/class9-physics-2027";

type Physics2027LibraryProps = {
  bookUrl: string;
};

export default function Physics2027Library({
  bookUrl,
}: Physics2027LibraryProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Academic Session 2026–27
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              Physics — {physics2027Info.session}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {physics2027Info.examination}
            </p>
          </div>

          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Annual Examination 2027
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalChapters}
            </p>
            <p className="text-xs text-gray-500">Textbook Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-green-600">
              {physics2027Info.examinableChapters}
            </p>
            <p className="text-xs text-gray-500">Examinable Chapters</p>
          </div>

          <div className="rounded-xl bg-white p-3 dark:bg-gray-900">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Complete Physics Textbook
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Complete textbook reading ke liye official book open karein.
        </p>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Read Complete Physics Book ↗
        </a>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Examination Information
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.totalMarks}
            </p>
            <p className="text-xs text-gray-500">Total Marks</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {physics2027Info.paperDuration}
            </p>
            <p className="text-xs text-gray-500">Paper Duration</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Physics — 2026–27 Chapter List
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Annual Examination 2027 ke syllabus se mutaliq chapter headings.
          </p>
        </div>

        {physicsChapters2027.map((chapter) => (
          <article
            key={chapter.number}
            className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Chapter {chapter.number}
            </p>

            <h4 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
              {chapter.title}
            </h4>
          </article>
        ))}
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
        <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
          Smart Syllabus Policy — 2026–27
        </h3>

        <p className="mt-2 text-sm leading-6 text-emerald-900 dark:text-emerald-200">
          Is examination-preparation section mein deleted topics aur
          deleted exercise questions display nahi kiye jate.
          Students ko sirf verified examinable material ki preparation
          karni chahiye.
        </p>
      </div>
    </section>
  );
}
