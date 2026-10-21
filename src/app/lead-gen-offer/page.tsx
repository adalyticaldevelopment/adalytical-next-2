// Adalytical x Rankify lead gen offer for paid traffic (growth.adalytical.io/lead-gen-offer). Rebuilt from
// freeaudit.adalytical.io/lead-gen-offer: same results and reviews, in the
// growth.adalytical.io look (fa-/gpb- classes from the /growth-plan page).
// Offer (Jackson, 2026-10-19): Rankify builds a custom landing page free when the business signs up for Adalytical
// Google Ads management. Adalytical pays Rankify for the build; that isn't mentioned on the page.
// Proof is copied word for word from the original page; don't add or reword any.
// The original's "Only 4 of 10 September builds remaining" banner is left out because it's out of date.
import type { Metadata } from "next";
import Script from "next/script";
import { AirVent, ArrowRight, Calculator, HardHat, House, Landmark, Scale, Smile, SprayCan, Star, Stethoscope, Trees, Wrench, Zap } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Meta pixel: "Adalytical Main Pixel" (same as /growth-plan), in Adalytical NEW (act_921312640727906).
const META_PIXEL_ID = "1740160130622901";
// Booking: TidyCal "free strategy call" (Jackson, 2026-10-19), opened in the pop-up after the details form
const TIDYCAL_PATH = "adalytical/freestrategycall-1wr64y6";
// Booking form posts here first (funnel dashboard: a "Lead Gen Offer" card + Slack alert)
const LEAD_API = "https://funnel.adalytical.io/api/lead";

export const metadata: Metadata = {
  title: "Free Landing Page With Google Ads Management | Adalytical × Rankify",
  description: "A custom landing page built free for established service businesses that sign up for Google Ads management with Adalytical.",
  robots: { index: false, follow: false }, // paid-traffic page
};

const CASES = [
  { business: "Into Blinds", category: "Google Ads", img: "case-into-blinds.webp", headline: "38%", label: "lower CPL", cpl: ["$80.95", "Aug 2025", "$50.20", "Aug 2026"], extra: ["435 → 1,149", "Monthly leads", "Aug 2025 → Aug 2026"] },
  { business: "ONQ", category: "Google Ads", img: "case-onq.webp", headline: "64%", label: "lower CPL", cpl: ["$189.64", "March 2026", "$69.03", "August 2026"] },
  { business: "Prime Group", category: "Google Ads", img: "case-prime-group.webp", headline: "From 0 to 31 leads/month", label: "In 60 days", cpl: ["$184.77", "First full month · Aug 2026", "$139.49", "Sep-to-date · as at 10 Sep 2026"] },
  { business: "Peninsula Heat Pumps", category: "Website results", img: "case-peninsula.webp", headline: "60%", label: "lower CPL", cpl: ["$87.12", "March", "$34.59", "August"], extra: ["5.6% → 14.6%", "Conversion rate", "March → August"] },
  { business: "Geelong Heat Pumps", category: "Website results", img: "case-geelong.webp", headline: "48%", label: "lower CPL", cpl: ["$57.19", "March", "$29.99", "August"], extra: ["4.6% → 12.7%", "Conversion rate", "March → August"] },
];

// Same order as the original page: Rankify and Adalytical reviews alternate, first 9 shown
type Review = { tag: "Rankify" | "Adalytical"; quote: string; name: string; role: string; photo?: string };
const REVIEWS: Review[] = [
  { tag: "Rankify", name: "Nick", role: "Owner, Prime Group", photo: "leadgen/rv-nick.webp", quote: "Rankify had my website live in 7 days, which I didn't think was possible. I had about 10 enquiries in the first fortnight. One of those turned into a job that covered the website with plenty of money left over." },
  { tag: "Adalytical", name: "Cam", role: "Director, Geelong Heat Pumps", photo: "reviews/cam.webp", quote: "Adalytical has been extremely helpful in getting us way more, and way cheaper leads. Super great to work with." },
  { tag: "Rankify", name: "Dominique Nurtsch", role: "Google Review", quote: "The Rankify team worked so fast and produced such a high quality website for us, very impressed and highly recommended to anyone needing web development or marketing!" },
  { tag: "Adalytical", name: "Sivan", role: "Founder, Bushdoof Lighting", photo: "reviews/sivan.webp", quote: "Adalytical helped us scale our Google spend by over 300%, all while keeping profitability front and centre." },
  { tag: "Rankify", name: "James Fabre", role: "Myoko Embodied", photo: "leadgen/rv-james-fabre.webp", quote: "Absolutely stoked with our website overhaul by Rankify. We just got it live and Tom was there for every question and every little fix that I desired, without hesitation. Great job, Highly recommend and will definitely use again!" },
  { tag: "Adalytical", name: "John", role: "Owner, Into Blinds", photo: "reviews/john.webp", quote: "Lead quality and volume is extremely important to us, and the team at Adalytical have helped us immensely with Google Ads to improve this (and smash our monthly targets)." },
  { tag: "Rankify", name: "Ben Cavallo", role: "Google Review", quote: "Rankify did an awesome job on my website. The design looks professional, and the process was super smooth from start to finish. Great communication and attention to detail. Highly recommend their services." },
  { tag: "Adalytical", name: "Ariana", role: "Founder, Aaria London", photo: "reviews/ariana.webp", quote: "We saw a better ROAS straight away and helped us expand into other markets! Always have the answers and strats for Google Ads." },
  { tag: "Rankify", name: "MJB Electrical Contractors", role: "Electrical Contractor", quote: "Really happy with the website Rankify built for my electrical business. They made the whole process easy, quick, and professional. The site looks great and already helps bring in new leads. Highly recommend!" },
  { tag: "Adalytical", name: "Myles", role: "CEO, ONQ", photo: "reviews/myles.webp", quote: "We were finding it difficult to get new high-value leads using other channels, and decided to work with Adalytical. Immediately saw incredible results." },
  { tag: "Rankify", name: "Maggie Belford", role: "Google Review", quote: "I recently had my website built by Rankify and I couldn’t be happier with the outcome. From start to finish, the process was seamless, professional, and efficient. Tom took the time to really understand my business and brand, and turned that vision into a clean and user-friendly site. Highly recommend Rankify for anyone needing a standout website that reflects their business perfectly." },
  { tag: "Adalytical", name: "Matthew", role: "CEO, Personalised Favours", photo: "reviews/matthew.webp", quote: "The team's ex-Google brainpower unlocked heaps of extra insights and fast-tracked support, but more importantly, helped us hit our biggest Q4." },
  { tag: "Rankify", name: "Veith Smith", role: "Google Review", quote: "Had a quick call and Tom helped me and set all up for my homepage! It has increased my views and engagement on my page as well! Thank you so much again!" },
  { tag: "Adalytical", name: "Kelly", role: "Co-founder, Evo Solar", quote: "They helped us reduce cost per lead significantly! Getting lots of good leads coming through and for way less. Very happy, would recommend!" },
  { tag: "Rankify", name: "Natalina Hoffman", role: "The Sculpted Look", photo: "leadgen/rv-natalina.webp", quote: "Thomas was so helpful and patient. Helped with any issues I had and everything looks great. Very happy and highly recommend." },
  { tag: "Adalytical", name: "Abdul", role: "Founder, Pinkish Pods", photo: "reviews/abdul.webp", quote: "Quickly grasped our unique challenges and FMCG space to deliver an effective Google and YouTube Ads strategy." },
  { tag: "Rankify", name: "Marlen Wolff", role: "Wolff Studios", photo: "leadgen/rv-marlen.webp", quote: "Great experience working with Thomas. He instantly understood what I was after, even with some custom Shopify tweaks, and executed everything with precision and speed. Professional, responsive, and super skilled. I couldn’t be happier with the result. I’ll keep working with him in future projects, highly recommend." },
  { tag: "Adalytical", name: "Rio", role: "Founder, G80 Cosmetics", photo: "reviews/rio.webp", quote: "Adalytical helped us with segmenting our audience which changed how we ran our campaigns and brought in a wave of new customers." },
  { tag: "Rankify", name: "Jacob Gregory", role: "Roofing", quote: "Was great dealing with Tom for our roofing companies website development and SEO. Tom was upfront with costs, and provided updates along each step, wrapped with the outcome. Highly recommend!" },
  { tag: "Adalytical", name: "Jay", role: "Head of Marketing, The Watch Factory", photo: "reviews/jay.webp", quote: "Adalytical helped us with our biggest Q4 ever! Revenue was +33% and ROAS +25% YOY. Already seeing massive revenue and ROAS gains for Q1 and Q2." },
  { tag: "Rankify", name: "Gabriella Smith", role: "Hawker Studios", photo: "leadgen/rv-gabriella.webp", quote: "The Rankify team was incredibly fast and delivered a top-quality website for us. We're really impressed and would highly recommend them to anyone looking for web development or marketing." },
  { tag: "Adalytical", name: "Rachel", role: "Founder, Blume", photo: "reviews/rachel.webp", quote: "Helped us compete against the giants in the extremely competitive and crowded drinks industry. Highly recommend!" },
  { tag: "Adalytical", name: "Rob", role: "Marketing Director, Beverage Food Group", photo: "reviews/rob.webp", quote: "Jackson's expertise in Google Ads is unmatched. He and the team helped us overcome multiple very niche Google Ads challenges." },
  { tag: "Adalytical", name: "Kylie Alexander", role: "CEO, Health Heiress", photo: "reviews/kylie.webp", quote: "Can absolutely vouch for these guys! We’ve worked with Adalytical on our Google Ads and the level of knowledge, persistence and support has been incredible. They’ve gone above and beyond for our account, especially navigating some very frustrating Google policy issues. Definitely worth having a chat with them if you’re running ecommerce ads. 🙌" },
];

const LOGOS: [string, string][] = [
  ["logo-prime-group.png", "Prime Group Building"], ["logo-cavstruct.png", "Cavstruct Projects"], ["logo-mjb-electrical.png", "MJB Electrical Group"],
  ["logo-tintek.png", "Tintek Roofing & Cladding"], ["logo-evosolar.png", "Evosolar"], ["logo-ottilie-studios.png", "Ottilie Studios"],
  ["logo-hawker-studio.png", "Hawker Studio"], ["logo-into-blinds.png", "Into Blinds"], ["logo-onq.png", "ONQ Digital"],
];

// Rankify mobile site screenshots, in the original's three scrolling columns
const PORTFOLIO = [["01", "04", "07", "10", "13"], ["02", "05", "08", "11", "14"], ["03", "06", "09", "12", "15"]];

const INDUSTRIES = [
  ["Trades & Construction", HardHat], ["Plumbing", Wrench], ["Electricians", Zap], ["HVAC & Air-con", AirVent],
  ["Cleaning Services", SprayCan], ["Landscaping", Trees], ["Accountants", Calculator], ["Lawyers & Legal", Scale],
  ["Dentists", Smile], ["Medical & Allied Health", Stethoscope], ["Real Estate", House], ["Finance & Insurance", Landmark],
] as const;

const FAQS = [
  ["Is the landing page really free?", "Yes. When you sign up for Google Ads management with Adalytical, Rankify builds your custom landing page at no cost to you. The free landing page comes with Google Ads management; it is not offered on its own."],
  ["What will I need to pay for?", "Your Google Ads management fee, and your Google Ads media spend, which is paid to Google and is separate from agency work. The management scope and fees are agreed with you before proceeding. We do not publish a one-size-fits-all price because the right scope depends on your service, market and goals."],
  ["Do I need an existing website or Google Ads account?", "No. This offer includes a new landing page and Google Ads account or campaign setup where needed. If you already have either, we will discuss how they fit the proposed work."],
  ["Who is this designed for?", "Established, high-value service businesses looking for more enquiries and booked jobs: dental practices, law firms, builders, trades and similar service providers. It is not designed for ecommerce stores."],
  ["Are the results guaranteed?", "No. The results shown are historical examples from supplied reports and website proof. Outcomes vary by offer, market, budget, sales process and many other factors."],
];

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("");

const QuoteMark = () => (
  <svg className="lgo-rv-mark" viewBox="0 0 28 22" aria-hidden="true"><path d="M0 22V13.8C0 5.9 3.7 1.3 10.8 0l.8 3.7C7.7 4.9 5.7 7.3 5.6 10.8h5.9V22H0Zm16.5 0V13.8C16.5 5.9 20.2 1.3 27.3 0l.7 3.7c-3.8 1.2-5.8 3.6-6 7.1H28V22H16.5Z" /></svg>
);

// even grid, 3 across (as on the original page); every 7th card, starting with the 3rd, gets the cream tint
function ReviewWall({ items, offset = 0 }: { items: Review[]; offset?: number }) {
  return (
    <div className="lgo-rv-grid">
      {items.map((r, i) => (
        <article className={`lgo-rv${(i + offset) % 7 === 2 ? " lgo-rv-warm" : ""}`} key={r.name}>
          <QuoteMark />
          <p className="lgo-rv-tag">{r.tag}</p>
          <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
          <footer>
            <span className="lgo-rv-av">{r.photo ? <img src={`${BASE}/images/${r.photo}`} alt="" width="34" height="34" /> : initials(r.name)}</span>
            <span><strong>{r.name}</strong><small>{r.role}</small></span>
          </footer>
        </article>
      ))}
    </div>
  );
}

const Cta = ({ children = "See If My Business Qualifies" }: { children?: string }) => (
  <a href="#book" className="fa-btn">{children} <ArrowRight size={17} aria-hidden="true" /></a>
);

export default function LeadGenOffer() {
  return (
    <>

{/* ============ HEADER: Adalytical x Rankify lockup, no navigation ============ */}
<header className="fa-top lgo-top"><div className="ctr">
  <span className="lgo-lockup">
    <img src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" />
    <span className="lgo-x" aria-label="In partnership with">&times;</span>
    <img className="lgo-rk" src={`${BASE}/images/leadgen/rankify-logo.svg`} alt="Rankify" />
  </span>
  <a href="#book" className="fa-top-cta lgo-top-cta">See If You Qualify</a>
</div></header>

{/* ============ HERO: copy left, Rankify mobile portfolio right ============ */}
<section className="fa-hero lgo-hero">
  <div className="ctr fa-hero-grid">
    <div className="fa-copy">
      <h1>Get a Custom Landing Page Built <em>Free When We Manage Your Google Ads.</em></h1>
      <p className="fa-lede">A conversion-focused landing page, Google Ads and tracking for established service businesses ready for more enquiries. <strong>The landing page costs you nothing.</strong></p>
      <div className="lgo-hero-actions">
        <Cta />
        <a href="#reviews" className="lgo-stars" aria-label="Read our 24+ 5 Star Reviews">
          <span aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={17} fill="currentColor" strokeWidth={1.5} />)}</span>
          <span><strong>24+</strong> 5 Star Reviews</span>
        </a>
      </div>
    </div>
    <div className="lgo-port" aria-label="Rankify landing page portfolio shown on mobile">
      {PORTFOLIO.map((col, c) => (
        <div className="lgo-port-col" key={c}>
          {[0, 1].map((dup) => (
            <div className="lgo-port-group" key={dup} aria-hidden={dup === 1 ? true : undefined}>
              {col.map((n, i) => <img key={n} src={`${BASE}/images/leadgen/portfolio/${n}.webp`} alt={dup === 0 && c === 0 && i === 0 ? "Rankify mobile website portfolio" : ""} width="420" height="747" />)}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

{/* ============ CLIENT LOGOS (scrolling) ============ */}
<section className="lgo-logos" aria-label="Previous client work">
  <div className="lgo-logos-track">
    {[0, 1].map((dup) => (
      <div className="lgo-logos-group" key={dup} aria-hidden={dup === 1 ? true : undefined}>
        {LOGOS.map(([f, name]) => <img key={f} src={`${BASE}/images/leadgen/${f}`} alt={dup === 0 ? name : ""} />)}
      </div>
    ))}
  </div>
</section>

{/* ============ RESULTS ============ */}
<section className="sec sec-cream rvsec bk-sec" id="results">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">Google Ads &amp; website results</span>
      <h2>Real businesses. <span className="dim">Real lead-generation results.</span></h2>
    </div>
    <div className="lgo-cases rv">
      {CASES.map((c) => (
        <article className={`lgo-case${c.headline.length > 4 ? " lgo-case-long" : ""}`} key={c.business}>
          <div className="lgo-case-img">
            <img src={`${BASE}/images/leadgen/${c.img}`} alt="" loading="lazy" />
            <div className="lgo-case-name"><span>{c.category}</span><strong>{c.business}</strong></div>
          </div>
          <div className="lgo-case-body">
            <span className="lgo-case-kicker">{c.category}</span>
            <div className="lgo-case-head"><b>{c.headline}</b><span>{c.label}</span></div>
            <div className="lgo-case-cpl">
              <span className="lgo-case-lbl">Cost per lead</span>
              <div className="lgo-cpl">
                <div><b>{c.cpl[0]}</b><small>{c.cpl[1]}</small></div>
                <div className="lgo-cpl-new"><i aria-hidden="true">&rarr;</i><div><b>{c.cpl[2]}</b><small>{c.cpl[3]}</small></div></div>
              </div>
            </div>
            {c.extra && <div className="lgo-case-extra"><p><b>{c.extra[0]}</b><span>{c.extra[1]}</span></p><small>{c.extra[2]}</small></div>}
          </div>
        </article>
      ))}
    </div>
    <div className="fa-cta-row"><Cta /></div>
  </div>
</section>

{/* ============ CLIENT REVIEWS (Rankify + Adalytical) ============ */}
<section className="sec sec-cream rvsec bk-sec" id="reviews">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">Client reviews</span>
      <h2>Words from the people <span className="dim">behind the work.</span></h2>
    </div>
    <div className="rv"><ReviewWall items={REVIEWS.slice(0, 9)} /></div>
    <details className="rvw-more">
      <summary><span className="rvw-more-open">Show all {REVIEWS.length} reviews</span><span className="rvw-more-close">Show less</span></summary>
      <ReviewWall items={REVIEWS.slice(9)} offset={9} />
    </details>
    <div className="fa-cta-row"><Cta /></div>
  </div>
</section>

{/* ============ THE PEOPLE BEHIND THE WORK ============ */}
<section className="fa-receive lgo-team">
  <div className="ctr">
    <div className="lgo-team-head">
      <span className="fa-receive-tag">The people behind the work</span>
      <h2>Google Ads expertise. Websites that convert.</h2>
      <p>Two ex-Googlers and Tom at Rankify, helping service businesses grow beyond referrals.</p>
    </div>
    <div className="lgo-team-grid">
      <figure><img src={`${BASE}/images/jackson-sharp.webp`} alt="Jackson Sharp" /><figcaption><img className="lgo-brand" src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /><strong>Jackson Sharp</strong><span>Former Google Ads Strategist</span></figcaption></figure>
      <figure><img src={`${BASE}/images/jackson-wallace.webp`} alt="Jackson Wallace" /><figcaption><img className="lgo-brand" src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /><strong>Jackson Wallace</strong><span>Former Google Ads Strategist</span></figcaption></figure>
      <figure><img src={`${BASE}/images/leadgen/tom-rankify.png`} alt="Tom from Rankify" /><figcaption><img className="lgo-brand lgo-rk" src={`${BASE}/images/leadgen/rankify-logo.svg`} alt="Rankify" /><strong>Tom</strong><span>Conversion-focused web designer</span></figcaption></figure>
    </div>
  </div>
</section>

{/* ============ BOOKING: details form (same style as /growth-plan), then the TidyCal calendar in a pop-up ============ */}
{/* Step 1 posts the details to the funnel dashboard (a "Lead Gen Offer" card + Slack alert) and fires the pixel's
    LeadGenOfferLead event. Step 2 opens the TidyCal free strategy call calendar in a pop-up, pre-filled with their
    name and email. */}
<section className="gpb" id="book">
  <div className="ctr gpb-grid">
    <div className="gpb-left">
      <span className="gpb-tag">Adalytical &times; Rankify</span>
      <h2>Book your free strategy call.</h2>
      <p>Two ex-Googlers and Tom at Rankify, helping service businesses grow beyond referrals.</p>
      <div className="gpb-founder"><img src={`${BASE}/images/jackson-sharp.webp`} alt="" width="64" height="64" /><div><strong>Jackson Sharp</strong><span>Former Google Ads Strategist</span></div></div>
      <div className="gpb-founder"><img src={`${BASE}/images/jackson-wallace.webp`} alt="" width="64" height="64" /><div><strong>Jackson Wallace</strong><span>Former Google Ads Strategist</span></div></div>
      <div className="gpb-founder"><img src={`${BASE}/images/leadgen/tom-rankify.png`} alt="" width="64" height="64" /><div><strong>Tom</strong><span>Conversion-focused web designer, Rankify</span></div></div>
    </div>
    {/* two-step card: name + email first (saved as a lead straight away), then phone + website, then TidyCal */}
    <div className="gpb-card lgf">
      <h3 id="gpb-title" className="lgf-title">Get your free landing page:</h3>
      <div className="lgf-tabs" aria-hidden="true"><span id="lgf-tab1" className="on">Step 1</span><span id="lgf-tab2">Final step</span><i id="lgf-bar"></i></div>
      <form id="lgf-form1" noValidate aria-labelledby="gpb-title">
        <input name="name" id="lgf-name" autoComplete="name" placeholder="Full Name..." aria-label="Full name" required />
        <input name="email" id="lgf-email" type="email" autoComplete="email" placeholder="Email Address..." aria-label="Email address" required />
        <input name="company_fax" tabIndex={-1} autoComplete="off" className="gpb-hp" aria-hidden="true" />
        <p className="gpb-err" id="lgf-err1" role="alert"></p>
        <button type="submit" className="lgf-btn">Next Step</button>
        <p className="lgf-micro">Free landing page when we manage your Google Ads.</p>
      </form>
      <form id="lgf-form2" noValidate hidden aria-labelledby="gpb-title">
        <span className="lgf-phone">
          <select name="cc" id="lgf-cc" aria-label="Country code" defaultValue="+61">
            <option value="+61">🇦🇺 +61</option><option value="+64">🇳🇿 +64</option><option value="+44">🇬🇧 +44</option><option value="+1">🇺🇸 +1</option>
          </select>
          <input name="phone" id="lgf-phone" type="tel" autoComplete="tel-national" placeholder="Phone Number..." aria-label="Phone number" />
        </span>
        <input name="website" id="lgf-website" autoComplete="url" placeholder="Website URL..." aria-label="Website URL" />
        <p className="gpb-err" id="lgf-err2" role="alert"></p>
        <button type="submit" className="lgf-btn">See If I Qualify</button>
        <p className="lgf-micro">Then pick a time for your free strategy call.</p>
      </form>
      <div id="gpb-step2" hidden>
        <p className="lgf-micro lgf-done">Your details are saved. Pick a time for your strategy call in the calendar.</p>
        <button type="button" className="lgf-btn" id="gpb-reopen">Choose a Time</button>
      </div>
    </div>
  </div>
  {/* TidyCal pop-up, opened after the form is submitted (and by "Choose a time" if they close it) */}
  <div className="gpb-modal" id="gpb-modal" hidden role="dialog" aria-modal="true" aria-labelledby="gpb-modal-title">
    <div className="gpb-modal-box">
      <div className="gpb-modal-head">
        <h3 id="gpb-modal-title">Choose a time for your strategy call</h3>
        <button type="button" className="gpb-close" id="gpb-close" aria-label="Close">&times;</button>
      </div>
      <div className="gpb-modal-body"><div id="gpb-cal"></div></div>
      <p className="gpb-legal gpb-modal-foot">Calendar not showing? <a id="gpb-cal-link" href={`https://tidycal.com/${TIDYCAL_PATH}`} target="_blank" rel="noopener">Open it here</a></p>
    </div>
  </div>
</section>

{/* ============ WHO WE HELP ============ */}
<section className="sec sec-cream rvsec bk-sec">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">Who we help</span>
      <h2>Built for the businesses <span className="dim">that live on leads.</span></h2>
    </div>
    <ul className="lgo-inds rv">
      {INDUSTRIES.map(([name, Icon]) => <li key={name}><Icon size={19} strokeWidth={1.6} aria-hidden="true" /><span>{name}</span></li>)}
    </ul>
    <div className="fa-cta-row"><Cta /></div>
  </div>
</section>

{/* ============ FAQS ============ */}
<section className="sec sec-cream rvsec bk-sec fa-tight" id="faqs">
  <div className="ctr">
    <div className="bk-head rv">
      <span className="sec-tag">FAQs</span>
      <h2>The important details, <span className="dim">plainly stated.</span></h2>
    </div>
    <div className="bk-faq rv">
      {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </div>
  </div>
</section>

{/* ============ FINAL CTA ============ */}
<section className="fa-hero lgo-final">
  <div className="ctr">
    <h2>See what a joined-up landing page and Google Ads setup could look like for your business.</h2>
    <p>Apply for a fit conversation with Adalytical and Rankify.</p>
    <Cta>See If You Qualify</Cta>
    <p className="fa-micro">Free landing page with Google Ads management <span>&bull;</span> No guaranteed outcomes</p>
  </div>
</section>

<footer className="gp-foot"><div className="ctr"><span>&copy; 2026 adalytical. All rights reserved.</span><span>Terms and Conditions &middot; Privacy Policy</span></div></footer>

{/* sticky CTA on mobile only */}
<a href="#book" className="vsl-sticky">See If You Qualify</a>

{/* ============ META PIXEL ============ */}
{/* PageView on load; custom LeadGenOfferClick on any CTA; custom LeadGenOfferLead when the form is sent (below).
    Campaigns run in Adalytical NEW (act_921312640727906). */}
<Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href="#book"]');
  if (a) fbq('trackCustom', 'LeadGenOfferClick');
});
`}</Script>
<noscript><img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>

{/* ============ BOOKING FORM (same flow as /growth-plan: details, then TidyCal) ============ */}
<Script id="gpb-form-js" strategy="afterInteractive">{`
(function () {
  var form = document.getElementById('lgf-form1'), form2 = document.getElementById('lgf-form2'); if (!form) return;
  var qs = new URLSearchParams(window.location.search);
  var modal = document.getElementById('gpb-modal'), lastFocus = null;
  function openModal() { lastFocus = document.activeElement; modal.hidden = false; document.documentElement.classList.add('gpb-lock'); document.getElementById('gpb-close').focus(); }
  function closeModal() { modal.hidden = true; document.documentElement.classList.remove('gpb-lock'); (document.getElementById('gpb-reopen') || lastFocus).focus(); }
  document.getElementById('gpb-close').addEventListener('click', closeModal);
  document.getElementById('gpb-reopen').addEventListener('click', openModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  var name = '', email = '';
  function sendLead(extra) {
    var body = { source: 'Lead Gen Offer', name: name, email: email, company_fax: form.elements.company_fax.value };
    for (var k in extra) body[k] = extra[k];
    ['utm_source', 'utm_campaign', 'utm_content', 'fbclid'].forEach(function (k) { if (qs.get(k)) body[k] = qs.get(k); });
    // sent as text/plain so it's a "simple" cross-site request with no CORS preflight (same as /growth-plan).
    // The dashboard keeps one card per email, so the second send just adds the phone and website.
    var payload = JSON.stringify(body);
    try {
      fetch('${LEAD_API}', { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload })
        .catch(function () { try { navigator.sendBeacon('${LEAD_API}', new Blob([payload], { type: 'text/plain' })); } catch (y) {} });
    } catch (x) { try { navigator.sendBeacon('${LEAD_API}', new Blob([payload], { type: 'text/plain' })); } catch (y) {} }
  }
  // step 1: name + email is the lead
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = document.getElementById('lgf-err1');
    name = document.getElementById('lgf-name').value.trim(); email = document.getElementById('lgf-email').value.trim();
    if (!name) { err.textContent = 'Please add your name.'; document.getElementById('lgf-name').focus(); return; }
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) { err.textContent = 'Please add a valid email.'; document.getElementById('lgf-email').focus(); return; }
    err.textContent = '';
    sendLead({});
    // own event, not the standard Lead: /growth-plan fires Lead on the same pixel, and the lead gen campaigns
    // optimise for this event only
    try { window.fbq && fbq('trackCustom', 'LeadGenOfferLead'); } catch (x) {}
    form.hidden = true; form2.hidden = false;
    document.getElementById('lgf-tab1').classList.remove('on'); document.getElementById('lgf-tab2').classList.add('on');
    document.getElementById('lgf-bar').classList.add('two');
    document.getElementById('lgf-phone').focus();
  });
  // final step: phone + website, then the TidyCal pop-up, pre-filled
  form2.addEventListener('submit', function (e) {
    e.preventDefault();
    var digits = document.getElementById('lgf-phone').value.replace(/[^0-9]/g, '').replace(/^0/, '');
    var website = document.getElementById('lgf-website').value.trim();
    if (!digits) { document.getElementById('lgf-err2').textContent = 'Please add your phone number.'; document.getElementById('lgf-phone').focus(); return; }
    document.getElementById('lgf-err2').textContent = '';
    sendLead({ phone: document.getElementById('lgf-cc').value + ' ' + digits, website: website });
    var cal = document.getElementById('gpb-cal');
    cal.innerHTML = '';
    var el = document.createElement('div');
    el.className = 'tidycal-embed'; el.setAttribute('data-path', '${TIDYCAL_PATH}');
    el.setAttribute('data-name', name); el.setAttribute('data-email', email);
    cal.appendChild(el);
    document.getElementById('gpb-cal-link').href = 'https://tidycal.com/${TIDYCAL_PATH}?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email);
    form2.hidden = true;
    document.getElementById('gpb-step2').hidden = false;
    openModal();
    fitPhone();
    if (window.TidyCal) window.TidyCal.init(el);
    else { var sc = document.createElement('script'); sc.src = 'https://asset-tidycal.b-cdn.net/js/embed.js'; sc.async = true; document.body.appendChild(sc); }
  });
  // Phones: crop TidyCal down to the month calendar and shrink it to 88%; when a date is tapped, scroll the pop-up so
  // the times come into view (same numbers as /growth-plan, measured from TidyCal's phone layout)
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
          var timesTop = (0.86 * f.offsetWidth + 86 + 16) * SCALE;
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
  // once a time is picked, TidyCal shows its booking form at the top of its frame (the part we crop off): uncrop
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://tidycal.com' || typeof e.data !== 'string' || e.data.indexOf(':scrollToOffset') === -1) return;
    var c = document.getElementById('gpb-cal'), b = document.querySelector('.gpb-modal-body');
    c.classList.add('gpb-uncrop'); c.style.marginTop = '0px';
    b.scrollTo({ top: 0 });
  });
})();
`}</Script>
      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
