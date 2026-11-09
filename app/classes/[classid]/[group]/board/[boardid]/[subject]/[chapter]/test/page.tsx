
"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Loader2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type QuestionType = "mcq" | "short" | "long";

type ChapterQuestion = {
  id: string;
  class_level: string;
  group_slug: string;
  board_id: string | null;
  subject_slug: string;
  chapter_slug: string;
  question_type: QuestionType;
  question: string;
  question_urdu: string | null;
  options: string[] | null;
  correct_answer: string | null;
  explanation: string | null;
  explanation_urdu: string | null;
  marks: number;
  model_answer: string | null;
  model_answer_urdu: string | null;
  sort_order: number;
  is_published: boolean;
};

type WrittenAnswers = Record<string, string>;
type McqAnswers = Record<string, string>;

function readableName(value: string) {
  return decodeURIComponent(value)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function ChapterTestLoading() {
  return (
    <main className="min-h-screen bg-[#f4f7f6] px-5 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <Loader2
          className="mx-auto animate-spin text-emerald-600"
          size={38}
        />
        <p className="mt-4 font-bold text-slate-700">
          Loading chapter test...
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Please wait.
        </p>
      </div>
    </main>
  );
}

function ChapterTestContent() {
  const params = useParams<{
    classid: string;
    group: string;
    boardid: string;
    subject: string;
    chapter: string;
  }>();

  const classid = params.classid;
  const group = params.group;
  const boardid = params.boardid;
  const subject = params.subject;
  const chapter = params.chapter;

  const supabase = useMemo(() => createClient(), []);

  const [questions, setQuestions] = useState<ChapterQuestion[]>([]);
  const [studentName, setStudentName] = useState("");
  const [mcqAnswers, setMcqAnswers] = useState<McqAnswers>({});
  const [writtenAnswers, setWrittenAnswers] = useState<WrittenAnswers>({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadQuestions() {
      setLoading(true);
      setError("");

      const { data, error: queryError } = await supabase
        .from("chapter_questions")
        .select("*")
        .eq("class_level", classid)
        .eq("group_slug", group)
        .eq("subject_slug", subject)
        .eq("chapter_slug", chapter)
        .eq("is_published", true)
        .or(`board_id.is.null,board_id.eq.${boardid}`)
        .order("sort_order", { ascending: true });

      if (!active) return;

      if (queryError) {
        setError(
          "Questions load nahi ho sake. Supabase connection aur database policies check karein."
        );
        setQuestions([]);
        setLoading(false);
        return;
      }

      const rows = (data || []) as ChapterQuestion[];

      rows.sort((a, b) => {
        const aSpecific = a.board_id === boardid ? 0 : 1;
        const bSpecific = b.board_id === boardid ? 0 : 1;

        return aSpecific - bSpecific || a.sort_order - b.sort_order;
      });

      setQuestions(rows);
      setLoading(false);
    }

    loadQuestions();

    return () => {
      active = false;
    };
  }, [supabase, classid, group, boardid, subject, chapter]);

  const mcqs = questions.filter(
    (question) => question.question_type === "mcq"
  );

  const shortQuestions = questions.filter(
    (question) => question.question_type === "short"
  );

  const longQuestions = questions.filter(
    (question) => question.question_type === "long"
  );

  const totalMcqMarks = mcqs.reduce(
    (sum, question) => sum + question.marks,
    0
  );

  const mcqScore = mcqs.reduce((sum, question) => {
    const correct =
      mcqAnswers[question.id] === question.correct_answer;

    return sum + (correct ? question.marks : 0);
  }, 0);

  const mcqPercentage =
    totalMcqMarks > 0
      ? Math.round((mcqScore / totalMcqMarks) * 100)
      : 0;

  const answeredMcqs = mcqs.filter(
    (question) => Boolean(mcqAnswers[question.id])
  ).length;

  const backUrl =
    `/classes/${classid}/${group}/board/${boardid}/${subject}/${chapter}`;

  const className = `Class ${classid}`;
  const groupName = readableName(group);
  const boardName = readableName(boardid);
  const subjectName = readableName(subject);
  const chapterName = readableName(chapter);

  function startTest() {
    if (!studentName.trim()) return;
    setStarted(true);
  }

  function submitTest() {
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function retakeTest() {
    setMcqAnswers({});
    setWrittenAnswers({});
    setSubmitted(false);
    setStarted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function updateMcq(questionId: string, answer: string) {
    if (submitted) return;

    setMcqAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  }

  function updateWritten(questionId: string, answer: string) {
    if (submitted) return;

    setWrittenAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  }

  return (
    <main className="min-h-screen bg-[#f4f7f6] text-slate-800">
      <section className="bg-[#071b2b] px-5 py-10 text-white md:py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href={backUrl}
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Chapter
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
              <BookOpen size={27} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Pakistan Learning Academy
              </p>

              <p className="mt-1 text-sm text-slate-300">
                {className} · {groupName} · {subjectName}
              </p>
            </div>
          </div>

          <h1 className="mt-7 text-3xl font-black md:text-4xl">
            Chapter Test
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {chapterName} — Comprehensive Practice Assessment
          </p>

          <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["MCQs", String(mcqs.length)],
              ["Short Questions", String(shortQuestions.length)],
              ["Long Questions", String(longQuestions.length)],
              ["MCQ Marks", String(totalMcqMarks)],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-1 text-lg font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-9">
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <Loader2
              className="mx-auto animate-spin text-emerald-600"
              size={38}
            />
            <p className="mt-4 font-bold text-slate-700">
              Loading chapter questions...
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Please wait.
            </p>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-white p-7 text-center">
            <XCircle className="mx-auto text-rose-600" size={36} />
            <h2 className="mt-4 text-xl font-black text-slate-900">
              Unable to load test
            </h2>
            <p className="mt-2 text-sm text-slate-600">{error}</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <CircleHelp
              className="mx-auto text-emerald-600"
              size={42}
            />

            <h2 className="mt-4 text-2xl font-black text-slate-900">
              Test Coming Soon
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Is chapter ke liye abhi published questions available nahi
              hain. Admin panel mein is class, board, subject aur chapter
              ke questions add aur publish hone ke baad yahan test nazar
              aayega.
            </p>

            <Link
              href={backUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-[#071b2b] hover:bg-emerald-400"
            >
              <ArrowLeft size={17} />
              Back to Chapter
            </Link>
          </div>
        ) : !started ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Trophy size={28} />
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              Student Details
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Test start karne se pehle apna naam enter karein.
            </p>

            <label
              htmlFor="student-name"
              className="mt-6 block text-sm font-bold text-slate-700"
            >
              Student Full Name
            </label>

            <input
              id="student-name"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
              maxLength={60}
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              <p><strong>Class:</strong> {className}</p>
              <p><strong>Board:</strong> {boardName}</p>
              <p><strong>Group:</strong> {groupName}</p>
              <p><strong>Subject:</strong> {subjectName}</p>
              <p><strong>Chapter:</strong> {chapterName}</p>
              <p><strong>Total questions:</strong> {questions.length}</p>
            </div>

            <button
              type="button"
              onClick={startTest}
              disabled={!studentName.trim()}
              className="mt-6 w-full rounded-xl bg-emerald-500 px-6 py-4 font-extrabold text-[#071b2b] hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              Start Chapter Test
            </button>
          </div>
        ) : (
          <>
            <div className="mb-7 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              <strong>Assessment information:</strong> MCQs are marked
              automatically. Short and long answers are saved on this page
              during the test and shown for review after submission. They
              are not automatically graded or included in the MCQ score.
              Written answers require teacher assessment.
            </div>

            {mcqs.length > 0 && (
              <div id="mcq-section" className="mb-10 scroll-mt-5">
                <div className="mb-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                      Section A
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-900">
                      Multiple Choice Questions
                    </h2>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    {totalMcqMarks} marks
                  </span>
                </div>

                <div className="space-y-4">
                  {mcqs.map((item, index) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-4 flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#071b2b] text-sm font-black text-emerald-300">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="font-bold leading-6 text-slate-900">
                            {item.question}
                          </h3>

                          {item.question_urdu && (
                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {item.question_urdu}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {(item.options || []).map((option, optionIndex) => {
                          const selected =
                            mcqAnswers[item.id] === option;

                          const correct =
                            submitted && option === item.correct_answer;

                          const wrong =
                            submitted &&
                            selected &&
                            option !== item.correct_answer;

                          return (
                            <button
                              key={`${item.id}-${optionIndex}`}
                              type="button"
                              onClick={() => updateMcq(item.id, option)}
                              disabled={submitted}
                              className={`rounded-xl border p-3 text-left text-sm font-semibold transition ${
                                correct
                                  ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                                  : wrong
                                  ? "border-rose-400 bg-rose-50 text-rose-900"
                                  : selected
                                  ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300"
                              }`}
                            >
                              <span className="mr-2 font-black">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              {option}
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6">
                          <p className="font-bold text-emerald-800">
                            Correct answer: {item.correct_answer || "Not configured"}
                          </p>

                          {item.explanation && (
                            <p className="mt-2 text-slate-600">
                              {item.explanation}
                            </p>
                          )}

                          {item.explanation_urdu && (
                            <p className="mt-1 text-slate-500">
                              {item.explanation_urdu}
                            </p>
                          )}
                        </div>
                      )}

                      <p className="mt-3 text-right text-xs font-semibold text-slate-400">
                        {item.marks} marks
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {shortQuestions.length > 0 && (
              <div className="mb-10">
                <div className="mb-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-sky-700">
                      Section B
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-900">
                      Short Questions
                    </h2>
                  </div>

                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                    {shortQuestions.reduce((sum, q) => sum + q.marks, 0)} marks
                  </span>
                </div>

                <div className="space-y-4">
                  {shortQuestions.map((item, index) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-bold leading-6 text-slate-900">
                        {index + 1}. {item.question}
                      </h3>

                      {item.question_urdu && (
                        <p className="mt-1 text-sm text-slate-500">
                          {item.question_urdu}
                        </p>
                      )}

                      <textarea
                        value={writtenAnswers[item.id] || ""}
                        onChange={(event) =>
                          updateWritten(item.id, event.target.value)
                        }
                        disabled={submitted}
                        rows={4}
                        placeholder="Write your answer in English or Urdu..."
                        className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 disabled:opacity-70"
                      />

                      {submitted && (
                        <div className="mt-4 rounded-xl bg-sky-50 p-4">
                          <p className="text-xs font-black uppercase text-sky-800">
                            Model Answer
                          </p>

                          {item.model_answer && (
                            <p className="mt-2 text-sm leading-6 text-slate-700">
                              {item.model_answer}
                            </p>
                          )}

                          {item.model_answer_urdu && (
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {item.model_answer_urdu}
                            </p>
                          )}

                          <p className="mt-3 text-xs font-bold text-sky-800">
                            {item.marks} marks · Teacher review required
                          </p>
                        </div>
                      )}

                      <p className="mt-2 text-right text-xs font-semibold text-slate-400">
                        {item.marks} marks
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {longQuestions.length > 0 && (
              <div className="mb-10">
                <div className="mb-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-violet-700">
                      Section C
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-900">
                      Long Questions
                    </h2>
                  </div>

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                    {longQuestions.reduce((sum, q) => sum + q.marks, 0)} marks
                  </span>
                </div>

                <div className="space-y-4">
                  {longQuestions.map((item, index) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-bold leading-6 text-slate-900">
                        {index + 1}. {item.question}
                      </h3>

                      {item.question_urdu && (
                        <p className="mt-1 text-sm text-slate-500">
                          {item.question_urdu}
                        </p>
                      )}

                      <textarea
                        value={writtenAnswers[item.id] || ""}
                        onChange={(event) =>
                          updateWritten(item.id, event.target.value)
                        }
                        disabled={submitted}
                        rows={7}
                        placeholder="Write a detailed answer in English or Urdu..."
                        className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 disabled:opacity-70"
                      />

                      {submitted && (
                        <div className="mt-4 rounded-xl bg-violet-50 p-4">
                          <p className="text-xs font-black uppercase text-violet-800">
                            Model Answer
                          </p>

                          {item.model_answer && (
                            <p className="mt-2 text-sm leading-7 text-slate-700">
                              {item.model_answer}
                            </p>
                          )}

                          {item.model_answer_urdu && (
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {item.model_answer_urdu}
                            </p>
                          )}

                          <p className="mt-3 text-xs font-bold text-violet-800">
                            {item.marks} marks · Teacher review required
                          </p>
                        </div>
                      )}

                      <p className="mt-2 text-right text-xs font-semibold text-slate-400">
                        {item.marks} marks
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {!submitted ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm leading-6 text-slate-600">
                  MCQs answered:{" "}
                  <strong>
                    {answeredMcqs}/{mcqs.length}
                  </strong>
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Written answers teacher review ke liye submit hongay.
                  MCQ result alag calculate hoga.
                </p>

                <button
                  type="button"
                  onClick={submitTest}
                  className="mt-5 w-full rounded-xl bg-emerald-500 px-6 py-4 font-extrabold text-[#071b2b] hover:bg-emerald-400"
                >
                  Submit Test & View Result
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-600" size={27} />
                  <h2 className="text-xl font-black text-slate-900">
                    Test Submitted
                  </h2>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Aapke MCQs check ho gaye hain. Written answers ke marks
                  teacher review ke baad hi final honge.
                </p>

                <div className="mt-5 rounded-2xl bg-emerald-50 p-6 text-center">
                  <p className="text-sm font-bold text-emerald-800">
                    MCQ Practice Score
                  </p>

                  <p className="mt-2 text-5xl font-black text-slate-900">
                    {mcqPercentage}%
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    {mcqScore} / {totalMcqMarks} marks
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm font-bold text-slate-700">
                      Written questions
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {shortQuestions.length + longQuestions.length} answers
                      require teacher review.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm font-bold text-slate-700">
                      Student
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {studentName}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={retakeTest}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071b2b] px-5 py-4 font-bold text-white hover:bg-slate-800"
                >
                  <RotateCcw size={18} />
                  Retake Test
                </button>

                <Link
                  href={backUrl}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100"
                >
                  <ArrowLeft size={17} />
                  Back to Chapter
                </Link>
              </div>
            )}
          </>
        )}
      </section>

      <footer className="px-5 pb-8 text-center text-xs leading-6 text-slate-400">
        Practice assessment by Pakistan Learning Academy.
        Written answers require teacher assessment. This is not an
        official board examination result.
      </footer>
    </main>
  );
}

export default function ChapterTestPage() {
  return (
    <Suspense fallback={<ChapterTestLoading />}>
      <ChapterTestContent />
    </Suspense>
  );
}
