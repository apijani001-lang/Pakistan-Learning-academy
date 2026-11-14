
import {
  mathematicsChapters2027,
  mathematics2027Info,
} from "@/data/class9-mathematics-2027";

type Props = {
  bookUrl: string;
};

export default function Mathematics2027Library({ bookUrl }: Props) {
  const examinableChapters = mathematicsChapters2027.filter(
    (chapter) => chapter.examStatus !== "fully-excluded"
  );

  const excludedChapters = mathematicsChapters2027.filter(
    (chapter) => chapter.examStatus === "fully-excluded"
  );

  return (
    <section className="mt-12">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Mathematics 9 · {mathematics2027Info.session}
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Mathematics Smart Syllabus
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Annual Examination 2027 ke liye examinable Mathematics units.
          Officially excluded topics aur questions is student view mein
          display nahi kiye jate.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          PECTAA Notification: {mathematics2027Info.notification}
          {" · "}
          {mathematics2027Info.notificationDate}
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-3xl font-black text-emerald-800">
            {mathematics2027Info.totalUnits}
          </p>
          <p className="mt-1 text-sm font-semibold text-emerald-900">
            Total textbook units
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-3xl font-black text-blue-800">
            {examinableChapters.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-blue-900">
            Units retained for examination
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-3xl font-black text-amber-800">
            {excludedChapters.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-amber-900">
            Completely excluded units
          </p>
        </div>
      </div>

      <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="font-bold text-emerald-950">
          Read the complete Mathematics textbook
        </h3>

        <p className="mt-2 text-sm leading-7 text-emerald-900">
          Complete textbook learning ke liye original book open karein.
          Examination preparation ke waqt PECTAA 2026–27 Smart Syllabus
          ke mutabiq sirf retained content prepare karein.
        </p>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
        >
          Read Complete Mathematics Book →
        </a>
      </div>

      <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-bold text-blue-950">
          Annual Examination 2027
        </h3>

        <div className="mt-3 grid gap-3 text-sm text-blue-900 sm:grid-cols-2">
          <p>
            <strong>Total Marks:</strong> {mathematics2027Info.totalMarks}
          </p>
          <p>
            <strong>Paper Duration:</strong> 2 hours 30 minutes
          </p>
          <p>
            <strong>Objective:</strong> 15 marks
          </p>
          <p>
            <strong>Subjective:</strong> 60 marks
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-black text-slate-900">
          Units Included in Examination
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Neeche sirf woh units hain jo completely excluded nahi hain.
          In units mein officially deleted portions examination preparation
          ka hissa nahi hain.
        </p>
      </div>

      <div className="grid gap-5">
        {examinableChapters.map((chapter) => (
          <article
            key={chapter.number}
            className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-black text-emerald-800">
                  {String(chapter.number).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Unit {chapter.number}
                  </p>

                  <h4 className="mt-1 text-lg font-black text-slate-900">
                    {chapter.title}
                  </h4>
                </div>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Included with official exclusions
              </span>
            </div>

            <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
              {chapter.examNote}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Official syllabus reference
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          PECTAA Grade 9 Smart / Reduced Syllabus, ALP and examination
          notification for Academic Session 2026–27 and Annual Examination
          2027.
        </p>

        <a
          href={mathematics2027Info.officialReference}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-bold text-emerald-700 hover:text-emerald-900"
        >
          Visit PECTAA Official Downloads →
        </a>
      </div>
    </section>
  );
}
