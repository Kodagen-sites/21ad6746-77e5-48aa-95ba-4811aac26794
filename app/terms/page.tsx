import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service — sarahthebrand",
  description: "The terms that govern your use of sarahthebrand and the Faceless Income Blueprint.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="bg-bg">
      <header className="border-b border-contrast/10 bg-bg">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-display text-lg font-semibold text-contrast">
            sarahthebrand
          </Link>
          <Link href="/" className="text-sm text-contrast/60 hover:opacity-70">
            ← Back home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-4xl font-semibold text-contrast md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-contrast/50">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-contrast/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-contrast [&_p]:mt-3 [&_p]:leading-relaxed">
          <section>
            <h2>Agreement</h2>
            <p>
              By accessing this site or purchasing the Faceless Income Blueprint, you agree to these
              terms. If you do not agree, please do not use the site or buy the product.
            </p>
          </section>
          <section>
            <h2>The product</h2>
            <p>
              The Faceless Income Blueprint is a digital educational course delivered online for a
              one-time payment of {siteConfig.offer.price}. Access is granted after successful
              payment through our checkout partner.
            </p>
          </section>
          <section>
            <h2>No income guarantee</h2>
            <p>
              The blueprint shares strategies and methods for earning online. It is educational only.
              We make no guarantee of any specific income or result. Your results depend on your own
              effort, consistency, and circumstances.
            </p>
          </section>
          <section>
            <h2>Refunds</h2>
            <p>
              Because this is a digital product granting immediate access to its full contents, all
              sales are final unless required otherwise by applicable law. Reach out to{" "}
              {siteConfig.company.email} with any purchase issues.
            </p>
          </section>
          <section>
            <h2>Intellectual property</h2>
            <p>
              All course materials are owned by sarahthebrand and are for your personal use only. You
              may not copy, resell, or redistribute the content.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Email {siteConfig.company.email} or message us on WhatsApp
              at {siteConfig.company.whatsapp}.
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
