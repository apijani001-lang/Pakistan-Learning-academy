
import {
  tarjumaTulQuran2027Info,
  tarjumaTulQuranChapters2027,
} from "@/data/class9-tarjuma-tul-quran-2027";

import {
  tarjumaTulQuran2027DeletionSummary,
} from "@/data/class9-tarjuma-tul-quran-2027-deletions";

type Props = {
  bookUrl: string;
};

export default function TarjumaTulQuran2027Library({
  bookUrl,
}: Props) {
  return (
    <section className="mt-8 space-y-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            Class 9 Compulsory Subject
          </span>

          <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            Session {tarjumaTulQuran2027Info.session}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
          Tarjuma-tul-Quran-ul-Majeed
        </h2>

        <p dir="rtl" className="mt-3 text-2xl font-bold text-emerald-100">
          ترجمۃ القرآن المجید
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
          Class 9 textbook reference and Surah-wise learning
          contents for the 2026-27 academic session.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {tarjumaTulQuran2027Info.totalChapters}
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Listed Surahs
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-lg font-extrabold">Not verified</p>
            <p className="mt-1 text-xs text-emerald-100">
              Exam Marks
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-lg font-extrabold">Pending</p>
            <p className="mt-1 text-xs text-emerald-100">
              ALP Verification
            </p>
          </div>
        </div>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50"
        >
          Open Complete Textbook ↗
        </a>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h3 className="text-lg font-extrabold text-amber-950 dark:text-amber-200">
          Important Syllabus Verification Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {tarjumaTulQuran2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900 dark:text-amber-200">
          Status: {tarjumaTulQuran2027DeletionSummary.status}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          No Surah has been marked as deleted. The following
          list represents the available textbook listing only;
          it is not a claim that every listed Surah is confirmed
          for Annual Examination 2027.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
            Surah-wise Textbook Contents
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
            Available textbook listing mein diye gaye Surahs
            aur unke general learning areas.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tarjumaTulQuranChapters2027.map((chapter) => (
            <article
              key={chapter.number}
              className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-4 dark:border-emerald-900/50 dark:from-gray-900 dark:to-emerald-950/20"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-extrabold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                  {chapter.number}
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Surah {chapter.number}
                  </p>

                  <h4 className="mt-1 font-bold text-gray-900 dark:text-white">
                    {chapter.title}
                  </h4>

                  <p
                    dir="rtl"
                    className="mt-2 text-xl font-bold leading-relaxed text-emerald-900 dark:text-emerald-200"
                  >
                    {chapter.titleUrdu}
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t border-emerald-100 pt-3 dark:border-emerald-900/50">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  General Textbook Learning Areas
                </p>

                <ul className="mt-2 space-y-2">
                  {chapter.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h3 className="font-extrabold text-gray-900 dark:text-white">
          Textbook and Academic Information
        </h3>

        <div className="mt-4 grid gap-3 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
          <p>
            <strong>Subject:</strong>{" "}
            {tarjumaTulQuran2027Info.subject}
          </p>

          <p>
            <strong>Class:</strong>{" "}
            {tarjumaTulQuran2027Info.class}
          </p>

          <p>
            <strong>Academic Session:</strong>{" "}
            {tarjumaTulQuran2027Info.session}
          </p>

          <p>
            <strong>Examination:</strong>{" "}
            {tarjumaTulQuran2027Info.examination}
          </p>

          <p>
            <strong>Textbook Authority:</strong>{" "}
            {tarjumaTulQuran2027Info.textbookAuthority}
          </p>

          <p>
            <strong>Textbook Edition:</strong>{" "}
            {tarjumaTulQuran2027Info.textbookEdition}
          </p>

          <p>
            <strong>Medium:</strong>{" "}
            {tarjumaTulQuran2027Info.medium}
          </p>

          <p>
            <strong>Listed Surahs:</strong>{" "}
            {tarjumaTulQuran2027Info.totalChapters}
          </p>

          <p>
            <strong>Notification Reference:</strong>{" "}
            {tarjumaTulQuran2027Info.notification}
          </p>

          <p>
            <strong>Notification Date:</strong>{" "}
            {tarjumaTulQuran2027Info.notificationDate}
          </p>
        </div>

        <a
          href="https://pectaa.edu.pk/books-and-publications/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-emerald-800 underline underline-offset-4 dark:text-emerald-300"
        >
          Visit PECTAA Official Books and Publications ↗
        </a>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h3 className="font-bold text-amber-950 dark:text-amber-200">
          Source Verification
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-100">
          {tarjumaTulQuran2027Info.note}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900 dark:text-amber-100">
          Original official textbook PDF visual checking and
          subject-specific Annual Examination 2027 syllabus
          confirmation are still pending.
        </p>
      </div>
    </section>
  );
}
