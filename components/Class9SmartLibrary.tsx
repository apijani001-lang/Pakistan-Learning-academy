import Mathematics2027Library from "@/components/Mathematics2027Library";
import Physics2027Library from "@/components/Physics2027Library";
import Chemistry2027Library from "@/components/Chemistry2027Library";
import Biology2027Library from "@/components/biology2027Library";
import Computer2027Library from "@/components/computer2027library";
import GeneralScience2027Library from "@/components/generalscience2027library";
import Islamiat2027Library from "@/components/islamiat2027library";
import Civics2027Library from "@/components/civics2027library";
import Economics2027Library from "@/components/economics2027library";
import Education2027Library from "@/components/education2027library";
import ArtModelDrawing2027Library from "@/components/artmodeldrawing2027library";
import HomeEconomics2027Library from "@/components/homeeconomics2027library";
import Geography2027Library from "@/components/geography2027library";
import Punjabi2027Library from "@/components/punjabi2027library";
import EnglishLiterature2027Library from "@/components/englishliterature2027library";

type Props = {
  subject: string;
  bookUrl?: string;
};

export default function Class9SmartLibrary({
  subject,
  bookUrl,
}: Props) {
  switch (subject) {
    case "mathematics":
      return bookUrl ? <Mathematics2027Library bookUrl={bookUrl} /> : null;

    case "physics":
      return bookUrl ? <Physics2027Library bookUrl={bookUrl} /> : null;

    case "chemistry":
      return bookUrl ? <Chemistry2027Library bookUrl={bookUrl} /> : null;

    case "biology":
      return bookUrl ? <Biology2027Library bookUrl={bookUrl} /> : null;

    case "computer-science":
      return <Computer2027Library bookUrl={bookUrl} />;

    case "general-science":
      return <GeneralScience2027Library bookUrl={bookUrl} />;

    case "islamiat":
      return <Islamiat2027Library bookUrl={bookUrl} />;

    case "civics":
      return <Civics2027Library />;

    case "economics":
      return <Economics2027Library />;

    case "education":
      return <Education2027Library />;

    case "art-and-model-drawing":
      return <ArtModelDrawing2027Library />;

    case "home-economics":
      return <HomeEconomics2027Library bookUrl={bookUrl} />;

    case "geography":
      return <Geography2027Library bookUrl={bookUrl} />;

    case "punjabi":
      return <Punjabi2027Library bookUrl={bookUrl} />;

    case "english-literature":
      return <EnglishLiterature2027Library bookUrl={bookUrl} />;

    default:
      return null;
  }
}