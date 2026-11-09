
import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import ArticleSchema from "@/app/components/article-schema";

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  class_level: number | null;
  region: string | null;
  board: string | null;
  author_name: string | null;
  author_designation: string | null;
  published_at: string | null;
  cover_image_url: string | null;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getArticle(slug: string): Promise<Article | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, excerpt, content, category, class_level, region, board, author_name, author_designation, published_at, cover_image_url"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Article loading error:", error);
    return null;
  }

  return data as Article | null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | Pakistan Learning Academy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${article.title} | Pakistan Learning Academy`,
    description:
      article.excerpt ||
      `Read ${article.title} at Pakistan Learning Academy. Free educational guidance and learning resources for Pakistani students.`,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description:
        article.excerpt ||
        "Educational article from Pakistan Learning Academy.",
      type: "article",
      publishedTime: article.published_at || undefined,
      authors: [
        article.author_name || "Pakistan Learning Academy",
      ],
      images: article.cover_image_url
        ? [article.cover_image_url]
        : undefined,
    },
  };
}

function formatDate(date: string | null) {
  if (!date) return "Recently published";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Recently published";
  }

  return parsed.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7faf8] px-5">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-700" />
        <h1 className="mt-6 text-xl font-black text-slate-900">
          Loading Article
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Please wait while we load this educational article.
        </p>
      </div>
    </main>
  );
}

async function ArticleContent({ params }: PageProps) {
  await connection();

  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content
    .split(/\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        slug={article.slug}
        image={article.cover_image_url}
        publishedAt={article.published_at}
        authorName={article.author_name}
        category={article.category}
        classLevel={article.class_level}
      />

      <main className="min-h-screen bg-[#f7faf8] text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-2xl font-black text-white">
                P.
              </span>

              <span>
                <strong className="block text-sm font-black text-slate-900">
                  Pakistan Learning
                </strong>
                <small className="text-[10px] font-bold tracking-[0.25em] text-emerald-700">
                  ACADEMY
                </small>
              </span>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        <section className="relative overflow-hidden bg-[#063d32] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-200/30 bg-white/10 px-4 py-2 text-xs font-bold text-emerald-200">
                {article.category || "Education"}
              </span>

              {article.class_level && (
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  Class {article.class_level}
                </span>
              )}

              {article.region && (
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white">
                  {article.region}
                </span>
              )}
            </div>

            <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/80 sm:text-lg">
                {article.excerpt}
              </p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7">
              <div>
                <p className="text-sm font-bold text-white">
                  {article.author_name || "Pakistan Learning Academy"}
                </p>
                <p className="mt-1 text-xs text-emerald-200/70">
                  {article.author_designation || "Academy"}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-emerald-200/70">
                  PUBLISHED
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {formatDate(article.published_at)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="min-w-0">
              {article.cover_image_url && (
                <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="max-h-[520px] w-full object-cover"
                  />
                </div>
              )}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
                <div className="mb-8 flex items-center gap-3 border-b border-slate-100 pb-6">
                  <span className="h-10 w-1.5 rounded-full bg-emerald-600" />
                  <h2 className="text-xl font-black text-slate-900">
                    Article & Educational Insights
                  </h2>
                </div>

                {paragraphs.length > 0 ? (
                  <div className="space-y-6 text-base leading-9 text-slate-700 sm:text-lg">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="whitespace-pre-wrap">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">
                    Article content is currently unavailable.
                  </p>
                )}

                {article.board && (
                  <div className="mt-10 rounded-2xl bg-emerald-50 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Relevant Education Board
                    </p>
                    <p className="mt-2 font-bold text-slate-800">
                      {article.board}
                    </p>
                  </div>
                )}

                <div className="mt-12 border-t border-slate-100 pt-8">
                  <p className="text-sm font-bold text-slate-800">
                    Pakistan Learning Academy
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Providing accessible educational resources and learning
                    opportunities for students across Pakistan.
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-[#063d32] p-7 text-white shadow-lg">
                <span className="text-xs font-bold tracking-widest text-emerald-300">
                  KEEP LEARNING
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  Knowledge creates possibilities.
                </h3>

                <p className="mt-4 text-sm leading-7 text-emerald-50/75">
                  Explore class-wise lessons, study notes and academic
                  resources at Pakistan Learning Academy.
                </p>

                <Link
                  href="/#classes"
                  className="mt-7 inline-flex rounded-xl bg-emerald-300 px-5 py-3 text-sm font-black text-emerald-950 transition hover:bg-white"
                >
                  Explore Classes →
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <h3 className="text-lg font-black text-slate-900">
                  About the Academy
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pakistan Learning Academy aims to make quality education
                  more accessible to students throughout Pakistan.
                </p>

                <Link
                  href="/"
                  className="mt-5 inline-block text-sm font-bold text-emerald-800 hover:underline"
                >
                  Visit Homepage →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <footer className="bg-[#042d26] px-5 py-9 text-center text-white">
          <p className="text-sm font-semibold text-emerald-100">
            © {new Date().getFullYear()} Pakistan Learning Academy
          </p>
          <p className="mt-2 text-xs text-emerald-200/60">
            A Project Of Bilal Marghoob Creations
          </p>
        </footer>
      </main>
    </>
  );
}

export default function ArticlePage({ params }: PageProps) {
  return (
    <Suspense fallback={<ArticleLoading />}>
      <ArticleContent params={params} />
    </Suspense>
  );
}
