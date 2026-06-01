import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    locale: siteConfig.seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.seo.htmlLang} className={`${lora.variable} ${nunito.variable}`}>
      <body className="bg-bg font-body text-contrast antialiased">{children}</body>
    </html>
  );
}
