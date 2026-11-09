
"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type ExamQuestion = {
  question_id: string;
  question_type: "mcq" | "short" | "long";
  question: string;
  question_urdu: string | null;
  options: Record<string, string> | string[] | null;
  marks: number;
  sort_order: number;
  youtube_url: string | null;
  video_title: string | null;
  student_answer: string | Record<string, unknown> | null;
};

type ExamResult = {
  attempt_id: string;
  status: string;
  total_marks: number;
  obtained_marks: number;
  percentage: number;
  passing_percentage: number;
  passed: boolean;
};

function answerToText(
  answer: ExamQuestion["student_answer"]
): string {
  if (answer === null || answer === undefined) {
    return "";
  }

  if (typeof answer === "string") {
    return answer;
  }

  return JSON.stringify(answer);
}

function ExamLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="text-center text-white">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
        <p>Exam load ho raha hai...</p>
      </div>
    </main>
  );
}

function StudentExamContent() {
  const params = useParams();
  const router = useRouter();

  const attemptId = params.attemptid as string;

  const [supabase] = useState(() => createClient());

  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [result, setResult] = useState<ExamResult | null>(null);

  const loadExam = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const { data: attempt, error: attemptError } =
        await supabase
          .from("chapter_test_attempts")
          .select("id, status, expires_at")
          .eq("id", attemptId)
          .single();

      if (attemptError) {
        throw attemptError;
      }

      if (attempt.status !== "in_progress") {
        router.replace("/student/dashboard");
        return;
      }

      const { error: snapshotError } = await supabase.rpc(
        "initialize_student_exam_snapshot",
        {
          p_attempt_id: attemptId,
        }
      );

      if (snapshotError) {
        throw snapshotError;
      }

      const { data, error: questionError } =
        await supabase.rpc("get_student_exam_questions", {
          p_attempt_id: attemptId,
        });

      if (questionError) {
        throw questionError;
      }

      if (!data || data.length === 0) {
        throw new Error(
          "Is exam mein abhi questions available nahi hain."
        );
      }

      const loadedQuestions = data as ExamQuestion[];

      setQuestions(loadedQuestions);

      const restoredAnswers: Record<string, string> = {};

      for (const question of loadedQuestions) {
        restoredAnswers[question.question_id] = answerToText(
          question.student_answer
        );
      }

      setAnswers(restoredAnswers);

      if (attempt.expires_at) {
        const remaining = Math.max(
          0,
          Math.floor(
            (new Date(attempt.expires_at).getTime() - Date.now()) /
              1000
          )
        );

        setSecondsLeft(remaining);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Exam load nahi ho saka."
      );
    } finally {
      setLoading(false);
    }
  }, [attemptId, router, supabase]);

  useEffect(() => {
    if (attemptId) {
      loadExam();
    }
  }, [attemptId, loadExam]);

  const saveAnswer = async (
    questionId: string,
    answer: string
  ): Promise<boolean> => {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const { error: saveError } = await supabase.rpc(
        "save_student_exam_answer",
        {
          p_attempt_id: attemptId,
          p_question_id: questionId,
          p_student_answer: answer,
        }
      );

      if (saveError) {
        throw saveError;
      }

      setMessage("Answer successfully save ho gaya.");
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Answer save nahi ho saka."
      );

      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateAnswer = async (
    questionId: string,
    answer: string
  ) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));

    await saveAnswer(questionId, answer);
  };

  const saveAllAnswers = useCallback(async (): Promise<boolean> => {
    setSaving(true);
    setError("");
    setMessage("");

    try {
      for (const question of questions) {
        const answer = answers[question.question_id] || "";

        const { error: saveError } = await supabase.rpc(
          "save_student_exam_answer",
          {
            p_attempt_id: attemptId,
            p_question_id: question.question_id,
            p_student_answer: answer,
          }
        );

        if (saveError) {
          throw saveError;
        }
      }

      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Answers save nahi ho sake."
      );

      return false;
    } finally {
      setSaving(false);
    }
  }, [answers, attemptId, questions, supabase]);

  const submitExam = useCallback(async () => {
    if (submitting || result) {
      return;
    }

    setSubmitting(true);
    setError("");
    setMessage("");

    try {
      if (secondsLeft !== 0) {
        const saved = await saveAllAnswers();

        if (!saved) {
          setSubmitting(false);
          return;
        }
      }

      const { data, error: submitError } = await supabase.rpc(
        "submit_student_exam",
        {
          p_attempt_id: attemptId,
        }
      );

      if (submitError) {
        throw submitError;
      }

      if (Array.isArray(data)) {
        setResult(data[0] as ExamResult);
      } else {
        setResult(data as ExamResult);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Exam submit nahi ho saka."
      );
    } finally {
      setSubmitting(false);
    }
  }, [
    attemptId,
    result,
    saveAllAnswers,
    secondsLeft,
    submitting,
    supabase,
  ]);

  useEffect(() => {
    if (secondsLeft === null || result || submitting) {
      return;
    }

    if (secondsLeft <= 0) {
      submitExam();
      return;
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft((previous) =>
        previous === null
          ? null
          : Math.max(0, previous - 1)
      );
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [secondsLeft, result, submitting, submitExam]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":");
  };

  const getOptions = (
    options: ExamQuestion["options"]
  ): { key: string; label: string }[] => {
    if (!options) {
      return [];
    }

    if (Array.isArray(options)) {
      return options.map((option, index) => ({
        key: String.fromCharCode(65 + index),
        label: String(option),
      }));
    }

    return Object.entries(options).map(([key, label]) => ({
      key,
      label: String(label),
    }));
  };

  if (loading) {
    return <ExamLoading />;
  }

  if (error && questions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
        <div className="w-full max-w-lg rounded-3xl border border-red-500/30 bg-slate-900 p-8 text-center">
          <h1 className="mb-3 text-2xl font-bold text-white">
            Exam unavailable
          </h1>

          <p className="mb-6 text-red-300">{error}</p>

          <button
            onClick={() => router.push("/student/dashboard")}
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white"
          >
            Dashboard
          </button>
        </div>
      </main>
    );
  }

  if (result) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center">
          <div className="mb-5 text-5xl">
            {result.passed ? "🏆" : "📚"}
          </div>

          <h1 className="mb-3 text-3xl font-bold">
            {result.passed ? "Congratulations!" : "Keep Learning!"}
          </h1>

          <p className="mb-8 text-slate-400">
            Aapka exam successfully check ho gaya hai.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Obtained Marks
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {result.obtained_marks}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Total Marks
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {result.total_marks}
              </p>
            </div>

            <div className="col-span-2 rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Your Percentage
              </p>

              <p className="mt-2 text-5xl font-bold text-purple-400">
                {result.percentage}%
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Passing percentage: {result.passing_percentage}%
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-800 p-4">
            <p className="font-semibold">
              {result.passed
                ? "You have passed this examination."
                : "You have not passed this examination. You can prepare and try again."}
            </p>
          </div>

          <button
            onClick={() => router.push("/student/dashboard")}
            className="mt-8 w-full rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white hover:bg-purple-700"
          >
            Back to Student Dashboard
          </button>
        </div>
      </main>
    );
  }

  const question = questions[currentIndex];

  if (!question) {
    return null;
  }

  const options = getOptions(question.options);

  const answeredCount = Object.values(answers).filter(
    (value) => value.trim().length > 0
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-purple-400">
              PAKISTAN LEARNING ACADEMY
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Online Examination
            </h1>
          </div>

          {secondsLeft !== null && (
            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-5 py-3">
              <p className="text-xs text-slate-400">
                Time Remaining
              </p>

              <p className="font-mono text-2xl font-bold text-purple-300">
                {formatTime(secondsLeft)}
              </p>
            </div>
          )}
        </header>

        <div className="mb-6 flex flex-wrap justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-sm text-slate-400">
              Question Progress
            </p>

            <p className="mt-1 font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Answered
            </p>

            <p className="mt-1 font-semibold">
              {answeredCount} / {questions.length}
            </p>
          </div>
        </div>

        <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-purple-500 transition-all"
            style={{
              width: `${
                ((currentIndex + 1) / questions.length) * 100
              }%`,
            }}
          />
        </div>

        <section className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-9">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-purple-500/15 px-4 py-2 text-sm font-semibold text-purple-300">
              {question.question_type.toUpperCase()}
            </span>

            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
              {question.marks} Marks
            </span>
          </div>

          <h2 className="mb-4 text-xl font-semibold leading-relaxed md:text-2xl">
            {question.question}
          </h2>

          {question.question_urdu && (
            <p
              dir="rtl"
              className="mb-8 text-right text-xl leading-loose text-slate-300"
            >
              {question.question_urdu}
            </p>
          )}

          {question.youtube_url && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-800 p-4">
              <p className="mb-3 font-semibold text-purple-300">
                {question.video_title || "Question Video"}
              </p>

              <a
                href={question.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 underline"
              >
                Watch learning video
              </a>
            </div>
          )}

          {question.question_type === "mcq" && (
            <div className="space-y-3">
              {options.map((option) => {
                const selected =
                  answers[question.question_id] === option.key;

                return (
                  <button
                    key={option.key}
                    disabled={submitting}
                    onClick={() =>
                      updateAnswer(question.question_id, option.key)
                    }
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                      selected
                        ? "border-purple-500 bg-purple-500/15"
                        : "border-white/10 bg-slate-800 hover:border-purple-400/50"
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-700 font-bold">
                      {option.key}
                    </span>

                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {question.question_type === "short" && (
            <textarea
              value={answers[question.question_id] || ""}
              disabled={submitting}
              onChange={(event) =>
                setAnswers((previous) => ({
                  ...previous,
                  [question.question_id]: event.target.value,
                }))
              }
              onBlur={() =>
                saveAnswer(
                  question.question_id,
                  answers[question.question_id] || ""
                )
              }
              rows={4}
              placeholder="Apna short answer yahan likhein..."
              className="w-full rounded-2xl border border-white/10 bg-slate-800 p-5 text-white outline-none focus:border-purple-500"
            />
          )}

          {question.question_type === "long" && (
            <textarea
              value={answers[question.question_id] || ""}
              disabled={submitting}
              onChange={(event) =>
                setAnswers((previous) => ({
                  ...previous,
                  [question.question_id]: event.target.value,
                }))
              }
              onBlur={() =>
                saveAnswer(
                  question.question_id,
                  answers[question.question_id] || ""
                )
              }
              rows={9}
              placeholder="Apna detailed answer yahan likhein..."
              className="w-full rounded-2xl border border-white/10 bg-slate-800 p-5 text-white outline-none focus:border-purple-500"
            />
          )}

          {saving && (
            <p className="mt-4 text-sm text-purple-300">
              Saving answer...
            </p>
          )}

          {message && (
            <p className="mt-4 text-sm text-green-400">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}
        </section>

        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <button
            disabled={currentIndex === 0 || submitting}
            onClick={() =>
              setCurrentIndex((value) => value - 1)
            }
            className="rounded-xl border border-white/10 px-6 py-3 disabled:opacity-30"
          >
            Previous
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              disabled={submitting}
              onClick={() =>
                setCurrentIndex((value) => value + 1)
              }
              className="rounded-xl bg-purple-600 px-7 py-3 font-semibold hover:bg-purple-700 disabled:opacity-50"
            >
              Next Question
            </button>
          ) : (
            <button
              disabled={submitting || saving}
              onClick={() => {
                if (
                  window.confirm(
                    "Kya aap apna exam submit karna chahte hain? Submit hone ke baad answers change nahi honge."
                  )
                ) {
                  submitExam();
                }
              }}
              className="rounded-xl bg-green-600 px-7 py-3 font-semibold hover:bg-green-700 disabled:opacity-50"
            >
              {submitting ? "Checking Exam..." : "Submit Exam"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default function StudentExamPage() {
  return (
    <Suspense fallback={<ExamLoading />}>
      <StudentExamContent />
    </Suspense>
  );
}
