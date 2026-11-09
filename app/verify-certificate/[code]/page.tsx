
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Verify Certificate | Pakistan Learning Academy",
  description:
    "Verify the authenticity of a Pakistan Learning Academy certificate.",
  robots: {
    index: false,
    follow: false,
  },
};

type CertificateResult = {
  verification_code: string;
  student_name: string;
  board_id: string | null;
  class_level: string | null;
  group_slug: string | null;
  subject_slug: string | null;
  book_title: string | null;
  exam_title: string;
  exam_type: string;
  certificate_type: string;
  total_marks: number;
  obtained_marks: number;
  percentage: number;
  issued_at: string;
  is_revoked: boolean;
};

type PageProps = {
  params: Promise<{ code: string }>;
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function CertificateLoading() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white md:px-8">
      <div className="mx-auto max-w-3xl animate-pulse">
        <header className="mb-10 text-center">
          <div className="mx-auto h-4 w-64 rounded bg-slate-800" />
          <div className="mx-auto mt-5 h-10 w-80 max-w-full rounded bg-slate-800" />
          <div className="mx-auto mt-4 h-4 w-96 max-w-full rounded bg-slate-800" />
        </header>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8">
          <div className="mx-auto h-16 w-16 rounded-full bg-slate-800" />
          <div className="mx-auto mt-5 h-6 w-64 max-w-full rounded bg-slate-800" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <div className="h-3 w-24 rounded bg-slate-800" />
                <div className="mt-3 h-5 w-40 max-w-full rounded bg-slate-800" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

async function CertificateVerificationContent({ params }: PageProps) {
  await connection();

  const { code } = await params;
  const verificationCode = decodeURIComponent(code).trim().toUpperCase();

  const supabase = await createClient();

  let certificate: CertificateResult | null = null;
  let verificationError = false;

  if (verificationCode) {
    const { data, error } = await supabase.rpc(
      "verify_academic_certificate",
      {
        p_verification_code: verificationCode,
      }
    );

    if (error) {
      verificationError = true;
    } else {
      const result = Array.isArray(data) ? data[0] : data;
      certificate = (result || null) as CertificateResult | null;
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white md:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-purple-400">
            PAKISTAN LEARNING ACADEMY
          </p>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Certificate Verification
          </h1>

          <p className="mt-3 text-slate-400">
            Official verification portal for Academy-issued certificates.
          </p>
        </header>

        {verificationError ? (
          <section className="rounded-2xl border border-red-500/30 bg-red-500/10 p-7 text-center">
            <h2 className="text-xl font-bold text-red-300">
              Verification Service Unavailable
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The verification service could not process this request.
              Please try again later.
            </p>
          </section>
        ) : certificate ? (
          <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <div
              className={`p-7 text-center ${
                certificate.is_revoked
                  ? "bg-red-950/60"
                  : "bg-emerald-950/50"
              }`}
            >
              <div className="mb-4 text-5xl">
                {certificate.is_revoked ? "⚠️" : "✓"}
              </div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-wider ${
                  certificate.is_revoked
                    ? "bg-red-500/20 text-red-300"
                    : "bg-emerald-500/20 text-emerald-300"
                }`}
              >
                {certificate.is_revoked
                  ? "CERTIFICATE REVOKED"
                  : "CERTIFICATE VERIFIED"}
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                {certificate.is_revoked
                  ? "This Certificate Is No Longer Valid"
                  : "Authentic Academy Certificate"}
              </h2>

              <p className="mt-3 text-sm text-slate-300">
                {certificate.is_revoked
                  ? "The Academy has revoked this certificate."
                  : "The supplied verification code matches an Academy certificate record."}
              </p>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <div className="text-center">
                <p className="text-xs font-semibold tracking-wider text-slate-400">
                  CERTIFICATE HOLDER
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {certificate.student_name}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-slate-400">Certificate Title</p>
                  <p className="mt-1 font-semibold">
                    {certificate.exam_title}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Book</p>
                  <p className="mt-1 font-semibold">
                    {certificate.book_title || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Class</p>
                  <p className="mt-1 font-semibold">
                    {certificate.class_level || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Group</p>
                  <p className="mt-1 font-semibold">
                    {certificate.group_slug || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Subject</p>
                  <p className="mt-1 font-semibold">
                    {certificate.subject_slug || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Board</p>
                  <p className="mt-1 font-semibold">
                    {certificate.board_id || "Not specified"}
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
                  <p className="mt-1 text-xl font-bold text-emerald-400">
                    {Number(certificate.percentage).toFixed(2)}%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Issue Date</p>
                  <p className="mt-1 font-semibold">
                    {formatDate(certificate.issued_at)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Exam Type</p>
                  <p className="mt-1 font-semibold">
                    {certificate.exam_type.replaceAll("_", " ")}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950 p-4">
                <p className="text-xs text-slate-400">
                  VERIFICATION CODE
                </p>
                <p className="mt-2 break-all font-mono font-bold text-purple-300">
                  {certificate.verification_code}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 text-center">
            <div className="mb-4 text-5xl">🔍</div>

            <h2 className="text-2xl font-bold">
              Certificate Not Found
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              No certificate record matches this verification code.
              Please check the code and try again.
            </p>

            <p className="mt-5 break-all rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
              {verificationCode || "No code supplied"}
            </p>
          </section>
        )}

        <footer className="mt-8 text-center">
          <p className="text-xs leading-6 text-slate-500">
            These are educational achievement certificates issued by
            Pakistan Learning Academy. They are not government-issued
            or board-issued qualifications.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block font-semibold text-purple-300 hover:text-purple-200"
          >
            ← Back to Academy Homepage
          </Link>
        </footer>
      </div>
    </main>
  );
}

export default function VerifyCertificatePage({ params }: PageProps) {
  return (
    <Suspense fallback={<CertificateLoading />}>
      <CertificateVerificationContent params={params} />
    </Suspense>
  );
}
