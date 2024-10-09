import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import "../globals.css";
import { cn } from "@/lib/utils";
import Background from "@/components/Background";
import MobileView from "@/components/MobileView";
import Navbar from "@/components/interface/Navbar";

const sfPro = localFont({
  src: "../fonts/SFPro.woff",
  variable: "--font-sf-pro",
  weight: "400",
});

export const metadata: Metadata = {
  title: "MacOS portfolio",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params: { locale, app },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "pl"; app: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={cn(sfPro, "antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative h-screen w-screen">
            {/* <MobileView /> */}
            <main className="relative flex flex-col h-full z-10">
              <Navbar locale={locale} app={app} />
              {children}
            </main>
            <Background />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
