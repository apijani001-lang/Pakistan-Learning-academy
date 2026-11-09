
import { connection, NextResponse } from "next/server";

type BoardSource = {
  domain: string;
  region: string;
  board: string;
};

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  url: string;
  classes: string[];
  category: string;
  region: string;
  board: string;
};

type ClassDiagnostic = {
  classNumber: string;
  rssItems: number;
  officialMatches: number;
  classMatches: number;
  accepted: number;
};

const BOARD_SOURCES: BoardSource[] = [
  // Punjab
  { domain: "biselahore.com", region: "Punjab", board: "BISE Lahore" },
  { domain: "bisegrw.edu.pk", region: "Punjab", board: "BISE Gujranwala" },
  { domain: "bisefsd.edu.pk", region: "Punjab", board: "BISE Faisalabad" },
  { domain: "bisemultan.edu.pk", region: "Punjab", board: "BISE Multan" },
  { domain: "bisesargodha.edu.pk", region: "Punjab", board: "BISE Sargodha" },
  { domain: "bisebwp.edu.pk", region: "Punjab", board: "BISE Bahawalpur" },
  { domain: "bisedgkhan.edu.pk", region: "Punjab", board: "BISE Dera Ghazi Khan" },
  { domain: "bisesahiwal.edu.pk", region: "Punjab", board: "BISE Sahiwal" },
  { domain: "biserawalpindi.edu.pk", region: "Punjab", board: "BISE Rawalpindi" },
  { domain: "pectaa.edu.pk", region: "Punjab", board: "PECTAA" },
  { domain: "schools.punjab.gov.pk", region: "Punjab", board: "Punjab School Education Department" },

  // Sindh
  { domain: "bsek.edu.pk", region: "Sindh", board: "BSEK Karachi" },
  { domain: "biek.edu.pk", region: "Sindh", board: "BIEK Karachi" },
  { domain: "biseh.edu.pk", region: "Sindh", board: "BISE Hyderabad" },
  { domain: "biselrk.edu.pk", region: "Sindh", board: "BISE Larkana" },
  { domain: "bisempk.edu.pk", region: "Sindh", board: "BISE Mirpur Khas" },
  { domain: "bisesba.edu.pk", region: "Sindh", board: "BISE Shaheed Benazirabad" },
  { domain: "bisesuksindh.edu.pk", region: "Sindh", board: "BISE Sukkur" },
  { domain: "rsusindh.gov.pk", region: "Sindh", board: "Sindh Education Department" },

  // Khyber Pakhtunkhwa
  { domain: "bisep.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Peshawar" },
  { domain: "bisemdn.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Mardan" },
  { domain: "biseatd.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Abbottabad" },
  { domain: "bisekt.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Kohat" },
  { domain: "biseb.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Bannu" },
  { domain: "bisedik.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Dera Ismail Khan" },
  { domain: "bisemalakand.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Malakand" },
  { domain: "bisess.edu.pk", region: "Khyber Pakhtunkhwa", board: "BISE Swat" },

  // Balochistan
  { domain: "bbiseqta.edu.pk", region: "Balochistan", board: "BBISE Quetta" },

  // Federal
  { domain: "fbise.edu.pk", region: "Federal", board: "FBISE" },

  // Azad Jammu and Kashmir
  { domain: "ajkbise.net", region: "AJK", board: "AJK BISE Mirpur" },

  // Gilgit-Baltistan
  { domain: "beegb.edu.pk", region: "Gilgit-Baltistan", board: "BEEGB" },
  { domain: "kiu.edu.pk", region: "Gilgit-Baltistan", board: "Karakoram International University" },

  // National authorities
  { domain: "ibcc.edu.pk", region: "National", board: "IBCC" },
  { domain: "mofept.gov.pk", region: "National", board: "Ministry of Federal Education" },
];

const CLASS_TERMS: Record<string, string> = {
  "9": '"class 9" OR "class ix" OR "9th class" OR "grade 9" OR "SSC Part I" OR "SSC-I"',
  "10": '"class 10" OR "class x" OR "10th class" OR "grade 10" OR "SSC Part II" OR "SSC-II"',
  "11": '"class 11" OR "class xi" OR "11th class" OR "grade 11" OR "HSSC Part I" OR "HSSC-I"',
  "12": '"class 12" OR "class xii" OR "12th class" OR "grade 12" OR "HSSC Part II" OR "HSSC-II"',
};

const EDUCATION_TERMS =
  '(syllabus OR "smart syllabus" OR examination OR exam OR "date sheet" OR datesheet OR result OR admission OR registration OR notification OR "paper scheme" OR "pairing scheme" OR "model paper" OR textbook OR matric OR intermediate)';

const EDUCATION_KEYWORDS = [
  "education",
  "school",
  "college",
  "board",
  "examination",
  "exam",
  "date sheet",
  "datesheet",
  "result",
  "admission",
  "registration",
  "syllabus",
  "smart syllabus",
  "notification",
  "paper scheme",
  "pairing scheme",
  "model paper",
  "textbook",
  "matric",
  "intermediate",
  "class",
  "grade",
  "ssc",
  "hssc",
];

const CLASS_PATTERNS: Record<string, RegExp[]> = {
  "9": [
    /\bclass\s*[-:]?\s*9\b/i,
    /\bclass\s+ix\b/i,
    /\b9th\s*(?:class|grade)?\b/i,
    /\bgrade\s*9\b/i,
    /\bssc\s*part\s*i\b/i,
    /\bssc[- ]i\b/i,
  ],
  "10": [
    /\bclass\s*[-:]?\s*10\b/i,
    /\bclass\s+x\b/i,
    /\b10th\s*(?:class|grade)?\b/i,
    /\bgrade\s*10\b/i,
    /\bssc\s*part\s*ii\b/i,
    /\bssc[- ]ii\b/i,
  ],
  "11": [
    /\bclass\s*[-:]?\s*11\b/i,
    /\bclass\s+xi\b/i,
    /\b11th\s*(?:class|grade)?\b/i,
    /\bgrade\s*11\b/i,
    /\bhssc\s*part\s*i\b/i,
    /\bhssc[- ]i\b/i,
  ],
  "12": [
    /\bclass\s*[-:]?\s*12\b/i,
    /\bclass\s+xii\b/i,
    /\b12th\s*(?:class|grade)?\b/i,
    /\bgrade\s*12\b/i,
    /\bhssc\s*part\s*ii\b/i,
    /\bhssc[- ]ii\b/i,
  ],
};

function decodeXml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code))
    )
    .replace(/<[^>]+>/g, "")
    .trim();
}

function getTag(block: string, tag: string): string {
  const regex = new RegExp(
    `<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`,
    "i"
  );

  const match = block.match(regex);

  return match ? decodeXml(match[1]) : "";
}

function getSourceUrl(block: string): string {
  const match = block.match(
    /<source\b[^>]*url=["']([^"']+)["'][^>]*>/i
  );

  return match ? decodeXml(match[1]) : "";
}

function getOfficialBoard(sourceUrl: string): BoardSource | null {
  try {
    const hostname = new URL(sourceUrl).hostname.toLowerCase();

    return (
      BOARD_SOURCES.find(
        (item) =>
          hostname === item.domain ||
          hostname.endsWith(`.${item.domain}`)
      ) || null
    );
  } catch {
    return null;
  }
}

function detectClasses(text: string): string[] {
  const found = new Set<string>();

  for (const [classNumber, patterns] of Object.entries(CLASS_PATTERNS)) {
    if (patterns.some((pattern) => pattern.test(text))) {
      found.add(classNumber);
    }
  }

  return Array.from(found);
}

function detectCategory(text: string): string {
  const lower = text.toLowerCase();

  if (lower.includes("smart syllabus") || lower.includes("syllabus")) {
    return "Syllabus Update";
  }

  if (lower.includes("date sheet") || lower.includes("datesheet")) {
    return "Date Sheet";
  }

  if (lower.includes("result") || lower.includes("gazette")) {
    return "Results";
  }

  if (lower.includes("admission") || lower.includes("registration")) {
    return "Admissions";
  }

  if (
    lower.includes("paper scheme") ||
    lower.includes("pairing scheme") ||
    lower.includes("model paper")
  ) {
    return "Paper Pattern";
  }

  if (lower.includes("exam") || lower.includes("examination")) {
    return "Examination";
  }

  return "Education Notification";
}

function isRelevantEducationNews(text: string): boolean {
  const lower = text.toLowerCase();

  return EDUCATION_KEYWORDS.some((keyword) =>
    lower.includes(keyword)
  );
}

function cleanSummary(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 350);
}

async function fetchClassNews(
  classNumber: string
): Promise<{
  items: NewsItem[];
  diagnostic: ClassDiagnostic;
}> {
  const searchQuery =
    `(${CLASS_TERMS[classNumber]}) ${EDUCATION_TERMS} Pakistan`;

  const rssUrl = new URL("https://news.google.com/rss/search");

  rssUrl.searchParams.set("q", searchQuery);
  rssUrl.searchParams.set("hl", "en-PK");
  rssUrl.searchParams.set("gl", "PK");
  rssUrl.searchParams.set("ceid", "PK:en");

  const diagnostic: ClassDiagnostic = {
    classNumber,
    rssItems: 0,
    officialMatches: 0,
    classMatches: 0,
    accepted: 0,
  };

  try {
    const response = await fetch(rssUrl.toString(), {
      headers: {
        "User-Agent": "PakistanLearningAcademy/1.0",
      },
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      console.error(
        `Google News RSS error for Class ${classNumber}: ${response.status}`
      );

      return { items: [], diagnostic };
    }

    const xml = await response.text();
    const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];

    diagnostic.rssItems = itemBlocks.length;

    const items: NewsItem[] = [];

    for (const block of itemBlocks) {
      const title = getTag(block, "title");
      const summary = cleanSummary(getTag(block, "description"));
      const publishedAt = getTag(block, "pubDate");
      const articleUrl = getTag(block, "link");
      const source = getTag(block, "source");
      const sourceUrl = getSourceUrl(block);

      if (!title || !articleUrl || !source || !sourceUrl) {
        continue;
      }

      const officialBoard = getOfficialBoard(sourceUrl);

      if (!officialBoard) {
        continue;
      }

      diagnostic.officialMatches++;

      let parsedUrl: URL;

      try {
        parsedUrl = new URL(articleUrl);
      } catch {
        continue;
      }

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        continue;
      }

      const combinedText = `${title} ${summary}`;

      if (!isRelevantEducationNews(combinedText)) {
        continue;
      }

      const detectedClasses = detectClasses(combinedText);

      if (!detectedClasses.includes(classNumber)) {
        continue;
      }

      diagnostic.classMatches++;

      const date = new Date(publishedAt);

      if (Number.isNaN(date.getTime())) {
        continue;
      }

      const ageInDays =
        (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);

      if (ageInDays > 365 || ageInDays < -1) {
        continue;
      }

      items.push({
        id: `${officialBoard.region}-${classNumber}-${encodeURIComponent(
          title.toLowerCase()
        ).slice(0, 90)}`,
        title,
        summary:
          summary ||
          "Education update. Open the original source for details.",
        source,
        publishedAt: date.toISOString(),
        url: parsedUrl.toString(),
        classes: detectedClasses,
        category: detectCategory(combinedText),
        region: officialBoard.region,
        board: officialBoard.board,
      });
    }

    diagnostic.accepted = items.length;

    return { items, diagnostic };
  } catch (error) {
    console.error(
      `Education news fetch failed for Class ${classNumber}:`,
      error
    );

    return { items: [], diagnostic };
  }
}

export async function GET() {
  // Wait for an incoming request instead of running RSS fetching at build time.
  await connection();

  try {
    const classNumbers = ["9", "10", "11", "12"];

    const results = await Promise.all(
      classNumbers.map((classNumber) =>
        fetchClassNews(classNumber)
      )
    );

    const allItems = results.flatMap((result) => result.items);
    const uniqueNews = new Map<string, NewsItem>();

    for (const item of allItems) {
      const key = item.url.toLowerCase();

      if (!uniqueNews.has(key)) {
        uniqueNews.set(key, item);
      }
    }

    const items = Array.from(uniqueNews.values())
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      )
      .slice(0, 40);

    const diagnostics = results.map((result) => result.diagnostic);

    return NextResponse.json(
      {
        success: true,
        count: items.length,
        updatedAt: new Date().toISOString(),
        regionsCovered: [
          "Punjab",
          "Sindh",
          "Khyber Pakhtunkhwa",
          "Balochistan",
          "Federal",
          "AJK",
          "Gilgit-Baltistan",
          "National",
        ],
        items,
        diagnostics,
      },
      {
        headers: {
         "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    console.error("Education news API error:", error);

    return NextResponse.json(
      {
        success: false,
        count: 0,
        items: [],
        diagnostics: [],
        message: "Education news is temporarily unavailable.",
      },
      { status: 500 }
    );
  }
}
