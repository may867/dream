"use client";

import Link from "next/link";
import { useRef } from "react";
import { ObjectPhoto, RelatedTile } from "@/components/ObjectCard";
import { PageShell } from "@/components/PageShell";
import { StoryMeta } from "@/components/StoryMeta";
import type { Relic } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

export function StoryArticle({ relic, related }: { relic: Relic; related: Relic[] }) {
  const { locale, t } = useLocale();
  const scroller = useRef<HTMLDivElement>(null);
  const sold = relic.status === "sold";

  return (
    <PageShell variant="story">
      <article className="mx-auto max-w-6xl px-5 pb-8 pt-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ObjectPhoto relic={relic} className="aspect-[5/4] rounded-xl" />
          <div>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{loc(locale, relic.name)}</h1>
            <StoryMeta relic={relic} />
            <div className="mt-7">
              <p className="font-serif text-lg text-gold">{t("story.about")}</p>
              <p className="mt-3 leading-8 text-ink/90">{loc(locale, relic.story)}</p>
            </div>
            {!sold && relic.keeperNote ? (
              <blockquote className="keeper-note mt-6">
                <p className="font-serif text-lg text-gold">{t("story.keeper")}</p>
                <p className="mt-2 leading-8 text-ink/90">{loc(locale, relic.keeperNote)}</p>
              </blockquote>
            ) : null}
            <div className="my-6 flex justify-center">
              <span className="ornament-diamond text-gold" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={sold ? `/collection#${relic.slug}` : "/collection"} className="btn-solid">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t("story.continue")}
              </Link>
              <Link href="/acquire#contact" className="btn-ghost">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
                {t("story.contact")}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="mb-5 flex items-center gap-3">
          <h2 className="font-serif text-2xl">{t("story.related")}</h2>
          <span className="text-[0.7rem] tracking-[0.22em] text-gold">{t("story.relatedEn")}</span>
          <span className="h-px flex-1 bg-current opacity-20" />
        </div>
        <div className="flex items-center gap-4">
          <div ref={scroller} className="flex flex-1 gap-5 overflow-x-auto pb-2">
            {related.map((item) => (
              <RelatedTile key={item.slug} relic={item} />
            ))}
          </div>
          {related.length > 3 ? (
            <button
              type="button"
              className="related-next"
              aria-label={t("home.viewAll")}
              onClick={() => scroller.current?.scrollBy({ left: 260, behavior: "smooth" })}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
