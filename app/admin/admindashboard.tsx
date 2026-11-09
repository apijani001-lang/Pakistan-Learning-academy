
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  BookOpen,
  Plus,
  LogOut,
  Save,
  Trash2,
  Edit3,
  RefreshCw,
  FileText,
  Eye,
  X,
} from "lucide-react";

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string;
  class_level: number | null;
  region: string | null;
  board: string | null;
  status: "draft" | "published" | "unpublished";
  created_at: string;
  published_at: string | null;
};

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Education",
  class_level: "",
  region: "",
  board: "",
  status: "draft" as "draft" | "published" | "unpublished",
};

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function AdminDashboard({
  adminName,
  adminRole,
}: {
  adminName: string;
  adminRole: string;
}) {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadArticles() {
    setLoading(true);
    setError("");

    const supabase = createClient();

    const { data, error: fetchError } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setArticles((data || []) as Article[]);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  function startNewArticle() {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
    setError("");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startEdit(article: Article) {
    setEditingId(article.id);
    setForm({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt || "",
      content: article.content,
      category: article.category || "Education",
      class_level: article.class_level?.toString() || "",
      region: article.region || "",
      board: article.board || "",
      status: article.status,
    });
    setMessage("");
    setError("");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveArticle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const supabase = createClient();
      const slug = makeSlug(form.slug || form.title);

      if (!slug) {
        throw new Error("Article ka title ya slug zaroor likhein.");
      }

      const articleData = {
        title: form.title.trim(),
        slug,
        excerpt: form.excerpt.trim() || null,
        content: form.content.trim(),
        category: form.category.trim() || "Education",
        class_level: form.class_level ? Number(form.class_level) : null,
        region: form.region || null,
        board: form.board.trim() || null,
        status: form.status,
        author_name: "Syed Ahmed Bilal",
        author_designation: "CEO",
        published_at:
          form.status === "published" ? new Date().toISOString() : null,
      };

      if (editingId) {
        const { error: updateError } = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", editingId);

        if (updateError) throw updateError;
        setMessage("Article successfully update ho gaya.");
      } else {
        const { error: insertError } = await supabase
          .from("articles")
          .insert(articleData);

        if (insertError) throw insertError;
        setMessage("Naya article successfully save ho gaya.");
      }

      setForm(emptyForm);
      setEditingId(null);
      setShowForm(false);
      await loadArticles();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Article save nahi ho saka."
      );
    } finally {
      setSaving(false);
    }
  }

  async function deleteArticle(id: string) {
    const confirmed = window.confirm(
      "Kya aap waqai is article ko permanently delete karna chahte hain?"
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setMessage("Article delete ho gaya.");
    await loadArticles();
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  const publishedCount = articles.filter(
    (article) => article.status === "published"
  ).length;

  const draftCount = articles.filter(
    (article) => article.status === "draft"
  ).length;

  const unpublishedCount = articles.filter(
    (article) => article.status === "unpublished"
  ).length;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-[#071b2b] px-5 py-5 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-400 p-3 text-[#071b2b]">
              <BookOpen size={25} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Pakistan Learning Academy
              </p>
              <h1 className="mt-1 text-xl font-black">Admin Dashboard</h1>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-bold transition hover:bg-white/10"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-9">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Welcome back
            </p>
            <h2 className="mt-1 text-3xl font-black text-slate-900">
              {adminName}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {adminRole === "super_admin" ? "Super Administrator" : "Administrator"}
            </p>
          </div>

          <button
            onClick={startNewArticle}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-black text-[#071b2b] shadow-lg transition hover:bg-emerald-400"
          >
            <Plus size={20} />
            Write New Article
          </button>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Articles", value: articles.length, icon: FileText },
            { label: "Published", value: publishedCount, icon: Eye },
            { label: "Drafts", value: draftCount, icon: Edit3 },
            { label: "Unpublished", value: unpublishedCount, icon: BookOpen },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <Icon className="text-emerald-600" size={22} />
                </div>
                <p className="mt-4 text-3xl font-black text-slate-900">
                  {item.value}
                </p>
              </div>
            );
          })}
        </section>

        {message && (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {showForm && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-7 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Article Editor
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  {editingId ? "Edit Article" : "Create New Article"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl bg-slate-100 p-3 text-slate-600 hover:bg-slate-200"
                aria-label="Close editor"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={saveArticle} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  Article Title *
                </label>
                <input
                  required
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                      slug: makeSlug(e.target.value),
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                  placeholder="Article ka title"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Article URL Slug
                </label>
                <input
                  value={form.slug}
                  onChange={(e) =>
                    setForm({ ...form, slug: makeSlug(e.target.value) })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                  placeholder="article-url-slug"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm({ ...form, excerpt: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                  placeholder="Article ka short introduction"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Complete Article Content *
                </label>
                <textarea
                  required
                  rows={12}
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 leading-7 outline-none focus:border-emerald-500"
                  placeholder="Yahan complete article likhein..."
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <option>Education</option>
                    <option>Smart Syllabus</option>
                    <option>Examination News</option>
                    <option>Study Tips</option>
                    <option>Admissions</option>
                    <option>Results</option>
                    <option>Announcements</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Class
                  </label>
                  <select
                    value={form.class_level}
                    onChange={(e) =>
                      setForm({ ...form, class_level: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <option value="">All Classes</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Province / Region
                  </label>
                  <select
                    value={form.region}
                    onChange={(e) =>
                      setForm({ ...form, region: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <option value="">All Pakistan</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>Khyber Pakhtunkhwa</option>
                    <option>Balochistan</option>
                    <option>Federal</option>
                    <option>Azad Jammu and Kashmir</option>
                    <option>Gilgit-Baltistan</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Board Name
                  </label>
                  <input
                    value={form.board}
                    onChange={(e) =>
                      setForm({ ...form, board: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                    placeholder="e.g. BISE Lahore, FBISE"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Publication Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value as typeof form.status,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <option value="draft">Save as Draft</option>
                  <option value="published">Publish Article</option>
                  <option value="unpublished">Unpublish Article</option>
                </select>
              </div>

              <div className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
                <strong>Author:</strong> Syed Ahmed Bilal (CEO)
                <p className="mt-1 text-xs">
                  Author identity is automatically assigned by this editor.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#071b2b] px-6 py-4 font-bold text-white hover:bg-slate-800 disabled:opacity-60"
                >
                  <Save size={18} />
                  {saving ? "Saving..." : editingId ? "Update Article" : "Save Article"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setForm(emptyForm);
                  }}
                  className="rounded-xl border border-slate-200 px-6 py-4 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="mt-9 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-6">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Manage Articles
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Apne educational articles manage karein.
              </p>
            </div>

            <button
              onClick={loadArticles}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold hover:bg-slate-50"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-500">
              Loading articles...
            </div>
          ) : articles.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="mx-auto text-slate-300" size={42} />
              <p className="mt-4 font-bold text-slate-700">
                Abhi koi article nahi hai.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Pehla article likhne ke liye Write New Article par click karein.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[750px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Article</th>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="max-w-sm px-6 py-4">
                        <p className="font-bold text-slate-900">
                          {article.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {article.slug}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        {article.class_level
                          ? `Class ${article.class_level}`
                          : "All"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            article.status === "published"
                              ? "bg-emerald-100 text-emerald-800"
                              : article.status === "draft"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {new Date(article.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => startEdit(article)}
                            className="rounded-lg bg-blue-50 p-2 text-blue-700 hover:bg-blue-100"
                            title="Edit article"
                          >
                            <Edit3 size={17} />
                          </button>
                          <button
                            onClick={() => deleteArticle(article.id)}
                            className="rounded-lg bg-red-50 p-2 text-red-700 hover:bg-red-100"
                            title="Delete article"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer className="py-8 text-center text-xs text-slate-400">
          Pakistan Learning Academy · A Project Of Bilal Marghoob Creations
        </footer>
      </div>
    </main>
  );
}
