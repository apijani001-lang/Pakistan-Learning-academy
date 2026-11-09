import {
  tarjumaTulQuran2027Info,
  tarjumaTulQuranChapters2027,
} from "@/data/class9-tarjuma-tul-quran-2027";

import {
  tarjumaTulQuran2027Deletions,
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
      {/* HERO SECTION */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            Class 9 Compulsory Subject
          </span>

          <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            {tarjumaTulQuran2027Info.session}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
          Tarjuma-tul-Quran-ul-Majeed
        </h2>

        <p
          dir="rtl"
          className="mt-3 text-2xl font-bold text-emerald-100"
        >
          ترجمۃ القرآن المجید
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
          Class 9 ke students ke liye Surah-wise textbook
          contents, Urdu translation aur examination
          preparation information for Annual Examination 2027.
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
            <p className="text-2xl font-extrabold">
              {tarjumaTulQuran2027Deletions.length}
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Verified Deletion Entries
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-lg font-extrabold">
              Pending
            </p>
            <p className="mt-1 text-xs text-emerald-100">
              Official ALP Verification
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

      {/* VERIFICATION NOTICE */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="text-lg font-extrabold text-amber-950">
          Important 2027 Syllabus Verification Notice
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900">
          {tarjumaTulQuran2027DeletionSummary.note}
        </p>

        <p className="mt-3 text-sm font-bold text-amber-900">
          Status: {tarjumaTulQuran2027DeletionSummary.status}
        </p>
      </div>

      {/* SURAH LIST */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900">
            Complete Surah-wise Textbook Contents
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Neeche textbook listing mein diye gaye 18 Surahs
            ki sequence show ki gayi hai. Har Surah ke liye
            Tilawat, translation aur understanding ke topics
            listed hain.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tarjumaTulQuranChapters2027.map((chapter) => {
            const deletion = tarjumaTulQuran2027Deletions.find(
              (item) => item.chapter === chapter.number
            );

            return (
              <article
                key={chapter.number}
                className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-4 transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                      Surah {chapter.number}
                    </p>

                    <h4 className="mt-2 font-bold text-gray-900">
                      {chapter.title}
                    </h4>

                    <p
                      dir="rtl"
                      className="mt-2 text-xl font-bold leading-relaxed text-emerald-900"
                    >
                      {chapter.titleUrdu}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    Listed
                  </span>
                </div>

                <div className="mt-4 border-t border-emerald-100 pt-3">
                  <p className="text-xs font-bold text-gray-700">
                    Textbook Learning Areas
                  </p>

                  <ul className="mt-2 space-y-2">
                    {chapter.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {deletion?.examNote && (
                  <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm font-semibold text-amber-900">
                    {deletion.examNote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* EXAMINATION INFORMATION */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="font-extrabold text-gray-900">
          Examination and Textbook Information
        </h3>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
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
            <strong>Total Listed Surahs:</strong>{" "}
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
          className="mt-5 inline-flex font-bold text-emerald-800 underline underline-offset-4"
        >
          Visit PECTAA Official Books and Publications ↗
        </a>
      </div>

      {/* SOURCE VERIFICATION */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-bold text-amber-900">
          Source Verification
        </h3>

        <p className="mt-2 text-sm leading-7 text-amber-900">
          {tarjumaTulQuran2027Info.note}
        </p>

        <p className="mt-3 text-sm leading-7 text-amber-900">
          Original official textbook PDF ki visual checking
          aur subject-specific 2027 ALP confirmation pending
          hai. Is liye yeh component verified deleted content
          ka claim nahi karta.
        </p>
      </div>
    </section>
  );
}