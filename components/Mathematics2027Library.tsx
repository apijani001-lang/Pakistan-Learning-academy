
import {
  mathematicsChapters2027,
  mathematics2027Info,
} from "@/data/class9-mathematics-2027";

import { mathematics2027Deletions } from "@/data/class9-mathematics-2027-deletions";

type Props = {
  bookUrl: string;
};

export default function Mathematics2027Library({ bookUrl }: Props) {
  const fullExcluded = mathematicsChapters2027.filter(
    (chapter) => chapter.examStatus === "fully-excluded"
  ).length;

  const reducedUnits = mathematicsChapters2027.length - fullExcluded;

  return (
    <section className="mt-12">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Mathematics 9 · {mathematics2027Info.session}
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Mathematics Chapter Library
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Current textbook units, deleted topics and examination
          preparation information for Annual Examination 2027.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          PECTAA Notification: {mathematics2027Info.notification}
          {" · "}
          {mathematics2027Info.notificationDate}
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-3xl font-black text-emerald-800">
            {mathematics2027Info.totalUnits}
          </p>
          <p className="mt-1 text-sm font-semibold text-emerald-900">
            Total textbook units
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-3xl font-black text-blue-800">
            {reducedUnits}
          </p>
          <p className="mt-1 text-sm font-semibold text-blue-900">
            Units with selected deletions
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-3xl font-black text-amber-800">
            {fullExcluded}
          </p>
          <p className="mt-1 text-sm font-semibold text-amber-900">
            Completely excluded unit
          </p>
        </div>
      </div>

      <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="font-bold text-emerald-950">
          Read the complete Mathematics textbook
        </h3>

        <p className="mt-2 text-sm leading-7 text-emerald-900">
          Textbook ke tamam units aur learning content ke liye
          original book open karein. Deleted topics textbook mein
          phir bhi parhne ke liye available rehte hain.
        </p>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
        >
          Read Complete Mathematics Book ↗
        </a>
      </div>

      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-bold text-amber-950">
          Important examination information
        </h3>
        <p className="mt-2 text-sm leading-7 text-amber-900">
          Logic poora unit Annual Examination 2027 se excluded hai.
          Baqi units mein sirf notification mein listed topics,
          examples aur questions excluded hain. Baqi syllabus
          examination preparation ka hissa hai.
        </p>
      </div>

      <div className="grid gap-5">
        {mathematicsChapters2027.map((chapter) => {
          const deletion = mathematics2027Deletions.find(
            (item) => item.unit === chapter.number
          );

          const isFullyExcluded =
            chapter.examStatus === "fully-excluded";

          return (
            <article
              key={chapter.number}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                isFullyExcluded
                  ? "border-amber-300"
                  : "border-slate-200"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-black text-emerald-800">
                    {String(chapter.number).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Unit {chapter.number}
                    </p>

                    <h3 className="mt-1 text-lg font-black text-slate-900">
                      {chapter.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    isFullyExcluded
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {isFullyExcluded
                    ? "Completely Excluded"
                    : "Included with Deletions"}
                </span>
              </div>

              {isFullyExcluded ? (
                <div className="mt-5 rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-bold text-amber-900">
                    Complete unit excluded from Annual Examination 2027.
                  </p>
                </div>
              ) : (
                <div className="mt-5">
                  <h4 className="text-sm font-bold text-slate-800">
                    Deleted topics and questions
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {(deletion?.excluded ?? []).map((item, index) => (
                      <li
                        key={`${chapter.number}-${index}`}
                        className="flex gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 font-bold text-amber-600">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500">
                {chapter.examNote}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Official syllabus reference
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          PECTAA Grade 9 Smart Syllabus, ALP and examination
          notification for Academic Session 2026–27.
        </p>

        <a
          href={mathematics2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-bold text-emerald-700 hover:text-emerald-900"
        >
          Visit PECTAA Official Downloads ↗
        </a>
      </div>
    </section>
  );
}
