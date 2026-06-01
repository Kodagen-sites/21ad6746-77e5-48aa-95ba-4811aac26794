import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-contrast text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="font-display text-xl font-semibold">sarahthebrand</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">
              {siteConfig.offer.promise}
            </p>
            <SocialLinks socials={siteConfig.socials} className="mt-5 text-cream/80" />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-opacity hover:opacity-70">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.offer.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  Get the Blueprint
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Get in touch
            </div>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  WhatsApp: {siteConfig.company.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.company.email}`} className="transition-opacity hover:opacity-70">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="text-cream/55">{siteConfig.company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/12 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} sarahthebrand. All rights reserved.</span>
          <span className="flex gap-5">
            <Link href="/privacy" className="transition-opacity hover:opacity-70">
              Privacy
            </Link>
            <Link href="/terms" className="transition-opacity hover:opacity-70">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
