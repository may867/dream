"use client";

import Link from "next/link";
import { ButterflyMark } from "@/components/ButterflyMark";
import type { SilkVariant } from "@/components/SilkBackground";
import { SITE } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

export function SiteFooter({ variant = "mist" }: { variant?: SilkVariant }) {
  const { t, locale } = useLocale();
  const pale = variant === "home" || variant === "mist";
  return (
    <footer className={`relative z-10 mt-auto border-t ${pale ? "border-brown/15" : "border-ink/12"}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-serif flex items-center gap-2 text-xl tracking-[0.06em]">
            {t("brand")}
            <ButterflyMark className={`h-5 w-5 ${pale ? "text-gold-deep" : "text-gold"}`} />
          </p>
          <p className={`mt-3 max-w-sm text-sm leading-7 ${pale ? "text-brown-soft" : "text-ink-soft"}`}>
            {loc(locale, SITE.philosophy)}
          </p>
        </div>
        <div className={`grid grid-cols-2 gap-10 text-sm ${pale ? "text-brown-soft" : "text-ink-soft"}`}>
          <div className="flex flex-col gap-2 tracking-[0.06em]">
            <Link href="/stories">{t("nav.stories")}</Link>
            <Link href="/collection">{t("nav.collection")}</Link>
            <Link href="/acquire">{t("nav.acquire")}</Link>
            <Link href="/hope">{t("footer.hope")}</Link>
          </div>
          <div className="leading-7">
            <p>{loc(locale, SITE.address)}</p>
            <p>{loc(locale, SITE.hours)}</p>
            <p>{SITE.phone}</p>
          </div>
        </div>
      </div>
      <p className={`px-5 pb-8 text-center text-xs tracking-[0.18em] ${pale ? "text-brown/40" : "text-ink/35"}`}>
        {t("footer.sample")} · {t("brand")}
      </p>
    </footer>
  );
}
