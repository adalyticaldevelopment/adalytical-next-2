// About page. Hand-edited (the old about.html generator source no longer exists). Proof only from adalytical.io /
// freeaudit.adalytical.io; stats only from figures the founders have confirmed.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Adalytical | Two ex-Googlers who only do Google Ads",
  description: "Meet Jackson Wallace and Jackson Sharp, the ex-Google founders of Adalytical, a specialist Google Ads agency for ecommerce and lead gen brands.",
  alternates: { canonical: "/about/" },
};

import Script from "next/script";
import { PageHero } from "@/components/PageHero";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Same client logos, in the same order, as the homepage strip (keep the two in sync)
const CLIENT_LOGOS = [
  ["redlight-logo-new.png", "Redlight Innovation"],
  ["watch-factory-logo.png", "The Watch Factory"],
  ["work-sharp-logo.png", "Work Sharp Sharpeners"],
  ["personalised-favours-logo-new.png", "Personalised Favours"],
  ["beforeyouspeak-logo-new.png", "BeforeYouSpeak"],
  ["aaria-logo-new.png", "Aaria London"],
  ["hedonist-logo-new.png", "Hedonist"],
  ["loko-logo-new.png", "Loko"],
  ["pet-supplies-australia-logo-new.png", "Pet Supplies Australia"],
  ["zerobreath-logo-new.png", "ZeroBreath"],
  ["nadt-logo.png", "NADT"],
  ["salty-captain-logo.png", "Salty Captain"],
  ["hydrotech-logo.png", "Hydrotech"],
  ["vybey-logo-new.png", "Vybey"],
  ["pinkish-pods-logo.png", "Pinkish Pods"],
  ["health-heiress-logo.png", "Health Heiress"],
  ["rover-rituals-logo.png", "Rover Rituals"],
  ["yeet-seat-logo.png", "Yeet Seat"],
  ["harry-austin-logo.png", "Harry Austin"],
  ["kiwi-treats-logo.png", "Kiwi Treats"],
  ["winland-logo.png", "Winland Home & Garden"],
  ["bellissima-logo.png", "Bellissima"],
  ["bushdoof-logo.png", "Bushdoof Lighting"],
  ["booze-and-barrels-logo.png", "Booze & Barrels"],
  ["biosx-logo.png", "BIOSx"],
  ["blume-logo.png", "Blume"],
  ["bathroom-space-logo.png", "Bathroom Space"],
  ["home-make-it-logo.png", "Home Make It"],
  // lead gen clients (from the /lead-generation/ strip), padded to the same canvas
  ["prime-group-logo.png", "Prime Group Building"],
  ["cavstruct-logo.png", "Cavstruct Projects"],
  ["mjb-electrical-logo.png", "MJB Electrical Group"],
  ["tintek-logo.png", "Tintek Roofing & Cladding"],
  ["evosolar-logo.png", "Evosolar"],
  ["ottilie-studios-logo.png", "Ottilie Studios"],
  ["hawker-studio-logo.png", "Hawker Studio"],
  ["into-blinds-logo.png", "Into Blinds"],
  ["onq-logo.png", "ONQ Digital"],
];

export default function About() {
  return (
    <>


{/* ============ NAV ============ */}
<nav className="nav">
  <span className="xmark xm-nl" aria-hidden="true"></span>
  <span className="xmark xm-nr" aria-hidden="true"></span>
  <div className="nav-in">
    <a href={`${BASE}/`} className="logo" aria-label="Adalytical home">
      <img className="logo-img logo-light" src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" />
      <img className="logo-img logo-dark" src={`${BASE}/images/adalytical-logo-dark.svg`} alt="Adalytical" />
    </a>
    <ul className="nav-l">
      <li className="has-mega">
        <a href={`${BASE}/#industries`}>Who We Help <svg className="nav-car" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        <div className="mega mega--ind">
          <div className="mega-card">
            <a href={`${BASE}/ecommerce/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round"/><path d="M6 6 5 3H2" strokeLinecap="round"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg></span>
              <span className="mt-body"><strong>E-COMMERCE <span aria-hidden="true">&rarr;</span></strong><span>More profitable sales, higher ROAS and scalable growth across your products.</span></span>
            </a>
            <a href={`${BASE}/lead-generation/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" strokeLinejoin="round"/></svg></span>
              <span className="mt-body"><strong>LEAD GENERATION <span aria-hidden="true">&rarr;</span></strong><span>More qualified leads at a lower cost per lead, with every call and form tracked.</span></span>
            </a>
            <a href={`${BASE}/saas/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 4h18l-7 8v7l-4 2v-9z" strokeLinejoin="round"/></svg></span>
              <span className="mt-body"><strong>SAAS <span aria-hidden="true">&rarr;</span></strong><span>More qualified demos and trials that turn into paying customers, at a lower acquisition cost.</span></span>
            </a>
            <a href={`${BASE}/book/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round"/></svg></span>
              <span className="mt-body"><strong>I want to book a strategy call <span aria-hidden="true">&rarr;</span></strong><span>We&rsquo;ll audit your account for free and show you where biggest opportunities are.</span></span>
            </a>
            <a href={`${BASE}/book/`} className="mega-feat">
              <div>
                <span className="mf-tag">Free audit</span>
                <h5>See exactly where your Google Ads account is leaking budget.</h5>
              </div>
              <span className="mf-link">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </a>
          </div>
        </div>
      </li>
      <li className="has-mega">
        <a href={`${BASE}/#what-we-do`}>What We Do <svg className="nav-car" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        <div className="mega mega--svc">
          <div className="mega-card">
            <a href={`${BASE}/#what-we-do`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg></span>
              <span className="mt-body"><strong>GOOGLE ADS <span aria-hidden="true">&rarr;</span></strong><span>More customers, lower acquisition costs and profitable growth from every dollar spent.</span></span>
            </a>
            <a href={`${BASE}/ecommerce/#merchant-center`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 3h8l10 10-8 8L3 11V3z" strokeLinejoin="round"/><circle cx="7.5" cy="7.5" r="1.4"/></svg></span>
              <span className="mt-body"><strong>MERCHANT CENTER <span aria-hidden="true">&rarr;</span></strong><span>Optimised product feeds that improve visibility, attract more buyers and increase sales.</span></span>
            </a>
            <a href={`${BASE}/landing-pages/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg></span>
              <span className="mt-body"><strong>LANDING PAGES &amp; CRO <span aria-hidden="true">&rarr;</span></strong><span>Turn more of your existing traffic into paying customers without spending more on ads.</span></span>
            </a>
            <a href={`${BASE}/web-development/`} className="mega-tile">
              <span className="mt-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              <span className="mt-body"><strong>WEB DEVELOPMENT <span aria-hidden="true">&rarr;</span></strong><span>Fast, high-converting websites built to turn visitors into customers.</span></span>
            </a>
            <a href={`${BASE}/book/`} className="mega-feat">
              <div>
                <span className="mf-tag">Free audit</span>
                <h5>See exactly where your Google Ads account is leaking budget.</h5>
              </div>
              <span className="mf-link">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </a>
          </div>
        </div>
      </li>
      <li><a href={`${BASE}/case-studies/`}>Case Studies</a></li>
      <li><a href={`${BASE}/blog/`}>Blog</a></li>
      <li><a href={`${BASE}/tools/`}>Tools</a></li>
      <li><a href={`${BASE}/about/`}>About</a></li>
    </ul>
    <div className="nav-r">
      <a href={`${BASE}/book/`} className="nav-cta">Get Your Free Growth Plan</a>
      <button className="mob-tog" aria-label="Open menu"><span className="mob-bars"><span></span><span></span><span></span></span><span className="mob-lbl">Menu</span></button>
    </div>
  </div>
</nav>

{/* ============ MOBILE DRAWER ============ */}
<div className="mdrawer">
  <div className="mdrawer-top">
    <a href={`${BASE}/`} className="logo"><img className="logo-img" src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /></a>
    <button className="mdrawer-close" aria-label="Close menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round"/></svg></button>
  </div>
  <ul className="mdrawer-list">
    <li><a href={`${BASE}/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11l8-6 8 6v9H4z" strokeLinejoin="round"/><path d="M9 20v-6h6v6" strokeLinejoin="round"/></svg></span>Home<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li>
      <details className="mgroup">
        <summary><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg></span>Who We Help<svg className="mdc mdc-dn" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></summary>
        <ul className="msub">
          <li><a href={`${BASE}/ecommerce/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round"/><path d="M6 6 5 3H2" strokeLinecap="round"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg></span><span className="mst-body"><strong>E-COMMERCE</strong><span>More profitable sales, higher ROAS and scalable growth across your products.</span></span></a></li>
          <li><a href={`${BASE}/lead-generation/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" strokeLinejoin="round"/></svg></span><span className="mst-body"><strong>LEAD GENERATION</strong><span>More qualified leads at a lower cost per lead, with every call and form tracked.</span></span></a></li>
          <li><a href={`${BASE}/saas/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 4h18l-7 8v7l-4 2v-9z" strokeLinejoin="round"/></svg></span><span className="mst-body"><strong>SAAS</strong><span>More qualified demos and trials that turn into paying customers, at a lower acquisition cost.</span></span></a></li>
          <li><a href={`${BASE}/book/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round"/></svg></span><span className="mst-body"><strong>I want to book a strategy call</strong><span>We&rsquo;ll audit your account for free and show you where biggest opportunities are.</span></span></a></li>
        </ul>
      </details>
    </li>
    <li>
      <details className="mgroup">
        <summary><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" strokeLinecap="round"/></svg></span>What We Do<svg className="mdc mdc-dn" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></summary>
        <ul className="msub">
          <li><a href={`${BASE}/#what-we-do`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg></span><span className="mst-body"><strong>GOOGLE ADS</strong><span>More customers, lower acquisition costs and profitable growth from every dollar spent.</span></span></a></li>
          <li><a href={`${BASE}/ecommerce/#merchant-center`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 3h8l10 10-8 8L3 11V3z" strokeLinejoin="round"/><circle cx="7.5" cy="7.5" r="1.4"/></svg></span><span className="mst-body"><strong>MERCHANT CENTER</strong><span>Optimised product feeds that improve visibility, attract more buyers and increase sales.</span></span></a></li>
          <li><a href={`${BASE}/landing-pages/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg></span><span className="mst-body"><strong>LANDING PAGES &amp; CRO</strong><span>Turn more of your existing traffic into paying customers without spending more on ads.</span></span></a></li>
          <li><a href={`${BASE}/web-development/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="mst-body"><strong>WEB DEVELOPMENT</strong><span>Fast, high-converting websites built to turn visitors into customers.</span></span></a></li>
          <li><a href={`${BASE}/book/`} className="msub-tile"><span className="mst-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round"/></svg></span><span className="mst-body"><strong>Free Strategy Call</strong><span>We&rsquo;ll audit your business for free and show you where biggest opportunities are.</span></span></a></li>
        </ul>
      </details>
    </li>
    <li>
      <details className="mgroup">
        <summary><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg></span>Extra<svg className="mdc mdc-dn" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></summary>
        <ul className="msub">
          <li><a href={`${BASE}/blog/`}>Blog</a></li>
          <li><a href={`${BASE}/tools/`}>Tools</a></li>
          <li><a href={`${BASE}/case-studies/`}>Case Studies</a></li>
        </ul>
      </details>
    </li>
    <li><a href={`${BASE}/about/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round"/><path d="M16 6a3 3 0 0 1 0 6M21 20c0-2.4-1.4-4-3.4-4.7" strokeLinecap="round"/></svg></span>About<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
  </ul>
  <div className="mdrawer-cta">
    <a href={`${BASE}/book/`} className="mc-quote">Get Your Free Growth Plan</a>
  </div>
</div>

{/* ============ HERO ============ */}
<PageHero
  eyebrow="About us"
  media={<div className="hm-card">
      <span className="hm-tag">Founders</span>
      <div className="hm-founders">
        <span className="avs"><img src={`${BASE}/images/jackson-wallace-about.webp`} alt="Jackson Wallace" width="68" height="68" /><img src={`${BASE}/images/jackson-sharp-about-avatar.webp`} alt="Jackson Sharp" width="68" height="68" /></span>
        <div><strong>Jackson Wallace &amp; Jackson Sharp</strong><span className="hm-muted">Co-founders &middot; Ex-Google growth team</span></div>
      </div>
      <ul className="hm-list">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Google Ads only, nothing else</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Founders across every account</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Month-to-month, no lock-in</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>$100m+ ad spend managed</li>
      </ul>
    </div>}
  title={<span className="ph-oneline">Founded by <span className="accent">2 ex-Googlers</span>.</span>}
  sub={<>Jackson Wallace and Jackson Sharp left Google&rsquo;s growth team to start Adalytical, a specialist Google Ads agency for ecommerce and lead gen brands. We&rsquo;ve helped brands grow with Google Ads across North America, Europe, Asia, GCC, Australia and NZ.</>}
  actions={<><a href={`${BASE}/book/`} className="btn-p">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></>}
/>

{/* ============ CLIENT LOGOS ============ */}
<div className="trust-strip trust-full rvsec" aria-label="Brands we work with">
  <div className="strip-inner">
  <div className="marquee-track">
    {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(([file, name], i) => (
      <span key={i} className="mq-item"><img src={`${BASE}/images/logos/${file}`} alt={i < CLIENT_LOGOS.length ? name : ""} width="500" height="300" /></span>
    ))}
  </div>
  </div>
</div>

{/* ============ FOUNDERS ============ */}
<section className="sec sec-cream rvsec" id="team">
  <div className="ctr">
    <div className="shead">
      <span className="shead-chip rv"><span className="chip-plus">+</span> The founders</span>
      <div className="shead-main">
        <h2 className="shead-t rv">Hey, we&rsquo;re <span className="dim">Jackson &amp; Jackson.</span></h2>
        <p className="shead-sub rv">Two co-founders, both ex-Google, both hands-on in your account.</p>
        <p className="shead-sub rv">Prior to their years spent at Google, Jackson Wallace built his eCommerce experience with high-growth brands like HiSmile, while Jackson Sharp brought experience across tech startups and global FMCG brands like Reckitt.</p>
        <p className="shead-sub rv">They left Google to build Adalytical, combining the agility of startups, the strategic thinking of global brands, and their insider Google expertise to help ambitious businesses scale profitably.</p>
      </div>
    </div>
    <div className="ab-founders rv">
      <article className="ab-founder">
        <img src={`${BASE}/images/jackson-wallace-about.webp`} alt="Jackson Wallace" width="560" height="560" />
        <div className="ab-founder-body">
          <span className="ab-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg> Ex-Google growth team</span>
          <h3>Jackson Wallace</h3>
          <span className="ab-role">Co-founder &middot; Strategy</span>
          <p>Takes the time to understand your brand, market, and growth opportunities to develop a tailored strategy. Most brands first meet Wallace during their Growth Plan Call, and he remains personally involved in overseeing the strategy for every account.</p>
        </div>
      </article>
      <article className="ab-founder">
        <img src={`${BASE}/images/jackson-sharp-about.webp`} alt="Jackson Sharp" width="560" height="560" />
        <div className="ab-founder-body">
          <span className="ab-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg> Ex-Google growth team</span>
          <h3>Jackson Sharp</h3>
          <span className="ab-role">Co-founder &middot; Performance</span>
          <p>Ensures every account is optimised for maximum profitability and sustainable growth, while proactively adapting strategies to changes in areas such as the wider market, competitor activity, and advertising platforms.</p>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ============ STORY ============ */}
<section className="sec sec-cream sec-w rvsec">
  <div className="ctr">
    <div className="shead">
      <span className="shead-chip rv"><span className="chip-plus">+</span> Our story</span>
      <div className="shead-main">
        <h2 className="shead-t rv">Why we left Google <span className="dim">to start Adalytical.</span></h2>
      </div>
    </div>
    <div className="prose rv">
      <p><strong>At Google, we saw how the platform really works from the inside.</strong> We also saw the same thing over and over: generalist agencies leaving money on the table for their clients with broken tracking, wasted budgets and set-and-forget campaigns.</p>
      <p>We knew we could get brands far better results from outside Google than we could from inside it. So we started Adalytical to do one channel properly: Google Ads, and nothing else.</p>
      <p>Every decision we make is judged on one thing: <strong>is it growing your profit?</strong> Not clicks, not impressions, not a pretty report.</p>
    </div>
  </div>
</section>

{/* ============ NUMBERS ============ */}
<section className="sec sec-cream sec-stats rvsec">
  <div className="ctr">
    <div className="stats">
      <div className="stat rv"><span className="stat-val"><span className="cnt" data-target="1000" data-group="1" data-suffix="+">1,000+</span></span><span className="stat-label">Google Ads accounts<br />worked on</span></div>
      <div className="stat rv"><span className="stat-val"><span className="cnt" data-target="300" data-suffix="+">300+</span></span><span className="stat-label">Google Ads accounts<br />audited</span></div>
      <div className="stat rv"><span className="stat-val"><span className="cnt" data-target="50" data-suffix="+">50+</span></span><span className="stat-label">Agencies advised<br />while at Google</span></div>
      <div className="stat rv"><span className="stat-val">100%</span><span className="stat-label">Google Ads.<br />Nothing else.</span></div>
    </div>
  </div>
</section>

{/* ============ HOW WE WORK ============ */}
<section className="sec sec-cream rvsec">
  <div className="ctr">
    <div className="shead">
      <span className="shead-chip rv"><span className="chip-plus">+</span> How we work</span>
      <div className="shead-main">
        <h2 className="shead-t rv">What you get <span className="dim">when you work with us.</span></h2>
      </div>
    </div>
    <div className="why-grid ab-why rv">
      <article className="why-card">
        <span className="why-num">01</span>
        <h4>Google Ads specialists</h4>
        <p>We don&rsquo;t do social, SEO and email on the side. Google Ads is all we do, so it gets all of our attention.</p>
      </article>
      <article className="why-card">
        <span className="why-num">02</span>
        <h4>The founders stay involved</h4>
        <p>You won&rsquo;t be handed off after the sales call. Both founders are across the strategy on every account we run.</p>
      </article>
      <article className="why-card">
        <span className="why-num">03</span>
        <h4>Profit, not vanity metrics</h4>
        <p>We report on revenue, ROAS and cost per acquisition, in plain language, so you always know what your spend is returning.</p>
      </article>
      <article className="why-card">
        <span className="why-num">04</span>
        <h4>No lock-in contracts</h4>
        <p>Month-to-month, with no lock-in long term contracts. You stay because it&rsquo;s working really well (not because you&rsquo;re stuck).</p>
      </article>
    </div>
  </div>
</section>

{/* ============ REVIEWS ============ */}
<section className="sec sec-cream sec-w rvsec">
  <div className="ctr">
    <div className="shead">
      <span className="shead-chip rv"><span className="chip-plus">+</span> Client reviews</span>
      <div className="shead-main">
        <h2 className="shead-t rv">What it&rsquo;s like <span className="dim">working with us.</span></h2>
      </div>
    </div>
    <div className="ab-reviews rv">
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Adalytical helped us with our <strong>biggest Q4 ever</strong>! Revenue was +33% and ROAS +25% YOY. Already seeing <strong>massive revenue and ROAS gains</strong> for Q1 and Q2.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/jay.webp`} alt="" width="38" height="38" /></span><div><strong>Jay</strong><span>Head of Marketing, The Watch Factory</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>The team&rsquo;s <strong>ex-Google brainpower</strong> unlocked heaps of extra insights and fast-tracked support, but more importantly, <strong>helped us hit our biggest Q4</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/matthew.webp`} alt="" width="38" height="38" /></span><div><strong>Matthew</strong><span>CEO, Personalised Favours</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Can absolutely vouch for these guys! The level of <strong>knowledge, persistence and support</strong> has been incredible, especially navigating some very frustrating Google policy issues.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/kylie.webp`} alt="" width="38" height="38" /></span><div><strong>Kylie Alexander</strong><span>CEO, Health Heiress</span></div></figcaption>
      </figure>
    </div>
  </div>
</section>

{/* ============ FINAL CTA ============ */}
<section className="sec sec-cream cta rvsec" id="book">
  <div className="ctr">
    <div className="cta-card rv">
      <span className="sec-tag">Get started</span>
      <h2>Want two ex-Googlers on your account?</h2>
      <p>Get a free growth plan. We&rsquo;ll show you where your Google Ads are leaking money and exactly what we&rsquo;d do about it. No pitch, no pressure.</p>
      <div className="cta-btns"><a href={`${BASE}/book/`} className="btn-p">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
      <div className="cta-micro" style={{'justifyContent':'center'}}>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Free &amp; no obligation</span>
        <span className="cm-sep"></span>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>No lock-in contracts</span>
        <span className="cm-sep"></span>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Ex-Google founders</span>
      </div>
    </div>
  </div>
</section>

{/* ============ FOOTER ============ */}

<footer className="footer" id="contact">
  <div className="ctr">
    <div className="footer-grid">
      <div className="footer-brand">
        <a href={`${BASE}/`} className="logo"><img className="logo-img" src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /></a>
        <p>Helping brands scale with proven, profitable Google Ads strategies, built on ex-Google insider knowledge.</p>
        <a href={`${BASE}/book/`} className="footer-cta">Get Your Free Growth Plan</a>
      </div>
      <div className="fcol">
        <input type="checkbox" id="fc-services" className="fcol-toggle" />
        <label htmlFor="fc-services" className="fcol-head"><h5>Services</h5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></label>
        <ul className="footer-links">
          <li><a href={`${BASE}/#services`}>Google Ads Management</a></li>
          <li><a href={`${BASE}/ecommerce/#merchant-center`}>Merchant Center</a></li>
          <li><a href={`${BASE}/landing-pages/`}>Landing Pages</a></li>
          <li><a href={`${BASE}/web-development/`}>Web Development</a></li>
        </ul>
      </div>
      <div className="fcol">
        <input type="checkbox" id="fc-who" className="fcol-toggle" />
        <label htmlFor="fc-who" className="fcol-head"><h5>Who we help</h5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></label>
        <ul className="footer-links">
          <li><a href={`${BASE}/ecommerce/`}>E-commerce</a></li>
          <li><a href={`${BASE}/lead-generation/`}>Lead Generation</a></li>
          <li><a href={`${BASE}/saas/`}>SaaS</a></li>
          <li><a href={`${BASE}/case-studies/`}>Case Studies</a></li>
        </ul>
      </div>
      <div className="fcol">
        <input type="checkbox" id="fc-company" className="fcol-toggle" />
        <label htmlFor="fc-company" className="fcol-head"><h5>Company</h5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg></label>
        <ul className="footer-links">
          <li><a href={`${BASE}/about/`}>About</a></li>
          <li><a href={`${BASE}/#faq`}>FAQ</a></li>
          <li><a href={`${BASE}/partners/`}>Partners</a></li>
        </ul>
      </div>
      <div className="footer-plan-col"><a href={`${BASE}/book/`} className="footer-plan">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
    </div>
    <div className="footer-bottom">
      <span>© <span id="year">2026</span> adalytical. All rights reserved.</span>
    </div>
  </div>
</footer>

<div className="float-cta">
  <div className="fcta-bar">
    <p className="fcta-copy">Ready when you are<span> (no obligation either way)</span><span className="fcta-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span></p>
    <div className="fcta-btns">
      <a href={`${BASE}/book/`} className="fcta-primary"><span className="cta-shine">Get Your Free Growth Plan</span></a>
    </div>
  </div>
</div>



      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
