"use client";

import type { Relic } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

export function StoryMeta({ relic }: { relic: Relic }) {
  const { locale, t } = useLocale();
  return (
    <ul className="mt-6 space-y-2 text-ink-soft">
      <li className="meta-line">
        <OwnerIcon />
        <span>
          {t("story.owner")}: {loc(locale, relic.ownerNick)}
        </span>
      </li>
      {relic.years ? (
        <li className="meta-line">
          <YearIcon />
          <span>
            {t("story.year")}: {relic.years}
          </span>
        </li>
      ) : null}
      <li className="meta-line">
        <SourceIcon />
        <span>
          {t("story.source")}: {loc(locale, relic.source)}
        </span>
      </li>
    </ul>
  );
}

function OwnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.2-3.2 3.4-5 6.5-5s5.3 1.8 6.5 5" strokeLinecap="round" />
    </svg>
  );
}

function YearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
    </svg>
  );
}

function SourceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="1.8" />
    </svg>
  );
}
