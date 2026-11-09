
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  class_level: number | null;
  region: string | null;
  author_name: string | null;
  author_designation: string | null;
  published_at: string | null;
  cover_image_url: string | null;
};

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

function ArticleImage({
  src,
  alt,
  featured = false,
}: {
  src: string | null;
  alt: string;
  featured?: boolean;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${
        featured
          ? "bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-950"
          : "bg-gradient-to-br from-emerald-100 via-teal-50 to-white"
      }`}
    >
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-3xl ${
          featured
            ? "border border-white/20 bg-white/10 text-white"
            : "border border-emerald-200 bg-white text-emerald-800 shadow-sm"
        }`}
      >
        <span className="text-5xl font-black">
          P<span className="text-emerald-400">.</span>
        </span>
      </div>
    </div>
  );
}

function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
      <span className="font-bold text-slate-700">
        {article.author_name || "Pakistan Learning Academy"}
      </span>

      {article.author_designation && (
        <span className="text-slate-400">
          {article.author_designation}
        </span>
      )}

      <span className="text-slate-400">
        {formatDate(article.published_at)}
      </span>
    </div>
  );
}

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadArticles() {
      try {
        setLoading(true);
        setError(false);

        const supabase = createClient();

        const { data, error } = await supabase
          .from("articles")
          .select(
            "id, title, slug, excerpt, category, class_level, region, author_name, author_designation, published_at, cover_image_url"
          )
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .limit(6);

        if (error) {
          throw error;
        }

        if (active) {
          setArticles((data || []) as Article[]);
        }
      } catch (err) {
        console.error("Latest articles loading error:", err);

        if (active) {
          setError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadArticles();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="latest-articles"
      className="relative isolate overflow-hidden bg-[#f5f9f6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-[10px] font-extrabold tracking-[0.2em] text-emerald-800 shadow-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            KNOWLEDGE · INSIGHTS · EDUCATION
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Ideas That Inspire.
            <span className="mt-2 block text-emerald-700">
              Knowledge That Empowers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base lg:text-lg">
            Explore educational guidance, academic updates and valuable
            learning insights from Pakistan Learning Academy.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-emerald-600" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-700" />

            <h3 className="mt-6 text-xl font-extrabold text-slate-900">
              Preparing Your Reading Experience
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Loading the latest academy publications...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-[2rem] border border-red-100 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl font-bold text-red-600">
              !
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-slate-900">
              Articles Are Temporarily Unavailable
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Please try again later.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && articles.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-emerald-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-700">
              ✦
            </div>

            <h3 className="mt-6 text-2xl font-black text-slate-900">
              Something Inspiring Is Coming.
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
              Our educational articles will appear here as soon as they are
              published by the academy.
            </p>
          </div>
        )}

        {/* Articles */}
        {!loading && !error && articles.length > 0 && (
          <>
            {/* Featured article and two secondary articles */}
            <div className="mb-8 grid gap-7 lg:grid-cols-2">

              {/* Featured article */}
              <Link
                href={`/articles/${articles[0].slug}`}
                className="group relative flex min-h-[440px] overflow-hidden rounded-[2rem] bg-emerald-950 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
              >
                <div className="absolute inset-0">
                  <ArticleImage
                    src={articles[0].cover_image_url}
                    alt={articles[0].title}
                    featured
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-950/85 to-slate-950/90" />

                <div className="relative z-10 flex w-full flex-col justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-400/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-emerald-200">
                      Featured Article
                    </span>

                    <span className="text-xs font-semibold text-emerald-100/80">
                      {articles[0].category || "Education"}
                    </span>
                  </div>

                  <div className="mt-12">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {articles[0].class_level && (
                        <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white">
                          Class {articles[0].class_level}
                        </span>
                      )}

                      {articles[0].region && (
                        <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white">
                          {articles[0].region}
                        </span>
                      )}
                    </div>

                    <h3 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
                      {articles[0].title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-8 text-emerald-50/80 sm:text-base">
                      {articles[0].excerpt ||
                        "Explore valuable educational insights and learning resources from Pakistan Learning Academy."}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-6">
                      <div>
                        <p className="text-sm font-bold text-white">
                          {articles[0].author_name ||
                            "Pakistan Learning Academy"}
                        </p>

                        <p className="mt-1 text-xs text-emerald-100/60">
                          {formatDate(articles[0].published_at)}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-emerald-950 transition group-hover:bg-emerald-300">
                        Read Article
                        <span className="text-lg">↗</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Secondary articles */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {articles.slice(1, 3).map((article) => (
                  <Link
                    href={`/articles/${article.slug}`}
                    key={article.id}
                    className="group flex min-h-[205px] flex-col justify-between rounded-[1.7rem] border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                          {article.category || "Education"}
                        </span>

                        {article.class_level && (
                          <span className="text-[10px] font-bold tracking-wider text-slate-400">
                            CLASS {article.class_level}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-5 text-xl font-black leading-snug text-slate-900 transition group-hover:text-emerald-800 sm:text-2xl">
                        {article.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                        {article.excerpt ||
                          "Read this educational publication from Pakistan Learning Academy."}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <div>
                        <p className="text-xs font-bold text-slate-700">
                          {article.author_name || "Academy"}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {formatDate(article.published_at)}
                        </p>
                      </div>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-lg text-emerald-800 transition group-hover:bg-emerald-700 group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional article cards */}
            {articles.length > 3 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.slice(3).map((article) => (
                  <Link
                    href={`/articles/${article.slug}`}
                    key={article.id}
                    className="group overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                  >
                    <div className="h-48 overflow-hidden bg-emerald-50">
                      <ArticleImage
                        src={article.cover_image_url}
                        alt={article.title}
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-emerald-700">
                        {article.category || "Education"}
                      </span>

                      <h3 className="mt-3 text-xl font-black leading-snug text-slate-900 transition group-hover:text-emerald-800">
                        {article.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                        {article.excerpt ||
                          "Discover more educational insights from our academy."}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="text-xs text-slate-400">
                          {formatDate(article.published_at)}
                        </span>

                        <span className="text-sm font-extrabold text-emerald-800">
                          Read More ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Bottom note */}
            <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-emerald-100 bg-white/80 px-6 py-6 text-center shadow-sm sm:flex-row sm:text-left">
              <div>
                <h3 className="font-extrabold text-slate-900">
                  Knowledge for Every Student.
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Educational publications from Pakistan Learning Academy.
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-5 py-3 text-xs font-extrabold tracking-wider text-emerald-800">
                LEARN · GROW · SUCCEED
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
