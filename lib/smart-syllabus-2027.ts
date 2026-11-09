export type SmartBoard = {
  id: string;
  name: string;
  region: string;
};

export type SmartSubject = {
  title: string;
  slug: string;
  group: "science" | "arts";
  icon: string;
};

export const SMART_SESSION = "2026–27";

export const SMART_BOARDS: SmartBoard[] = [
  { id: "lahore", name: "BISE Lahore", region: "Punjab" },
  { id: "gujranwala", name: "BISE Gujranwala", region: "Punjab" },
  { id: "faisalabad", name: "BISE Faisalabad", region: "Punjab" },
  { id: "multan", name: "BISE Multan", region: "Punjab" },
  { id: "rawalpindi", name: "BISE Rawalpindi", region: "Punjab" },
  { id: "sargodha", name: "BISE Sargodha", region: "Punjab" },
  { id: "bahawalpur", name: "BISE Bahawalpur", region: "Punjab" },
  { id: "dg-khan", name: "BISE Dera Ghazi Khan", region: "Punjab" },
  { id: "sahiwal", name: "BISE Sahiwal", region: "Punjab" },
  { id: "karachi", name: "BSEK Karachi", region: "Sindh" },
  { id: "biek-karachi", name: "BIEK Karachi", region: "Sindh" },
  { id: "hyderabad", name: "BISE Hyderabad", region: "Sindh" },
  { id: "sukkur", name: "BISE Sukkur", region: "Sindh" },
  { id: "larkana", name: "BISE Larkana", region: "Sindh" },
  { id: "mirpurkhas", name: "BISE Mirpurkhas", region: "Sindh" },
  { id: "peshawar", name: "BISE Peshawar", region: "Khyber Pakhtunkhwa" },
  { id: "mardan", name: "BISE Mardan", region: "Khyber Pakhtunkhwa" },
  { id: "swat", name: "BISE Swat", region: "Khyber Pakhtunkhwa" },
  { id: "abbottabad", name: "BISE Abbottabad", region: "Khyber Pakhtunkhwa" },
  { id: "bannu", name: "BISE Bannu", region: "Khyber Pakhtunkhwa" },
  { id: "kohat", name: "BISE Kohat", region: "Khyber Pakhtunkhwa" },
  { id: "di-khan", name: "BISE Dera Ismail Khan", region: "Khyber Pakhtunkhwa" },
  { id: "malakand", name: "BISE Malakand", region: "Khyber Pakhtunkhwa" },
  { id: "quetta", name: "BBISE Quetta", region: "Balochistan" },
  { id: "fbise", name: "FBISE Islamabad", region: "Federal" },
  { id: "ajk-mirpur", name: "BISE AJK Mirpur", region: "Azad Jammu & Kashmir" },
  { id: "gb", name: "Gilgit-Baltistan Board", region: "Gilgit-Baltistan" },
];

export const CLASS_NAMES: Record<string, string> = {
  "9": "Class 9",
  "10": "Class 10",
  "11": "Class 11",
  "12": "Class 12",
};

const commonScience: SmartSubject[] = [
  { title: "English", slug: "english", group: "science", icon: "📘" },
  { title: "Urdu", slug: "urdu", group: "science", icon: "📗" },
  { title: "Islamiat", slug: "islamiat", group: "science", icon: "🕌" },
];

const scienceSubjects: SmartSubject[] = [
  ...commonScience,
  { title: "Mathematics", slug: "mathematics", group: "science", icon: "📐" },
  { title: "Physics", slug: "physics", group: "science", icon: "⚛️" },
  { title: "Chemistry", slug: "chemistry", group: "science", icon: "🧪" },
  { title: "Biology", slug: "biology", group: "science", icon: "🧬" },
  { title: "Computer Science", slug: "computer-science", group: "science", icon: "💻" },
];

const artsSubjects: SmartSubject[] = [
  { title: "English", slug: "english", group: "arts", icon: "📘" },
  { title: "Urdu", slug: "urdu", group: "arts", icon: "📗" },
  { title: "Islamiat", slug: "islamiat", group: "arts", icon: "🕌" },
  { title: "General Mathematics", slug: "general-mathematics", group: "arts", icon: "📐" },
  { title: "General Science", slug: "general-science", group: "arts", icon: "🔬" },
  { title: "Education", slug: "education", group: "arts", icon: "🎓" },
  { title: "Civics", slug: "civics", group: "arts", icon: "🏛️" },
  { title: "Economics", slug: "economics", group: "arts", icon: "📊" },
  { title: "Geography", slug: "geography", group: "arts", icon: "🌍" },
  { title: "Punjabi", slug: "punjabi", group: "arts", icon: "📜" },
  { title: "Home Economics", slug: "home-economics", group: "arts", icon: "🏡" },
];

export function getSmartSubjects(classid: string): SmartSubject[] {
  if (classid === "9") {
    return [...scienceSubjects, ...artsSubjects];
  }

  // Classes 10–12 ka subject catalogue initial navigation ke liye hai.
  // Board-specific applicability ko official source se separately verify karna hoga.
  return [...scienceSubjects, ...artsSubjects];
}

export function getBoard(boardid: string) {
  return SMART_BOARDS.find((board) => board.id === boardid);
}