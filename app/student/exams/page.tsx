
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type ExamStage = {
  id: string;
  title: string;
  stage_type: string;
  stage_number: number;
  book_id: string;
  paper_id: string | null;
  academic_books: {
    title: string;
  };
};

type ExamCard = {
  stage: ExamStage;
  paperTitle: string;
  duration: number;
  totalMarks: number;
  unlocked: boolean;
  reason: string;
};

const stageLabels: Record<string, string> = {
  chapter: "Chapter Test",
  combined: "Combined Chapter Test",
  half_book: "Half Book Examination",
  final: "Full Book Final Examination",
};

export default function StudentExamsPage() {
  const router = useRouter();
  const supabase = createClient();

  const [exams, setExams] = useState<ExamCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [startingId, setStartingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [studentName, setStudentName] = useState("");

  const loadExams = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/student/login");
        return;
      }

      const { data: profile } = await supabase
        .from("student_profiles")
        .select("full_name, display_name")
        .eq("id", user.id)
        .maybeSingle();

      setStudentName(
        profile?.full_name ||
          profile?.display_name ||
          "Student"
      );

      const { data: stages, error: stagesError } = await supabase
        .from("academic_book_exam_stages")
        .select(`
          id,
          title,
          stage_type,
          stage_number,
          book_id,
          paper_id,
          academic_books!inner (
            title
          )
        `)
        .eq("is_active", true)
        .not("paper_id", "is", null)
        .order("stage_number", { ascending: true });

      if (stagesError) throw stagesError;

      const cards: ExamCard[] = [];

      for (const rawStage of stages || []) {
        const stage = rawStage as unknown as ExamStage;

        if (!stage.paper_id) continue;

        const { data: paper, error: paperError } = await supabase
          .from("chapter_test_papers")
          .select("id, title, duration_minutes, total_marks")
          .eq("id", stage.paper_id)
          .eq("status", "published")
          .maybeSingle();

        if (paperError) throw paperError;
        if (!paper) continue;

        const { data: unlocked, error: unlockError } =
          await supabase.rpc("can_student_unlock_exam_stage", {
            p_stage_id: stage.id,
          });

        if (unlockError) {
          cards.push({
            stage,
            paperTitle: paper.title,
            duration: paper.duration_minutes,
            totalMarks: Number(paper.total_marks),
            unlocked: false,
            reason: "Unlock status could not be verified.",
          });
          continue;
        }

        cards.push({
          stage,
          paperTitle: paper.title,
          duration: paper.duration_minutes,
          totalMarks: Number(paper.total_marks),
          unlocked: unlocked === true,
          reason:
            unlocked === true
              ? "Ready to start"
              : "Complete the required previous examination first.",
        });
      }

      setExams(cards);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Examinations load nahi ho sakin."
      );
    } finally {
      setLoading(false);
    }
  }, [router, supabase]);

  useEffect(() => {
    loadExams();
  }, [loadExams]);

  const startExam = async (stageId: string) => {
    setStartingId(stageId);
    setError("");

    try {
      const { data, error: startError } = await supabase.rpc(
        "start_academic_exam_attempt",
        {
          p_stage_id: stageId,
        }
      );

      if (startError) throw startError;

      if (!data) {
        throw new Error("Exam attempt create nahi ho saka.");
      }

      router.push(`/student/exams/${data}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Exam start nahi ho saka."
      );
    } finally {
      setStartingId(null);
    }
  };

  const groupedExams = exams.reduce<Record<string, ExamCard[]>>(
    (groups, exam) => {
      const book = exam.stage.academic_books.title;

      if (!groups[book]) groups[book] = [];

      groups[book].push(exam);

      return groups;
    },
    {}
  );

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">

        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-wider text-purple-400">
              PAKISTAN LEARNING ACADEMY
            </p>

            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              Examination Centre
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome, {studentName}. Continue your learning journey.
            </p>
          </div>

          <button
            onClick={() => router.push("/student/dashboard")}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Back to Dashboard
          </button>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Available Exams</p>
            <p className="mt-2 text-3xl font-bold text-purple-400">
              {exams.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Unlocked Exams</p>
            <p className="mt-2 text-3xl font-bold text-green-400">
              {exams.filter((exam) => exam.unlocked).length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Passing Percentage</p>
            <p className="mt-2 text-3xl font-bold text-blue-400">
              60%
            </p>
          </div>
        </section>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-12 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
            <p className="text-slate-300">
              Available examinations load ho rahe hain...
            </p>
          </div>
        ) : exams.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900 px-6 py-16 text-center">
            <div className="mb-5 text-5xl">📚</div>

            <h2 className="text-2xl font-bold">
              No Examinations Available Yet
            </h2>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-400">
              Abhi aapki books ke published examinations available nahi hain.
              Jaise hi admin books, stages aur exam papers publish karega,
              woh yahan nazar aayenge.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(groupedExams).map(([bookTitle, bookExams]) => (
              <section key={bookTitle}>
                <div className="mb-5">
                  <p className="text-sm font-semibold text-purple-400">
                    STUDY BOOK
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    {bookTitle}
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {bookExams.map((exam) => (
                    <article
                      key={exam.stage.id}
                      className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-purple-500/40"
                    >
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div>
                          <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-bold text-purple-300">
                            {stageLabels[exam.stage.stage_type] ||
                              exam.stage.stage_type}
                          </span>

                          <h3 className="mt-4 text-xl font-bold">
                            {exam.stage.title}
                          </h3>

                          <p className="mt-2 text-sm text-slate-400">
                            {exam.paperTitle}
                          </p>
                        </div>

                        <span className="text-3xl">📝</span>
                      </div>

                      <div className="mb-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-slate-800 p-3">
                          <p className="text-xs text-slate-400">
                            Total Marks
                          </p>
                          <p className="mt-1 font-bold">
                            {exam.totalMarks}
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-800 p-3">
                          <p className="text-xs text-slate-400">
                            Duration
                          </p>
                          <p className="mt-1 font-bold">
                            {exam.duration} Minutes
                          </p>
                        </div>
                      </div>

                      <p
                        className={`mb-5 text-sm ${
                          exam.unlocked
                            ? "text-green-400"
                            : "text-amber-400"
                        }`}
                      >
                        {exam.unlocked
                          ? "✓ " + exam.reason
                          : "🔒 " + exam.reason}
                      </p>

                      <button
                        disabled={
                          !exam.unlocked ||
                          startingId !== null
                        }
                        onClick={() => startExam(exam.stage.id)}
                        className="w-full rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                      >
                        {startingId === exam.stage.id
                          ? "Preparing Exam..."
                          : exam.unlocked
                            ? "Start Examination"
                            : "Locked"}
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
