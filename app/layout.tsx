import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pakistan Learning Academy | Free Education for Classes 9–12",
  description:
    "Free learning resources for Pakistani students in classes 9, 10, 11 and 12. Explore Urdu video lessons, study notes, chapter-wise assessments and educational resources.",
  applicationName: "Pakistan Learning Academy",
  keywords: [
    "Pakistan Learning Academy",
    "Free Education Pakistan",
    "Class 9 Study Material",
    "Class 10 Study Material",
    "Class 11 Study Material",
    "Class 12 Study Material",
    "Urdu Video Lessons",
    "Punjab Board Preparation",
    "Free Study Notes Pakistan",
  ],
  openGraph: {
    title: "Pakistan Learning Academy",
    description:
      "Taleem Har Bachay Ka Haq Hai. Free educational resources for Pakistani students.",
    type: "website",
    siteName: "Pakistan Learning Academy",
    locale: "en_PK",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}