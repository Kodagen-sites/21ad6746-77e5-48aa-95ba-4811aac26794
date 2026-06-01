// ============================================================
// site-config.ts — single source of truth for copy + brand.
// Brand: sarahthebrand · Product: Faceless Income Blueprint (FIB)
// ============================================================

export const siteConfig = {
  company: {
    name: "sarahthebrand",
    creator: "Sarah",
    tagline: "Faceless Income Blueprint",
    description:
      "The step-by-step blueprint for making money online with your phone — through TikTok and WhatsApp, without ever showing your face.",
    email: "hello@sarahthebrand.com",
    whatsapp: "+2349011096479",
    whatsappUrl: "https://wa.me/2349011096479",
    location: "Nigeria",
  },

  brand: {
    primary: "#1F3252",
    accent: "#1F3252",
    bg: "#FAF6EE",
    surface: "#E8DFCF",
    contrast: "#0E1C33",
  },

  seo: {
    siteUrl: "https://sarahthebrand.com",
    locale: "en_NG",
    htmlLang: "en-NG",
    defaultTitle: "sarahthebrand — Faceless Income Blueprint",
    defaultDescription:
      "Learn how to make money online with your phone using TikTok & WhatsApp — without showing your face. The Faceless Income Blueprint by Sarah. ₦19,500.",
    noindexPaths: ["/admin", "/api"],
  },

  socials: {
    instagram: "https://instagram.com/sarahthebrand",
    tiktok: "https://tiktok.com/@sarahthebrand",
    facebook: "https://facebook.com/sarahthebrand",
    whatsapp: "https://wa.me/2349011096479",
  },

  // VSL (sales video) — 28-minute walkthrough.
  vsl: {
    url: "https://youtu.be/Qf_ZtWEH9no",
    embedUrl: "https://www.youtube.com/embed/Qf_ZtWEH9no",
    label: "Watch the 28-minute training",
  },

  // The offer.
  offer: {
    name: "Faceless Income Blueprint",
    short: "FIB",
    promise: "Build income from your phone — without showing your face.",
    description:
      "A complete, beginner-friendly system that shows you exactly how to earn online using faceless TikTok content and simple WhatsApp selling. No camera confidence needed. No big following required. Just your phone and a plan that works.",
    buyUrl: "https://selar.com/p/7720q611f7?affiliate=39705604ac",
    price: "₦19,500",
    priceNote: "One-time payment · Lifetime access",
    includes: [
      "The exact faceless content formula that gets views on TikTok",
      "How to turn views into paying customers on WhatsApp",
      "Done-for-you content ideas and scripts you can post today",
      "Step-by-step setup — from zero followers to your first sale",
      "Phone-only workflow: no laptop, no camera, no face",
    ],
  },

  // Who it's for.
  audience: [
    "Students who want a side income that fits around classes",
    "Side hustlers tired of methods that never pay off",
    "Stay-at-home moms earning in the margins of the day",
    "Young women who want freedom and income from their phone",
  ],

  // Why it works.
  benefits: {
    heading: "Why faceless works",
    items: [
      {
        title: "No face, no pressure",
        description:
          "You never have to be on camera. The whole system is built around faceless content — so shyness is no longer an excuse not to start.",
      },
      {
        title: "Just your phone",
        description:
          "Everything happens on the device already in your hand. No laptop, no expensive gear, no studio. Post on TikTok, sell on WhatsApp.",
      },
      {
        title: "Built for beginners",
        description:
          "You don't need a following or experience. The blueprint walks you from your very first post to your very first sale, step by step.",
      },
      {
        title: "Real income, repeatable",
        description:
          "This isn't a one-time trick. It's a system you can run again and again, building income that grows with the effort you put in.",
      },
    ],
  },

  // Manifesto word for oversized type section.
  themeWord: "Faceless.",
  themeLine:
    "You don't need to be loud, famous, or fearless on camera. You just need a phone, a plan, and the willingness to start.",

  // Social proof — placeholder student wins (creator to replace with real ones).
  proof: {
    heading: "Real student wins",
    note: "Results from real students. (Sarah will paste verified wins here.)",
    testimonials: [
      {
        name: "Blessing",
        role: "Student, Lagos",
        quote:
          "I made my first sale on WhatsApp in under two weeks — and I still haven't shown my face once. This blueprint just makes sense.",
      },
      {
        name: "Amara",
        role: "Stay-at-home mom",
        quote:
          "I post while the baby naps. The faceless TikToks actually get views, and people slide into my WhatsApp ready to buy.",
      },
      {
        name: "Tofunmi",
        role: "Side hustler",
        quote:
          "I've bought courses before that left me confused. This one is different — every step is laid out. I finally took action.",
      },
    ],
  },

  faq: [
    {
      q: "Do I really never have to show my face?",
      a: "Correct. Every method in the blueprint is faceless — you create content and sell without ever appearing on camera.",
    },
    {
      q: "I have zero followers. Can this still work?",
      a: "Yes. The blueprint is built for absolute beginners and shows you how to get views and sales without an existing audience.",
    },
    {
      q: "What do I need to get started?",
      a: "Just a smartphone with TikTok and WhatsApp installed, and a little time each day. No laptop or camera required.",
    },
    {
      q: "How much does it cost and what do I get?",
      a: "It's a one-time payment of ₦19,500 for lifetime access to the full Faceless Income Blueprint.",
    },
  ],

  ctaBlock: {
    heading: "Your phone is already in your hand.",
    description:
      "The only thing between you and your first faceless sale is a plan. Get the blueprint today and start this week.",
  },

  trustBar: [
    "One-time payment",
    "Lifetime access",
    "Beginner friendly",
    "Phone only",
  ],

  // Cinematic config — scrub-cinematic hero (archetype G, live-generate).
  scrollHero: {
    archetype: "G" as const,
    gRenderMode: "scrub-cinematic" as const,
    styleId: "deep-navy",
    assetMode: "live-generate" as const,
    imageUrl: "",
    frameCount: 192,
    scrollDistance: 5,
    loadingVariant: "L4" as const,
    loadingLabel: "sarahthebrand",
  },

  headerVariant: "transparent-ghost" as const,

  // Anchor-scroll nav (landing mode — max 5 items).
  nav: [
    { href: "#offer", label: "The Blueprint" },
    { href: "#benefits", label: "Why It Works" },
    { href: "#proof", label: "Wins" },
    { href: "#pricing", label: "Pricing" },
  ],

  motion: {
    scrollProgress: true,
    intensity: "medium" as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
