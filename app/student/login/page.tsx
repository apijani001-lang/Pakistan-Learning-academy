
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function StudentLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (loginError) {
        setError(
          loginError.message === "Email not confirmed"
            ? "Please confirm your email address before logging in."
            : "Invalid email or password. Please try again."
        );
        return;
      }

      router.replace("/student/dashboard");
      router.refresh();
    } catch {
      setError("Unable to log in right now. Please try again.");
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
          <span className="student-auth-label">STUDENT PORTAL</span>
          <h1>Welcome Back</h1>
          <p>
            Log in to continue your studies, access tests, and track your
            educational progress.
          </p>
        </div>

        <form onSubmit={handleLogin} className="student-auth-form">
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
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && (
            <div className="student-auth-message student-auth-error" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="student-auth-button"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Student Login"}
          </button>
        </form>

        <p className="student-auth-switch">
          New student?{" "}
          <Link href="/student/register">Create an Account</Link>
        </p>

        <Link href="/" className="student-auth-home">
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}
