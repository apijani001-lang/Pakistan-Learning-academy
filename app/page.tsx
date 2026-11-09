
"use client";

import LatestArticles from "./components/latest-articles";
import Link from "next/link";
import { useEffect, useState } from "react";

const classes = [
  { number: "09", title: "Class 9", level: "SECONDARY", desc: "Build your academic foundation with clear concepts and guided practice.", subjects: "Science & Arts", color: "mint" },
  { number: "10", title: "Class 10", level: "MATRICULATION", desc: "Prepare confidently with structured lessons and board-style practice.", subjects: "Science & Arts", color: "blue" },
  { number: "11", title: "Class 11", level: "INTERMEDIATE", desc: "Explore advanced concepts through step-by-step explanations.", subjects: "Science & Arts", color: "peach" },
  { number: "12", title: "Class 12", level: "INTERMEDIATE", desc: "Strengthen your knowledge and prepare for your next academic step.", subjects: "Science & Arts", color: "lavender" },
];

const features = [
  { icon: "▶", title: "Urdu Video Lessons", desc: "Understand difficult topics through visual explanations and Urdu narration." },
  { icon: "▤", title: "Complete Study Notes", desc: "Organised notes, solved examples, MCQs and important questions." },
  { icon: "✓", title: "Chapter Assessments", desc: "Test your understanding after each chapter and practise where needed." },
  { icon: "✦", title: "Achievement Certificates", desc: "Earn a digital academy certificate after meeting the passing requirement." },
];

const partners = [
  { name: "PDFMaster", url: "https://pdfmaster-delta.vercel.app/" },
  { name: "Watch Deals", url: "https://watch-deals-ruddy.vercel.app/" },
  { name: "SciCalc Pro", url: "https://scicalcpro.vercel.app/" },
  { name: "Shah Rehan Jewellers", url: "https://bilalmarghoobboutique-cmyk.github.io/shah-rehan-jewellers/index.html" },
  { name: "AAPI Compressor", url: "https://compressvideos.apijani001.workers.dev/" },
  { name: "Bilal Creations", url: "https://bilal.sidra-ai-creation.workers.dev/" },
];

type EducationNewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  url: string;
  classes: string[];
  category: string;
};

function PartnerMarquee() {
  return (
    <div className="partner-marquee">
      <div className="partner-track">
        {[...partners, ...partners].map((partner, index) => (
          <a key={`${partner.name}-${index}`} href={partner.url} target="_blank" rel="noopener noreferrer">
            <span className="partner-dot" />
            {partner.name}
            <span className="partner-separator">✳</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link href="/" className="brand">
      <span className="brand-symbol">P<span>.</span></span>
      <span className="brand-name">
        <strong>Pakistan Learning</strong>
        <small>ACADEMY</small>
      </span>
    </Link>
  );
}

function EducationNews() {
  const [news, setNews] = useState<EducationNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedClass, setSelectedClass] = useState("all");

  useEffect(() => {
    let active = true;

    async function loadNews() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/education-news", {
          method: "GET",
          
        });

        if (!response.ok) {
          throw new Error("Education news service is not available.");
        }

        const data = await response.json();

        if (!active) return;

        const items = Array.isArray(data.items) ? data.items : [];

        const validNews = items.filter((item: EducationNewsItem) => {
          return (
            item &&
            typeof item.id === "string" &&
            typeof item.title === "string" &&
            typeof item.summary === "string" &&
            typeof item.source === "string" &&
            typeof item.url === "string" &&
            /^https?:\/\//i.test(item.url) &&
            Array.isArray(item.classes) &&
            item.classes.some((className) =>
              ["9", "10", "11", "12", "09"].includes(String(className))
            )
          );
        });

        setNews(validNews);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadNews();

    return () => {
      active = false;
    };
  }, []);

  const filteredNews =
    selectedClass === "all"
      ? news
      : news.filter((item) =>
          item.classes.some(
            (className) =>
              String(className).replace(/^0/, "") === selectedClass
          )
        );

  return (
    <section className="section education-news-section" id="education-news">
      <div className="section-heading">
        <span className="section-kicker">STAY INFORMED · STAY PREPARED</span>
        <h2>Latest Education <span>News.</span></h2>
        <p>
          Important educational announcements and updates for students of
          Classes 9, 10, 11 and 12.
        </p>
      </div>

      <div className="news-filter-bar">
        <div className="news-filter-label">
          <span className="news-live-dot" />
          STUDENT EDUCATION UPDATES
        </div>

        <div className="news-filters">
          {[
            { label: "All Classes", value: "all" },
            { label: "Class 9", value: "9" },
            { label: "Class 10", value: "10" },
            { label: "Class 11", value: "11" },
            { label: "Class 12", value: "12" },
          ].map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={selectedClass === filter.value ? "active" : ""}
              onClick={() => setSelectedClass(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="news-status">
          <span className="news-loading-spinner" />
          <strong>Loading education news...</strong>
          <p>Checking the latest available student updates.</p>
        </div>
      ) : error ? (
        <div className="news-status">
          <span className="news-status-icon">◷</span>
          <strong>Education news service is being set up.</strong>
          <p>
            Automatic news updates will appear here after the official-source
            news service is connected.
          </p>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="news-status">
          <span className="news-status-icon">✦</span>
          <strong>No verified updates available right now.</strong>
          <p>
            New announcements will appear here after they are collected and
            checked against reliable education sources.
          </p>
        </div>
      ) : (
        <div className="education-news-grid">
          {filteredNews.map((item) => (
            <article className="education-news-card" key={item.id}>
              <div className="news-card-top">
                <span className="news-category">{item.category || "Education Update"}</span>
                <span className="news-class-tags">
                  {item.classes.map((className) => (
                    <span key={className}>Class {String(className).replace(/^0/, "")}</span>
                  ))}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.summary}</p>

              <div className="news-card-footer">
                <div className="news-source">
                  <strong>{item.source}</strong>
                  <small>
                    {item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString("en-PK", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Date not provided"}
                  </small>
                </div>

                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read source ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="news-disclaimer">
        News will be displayed with its original source and publication date.
        Official announcements will be prioritised.
      </p>
    </section>
  );
}

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        Free educational resources for students across Pakistan
        <span className="announcement-right">Taleem Har Bachay Ka Haq Hai</span>
      </div>

      <PartnerMarquee />

      <header className="site-header">
        <Brand />
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#education-news">Education News</a>
          <a href="#learning">Learning</a>
          <a href="#tribute">Our Inspiration</a>
        </nav>
        <a href="#classes" className="nav-cta">Start Learning <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid-pattern" />
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-line" />
            EDUCATION WITHOUT BARRIERS
          </div>

          <h1>
            Your Future.
            <br />
            Your <span>Knowledge.</span>
            <br />
            Your Journey.
          </h1>

          <p className="hero-description">
            Quality education should never depend on your financial situation.
            Learn, understand and grow with free educational resources designed
            for Pakistani students.
          </p>

          <div className="hero-buttons">
            <a href="#classes" className="button-primary">
              Explore Classes <span>→</span>
            </a>
            <a href="#learning" className="button-outline">
              Discover Our Academy <span>↗</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>9</span><span>10</span><span>11</span><span>12</span>
            </div>
            <div>
              <strong>Classes 9–12</strong>
              <small>Learning opportunities for every student</small>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-circle art-circle-one" />
          <div className="art-circle art-circle-two" />

          <div className="main-study-card">
            <div className="study-card-header">
              <span className="study-logo">P.</span>
              <span className="study-status"><i /> LEARNING SPACE</span>
            </div>

            <div className="study-illustration">
              <div className="book book-back" />
              <div className="book book-middle" />
              <div className="book book-front">
                <span>P</span>
                <small>LEARN & GROW</small>
              </div>
              <div className="book-spark spark-one">✦</div>
              <div className="book-spark spark-two">✧</div>
            </div>

            <div className="study-card-content">
              <span className="study-label">YOUR ACADEMIC JOURNEY</span>
              <h3>Knowledge opens doors.</h3>
              <p>Every chapter brings you one step closer to your dreams.</p>
            </div>

            <div className="study-card-bottom">
              <div><strong>04</strong><small>Classes</small></div>
              <div><strong>60%</strong><small>Pass mark</small></div>
              <div><strong>FREE</strong><small>Learning</small></div>
            </div>
          </div>

          <div className="floating-card floating-top">
            <span className="floating-icon">✎</span>
            <div><strong>Learn in Urdu</strong><small>Simple explanations</small></div>
          </div>

          <div className="floating-card floating-bottom">
            <span className="floating-icon green-icon">✓</span>
            <div><strong>Learn at your pace</strong><small>Practice and improve</small></div>
          </div>
        </div>

        <div className="hero-bottom-label">BUILT FOR LEARNING · MADE FOR EVERYONE</div>
      </section>

      <section className="quick-stats">
        <div><strong>09–12</strong><span>Target Classes</span></div>
        <div><strong>FREE</strong><span>Learning Resources</span></div>
        <div><strong>URDU</strong><span>Teaching Language</span></div>
        <div><strong>60%</strong><span>Assessment Pass Mark</span></div>
      </section>

      <section className="section classes-section" id="classes">
        <div className="section-heading">
          <span className="section-kicker">YOUR ACADEMIC PATH</span>
          <h2>Where will you <span>begin?</span></h2>
          <p>Choose your class and discover a structured way to learn every subject, one chapter at a time.</p>
        </div>

        <div className="class-grid">
          {classes.map((item) => (
            <Link
              href={`/classes/${item.number}`}
              className={`class-card ${item.color}`}
              key={item.number}
            >
              <div className="class-card-top">
                <span className="class-level">{item.level}</span>
                <span className="class-arrow">↗</span>
              </div>
              <div className="class-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="class-card-footer">
                <span>{item.subjects}</span>
                <span className="class-coming">Explore class →</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="section-note">Study material will be published after verification against the relevant official syllabus.</p>
      </section>

      <section
  id="smart-syllabus"
  className="relative isolate overflow-hidden bg-[#062f2b] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24"
>
  <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 -left-24 -z-10 h-96 w-96 rounded-full bg-teal-300/15 blur-3xl" />

  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    <div>
      <span className="inline-flex items-center gap-3 rounded-full border border-emerald-200/30 bg-white/10 px-5 py-3 text-[10px] font-extrabold tracking-[0.2em] text-emerald-200 sm:text-xs">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        ANNUAL EXAMINATION 2027
      </span>

      <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
        Smart Syllabus
        <span className="block text-emerald-300">2026–27</span>
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-emerald-50/80 sm:text-lg">
        Apna education board select karein, phir class aur subject choose
        karke relevant syllabus guidance aur available learning resources
        tak pohanchein.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href="/smart-syllabus-2026-27"
          className="inline-flex items-center gap-4 rounded-xl bg-emerald-300 px-7 py-4 text-sm font-black text-emerald-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Select Your Board <span className="text-xl">→</span>
        </Link>

        <span className="text-sm font-semibold text-emerald-100/80">
          All Pakistan · Classes 9–12
        </span>
      </div>

      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold text-emerald-100/80">
        <span>✓ Board-first navigation</span>
        <span>✓ Class-wise subjects</span>
        <span>✓ Verification notices</span>
      </div>
    </div>

    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-300/20 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white p-6 text-slate-900 shadow-2xl sm:p-9">
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-2xl font-black text-white">
              P.
            </div>

            <div>
              <h3 className="text-sm font-black">Pakistan Learning</h3>
              <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-700">
                ACADEMY
              </p>
            </div>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-2 text-[10px] font-extrabold tracking-wider text-emerald-800">
            SESSION 2026–27
          </span>
        </div>

        <div className="py-9 text-center">
          <span className="text-xs font-extrabold tracking-[0.3em] text-emerald-700">
            YOUR ACADEMIC GUIDE
          </span>

          <div className="mt-3 text-7xl font-black leading-none tracking-tighter text-emerald-900 sm:text-8xl">
            2026–27
          </div>

          <h3 className="mt-4 text-2xl font-black tracking-widest text-slate-900">
            SMART SYLLABUS
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            Learn with clarity. Prepare with confidence.
          </p>
        </div>

        <Link
          href="/smart-syllabus-2026-27"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-900 px-6 py-4 text-sm font-black text-white transition hover:bg-emerald-700"
        >
          Choose Education Board <span>→</span>
        </Link>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-700">
            ◈
          </span>

          <div>
            <h4 className="text-sm font-extrabold text-slate-900">
              Academic Accuracy
            </h4>
            <p className="mt-1 text-xs leading-6 text-slate-600">
              Official board-specific syllabus details are marked verified
              only after checking the relevant source.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-[10px] font-bold tracking-wider text-slate-400">
            LEARN · PREPARE · SUCCEED
          </span>

          <span className="text-xs font-black text-emerald-800">
            PAKISTAN
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      <LatestArticles />

      <EducationNews />

      <section className="section learning-section" id="learning">
        <div className="section-heading">
          <span className="section-kicker">A COMPLETE LEARNING EXPERIENCE</span>
          <h2>Everything you need to <span>move forward.</span></h2>
          <p>More than just study material. A structured approach to understanding, practice and academic growth.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card-top">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-number">0{index + 1}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <span className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="process-intro">
          <span className="section-kicker">LEARN WITH PURPOSE</span>
          <h2>Small steps.<br /><span>Big possibilities.</span></h2>
          <p>Build your knowledge with a simple, organised learning journey.</p>
          <a href="#classes" className="process-link">Find your class <span>→</span></a>
        </div>

        <div className="process-steps">
          {[
            ["01", "Choose your class", "Start with your current academic level."],
            ["02", "Explore your subjects", "Find the subject and chapter you want to study."],
            ["03", "Learn and practise", "Use video lessons, notes and solved questions."],
            ["04", "Test your understanding", "Take your chapter test and aim for 60% or above."],
          ].map((step) => (
            <div className="process-step" key={step[0]}>
              <span>{step[0]}</span>
              <div><h3>{step[1]}</h3><p>{step[2]}</p></div>
              <b>↗</b>
            </div>
          ))}
        </div>
      </section>

      <section className="assessment-banner">
        <div className="assessment-copy">
          <span className="section-kicker">PROGRESS THAT MATTERS</span>
          <h2>Learn it. Practise it.<br />Prove your progress.</h2>
          <p>Each chapter will have its own assessment. Students who score below 60% will be able to practise and retake the test.</p>
        </div>
        <div className="assessment-score">
          <span>PASS REQUIREMENT</span>
          <strong>60<small>%</small></strong>
          <div className="score-track"><i /></div>
          <small>Chapter assessment target</small>
        </div>
      </section>

      <section className="tribute-section" id="tribute">
        <div className="tribute-ornament">“</div>
        <div className="tribute-inner">
          <span className="section-kicker">OUR PURPOSE · OUR INSPIRATION</span>
          <h2>In loving honour of</h2>
          <h3>Syeda Irshad Akhtar <span>(Late)</span></h3>
          <div className="tribute-divider"><i /><span>✦</span><i /></div>
          <p>
            This academy is dedicated in honour of Syeda Irshad Akhtar (Late),
            who devoted her life to providing free education and empowering
            girls through knowledge.
          </p>
          <p className="tribute-final">
            Her commitment to education remains an inspiration for every
            generation that believes knowledge can change lives.
          </p>
        </div>
      </section>

      <section className="ad-section">
        <span className="section-kicker">OUR PARTNERS & SUPPORTERS</span>
        <h2>Advertisement</h2>
        <p>A dedicated space for future, policy-compliant advertising.</p>
        <div className="ad-placeholder">
          <span>ADVERTISEMENT SPACE</span>
          <small>Reserved for future advertising partners</small>
        </div>
      </section>

      <PartnerMarquee />

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-about">
            <Brand />
            <p>Making quality education more accessible to Pakistani students through free learning resources, knowledge and technology.</p>
            <span className="footer-motto">TALEEM HAR BACHAY KA HAQ HAI</span>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#education-news">Education News</a>
            <a href="#learning">Learning Features</a>
            <a href="#tribute">Our Inspiration</a>
          </div>

          <div className="footer-column">
            <h4>Academy</h4>
            <span>Class 9 to 12</span>
            <span>Science & Arts</span>
            <span>Urdu Lessons</span>
            <span>Chapter Assessments</span>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <span>CEO: Syed Ahmed Bilal</span>
            <a href="https://wa.me/923266501314" target="_blank" rel="noopener noreferrer">WhatsApp: 03266501314</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Pakistan Learning Academy. All rights reserved.</span>
          <strong>A Project Of Bilal Marghoob Creations</strong>
        </div>
      </footer>
    </main>
  );
}
