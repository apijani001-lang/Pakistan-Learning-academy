
import {
  commercialGeography2027Info,
  commercialGeographySections2027,
} from "@/data/class9-commercial-geography-2027";

import {
  commercialGeography2027Deletions,
  commercialGeography2027DeletionSummary,
} from "@/data/class9-commercial-geography-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function CommercialGeography2027Library({
  bookUrl,
}: Props) {
  const info = commercialGeography2027Info;

  const class9Sections = commercialGeographySections2027.filter(
    (section) => section.class === 9
  );

  const class10Sections = commercialGeographySections2027.filter(
    (section) => section.class === 10
  );

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            SESSION {info.academicSession}
          </span>
          <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs font-bold">
            ARTS / HUMANITIES
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          {info.subject}
        </h1>

        <p className="mt-3 text-3xl font-bold text-cyan-200" dir="rtl">
          {info.subjectUrdu}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-100">
          Class 9 Commercial Geography syllabus, commercial
          resources, agricultural production, trade and
          geographical concepts for Annual Examination 2027.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-cyan-950 transition hover:bg-cyan-50"
          >
            Open Complete Textbook ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
          Class 9 Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Class 9 Marks",
              value: `${info.partI.marks}`,
            },
            {
              label: "Paper Duration",
              value: info.partI.duration,
            },
            {
              label: "Class 9 Sections",
              value: `${class9Sections.length}`,
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
          Examination details are based on the BISE Lahore
          2025–2027 syllabus reference.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Complete Syllabus
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            These five sections belong to Class IX Part-I.
            Their listed topics are transcribed from the
            board syllabus.
          </p>
        </div>

        <div className="space-y-4">
          {class9Sections.map((section) => (
            <article
              key={section.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 font-extrabold text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200">
                  {section.number}
                </span>

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

                <ul className="grid gap-2 sm:grid-cols-2">
                  {section.topics.map((topic, index) => (
                    <li
                      key={`${section.number}-${index}`}
                      className="rounded-lg bg-cyan-50 px-3 py-2 text-sm text-cyan-950 dark:bg-cyan-950/40 dark:text-cyan-100"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">
          Class 10 — Part-II Reference
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
          The combined IX–X textbook contains a separate
          Class 10 section. These sections are not included
          in the Class 9 examination list above.
        </p>

        <p className="mt-3 font-bold text-blue-800 dark:text-blue-300">
          {class10Sections.length} Class 10 sections ·
          {` ${info.partII.marks} marks`}
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          2027 Smart Syllabus & Deletion Status
        </h2>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {commercialGeography2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          {commercialGeography2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
          Verified deletion entries:{" "}
          {commercialGeography2027Deletions.length}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          No section, topic, agricultural product, mineral
          resource or commercial activity has been marked
          deleted without official confirmation.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Prescribed Textbook Information
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Book:</strong> {info.textbookTitle}
          </p>

          <p dir="rtl" className="text-lg">
            {info.textbookUrduTitle}
          </p>

          <div>
            <strong>Authors:</strong>
            <ul className="mt-2 list-inside list-disc">
              {info.authors.map((author) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Publisher:</strong> {info.publisher}
          </p>
          <p>
            <strong>Medium:</strong> {info.medium}
          </p>
          <p>
            <strong>Edition:</strong> {info.textbookEdition}
          </p>
          <p>
            <strong>Academic Session:</strong> {info.academicSession}
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-extrabold text-gray-900 dark:text-white">
          Official Syllabus & Book References
        </h2>

        <div className="mt-4 flex flex-col items-start gap-3 text-sm font-bold">
          <a
            href={info.sources.boardSyllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
          >
            BISE Lahore Official Syllabus ↗
          </a>

          <a
            href={info.sources.officialBooks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
          >
            PECTAA Official Books ↗
          </a>

          <a
            href={info.sources.officialCurriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
          >
            PECTAA Curriculum & Compliance ↗
          </a>
        </div>

        <p className="mt-5 text-xs leading-6 text-gray-500 dark:text-gray-400">
          Original textbook page-by-page visual verification
          is still pending. The syllabus sections and listed
          topics are based on the board syllabus source.
        </p>
      </section>
    </main>
  );
}
