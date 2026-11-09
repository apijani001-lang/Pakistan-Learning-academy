
"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function StudentProfilePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [leaderboardOptIn, setLeaderboardOptIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (!active) return;

      if (authError || !user) {
        router.replace("/student/login");
        return;
      }

      const { data, error: profileError } = await supabase
        .from("student_profiles")
        .select("full_name, display_name, leaderboard_opt_in")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!active) return;

      if (profileError || !data) {
        setError("Your profile could not be loaded. Please try again.");
        setLoading(false);
        return;
      }

      setFullName(data.full_name || "");
      setDisplayName(data.display_name || "");
      setLeaderboardOptIn(data.leaderboard_opt_in);
      setLoading(false);
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    const cleanFullName = fullName.trim();
    const cleanDisplayName = displayName.trim();

    if (cleanFullName.length < 2 || cleanFullName.length > 100) {
      setError("Full name must contain 2 to 100 characters.");
      return;
    }

    if (cleanDisplayName.length < 2 || cleanDisplayName.length > 40) {
      setError("Display name must contain 2 to 40 characters.");
      return;
    }

    setSaving(true);

    try {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/student/login");
        return;
      }

      const { error: updateError } = await supabase
        .from("student_profiles")
        .update({
          full_name: cleanFullName,
          display_name: cleanDisplayName,
          leaderboard_opt_in: leaderboardOptIn,
        })
        .eq("user_id", user.id);

      if (updateError) {
        setError("Your profile could not be saved. Please try again.");
        return;
      }

      setFullName(cleanFullName);
      setDisplayName(cleanDisplayName);
      setSuccess("Your profile has been updated successfully.");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="student-profile-settings-page">
        <div className="student-profile-settings-card">
          Loading your profile...
        </div>
      </main>
    );
  }

  return (
    <main className="student-profile-settings-page">
      <section className="student-profile-settings-card">
        <Link href="/student/dashboard" className="student-profile-back">
          ← Student Dashboard
        </Link>

        <span className="student-auth-label">ACCOUNT SETTINGS</span>
        <h1>Student Profile</h1>
        <p className="student-profile-description">
          Manage your personal details and leaderboard privacy preferences.
        </p>

        <form onSubmit={handleSave} className="student-auth-form">
          <label htmlFor="profile-full-name">Full Name</label>
          <input
            id="profile-full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            maxLength={100}
            required
          />

          <label htmlFor="profile-display-name">Display Name</label>
          <input
            id="profile-display-name"
            type="text"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            maxLength={40}
            required
          />

          <div className="student-profile-privacy-option">
            <label htmlFor="leaderboard-opt-in">
              <input
                id="leaderboard-opt-in"
                type="checkbox"
                checked={leaderboardOptIn}
                onChange={(event) =>
                  setLeaderboardOptIn(event.target.checked)
                }
              />
              Allow my display name and test scores to appear on the public
              leaderboard.
            </label>
            <p>
              This is optional. If disabled, your name will not be included
              in the public leaderboard.
            </p>
          </div>

          {error && (
            <div className="student-auth-message student-auth-error" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="student-auth-message student-auth-success" role="status">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="student-auth-button"
            disabled={saving}
          >
            {saving ? "Saving Profile..." : "Save Profile"}
          </button>
        </form>
      </section>
    </main>
  );
}
