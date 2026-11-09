import {
  parchaBafi2027Info,
  parchaBafiChapters2027,
} from "@/data/class9-parcha-bafi-2027";

import {
  parchaBafi2027Deletions,
  parchaBafi2027DeletionSummary,
} from "@/data/class9-parcha-bafi-2027-deletions";

type ParchaBafi2027LibraryProps = {
  bookUrl?: string;
};

export default function ParchaBafi2027Library({
  bookUrl,
}: ParchaBafi2027LibraryProps) {
  const info = parchaBafi2027Info;
  const chapters = parchaBafiChapters2027;

  return (
    <div className="space-y-8">

      {/* Subject information */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
              Class 9 · Arts Group
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              Clothing &amp; Textile
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Parcha Bafi · پارچہ بافی
            </p>
          </div>

          <div className="rounded-2xl bg-violet-50 px-5 py-4 text-center dark:bg-violet-950/40">
            <p className="text-2xl font-extrabold text-violet-700 dark:text-violet-300">
              150
            </p>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Combined Marks
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            {
              label: "Part-I Theory",
              value: "60",
            },
            {
              label: "Part-I Practical",
              value: "30",
            },
            {
              label: "Part-II",
              value: "60",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
            >
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <strong>Subject:</strong> {info.subject}
          </p>

          <p>
            <strong>Academic Session:</strong> {info.session}
          </p>

          <p>
            <strong>Examination:</strong> {info.examination}
          </p>

          <p>
            <strong>Textbook Authority:</strong>{" "}
            {info.textbookAuthority}
          </p>

          <p>
            <strong>Textbook Edition:</strong>{" "}
            {info.textbookEdition}
          </p>
        </div>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Open Textbook
          </a>
        )}
      </section>

      {/* Chapter library */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Class 9 Chapter Library
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Original textbook ki chapter-wise visual verification
          abhi pending hai. Is liye unverified chapter names ya
          topics display nahi kiye ja rahe.
        </p>

        {chapters.length > 0 ? (
          <div className="mt-5 space-y-3">
            {chapters.map((chapter) => (
              <article
                key={chapter.number}
                className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Chapter {chapter.number}: {chapter.title}
                </h4>

                {chapter.titleUrdu && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {chapter.titleUrdu}
                  </p>
                )}

                {chapter.topics.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {chapter.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <div className="text-3xl">📚</div>

            <h4 className="mt-3 font-semibold text-slate-800 dark:text-white">
              Chapter details are being verified
            </h4>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
              Class IX ke exact chapter titles, sequence aur
              textbook topics official textbook se verify
              hone ke baad yahan add kiye jayenge.
            </p>
          </div>
        )}
      </section>

      {/* ALP status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
        <h3 className="font-bold text-amber-900 dark:text-amber-300">
          2027 ALP / Deleted Topics Status
        </h3>

        <p className="mt-3 text-sm leading-6 text-amber-900/80 dark:text-amber-200/80">
          {parchaBafi2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
          Verified deletion entries:{" "}
          {parchaBafi2027Deletions.length}
        </p>
      </section>

      {/* Verification information */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/60 dark:bg-blue-950/20">
        <h3 className="font-bold text-blue-900 dark:text-blue-300">
          Sources &amp; Verification
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-900/80 dark:text-blue-200/80">
          Subject listing PECTAA catalogue se aur examination
          scheme BISE Lahore ke 2025–2027 syllabus reference
          se li gayi hai. Original textbook aur detailed
          chapter-wise content ki verification pending hai.
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="https://pectaa.edu.pk/books-and-publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            PECTAA Books Catalogue
          </a>

          <a
            href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            BISE Lahore Syllabus
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        Pakistan Learning Academy · Session 2026-27
      </p>
    </div>
  );
}