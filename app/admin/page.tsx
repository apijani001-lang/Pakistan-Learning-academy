
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import AdminDashboard from "./admindashboard";

export const metadata = {
  title: "Admin Dashboard | Pakistan Learning Academy",
  robots: {
    index: false,
    follow: false,
  },
};

export const instant = false;

export default async function AdminPage() {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  const { data: admin, error } = await supabase
    .from("admin_users")
    .select("full_name, role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error || !admin) {
    redirect("/admin/login");
  }

  return (
    <AdminDashboard
      adminName={admin.full_name}
      adminRole={admin.role}
    />
  );
}
