
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  Target,
} from "lucide-react";

type PageProps = {
  params: Promise<{
    classid: string;
    group: string;
    boardid: string;
    subject: string;
    chapter: string;
  }>;
};

function VideoPlayer({
  title,
  videoId,
}: {
  title: string;
  videoId?: string;
}) {
  const validVideoId = videoId?.trim();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2 text-sm font-bold text-white">
          <PlayCircle className="shrink-0 text-red-400" size={20} />
          <span className="truncate">{title}</span>
        </div>
        <span className="shrink-0 rounded-full bg-red-500/15 px-3 py-1 text-[11px] font-bold text-red-300">
          YouTube Lesson
        </span>
      </div>

      {validVideoId ? (
        <div className="aspect-video w-full bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${validVideoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-6 text-center text-white">
          <PlayCircle size={42} className="mb-3 text-red-400" />
          <p className="font-bold">Video lesson will appear here</p>
          <p className="mt-2 max-w-md text-xs leading-6 text-slate-300">
            Is lesson ki exact YouTube video ID abhi assign nahi hui. Admin
            panel aur video database connect hone ke baad yahan selected video
            website ke andar play hogi.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 px-4 py-3 text-xs text-slate-300">
        <span>Website ke andar playback</span>
        <span>Fullscreen supported</span>
      </div>
    </div>
  );
}

const chapterTopics = [
  {
    title: "1.1 Introduction to Physics",
    urdu: "طبیعیات کا تعارف",
    explanation:
      "Physics is the branch of science that studies matter, energy and their interaction. It helps us understand natural phenomena and the working principles of modern technology.",
    translation:
      "طبیعیات سائنس کی وہ شاخ ہے جس میں مادہ، توانائی اور ان کے باہمی تعلق کا مطالعہ کیا جاتا ہے۔ طبیعیات ہمیں قدرتی مظاہر اور جدید ٹیکنالوجی کے کام کرنے کے اصول سمجھنے میں مدد دیتی ہے۔",
    example:
      "A fan converts electrical energy into mechanical energy. A refrigerator uses principles of heat transfer.",
    exampleUrdu:
      "پنکھا برقی توانائی کو حرکی توانائی میں تبدیل کرتا ہے۔ فریج حرارت کی منتقلی کے اصولوں پر کام کرتا ہے۔",
  },
  {
    title: "1.2 Physical Quantities",
    urdu: "طبیعی مقداریں",
    explanation:
      "A physical quantity is a property that can be measured and expressed by a numerical magnitude and a unit. Length, mass and time are examples of physical quantities.",
    translation:
      "طبیعی مقدار ایسی خاصیت ہے جسے ناپا جا سکتا ہے اور عددی مقدار اور اکائی کی صورت میں ظاہر کیا جا سکتا ہے۔ لمبائی، کمیت اور وقت طبیعی مقداروں کی مثالیں ہیں۔",
    example:
      "If the length of a table is 2 metres, 2 is the numerical magnitude and metre is the unit.",
    exampleUrdu:
      "اگر میز کی لمبائی 2 میٹر ہے تو 2 عددی مقدار ہے اور میٹر اس کی اکائی ہے۔",
  },
  {
    title: "1.3 International System of Units",
    urdu: "اکائیوں کا بین الاقوامی نظام",
    explanation:
      "The International System of Units (SI) provides standard units for scientific measurements. It includes seven base quantities and their base units.",
    translation:
      "اکائیوں کا بین الاقوامی نظام (SI) سائنسی پیمائش کے لیے معیاری اکائیاں فراہم کرتا ہے۔ اس نظام میں سات بنیادی مقداریں اور ان کی بنیادی اکائیاں شامل ہیں۔",
    example:
      "The SI unit of length is metre (m), mass is kilogram (kg), and time is second (s).",
    exampleUrdu:
      "لمبائی کی SI اکائی میٹر (m)، کمیت کی کلوگرام (kg) اور وقت کی سیکنڈ (s) ہے۔",
  },
  {
    title: "1.4 Prefixes: Multiples and Sub-multiples",
    urdu: "سابقے: بڑی اور چھوٹی اکائیاں",
    explanation:
      "Prefixes are added before units to represent multiples or sub-multiples. Common examples include kilo, mega, milli, micro and nano.",
    translation:
      "اکائیوں سے پہلے سابقے لگائے جاتے ہیں تاکہ بڑی یا چھوٹی مقداروں کو آسانی سے ظاہر کیا جا سکے۔ کلو، میگا، ملی، مائیکرو اور نینو اس کی مثالیں ہیں۔",
    example: "1 kilometre = 1000 metres. 1 millimetre = 0.001 metre.",
    exampleUrdu:
      "1 کلومیٹر = 1000 میٹر۔ 1 ملی میٹر = 0.001 میٹر۔",
  },
  {
    title: "1.5 Scientific Notation",
    urdu: "سائنسی انداز میں اعداد لکھنا",
    explanation:
      "Scientific notation expresses a number as a value from 1 up to but not including 10 multiplied by a power of 10.",
    translation:
      "سائنسی انداز میں کسی عدد کو 1 سے 10 سے چھوٹی عددی مقدار اور 10 کی مناسب طاقت کے حاصل ضرب کی صورت میں لکھا جاتا ہے۔",
    example: "450000 = 4.5 × 10⁵. Also, 0.00032 = 3.2 × 10⁻⁴.",
    exampleUrdu:
      "450000 کو 4.5 × 10⁵ اور 0.00032 کو 3.2 × 10⁻⁴ لکھا جا سکتا ہے۔",
  },
  {
    title: "1.6 Measuring Instruments",
    urdu: "پیمائش کے آلات",
    explanation:
      "Different instruments are used to measure length, mass, time and volume. These include metre rules, measuring tapes, Vernier Callipers, screw gauges, balances, stopwatches and measuring cylinders.",
    translation:
      "لمبائی، کمیت، وقت اور حجم ناپنے کے لیے مختلف آلات استعمال ہوتے ہیں۔ ان میں میٹر رول، پیمائشی فیتہ، ورنیئر کیلپرز، پیچ پیما، ترازو، اسٹاپ واچ اور پیمائشی سلنڈر شامل ہیں۔",
    example:
      "A screw gauge can measure the small diameter of a wire. A measuring cylinder can determine the volume of a liquid.",
    exampleUrdu:
      "پیچ پیما تار کا بہت چھوٹا قطر ناپ سکتا ہے۔ پیمائشی سلنڈر مائع کا حجم معلوم کرنے کے لیے استعمال ہوتا ہے۔",
  },
  {
    title: "1.7 Significant Figures",
    urdu: "با معنی ہندسے",
    explanation:
      "Significant figures are the accurately known digits and the first doubtful digit in a measured value. They indicate the precision of a measurement.",
    translation:
      "با معنی ہندسوں میں وہ تمام ہندسے شامل ہوتے ہیں جو درست طور پر معلوم ہوں اور ان کے بعد آنے والا پہلا اندازاً معلوم ہندسہ بھی شامل ہوتا ہے۔ یہ پیمائش کی باریکی ظاہر کرتے ہیں۔",
    example: "The value 18.4 cm contains three significant figures.",
    exampleUrdu: "18.4 سینٹی میٹر میں تین با معنی ہندسے ہیں۔",
  },
];

const baseUnits = [
  ["Length", "لمبائی", "metre", "m"],
  ["Mass", "کمیت", "kilogram", "kg"],
  ["Time", "وقت", "second", "s"],
  ["Electric current", "برقی رو", "ampere", "A"],
  ["Temperature", "درجہ حرارت", "kelvin", "K"],
  ["Amount of substance", "مقدارِ مادہ", "mole", "mol"],
  ["Luminous intensity", "شدتِ روشنی", "candela", "cd"],
];

const shortQuestions = [
  {
    q: "What is Physics?",
    urdu: "طبیعیات کیا ہے؟",
    a: "Physics is the branch of science that studies matter, energy and their interaction.",
    au: "طبیعیات سائنس کی وہ شاخ ہے جس میں مادہ، توانائی اور ان کے باہمی تعلق کا مطالعہ کیا جاتا ہے۔",
  },
  {
    q: "What is a physical quantity?",
    urdu: "طبیعی مقدار کسے کہتے ہیں؟",
    a: "A measurable property expressed by a numerical magnitude and a unit is called a physical quantity.",
    au: "ایسی قابلِ پیمائش خاصیت جسے عددی مقدار اور اکائی کے ساتھ ظاہر کیا جائے، طبیعی مقدار کہلاتی ہے۔",
  },
  {
    q: "Differentiate between base and derived quantities.",
    urdu: "بنیادی اور اخذ شدہ مقداروں میں فرق بیان کریں۔",
    a: "Base quantities are independent quantities. Derived quantities are expressed in terms of base quantities.",
    au: "بنیادی مقداریں آزاد ہوتی ہیں، جبکہ اخذ شدہ مقداریں بنیادی مقداروں کی مدد سے حاصل کی جاتی ہیں۔",
  },
  {
    q: "How many SI base units are there?",
    urdu: "SI نظام میں کتنی بنیادی اکائیاں ہیں؟",
    a: "There are seven SI base units.",
    au: "SI نظام میں سات بنیادی اکائیاں ہیں۔",
  },
  {
    q: "What is scientific notation?",
    urdu: "سائنسی اندازِ تحریر کیا ہے؟",
    a: "It is a way of expressing a number as a value between 1 and 10 multiplied by a power of 10.",
    au: "یہ اعداد لکھنے کا ایسا طریقہ ہے جس میں عدد کو 1 سے 10 سے چھوٹی مقدار اور 10 کی طاقت کے حاصل ضرب کی صورت میں لکھتے ہیں۔",
  },
  {
    q: "What is the least count of an instrument?",
    urdu: "کسی آلے کی کم از کم پیمائشی قدر کیا ہوتی ہے؟",
    a: "The least count is the smallest measurement that an instrument can measure.",
    au: "کسی آلے سے ناپی جانے والی سب سے چھوٹی مقدار اس آلے کا کم از کم شمار کہلاتی ہے۔",
  },
  {
    q: "Why is zero correction applied?",
    urdu: "صفر کی تصحیح کیوں کی جاتی ہے؟",
    a: "Zero correction is applied to compensate for zero error and obtain the correct measurement.",
    au: "صفر کی غلطی کو درست کرنے اور صحیح پیمائش حاصل کرنے کے لیے صفر کی تصحیح کی جاتی ہے۔",
  },
  {
    q: "What is a Vernier Callipers used for?",
    urdu: "ورنیئر کیلپرز کس کام آتا ہے؟",
    a: "It is used to measure small lengths and internal or external diameters with greater precision than a metre rule.",
    au: "یہ چھوٹی لمبائیاں اور اندرونی یا بیرونی قطر زیادہ باریکی سے ناپنے کے لیے استعمال ہوتا ہے۔",
  },
  {
    q: "What is a screw gauge used for?",
    urdu: "پیچ پیما کس کام آتا ہے؟",
    a: "It is used to measure very small dimensions such as the diameter of a thin wire.",
    au: "یہ بہت چھوٹی پیمائشیں مثلاً باریک تار کا قطر معلوم کرنے کے لیے استعمال ہوتا ہے۔",
  },
  {
    q: "What is a stopwatch?",
    urdu: "اسٹاپ واچ کیا ہے؟",
    a: "A stopwatch is an instrument used to measure the time interval of an event.",
    au: "اسٹاپ واچ ایسا آلہ ہے جو کسی واقعے میں صرف ہونے والا وقت ناپتا ہے۔",
  },
  {
    q: "What are significant figures?",
    urdu: "با معنی ہندسے کیا ہوتے ہیں؟",
    a: "They are all accurately known digits and the first doubtful digit in a measured value.",
    au: "کسی پیمائش میں تمام درست معلوم ہندسے اور پہلا مشکوک ہندسہ با معنی ہندسے کہلاتے ہیں۔",
  },
  {
    q: "How can the volume of an irregular solid be measured?",
    urdu: "بے قاعدہ ٹھوس جسم کا حجم کیسے معلوم کیا جاتا ہے؟",
    a: "By the displacement method using a measuring cylinder. The final water reading minus the initial reading gives the solid's volume.",
    au: "پیمائشی سلنڈر میں پانی کی ابتدائی اور آخری سطح کا فرق معلوم کیا جاتا ہے۔ یہی فرق ٹھوس جسم کا حجم ہوتا ہے۔",
  },
];

const longQuestions = [
  {
    q: "Explain the difference between base and derived physical quantities with examples.",
    urdu: "بنیادی اور اخذ شدہ طبیعی مقداروں میں فرق مثالوں کے ساتھ بیان کریں۔",
    points: [
      "Base quantities are independent.",
      "Length, mass and time are examples of base quantities.",
      "Derived quantities are obtained from base quantities.",
      "Speed, area, volume, force and density are examples of derived quantities.",
    ],
    pointsUrdu: [
      "بنیادی مقداریں آزاد ہوتی ہیں۔",
      "لمبائی، کمیت اور وقت بنیادی مقداروں کی مثالیں ہیں۔",
      "اخذ شدہ مقداریں بنیادی مقداروں سے حاصل کی جاتی ہیں۔",
      "رفتار، رقبہ، حجم، قوت اور کثافت اخذ شدہ مقداروں کی مثالیں ہیں۔",
    ],
  },
  {
    q: "Describe the working and uses of Vernier Callipers.",
    urdu: "ورنیئر کیلپرز کا طریقۂ کار اور استعمالات بیان کریں۔",
    points: [
      "It consists of a main scale and a Vernier scale.",
      "The object is held gently between suitable jaws.",
      "Main scale reading is noted first.",
      "The coinciding Vernier division is multiplied by the least count.",
      "Zero correction is applied to obtain the correct reading.",
    ],
    pointsUrdu: [
      "اس میں مین اسکیل اور ورنیئر اسکیل شامل ہوتے ہیں۔",
      "جسم کو مناسب جبڑوں کے درمیان نرمی سے رکھا جاتا ہے۔",
      "سب سے پہلے مین اسکیل کی ریڈنگ نوٹ کی جاتی ہے۔",
      "ملنے والی ورنیئر تقسیم کو کم از کم شمار سے ضرب دی جاتی ہے۔",
      "صحیح ریڈنگ کے لیے صفر کی تصحیح شامل کی جاتی ہے۔",
    ],
  },
  {
    q: "Explain the working of a micrometer screw gauge.",
    urdu: "مائیکرو میٹر پیچ پیما کا طریقۂ کار بیان کریں۔",
    points: [
      "It is used for measuring very small dimensions.",
      "The object is placed between the stud and spindle.",
      "Main scale and circular scale readings are noted.",
      "The circular scale reading is multiplied by the least count.",
      "Zero correction is applied to find the correct measurement.",
    ],
    pointsUrdu: [
      "یہ بہت چھوٹی پیمائشیں معلوم کرنے کے لیے استعمال ہوتا ہے۔",
      "جسم کو اسٹڈ اور اسپنڈل کے درمیان رکھا جاتا ہے۔",
      "مین اسکیل اور گول اسکیل کی ریڈنگ نوٹ کی جاتی ہے۔",
      "گول اسکیل کی ریڈنگ کو کم از کم شمار سے ضرب دی جاتی ہے۔",
      "درست پیمائش حاصل کرنے کے لیے صفر کی تصحیح کی جاتی ہے۔",
    ],
  },
  {
    q: "Explain significant figures and their basic rules.",
    urdu: "با معنی ہندسوں کی وضاحت کریں اور ان کے بنیادی اصول لکھیں۔",
    points: [
      "All non-zero digits are significant.",
      "Zeros between significant digits are significant.",
      "Ending zeros after a decimal point are significant.",
      "Leading zeros used only to locate the decimal point are not significant.",
      "Scientific notation helps identify significant figures in ambiguous whole numbers.",
    ],
    pointsUrdu: [
      "تمام غیر صفر ہندسے با معنی ہوتے ہیں۔",
      "دو با معنی ہندسوں کے درمیان آنے والے صفر بھی با معنی ہوتے ہیں۔",
      "اعشاریہ کے بعد آخر میں آنے والے صفر با معنی ہوتے ہیں۔",
      "اعشاریہ کی جگہ ظاہر کرنے کے لیے شروع میں آنے والے صفر با معنی نہیں ہوتے۔",
      "غیر واضح اعداد میں سائنسی اندازِ تحریر با معنی ہندسے پہچاننے میں مدد دیتا ہے۔",
    ],
  },
];

const mcqs = [
  {
    q: "How many SI base units are there?",
    urdu: "SI نظام میں کتنی بنیادی اکائیاں ہیں؟",
    options: ["3", "6", "7", "9"],
    answer: "7",
    explanation: "The SI system has seven base units.",
    explanationUrdu: "SI نظام میں سات بنیادی اکائیاں ہیں۔",
  },
  {
    q: "Which one is a base unit?",
    urdu: "ان میں سے کون سی بنیادی اکائی ہے؟",
    options: ["Newton", "Pascal", "Kilogram", "Watt"],
    answer: "Kilogram",
    explanation: "Kilogram is the SI base unit of mass.",
    explanationUrdu: "کلوگرام کمیت کی بنیادی SI اکائی ہے۔",
  },
  {
    q: "The SI unit of amount of substance is:",
    urdu: "مقدارِ مادہ کی SI اکائی کیا ہے؟",
    options: ["Gram", "Kilogram", "Mole", "Newton"],
    answer: "Mole",
    explanation: "Mole is the SI base unit of amount of substance.",
    explanationUrdu: "مول مقدارِ مادہ کی بنیادی SI اکائی ہے۔",
  },
  {
    q: "A measuring cylinder is used to measure:",
    urdu: "پیمائشی سلنڈر کس چیز کو ناپتا ہے؟",
    options: ["Mass", "Area", "Volume", "Force"],
    answer: "Volume",
    explanation: "A measuring cylinder measures liquid volume.",
    explanationUrdu: "پیمائشی سلنڈر مائع کا حجم ناپتا ہے۔",
  },
  {
    q: "Which instrument is suitable for measuring the internal diameter of a test tube?",
    urdu: "ٹیسٹ ٹیوب کا اندرونی قطر ناپنے کے لیے کون سا آلہ مناسب ہے؟",
    options: ["Metre rule", "Vernier Callipers", "Measuring tape", "Stopwatch"],
    answer: "Vernier Callipers",
    explanation: "Vernier Callipers can measure internal and external diameters.",
    explanationUrdu: "ورنیئر کیلپرز اندرونی اور بیرونی قطر ناپ سکتے ہیں۔",
  },
  {
    q: "Which instrument is commonly used to measure the diameter of a thin wire?",
    urdu: "باریک تار کا قطر ناپنے کے لیے عام طور پر کون سا آلہ استعمال ہوتا ہے؟",
    options: ["Measuring cylinder", "Stopwatch", "Screw gauge", "Beam balance"],
    answer: "Screw gauge",
    explanation: "A screw gauge is suitable for very small dimensions.",
    explanationUrdu: "پیچ پیما بہت چھوٹی پیمائشوں کے لیے موزوں ہے۔",
  },
  {
    q: "The least count of a common laboratory screw gauge described in this textbook is:",
    urdu: "کتاب میں بیان کردہ عام لیبارٹری پیچ پیما کا کم از کم شمار کیا ہے؟",
    options: ["1 mm", "0.1 mm", "0.01 mm", "10 mm"],
    answer: "0.01 mm",
    explanation: "The described screw gauge has a least count of 0.01 mm.",
    explanationUrdu: "بیان کردہ پیچ پیما کا کم از کم شمار 0.01 ملی میٹر ہے۔",
  },
  {
    q: "The least count of a metre rule is commonly:",
    urdu: "میٹر رول کا عام کم از کم شمار کیا ہے؟",
    options: ["1 cm", "1 mm", "0.01 mm", "1 m"],
    answer: "1 mm",
    explanation: "One millimetre is the smallest division on a common metre rule.",
    explanationUrdu: "عام میٹر رول پر ایک ملی میٹر سب سے چھوٹی تقسیم ہوتی ہے۔",
  },
  {
    q: "Which quantity is derived?",
    urdu: "ان میں سے کون سی اخذ شدہ مقدار ہے؟",
    options: ["Length", "Mass", "Time", "Speed"],
    answer: "Speed",
    explanation: "Speed is distance divided by time.",
    explanationUrdu: "رفتار فاصلہ کو وقت پر تقسیم کرنے سے حاصل ہوتی ہے۔",
  },
  {
    q: "The prefix kilo represents:",
    urdu: "کلو سابقہ کس مقدار کو ظاہر کرتا ہے؟",
    options: ["10", "100", "1000", "1000000"],
    answer: "1000",
    explanation: "Kilo represents 10³ or 1000.",
    explanationUrdu: "کلو 10³ یعنی 1000 کو ظاہر کرتا ہے۔",
  },
  {
    q: "Scientific notation of 450000 is:",
    urdu: "450000 کا سائنسی اندازِ تحریر کیا ہے؟",
    options: ["45 × 10⁴", "4.5 × 10⁵", "0.45 × 10⁶", "450 × 10³"],
    answer: "4.5 × 10⁵",
    explanation: "The decimal point is moved five places to the left.",
    explanationUrdu: "اعشاریہ کو پانچ جگہ بائیں منتقل کیا جاتا ہے۔",
  },
  {
    q: "A stopwatch measures:",
    urdu: "اسٹاپ واچ کیا ناپتی ہے؟",
    options: ["Length", "Mass", "Time interval", "Volume"],
    answer: "Time interval",
    explanation: "A stopwatch measures the time interval of an event.",
    explanationUrdu: "اسٹاپ واچ کسی واقعے کا وقت ناپتی ہے۔",
  },
  {
    q: "The volume of an irregular solid can be found by:",
    urdu: "بے قاعدہ ٹھوس جسم کا حجم کس طریقے سے معلوم کیا جا سکتا ہے؟",
    options: ["Displacement method", "Stopwatch method", "Weighing only", "Temperature method"],
    answer: "Displacement method",
    explanation: "The increase in water volume equals the volume of the immersed solid.",
    explanationUrdu: "پانی کے حجم میں اضافہ ڈبوئے گئے جسم کے حجم کے برابر ہوتا ہے۔",
  },
  {
    q: "Which digits are significant in 0.00580?",
    urdu: "0.00580 میں کون سے ہندسے با معنی ہیں؟",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "The significant digits are 5, 8 and the final zero.",
    explanationUrdu: "اس عدد میں 5، 8 اور آخر میں آنے والا صفر با معنی ہیں۔",
  },
];

const numericalPractice = [
  {
    q: "Convert 5 kilometres into metres.",
    urdu: "5 کلومیٹر کو میٹر میں تبدیل کریں۔",
    solution: "1 km = 1000 m, therefore 5 km = 5 × 1000 = 5000 m.",
    solutionUrdu: "1 کلومیٹر = 1000 میٹر، لہٰذا 5 × 1000 = 5000 میٹر۔",
  },
  {
    q: "Write 0.00032 in scientific notation.",
    urdu: "0.00032 کو سائنسی انداز میں لکھیں۔",
    solution: "0.00032 = 3.2 × 10⁻⁴.",
    solutionUrdu: "اعشاریہ کو چار جگہ دائیں منتقل کرنے پر 3.2 × 10⁻⁴ حاصل ہوتا ہے۔",
  },
  {
    q: "A measuring cylinder contains 40 mL of water. After a stone is immersed, the reading becomes 55 mL. Find the volume of the stone.",
    urdu: "ایک سلنڈر میں پانی 40 ملی لیٹر ہے۔ پتھر ڈالنے کے بعد ریڈنگ 55 ملی لیٹر ہو جاتی ہے۔ پتھر کا حجم معلوم کریں۔",
    solution: "Volume = Final reading − Initial reading = 55 − 40 = 15 mL.",
    solutionUrdu: "حجم = آخری ریڈنگ − ابتدائی ریڈنگ = 55 − 40 = 15 ملی لیٹر۔",
  },
  {
    q: "A screw gauge has a pitch of 0.5 mm and 50 circular scale divisions. Find its least count.",
    urdu: "ایک پیچ پیما کا پچ 0.5 ملی میٹر اور گول اسکیل کی تقسیمیں 50 ہیں۔ کم از کم شمار معلوم کریں۔",
    solution: "Least count = Pitch ÷ Number of divisions = 0.5 ÷ 50 = 0.01 mm.",
    solutionUrdu: "کم از کم شمار = پچ ÷ تقسیموں کی تعداد = 0.5 ÷ 50 = 0.01 ملی میٹر۔",
  },
  {
    q: "A rectangular sheet is 6.7 cm long and 5.4 cm wide. Find its area.",
    urdu: "ایک مستطیل شیٹ کی لمبائی 6.7 سینٹی میٹر اور چوڑائی 5.4 سینٹی میٹر ہے۔ رقبہ معلوم کریں۔",
    solution: "Area = Length × Width = 6.7 × 5.4 = 36.18 cm². To two significant figures, area = 36 cm².",
    solutionUrdu: "رقبہ = لمبائی × چوڑائی = 6.7 × 5.4 = 36.18 مربع سینٹی میٹر۔ دو با معنی ہندسوں تک جواب 36 مربع سینٹی میٹر ہے۔",
  },
];

const learningOutcomes = [
  "Explain the role of Physics in science, technology and society.",
  "Differentiate between base and derived quantities.",
  "List the seven SI base units and symbols.",
  "Convert common prefixes and units.",
  "Write values in scientific notation.",
  "Understand Vernier Callipers and screw gauge.",
  "Explain significant figures and measurement precision.",
];

function ChapterLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <BookOpen className="mx-auto mb-3 text-emerald-600" size={36} />
        <p className="font-bold text-slate-800">Loading chapter...</p>
      </div>
    </main>
  );
}

async function ChapterContent({ params }: PageProps) {
  await connection();

  const { classid, group, boardid, subject, chapter } = await params;

  const subjectUrl = `/classes/${classid}/${group}/board/${boardid}/${subject}`;
  const chapterTestUrl = `${subjectUrl}/${chapter}/test`;

  const isChapterOne =
    classid === "9" &&
    group === "science" &&
    subject === "physics" &&
    chapter === "chapter-1";

  const chapterName = "Physical Quantities and Measurement";

  if (!isChapterOne) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <BookOpen className="mx-auto mb-5 text-emerald-600" size={42} />
          <h1 className="text-2xl font-black text-slate-900">
            Learning Material Coming Soon
          </h1>
          <p className="mt-4 text-slate-600">
            Is chapter ka verified learning material tayyar kiya ja raha hai.
          </p>
          <Link
            href={subjectUrl}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-[#071b2b]"
          >
            <ArrowLeft size={18} />
            Back to Chapters
          </Link>
        </div>
      </main>
    );
  }

  const validMcqs = mcqs;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-[#071b2b] px-5 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href={subjectUrl}
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Chapters
          </Link>

          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-300">
            Class 9 · Physics · Chapter 1
          </div>

          <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            {chapterName}
          </h1>

          <p className="mt-4 text-lg font-semibold text-emerald-300">
            طبیعی مقداریں اور پیمائش
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            Complete chapter learning with English explanations, Urdu
            translation, examples, video lessons and exam practice.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#chapter-notes"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-[#071b2b] hover:bg-emerald-400"
            >
              Start Learning
            </a>
            <a
              href="#mcq-practice"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Practice MCQs
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["7", "Major Topics"],
            [String(shortQuestions.length), "Short Questions"],
            [String(longQuestions.length), "Long Questions"],
            [String(validMcqs.length), "Practice MCQs"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-3xl font-black text-emerald-600">
                {value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600">
                {label}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Target className="text-emerald-600" size={28} />
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Student Learning Outcomes
              </h2>
              <p className="text-sm text-slate-500">
                طلبہ اس باب کے بعد کیا سیکھیں گے؟
              </p>
            </div>
          </div>

          <ul className="grid gap-3 md:grid-cols-2">
            {learningOutcomes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={18}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="chapter-notes" className="mt-12">
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-3">
              <BookOpen className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">
                Chapter Learning Notes
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              Topic-wise English notes, Urdu translation and solved examples.
            </p>
          </div>

          <div className="space-y-6">
            {chapterTopics.map((topic, index) => (
              <article
                key={topic.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-100 bg-slate-50 p-5 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Topic {index + 1}
                      </div>
                      <h3 className="mt-2 text-xl font-black text-slate-900">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-lg font-bold text-emerald-700">
                        {topic.urdu}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      English + Urdu
                    </span>
                  </div>
                </div>

                <div className="grid gap-5 p-5 md:p-7">
                  <div>
                    <h4 className="font-bold text-slate-900">
                      English Explanation
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {topic.explanation}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <h4 className="font-bold text-emerald-900">
                      اردو ترجمہ اور وضاحت
                    </h4>
                    <p
                      className="mt-2 text-sm leading-8 text-slate-800"
                      dir="rtl"
                    >
                      {topic.translation}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h4 className="font-bold text-amber-900">
                      Solved Example · حل شدہ مثال
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {topic.example}
                    </p>
                    <p
                      className="mt-2 text-sm leading-8 text-slate-800"
                      dir="rtl"
                    >
                      {topic.exampleUrdu}
                    </p>
                  </div>

                  <VideoPlayer
                    title={`${topic.title} — Urdu Video Lesson`}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="text-emerald-600" size={28} />
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Seven SI Base Units
              </h2>
              <p className="text-sm text-slate-500">سات بنیادی اکائیاں</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="p-4">Physical Quantity</th>
                  <th className="p-4">اردو</th>
                  <th className="p-4">SI Unit</th>
                  <th className="p-4">Symbol</th>
                </tr>
              </thead>
              <tbody>
                {baseUnits.map((unit) => (
                  <tr key={unit[0]} className="border-t border-slate-100">
                    {unit.map((value, i) => (
                      <td key={i} className="p-4 text-slate-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <FileText className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">
                Short Questions with Urdu Answers
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              مختصر سوالات اور ان کے اردو جوابات
            </p>
          </div>

          <div className="space-y-4">
            {shortQuestions.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  Q{index + 1}. {item.q}
                  <span className="mt-1 block text-sm font-semibold text-emerald-700">
                    {item.urdu}
                  </span>
                </summary>

                <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Answer
                    </div>
                    <p className="mt-1 text-sm leading-7 text-slate-700">
                      {item.a}
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-4">
                    <div className="text-xs font-bold text-emerald-800">
                      اردو جواب
                    </div>
                    <p
                      className="mt-1 text-sm leading-8 text-slate-800"
                      dir="rtl"
                    >
                      {item.au}
                    </p>
                  </div>

                  <VideoPlayer
                    title={`Short Question ${index + 1} — Urdu Explanation`}
                  />
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">
                Long Questions
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              تفصیلی سوالات اور اہم نکات
            </p>
          </div>

          <div className="space-y-4">
            {longQuestions.map((item, index) => (
              <details
                key={index}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  Q{index + 1}. {item.q}
                  <span className="mt-1 block text-sm font-semibold text-emerald-700">
                    {item.urdu}
                  </span>
                </summary>

                <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
                  <div>
                    <h4 className="font-bold text-slate-800">
                      Detailed Answer
                    </h4>
                    <div className="mt-2 space-y-2 text-sm leading-8 text-slate-700">
                      {item.points.map((point) => (
                        <p key={point}>{point}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-4">
                    <h4 className="font-bold text-emerald-900">
                      تفصیلی اردو جواب
                    </h4>
                    <div
                      className="mt-2 space-y-2 text-sm leading-9 text-slate-800"
                      dir="rtl"
                    >
                      {item.pointsUrdu.map((point) => (
                        <p key={point}>{point}</p>
                      ))}
                    </div>
                  </div>

                  <VideoPlayer
                    title={`Long Question ${index + 1} — Urdu Explanation`}
                  />
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">
                Numerical Problems
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              عددی سوالات، مکمل حل اور اردو وضاحت
            </p>
          </div>

          <div className="space-y-4">
            {numericalPractice.map((item, index) => (
              <details
                key={index}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer font-bold text-slate-900">
                  Problem {index + 1}. {item.q}
                  <span className="mt-1 block text-sm font-semibold text-emerald-700">
                    {item.urdu}
                  </span>
                </summary>

                <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                  <p className="text-sm leading-7 text-slate-700">
                    {item.solution}
                  </p>
                  <p
                    className="rounded-xl bg-emerald-50 p-4 text-sm leading-8 text-slate-800"
                    dir="rtl"
                  >
                    {item.solutionUrdu}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="mcq-practice"
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <ClipboardList className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-black text-slate-900">
                MCQ Practice Bank
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Multiple choice questions with Urdu translations and explanations.
            </p>
          </div>

          <div className="space-y-5">
            {validMcqs.map((item, index) => (
              <div key={item.q} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  {index + 1}. {item.q}
                </h3>

                <p
                  className="mt-1 text-sm font-semibold text-emerald-700"
                  dir="rtl"
                >
                  {item.urdu}
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {item.options.map((option, optionIndex) => (
                    <div
                      key={option}
                      className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700"
                    >
                      <span className="mr-2 font-bold text-emerald-700">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      {option}
                    </div>
                  ))}
                </div>

                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-bold text-emerald-700">
                    Show Correct Answer · درست جواب دیکھیں
                  </summary>

                  <div className="mt-3 rounded-xl bg-emerald-50 p-4">
                    <p className="text-sm font-bold text-emerald-900">
                      Correct Answer: {item.answer}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.explanation}
                    </p>
                    <p
                      className="mt-2 text-sm leading-8 text-slate-800"
                      dir="rtl"
                    >
                      {item.explanationUrdu}
                    </p>
                  </div>

                  <div className="mt-4">
                    <VideoPlayer
                      title={`MCQ ${index + 1} — Urdu Explanation`}
                    />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#071b2b] p-7 text-white md:p-9">
          <div className="flex items-start gap-4">
            <ClipboardList
              className="mt-1 shrink-0 text-emerald-400"
              size={32}
            />
            <div>
              <h2 className="text-2xl font-black">Chapter Assessment</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Complete your notes and practice before attempting the chapter
                test. The planned passing requirement is 60%.
              </p>

              <Link
                href={chapterTestUrl}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-[#071b2b] hover:bg-emerald-400"
              >
                Start Chapter Test
              </Link>
            </div>
          </div>
        </section>

        <p className="mt-8 text-xs leading-6 text-slate-500">
          Learning content is aligned with the topics listed in the available
          Grade 9 Physics textbook. The practice questions on this page are
          original learning exercises, not a claim that every current board
          examination question has been reproduced. Video player boxes are
          prepared, but exact video IDs and secure admin/database management
          still need to be connected before lessons can play or be edited from
          an admin panel.
        </p>
      </div>
    </main>
  );
}

export default function ChapterPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ChapterLoading />}>
      <ChapterContent params={params} />
    </Suspense>
  );
}
