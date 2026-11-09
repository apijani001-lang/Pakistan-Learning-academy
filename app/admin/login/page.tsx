
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LockKeyhole, Mail, ArrowRight, LoaderCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      const { data: admin, error: adminError } = await supabase
        .from("admin_users")
        .select("full_name, role")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (adminError || !admin) {
        await supabase.auth.signOut();
        throw new Error("Aapka account Admin Panel ke liye authorized nahi hai.");
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Login nahi ho saka. Dobara koshish karein."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071b2b] px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400 text-[#071b2b] shadow-lg">
            <LockKeyhole size={30} />
          </div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-emerald-300">
            Pakistan Learning Academy
          </p>
          <h1 className="mt-3 text-3xl font-black text-white">
            CEO Admin Login
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Secure access for authorized administration
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-white/10 bg-white p-7 shadow-2xl sm:p-9"
        >
          <h2 className="text-xl font-black text-slate-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Apne registered admin account se login karein.
          </p>

          <label className="mt-7 block text-sm font-bold text-slate-700">
            Email Address
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-emerald-500">
            <Mail size={18} className="text-slate-400" />
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="CEO email address"
              className="w-full py-3.5 text-sm text-slate-900 outline-none"
            />
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-700">
            Password
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-emerald-500">
            <LockKeyhole size={18} className="text-slate-400" />
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              className="w-full py-3.5 text-sm text-slate-900 outline-none"
            />
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 font-black text-[#071b2b] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <LoaderCircle size={19} className="animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Secure Login <ArrowRight size={19} />
              </>
            )}
          </button>

          <p className="mt-6 text-center text-xs leading-6 text-slate-400">
            Authorized administrators only. All article permissions are
            checked by the secure database.
          </p>
        </form>

        <p className="mt-7 text-center text-xs text-slate-400">
          A Project Of Bilal Marghoob Creations
        </p>
      </div>
    </main>
  );
}
