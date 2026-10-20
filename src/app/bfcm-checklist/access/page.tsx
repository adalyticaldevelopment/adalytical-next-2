// The Black Friday checklist itself, reached after the opt-in form on /bfcm-checklist. Same layout as the evergreen
// checklist on freeaudit.adalytical.io: sections on the left, the audit offer on the right (under the list on phones).
import type { Metadata } from "next";
import { BFCM, TOTAL_CHECKS } from "../content";
import { Checklist } from "./Checklist";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Your Google Ads Black Friday Checklist | Adalytical",
  description: `${TOTAL_CHECKS} Google Ads checks to run before Black Friday.`,
  robots: { index: false, follow: false },
};

export default function BfcmAccess() {
  return (
    <>
<header className="bf-top"><div className="bf-ctr"><img src={`${BASE}/images/adalytical-logo-white.svg`} alt="Adalytical" /></div></header>
<main className="bf-access">
  <div className="bf-ctr">
    <h1 className="bf-access-h">Your 5-Point Google Ads <span className="bf-accent">Black Friday</span> Checklist</h1>
    <p className="bf-lede">Work through these before {BFCM.deadline}. Black Friday is {BFCM.blackFriday} and Cyber Monday is {BFCM.cyberMonday}. Your ticks are saved in this browser.</p>
    <div className="bf-access-grid">
      <Checklist />
      <aside className="bf-side">
        <div className="bf-offer">
          <span className="bf-eyebrow"><i aria-hidden="true"></i>Limited spots before Black Friday</span>
          <h2>Want a second set of eyes before the sale?</h2>
          <p>This checklist covers {TOTAL_CHECKS} checks. Our full audit covers your whole account. Book a free call and we&rsquo;ll find what&rsquo;s costing you money before the busiest week of the year.</p>
          <a href={`${BASE}/growth-plan/#book`} className="bf-btn">Claim Your Free BFCM Audit <span aria-hidden="true">&rarr;</span></a>
        </div>
      </aside>
    </div>
  </div>
</main>
<footer className="bf-foot"><div className="bf-ctr"><span>&copy; 2026 Adalytical. All rights reserved.</span><span>Terms and Conditions &middot; Privacy Policy</span></div></footer>
    </>
  );
}
