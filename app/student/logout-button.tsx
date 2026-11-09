
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      setError("Logout failed. Please try again.");
      setLoading(false);
      return;
    }

    router.replace("/student/login");
    router.refresh();
  }

  return (
    <div>
      <button
        type="button"
        className="student-dashboard-logout"
        onClick={handleLogout}
        disabled={loading}
      >
        {loading ? "Logging Out..." : "Logout"}
      </button>

      {error && (
        <p className="student-auth-message student-auth-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
