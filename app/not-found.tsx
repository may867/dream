"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { useLocale } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <PageShell variant="mist">
      <section className="mx-auto max-w-xl px-5 py-24 text-center">
        <p className="text-sm tracking-[0.24em] text-gold">{t("notFound.kicker")}</p>
        <h1 className="font-serif mt-4 text-4xl">{t("notFound.title")}</h1>
        <p className="mt-4 leading-8 text-ink-soft">{t("notFound.body")}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-gold">
            {t("notFound.home")}
          </Link>
          <Link href="/stories" className="btn-gold">
            {t("nav.stories")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
