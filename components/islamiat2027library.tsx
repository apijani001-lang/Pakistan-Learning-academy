
"use client";

import { useState } from "react";
import {
  islamiyat2027Info,
  islamiyatChapters2027,
} from "@/data/class9-islamiat-2027";

import {
  islamiyat2027Deletions,
  islamiyat2027PaperInstructions,
  islamiyat2027DeletionSummary,
  islamiyat2027DeletionSource,
} from "@/data/class9-islamiat-2027-deletions";

type Islamiat2027LibraryProps = {
  bookUrl?: string;
};

export default function Islamiat2027Library({
  bookUrl,
}: Islamiat2027LibraryProps) {
  const [showExcluded, setShowExcluded] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);

  const isChapterExcluded = (chapterNumber: number) =>
    islamiyatChapters2027.some(
      (chapter) =>
        chapter.number === chapterNumber &&
        chapter.examStatus === "fully-excluded"
    );

  const getChapterDeletion = (chapterNumber: number) =>
    islamiyat2027Deletions.filter(
      (deletion) => deletion.chapter === chapterNumber
    );

  return (
    <main className="space-y-6">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            CLASS 9
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
            SESSION 2026–27
          </span>
          <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-bold text-emerald-100">
            ANNUAL EXAM 2027
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
          Islamiat 2027
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-100">
          Class 9 Islamiat Smart Syllabus, chapter-wise deleted topics,
          examination instructions and paper information.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-3xl font-extrabold">
              {islamiyat2027Info.totalMarks}
            </p>
            <p className="mt-1 text-xs text-emerald-100">Total Marks</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-3xl font-extrabold">3</p>
            <p className="mt-1 text-xs text-emerald-100">Hours</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-white/10 p-4 sm:col-span-1">
            <p className="text-3xl font-extrabold">
              {islamiyat2027Info.totalChapters}
            </p>
            <p className="mt-1 text-xs text-emerald-100">Textbook Chapters</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">
            {islamiyat2027DeletionSummary.partiallyAffectedChapters}
          </p>
          <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-200">
            Partially Affected
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-2xl font-extrabold text-red-700 dark:text-red-300">
            {islamiyat2027DeletionSummary.fullyExcludedChapters}
          </p>
          <p className="mt-1 text-xs text-red-800 dark:text-red-200">
            Fully Excluded
          </p>
        </div>

        <div className="col-span-2 rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30 sm:col-span-1">
          <p className="text-2xl font-extrabold text-blue-700 dark:text-blue-300">
            {islamiyat2027DeletionSummary.excludedHadithNumbers.length}
          </p>
          <p className="mt-1 text-xs text-blue-800 dark:text-blue-200">
            Excluded Ahadith
          </p>
        </div>
      </section>

      {bookUrl && (
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
          <h3 className="font-bold text-emerald-900 dark:text-emerald-200">
            Islamiat Textbook
          </h3>
          <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-300">
            Open the available Class 9 Islamiat textbook.
          </p>
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800"
          >
            Open Islamiat Book
          </a>
        </section>
      )}

      <section className="space-y-3">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Chapter-wise Syllabus
        </h3>

        {islamiyatChapters2027.map((chapter) => {
          const excluded = isChapterExcluded(chapter.number);
          const deletions = getChapterDeletion(chapter.number);

          return (
            <article
              key={chapter.number}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Chapter {chapter.number}
                  </p>

                  <h4 className="mt-1 font-bold text-gray-900 dark:text-white">
                    {chapter.title}
                  </h4>

                  {chapter.titleUrdu && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {chapter.titleUrdu}
                    </p>
                  )}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    excluded
                      ? "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200"
                      : deletions.length > 0
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                  }`}
                >
                  {excluded
                    ? "Fully Excluded"
                    : deletions.length > 0
                      ? "Partially Affected"
                      : "Included"}
                </span>
              </div>

              {chapter.examNote && (
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {chapter.examNote}
                </p>
              )}

              {deletions.length > 0 && (
                <div className="mt-4 space-y-3">
                  {deletions.map((deletion, index) => (
                    <div
                      key={`${chapter.number}-${index}`}
                      className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20"
                    >
                      <p className="font-bold text-red-800 dark:text-red-200">
                        {deletion.category}
                      </p>

                      {deletion.categoryUrdu && (
                        <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                          {deletion.categoryUrdu}
                        </p>
                      )}

                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                        {deletion.excludedTopics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>

                      {deletion.examNote && (
                        <p className="mt-3 text-xs leading-6 text-red-800 dark:text-red-300">
                          {deletion.examNote}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {chapter.number === 6 && (
                <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
                  Chapter 6 se detailed questions paper mein include nahi honge.
                </p>
              )}

              {chapter.number === 7 && (
                <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950/30 dark:text-red-200">
                  Complete chapter examination syllabus se excluded hai.
                </p>
              )}
            </article>
          );
        })}
      </section>

      <section className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
        <button
          type="button"
          onClick={() => setShowExcluded((value) => !value)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span className="text-lg font-extrabold text-red-900 dark:text-red-200">
            Exclusion Summary
          </span>
          <span className="text-sm font-bold text-red-700 dark:text-red-300">
            {showExcluded ? "Hide" : "Show"}
          </span>
        </button>

        {showExcluded && (
          <div className="mt-4 space-y-3 text-sm text-red-900 dark:text-red-200">
            <p>
              <strong>Excluded Hadith numbers:</strong>{" "}
              {islamiyat2027DeletionSummary.excludedHadithNumbers.join(", ")}
            </p>

            <p>
              <strong>Chapter 6:</strong> Detailed questions excluded.
            </p>

            <p>
              <strong>Chapter 7:</strong> Completely excluded.
            </p>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <button
          type="button"
          onClick={() => setShowInstructions((value) => !value)}
          className="flex w-full items-center justify-between gap-3 text-left"
        >
          <span className="text-lg font-extrabold text-gray-900 dark:text-white">
            Paper Instructions
          </span>
          <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
            {showInstructions ? "Hide" : "Show"}
          </span>
        </button>

        {showInstructions && (
          <div className="mt-4 space-y-3">
            {islamiyat2027PaperInstructions.map((instruction, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
              >
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {instruction.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {instruction.instruction}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
        <h3 className="font-extrabold text-amber-900 dark:text-amber-200">
          Source and Verification
        </h3>

        <div className="mt-3 space-y-2 text-sm text-amber-900 dark:text-amber-200">
          <p>
            <strong>Notification:</strong>{" "}
            {islamiyat2027DeletionSource.notification}
          </p>
          <p>
            <strong>Date:</strong> {islamiyat2027DeletionSource.date}
          </p>
          <p>
            <strong>Session:</strong> {islamiyat2027DeletionSource.session}
          </p>
          <p>
            <strong>Examination:</strong>{" "}
            {islamiyat2027DeletionSource.examination}
          </p>
          <p className="leading-6">
            {islamiyat2027DeletionSource.verification}
          </p>
        </div>

        <p className="mt-4 text-xs leading-6 text-amber-800 dark:text-amber-300">
          {islamiyat2027Info.verificationNote}
        </p>
      </section>
    </main>
  );
}
