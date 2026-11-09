
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function StudentRegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (displayName.trim().length < 2) {
      setError("Please enter a display name.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: signupError } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            display_name: displayName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/student/login`,
        },
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      if (data.session) {
        router.replace("/student/dashboard");
        router.refresh();
        return;
      }

      setSuccess(
        "Your account has been created. Please check your email and confirm your account before logging in."
      );
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="student-auth-page">
      <section className="student-auth-card">
        <Link href="/" className="student-auth-brand">
          Pakistan Learning Academy
        </Link>

        <div className="student-auth-heading">
          <span className="student-auth-label">STUDENT ACCOUNT</span>
          <h1>Create Your Account</h1>
          <p>
            Join Pakistan Learning Academy and start your learning journey
            with free educational resources.
          </p>
        </div>

        <form onSubmit={handleRegister} className="student-auth-form">
          <label htmlFor="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            maxLength={100}
            required
          />

          <label htmlFor="display-name">Display Name</label>
          <input
            id="display-name"
            type="text"
            placeholder="Name shown on leaderboard"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            maxLength={40}
            required
          />

          <label htmlFor="student-email">Email Address</label>
          <input
            id="student-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="student-password">Password</label>
          <input
            id="student-password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            minLength={8}
            required
          />

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
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Student Account"}
          </button>
        </form>

        <p className="student-auth-switch">
          Already have an account?{" "}
          <Link href="/student/login">Student Login</Link>
        </p>

        <p className="student-auth-note">
          Your account information is protected. Your leaderboard display
          preferences can be managed after login.
        </p>

        <Link href="/" className="student-auth-home">
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}
