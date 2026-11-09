
type ArticleSchemaProps = {
  title: string;
  description: string | null;
  slug: string;
  image: string | null;
  publishedAt: string | null;
  authorName: string | null;
  category: string | null;
  classLevel: number | null;
};

export default function ArticleSchema({
  title,
  description,
  slug,
  image,
  publishedAt,
  authorName,
  category,
  classLevel,
}: ArticleSchemaProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const articleUrl = `${siteUrl.replace(/\/$/, "")}/articles/${encodeURIComponent(slug)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    image: image ? [image] : undefined,
    datePublished: publishedAt || undefined,
    author: {
      "@type": "Person",
      name: authorName || "Pakistan Learning Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "Pakistan Learning Academy",
      url: siteUrl,
    },
    articleSection: category || "Education",
    about: [
      {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      ...(classLevel
        ? [
            {
              "@type": "Thing",
              name: `Class ${classLevel}`,
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
