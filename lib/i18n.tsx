"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type MessageTree } from "@/lib/messages";
import type { Locale, Localized } from "@/lib/types";

export type { Locale, Localized };

const STORAGE = "xunmeng-locale";

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
};

const LocaleContext = createContext<Ctx | null>(null);

function readPath(tree: MessageTree, path: string): string {
  const value = path.split(".").reduce<unknown>((node, key) => {
    if (node && typeof node === "object" && key in node) {
      return (node as Record<string, unknown>)[key];
    }
    return undefined;
  }, tree);
  return typeof value === "string" ? value : path;
}

function writeCookie(locale: Locale) {
  document.cookie = `xunmeng-locale=${locale}; path=/; max-age=31536000`;
}

export function LocaleProvider({
  children,
  initial = "zh",
}: {
  children: React.ReactNode;
  initial?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (query === "en" || query === "zh") {
      setLocaleState(query);
      window.localStorage.setItem(STORAGE, query);
      writeCookie(query);
      return;
    }
    const saved = window.localStorage.getItem(STORAGE);
    if ((saved === "en" || saved === "zh") && saved !== initial) {
      setLocaleState(saved);
      writeCookie(saved);
    }
  }, [initial]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const value = useMemo<Ctx>(() => {
    const setLocale = (next: Locale) => {
      setLocaleState(next);
      window.localStorage.setItem(STORAGE, next);
      writeCookie(next);
    };
    return {
      locale,
      setLocale,
      t: (path: string) => readPath(messages[locale], path),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function loc(locale: Locale, value: Localized | string | undefined) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale];
}

export function translate(locale: Locale, path: string) {
  return readPath(messages[locale], path);
}
