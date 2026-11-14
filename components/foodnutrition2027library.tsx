
import {
  foodNutrition2027Info,
  foodNutritionChapters2027,
} from "@/data/class9-food-nutrition-2027";

import {
  foodNutrition2027Deletions,
  foodNutrition2027DeletionSummary,
} from "@/data/class9-food-nutrition-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function FoodNutrition2027Library({ bookUrl }: Props) {
  const info = foodNutrition2027Info;

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-950 via-amber-900 to-rose-950 p-6 text-white shadow-xl sm:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
            SESSION {info.session}
          </span>
          <span className="rounded-full bg-orange-300/20 px-3 py-1 text-xs font-bold text-orange-100">
            ARTS / ELECTIVE
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-orange-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-orange-100">
          Class 9 Food and Nutrition learning library for
          students studying food, nutrients, balanced diets
          and food storage.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-bold text-orange-950 transition hover:bg-orange-50"
            >
              Open Complete Textbook ↗
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Textbook PDF link pending verification
            </span>
          )}

          <a
            href={info.sources.officialPECTAA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            PECTAA Official Books ↗
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Subject Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Class", "9"],
            ["Academic Session", info.session],
            ["Examination", info.examination],
            ["Listed Chapters", String(info.totalChapters)],
            ["Total Marks", "Not verified"],
            ["Paper Duration", "Not verified"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          Important Textbook Verification Notice
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {info.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-900 dark:text-amber-200">
          Chapter sequence and original textbook page references
          are pending visual verification.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Food and Nutrition Chapters
          </h2>

          <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400">
            The following five chapter titles are provisional
            listings. Detailed topics and page references will
            be added after checking the original textbook.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {foodNutritionChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg font-extrabold text-orange-800 dark:bg-orange-900/40 dark:text-orange-200">
                  {chapter.number}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-300">
                    Provisional Chapter {chapter.number}
                  </p>

                  <h3 className="mt-2 font-bold leading-6 text-gray-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p
                    className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300"
                    dir="rtl"
                  >
                    {chapter.titleUrdu}
                  </p>
                </div>
              </div>

              {chapter.topics.length > 0 ? (
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4 dark:border-gray-800">
                  {chapter.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="text-sm leading-6 text-gray-600 dark:text-gray-300"
                    >
                      • {topic}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 rounded-lg bg-gray-50 p-3 text-xs leading-6 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  Chapter topics and textbook page references
                  will be added after original PDF verification.
                </p>
              )}

              <div className="mt-4 border-t border-gray-100 pt-3 dark:border-gray-800">
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                  Textbook verification pending
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Textbook Details
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Subject:</strong> {info.subject}
          </p>
          <p>
            <strong>Urdu Name:</strong> {info.subjectUrdu}
          </p>
          <p>
            <strong>Class:</strong> {info.class}
          </p>
          <p>
            <strong>Group:</strong> Arts / Elective
          </p>
          <p>
            <strong>Textbook Authority:</strong> {info.textbookAuthority}
          </p>
          <p>
            <strong>Edition:</strong> {info.textbookEdition}
          </p>
          <p>
            <strong>Medium:</strong> {info.medium}
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {foodNutrition2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {foodNutrition2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries: {foodNutrition2027Deletions.length}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          No chapter, topic, exercise or question has been
          marked deleted without an independently verified
          official subject-specific notification.
        </p>
      </section>

      <section className="rounded-2xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-900 dark:bg-orange-950/30">
        <h2 className="font-extrabold text-orange-950 dark:text-orange-200">
          Official Curriculum Sources
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.officialPECTAA}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-800 underline underline-offset-4 dark:text-orange-300"
          >
            PECTAA Books and Publications ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-800 underline underline-offset-4 dark:text-orange-300"
          >
            PECTAA Curriculum and Compliance ↗
          </a>
        </div>
      </section>
    </main>
  );
}
