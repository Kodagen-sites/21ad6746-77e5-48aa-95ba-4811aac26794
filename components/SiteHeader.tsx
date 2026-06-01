"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-contrast/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className={`font-display text-lg font-semibold tracking-tight transition-colors ${
            scrolled ? "text-contrast" : "text-cream"
          }`}
          style={!scrolled ? { color: "#FAF6EE", textShadow: "0 1px 12px rgba(0,0,0,0.45)" } : undefined}
        >
          sarahthebrand
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                scrolled ? "text-contrast/80" : "text-cream/90"
              }`}
              style={!scrolled ? { color: "rgba(250,246,238,0.92)", textShadow: "0 1px 10px rgba(0,0,0,0.4)" } : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.offer.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Get Access
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ${scrolled ? "text-contrast" : "text-cream"}`}
            style={!scrolled ? { color: "#FAF6EE" } : undefined}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-contrast/10 bg-bg/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-contrast/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.offer.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Get Access — {siteConfig.offer.price}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
