
import {
  chemistry2027Info,
  chemistryChapters2027,
} from "@/data/class9-chemistry-2027";

type Props = {
  bookUrl: string;
};

const officialNotificationUrl =
  "https://pectaa.edu.pk/wp-content/uploads/2026/11/ALP-9-Notification-06.11.2026-F.pdf";

export default function Chemistry2027Library({ bookUrl }: Props) {
  const includedChapters = chemistryChapters2027.filter(
    (chapter) => chapter.examStatus !== "fully-excluded"
  );

  return (
    <section className="mt-8 space-y-8">
      <div className="overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            Class 9 Chemistry
          </span>

          <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-sm font-semibold text-emerald-200">
            {chemistry2027Info.session}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
          Chemistry Smart Syllabus 2027
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
          Annual Examination 2027 ke liye chapter-wise examinable
          Chemistry syllabus. Student preparation view mein sirf
          retained chapters show kiye jate hain.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {chemistry2027Info.totalChapters}
            </p>
            <p className="mt-1 text-xs text-purple-100">
              Total Textbook Chapters
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {includedChapters.length}
            </p>
            <p className="mt-1 text-xs text-purple-100">
              Chapters for Examination
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-extrabold">
              {chemistry2027Info.totalMarks}
            </p>
            <p className="mt-1 text-xs text-purple-100">
              Total Paper Marks
            </p>
          </div>
        </div>

        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-purple-100"
        >
          Open Complete Chemistry Textbook →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Objective Section
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            12 Marks
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Subjective Section
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            48 Marks
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Paper Duration
          </p>
          <p className="mt-2 text-3xl font-extrabold text-purple-800">
            2 Hours
          </p>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <h3 className="text-xl font-extrabold text-gray-900">
            Chapter-wise Chemistry Syllabus
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            Neeche Annual Examination 2027 ke liye retained
            textbook chapters diye gaye hain.
          </p>
        </div>

        <div className="space-y-4">
          {includedChapters.map((chapter) => (
            <article
              key={chapter.number}
              className="overflow-hidden rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 font-extrabold text-purple-800">
                    {String(chapter.number).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
                      Chapter {chapter.number}
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-gray-900">
                      {chapter.title}
                    </h4>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  Included
                </span>
              </div>

              <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-6 text-gray-600">
                Is chapter ke textbook content mein se PECTAA
                notification ke mutabiq retained material
                examination preparation ka hissa hai.
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-extrabold text-blue-950">
          Important Examination Rule
        </h3>

        <p className="mt-2 text-sm leading-7 text-blue-900">
          PECTAA notification ke mutabiq examination paper
          textbook ke tamam content se banaya jayega, siwaye
          un topics aur exercise questions ke jo Smart Syllabus
          (ALP) mein excluded hain.
        </p>

        <p className="mt-3 text-sm leading-7 text-blue-900">
          Is page par deleted topics aur deleted exercise
          question references students ko display nahi kiye jate.
          Complete textbook learning ke liye upar diya gaya
          textbook link use karein.
        </p>
      </div>

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
        <h3 className="font-extrabold text-indigo-950">
          Chemistry Paper Information
        </h3>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <p>
            <strong>Academic Session:</strong>{" "}
            {chemistry2027Info.session}
          </p>

          <p>
            <strong>Examination:</strong>{" "}
            {chemistry2027Info.examination}
          </p>

          <p>
            <strong>Total Marks:</strong>{" "}
            {chemistry2027Info.totalMarks}
          </p>

          <p>
            <strong>Paper Duration:</strong>{" "}
            {chemistry2027Info.paperDuration}
          </p>

          <p>
            <strong>Notification:</strong>{" "}
            {chemistry2027Info.notification}
          </p>

          <p>
            <strong>Notification Date:</strong>{" "}
            {chemistry2027Info.notificationDate}
          </p>
        </div>

        <a
          href={officialNotificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-indigo-800 underline underline-offset-4"
        >
          Open Official PECTAA Notification PDF →
        </a>
      </div>
    </section>
  );
}
