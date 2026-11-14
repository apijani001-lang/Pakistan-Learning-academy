
import {
  parchaBafi2027Info,
  parchaBafiChapters2027,
} from "@/data/class9-parcha-bafi-2027";

import {
  parchaBafi2027Deletions,
  parchaBafi2027DeletionSummary,
} from "@/data/class9-parcha-bafi-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function ParchaBafi2027Library({
  bookUrl,
}: Props) {
  const info = parchaBafi2027Info;

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-950 via-purple-950 to-slate-950 p-6 text-white shadow-xl sm:p-9">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            ARTS GROUP
          </span>
          <span className="rounded-full bg-violet-300/20 px-3 py-1 text-xs font-bold text-violet-100">
            SESSION {info.session}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-violet-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-violet-100">
          Class 9 Parcha Bafi learning section for students
          studying textile and clothing concepts through
          the prescribed Arts Group subject.
        </p>

        {bookUrl ? (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-950 transition hover:bg-violet-50"
          >
            Open Complete Textbook ↗
          </a>
        ) : (
          <a
            href={info.sources.officialTextbookPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-950 transition hover:bg-violet-50"
          >
            Open PECTAA Textbook PDF ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Combined Marks", info.totalMarks],
            ["Class 9 Theory", info.partITheoryMarks],
            ["Class 9 Practical", info.partIPracticalMarks],
            ["Class 10 Part-II", info.partIITotalMarks],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-violet-700 dark:text-violet-300">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm leading-6 text-amber-900 dark:text-amber-200">
            Exact examination duration is not independently
            confirmed in the available subject data. It is
            intentionally not displayed as a confirmed figure.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Chapter Library
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          The exact Class IX chapter sequence and original
          textbook contents have not yet been independently
          verified. No unverified chapter titles or topics
          are being published.
        </p>

        {parchaBafiChapters2027.length > 0 ? (
          <div className="mt-5 space-y-3">
            {parchaBafiChapters2027.map((chapter) => (
              <article
                key={chapter.number}
                className="rounded-xl border border-gray-200 p-4 dark:border-gray-700"
              >
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Chapter {chapter.number}: {chapter.title}
                </h3>

                {chapter.titleUrdu && (
                  <p className="mt-2 text-lg text-gray-700 dark:text-gray-300" dir="rtl">
                    {chapter.titleUrdu}
                  </p>
                )}

                {chapter.topics.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {chapter.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-violet-300 bg-violet-50 p-6 text-center dark:border-violet-800 dark:bg-violet-950/20">
            <div className="text-3xl">📚</div>
            <h3 className="mt-3 font-bold text-gray-900 dark:text-white">
              Chapter details are awaiting verification
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Original textbook ke pages check hone ke baad
              exact chapter titles, topics aur sequence yahan
              add kiye jayenge.
            </p>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
        <h2 className="font-extrabold text-amber-950 dark:text-amber-200">
          2027 ALP / Deleted Topics Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {parchaBafi2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {parchaBafi2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries: {parchaBafi2027Deletions.length}
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Subject Information
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
          <p><strong>Subject:</strong> {info.subject}</p>
          <p><strong>Urdu Name:</strong> {info.subjectUrdu}</p>
          <p><strong>Class:</strong> {info.class}</p>
          <p><strong>Group:</strong> Arts</p>
          <p><strong>Academic Session:</strong> {info.session}</p>
          <p><strong>Examination:</strong> {info.examination}</p>
          <p><strong>Textbook Authority:</strong> {info.textbookAuthority}</p>
          <p><strong>Textbook Edition:</strong> {info.textbookEdition}</p>
          <p><strong>Medium:</strong> {info.medium.join(", ")}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h2 className="font-extrabold text-blue-950 dark:text-blue-200">
          Official Sources
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.officialTextbookPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            PECTAA Prescribed Textbook PDF ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            PECTAA Books Catalogue ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            PECTAA Curriculum & Compliance ↗
          </a>

          <a
            href={info.sources.syllabusReferenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline underline-offset-4 dark:text-blue-300"
          >
            BISE Lahore Syllabus 2025–2027 ↗
          </a>
        </div>
      </section>
    </main>
  );
}
