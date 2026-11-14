
import Link from "next/link";

import {
  islamiyat2027Info,
  islamiyatChapters2027,
} from "@/data/class9-islamiat-2027";

import {
  islamiyat2027PaperInstructions,
} from "@/data/class9-islamiat-2027-deletions";

type Props = {
  bookUrl?: string;
};

export default function Islamiat2027Library({ bookUrl }: Props) {
  const examinableChapters = islamiyatChapters2027.filter(
    (chapter) => chapter.examStatus !== "fully-excluded"
  );

  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-teal-950/20 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
            CLASS 9
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            SESSION {islamiyat2027Info.session}
          </span>
          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-900/40 dark:text-teal-200">
            {islamiyat2027Info.examination}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Islamiat
        </h1>

        <p className="mt-3 text-2xl font-bold text-emerald-800 dark:text-emerald-300" dir="rtl">
          اسلامیات
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">
          Class 9 Islamiat examination preparation for Annual
          Examination 2027. This page presents the examinable
          chapter list and the available paper instructions.
        </p>

        {bookUrl && (
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
          >
            Open Islamiat Textbook ↗
          </a>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Examination Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Total Marks",
              value: `${islamiyat2027Info.totalMarks}`,
            },
            {
              label: "Paper Duration",
              value: islamiyat2027Info.paperDuration,
            },
            {
              label: "Examinable Chapters",
              value: `${examinableChapters.length}`,
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
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Class 9 Examinable Chapters
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Only chapters retained in the available 2027 syllabus
            transcription are shown here.
          </p>
        </div>

        <div className="space-y-3">
          {examinableChapters.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-extrabold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                  {chapter.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold leading-6 text-gray-900 dark:text-white">
                    {chapter.title}
                  </h3>

                  {chapter.titleUrdu && (
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300" dir="rtl">
                      {chapter.titleUrdu}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {chapter.examNote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Paper Instructions
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Follow these examination instructions while preparing
          the retained textbook material.
        </p>

        <div className="mt-4 space-y-3">
          {islamiyat2027PaperInstructions.map((instruction, index) => (
            <div
              key={index}
              className="rounded-xl border border-emerald-100 bg-white p-4 dark:border-emerald-900/40 dark:bg-gray-900"
            >
              <h3 className="font-bold text-gray-900 dark:text-white">
                {instruction.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {instruction.instruction}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900/50 dark:bg-orange-950/20">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Syllabus Verification Notice
        </h2>

        <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
          Original PDF Visual Check Pending
        </span>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          {islamiyat2027Info.verificationNote}
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">
          The chapter titles currently available in the source
          data are generic for Chapters 1–6. They have not been
          replaced with invented textbook titles.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <h2 className="font-bold text-gray-900 dark:text-white">
          Official Syllabus Reference
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Notification: {islamiyat2027Info.notification}
          <br />
          Date: {islamiyat2027Info.notificationDate}
        </p>

        <a
          href={islamiyat2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 dark:text-emerald-300"
        >
          View PECTAA Official Reference ↗
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
