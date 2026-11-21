"use client";

import Link from "next/link";
import { ObjectPhoto, SoldCard } from "@/components/ObjectCard";
import { PageShell } from "@/components/PageShell";
import { sold } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

export function CollectionView() {
  const { locale, t } = useLocale();
  const items = sold();
  const featured = items.find((item) => item.slug === "scarf") ?? items[0];
  const rest = items.filter((item) => item.slug !== featured.slug);

  return (
    <PageShell variant="flow">
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-4 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <div>
          <p className="gold-rule justify-start text-gold">{t("collection.kicker")}</p>
          <h1 className="font-serif mt-5 text-4xl leading-[1.2] md:text-5xl">
            {t("collection.titleA")}
            <br />
            {t("collection.titleB")}
          </h1>
          <p className="mt-4 text-[1.02rem] tracking-wide text-ink-soft">{t("collection.sub")}</p>
          <span className="ornament-diamond mt-5 inline-block text-gold" />
          <p className="mt-5 max-w-md text-[1.02rem] leading-8 text-ink/90">{t("collection.body")}</p>
          <Link href={`/stories/${featured.slug}`} className="btn-gold mt-8">
            {t("collection.cta")} →
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <ObjectPhoto relic={featured} className="aspect-[16/10] md:aspect-[5/3]" />
          <div className="hero-caption">
            <p className="text-sm tracking-[0.12em] text-gold">{t("collection.soldBadge")}</p>
            <p className="font-serif mt-1 text-xl">{loc(locale, featured.name)}</p>
            <p className="mt-1 text-sm text-ink-soft">
              {t("collection.wentTo")}
              {loc(locale, featured.soldTo)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {rest.map((item) => (
            <SoldCard key={item.slug} relic={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
