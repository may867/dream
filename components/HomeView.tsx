"use client";

import Link from "next/link";
import { ObjectCard } from "@/components/ObjectCard";
import { PageShell } from "@/components/PageShell";
import { getRelic } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

export function HomeView() {
  const { t } = useLocale();
  const featured = getRelic("qipao")!;
  const themeCards = ["chest", "letters", "sewing"]
    .map((slug) => getRelic(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <PageShell variant="home">
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-2 md:px-8">
        <p className="gold-rule justify-start">{t("home.kicker")}</p>
        <h1 className="font-serif mt-3 max-w-3xl text-[2.8rem] leading-[1.12] tracking-wide text-brown md:text-[4.15rem]">
          {t("home.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-[1.08rem] leading-8 text-brown-soft">{t("home.lead")}</p>
        <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-brown-soft">{t("home.body")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/stories" className="btn-gold">
            {t("home.cta")} →
          </Link>
          <Link href="/collection" className="btn-ghost">
            {t("home.toCollection")}
          </Link>
          <Link href="/acquire" className="btn-ghost">
            {t("home.toContact")}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <Link href={`/stories/${featured.slug}`} className="hero-lace hero-lace-wide">
          <span className="hero-lace-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.image} alt={t("home.title")} className="hero-photo" />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/textures/lace-frame.png" alt="" className="hero-lace-frame" />
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="mb-5 flex items-end justify-between">
          <p className="font-serif flex items-center gap-2 text-lg">
            <span className="text-gold-deep">❀</span> {t("home.theme")}
          </p>
          <Link href="/stories" className="text-sm tracking-wide text-brown-soft">
            {t("home.viewAll")} →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {themeCards.map((item) => (
            <ObjectCard key={item.slug} relic={item} compact />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
