// components/alQuranDarsENizami2027library.tsx

import Link from "next/link";

import {
  alQuran2027Info,
  alQuranSections2027,
} from "@/data/class9-al-quran-dars-e-nizami-2027";

import {
  alQuran2027Deletions,
  alQuran2027DeletionSummary,
} from "@/data/class9-al-quran-dars-e-nizami-2027-deletions";

export default function AlQuranDarsENizami2027Library({
  bookUrl,
}: {
  bookUrl?: string;
}) {
  const class9Sections = alQuranSections2027.filter(
    (section) => section.number <= 2
  );

  const class10Section = alQuranSections2027.find(
    (section) => section.number === 3
  );

  return (
    <main className="space-y-8">
      {/* Header */}
      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-teal-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
            CLASS 9
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Annual Examination 2027
          </span>

          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 dark:bg-purple-900/40 dark:text-purple-200">
            Dars-e-Nizami Group
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Al-Quran
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-emerald-800 dark:text-emerald-300"
          dir="rtl"
        >
          القرآن
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Quran syllabus for the Dars-e-Nizami group,
          including prescribed Surahs, translation, themes
          and examination information for the 2026–27 session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Open Study Book
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* Examination Scheme */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Scheme
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Class 9 Marks",
              value: `${alQuran2027Info.partI.marks} Marks`,
            },
            {
              label: "Class 10 Marks",
              value: `${alQuran2027Info.partII.marks} Marks`,
            },
            {
              label: "Class 9 Sections",
              value: `${class9Sections.length} Sections`,
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

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Class 9 examination duration has not been independently verified.
        </p>
      </section>

      {/* Class 9 Syllabus */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Syllabus — Part I
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            The following prescribed portions are listed in the
            BISE Lahore syllabus for Class 9 Dars-e-Nizami.
          </p>
        </div>

        <div className="space-y-4">
          {class9Sections.map((section) => (
            <article
              key={section.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-extrabold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                    {section.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                      {section.title}
                    </h3>

                    <p
                      className="mt-2 text-xl leading-8 text-gray-700 dark:text-gray-300"
                      dir="rtl"
                    >
                      {section.titleUrdu}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20">
                  <h4 className="mb-3 text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    Prescribed Study Areas
                  </h4>

                  <ul className="space-y-3">
                    {section.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xs font-bold text-emerald-900 dark:bg-emerald-900 dark:text-emerald-200">
                          {index + 1}
                        </span>

                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Class 10 Reference */}
      {class10Section && (
        <section className="rounded-2xl border border-purple-200 bg-purple-50/60 p-5 dark:border-purple-900/50 dark:bg-purple-950/20">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Class 10 — Part II Reference
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
            The following portions are displayed separately
            for Class 10 and are not included in the Class 9
            examination list.
          </p>

          <div className="mt-4 rounded-xl border border-purple-100 bg-white p-4 dark:border-purple-900/40 dark:bg-gray-900">
            <h3 className="font-bold text-gray-900 dark:text-white">
              {class10Section.title}
            </h3>

            <p
              className="mt-2 text-xl text-gray-700 dark:text-gray-300"
              dir="rtl"
            >
              {class10Section.titleUrdu}
            </p>

            <ul className="mt-4 space-y-3">
              {class10Section.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Study Guidance */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Study Guidance
        </h2>

        <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <li>Prepare the prescribed translation carefully.</li>
          <li>Understand the main themes of the prescribed Surahs.</li>
          <li>Study important events mentioned in the syllabus.</li>
          <li>Use an authentic Tafsir for additional understanding.</li>
        </ul>

        <p className="mt-4 text-xs leading-6 text-blue-800 dark:text-blue-200">
          These are general study suggestions, not an additional
          official examination syllabus.
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
          {alQuran2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{alQuran2027Deletions.length}</strong>
        </p>
      </section>

      {/* Textbook Information */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Textbook & Reference Information
        </h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Subject:</strong>{" "}
            {alQuran2027Info.subject}
          </p>

          <p>
            <strong>Group:</strong>{" "}
            {alQuran2027Info.group}
          </p>

          <p>
            <strong>Reference:</strong>{" "}
            {alQuran2027Info.textbook.note}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {alQuran2027Info.academicSession}
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20">
          <p className="text-sm leading-6 text-orange-800 dark:text-orange-200">
            A specific prescribed book, edition, author and publisher
            have not been independently confirmed. The syllabus
            mentions authentic Tafsir references.
          </p>
        </div>
      </section>

      {/* Official Source */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          The syllabus scope and marks information are based on
          the BISE Lahore 2025–2027 document.
        </p>

        <a
          href="https://home.biselahore.com/downloads/notifications/misc/Syllabus_9th%2610th_%282025_27%29.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
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