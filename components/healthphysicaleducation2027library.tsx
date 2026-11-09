import {
  healthPhysicalEducation2027Info,
  healthPhysicalEducationChapters2027,
} from "@/data/class9-health-physical-education-2027";

import {
  healthPhysicalEducation2027Deletions,
  healthPhysicalEducation2027DeletionSummary,
} from "@/data/class9-health-physical-education-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function HealthPhysicalEducation2027Library({
  bookUrl,
}: Props) {
  return (
    <main className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-800 via-blue-800 to-indigo-900 p-6 text-white shadow-xl sm:p-10">
        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm">
          Class 9 · Arts Elective · Academic Session 2026–27
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Health &amp; Physical Education
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-sky-100">
          Explore health education, physical education and the
          theoretical and practical aspects of the subject.
        </p>

        <p className="mt-2 text-lg text-sky-100">
          {healthPhysicalEducation2027Info.subjectUrdu}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {bookUrl ? (
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-900 transition hover:bg-sky-50"
            >
              Open Textbook
            </a>
          ) : (
            <span className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm">
              Textbook PDF verification pending
            </span>
          )}

          <a
            href={healthPhysicalEducation2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
          >
            PECTAA Official Books
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SummaryCard
          label="Class"
          value="9th"
          detail="Arts Elective"
        />

        <SummaryCard
          label="Theory Marks"
          value={String(healthPhysicalEducation2027Info.theoryMarks)}
          detail="Written examination"
        />

        <SummaryCard
          label="Practical Marks"
          value={String(healthPhysicalEducation2027Info.practicalMarks)}
          detail="Practical assessment"
        />

        <SummaryCard
          label="Total Marks"
          value={String(healthPhysicalEducation2027Info.totalMarks)}
          detail="Part-I"
        />
      </section>

      {/* Verification notice */}
      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">
            ⚠️
          </span>

          <div>
            <h2 className="font-bold text-amber-900 dark:text-amber-200">
              Textbook and Chapter Verification Pending
            </h2>

            <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
              The BISE Lahore syllabus confirms Health &amp; Physical
              Education as a Humanities elective and provides the
              Part-I marks scheme. The original textbook chapter
              sequence has not yet been independently verified.
              Therefore, no guessed chapter titles or topics are
              displayed.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Library */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Class 9 Chapter Library
        </h2>

        {healthPhysicalEducationChapters2027.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {healthPhysicalEducationChapters2027.map((chapter) => (
              <article
                key={chapter.number}
                className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Chapter {chapter.number}
                </p>

                <h3 className="mt-2 font-bold text-slate-900 dark:text-white">
                  {chapter.title}
                </h3>

                {chapter.topics.length > 0 && (
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
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center dark:border-slate-600 dark:bg-slate-800/60">
            <div className="text-4xl" aria-hidden="true">
              📚
            </div>

            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              Official Chapter List Awaited
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              The chapter library will be populated after the
              original textbook contents are verified.
            </p>
          </div>
        )}
      </section>

      {/* Examination information */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Examination Information
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <InfoRow
            label="Subject"
            value={healthPhysicalEducation2027Info.subject}
          />

          <InfoRow label="Class" value="9" />

          <InfoRow
            label="Group"
            value="Arts / Humanities Elective"
          />

          <InfoRow
            label="Academic Session"
            value={healthPhysicalEducation2027Info.session}
          />

          <InfoRow
            label="Examination"
            value={healthPhysicalEducation2027Info.examination}
          />

          <InfoRow
            label="Theory Marks"
            value={String(healthPhysicalEducation2027Info.theoryMarks)}
          />

          <InfoRow
            label="Practical Marks"
            value={String(healthPhysicalEducation2027Info.practicalMarks)}
          />

          <InfoRow
            label="Total Marks"
            value={String(healthPhysicalEducation2027Info.totalMarks)}
          />

          <InfoRow
            label="Exam Duration"
            value="Pending independent verification"
          />

          <InfoRow
            label="Medium"
            value={healthPhysicalEducation2027Info.medium}
          />
        </div>
      </section>

      {/* ALP status */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2027 Smart Syllabus / ALP Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {healthPhysicalEducation2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
          {healthPhysicalEducation2027DeletionSummary.status}
        </p>
      </section>

      {/* Sources */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
        <h2 className="font-bold text-blue-900 dark:text-blue-200">
          Official Curriculum Sources
        </h2>

        <p className="mt-2 text-sm leading-6 text-blue-900 dark:text-blue-100">
          Consult the official board syllabus and PECTAA catalogue
          for textbook and examination updates.
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={healthPhysicalEducation2027Info.sources.biseLahore}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href={healthPhysicalEducation2027Info.sources.pectaa}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            PECTAA Books
          </a>

          <a
            href={healthPhysicalEducation2027Info.sources.curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            PECTAA Curriculum
          </a>
        </div>
      </section>

      <div className="text-center text-xs text-slate-500 dark:text-slate-400">
        Pakistan Learning Academy · Health &amp; Physical Education · 2026–27
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