import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { C as CountUp } from "../_libs/react-countup.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Shield, X, c as Menu, e as Phone, a as ConciergeBell, P as PartyPopper, H as HardHat, d as Music2, M as MapPin, b as Flame, F as Facebook, T as Twitter, I as Instagram, L as Linkedin, C as ChevronDown } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/countup.js.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-hero/40 backdrop-blur-lg shadow-2xl border-b border-white/5" : "bg-hero/95 shadow-none border-none"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 text-hero-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold tracking-wide", children: "Engaging Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] opacity-80", children: "Relax. You Are Secure" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-7 text-sm font-medium text-hero-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "hover:text-hero-foreground", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", className: "hover:text-hero-foreground", children: "Why Choose Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-hero-foreground", children: "FAQs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-hero-foreground", children: "Contact Us" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "lg:hidden text-hero-foreground",
              children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center rounded-full bg-hero-foreground/95 px-4 py-2 text-xs font-semibold text-hero hover:bg-hero-foreground",
                children: "Request Security Guard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+442080871952",
                className: "inline-flex items-center gap-1.5 rounded-full border border-hero-foreground/40 px-4 py-2 text-xs font-semibold text-hero-foreground hover:bg-hero-foreground/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
                  "020 8087 1952"
                ]
              }
            )
          ] })
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-4 rounded-2xl bg-hero/80 backdrop-blur-lg border border-white/10 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-4 text-sm font-medium text-hero-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", children: "FAQs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Contact Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "mt-3 inline-flex items-center justify-center rounded-full bg-hero-foreground px-5 py-3 text-sm font-semibold text-hero",
              children: "Request Security Guard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+442080871952",
              className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                "020 8087 1952"
              ]
            }
          )
        ] }) })
      ] })
    }
  );
}
const logo = "/assets/logo-shield-T3WoOjfz.png";
function Hero() {
  const headlines = [
    "Engaging Security",
    "Concierge Security",
    "Event Security",
    "Construction Security",
    "Concert Security",
    "Site Security",
    "Fire Watch Security"
  ];
  const [currentHeadline, setCurrentHeadline] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "top",
      className: "relative isolate overflow-hidden text-hero-foreground",
      style: { background: "var(--gradient-hero)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-22 pb-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "Engaging Security shield logo",
            width: 88,
            height: 88,
            className: "mx-auto h-20 w-20 opacity-90"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm font-medium uppercase tracking-[0.25em] text-hero-foreground/80", children: "Welcome To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-all duration-500", children: headlines[currentHeadline] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "inline-flex min-w-[260px] items-center justify-center rounded-full bg-hero-foreground px-7 py-3 text-sm font-semibold text-hero shadow-lg shadow-black/20 transition hover:scale-[1.02]",
              children: "Request Security Guard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+442080871952",
              className: "inline-flex items-center gap-1.5 rounded-full border border-hero-foreground/40 px-4 py-2 text-xs font-semibold text-hero-foreground hover:bg-hero-foreground/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
                "020 8087 1952"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const heroCity = "/assets/hero-city-zOh6-Q6N.jpg";
function TrustSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "why", className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[420px] w-full overflow-hidden rounded-b-3xl lg:rounded-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroCity,
          alt: "City skyline with security presence",
          width: 1280,
          height: 768,
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/35" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 -mt-72 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-background/95 backdrop-blur p-8 md:p-12 shadow-2xl shadow-black/15 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl md:text-4xl font-bold text-foreground", children: "Why Clients Trust Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Trust is the foundation of every successful partnership. Our clients rely on us because we deliver consistent, professional security services with discretion, accountability, and a relentless focus on their safety and peace of mind." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-semibold text-foreground", children: "Why Choose Us?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "We combine seasoned, licensed personnel with proactive risk management, state-of-the-art communication, and 24/7 responsiveness — so you can focus on what matters most while we handle the rest." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90",
              children: "Request Security Guard"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 content-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatBadge,
            {
              value: 25,
              suffix: "+",
              label: "Years Protecting Businesses"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatBadge,
            {
              value: 99,
              suffix: "%",
              label: "Client Satisfaction Rate",
              delay: 0.2
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function StatBadge({
  value,
  suffix,
  label,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay },
      viewport: { once: true, amount: 0.4 },
      className: "flex items-center gap-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-primary/30 bg-secondary shadow-lg shadow-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-bold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CountUp,
            {
              end: value,
              duration: 2
            }
          ),
          suffix
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-foreground", children: label })
      ]
    }
  );
}
const services = [
  {
    icon: ConciergeBell,
    title: "Concierge Security",
    body: "Welcoming front-desk presence that combines hospitality with vigilant access control, visitor screening, and proactive deterrence."
  },
  {
    icon: PartyPopper,
    title: "Event Security",
    body: "Crowd management, VIP protection, and rapid response for private events, corporate gatherings, and large-scale public functions."
  },
  {
    icon: HardHat,
    title: "Construction Security",
    body: "Round-the-clock site protection against theft, vandalism, and trespass — keeping equipment, materials, and crews safe."
  },
  {
    icon: Music2,
    title: "Concert Security",
    body: "Trained teams handling stage perimeters, backstage access, audience flow, and incident response for concerts and tours."
  },
  {
    icon: MapPin,
    title: "Site Security",
    body: "Mobile and stationary guards securing warehouses, parking lots, retail, and corporate campuses with documented patrols."
  },
  {
    icon: Flame,
    title: "Fire Watch Security",
    body: "Certified fire-watch officers monitoring high-risk areas, hot work, and impaired sprinkler systems — keeping you code-compliant."
  }
];
function ServicesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "What You'll Get" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We Keep You Safe, So You Can Focus On What Matters." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: services.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "rounded-2xl bg-primary p-7 text-primary-foreground shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-primary-foreground/85", children: body })
        ]
      },
      title
    )) })
  ] });
}
const areaMap = "/assets/area-map-C9FnV6Xk.jpg";
const monitor = "/assets/security-monitor-UR3WVJ_B.jpg";
const guards = "/assets/guards-three-7jpUTLw8.jpg";
const walkie = "/assets/walkie-talkie-BYqHFE8b.jpg";
const features = [
  {
    title: "Area Under Service",
    body: "From dense metropolitan corridors to suburban industrial parks, our trained officers operate across a wide service area — ready to deploy where and when you need us, with consistent standards everywhere we serve.",
    img: areaMap,
    alt: "Map showing service coverage area"
  },
  {
    title: "Short-Term Site Security Solutions",
    body: "Need protection for a temporary site, pop-up venue, or transitional project? Our short-term packages spin up quickly with fully licensed personnel, clear post orders, and the same accountability as our long-term contracts.",
    img: monitor,
    alt: "Security officer monitoring CCTV control room",
    reverse: true
  },
  {
    title: "Uncompromising Commitment To Security",
    body: "Safety is not a checkbox — it's our culture. Every officer is trained in de-escalation, emergency response, and situational awareness, and every assignment is backed by supervisors who care about outcomes, not just hours.",
    img: guards,
    alt: "Three uniformed security guards walking on duty"
  },
  {
    title: "Uninterrupted Communication",
    body: "Real-time radio, encrypted dispatch, and direct lines to leadership mean nothing falls through the cracks. You are kept informed, and our officers are never alone on post.",
    img: walkie,
    alt: "Security officer holding a two-way radio"
  }
];
function AlternatingFeatures() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: `grid overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-md shadow-black/10 md:grid-cols-2 ${f.reverse ? "md:[&>div:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: {
              opacity: 0,
              x: f.reverse ? 60 : -60,
              scale: 0.96
            },
            whileInView: {
              opacity: 1,
              x: 0,
              scale: 1
            },
            transition: { duration: 0.9 },
            viewport: { once: true, amount: 0.3 },
            className: "aspect-[5/4] md:aspect-auto overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: f.img,
                alt: f.alt,
                loading: "lazy",
                width: 900,
                height: 700,
                className: "h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: {
              opacity: 0,
              x: f.reverse ? -60 : 60
            },
            whileInView: {
              opacity: 1,
              x: 0
            },
            transition: { duration: 0.9, delay: 0.2 },
            viewport: { once: true, amount: 0.3 },
            className: "flex flex-col justify-center p-8 md:p-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-semibold leading-tight", children: f.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base leading-relaxed text-primary-foreground/85", children: f.body })
            ]
          }
        )
      ]
    },
    f.title
  )) }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide a full suite of security services including concierge, event, construction, concert, site, and fire-watch security — staffed by licensed and continuously trained officers."
  },
  {
    q: "Are your officers licensed and insured?",
    a: "Yes. Every officer holds the required state license, passes a background check, and our company maintains comprehensive general liability and workers' comp coverage."
  },
  {
    q: "How quickly can you deploy security to my site?",
    a: "For most short-notice requests we can have an officer on-site within 24 hours. Emergency deployments are available — contact us directly to coordinate."
  },
  {
    q: "Do you provide armed or unarmed guards?",
    a: "Both. We'll assess your risk profile, venue, and local regulations to recommend the right posture — and provide proper credentials for either option."
  },
  {
    q: "Can I scale coverage up or down?",
    a: "Absolutely. Our service agreements are designed to flex with your needs — add officers for an event week or scale back during quieter periods."
  },
  {
    q: "What areas do you serve?",
    a: "We operate across metropolitan and suburban regions. Get in touch with your address and we'll confirm coverage and response times."
  },
  {
    q: "How do I request a quote?",
    a: "Fill out the contact form below with a few details about your site or event, and our team will follow up within one business day with a tailored proposal."
  }
];
function FAQSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl md:text-4xl font-bold text-foreground", children: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium text-foreground hover:no-underline", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm leading-relaxed text-muted-foreground", children: f.a })
    ] }, f.q)) })
  ] });
}
const WEB3FORMS_ACCESS_KEY = "0c72d3f7-af5f-4493-a91a-ce60a75f890e";
const Schema = objectType({
  name: stringType().trim().min(1, "Name is required").max(100),
  email: stringType().trim().email("Enter a valid email").max(255),
  message: stringType().trim().min(1, "Message is required").max(2e3)
});
function ContactSection() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [successMessage, setSuccessMessage] = reactExports.useState(null);
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  async function onSubmit(e) {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || "")
    };
    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...parsed.data
        })
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message ?? "Request failed");
      }
      setSuccessMessage("Message sent! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not send your message. Please try again.";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "bg-secondary/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl md:text-4xl font-bold text-foreground", children: "Contact Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit,
        className: "mt-10 grid gap-4 rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm",
        children: [
          successMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              role: "status",
              className: "rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800",
              children: successMessage
            }
          ),
          errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              role: "alert",
              className: "rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive",
              children: errorMessage
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", placeholder: "Full Name", disabled: submitting }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", type: "email", placeholder: "Email Address", disabled: submitting })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "message",
              placeholder: "Your Message",
              rows: 6,
              disabled: submitting,
              className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: submitting,
              className: "mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60",
              children: submitting ? "Sending…" : "Submit"
            }
          )
        ]
      }
    )
  ] }) });
}
function Field({
  name,
  type = "text",
  placeholder,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      name,
      type,
      placeholder,
      disabled,
      className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-footer text-footer-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-base font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
        "Engaging Security"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] opacity-80", children: "Relax. You Are Secure" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed opacity-80", children: "Engaging Security delivers professional protection for businesses and events with licensed officers, modern dispatch, and a relentless focus on safety." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "hover:opacity-100", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#why", className: "hover:opacity-100", children: "Why Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:opacity-100", children: "FAQs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:020 8087 1952", className: "hover:opacity-100", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Email:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:info@engagingsecurity.com",
                className: "hover:text-white transition-colors",
                children: "info@engagingsecurity.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Phone:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+442080871952",
                className: "hover:text-white transition-colors",
                children: "020 8087 1952"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hours: 24 / 7 Dispatch" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs opacity-70 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Engaging Security. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
      ] })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlternatingFeatures, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
export {
  Index as component
};
