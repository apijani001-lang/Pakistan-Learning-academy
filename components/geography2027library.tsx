import {
  geography2027Info,
  geographyChapters2027,
} from "@/data/class9-geography-2027";

import {
  geography2027Deletions,
  geography2027DeletionSummary,
} from "@/data/class9-geography-2027-deletions";

type Geography2027LibraryProps = {
  bookUrl?: string;
};

export default function Geography2027Library({
  bookUrl,
}: Geography2027LibraryProps) {
  const chapters = geographyChapters2027 as Array<
    Record<string, unknown>
  >;

  const getChapterTitle = (
    chapter: Record<string, unknown>,
    index: number
  ) => {
    return String(
      chapter.title ??
        chapter.name ??
        chapter.chapterTitle ??
        `Chapter ${index + 1}`
    );
  };

  const getTopics = (chapter: Record<string, unknown>) => {
    const possibleTopics =
      chapter.topics ??
      chapter.contents ??
      chapter.subtopics;

    return Array.isArray(possibleTopics)
      ? possibleTopics
      : [];
  };

  return (
    <div className="space-y-8">

      {/* Subject Information */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Class 9 · Arts Group
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              Geography
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              جغرافیہ · Annual Examination 2027
            </p>
          </div>

          <div className="rounded-2xl bg-violet-50 px-5 py-4 text-center dark:bg-violet-950/40">
            <p className="text-2xl font-extrabold text-violet-700 dark:text-violet-300">
              75
            </p>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Part-I Marks
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              label: "Class IX Chapters",
              value: "5",
            },
            {
              label: "Part-I Marks",
              value: "75",
            },
            {
              label: "Part-II Marks",
              value: "75",
            },
            {
              label: "Paper Duration",
              value: "2h 30m",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
            >
              <p className="text-xl font-bold text-slate-900 dark:text-white">
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
            <strong>Prescribed Book:</strong>{" "}
            Geography for Class IX-X
          </p>

          <p>
            <strong>Authors:</strong>{" "}
            Sajjad Hussain Sajjad, Kashif Shafique and Sohail Ahmad Majuka
          </p>

          <p>
            <strong>Publisher:</strong> Azad Book Depot, Lahore
          </p>

          <p>
            <strong>Academic Session:</strong> 2026-2027
          </p>
        </div>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Open Geography Textbook
          </a>
        )}
      </section>

      {/* Chapters */}
      <section>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Class 9 Geography Chapters
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Class IX ke syllabus mein shamil 5 chapters.
            Class X ke chapters yahan include nahi kiye gaye.
          </p>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, index) => {
            const topics = getTopics(chapter);

            return (
              <article
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg font-extrabold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {getChapterTitle(chapter, index)}
                    </h4>

                    <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">
                      Class IX · Syllabus chapter
                    </p>
                  </div>
                </div>

                {topics.length > 0 && (
                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <h5 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Topics
                    </h5>

                    <ul className="space-y-2">
                      {topics.map((topic, topicIndex) => {
                        const topicText =
                          typeof topic === "string"
                            ? topic
                            : typeof topic === "object" &&
                                topic !== null
                              ? String(
                                  (topic as Record<string, unknown>)
                                    .title ??
                                    (topic as Record<string, unknown>)
                                      .name ??
                                    ""
                                )
                              : String(topic);

                        return (
                          <li
                            key={topicIndex}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-1 text-violet-500">
                              •
                            </span>
                            <span>{topicText}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ALP / Deletion Status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <span className="text-xl">⚠️</span>

          <div>
            <h3 className="font-bold text-amber-900 dark:text-amber-300">
              2027 ALP / Deleted Topics Verification
            </h3>

            <p className="mt-2 text-sm leading-6 text-amber-900/80 dark:text-amber-200/80">
              {geography2027DeletionSummary.note}
            </p>

            <p className="mt-3 text-sm font-semibold text-amber-800 dark:text-amber-300">
              No Geography topic has been marked deleted without
              independent official verification.
            </p>

            <p className="mt-2 text-xs text-amber-800/70 dark:text-amber-300/70">
              Recorded deletion entries:{" "}
              {geography2027Deletions.length}
            </p>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/60 dark:bg-blue-950/20">
        <h3 className="font-bold text-blue-900 dark:text-blue-300">
          Academic Information & Verification
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-900/80 dark:text-blue-200/80">
          Chapter sequence and Class IX syllabus information
          are based on the BISE Lahore 2025-2027 syllabus.
          Original textbook PDF visual verification is still
          pending. Please consult the latest official board
          instructions before final examination preparation.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            BISE Lahore Syllabus
          </a>

          <a
            href="https://pectaa.edu.pk/books-and-publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline dark:text-blue-300"
          >
            PECTAA Books Catalogue
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        {String(geography2027Info.session)} · Pakistan Learning Academy
      </p>
    </div>
  );
}