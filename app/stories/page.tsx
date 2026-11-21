import { StoryArticle } from "@/components/StoryArticle";
import { getRelic, relatedRelics } from "@/lib/data";

export const metadata = {
  title: "故事馆",
};

export default function StoriesPage() {
  const featured = getRelic("suitcase")!;
  const related = relatedRelics(featured.slug).slice(0, 4);
  return <StoryArticle relic={featured} related={related} />;
}
