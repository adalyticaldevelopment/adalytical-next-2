// Booked / thank-you page for the e-commerce VSL funnel. iClosed's "Google Ads Ecommerce Strategy Call"
// form redirects here after a booking (with event parameters forwarded). Built around Jackson's
// "here's what happens next" video: progress tracker, then video + access card side by side,
// a who-you're-meeting card until the video is uploaded, call prep, manual access steps and what happens on the call.
import type { Metadata } from "next";
import Script from "next/script";
import { BOOKED_VIMEO_ID, LEADSIE_URL, ACCESS_EMAIL } from "@/lib/vsl";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Meta pixel: "Adalytical Main Pixel". TidyCal redirects here after a booking, so this page fires Schedule (once per
// visit). Lead already fired when the details form was submitted on /growth-plan.
const META_PIXEL_ID = "1740160130622901";
const ACCESS_HREF = LEADSIE_URL || "#manual";
const EXT = LEADSIE_URL ? { target: "_blank", rel: "noopener" } : {};

export const metadata: Metadata = {
  title: "You're booked in | Adalytical",
  description: "Your free Google Ads audit call is booked. Give us read-only access to your Google Ads before the call.",
  robots: { index: false, follow: false },
};

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round"/></svg>;
const Tick = () =><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

export default function Booked() {
  return (
    <>

<header className="vsl-top"><img src={`${BASE}/images/adalytical-logo-dark.svg`} alt="Adalytical" /></header>

<section className="bkd-hero rvsec">
  <div className="ctr">
    {/* progress: where they are in the process */}
    <ol className="bkd-progress rv" aria-label="Your progress">
      <li className="done"><span className="dot"><Tick /></span><span>Call booked</span></li>
      <li className="now" aria-current="step"><span className="dot">1</span><span>Watch the video</span></li>
      <li><span className="dot">2</span><span>Give us access</span></li>
      <li><span className="dot"><Cal /></span><span>Your audit call</span></li>
    </ol>

    <div className="bkd-head rv">
      <h1>You&rsquo;re booked in! <span className="accent">But wait, there&rsquo;s 2 more quick steps</span></h1>
      <p>So we can complete your audit before our call:</p>
      <ol className="bkd-steps">
        <li><span>1</span>Watch this short video</li>
        <li><span>2</span>Give us read-only access to your Google Ads</li>
      </ol>
    </div>

    <div className={`bkd-grid rv ${BOOKED_VIMEO_ID ? "" : "novideo"}`}>
      {BOOKED_VIMEO_ID ? (
        <div className="bkd-watch">
          <span className="bkd-label">Step 1 of 2</span>
          <h2>Watch this first: what happens next</h2>
          <div className="bkd-video">
          <iframe src={`https://player.vimeo.com/video/${BOOKED_VIMEO_ID}?badge=0&dnt=1&title=0&byline=0&portrait=0`} title="What happens next" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      ) : (
        <div className="bkd-callcard">
          <span className="bkd-label">Your call</span>
          <h2>You&rsquo;ll be speaking with an ex-Googler.</h2>
          <div className="bkd-people">
            <figure><img src={`${BASE}/images/jackson-sharp.webp`} alt="Jackson Sharp" /><figcaption><b>Jackson Sharp</b><span>Co-founder, ex-Google</span></figcaption></figure>
            <figure><img src={`${BASE}/images/jackson-wallace.webp`} alt="Jackson Wallace" /><figcaption><b>Jackson Wallace</b><span>Co-founder, ex-Google</span></figcaption></figure>
          </div>
          <ul className="bkd-checks">
            <li><Tick />The calendar invite and meeting link are in your inbox</li>
            <li><Tick />30 minutes on Google Meet</li>
            <li><Tick />Need a different time? Use the reschedule link in that email</li>
          </ul>
        </div>
      )}

      <aside className="bkd-access" aria-labelledby="access-h">
        <span className="bkd-label">Step 2 of 2</span>
        <h2 id="access-h">Give us read-only access to Google Ads</h2>
        <ul className="bkd-checks">
          <li><Tick />View-only, so nothing in your account changes</li>
          <li><Tick />Takes about 2 minutes through Leadsie</li>
          <li><Tick />We use it to find your wasted spend and growth opportunities before the call</li>
        </ul>
        <a href={ACCESS_HREF} className="btn-p bkd-btn bkd-access-btn" {...EXT}>Give us access</a>
        <a href="#manual" className="bkd-manual-link">Prefer to do it manually? Step-by-step directions</a>
        <p className="bkd-fine">Not running Google Ads yet? Skip this. We&rsquo;ll build your plan from your store, products and market.</p>
      </aside>
    </div>

  </div>
</section>

{/* ============ BEFORE THE CALL ============ */}
<section className="sec rvsec bkd-sec bkd-dark">
  <div className="ctr">
    <div className="bk-head rv vsl-center">
      <span className="sec-tag">Before your call</span>
      <h2>Have a rough idea of these numbers.</h2>
      <p className="bkd-sub">They make your audit far more useful. Rough is fine.</p>
    </div>
    <div className="bkd-nums">
      <article className="rv"><b>Your margins</b><span>So we know what a profitable return looks like for you.</span></article>
      <article className="rv"><b>Your best sellers</b><span>The products with the most room to scale on Google.</span></article>
      <article className="rv"><b>Your target cost per customer</b><span>What you&rsquo;d be comfortable paying to acquire a new one.</span></article>
    </div>
  </div>
</section>

{/* ============ WHAT HAPPENS ON THE CALL ============ */}
<section className="sec rvsec bkd-sec bkd-dark">
  <div className="ctr">
    <div className="bk-head rv vsl-center">
      <span className="sec-tag">On the call</span>
      <h2>A clear plan, whether or not we work together.</h2>
    </div>
    <ol className="bkd-flow">
      <li className="rv"><span>1</span><b>What we found</b><p>Where your budget is going, what&rsquo;s being wasted and what&rsquo;s holding the account back.</p></li>
      <li className="rv"><span>2</span><b>What we&rsquo;d change</b><p>The specific fixes, in the order we&rsquo;d make them.</p></li>
      <li className="rv"><span>3</span><b>Where Google can grow</b><p>A realistic view of how far Google can take your brand, and how fast.</p></li>
    </ol>
  </div>
</section>

{/* ============ MANUAL ACCESS DIRECTIONS ============ */}
<section className="sec rvsec bkd-sec bkd-dark" id="manual">
  <div className="ctr">
    <div className="bk-head rv vsl-center">
      <span className="sec-tag">Manual access</span>
      <h2>Prefer to add us yourself?</h2>
    </div>
    <ol className="bkd-howto rv">
      <li>Sign in to your Google Ads account at <b>ads.google.com</b>.</li>
      <li>In the left menu, click <b>Admin</b> (the gear icon), then <b>Access and security</b>.</li>
      <li>On the <b>Users</b> tab, click the blue <b>+</b> button.</li>
      <li>Enter <b className="bkd-email">{ACCESS_EMAIL}</b> and choose <b>Read only</b> access.</li>
      <li>Click <b>Send invitation</b>. We&rsquo;ll accept it on our side.</li>
    </ol>
    <p className="bkd-help rv">Need to change your call time? Use the reschedule link in your confirmation email, so the slot can go to someone else.</p>
  </div>
</section>

<footer className="gp-foot"><div className="ctr"><span>&copy; 2026 adalytical. All rights reserved.</span><span>Terms and Conditions &middot; Privacy Policy</span></div></footer>

{/* ============ META PIXEL ============ */}
{/* PageView on load, plus a custom AccessClick when someone uses the Leadsie button. */}
<Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
// TidyCal redirects here after a booking, so this page view is the booking: fire Schedule once per visit
try { if (!sessionStorage.getItem('gpb-scheduled')) { fbq('track', 'Schedule', { content_name: 'Free audit call' }); sessionStorage.setItem('gpb-scheduled', '1'); } } catch (e) { fbq('track', 'Schedule', { content_name: 'Free audit call' }); }
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('.bkd-access-btn');
  if (a && a.getAttribute('href') !== '#manual') fbq('trackCustom', 'AccessClick');
});
`}</Script>
<noscript><img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>
      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
