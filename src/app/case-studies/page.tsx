// AUTO-GENERATED from ../adalytical/case-studies.html, do not hand-edit; regenerate via scripts/gen_page.py
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies | Real clients. Real performance",
  description: "Real accounts, real numbers, what changed and what it returned.",
  alternates: { canonical: "/case-studies/" },
};

import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import { CASE_STUDIES } from "./data";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CaseStudies() {
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
        <div className="mega">
          <div className="mega-card">
            <div className="mega-col">
              <h4><a href={`${BASE}/ecommerce/`}>E-commerce</a></h4>
              <a href={`${BASE}/ecommerce/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg> Google Ads</a>
              <a href={`${BASE}/ecommerce/#merchant-center`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h8l10 10-8 8L3 11V3z" strokeLinejoin="round"/><circle cx="7.5" cy="7.5" r="1.4"/></svg> Merchant Center</a>
              <a href={`${BASE}/landing-pages/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg> Landing Pages &amp; CRO</a>
              <a href={`${BASE}/web-development/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg> Web Development</a>
            </div>
            <div className="mega-col">
              <h4><a href={`${BASE}/lead-generation/`}>Lead Generation</a></h4>
              <a href={`${BASE}/lead-generation/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg> Google Ads</a>
              <a href={`${BASE}/lead-generation/#call-tracking`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" strokeLinecap="round" strokeLinejoin="round"/></svg> Call &amp; Form Tracking</a>
              <a href={`${BASE}/landing-pages/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg> Landing Pages &amp; CRO</a>
              <a href={`${BASE}/web-development/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg> Web Development</a>
            </div>
            <div className="mega-col">
              <h4><a href={`${BASE}/saas/`}>SaaS</a></h4>
              <a href={`${BASE}/saas/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg> Google Ads</a>
              <a href={`${BASE}/saas/#demo-funnels`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 4h18l-7 8v7l-4 2v-9z" strokeLinejoin="round"/></svg> Demo &amp; Trial Funnels</a>
              <a href={`${BASE}/landing-pages/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg> Landing Pages &amp; CRO</a>
              <a href={`${BASE}/web-development/`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg> Web Development</a>
            </div>
            <div className="mega-feat">
              <div>
                <span className="mf-tag">Free audit</span>
                <h5>See exactly where your Google Ads account is leaking budget.</h5>
              </div>
              <a href={`${BASE}/book/`} className="mf-link">Get Your Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            </div>
          </div>
        </div>
      </li>
      <li><a href={`${BASE}/case-studies/`}>Case Studies</a></li>
      <li><a href={`${BASE}/blog/`}>Blog</a></li>
      <li><a href={`${BASE}/tools/`}>Tools</a></li>
      <li><a href={`${BASE}/about/`}>About</a></li>
    </ul>
    <div className="nav-r">
      <a href={`${BASE}/book/`} className="nav-cta">Get Your Growth Plan</a>
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
    <li><a href={`${BASE}/ecommerce/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round"/><path d="M6 6 5 3H2" strokeLinecap="round"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg></span>E-commerce<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/lead-generation/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Lead Generation<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/saas/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>SaaS<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/landing-pages/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 8h16M8 13h8M8 17h5" strokeLinecap="round"/></svg></span>Landing Pages &amp; CRO<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/web-development/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 4l-4 8 4 8M16 4l4 8-4 8M13 3l-2 18" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Web Development<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/blog/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round"/></svg></span>Blog<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/tools/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" strokeLinejoin="round"/></svg></span>Tools<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/case-studies/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18" strokeLinecap="round"/><path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Case Studies<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
    <li><a href={`${BASE}/about/`}><span className="mdi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" strokeLinecap="round"/><path d="M16 6a3 3 0 0 1 0 6M21 20c0-2.4-1.4-4-3.4-4.7" strokeLinecap="round"/></svg></span>About<svg className="mdc" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
  </ul>
  <div className="mdrawer-cta">
    <a href={`${BASE}/book/`} className="mc-quote">Get Your Growth Plan</a>
  </div>
</div>

{/* ============ HERO ============ */}
<PageHero
  eyebrow="Case studies"
  media={<div className="hm-stack">
      <div className="hm-card hm-res"><b>The Watch Factory</b><span className="hm-big">+33%</span><span className="hm-muted">Revenue YoY, biggest Q4 ever, ROAS +25%</span></div>
      <div className="hm-card hm-res"><b>Personalised Favours</b><span className="hm-big">+$334k</span><span className="hm-muted">Revenue after ad spend in 2025, ROAS 4.8 &rarr; 5.66</span></div>
      <div className="hm-card hm-res"><b>Lokolash</b><span className="hm-big">5x</span><span className="hm-muted">Return by month 2, from zero Google history</span></div>
    </div>}
  title={<>Real clients. <span className="accent">Real performance.</span></>}
  sub={<>We’ve helped brands across e-commerce, lead generation and SaaS grow profitably with Google Ads. Here are a few of the results.</>}
  actions={<><a href={`${BASE}/book/`} className="btn-p">Get Your Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></>}
/>

{/* ============ CASE GRID ============ */}
<section className="sec sec-cream rvsec" style={{'paddingTop':'clamp(20px,calc(3 * var(--vw)),40px)'}}>
  <div className="ctr">
    <div className="cs-index rv">
      {CASE_STUDIES.map((c) => (
        <a href={`${BASE}/case-studies/${c.slug}/`} className="csx" key={c.slug}>
          <div className="csx-img"><img src={`${BASE}/images/${c.image}`} alt={c.name} /><span className="csx-stat">{c.cardStat}</span></div>
          <div className="csx-body">
            <span className="csx-tag">{c.tag}</span>
            <h3>{c.name}</h3>
            <p>{c.cardBlurb}</p>
            <span className="csx-more">Read story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* ============ TESTIMONIALS ============ */}
<section className="sec sec-cream rvsec" id="testimonials" style={{'paddingTop':'clamp(20px,calc(3 * var(--vw)),40px)'}}>
  <div className="ctr">
    <div className="shead">
      <span className="shead-chip rv"><span className="chip-plus">+</span> Client reviews</span>
      <div className="shead-main">
        <h2 className="shead-t rv">Words from the people <span className="dim">behind the work.</span></h2>
        <p className="shead-sub rv">Real Google Ads clients, real results, in their own words and on camera.</p>
      </div>
    </div>
    <div className="rvw-wall rv">
      <div className="rvw-col">
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Adalytical <strong>helped us scale our Google spend</strong> by over 300%, all while keeping profitability front and centre.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/sivan.webp`} alt="" width="38" height="38" /></span><div><strong>Sivan</strong><span>Founder, Bushdoof Lighting</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1165554472">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-matthew.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Matthew"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Matthew</strong><span>CEO, Personalised Favours</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote><strong>Helped us compete against the giants</strong> in the extremely competitive and crowded drinks industry. Highly recommend!</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rachel.webp`} alt="" width="38" height="38" /></span><div><strong>Rachel</strong><span>Founder, Blume</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Jackson&rsquo;s <strong>expertise in Google Ads is unmatched</strong>. He and the team helped us overcome multiple very niche Google Ads challenges.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rob.webp`} alt="" width="38" height="38" /></span><div><strong>Rob</strong><span>Marketing Director, Home Make It</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1232899165">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-winland.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Rick"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Rick</strong><span>Winland Home &amp; Garden</span></figcaption>
      </figure>
      </div>
      <div className="rvw-col">
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Adalytical helped us with our <strong>biggest Q4 ever</strong>! Revenue was +33% and ROAS +25% YOY. Already seeing <strong>massive revenue and ROAS gains</strong> for Q1 and Q2.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/jay.webp`} alt="" width="38" height="38" /></span><div><strong>Jay</strong><span>Head of Marketing, The Watch Factory</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1167218749">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-rio.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Rio"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Rio</strong><span>Founder, G80 Cosmetics</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Quickly grasped our unique challenges and FMCG space to <strong>deliver an effective Google and YouTube Ads strategy</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/abdul.webp`} alt="" width="38" height="38" /></span><div><strong>Abdul</strong><span>Founder, Pinkish Pods</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1170457963">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-ariana.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Ariana"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Ariana</strong><span>Founder, Aaria London</span></figcaption>
      </figure>
      </div>
      <div className="rvw-col">
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>The team&rsquo;s <strong>ex-Google brainpower</strong> unlocked heaps of extra insights and fast-tracked support, but more importantly, <strong>helped us hit our biggest Q4</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/matthew.webp`} alt="" width="38" height="38" /></span><div><strong>Matthew</strong><span>CEO, Personalised Favours</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Adalytical helped us with segmenting our audience which changed how we ran our campaigns and <strong>brought in a wave of new customers</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rio.webp`} alt="" width="38" height="38" /></span><div><strong>Rio</strong><span>Founder, G80 Cosmetics</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1170457933">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-meryl.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Meryl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Meryl</strong><span>Co-founder, Hedonist</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>We saw a <strong>better ROAS straight away</strong> and helped us expand into other markets! Always have the answers and strats for Google Ads.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/ariana.webp`} alt="" width="38" height="38" /></span><div><strong>Ariana</strong><span>Founder, Aaria London</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <span className="rvw-tag">Adalytical</span>
        <blockquote>Can absolutely vouch for these guys! We&rsquo;ve worked with Adalytical on our Google Ads and the level of <strong>knowledge, persistence and support</strong> has been incredible. They&rsquo;ve gone above and beyond for our account, especially navigating some very frustrating Google policy issues. Definitely worth having a chat with them if you&rsquo;re running ecommerce ads.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/kylie.webp`} alt="" width="38" height="38" /></span><div><strong>Kylie Alexander</strong><span>CEO, Health Heiress</span></div></figcaption>
      </figure>
      </div>
    </div>
  </div>
</section>

{/* ============ FINAL CTA ============ */}

<section className="sec sec-cream cta rvsec" id="book" style={{'paddingTop':'clamp(20px,calc(3 * var(--vw)),40px)'}}>
  <div className="ctr">
    <div className="cta-card rv">
      <span className="sec-tag">Get started</span>
      <h2>Your account could be the next case study.</h2>
      <p>Book a free audit and we’ll map out exactly where your Google Ads are leaving money on the table.</p>
      <div className="cta-btns"><a href={`${BASE}/book/`} className="btn-p">Get Your Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
      <div className="cta-micro" style={{'justifyContent':'center'}}>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Free &amp; no obligation</span>
        <span className="cm-sep"></span>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>No lock-in contracts</span>
        <span className="cm-sep"></span>
        <span className="cm-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Ex-Google Ads team</span>
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
      </div>
      <div>
        <h5>Services</h5>
        <ul className="footer-links">
          <li><a href={`${BASE}/#services`}>Google Ads Management</a></li>
          <li><a href={`${BASE}/ecommerce/#merchant-center`}>Merchant Center</a></li>
          <li><a href={`${BASE}/landing-pages/`}>Landing Pages</a></li>
          <li><a href={`${BASE}/web-development/`}>Web Development</a></li>
        </ul>
      </div>
      <div>
        <h5>Who we help</h5>
        <ul className="footer-links">
          <li><a href={`${BASE}/ecommerce/`}>E-commerce</a></li>
          <li><a href={`${BASE}/lead-generation/`}>Lead Generation</a></li>
          <li><a href={`${BASE}/saas/`}>SaaS</a></li>
          <li><a href={`${BASE}/case-studies/`}>Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul className="footer-links">
          <li><a href={`${BASE}/about/`}>About</a></li>
          <li><a href={`${BASE}/#faq`}>FAQ</a></li>
          <li><a href={`${BASE}/partners/`}>Partners</a></li>
          <li><a href={`${BASE}/book/`}>Get Your Growth Plan</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© <span id="year">2026</span> adalytical. All rights reserved.</span>
      <span>Terms and Conditions · Privacy Policy</span>
    </div>
  </div>
</footer>

<div className="float-cta">
  <div className="fcta-bar">
    <span className="fcta-dot" aria-hidden="true"></span>
    <p className="fcta-copy">Ready when you are<span>, no obligation either way</span></p>
    <div className="fcta-btns">
      <a href={`${BASE}/book/`} className="fcta-primary">Get Your Growth Plan</a>
    </div>
  </div>
</div>



      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
