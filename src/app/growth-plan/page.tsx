// E-commerce landing page for paid traffic (growth.adalytical.io). Offer: a free Google Ads audit, framed around
// Black Friday. Layout follows freeaudit.adalytical.io: split hero (copy left, VSL right), what we review, proof,
// the 4-step system (the audit is steps 1 and 2), how it works, fit, booking form, FAQs.
// Copy/proof only from the e-commerce VSL script, adalytical.io and freeaudit.adalytical.io.
// Tracking names are unchanged on purpose: the Meta campaign optimises for GrowthPlanClick, and the TidyCal
// booking type (adalytical/growthplan) redirects to /growth-plan/booked where Schedule fires.
import type { Metadata } from "next";
import Script from "next/script";
import { VSL_VIMEO_ID } from "@/lib/vsl";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Meta pixel: "Adalytical Main Pixel" in the Adalytical NEW ad account (act_921312640727906)
const META_PIXEL_ID = "1740160130622901";
// Booking: the form posts to the funnel dashboard, then shows this TidyCal booking type
const LEAD_API = "https://funnel.adalytical.io/api/lead";
const TIDYCAL_PATH = "adalytical/growthplan";

export const metadata: Metadata = {
  title: "Free Black Friday Google Ads Audit | Adalytical",
  description: "A free Google Ads audit by 2 ex-Google strategists, with a clear plan of what to fix, cut and scale before Black Friday.",
  robots: { index: false, follow: false }, // paid-traffic page
};

const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function GrowthPlan() {
  return (
    <>

{/* ============ BLACK FRIDAY BAR ============ */}
<a href="#book" className="fa-bar"><span className="fa-bar-full"><b>Black Friday is Friday 27 November.</b> To get fixes live in time, audits need to start this week. </span><span className="fa-bar-short"><b>Black Friday audits:</b> book this week </span><span className="fa-bar-cta">Book yours &rarr;</span></a>

{/* ============ LOGO-ONLY HEADER (no navigation on a paid landing page) ============ */}
<header className="fa-top"><div className="ctr"><img src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /><a href="#book" className="fa-top-cta">Book My Free Audit</a></div></header>

{/* ============ HERO: copy left, VSL right (freeaudit.adalytical.io layout) ============ */}
<section className="fa-hero">
  <div className="ctr fa-hero-grid">
    <div className="fa-copy">
      <span className="fa-eyebrow">Free Black Friday audit</span>
      <h1>Find your wasted Google Ads spend <em>before Black Friday.</em></h1>
      <p className="fa-lede">2 ex-Google strategists review your account and show you what to fix.</p>
      <ul className="fa-checks">
        <li><Tick />Find wasted spend and poor-quality traffic</li>
        <li><Tick />Spot tracking, bidding and Merchant Center issues</li>
        <li><Tick />See where to cut costs and scale profitably into BFCM</li>
      </ul>
      <a href="#book" className="fa-btn">Get My Free Audit <span aria-hidden="true">&rarr;</span></a>
      <p className="fa-micro">100% free <span>&bull;</span> Human-reviewed <span>&bull;</span> No obligation</p>
      <p className="fa-proof">
        <span className="fa-avs">
          <img src={`${BASE}/images/reviews/jay.webp`} alt="" width="34" height="34" />
          <img src={`${BASE}/images/reviews/ariana.webp`} alt="" width="34" height="34" />
          <img src={`${BASE}/images/reviews/sivan.webp`} alt="" width="34" height="34" />
        </span>
        Trusted across 200+ e-commerce accounts
      </p>
    </div>
    <div className="fa-video">
      <span className="fa-watch" aria-hidden="true">Watch this first<svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6c22-2 38 8 40 26" /><path d="M38 26l8 8 7-10" /></svg></span>
      <div className="vsl-panel vsl-big" data-vimeo={VSL_VIMEO_ID}>
        <img className="vsl-frame" src={`${BASE}/images/vsl-poster.webp`} alt="How an ex-Googler scales brands with Google Ads" />
        <button className="vsl-play vsl-hit" type="button" aria-label="Play the video">
          <span className="vsl-pill"><span className="vsl-pill-ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span><b>Play video</b><em>Click to watch with sound</em></span></span>
        </button>
      </div>
    </div>
  </div>
</section>

{/* ============ CLIENT LOGOS ============ */}
<section className="vsl-logos rvsec">
  <div className="ctr">
    <p className="vsl-logos-h rv">Some of the brands we&rsquo;ve worked with</p>
    <div className="vsl-logo-grid">
      <img className="lg-pop" style={{'--i':0} as React.CSSProperties} src={`${BASE}/images/logos/redlight-logo-new.png`} alt="Redlight Innovation" width="500" height="300" />
      <img className="lg-pop" style={{'--i':1} as React.CSSProperties} src={`${BASE}/images/logos/watch-factory-logo.png`} alt="The Watch Factory" width="500" height="300" />
      <img className="lg-pop" style={{'--i':2} as React.CSSProperties} src={`${BASE}/images/logos/personalised-favours-logo-new.png`} alt="Personalised Favours" width="500" height="300" />
      <img className="lg-pop" style={{'--i':3} as React.CSSProperties} src={`${BASE}/images/logos/beforeyouspeak-logo-new.png`} alt="BeforeYouSpeak" width="500" height="300" />
      <img className="lg-pop" style={{'--i':4} as React.CSSProperties} src={`${BASE}/images/logos/aaria-logo-new.png`} alt="Aaria London" width="500" height="300" />
      <img className="lg-pop" style={{'--i':5} as React.CSSProperties} src={`${BASE}/images/logos/hedonist-logo-new.png`} alt="Hedonist" width="500" height="300" />
      <img className="lg-pop" style={{'--i':6} as React.CSSProperties} src={`${BASE}/images/logos/loko-logo-new.png`} alt="Loko" width="500" height="300" />
      <img className="lg-pop" style={{'--i':7} as React.CSSProperties} src={`${BASE}/images/logos/pet-supplies-australia-logo-new.png`} alt="Pet Supplies Australia" width="500" height="300" />
      <img className="lg-pop" style={{'--i':8} as React.CSSProperties} src={`${BASE}/images/logos/zerobreath-logo-new.png`} alt="ZeroBreath" width="500" height="300" />
      <img className="lg-pop" style={{'--i':9} as React.CSSProperties} src={`${BASE}/images/logos/nadt-logo.png`} alt="NADT" width="500" height="300" />
      <img className="lg-pop" style={{'--i':10} as React.CSSProperties} src={`${BASE}/images/logos/salty-captain-logo.png`} alt="Salty Captain" width="500" height="300" />
      <img className="lg-pop" style={{'--i':11} as React.CSSProperties} src={`${BASE}/images/logos/hydrotech-logo.png`} alt="Hydrotech" width="500" height="300" />
      <img className="lg-pop" style={{'--i':12} as React.CSSProperties} src={`${BASE}/images/logos/vybey-logo-new.png`} alt="Vybey" width="500" height="300" />
      <img className="lg-pop" style={{'--i':13} as React.CSSProperties} src={`${BASE}/images/logos/pinkish-pods-logo.png`} alt="Pinkish Pods" width="500" height="300" />
      <img className="lg-pop" style={{'--i':14} as React.CSSProperties} src={`${BASE}/images/logos/health-heiress-logo.png`} alt="Health Heiress" width="500" height="300" />
      <img className="lg-pop" style={{'--i':15} as React.CSSProperties} src={`${BASE}/images/logos/rover-rituals-logo.png`} alt="Rover Rituals" width="500" height="300" />
      <img className="lg-pop" style={{'--i':16} as React.CSSProperties} src={`${BASE}/images/logos/yeet-seat-logo.png`} alt="Yeet Seat" width="500" height="300" />
      <img className="lg-pop" style={{'--i':17} as React.CSSProperties} src={`${BASE}/images/logos/harry-austin-logo.png`} alt="Harry Austin" width="500" height="300" />
      <img className="lg-pop" style={{'--i':18} as React.CSSProperties} src={`${BASE}/images/logos/kiwi-treats-logo.png`} alt="Kiwi Treats" width="500" height="300" />
      <img className="lg-pop" style={{'--i':19} as React.CSSProperties} src={`${BASE}/images/logos/winland-logo.png`} alt="Winland Home &amp; Garden" width="500" height="300" />
      <img className="lg-pop" style={{'--i':20} as React.CSSProperties} src={`${BASE}/images/logos/bellissima-logo.png`} alt="Bellissima" width="500" height="300" />
      <img className="lg-pop" style={{'--i':21} as React.CSSProperties} src={`${BASE}/images/logos/bushdoof-logo.png`} alt="Bushdoof Lighting" width="500" height="300" />
      <img className="lg-pop" style={{'--i':22} as React.CSSProperties} src={`${BASE}/images/logos/booze-and-barrels-logo.png`} alt="Booze &amp; Barrels" width="500" height="300" />
      <img className="lg-pop" style={{'--i':23} as React.CSSProperties} src={`${BASE}/images/logos/biosx-logo.png`} alt="BIOSx" width="500" height="300" />
      <img className="lg-pop" style={{'--i':24} as React.CSSProperties} src={`${BASE}/images/logos/blume-logo.png`} alt="Blume" width="500" height="300" />
      <img className="lg-pop" style={{'--i':25} as React.CSSProperties} src={`${BASE}/images/logos/bathroom-space-logo.png`} alt="Bathroom Space" width="500" height="300" />
      <img className="lg-pop" style={{'--i':26} as React.CSSProperties} src={`${BASE}/images/logos/home-make-it-logo.png`} alt="Home Make It" width="500" height="300" />
    </div>
  </div>
</section>

{/* ============ WHY THIS WEEK: the Black Friday timeline ============ */}
<section className="sec sec-cream rvsec bk-sec">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">Why start this week</span>
      <h2>Changes made in Black Friday week <span className="dim">are too late.</span></h2>
      <p>Google&rsquo;s bidding needs time to learn from any fix. If tracking, structure or your feed is holding you back, it has to be sorted in the next few weeks, not the week of the sale.</p>
    </div>
    <ol className="fa-timeline rv">
      <li><span>This week</span><b>Your free audit</b><p>We review your account, tracking and Merchant Center, then walk you through what to fix, cut and scale.</p></li>
      <li><span>By 13 November</span><b>Fixes are live</b><p>The biggest issues are fixed early, so bidding has two weeks of clean data before the sale.</p></li>
      <li><span>27 to 30 November</span><b>Scale into BFCM</b><p>Budgets go to the products and searches that actually make you money, not to waste.</p></li>
    </ol>
  </div>
</section>

{/* ============ WHAT YOU'LL RECEIVE (from freeaudit.adalytical.io): audit mock left, copy right ============ */}
<section className="fa-receive">
  <div className="ctr fa-receive-grid">
    <figure className="fa-mock" aria-hidden="true">
      <div className="fa-mock-stage">
        <div className="fa-mock-back"></div>
        <div className="fa-mock-win">
          <div className="fa-mock-bar"><i></i><i></i><i></i><span>ads.google.com</span></div>
          <div className="fa-mock-body">
            <ul className="fa-mock-nav"><li className="t">Google Ads</li><li>Overview</li><li>Campaigns</li><li>Insights</li><li>Products</li><li>Audiences</li><li>Goals</li></ul>
            <div className="fa-mock-main"><b>Account overview</b><span>Campaigns</span><s></s><s></s><s></s><s></s></div>
          </div>
        </div>
        <div className="fa-mock-card">
          <b>Audit Summary</b>
          <ul>
            <li><Tick />Wasted spend opportunities</li>
            <li><Tick />Tracking issues</li>
            <li><Tick />Campaign structure fixes</li>
            <li><Tick />Merchant Center improvements</li>
            <li><Tick />Scaling recommendations</li>
          </ul>
        </div>
      </div>
    </figure>
    <div className="fa-receive-copy">
      <span className="fa-receive-tag">What you&rsquo;ll actually receive</span>
      <h2><span>Full custom audit,<br />specific to you</span> <em>(not just an automated, generic audit)</em></h2>
      <p>2 ex-Google strategists manually review your account before your call. We&rsquo;ll walk you through the biggest issues and opportunities we&rsquo;ve found, explain what we&rsquo;d change, and prioritise everything by potential impact.</p>
      <a href="#book" className="fa-btn">Book My Free Audit <span aria-hidden="true">&rarr;</span></a>
      <p className="fa-receive-note">No automated report. No obligation.</p>
    </div>
  </div>
</section>

{/* ============ CLIENT TESTIMONIALS (video + written, mixed) ============ */}
<section className="sec sec-cream rvsec bk-sec">
  <div className="ctr">
    <div className="bk-head rv vsl-center">
      <span className="sec-tag">Client reviews</span>
      <h2>Hear it from our clients.</h2>
    </div>
    <div className="rvw-wall rv">
      <div className="rvw-col">
      <figure className="rvw-vid" data-vimeo="1165554472">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-matthew.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Matthew"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Matthew</strong><span>CEO, Personalised Favours</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Adalytical helped us with our <strong>biggest Q4 ever</strong>! Revenue was +33% and ROAS +25% YOY. Already seeing <strong>massive revenue and ROAS gains</strong> for Q1 and Q2.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/jay.webp`} alt="" width="38" height="38" /></span><div><strong>Jay</strong><span>Head of Marketing, The Watch Factory</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote><strong>Helped us compete against the giants</strong> in the extremely competitive and crowded drinks industry. Highly recommend!</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rachel.webp`} alt="" width="38" height="38" /></span><div><strong>Rachel</strong><span>Founder, Blume</span></div></figcaption>
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
        <blockquote>Adalytical <strong>helped us scale our Google spend</strong> by over 300%, all while keeping profitability front and centre.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/sivan.webp`} alt="" width="38" height="38" /></span><div><strong>Sivan</strong><span>Founder, Bushdoof Lighting</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Jackson&rsquo;s <strong>expertise in Google Ads is unmatched</strong>. He and the team helped us overcome multiple very niche Google Ads challenges.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rob.webp`} alt="" width="38" height="38" /></span><div><strong>Rob</strong><span>Marketing Director, Beverage Food Group</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1167218749">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-rio.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Rio"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Rio</strong><span>Founder, G80 Cosmetics</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Can absolutely vouch for these guys! We&rsquo;ve worked with Adalytical on our Google Ads and the level of <strong>knowledge, persistence and support</strong> has been incredible. They&rsquo;ve gone above and beyond for our account, especially navigating some very frustrating Google policy issues. Definitely worth having a chat with them if you&rsquo;re running ecommerce ads.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/kylie.webp`} alt="" width="38" height="38" /></span><div><strong>Kylie Alexander</strong><span>CEO, Health Heiress</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Quickly grasped our unique challenges and FMCG space to <strong>deliver an effective Google and YouTube Ads strategy</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/abdul.webp`} alt="" width="38" height="38" /></span><div><strong>Abdul</strong><span>Founder, Pinkish Pods</span></div></figcaption>
      </figure>
      </div>
      <div className="rvw-col">
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>We saw a <strong>better ROAS straight away</strong> and helped us expand into other markets! Always have the answers and strats for Google Ads.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/ariana.webp`} alt="" width="38" height="38" /></span><div><strong>Ariana</strong><span>Founder, Aaria London</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1170457933">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-meryl.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Meryl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Meryl</strong><span>Co-founder, Hedonist</span></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>The team&rsquo;s <strong>ex-Google brainpower</strong> unlocked heaps of extra insights and fast-tracked support, but more importantly, <strong>helped us hit our biggest Q4</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/matthew.webp`} alt="" width="38" height="38" /></span><div><strong>Matthew</strong><span>CEO, Personalised Favours</span></div></figcaption>
      </figure>
      <figure className="rvw-card">
        <span className="rvw-quote" aria-hidden="true">&ldquo;</span>
        <blockquote>Adalytical helped us with segmenting our audience which changed how we ran our campaigns and <strong>brought in a wave of new customers</strong>.</blockquote>
        <figcaption><span className="rvw-av"><img src={`${BASE}/images/reviews/rio.webp`} alt="" width="38" height="38" /></span><div><strong>Rio</strong><span>Founder, G80 Cosmetics</span></div></figcaption>
      </figure>
      <figure className="rvw-vid" data-vimeo="1170457963">
        <img className="rvw-thumb" src={`${BASE}/images/reviews/vid-ariana.webp`} alt="" />
        <span className="rvw-badge">Video</span>
        <button className="rvw-play" type="button" aria-label="Play video review from Ariana"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
        <figcaption><strong>Ariana</strong><span>Founder, Aaria London</span></figcaption>
      </figure>
      </div>
    </div>
  </div>
</section>

{/* ============ CASE STUDIES (real: adalytical.io + freeaudit.adalytical.io) ============ */}
<section className="sec sec-cream rvsec bk-sec" id="results">
  <div className="ctr">
    <div className="bk-head rv vsl-center">
      <span className="sec-tag">Case studies</span>
      <h2>Real results <span className="dim">for real brands.</span></h2>
    </div>
    <div className="cs2-grid rv">
      <article className="cs2">
        <div className="cs2-img"><img src={`${BASE}/images/case-redlight.webp`} alt="Redlight Innovation" style={{ objectPosition: "50% 30%" }} /><span className="cs2-time">~90 days</span></div>
        <div className="cs2-body">
          <span className="cs2-tag">Redlight Innovation &middot; Red light therapy</span>
          <h3 className="cs2-result">ROAS from ~2.0 to 4+</h3>
          <dl className="cs2-story">
            <div><dt>The problem</dt><dd>A generalist agency left ROAS at ~1.5–2.0 and monthly revenue sliding from £17–20k to ~£11–12k. Scaling past £100/day made conversion rates collapse.</dd></div>
            <div><dt>What we did</dt><dd>Rebuilt Shopping &amp; Performance Max with strict intent control and a tiered negative keyword framework, sharpened the messaging, and used pricing as a lever to scale.</dd></div>
          </dl>
          <div className="cs2-stats"><div><b>4+</b><span>ROAS</span></div><div><b>£53k</b><span>Monthly revenue</span></div><div><b>+115%</b><span>Net profit</span></div></div>
        </div>
      </article>
      <article className="cs2">
        <div className="cs2-img"><img src={`${BASE}/images/case-watch-factory.webp`} alt="The Watch Factory" /><span className="cs2-time">12 months</span></div>
        <div className="cs2-body">
          <span className="cs2-tag">The Watch Factory &middot; Watches</span>
          <h3 className="cs2-result">+46% revenue</h3>
          <dl className="cs2-story">
            <div><dt>The problem</dt><dd>A messy account with broad targeting, thousands of irrelevant search terms and branded traffic doing most of the work, so it couldn&rsquo;t scale with confidence.</dd></div>
            <div><dt>What we did</dt><dd>Split brand and non-brand, removed 10,000+ irrelevant search terms, rebuilt Shopping and conversion tracking, and segmented campaigns by product and brand.</dd></div>
          </dl>
          <div className="cs2-stats"><div><b>+46%</b><span>Revenue</span></div><div><b>+2,966%</b><span>New-customer sales</span></div><div><b>-12%</b><span>Cost per conversion</span></div></div>
        </div>
      </article>
      <article className="cs2">
        <div className="cs2-img"><img src={`${BASE}/images/case-booze-barrels.webp`} alt="Booze &amp; Barrels" /><span className="cs2-time">12 months</span></div>
        <div className="cs2-body">
          <span className="cs2-tag">Booze &amp; Barrels &middot; Decanters &amp; gifts</span>
          <h3 className="cs2-result">$16K to $68K a month</h3>
          <dl className="cs2-story">
            <div><dt>The problem</dt><dd>80% of budget sat in Performance Max Shopping with little visibility or control, nothing pushed their best sellers, and click-through rates were under 5%.</dd></div>
            <div><dt>What we did</dt><dd>Segmented Search and Shopping by product, rewrote the feed and every ad, and launched dedicated gifting and seasonal campaigns.</dd></div>
          </dl>
          <div className="cs2-stats"><div><b>+329%</b><span>Revenue</span></div><div><b>+37.4%</b><span>Non-brand ROAS</span></div><div><b>+60%</b><span>Search CTR</span></div></div>
        </div>
      </article>
      <article className="cs2">
        <div className="cs2-img"><img src={`${BASE}/images/case-bys.webp`} alt="BeforeYouSpeak Coffee" /><span className="cs2-time">6 months</span></div>
        <div className="cs2-body">
          <span className="cs2-tag">BeforeYouSpeak Coffee &middot; Functional coffee</span>
          <h3 className="cs2-result">+65% ROAS while scaling spend</h3>
          <dl className="cs2-story">
            <div><dt>The problem</dt><dd>Double-counted conversions were inflating ROAS, and Performance Max blurred branded and non-branded traffic, so true performance was impossible to read.</dd></div>
            <div><dt>What we did</dt><dd>Fixed tracking and conversion accuracy, split product lines into their own campaigns, and cut wasted app placements.</dd></div>
          </dl>
          <div className="cs2-stats"><div><b>+65%</b><span>ROAS</span></div><div><b>+144%</b><span>Daily ad spend</span></div><div><b>+64%</b><span>Trackable LTV revenue</span></div></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* ============ THE 4-STEP SYSTEM: the audit covers steps 1 and 2 (from the VSL) ============ */}
<section className="sec sec-cream rvsec bk-sec">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">Our 4-Step Search to Scale System</span>
      <h2>Your free audit covers <span className="dim">the first two steps.</span></h2>
      <p>The same system we&rsquo;ve implemented across 200+ e-commerce accounts. You&rsquo;ll see the priorities before deciding whether to work together.</p>
    </div>
    <ol className="fa-system rv">
      <li className="on"><span>01 &middot; In your audit</span><b>Positioning</b><p>Which products are worth pushing, and how they&rsquo;ll appear on Google against your competitors.</p></li>
      <li className="on"><span>02 &middot; In your audit</span><b>Audit the account</b><p>Product and campaign performance, search terms, brand vs non-brand, bidding, budgets, tracking and Merchant Center.</p></li>
      <li><span>03</span><b>Rebuild the core campaigns</b><p>Core non-brand Search and Shopping, rebuilt from what the first two steps uncover.</p></li>
      <li><span>04</span><b>Scale beyond search</b><p>Once the core is working: YouTube, Demand Gen and new landing pages to reach colder traffic.</p></li>
    </ol>
  </div>
</section>

{/* ============ HOW IT WORKS + WHO IT'S FOR ============ */}
<section className="sec sec-cream rvsec bk-sec fa-tight">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">How it works</span>
      <h2>From booking to <span className="dim">actionable audit.</span></h2>
    </div>
    <ol className="fa-steps rv">
      <li><b>Book your audit</b><p>Enter your details, then choose a time for your free audit call.</p></li>
      <li><b>Give us view-only access</b><p>We review your Google Ads account, tracking and Merchant Center before the call.</p></li>
      <li><b>Get your audit</b><p>We walk you through exactly what we&rsquo;d fix, cut and scale before Black Friday.</p></li>
    </ol>
    <div className="bk-fit rv">
      <div className="bk-fit-yes"><b>This audit is for you if</b><ul>
        <li>You&rsquo;re an established e-commerce brand already investing in Google Ads</li>
        <li>Performance has plateaued</li>
        <li>You want to scale into Black Friday without destroying ROAS</li>
        <li>You&rsquo;re unsure whether your agency or internal team is leaving money on the table</li>
      </ul></div>
      <div className="bk-fit-no"><b>Probably not a fit if</b><ul>
        <li>You&rsquo;re looking for free Google Ads setup</li>
        <li>You have no budget to invest in growth</li>
        <li>You&rsquo;re only looking for generic advice</li>
      </ul></div>
    </div>
  </div>
</section>

{/* ============ BOOKING: details form, then the TidyCal calendar ============ */}
{/* Step 1 posts the details to the funnel dashboard (a "New opportunity" card + Slack alert) and fires the pixel's
    Lead event. Step 2 swaps the card for the TidyCal embed, pre-filled with their name and email. */}
<section className="gpb" id="book">
  <div className="ctr gpb-grid">
    <div className="gpb-left">
      <span className="gpb-tag">Meet the founders</span>
      <h2>Your account will be reviewed by two former Google Ads strategists.</h2>
      <p>We&rsquo;re Jackson Sharp and Jackson Wallace, former Google Ads experts who worked at Google before starting Adalytical. We built Adalytical to give ambitious brands a higher standard of Google Ads strategy.</p>
      <div className="gpb-founder"><img src={`${BASE}/images/jackson-sharp.webp`} alt="" width="64" height="64" /><div><strong>Jackson Sharp</strong><span>Former Google Ads Strategist</span></div></div>
      <div className="gpb-founder"><img src={`${BASE}/images/jackson-wallace.webp`} alt="" width="64" height="64" /><div><strong>Jackson Wallace</strong><span>Former Google Ads Strategist</span></div></div>
    </div>
    <div className="gpb-card">
      <div id="gpb-step1">
        <span className="gpb-pill"><i aria-hidden="true"></i>Free audit. No obligation.</span>
        <h3 id="gpb-title">Book Your Free Black Friday Audit</h3>
        <p className="gpb-sub">Enter your details, then choose a time for your audit call.</p>
        <form id="gpb-form" noValidate aria-labelledby="gpb-title">
          <div className="gpb-row">
          <label>Full Name<input name="name" autoComplete="name" placeholder="John Doe" required /></label>
          <label>Work Email<input name="email" type="email" autoComplete="email" placeholder="john@company.com" required /></label>
          </div>
          <div className="gpb-row">
          <label>Phone Number
            <span className="gpb-phone">
              <select name="cc" aria-label="Country code" defaultValue="+61">
                <option value="+61">🇦🇺 +61</option><option value="+64">🇳🇿 +64</option><option value="+44">🇬🇧 +44</option><option value="+1">🇺🇸 +1</option>
              </select>
              <input name="phone" type="tel" autoComplete="tel-national" placeholder="412 345 678" />
            </span>
          </label>
          <label>Website URL<input name="website" autoComplete="url" placeholder="yourstore.com" /></label>
          </div>
          <input name="company_fax" tabIndex={-1} autoComplete="off" className="gpb-hp" aria-hidden="true" />
          <p className="gpb-err" id="gpb-err" role="alert"></p>
          <button type="submit" className="gpb-btn">Get My Free Audit <span aria-hidden="true">&rarr;</span></button>
          <p className="gpb-legal">By clicking, you agree to our Terms &amp; Privacy Policy. We&rsquo;ll send your booking details and occasional relevant follow-up.</p>
        </form>
      </div>
      <div id="gpb-step2" hidden>
        <span className="gpb-pill"><i aria-hidden="true"></i>Last step</span>
        <h3>Choose a time</h3>
        <p className="gpb-sub">Your details are saved. Pick a time for your audit call in the calendar.</p>
        <button type="button" className="gpb-btn" id="gpb-reopen">Choose a time <span aria-hidden="true">&rarr;</span></button>
      </div>
    </div>
  </div>
  {/* TidyCal pop-up, opened after the form is submitted (and by "Choose a time" if they close it) */}
  <div className="gpb-modal" id="gpb-modal" hidden role="dialog" aria-modal="true" aria-labelledby="gpb-modal-title">
    <div className="gpb-modal-box">
      <div className="gpb-modal-head">
        <h3 id="gpb-modal-title">Choose a time for your audit call</h3>
        <button type="button" className="gpb-close" id="gpb-close" aria-label="Close">&times;</button>
      </div>
      <div className="gpb-modal-body"><div id="gpb-cal"></div></div>
      <p className="gpb-legal gpb-modal-foot">Calendar not showing? <a id="gpb-cal-link" href="https://tidycal.com/adalytical/growthplan" target="_blank" rel="noopener">Open it here</a></p>
    </div>
  </div>
</section>

{/* ============ FAQS (from freeaudit.adalytical.io, plus the video's "Growth Plan" wording) ============ */}
<section className="sec sec-cream rvsec bk-sec">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">FAQs</span>
      <h2>A few useful details.</h2>
    </div>
    <div className="bk-faq rv">
      <details><summary>Is the audit actually free?</summary><p>Yes. The audit and review call are free, with no obligation.</p></details>
      <details><summary>Why does it need to happen this week?</summary><p>Black Friday is Friday 27 November. Fixes need to be live by around 13 November so Google&rsquo;s bidding has time to learn before the sale. Changes made in sale week are too late.</p></details>
      <details><summary>Do you need access to my Google Ads account?</summary><p>To complete a meaningful audit, we need view-only access to your Google Ads account and, where relevant, Merchant Center.</p></details>
      <details><summary>Can you make changes to my account?</summary><p>No. Audit access is view-only. We cannot make changes unless this is separately agreed with you.</p></details>
      <details><summary>Will this just be a sales call?</summary><p>No. We use the call to walk through the issues and opportunities found in your account, then you can decide what happens next.</p></details>
      <details><summary>The video mentions a Growth Plan. Is that different?</summary><p>No, it&rsquo;s the same thing. Your free audit covers the first two steps of our system, and you leave with a clear plan of what to fix, cut and scale.</p></details>
    </div>
  </div>
</section>

<footer className="gp-foot"><div className="ctr"><span>&copy; 2026 adalytical. All rights reserved.</span><span>Terms and Conditions &middot; Privacy Policy</span></div></footer>

{/* sticky CTA on mobile only */}
<a href="#book" className="vsl-sticky">Get My Free Audit</a>


{/* ============ META PIXEL ============ */}
{/* PageView on load; ViewContent when the VSL is played; custom GrowthPlanClick on any CTA.
    Lead (form submitted) fires from the booking form script below; Schedule fires on /growth-plan/booked. */}
<Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
document.addEventListener('click', function (e) {
  var t = e.target.closest && e.target;
  if (!t) return;
  if (t.closest('.vsl-panel') && !window.__vslPlayed) { window.__vslPlayed = true; fbq('track', 'ViewContent', { content_name: 'Ecom VSL' }); }
  var a = t.closest('a[href="#book"]');
  if (a) fbq('trackCustom', 'GrowthPlanClick');
});
`}</Script>
<noscript><img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>

{/* ============ BOOKING FORM ============ */}
<Script id="gpb-form-js" strategy="afterInteractive">{`
(function () {
  var form = document.getElementById('gpb-form'); if (!form) return;
  var err = document.getElementById('gpb-err');
  var qs = new URLSearchParams(window.location.search);
  function track(ev, data) { try { window.fbq && fbq('track', ev, data || {}); } catch (e) {} }
  var modal = document.getElementById('gpb-modal'), lastFocus = null;
  function openModal() { lastFocus = document.activeElement; modal.hidden = false; document.documentElement.classList.add('gpb-lock'); document.getElementById('gpb-close').focus(); }
  function closeModal() { modal.hidden = true; document.documentElement.classList.remove('gpb-lock'); (document.getElementById('gpb-reopen') || lastFocus).focus(); }
  document.getElementById('gpb-close').addEventListener('click', closeModal);
  document.getElementById('gpb-reopen').addEventListener('click', openModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, name = f.name.value.trim(), email = f.email.value.trim();
    var digits = f.phone.value.replace(/[^0-9]/g, '').replace(/^0/, '');
    if (!name) { err.textContent = 'Please add your name.'; f.name.focus(); return; }
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) { err.textContent = 'Please add a valid email.'; f.email.focus(); return; }
    err.textContent = '';
    var body = { name: name, email: email, phone: digits ? f.cc.value + ' ' + digits : '', website: f.website.value.trim(), company_fax: f.company_fax.value };
    ['utm_source', 'utm_campaign', 'utm_content', 'fbclid'].forEach(function (k) { if (qs.get(k)) body[k] = qs.get(k); });
    // save the lead without making them wait. Sent as text/plain so it's a "simple" cross-site request with no CORS
    // preflight: mobile and in-app browsers silently dropped the earlier JSON + keepalive version. Beacon as a backup.
    var payload = JSON.stringify(body);
    try {
      fetch('${LEAD_API}', { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload })
        .catch(function () { try { navigator.sendBeacon('${LEAD_API}', new Blob([payload], { type: 'text/plain' })); } catch (y) {} });
    } catch (x) { try { navigator.sendBeacon('${LEAD_API}', new Blob([payload], { type: 'text/plain' })); } catch (y) {} }
    track('Lead', { content_name: 'Free audit form' });
    // step 2: the card shows "Choose a time" and the TidyCal pop-up opens, pre-filled
    var cal = document.getElementById('gpb-cal');
    cal.innerHTML = '';
    var el = document.createElement('div');
    el.className = 'tidycal-embed'; el.setAttribute('data-path', '${TIDYCAL_PATH}');
    el.setAttribute('data-name', name); el.setAttribute('data-email', email);
    cal.appendChild(el);
    document.getElementById('gpb-cal-link').href = 'https://tidycal.com/${TIDYCAL_PATH}?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email);
    document.getElementById('gpb-step1').hidden = true;
    document.getElementById('gpb-step2').hidden = false;
    openModal();
    fitPhone();
    if (window.TidyCal) window.TidyCal.init(el);
    else { var sc = document.createElement('script'); sc.src = 'https://asset-tidycal.b-cdn.net/js/embed.js'; sc.async = true; document.body.appendChild(sc); }
  });
  // Phones: crop TidyCal down to the month calendar, shrink it to 88%, and when a date is tapped (TidyCal grows
  // to add the times below the calendar) scroll the pop-up so the times come into view.
  // Measured from TidyCal's phone layout (iframe narrower than ~570px): the month card starts 443.5px down and is
  // about 0.86 x width + 86px tall.
  var PHONE = window.matchMedia('(max-width: 500px)'), SCALE = 0.88, CROP = 435.5;
  function fitPhone() {
    var cal = document.getElementById('gpb-cal'), body = document.querySelector('.gpb-modal-body');
    if (!PHONE.matches) return;
    cal.style.width = (100 / SCALE) + '%';
    cal.style.transform = 'scale(' + SCALE + ')';
    cal.style.transformOrigin = 'top left';
    cal.style.marginTop = (-CROP * SCALE) + 'px';
    var armed = false, lastH = 0;
    setTimeout(function () { armed = true; }, 3000);
    var wait = setInterval(function () {
      var f = cal.querySelector('iframe'); if (!f) return;
      clearInterval(wait);
      var sync = function () {
        var h = f.offsetHeight;
        cal.style.marginBottom = (-h * (1 - SCALE)) + 'px';
        if (armed && lastH && h - lastH > 80) {
          var calH = 0.86 * f.offsetWidth + 86;
          var timesTop = (calH + 16) * SCALE;
          // after TidyCal's own focus jump (which hides the calendar), settle on the calendar's last rows + the times
          setTimeout(function () { body.scrollTo({ top: Math.max(0, timesTop - body.clientHeight * 0.3), behavior: 'smooth' }); }, 450);
        }
        lastH = h;
      };
      sync();
      new MutationObserver(sync).observe(f, { attributes: true, attributeFilter: ['style'] });
    }, 100);
  }
  // hide the mobile sticky CTA while the booking section is on screen, so it never covers the form or calendar
  var sticky = document.querySelector('.vsl-sticky');
  if (sticky && 'IntersectionObserver' in window) new IntersectionObserver(function (es) { sticky.style.visibility = es[0].isIntersecting ? 'hidden' : ''; }).observe(document.getElementById('book'));
  // When a time is picked, TidyCal draws its booking form (call details, name/email, questions, "Book event") at the
  // very top of its frame and asks the page to scroll there ("scrollToOffset"). That area is the part we crop off,
  // so drop the crop and scroll the pop-up back to the top.
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://tidycal.com' || typeof e.data !== 'string' || e.data.indexOf(':scrollToOffset') === -1) return;
    var c = document.getElementById('gpb-cal'), b = document.querySelector('.gpb-modal-body');
    c.classList.add('gpb-uncrop'); c.style.marginTop = '0px';
    b.scrollTo({ top: 0 });
  });
  // Schedule (a real booking) fires on /growth-plan/booked, where TidyCal redirects after booking. It used to fire
  // here from TidyCal's frame messages, but those matched non-booking events too and reported false bookings.
})();
`}</Script>
      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
