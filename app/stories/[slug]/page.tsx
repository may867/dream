import { notFound } from "next/navigation";
import { StoryArticle } from "@/components/StoryArticle";
import { getRelic, relatedRelics, relics } from "@/lib/data";

export function generateStaticParams() {
  return relics.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const relic = getRelic(slug);
  return { title: relic ? relic.name.zh : "故事" };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const relic = getRelic(slug);
  if (!relic) notFound();
  const related = relatedRelics(slug).slice(0, 4);
  return <StoryArticle relic={relic} related={related} />;
}
