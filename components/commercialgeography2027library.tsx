// components/commercialgeography2027library.tsx

import Link from "next/link";

import {
  commercialGeography2027Info,
  commercialGeographySections2027,
} from "@/data/class9-commercial-geography-2027";

import {
  commercialGeography2027Deletions,
  commercialGeography2027DeletionSummary,
} from "@/data/class9-commercial-geography-2027-deletions";

type CommercialGeography2027LibraryProps = {
  bookUrl?: string;
};

export default function CommercialGeography2027Library({
  bookUrl,
}: CommercialGeography2027LibraryProps) {
  const class9Sections = commercialGeographySections2027.filter(
    (section) => section.class === 9
  );

  const class10Sections = commercialGeographySections2027.filter(
    (section) => section.class === 10
  );

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-sm dark:border-cyan-900/50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-blue-950/20 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
            Elective Subject
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Commercial Geography
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-cyan-800 dark:text-cyan-300"
          dir="rtl"
        >
          تجارتی جغرافیہ
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Commercial Geography syllabus, commercial resources,
          agricultural production, trade and examination guidance
          for the 2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800"
          >
            Open Textbook
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Examination Information */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Class IX Marks",
              value: String(commercialGeography2027Info.partI.marks),
            },
            {
              label: "Exam Duration",
              value: commercialGeography2027Info.partI.duration,
            },
            {
              label: "Class IX Sections",
              value: String(class9Sections.length),
            },
            {
              label: "Combined Book Sections",
              value: String(commercialGeography2027Info.totalSections),
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

      {/* Class 9 Sections */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Complete Syllabus
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Part-I sections according to the BISE Lahore 2025–2027
            syllabus.
          </p>
        </div>

        <div className="space-y-4">
          {class9Sections.map((section) => (
            <article
              key={section.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-cyan-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-cyan-700"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 font-extrabold text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">
                  {section.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                    {section.title}
                  </h3>

                  <p
                    className="mt-2 text-lg leading-8 text-gray-700 dark:text-gray-300"
                    dir="rtl"
                  >
                    {section.titleUrdu}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Class IX · Part-I
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
                <h4 className="mb-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                  Topics
                </h4>

                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic, index) => (
                    <span
                      key={`${section.number}-${index}`}
                      className="rounded-lg bg-cyan-50 px-3 py-2 text-xs font-medium text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Class 10 — Part-II Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The combined IX–X textbook also includes a separate Class 10
          section. These sections are not included in the Class 9
          examination list above.
        </p>

        <p className="mt-3 text-sm font-semibold text-blue-800 dark:text-blue-300">
          {class10Sections.length} sections belong to Class 10.
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
          {commercialGeography2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{commercialGeography2027Deletions.length}</strong>
        </p>
      </section>

      {/* Textbook Details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Prescribed Textbook
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong>{" "}
            {commercialGeography2027Info.textbookTitle}
          </p>

          <p dir="rtl" className="text-lg">
            {commercialGeography2027Info.textbookUrduTitle}
          </p>

          <div>
            <strong>Authors:</strong>

            <ul className="mt-2 list-inside list-disc">
              {commercialGeography2027Info.authors.map((author) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Publisher:</strong>{" "}
            {commercialGeography2027Info.publisher}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {commercialGeography2027Info.medium}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {commercialGeography2027Info.academicSession}
          </p>
        </div>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The Class IX and Class X section sequence and examination
          scheme are based on the BISE Lahore 2025–2027 syllabus.
          Original textbook visual verification and subject-specific
          2027 ALP verification remain pending.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-cyan-700 underline underline-offset-4 hover:text-cyan-900 dark:text-cyan-300"
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