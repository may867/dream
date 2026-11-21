"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButterflyMark } from "@/components/ButterflyMark";
import type { SilkVariant } from "@/components/SilkBackground";
import { NAV } from "@/lib/data";
import { translate, useLocale } from "@/lib/i18n";

export function SiteHeader({ variant = "mist" }: { variant?: SilkVariant }) {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const pale = variant === "home" || variant === "mist";
  const onAcquire = pathname === "/acquire" || pathname.startsWith("/acquire/");
  const bilingual = variant === "story";
  const other = locale === "zh" ? "en" : "zh";

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="min-w-0">
            <span className="font-serif block whitespace-nowrap text-[1.55rem] tracking-[0.08em]">{t("brand")}</span>
            {variant === "story" ? (
              <span className={`block text-[0.72rem] tracking-[0.18em] ${pale ? "text-brown-soft" : "text-ink-soft"}`}>
                {t("brandSub")}
              </span>
            ) : null}
            {onAcquire ? (
              <span className="mt-0.5 block text-[0.7rem] tracking-[0.12em] text-brown-soft">{t("brandAcquire")}</span>
            ) : null}
          </span>
          <ButterflyMark className={`h-7 w-7 shrink-0 ${pale ? "text-gold-deep" : "text-gold"}`} />
        </Link>

        <nav className="hidden items-center gap-8 text-[0.92rem] tracking-[0.14em] md:flex">
          {NAV.map((item) => {
            const main = t(item.key);
            const side = translate(other, item.key);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)
                }
              >
                {bilingual ? (
                  <span className="flex flex-col items-center leading-tight">
                    <span className="text-[0.58rem] tracking-[0.16em] opacity-55">{side}</span>
                    <span>{main}</span>
                  </span>
                ) : (
                  main
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {pale && !onAcquire ? (
            <div className="hidden items-center gap-2 lg:flex text-brown-soft">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-deep/35">
                <ButterflyMark className="h-5 w-5 text-gold-deep" />
              </span>
              <p className="text-sm tracking-[0.08em]">{t("motto")}</p>
            </div>
          ) : null}
          {onAcquire ? (
            <a href="#apply" className="btn-gold hidden !px-4 !py-2 text-sm sm:inline-flex">
              {t("nav.acquire")} →
            </a>
          ) : null}
          <button
            type="button"
            className="lang-switch"
            onClick={() => setLocale(other)}
            aria-label={locale === "zh" ? "Switch to English" : "切换为中文"}
          >
            <span>{t("lang")}</span>
            <span className="opacity-45">|</span>
            <span>{t("langTo")}</span>
          </button>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-current/20 md:hidden"
            aria-label={open ? t("closeMenu") : t("menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="px-5 pb-5 md:hidden">
          <div className="museum-card flex flex-col gap-3 p-4">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1">
                {t(item.key)}
              </Link>
            ))}
            <Link href="/hope" onClick={() => setOpen(false)} className="py-1 opacity-80">
              {t("footer.hope")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
