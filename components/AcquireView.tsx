"use client";

import { AcquireForm } from "@/components/AcquireForm";
import { PageShell } from "@/components/PageShell";
import { acquireSteps, faqs, SITE } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

const stepIcons = [
  <svg key="door" viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="16" cy="14" r="3.4" />
    <path d="M11 36c.4-5 2.8-8 5-8s4.4 2.6 5 7" strokeLinecap="round" />
    <path d="M24 36V15h14v21" />
    <path d="M33.5 26.5h.1" strokeLinecap="round" strokeWidth="2.4" />
  </svg>,
  <svg key="hands" viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M17 22c0-3 2-5 4.2-5 1.4 0 2.5.7 3.3 1.8.8-1.4 2.2-2.2 3.8-2.2 2.4 0 4.2 2 4.2 5v3.2c0 1.4-.4 3.4-1.2 4.6" strokeLinecap="round" />
    <path d="M14 28c2.2 6 5.4 9 10 9s7.8-3 10-9" strokeLinecap="round" />
    <path d="M12 27.5c2-1 4-.8 5.5.6" strokeLinecap="round" />
    <path d="M36 27.5c-2-1-4-.8-5.5.6" strokeLinecap="round" />
  </svg>,
  <svg key="frame" viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="10" y="13" width="28" height="22" rx="2" />
    <path d="M14 31l8-8 6 6 4-4 6 6" />
    <circle cx="18" cy="20" r="1.8" fill="currentColor" stroke="none" />
  </svg>,
];

function StepArrow() {
  return (
    <svg className="step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AcquireView() {
  const { locale, t } = useLocale();

  return (
    <PageShell variant="mist">
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-10 pt-4 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div>
          <p className="gold-rule justify-start">{t("nav.acquire")}</p>
          <h1 className="font-serif mt-3 text-4xl leading-tight md:text-[3.15rem]">{t("acquire.title")}</h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-brown-soft">{t("acquire.intro")}</p>

          <p className="mt-8 text-sm tracking-[0.16em] text-brown-soft">{t("acquire.ways")}</p>
          <div className="mt-3 grid gap-4">
            <div className="museum-card p-5 text-left">
              <h2 className="font-serif text-xl">{t("acquire.wayPickup")}</h2>
              <p className="mt-2 text-sm leading-7 text-brown-soft">{t("acquire.wayPickupText")}</p>
            </div>
            <div className="museum-card p-5 text-left">
              <h2 className="font-serif text-xl">{t("acquire.wayShip")}</h2>
              <p className="mt-2 text-sm leading-7 text-brown-soft">{t("acquire.wayShipText")}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start">
            {acquireSteps.map((step, i) => (
              <div key={step.n} className="flex flex-1 gap-3 sm:contents">
                {i > 0 ? <StepArrow /> : null}
                <div className="flex-1 text-center">
                  <div className="step-well">{stepIcons[i]}</div>
                  <h2 className="font-serif mt-3 text-lg">
                    {step.n}. {loc(locale, step.title)}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-brown-soft">{loc(locale, step.text)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="museum-card mt-8 flex gap-3 px-4 py-3 text-sm leading-7 text-brown-soft">
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brown/25">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3 5 6v6c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3Z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" />
              </svg>
            </span>
            {t("acquire.notice")}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/objects/consign-boxes.jpg" alt="" className="aspect-[5/4] w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 md:grid-cols-2 md:px-8">
        <div id="notes" className="museum-card scroll-mt-24 p-6 md:p-8">
          <h2 className="font-serif text-2xl">{t("acquire.notesTitle")}</h2>
          <p className="mt-4 leading-8 text-brown-soft">{t("acquire.notesBody")}</p>
        </div>
        <div id="contact" className="museum-card flex scroll-mt-24 flex-col gap-5 p-5 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/objects/shop.jpg" alt="" className="h-36 w-full rounded-md object-cover sm:h-auto sm:w-44" />
          <div>
            <h2 className="font-serif text-2xl">{t("acquire.contact")}</h2>
            <p className="mt-3 leading-8 text-brown-soft">
              {SITE.phone}
              <br />
              {loc(locale, SITE.address)}
              <br />
              {loc(locale, SITE.hours)}
            </p>
            <a href="#apply" className="btn-gold mt-4 !px-4 !py-2 text-sm">
              {t("nav.acquire")} →
            </a>
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <AcquireForm />
        <div id="faq" className="museum-card scroll-mt-24 p-6">
          <h2 className="font-serif text-2xl">{t("acquire.faq")}</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((item) => (
              <div key={item.q.zh}>
                <p className="font-medium">{loc(locale, item.q)}</p>
                <p className="mt-1 text-sm leading-7 text-brown-soft">{loc(locale, item.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
