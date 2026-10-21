// AUTO-GENERATED from ../adalytical/about.html, do not hand-edit; regenerate via scripts/gen_page.py
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Google Ads tips, trends & tutorials",
  description: "Google Ads tips, trends and tutorials from an ex-Google Ads team.",
  alternates: { canonical: "/blog/" },
};

import Script from "next/script";
import { PageHero } from "@/components/PageHero";
import BlogIndex from "./BlogIndex";
import { POSTS } from "./posts";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Blog() {
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

<PageHero
  eyebrow="Blog"
  media={<div className="hm-stack">
      {POSTS.slice(0, 3).map((p) => (
        <a key={p.slug} href={`${BASE}/blog/${p.slug}/`} className="hm-card hm-post">
          <span className="hm-meta"><span className="hm-tag">{p.category}</span><span className="hm-muted">{p.minutes} min read</span></span>
          <b>{p.title}</b>
        </a>
      ))}
    </div>}
  title={<>Google Ads tips, trends <span className="accent">&amp; tutorials.</span></>}
  sub={<>Guides, benchmarks and playbooks from the team, everything we’ve learned scaling Google Ads across 1,000+ accounts.</>}
  actions={<><a href={`${BASE}/book/`} className="btn-p">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></>}
/>

<section className="sec sec-cream sec-w framed rvsec bl-sec">
  <div className="ctr">
    <BlogIndex />
  </div>
</section>
{/* ============ CTA ============ */}


<section className="sec sec-cream cta framed rvsec" id="book" style={{paddingTop:"clamp(20px,calc(3 * var(--vw)),40px)"}}>
  <div className="ctr"><div className="cta-card rv">
    <span className="sec-tag">Get started</span>
    <h2>Want this dialled in on your account?</h2>
    <p>Get your Growth Plan and we’ll apply the same playbooks to your Google Ads, tailored to your brand.</p>
    <div className="cta-btns"><a href={`${BASE}/book/`} className="btn-p">Get Your Free Growth Plan <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
  </div></div>
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
          <li><a href={`${BASE}/book/`}>Get Your Free Growth Plan</a></li>
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
      <a href={`${BASE}/book/`} className="fcta-primary"><span className="cta-shine">Get Your Free Growth Plan</span></a>
    </div>
  </div>
</div>



      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
