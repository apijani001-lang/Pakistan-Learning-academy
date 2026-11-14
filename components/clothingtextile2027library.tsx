
import {
  clothingTextile2027Info,
  clothingTextileChapters2027,
  clothingTextile2027PracticalList,
} from "@/data/class9-clothing-textile-2027";

import {
  clothingTextile2027DeletionSummary,
} from "@/data/class9-clothing-textile-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function ClothingTextile2027Library({
  bookUrl,
}: Props) {
  const info = clothingTextile2027Info;

  const class9Chapters = clothingTextileChapters2027.filter(
    (chapter) => chapter.class === 9
  );

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-950 via-purple-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            SESSION {info.academicSession}
          </span>
          <span className="rounded-full bg-purple-300/20 px-3 py-1 text-xs font-bold text-purple-100">
            ARTS / HUMANITIES
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-pink-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-pink-100">
          Class 9 Clothing and Textile learning library covering
          fabric knowledge, textile design, clothing selection,
          weaving and related subject areas.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-pink-950 transition hover:bg-pink-50"
          >
            Open Complete Textbook ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Theory Marks",
              value: `${info.partITheoryMarks}`,
            },
            {
              label: "Theory Duration",
              value: info.partI.duration,
            },
            {
              label: "Practical Marks",
              value: `${info.practicalMarks}`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs leading-6 text-gray-500 dark:text-gray-400">
          Theory marks and duration are listed in the BISE Lahore
          2025–2027 syllabus. Practical marks belong to the
          combined subject scheme.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Textbook Chapters
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Seven Class IX chapters are listed in the board
            syllabus. Unclear chapter titles are kept as
            verification-pending rather than guessed.
          </p>
        </div>

        <div className="space-y-4">
          {class9Chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 font-extrabold text-pink-800 dark:bg-pink-900/40 dark:text-pink-200">
                  {chapter.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  <p
                    className="mt-2 text-lg leading-8 text-gray-700 dark:text-gray-300"
                    dir="rtl"
                  >
                    {chapter.titleUrdu}
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                    Original title verification pending
                  </span>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {chapter.verificationNote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-green-200 bg-green-50/60 p-5 dark:border-green-900/50 dark:bg-green-950/20">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Practical Examination
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
          The following activities are recorded in the combined
          syllabus reference:
        </p>

        <ul className="mt-4 space-y-3">
          {clothingTextile2027PracticalList.map((activity, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-900 dark:bg-green-900 dark:text-green-200">
                {index + 1}
              </span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Practical scheme: {info.practical.marks} marks,
          duration {info.practical.duration}.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          Smart Syllabus Verification
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {clothingTextile2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {clothingTextile2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          No chapter, textile topic, clothing topic or practical
          activity has been marked deleted. Original textbook
          visual verification and subject-specific 2027 ALP
          confirmation are pending.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="font-extrabold text-gray-900 dark:text-white">
          Textbook Information
        </h2>

        <div className="mt-4 grid gap-3 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
          <p><strong>Subject:</strong> {info.subject}</p>
          <p><strong>Class:</strong> {info.class}</p>
          <p><strong>Group:</strong> {info.group}</p>
          <p><strong>Session:</strong> {info.academicSession}</p>
          <p><strong>Textbook:</strong> {info.textbookTitle}</p>
          <p><strong>Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Publisher:</strong> {info.publisher}</p>
          <p><strong>Medium:</strong> {info.medium}</p>
          <p><strong>Class 9 Chapters:</strong> {info.class9Chapters}</p>
          <p><strong>Class 10 Chapters:</strong> {info.class10Chapters}</p>
        </div>

        <a
          href={info.sources.boardSyllabus}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-pink-700 underline underline-offset-4 dark:text-pink-300"
        >
          View BISE Lahore Board Syllabus ↗
        </a>

        <a
          href={info.sources.officialBooks}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block font-bold text-pink-700 underline underline-offset-4 dark:text-pink-300"
        >
          PECTAA Official Books and Publications ↗
        </a>
      </section>
    </main>
  );
}
