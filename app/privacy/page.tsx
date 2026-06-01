import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — sarahthebrand",
  description: "How sarahthebrand collects, uses, and protects your information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-contrast/50">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-contrast/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-contrast [&_p]:mt-3 [&_p]:leading-relaxed">
          <section>
            <h2>Who we are</h2>
            <p>
              sarahthebrand (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides the Faceless Income
              Blueprint, a digital course. You can reach us at{" "}
              <a className="text-primary underline" href={`mailto:${siteConfig.company.email}`}>
                {siteConfig.company.email}
              </a>{" "}
              or on WhatsApp at {siteConfig.company.whatsapp}.
            </p>
          </section>
          <section>
            <h2>Information we collect</h2>
            <p>
              When you purchase or enquire about our products, we may collect your name, email
              address, phone number, and payment details. Payments are processed by our checkout
              partner (Selar); we do not store your card information.
            </p>
          </section>
          <section>
            <h2>How we use your information</h2>
            <p>
              We use your information to deliver the course you purchased, provide customer support,
              respond to your enquiries, and send you relevant updates. We never sell your personal
              data to third parties.
            </p>
          </section>
          <section>
            <h2>Cookies &amp; analytics</h2>
            <p>
              We may use cookies and basic analytics to understand how visitors use this site so we
              can improve it. You can disable cookies in your browser settings.
            </p>
          </section>
          <section>
            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any
              time by contacting us at {siteConfig.company.email}.
            </p>
          </section>
          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected on this
              page with a revised date above.
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
