"use client";

import Link from "next/link";
import type { Relic } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

export function ObjectPhoto({
  relic,
  className = "aspect-[4/3]",
}: {
  relic: Relic;
  className?: string;
}) {
  const { locale } = useLocale();
  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={relic.image} alt={loc(locale, relic.name)} className="museum-photo" />
    </div>
  );
}

export function ObjectCard({ relic, compact = false }: { relic: Relic; compact?: boolean }) {
  const { locale, t } = useLocale();
  return (
    <Link href={`/stories/${relic.slug}`} className="museum-card group flex flex-col">
      <ObjectPhoto relic={relic} className={compact ? "aspect-[5/4] min-h-[220px]" : "aspect-[16/10]"} />
      <div className={`flex flex-1 flex-col ${compact ? "px-3 py-3" : "px-4 py-4"}`}>
        {compact ? (
          <>
            <h3 className="font-serif text-[1.15rem] leading-snug">{loc(locale, relic.name)}</h3>
            <span className="mt-2 text-sm tracking-wide text-gold-deep">{t("home.readStory")} →</span>
          </>
        ) : (
          <>
            <p className="text-[0.7rem] tracking-[0.16em] text-brown-soft">{loc(locale, relic.era)}</p>
            <h3 className="font-serif mt-1.5 text-[1.35rem] leading-snug">{loc(locale, relic.name)}</h3>
            <p className="mt-2 flex-1 text-[0.92rem] leading-7 text-brown-soft">{loc(locale, relic.summary)}</p>
            <span className="mt-3 text-sm tracking-wide text-gold-deep">{t("home.readStory")} →</span>
          </>
        )}
      </div>
    </Link>
  );
}

export function RelatedTile({ relic }: { relic: Relic }) {
  const { locale } = useLocale();
  return (
    <Link href={`/stories/${relic.slug}`} className="museum-card group flex min-w-[240px] flex-1 gap-3 p-2.5">
      <ObjectPhoto relic={relic} className="h-[92px] w-[92px] shrink-0 rounded-md" />
      <span className="min-w-0">
        <span className="font-serif block text-lg leading-snug text-brown">{loc(locale, relic.name)}</span>
        <span className="mt-0.5 block text-xs tracking-wide text-brown-soft">{relic.years ?? loc(locale, relic.era)}</span>
        <span className="mt-1 line-clamp-2 block text-sm leading-6 text-brown-soft">{loc(locale, relic.summary)}</span>
      </span>
    </Link>
  );
}

export function SoldCard({ relic }: { relic: Relic }) {
  const { locale, t } = useLocale();
  return (
    <article id={relic.slug} className="museum-card grid scroll-mt-24 min-h-[210px] md:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col px-5 py-5">
        <h2 className="font-serif text-2xl leading-snug">{loc(locale, relic.name)}</h2>
        <p className="mt-3 flex-1 text-[0.95rem] leading-7 text-brown-soft">
          {t("collection.wentTo")}
          {loc(locale, relic.soldTo)}。{loc(locale, relic.soldNote)}
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <span className="text-brown-soft">
            {t("collection.signed")}：{loc(locale, relic.storyBy)}
          </span>
          <Link href={`/stories/${relic.slug}`} className="tracking-wide text-gold-deep">
            {t("home.readStory")} →
          </Link>
        </div>
      </div>
      <ObjectPhoto relic={relic} className="min-h-[160px] md:h-full" />
    </article>
  );
}
