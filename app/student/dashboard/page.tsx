
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "../logout-button";

export const metadata: Metadata = {
  title: "Student Dashboard | Pakistan Learning Academy",
  description:
    "Access your student profile and learning dashboard at Pakistan Learning Academy.",
  robots: {
    index: false,
    follow: false,
  },
};

function DashboardLoading() {
  return (
    <main className="student-dashboard-page">
      <section className="student-dashboard-content">
        <div className="student-dashboard-welcome">
          <span className="student-auth-label">STUDENT PORTAL</span>
          <h1>Loading your dashboard...</h1>
          <p>Please wait while we load your student account.</p>
        </div>
      </section>
    </main>
  );
}

async function StudentDashboardContent() {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/student/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("student_profiles")
    .select("full_name, display_name, leaderboard_opt_in")
    .eq("user_id", user.id)
    .maybeSingle();

  const studentName = profile?.full_name || "Student";
  const displayName = profile?.display_name || studentName;

  return (
    <main className="student-dashboard-page">
      <header className="student-dashboard-header">
        <Link href="/" className="student-auth-brand">
          Pakistan Learning Academy
        </Link>

        <div className="student-dashboard-header-actions">
          <Link
            href="/student/profile"
            className="student-dashboard-home-link"
          >
            Profile Settings
          </Link>

          <Link href="/" className="student-dashboard-home-link">
            Visit Website
          </Link>

          <LogoutButton />
        </div>
      </header>

      <section className="student-dashboard-content">
        <div className="student-dashboard-welcome">
          <span className="student-auth-label">STUDENT PORTAL</span>
          <h1>Welcome, {studentName}!</h1>
          <p>
            Your learning journey starts here. Keep studying, practise
            regularly, and work towards your academic goals.
          </p>
        </div>

        {profileError || !profile ? (
          <div className="student-dashboard-notice" role="status">
            Your student profile could not be loaded. Please contact the
            Academy administrator for assistance.
          </div>
        ) : (
          <section className="student-profile-card">
            <div>
              <span className="student-dashboard-card-label">
                YOUR STUDENT PROFILE
              </span>
              <h2>{displayName}</h2>
              <p>{user.email}</p>
            </div>

            <div className="student-profile-status">
              <span>Account Status</span>
              <strong>Logged In</strong>
            </div>
          </section>
        )}

        <div className="student-dashboard-section-heading">
          <div>
            <span className="student-auth-label">YOUR LEARNING SPACE</span>
            <h2>Student Dashboard</h2>
          </div>
        </div>

        <div className="student-dashboard-grid">
          <article className="student-dashboard-card">
            <span className="student-dashboard-card-icon">📚</span>
            <h3>Study Materials</h3>
            <p>
              Explore class-wise subjects, chapters, notes, and educational
              resources.
            </p>
            <Link href="/classes" className="student-dashboard-link">
              Explore Classes →
            </Link>
          </article>

          <article className="student-dashboard-card">
            <span className="student-dashboard-card-icon">📝</span>
            <h3>Chapter Tests & Examinations</h3>
            <p>
              Attempt chapter tests, combined tests, half-book examinations,
              and full-book final examinations.
            </p>
            <Link
              href="/student/exams"
              className="student-dashboard-link"
            >
              Open Examination Centre →
            </Link>
          </article>

          <article className="student-dashboard-card">
            <span className="student-dashboard-card-icon">🏆</span>
            <h3>Certificates</h3>
            <p>
              View your earned certificates, examination marks, percentages,
              and public verification codes.
            </p>
            <Link
              href="/student/certificates"
              className="student-dashboard-link"
            >
              View My Certificates →
            </Link>
          </article>

          <article className="student-dashboard-card">
            <span className="student-dashboard-card-icon">📊</span>
            <h3>Learning Progress</h3>
            <p>
              Track passed examination stages, latest results, marks,
              and your next academic milestones.
            </p>
            <Link
              href="/student/progress"
              className="student-dashboard-link"
            >
              View Learning Progress →
            </Link>
          </article>
        </div>

        <section className="student-dashboard-privacy">
          <h3>Leaderboard Privacy</h3>
          <p>
            Your leaderboard visibility is currently{" "}
            <strong>
              {profile?.leaderboard_opt_in ? "enabled" : "disabled"}
            </strong>
            . You can change this preference from{" "}
            <Link href="/student/profile">Profile Settings</Link>.
          </p>
        </section>

        <Link href="/" className="student-auth-home">
          ← Back to Homepage
        </Link>
      </section>
    </main>
  );
}

export default function StudentDashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <StudentDashboardContent />
    </Suspense>
  );
}
