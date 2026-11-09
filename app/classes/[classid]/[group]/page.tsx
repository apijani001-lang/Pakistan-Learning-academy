
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

type PageProps = {
  params: Promise<{ classid: string; group: string }>;
};

const classes: Record<string, string> = {
  "9": "Class 9",
  "10": "Class 10",
  "11": "Class 11",
  "12": "Class 12",
};

const groups: Record<string, { title: string; description: string }> = {
  science: {
    title: "Science Group",
    description:
      "Science subjects, concepts, practical learning and examination preparation.",
  },
  arts: {
    title: "Arts Group",
    description:
      "Humanities subjects, study notes and examination preparation.",
  },
};

const boardRegions = [
  {
    region: "Punjab",
    boards: [
      { id: "lahore", name: "BISE Lahore" },
      { id: "gujranwala", name: "BISE Gujranwala" },
      { id: "faisalabad", name: "BISE Faisalabad" },
      { id: "multan", name: "BISE Multan" },
      { id: "rawalpindi", name: "BISE Rawalpindi" },
      { id: "sargodha", name: "BISE Sargodha" },
      { id: "bahawalpur", name: "BISE Bahawalpur" },
      { id: "dg-khan", name: "BISE Dera Ghazi Khan" },
      { id: "sahiwal", name: "BISE Sahiwal" },
    ],
  },
  {
    region: "Sindh",
    boards: [
      { id: "karachi", name: "BSEK Karachi" },
      { id: "biek-karachi", name: "BIEK Karachi" },
      { id: "hyderabad", name: "BISE Hyderabad" },
      { id: "sukkur", name: "BISE Sukkur" },
      { id: "larkana", name: "BISE Larkana" },
      { id: "mirpurkhas", name: "BISE Mirpurkhas" },
    ],
  },
  {
    region: "Khyber Pakhtunkhwa",
    boards: [
      { id: "peshawar", name: "BISE Peshawar" },
      { id: "mardan", name: "BISE Mardan" },
      { id: "swat", name: "BISE Swat" },
      { id: "abbottabad", name: "BISE Abbottabad" },
      { id: "bannu", name: "BISE Bannu" },
      { id: "kohat", name: "BISE Kohat" },
      { id: "di-khan", name: "BISE Dera Ismail Khan" },
      { id: "malakand", name: "BISE Malakand" },
    ],
  },
  {
    region: "Balochistan",
    boards: [{ id: "quetta", name: "BBISE Quetta" }],
  },
  {
    region: "Federal",
    boards: [{ id: "fbise", name: "FBISE Islamabad" }],
  },
  {
    region: "Azad Jammu & Kashmir",
    boards: [{ id: "ajk-mirpur", name: "BISE AJK Mirpur" }],
  },
  {
    region: "Gilgit-Baltistan",
    boards: [{ id: "gb", name: "Gilgit-Baltistan Board" }],
  },
];

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { classid, group } = await params;
  const className = classes[String(Number(classid))];
  const selectedGroup = groups[group];

  return {
    title:
      className && selectedGroup
        ? `${className} ${selectedGroup.title} Boards | Pakistan Learning Academy`
        : "Board Selection | Pakistan Learning Academy",
    description:
      "Select your education board to explore relevant subjects and learning resources.",
  };
}

function GroupPageLoading() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Pakistan Learning Academy
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">
            Loading Board Selection...
          </h1>
          <p className="mt-4 text-slate-300">
            Please wait while we prepare the available education boards.
          </p>
        </div>
      </section>
    </main>
  );
}

async function GroupPageContent({ params }: PageProps) {
  const { classid, group } = await params;
  const classNumber = String(Number(classid));
  const className = classes[classNumber];
  const selectedGroup = groups[group];

  if (!className || !selectedGroup) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/classes/${classNumber}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to {className}
          </Link>

          <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10 text-3xl">
            <GraduationCap size={36} className="text-emerald-300" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Pakistan Learning Academy
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Select Your <span className="text-emerald-400">Board</span>
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            {className} · {selectedGroup.title}
          </p>

          <p className="mt-3 max-w-2xl leading-8 text-slate-400">
            {selectedGroup.description} Apna examination board select karein.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Board-wise Education
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Choose Your Education Board
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Har board ka syllabus aur examination pattern alag ho sakta hai.
            Apne board ke mutabiq learning resources select karein.
          </p>
        </div>

        <div className="space-y-12">
          {boardRegions.map((region) => (
            <section key={region.region}>
              <h3 className="mb-5 text-2xl font-black text-slate-900">
                {region.region}
              </h3>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {region.boards.map((board) => (
                  <Link
                    key={board.id}
                    href={`/classes/${classNumber}/${group}/board/${board.id}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                        🏫
                      </div>
                      <ArrowRight
                        size={21}
                        className="text-emerald-700 transition group-hover:translate-x-1"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                      {board.name}
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                      {className} {selectedGroup.title} resources
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                      Select Board <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-emerald-950 p-8 text-white md:p-10">
          <div className="flex items-center gap-3 text-emerald-300">
            <ShieldCheck size={23} />
            <span className="text-sm font-bold uppercase tracking-wider">
              Our Education Commitment
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-black md:text-3xl">
            Board-Specific Learning for Pakistani Students
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-emerald-100">
            Official syllabus, textbooks aur paper schemes ko relevant
            education board ke documents se verify karne ke baad hi
            publish kiya jayega.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function GroupPage({ params }: PageProps) {
  return (
    <Suspense fallback={<GroupPageLoading />}>
      <GroupPageContent params={params} />
    </Suspense>
  );
}
