"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import {
  HeroScrollText,
  FadeUp,
  StaggerChildren,
  TextReveal,
  MagneticButton,
  ScrollProgress,
  FilmGrain,
  Vignette,
  ScrollHint,
  Marquee,
} from "@/components/motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";
import framesManifest from "@/content/frames-manifest.json";
import { resolveImage } from "@/lib/image-fallback";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};
const FRAME_COUNT = (framesManifest as { frameCount?: number }).frameCount ?? 0;
const FRAME_PATTERN =
  (framesManifest as { frameUrlTemplate?: string }).frameUrlTemplate ??
  "/frames/frame-{NNNN}.jpg";

const lifestyle = resolveImage({
  src: images["section-lifestyle"],
  brandColor: siteConfig.brand.primary,
  keyword: "lifestyle",
});
const mockup = resolveImage({
  src: images["section-mockup"] || images["scene-1-start"],
  brandColor: siteConfig.brand.primary,
  keyword: "phone mockup",
});

const { offer } = siteConfig;

export default function HomePage() {
  const [p, setP] = useState(0);

  return (
    <main className="relative bg-bg">
      <ScrollProgress />
      <SiteHeader />

      {/* ── Hero: scrub-cinematic ScrollCanvas + chaptered overlay ── */}
      <ScrollCanvas
        frameCount={FRAME_COUNT}
        pattern={FRAME_PATTERN}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        onProgress={setP}
        loadingVariant={siteConfig.scrollHero.loadingVariant}
        loadingLabel={siteConfig.scrollHero.loadingLabel}
      >
        <HeroScrollText
          progress={p}
          position="bottom-left"
          textColor="#FAF6EE"
          accentColor="#E8DFCF"
          accentTextColor="#0E1C33"
          chapters={[
            {
              at: 0,
              eyebrow: "Make money online — faceless",
              headlineLines: ["Build income", "without showing", "your face."],
              subline:
                "A phone, a plan, and the Faceless Income Blueprint. That's all it takes to start.",
            },
            {
              at: 0.4,
              eyebrow: "TikTok + WhatsApp",
              headlineLines: ["Just your phone.", "Just a plan."],
              subline:
                "No camera confidence. No big following. No laptop. Post faceless content, sell in your DMs.",
            },
            {
              at: 0.78,
              eyebrow: "The Faceless Income Blueprint",
              headlineLines: ["Start", "this week."],
              subline: "One-time ₦19,500 · Lifetime access · Beginner friendly.",
              cta: { label: "Get the Blueprint →", href: offer.buyUrl },
            },
          ]}
        />
        <ScrollHint />
      </ScrollCanvas>

      {/* ── Marquee strip ── */}
      <div className="border-y border-contrast/10 bg-surface py-4">
        <Marquee>
          {[
            "Faceless content",
            "TikTok growth",
            "WhatsApp selling",
            "Phone only",
            "No experience needed",
            "Lifetime access",
          ].map((t, i) => (
            <span
              key={i}
              className="mx-8 font-display text-lg font-medium tracking-tight text-primary/80"
            >
              {t} <span className="text-primary/30">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── Offer + VSL (#offer) ── */}
      <section id="offer" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <FadeUp>
              <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                The Blueprint
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-contrast md:text-6xl">
                {offer.name}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-contrast/75">
                {offer.description}
              </p>
            </FadeUp>
            <StaggerChildren staggerDelay={0.07} initialDelay={0.24} className="mt-8 space-y-3">
              {offer.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-cream">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-base text-contrast/80">{item}</span>
                </div>
              ))}
            </StaggerChildren>
            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton
                  as="a"
                  href={offer.buyUrl}
                  className="inline-flex min-h-[52px] items-center rounded-full bg-primary px-8 py-4 font-body text-sm font-bold text-cream transition-transform hover:scale-[1.03]"
                >
                  Get the Blueprint — {offer.price}
                </MagneticButton>
                <span className="text-sm text-contrast/55">{offer.priceNote}</span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-contrast/10 bg-contrast shadow-2xl">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={siteConfig.vsl.embedUrl}
                  title="Faceless Income Blueprint training"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="font-body text-sm font-semibold text-cream/90">
                  {siteConfig.vsl.label}
                </span>
                <span className="rounded-full bg-cream/10 px-3 py-1 text-xs text-cream/70">
                  28 min
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Benefits (#benefits) ── */}
      <section id="benefits" className="bg-surface px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
              Why It Works
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-contrast md:text-5xl">
              {siteConfig.benefits.heading}
            </h2>
          </FadeUp>
          <StaggerChildren
            staggerDelay={0.09}
            initialDelay={0.18}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {siteConfig.benefits.items.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-contrast/10 bg-bg p-8 transition-shadow hover:shadow-lg"
              >
                <div className="font-display text-5xl font-light text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-contrast">
                  {b.title}
                </h3>
                <p className="mt-3 leading-relaxed text-contrast/70">{b.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Oversized manifesto type ── */}
      <section className="relative overflow-hidden bg-contrast px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-cream/50">
            The shift
          </span>
          <TextReveal
            as="h2"
            className="mt-6 font-display text-[18vw] font-light leading-[0.85] tracking-tight text-cream md:text-[12rem]"
            stagger={0.08}
          >
            {siteConfig.themeWord}
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-cream/70">
              {siteConfig.themeLine}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Audience + lifestyle image ── */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <FadeUp>
            <div className="overflow-hidden rounded-3xl border border-contrast/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lifestyle}
                alt="Earning calmly from a phone at home"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Who it's for
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-contrast md:text-5xl">
                Made for people who earn from their phone.
              </h2>
            </FadeUp>
            <StaggerChildren staggerDelay={0.08} initialDelay={0.18} className="mt-8 space-y-4">
              {siteConfig.audience.map((a, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-contrast/10 pb-4">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-lg text-contrast/80">{a}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── Proof (#proof) ── */}
      <section id="proof" className="bg-surface px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
              Wins
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-contrast md:text-5xl">
              {siteConfig.proof.heading}
            </h2>
          </FadeUp>
          <StaggerChildren
            staggerDelay={0.09}
            initialDelay={0.18}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {siteConfig.proof.testimonials.map((t, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-contrast/10 bg-bg p-7">
                <div className="font-display text-4xl leading-none text-primary/30">&ldquo;</div>
                <blockquote className="mt-2 flex-1 text-base leading-relaxed text-contrast/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-contrast/10 pt-4">
                  <div className="font-display font-semibold text-contrast">{t.name}</div>
                  <div className="text-sm text-contrast/55">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </StaggerChildren>
          <FadeUp delay={0.3}>
            <p className="mt-8 text-sm italic text-contrast/45">{siteConfig.proof.note}</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing (#pricing) ── */}
      <section id="pricing" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="text-center">
              <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Pricing
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-contrast md:text-6xl">
                One payment. Everything you need.
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-contrast/10 bg-contrast text-cream shadow-2xl">
              <div className="border-b border-cream/10 px-8 py-10 text-center md:px-12">
                <div className="font-display text-2xl font-semibold">{offer.name}</div>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-display text-6xl font-semibold">{offer.price}</span>
                </div>
                <div className="mt-2 text-sm text-cream/60">{offer.priceNote}</div>
              </div>
              <div className="px-8 py-10 md:px-12">
                <ul className="space-y-3">
                  {offer.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-cream/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={offer.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 flex min-h-[56px] items-center justify-center rounded-full bg-cream px-8 py-4 font-body text-base font-bold text-contrast transition-transform hover:scale-[1.02]"
                >
                  Get Instant Access — {offer.price}
                </a>
                <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-wider text-cream/45">
                  {siteConfig.trustBar.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <h2 className="text-center font-display text-3xl font-semibold text-contrast md:text-4xl">
              Questions, answered
            </h2>
          </FadeUp>
          <div className="mt-12 space-y-4">
            {siteConfig.faq.map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <details className="group rounded-2xl border border-contrast/10 bg-bg p-6 [&_summary]:cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-contrast marker:content-['']">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-contrast/70">{f.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-primary px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
              {siteConfig.ctaBlock.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
              {siteConfig.ctaBlock.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                as="a"
                href={offer.buyUrl}
                className="inline-flex min-h-[56px] items-center rounded-full bg-cream px-9 py-4 font-body text-base font-bold text-primary transition-transform hover:scale-[1.03]"
              >
                Get the Blueprint — {offer.price}
              </MagneticButton>
              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center rounded-full border border-cream/30 px-9 py-4 font-body text-base font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Ask on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
        <FilmGrain />
        <Vignette />
      </section>

      <SiteFooter />
    </main>
  );
}
