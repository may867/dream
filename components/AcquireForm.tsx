"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export function AcquireForm() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);

  return (
    <form
      id="acquire-form"
      className="museum-card p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-serif text-2xl">{t("form.title")}</h2>
      <p className="mt-2 text-sm leading-7 text-brown-soft">{t("form.lead")}</p>
      {sent ? (
        <p className="mt-8 rounded-xl bg-gold/10 px-4 py-6 leading-8">{t("form.sent")}</p>
      ) : (
        <div className="mt-6 grid gap-4">
          <label className="grid gap-1 text-sm">
            {t("form.name")}
            <input name="name" required className="rounded-lg border border-gold/30 bg-white/75 px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            {t("form.contact")}
            <input name="contact" required className="rounded-lg border border-gold/30 bg-white/75 px-3 py-2" />
          </label>
          <fieldset className="grid gap-2 text-sm">
            <legend>{t("form.method")}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-gold/30 bg-white/75 px-3 py-3">
                <input type="radio" name="method" value="pickup" required defaultChecked className="mt-1" />
                <span>
                  <span className="block font-medium">{t("form.pickup")}</span>
                  <span className="mt-1 block leading-6 text-brown-soft">{t("form.pickupHint")}</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-gold/30 bg-white/75 px-3 py-3">
                <input type="radio" name="method" value="ship" className="mt-1" />
                <span>
                  <span className="block font-medium">{t("form.mail")}</span>
                  <span className="mt-1 block leading-6 text-brown-soft">{t("form.mailHint")}</span>
                </span>
              </label>
            </div>
          </fieldset>
          <label className="grid gap-1 text-sm">
            {t("form.story")}
            <span className="font-normal leading-6 text-brown-soft">{t("form.storyHint")}</span>
            <textarea
              name="story"
              rows={5}
              required
              placeholder={t("form.placeholder")}
              className="rounded-lg border border-gold/30 bg-white/75 px-3 py-2"
            />
          </label>
          <label className="flex items-start gap-2 text-sm leading-6 text-brown-soft">
            <input type="checkbox" required className="mt-1" />
            {t("form.confirm")}
          </label>
          <button type="submit" className="btn-gold justify-self-start">
            {t("form.submit")}
          </button>
        </div>
      )}
    </form>
  );
}
