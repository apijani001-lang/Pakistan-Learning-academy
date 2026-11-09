
import Link from "next/link";

import {
  seeratETaiba2027Info,
  seeratETaibaSections2027,
  seeratETaibaHadithHeadings2027,
} from "@/data/class9-seerat-e-taiba-2027";

import {
  seeratETaiba2027Deletions,
  seeratETaiba2027DeletionSummary,
} from "@/data/class9-seerat-e-taiba-2027-deletions";

export default function SeeratETaiba2027Library({
  bookUrl,
}: {
  bookUrl?: string;
}) {
  return (
    <main className="space-y-8">
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
          Seerat-e-Taiba
        </h1>

        <p
          className="mt-3 text-3xl font-bold text-emerald-800 dark:text-emerald-300"
          dir="rtl"
        >
          سیرت طیبہ
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Seerat-e-Taiba syllabus for the Dars-e-Nizami
          group, covering the available Seerat topics, character
          headings and Hadith-related references for the
          2026–27 academic session.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Open Reference Book
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Subject Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Academic Session
            </p>

            <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
              {seeratETaiba2027Info.academicSession}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Examination
            </p>

            <p className="mt-2 text-lg font-extrabold text-gray-900 dark:text-white">
              {seeratETaiba2027Info.examination}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Syllabus Sections
            </p>

            <p className="mt-2 text-xl font-extrabold text-gray-900 dark:text-white">
              {seeratETaibaSections2027.length}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-900/50 dark:bg-orange-950/20">
          <p className="text-sm leading-7 text-orange-800 dark:text-orange-200">
            <strong>Marks and duration:</strong> A separate
            Class 9 marks distribution and examination duration
            have not been independently verified from the
            available subject syllabus pages. No unverified
            figures are displayed.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Seerat-e-Taiba Syllabus
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Available subject headings from the BISE Lahore
            syllabus reference.
          </p>
        </div>

        <div className="space-y-6">
          {seeratETaibaSections2027.map((section) => (
            <article
              key={section.number}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="border-b border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-800/50">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {section.number}. {section.title}
                </h3>

                <p
                  className="mt-2 text-lg leading-8 text-gray-700 dark:text-gray-300"
                  dir="rtl"
                >
                  {section.titleUrdu}
                </p>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {section.topics.map((topic) => (
                  <div
                    key={`${section.number}-${topic.number}`}
                    className="flex items-start gap-3 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                      {topic.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        {topic.title}
                      </p>

                      <p
                        className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300"
                        dir="rtl"
                      >
                        {topic.titleUrdu}
                      </p>

                      {topic.details && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
                          {topic.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5 dark:border-teal-900/50 dark:bg-teal-950/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Hadith-Related Topic References
        </h2>

        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
          The following English headings are supplementary
          topic-level references. They are not presented as
          a verified complete official Hadith list or as
          complete Arabic Hadith texts.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {seeratETaibaHadithHeadings2027.map((heading, index) => (
            <div
              key={`${index}-${heading}`}
              className="flex items-start gap-3 rounded-xl border border-teal-100 bg-white p-3 dark:border-teal-900/40 dark:bg-gray-900"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-xs font-bold text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">
                {index + 1}
              </span>

              <p className="text-sm font-medium leading-6 text-gray-800 dark:text-gray-200">
                {heading}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Content Verification Status
        </h2>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-700 dark:text-gray-300">
              Official syllabus reference
            </span>

            <span className="font-bold text-emerald-700 dark:text-emerald-300">
              Verified
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-700 dark:text-gray-300">
              Original textbook visual check
            </span>

            <span className="font-bold text-orange-700 dark:text-orange-300">
              Pending
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-700 dark:text-gray-300">
              Separate marks scheme
            </span>

            <span className="font-bold text-orange-700 dark:text-orange-300">
              Pending
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-700 dark:text-gray-300">
              2027 ALP verification
            </span>

            <span className="font-bold text-orange-700 dark:text-orange-300">
              Pending
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          2027 ALP & Deletion Status
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Verification Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {seeratETaiba2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Verified deletion entries:{" "}
          <strong>{seeratETaiba2027Deletions.length}</strong>
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          This subject library references the BISE Lahore
          Secondary School Syllabus 2025–2027, pages 70–71.
        </p>

        <a
          href={seeratETaiba2027Info.source}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
        >
          View BISE Lahore Official Syllabus
        </a>
      </section>

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
