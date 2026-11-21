"use client";

import { FormEvent, useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { hopeNotes } from "@/lib/data";
import { loc, useLocale } from "@/lib/i18n";

type Note = { name: string; text: string };

export default function HopePage() {
  const { locale, t } = useLocale();
  const [extras, setExtras] = useState<Note[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const samples = hopeNotes.map((note) => ({
    name: loc(locale, note.name),
    text: loc(locale, note.text),
  }));

  useEffect(() => {
    const saved = window.localStorage.getItem("xunmeng-hope-notes");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as Note[];
      if (Array.isArray(parsed)) setExtras(parsed);
    } catch {
      /* keep sample notes */
    }
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = { name: name.trim() || t("hope.anonymous"), text: text.trim() };
    if (!next.text) return;
    const updated = [...extras, next];
    window.localStorage.setItem("xunmeng-hope-notes", JSON.stringify(updated));
    setExtras(updated);
    setName("");
    setText("");
  };

  return (
    <PageShell variant="mist">
      <section className="mx-auto max-w-4xl px-5 pb-10 pt-8 text-center md:px-8">
        <p className="gold-rule justify-center text-gold-deep">{t("hope.kicker")}</p>
        <h1 className="font-serif mt-5 text-4xl leading-tight md:text-5xl">{t("hope.title")}</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-brown-soft">{t("hope.lead")}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {[...samples, ...extras].map((note, index) => (
          <blockquote key={`${note.name}-${index}`} className="museum-card p-5">
            <p className="font-serif text-lg leading-8">「{note.text}」</p>
            <footer className="mt-4 text-sm text-brown-soft">— {note.name}</footer>
          </blockquote>
        ))}
      </section>

      <section className="mx-auto max-w-xl px-5 pb-16 md:px-8">
        <form onSubmit={onSubmit} className="museum-card p-6">
          <h2 className="font-serif text-2xl">{t("hope.leave")}</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("hope.alias")}
            className="mt-5 w-full rounded-lg border border-gold/30 bg-white/70 px-3 py-2"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={4}
            placeholder={t("hope.placeholder")}
            className="mt-3 w-full rounded-lg border border-gold/30 bg-white/70 px-3 py-2"
          />
          <button type="submit" className="btn-gold mt-4">
            {t("hope.submit")}
          </button>
        </form>
      </section>
    </PageShell>
  );
}
