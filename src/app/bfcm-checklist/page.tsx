// Black Friday / Cyber Monday lead magnet: opt-in page for paid traffic. Form above the fold on every screen size
// (on phones it sits straight under the headline, before the bullets). Proof only from adalytical.io and
// freeaudit.adalytical.io. After the form, visitors go to /bfcm-checklist/access.
import type { Metadata } from "next";
import { BFCM, SECTIONS, TOTAL_CHECKS } from "./content";
import { OptInForm } from "./OptInForm";
import { StickyCta } from "./StickyCta";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "The Google Ads Black Friday Checklist | Adalytical",
  description: `${TOTAL_CHECKS} Google Ads checks to run before ${BFCM.deadline}, from the ex-Google team at Adalytical. Free, instant access.`,
  robots: { index: false, follow: false }, // paid-traffic page
};

// "27 November" -> "27 Nov" + "ember", so phones can drop the tail
const short = (d: string) => d.replace(/^(\d+ \w{3}).*$/, "$1");
const rest = (d: string) => d.slice(short(d).length);

const Tick = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const LOGOS = [
  ["watch-factory-logo.png", "The Watch Factory"], ["personalised-favours-logo-new.png", "Personalised Favours"],
  ["booze-and-barrels-logo.png", "Booze & Barrels"], ["redlight-logo-new.png", "Redlight Innovation"],
  ["beforeyouspeak-logo-new.png", "BeforeYouSpeak"], ["hedonist-logo-new.png", "Hedonist"],
  ["bushdoof-logo.png", "Bushdoof Lighting"], ["aaria-logo-new.png", "Aaria London"],
];

const REVIEWS = [
  { quote: <>Adalytical helped us with our <strong>biggest Q4 ever</strong>! Revenue was +33% and ROAS +25% YOY.</>, name: "Jay", role: "Head of Marketing, The Watch Factory", img: "jay.webp" },
  { quote: <>The team&rsquo;s <strong>ex-Google brainpower</strong> unlocked heaps of extra insights and fast-tracked support, but more importantly, <strong>helped us hit our biggest Q4</strong>.</>, name: "Matthew", role: "CEO, Personalised Favours", img: "matthew.webp" },
  { quote: <>Adalytical <strong>helped us scale our Google spend</strong> by over 300%, all while keeping profitability front and centre.</>, name: "Sivan", role: "Founder, Bushdoof Lighting", img: "sivan.webp" },
];

export default function BfcmChecklist() {
  return (
    <>
<header className="bf-top"><div className="bf-ctr"><img src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /></div></header>

{/* ============ HERO: headline + form above the fold ============ */}
<section className="bf-hero" id="get">
  <div className="bf-ctr bf-hero-grid">
    <div className="bf-hero-copy">
      {/* month shortened on phones so the eyebrow fits one line */}
      <span className="bf-eyebrow"><i aria-hidden="true"></i><span>Black Friday {short(BFCM.blackFriday)}<span className="bf-long">{rest(BFCM.blackFriday)}</span> &middot; Cyber Monday {short(BFCM.cyberMonday)}<span className="bf-long">{rest(BFCM.cyberMonday)}</span></span></span>
      <h1>The Google Ads <span className="bf-accent">Black Friday</span> Checklist</h1>
      <p className="bf-lede">{TOTAL_CHECKS} checks to run before {BFCM.deadline}, so your account is ready for the busiest week of the year.<span className="bf-long"> From the ex-Google team behind some of our clients&rsquo; biggest Q4s.</span></p>
      {/* checklist preview image (code-drawn): fills the space beside the form card on desktop; smaller, above the form on phones */}
      <figure className="bf-mock" aria-hidden="true">
        <div className="bf-mock-back"></div>
        <div className="bf-mock-sheet">
          <div className="bf-mock-head">
            <span className="bf-mock-tag">Black Friday Checklist</span>
            <b>Google Ads BFCM readiness</b>
            <div className="bf-mock-prog"><i style={{ width: "72%" }}></i></div>
            <small>18 of {TOTAL_CHECKS} checks done</small>
          </div>
          <ul>
            {SECTIONS.map((s, i) => (
              <li key={s.title} className={i < 3 ? "done" : i === 3 ? "half" : ""}>
                <span className="bf-mock-box">{i < 3 ? <Tick /> : null}</span>
                <span className="bf-mock-t">{s.title}</span>
                <em>{i < 3 ? "5/5" : i === 3 ? "3/5" : "0/5"}</em>
              </li>
            ))}
          </ul>
        </div>
        <span className="bf-mock-badge"><Tick />Ready by {BFCM.deadline}</span>
      </figure>
    </div>
    <div className="bf-card">
      <span className="bf-pill"><i aria-hidden="true"></i>Free. Instant access.</span>
      <h2 className="bf-card-h">Get the checklist</h2>
      <OptInForm />
    </div>
    <ul className="bf-hero-list">
      <li><Tick />Tracking that holds up when traffic spikes</li>
      <li><Tick />Budgets and bidding set before the rush, not during it</li>
      <li><Tick />Sale prices and promotions live in Shopping on time</li>
      <li><Tick />Ads, audiences and brand protection for sale week</li>
    </ul>
  </div>
</section>

{/* ============ WHAT'S INSIDE ============ */}
<section className="bf-sec">
  <div className="bf-ctr">
    <span className="bf-tag">What&rsquo;s inside</span>
    <h2 className="bf-h2">5 areas. {TOTAL_CHECKS} checks. About an hour in your account.</h2>
    <div className="bf-inside">
      {SECTIONS.map((s, i) => (
        <article key={s.title} className="bf-inside-card">
          <span className="bf-num">{String(i + 1).padStart(2, "0")}</span>
          <div><h3>{s.title}</h3><p>{s.teaser}</p><span className="bf-count">{s.checks.length} checks</span></div>
        </article>
      ))}
      <a href="#get" className="bf-inside-card bf-inside-cta"><span>Get all {TOTAL_CHECKS} checks free</span><span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

{/* ============ PROOF: logos + Q4 reviews ============ */}
<section className="bf-logos">
  <div className="bf-ctr">
    <p>Trusted by e-commerce brands across Australia, New Zealand and the UK</p>
    <div className="bf-logo-row">
      {LOGOS.map(([f, alt]) => <img key={f} src={`${BASE}/images/logos/${f}`} alt={alt} width="500" height="300" />)}
    </div>
  </div>
</section>

<section className="bf-sec">
  <div className="bf-ctr">
    <span className="bf-tag">Client reviews</span>
    <h2 className="bf-h2">Their biggest Q4s, in their words.</h2>
    <div className="bf-reviews">
      {REVIEWS.map((r) => (
        <figure key={r.name + r.role} className="bf-review">
          <blockquote>{r.quote}</blockquote>
          <figcaption><img src={`${BASE}/images/reviews/${r.img}`} alt="" width="40" height="40" /><div><strong>{r.name}</strong><span>{r.role}</span></div></figcaption>
        </figure>
      ))}
    </div>
  </div>
</section>

{/* ============ FOUNDERS + FINAL CTA ============ */}
<section className="bf-sec bf-final">
  <div className="bf-ctr bf-final-grid">
    <div>
      <span className="bf-tag">Who wrote it</span>
      <h2 className="bf-h2">Two former Google Ads strategists.</h2>
      <p className="bf-p">We&rsquo;re Jackson Sharp and Jackson Wallace. We worked at Google before starting Adalytical, and this is the checklist we run on our own clients&rsquo; accounts every November.</p>
      <div className="bf-founders">
        <div><img src={`${BASE}/images/jackson-sharp.webp`} alt="" width="52" height="52" /><span><strong>Jackson Sharp</strong>Former Google Ads Strategist</span></div>
        <div><img src={`${BASE}/images/jackson-wallace.webp`} alt="" width="52" height="52" /><span><strong>Jackson Wallace</strong>Former Google Ads Strategist</span></div>
      </div>
    </div>
    <div className="bf-final-cta">
      <h3>Run it before {BFCM.deadline}.</h3>
      <p>After that, changes are too late for Google&rsquo;s bidding to learn from before Black Friday.</p>
      <a href="#get" className="bf-btn">Get the Free Checklist <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<footer className="bf-foot"><div className="bf-ctr"><span>&copy; 2026 Adalytical. All rights reserved.</span><span>Terms and Conditions &middot; Privacy Policy</span></div></footer>

<StickyCta />
    </>
  );
}
