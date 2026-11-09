
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "My Certificates | Pakistan Learning Academy",
  description:
    "View your earned Pakistan Learning Academy examination certificates.",
  robots: {
    index: false,
    follow: false,
  },
};

type Certificate = {
  id: string;
  student_name: string;
  book_title: string | null;
  exam_title: string;
  exam_type: string;
  certificate_type: string;
  stage_number: number | null;
  total_marks: number;
  obtained_marks: number;
  percentage: number;
  verification_code: string;
  issued_at: string;
  is_revoked: boolean;
};

const examLabels: Record<string, string> = {
  chapter: "Chapter Test",
  combined: "Combined Test",
  half_book: "Half Book Examination",
  final: "Full Book Final Examination",
};

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently issued";
  }

  return date.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function CertificatesLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-purple-500/20 border-t-purple-400" />
        <h1 className="mt-5 text-xl font-bold">
          Loading Your Certificates
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Please wait while we securely load your academic records.
        </p>
      </div>
    </main>
  );
}

async function CertificatesContent() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/student/login");
  }

  const { data: certificates, error } = await supabase
    .from("academic_certificates")
    .select(`
      id,
      student_name,
      book_title,
      exam_title,
      exam_type,
      certificate_type,
      stage_number,
      total_marks,
      obtained_marks,
      percentage,
      verification_code,
      issued_at,
      is_revoked
    `)
    .eq("student_id", user.id)
    .order("issued_at", { ascending: false });

  if (error) {
    console.error("Certificate loading error:", error);

    return (
      <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <h1 className="text-2xl font-bold">
            Certificates Could Not Be Loaded
          </h1>
          <p className="mt-3 text-sm text-red-200">
            Please try again later. If the issue continues, contact the
            Academy administrator.
          </p>
          <Link
            href="/student/dashboard"
            className="mt-6 inline-block font-semibold text-purple-300"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const items = (certificates || []) as Certificate[];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-wider text-purple-400">
              PAKISTAN LEARNING ACADEMY
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">
              My Certificates
            </h1>
            <p className="mt-2 text-slate-400">
              Your earned academic achievement records.
            </p>
          </div>

          <Link
            href="/student/dashboard"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Back to Dashboard
          </Link>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Total Certificates
            </p>
            <p className="mt-2 text-3xl font-bold text-purple-400">
              {items.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Active Certificates
            </p>
            <p className="mt-2 text-3xl font-bold text-green-400">
              {items.filter((item) => !item.is_revoked).length}
            </p>
          </div>
        </section>

        {items.length === 0 ? (
          <section className="rounded-3xl border border-white/10 bg-slate-900 px-6 py-16 text-center">
            <div className="mb-5 text-5xl">🏆</div>
            <h2 className="text-2xl font-bold">
              Your Certificates Will Appear Here
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
              Jab aap kisi examination mein required passing percentage
              hasil karenge, aapka eligible Academy certificate yahan
              available hoga.
            </p>
            <Link
              href="/student/exams"
              className="mt-7 inline-flex rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
            >
              Visit Examination Centre
            </Link>
          </section>
        ) : (
          <section className="space-y-5">
            {items.map((certificate) => (
              <article
                key={certificate.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
              >
                <div className="border-b border-white/10 bg-gradient-to-r from-purple-950 to-slate-900 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-200">
                      {certificate.certificate_type === "book_completion"
                        ? "BOOK COMPLETION CERTIFICATE"
                        : "ACADEMY ACHIEVEMENT CERTIFICATE"}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        certificate.is_revoked
                          ? "bg-red-500/20 text-red-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {certificate.is_revoked ? "REVOKED" : "ACTIVE"}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    {certificate.exam_title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-300">
                    {certificate.book_title || "Academy Examination"}
                  </p>
                </div>

                <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-xs text-slate-400">Student</p>
                    <p className="mt-1 font-semibold">
                      {certificate.student_name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Exam Type</p>
                    <p className="mt-1 font-semibold">
                      {examLabels[certificate.exam_type] ||
                        certificate.exam_type}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Marks Obtained</p>
                    <p className="mt-1 font-semibold">
                      {certificate.obtained_marks} / {certificate.total_marks}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Percentage</p>
                    <p className="mt-1 text-xl font-bold text-green-400">
                      {Number(certificate.percentage).toFixed(2)}%
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-5">
                  <div>
                    <p className="text-xs text-slate-400">
                      Issued on {formatDate(certificate.issued_at)}
                    </p>
                    <p className="mt-2 break-all font-mono text-sm text-purple-300">
                      {certificate.verification_code}
                    </p>
                  </div>

                  <Link
                    href={`/verify-certificate/${encodeURIComponent(
                      certificate.verification_code
                    )}`}
                    className="rounded-xl border border-purple-400/40 px-4 py-3 text-sm font-semibold text-purple-300 hover:bg-purple-500/10"
                  >
                    Verify Certificate →
                  </Link>
                </div>
              </article>
            ))}
          </section>
        )}

        <p className="mt-10 text-center text-xs leading-6 text-slate-500">
          Pakistan Learning Academy certificates are Academy-issued
          educational achievement records. They are not government-issued
          or board-issued qualifications.
        </p>
      </div>
    </main>
  );
}

export default function StudentCertificatesPage() {
  return (
    <Suspense fallback={<CertificatesLoading />}>
      <CertificatesContent />
    </Suspense>
  );
}
