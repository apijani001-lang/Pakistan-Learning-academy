
import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const baseUrl = siteUrl.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/classes/09`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/classes/10`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/classes/11`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/classes/12`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("slug, updated_at, published_at")
    .eq("status", "published");

  if (error) {
    console.error("Sitemap articles error:", error);
    return staticPages;
  }

  const articlePages: MetadataRoute.Sitemap = (data || []).map(
    (article) => ({
      url: `${baseUrl}/articles/${encodeURIComponent(article.slug)}`,
      lastModified:
        article.updated_at || article.published_at || undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...articlePages];
}
