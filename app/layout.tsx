import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Cormorant_Garamond, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "寻梦环游站",
    template: "%s · 寻梦环游站",
  },
  description:
    "寻梦环游站收购家庭旧物，再决定展出或售出。故事由家人或旧友写下。物件不会消失，只会遇见下一个懂得它的人。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jar = await cookies();
  const raw = jar.get("xunmeng-locale")?.value;
  const initial: Locale = raw === "en" || raw === "zh" ? raw : "zh";

  return (
    <html
      lang={initial === "zh" ? "zh-CN" : "en"}
      className={`${notoSerif.variable} ${notoSans.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <LocaleProvider initial={initial}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
