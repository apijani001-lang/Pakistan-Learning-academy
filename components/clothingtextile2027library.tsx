// components/clothingtextile2027library.tsx

import Link from "next/link";

import {
  clothingTextile2027Info,
  clothingTextileChapters2027,
  clothingTextile2027PracticalList,
} from "@/data/class9-clothing-textile-2027";

import {
  clothingTextile2027Deletions,
  clothingTextile2027DeletionSummary,
} from "@/data/class9-clothing-textile-2027-deletions";

type ClothingTextile2027LibraryProps = {
  bookUrl?: string;
};

export default function ClothingTextile2027Library({
  bookUrl,
}: ClothingTextile2027LibraryProps) {
  const class9Chapters = clothingTextileChapters2027.filter(
    (chapter) => chapter.class === 9
  );

  const class10Chapters = clothingTextileChapters2027.filter(
    (chapter) => chapter.class === 10
  );

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 shadow-sm dark:border-pink-900/50 dark:from-pink-950/30 dark:via-gray-900 dark:to-purple-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-800 dark:bg-pink-900/50 dark:text-pink-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
            Arts / Humanities
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Clothing and Textile
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-pink-800 dark:text-pink-300"
          dir="rtl"
        >
          لباس اور پوشاک
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Clothing and Textile syllabus, textile design,
          clothing selection, fabric knowledge and practical
          examination information for the 2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-pink-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-800"
          >
            Open Textbook
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Examination Scheme */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Class 9 Theory",
              value: `${clothingTextile2027Info.partITheoryMarks} Marks`,
            },
            {
              label: "Class 10 Theory",
              value: `${clothingTextile2027Info.partIITheoryMarks} Marks`,
            },
            {
              label: "Practical",
              value: `${clothingTextile2027Info.practicalMarks} Marks`,
            },
            {
              label: "Class 9 Duration",
              value: clothingTextile2027Info.partI.duration,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Class 9 Chapters */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Syllabus
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Part-I chapters listed in the BISE Lahore 2025–2027 syllabus.
            Some chapter titles and extracted topics still require
            original textbook verification.
          </p>
        </div>

        <div className="space-y-4">
          {class9Chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-100 font-extrabold text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
                  {chapter.number}
                </div>

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

                  <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Class IX · Part-I
                  </p>
                </div>
              </div>

              {chapter.sourceTranscription.length > 0 && (
                <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
                  <h4 className="mb-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                    Extracted Syllabus References
                  </h4>

                  <ul className="list-inside list-disc space-y-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {chapter.sourceTranscription.map((topic, index) => (
                      <li key={`${chapter.number}-${index}`} dir="auto">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-orange-100 bg-orange-50/60 px-5 py-3 dark:border-orange-900/30 dark:bg-orange-950/20">
                <p className="text-xs leading-6 text-orange-800 dark:text-orange-200">
                  {chapter.verificationNote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Class 10 — Part-II Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The combined IX–X syllabus also contains a separate Class 10
          section. These chapters are displayed only as a reference
          and are not included in the Class 9 examination list.
        </p>

        <div className="mt-4 space-y-3">
          {class10Chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="rounded-xl border border-purple-100 bg-white p-4 dark:border-purple-900/40 dark:bg-gray-900"
            >
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {chapter.number}. {chapter.title}
              </p>

              <p
                className="mt-1 text-sm text-gray-600 dark:text-gray-300"
                dir="rtl"
              >
                {chapter.titleUrdu}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-purple-800 dark:text-purple-300">
          {class10Chapters.length} Class 10 chapters listed separately.
        </p>
      </section>

      {/* Practical Information */}
      <section className="rounded-2xl border border-green-200 bg-green-50/60 p-5 dark:border-green-900/50 dark:bg-green-950/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Practical Examination
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Practical activities recorded in the syllabus reference:
        </p>

        <ul className="mt-4 space-y-3">
          {clothingTextile2027PracticalList.map((activity, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-900 dark:bg-green-900 dark:text-green-200">
                {index + 1}
              </span>

              {activity}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs leading-6 text-green-800 dark:text-green-300">
          Practical list and detailed textbook instructions should be
          cross-checked with the original prescribed book.
        </p>
      </section>

      {/* ALP Status */}
      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 ALP & Deletion Status
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Verification Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {clothingTextile2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{clothingTextile2027Deletions.length}</strong>
        </p>
      </section>

      {/* Textbook Details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Textbook Information
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong>{" "}
            {clothingTextile2027Info.textbookTitle}
          </p>

          <p dir="rtl" className="text-lg">
            {clothingTextile2027Info.textbookUrduTitle}
          </p>

          <p>
            <strong>Edition:</strong>{" "}
            {clothingTextile2027Info.textbookEdition}
          </p>

          <p>
            <strong>Publisher:</strong>{" "}
            {clothingTextile2027Info.publisher}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {clothingTextile2027Info.medium}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {clothingTextile2027Info.academicSession}
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20">
          <p className="text-sm leading-6 text-orange-800 dark:text-orange-200">
            Original textbook visual verification is pending.
            Unverified chapter titles and topics should not be treated
            as final textbook content.
          </p>
        </div>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Examination scheme and syllabus references are based on the
          BISE Lahore 2025–2027 syllabus. Original textbook verification
          and subject-specific 2027 ALP verification remain pending.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-pink-700 underline underline-offset-4 hover:text-pink-900 dark:text-pink-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

      {/* Navigation */}
      <div>
        <Link
          href="/classes"
          className="inline-flex rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Back to Classes
        </Link>
      </div>
    </main>
  );
}