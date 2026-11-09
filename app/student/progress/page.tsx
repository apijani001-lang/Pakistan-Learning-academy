
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Learning Progress | Pakistan Learning Academy",
  description:
    "Track your examination results and academic progress.",
  robots: {
    index: false,
    follow: false,
  },
};

type Stage = {
  id: string;
  title: string;
  stage_type: string;
  stage_number: number;
  book_id: string;
  paper_id: string | null;
  passing_percentage: number;
};

type Attempt = {
  id: string;
  paper_id: string;
  status: string;
  percentage: number;
  obtained_marks: number;
  total_marks: number;
  submitted_at: string | null;
};

type Book = {
  id: string;
  title: string;
};

const stageLabels: Record<string, string> = {
  chapter: "Chapter Test",
  combined: "Combined Test",
  half_book: "Half Book Test",
  final: "Final Book Examination",
};

function ProgressLoading() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-wider text-purple-400">
          PAKISTAN LEARNING ACADEMY
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Loading Your Learning Progress...
        </h1>
        <p className="mt-3 text-slate-400">
          Please wait while we load your examination achievements.
        </p>
      </div>
    </main>
  );
}

async function StudentProgressContent() {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/student/login");
  }

  const [
    { data: stages, error: stagesError },
    { data: attempts, error: attemptsError },
  ] = await Promise.all([
    supabase
      .from("academic_book_exam_stages")
      .select(
        "id, title, stage_type, stage_number, book_id, paper_id, passing_percentage"
      )
      .eq("is_active", true)
      .not("paper_id", "is", null)
      .order("stage_number", { ascending: true }),

    supabase
      .from("chapter_test_attempts")
      .select(
        "id, paper_id, status, percentage, obtained_marks, total_marks, submitted_at"
      )
      .eq("student_id", user.id)
      .order("submitted_at", { ascending: false }),
  ]);

  if (stagesError || attemptsError) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h1 className="text-2xl font-bold">
            Progress Could Not Be Loaded
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Please try again later or contact the Academy administrator.
          </p>
          <Link
            href="/student/dashboard"
            className="mt-6 inline-block text-purple-300"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const stageList = (stages || []) as Stage[];
  const attemptList = (attempts || []) as Attempt[];

  const bookIds = [...new Set(stageList.map((stage) => stage.book_id))];

  let books: Book[] = [];

  if (bookIds.length > 0) {
    const { data } = await supabase
      .from("academic_books")
      .select("id, title")
      .in("id", bookIds);

    books = (data || []) as Book[];
  }

  const bookNames = new Map(
    books.map((book) => [book.id, book.title])
  );

  const progressItems = stageList.map((stage) => {
    const stageAttempts = attemptList.filter(
      (attempt) =>
        attempt.paper_id === stage.paper_id &&
        attempt.status === "graded"
    );

    const latestAttempt = stageAttempts[0] || null;

    const passed =
      latestAttempt !== null &&
      Number(latestAttempt.percentage) >=
        Number(stage.passing_percentage);

    return {
      stage,
      latestAttempt,
      passed,
      bookTitle: bookNames.get(stage.book_id) || "Academic Book",
    };
  });

  const passedCount = progressItems.filter(
    (item) => item.passed
  ).length;

  const totalStages = progressItems.length;

  const overallProgress =
    totalStages > 0
      ? Math.round((passedCount / totalStages) * 100)
      : 0;

  const groupedProgress = progressItems.reduce<
    Record<string, typeof progressItems>
  >((groups, item) => {
    if (!groups[item.stage.book_id]) {
      groups[item.stage.book_id] = [];
    }

    groups[item.stage.book_id].push(item);
    return groups;
  }, {});

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-wider text-purple-400">
              PAKISTAN LEARNING ACADEMY
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              My Learning Progress
            </h1>
            <p className="mt-2 text-slate-400">
              Your examination achievements and learning milestones.
            </p>
          </div>

          <Link
            href="/student/dashboard"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Back to Dashboard
          </Link>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Available Stages
            </p>
            <p className="mt-2 text-3xl font-bold text-purple-400">
              {totalStages}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Passed Stages
            </p>
            <p className="mt-2 text-3xl font-bold text-green-400">
              {passedCount}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Overall Stage Progress
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-400">
              {overallProgress}%
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">
              Overall Learning Progress
            </h2>
            <span className="font-bold text-purple-300">
              {passedCount}/{totalStages}
            </span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-purple-500 transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Progress is calculated from currently active examination
            stages and your latest graded attempt for each stage.
          </p>
        </section>

        {totalStages === 0 ? (
          <section className="rounded-3xl border border-white/10 bg-slate-900 p-12 text-center">
            <div className="mb-5 text-5xl">📚</div>
            <h2 className="text-2xl font-bold">
              Your Learning Journey Is Getting Ready
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-400">
              Published examination stages will appear here when they
              become available.
            </p>
            <Link
              href="/student/exams"
              className="mt-7 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold"
            >
              Visit Examination Centre
            </Link>
          </section>
        ) : (
          <div className="space-y-10">
            {Object.entries(groupedProgress).map(
              ([bookId, items]) => (
                <section key={bookId}>
                  <h2 className="mb-5 text-2xl font-bold">
                    {items[0].bookTitle}
                  </h2>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <article
                        key={item.stage.id}
                        className="rounded-2xl border border-white/10 bg-slate-900 p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-bold text-purple-300">
                              {stageLabels[item.stage.stage_type] ||
                                item.stage.stage_type}
                            </span>

                            <h3 className="mt-2 text-lg font-bold">
                              {item.stage.title}
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                              Required passing percentage:{" "}
                              {item.stage.passing_percentage}%
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-3 py-2 text-xs font-bold ${
                              item.passed
                                ? "bg-green-500/15 text-green-300"
                                : item.latestAttempt
                                  ? "bg-amber-500/15 text-amber-300"
                                  : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {item.passed
                              ? "PASSED"
                              : item.latestAttempt
                                ? "RETAKE REQUIRED"
                                : "NOT ATTEMPTED"}
                          </span>
                        </div>

                        {item.latestAttempt && (
                          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            <div className="rounded-xl bg-slate-800 p-3">
                              <p className="text-xs text-slate-400">
                                Latest Score
                              </p>
                              <p className="mt-1 font-bold">
                                {Number(
                                  item.latestAttempt.percentage
                                ).toFixed(2)}%
                              </p>
                            </div>

                            <div className="rounded-xl bg-slate-800 p-3">
                              <p className="text-xs text-slate-400">
                                Marks
                              </p>
                              <p className="mt-1 font-bold">
                                {item.latestAttempt.obtained_marks}/
                                {item.latestAttempt.total_marks}
                              </p>
                            </div>

                            <div className="rounded-xl bg-slate-800 p-3">
                              <p className="text-xs text-slate-400">
                                Attempts
                              </p>
                              <p className="mt-1 font-bold">
                                {
                                  attemptList.filter(
                                    (attempt) =>
                                      attempt.paper_id ===
                                        item.stage.paper_id &&
                                      attempt.status === "graded"
                                  ).length
                                }
                              </p>
                            </div>

                            <div className="rounded-xl bg-slate-800 p-3">
                              <p className="text-xs text-slate-400">
                                Result
                              </p>
                              <p className="mt-1 font-bold">
                                {item.passed ? "Passed" : "Not Passed"}
                              </p>
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )
            )}
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/student/exams"
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
          >
            Examination Centre
          </Link>

          <Link
            href="/student/certificates"
            className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            My Certificates
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Your progress is calculated using recorded examination results.
        </p>
      </div>
    </main>
  );
}

export default function StudentProgressPage() {
  return (
    <Suspense fallback={<ProgressLoading />}>
      <StudentProgressContent />
    </Suspense>
  );
}
