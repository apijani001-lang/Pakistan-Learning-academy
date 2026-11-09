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
  return (
    <main className="space-y-8">
      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-amber-600 to-rose-600 p-6 text-white shadow-xl sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium">
            Class 9 · Academic Session 2026–27
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Food and Nutrition
          </h1>

          <p className="mt-3 text-lg text-orange-50">
            Class 9 Food and Nutrition learning library for students of the
            Arts Group.
          </p>

          <p className="mt-2 text-base text-orange-100">
            {foodNutrition2027Info.subjectUrdu}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {bookUrl ? (
              <a
                href={bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-orange-800 transition hover:bg-orange-50"
              >
                Open Textbook
              </a>
            ) : (
              <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
                Textbook PDF link will be added after verification
              </span>
            )}

            <a
              href={foodNutrition2027Info.sources.officialPECTAA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              PECTAA Official Books
            </a>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          label="Class"
          value="9th"
          detail="Arts / Elective"
        />

        <SummaryCard
          label="Academic Session"
          value="2026–27"
          detail="Annual Exam 2027"
        />

        <SummaryCard
          label="Listed Chapters"
          value={String(foodNutrition2027Info.totalChapters)}
          detail="Provisional sequence"
        />

        <SummaryCard
          label="Verified Deletions"
          value={String(foodNutrition2027Deletions.length)}
          detail="No confirmed exclusions"
        />
      </section>

      {/* Verification Notice */}
      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Important Textbook Verification Notice
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              PECTAA's official catalogue lists Food and Nutrition for Class
              IX. However, the original textbook PDF has not yet been
              visually checked. The chapter titles and chapter count shown
              below are provisional and must not be treated as an officially
              verified textbook contents page.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Library */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Food and Nutrition Chapters
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            The following chapter sequence is provisional. Detailed topics
            and textbook page references will be added after official PDF
            verification.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {foodNutritionChapters2027.map((chapter) => {
            const deletion = foodNutrition2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg font-extrabold text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                    {chapter.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                      Chapter {chapter.number}
                    </p>

                    <h3 className="mt-1 font-bold leading-6 text-slate-900 dark:text-white">
                      {chapter.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {chapter.titleUrdu}
                    </p>
                  </div>
                </div>

                {chapter.topics.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        • {topic}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-lg bg-slate-50 px-3 py-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Chapter topics and page references are pending
                    verification from the original textbook.
                  </p>
                )}

                {deletion?.examNote && (
                  <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    {deletion.examNote}
                  </p>
                )}

                <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    No verified deletion recorded
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Examination Information */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <InfoRow
            label="Subject"
            value={foodNutrition2027Info.subject}
          />

          <InfoRow label="Class" value="9" />

          <InfoRow
            label="Academic Session"
            value={foodNutrition2027Info.session}
          />

          <InfoRow
            label="Examination"
            value={foodNutrition2027Info.examination}
          />

          <InfoRow
            label="Total Marks"
            value="Pending official verification"
          />

          <InfoRow
            label="Exam Duration"
            value="Pending official verification"
          />

          <InfoRow
            label="Textbook Authority"
            value={foodNutrition2027Info.textbookAuthority}
          />

          <InfoRow
            label="Medium"
            value={foodNutrition2027Info.medium}
          />
        </div>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {foodNutrition2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          Status: {foodNutrition2027DeletionSummary.status}
        </p>
      </section>

      {/* Official Sources */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-900 dark:bg-orange-950/30">
        <h2 className="font-bold text-orange-900 dark:text-orange-200">
          Official Curriculum Sources
        </h2>

        <p className="mt-2 text-sm leading-6 text-orange-900 dark:text-orange-100">
          Check PECTAA's official book catalogue and curriculum updates for
          the latest textbook and examination information.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={foodNutrition2027Info.sources.officialPECTAA}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-800 underline underline-offset-4 dark:text-orange-300"
          >
            PECTAA Books and Publications
          </a>

          <a
            href={foodNutrition2027Info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-800 underline underline-offset-4 dark:text-orange-300"
          >
            PECTAA Curriculum and Compliance
          </a>
        </div>
      </section>

      <div className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Food and Nutrition · 2026–27
      </div>
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
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>

      <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {detail}
      </p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
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