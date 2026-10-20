"use client";
// Two-step opt-in form. Step 1 (name, email, phone) saves the lead to the funnel dashboard (source "BFCM Checklist")
// and fires the pixel's Lead event, so a visitor who drops off at step 2 is still captured. Step 2 (store website,
// monthly revenue) sends the same email again, which updates that card, then opens the checklist. Same text/plain +
// beacon fallback as the Growth Plan form, so in-app browsers don't drop it.
import { useRef, useState, type FormEvent } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const LEAD_API = "https://funnel.adalytical.io/api/lead";
const REVENUE = ["Under $50k/mo", "$50k to $100k/mo", "$100k to $250k/mo", "$250k to $1M/mo", "$1M+/mo"];

declare global { interface Window { fbq?: (...a: unknown[]) => void } }

function send(body: Record<string, string>) {
  const qs = new URLSearchParams(window.location.search);
  ["utm_source", "utm_campaign", "utm_content", "fbclid"].forEach((k) => { const v = qs.get(k); if (v) body[k] = v; });
  const payload = JSON.stringify({ source: "BFCM Checklist", ...body });
  const beacon = () => { try { navigator.sendBeacon(LEAD_API, new Blob([payload], { type: "text/plain" })); } catch {} };
  try {
    fetch(LEAD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: payload, keepalive: true }).catch(beacon);
  } catch { beacon(); }
}

export function OptInForm({ id = "bf-form" }: { id?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const lead = useRef<Record<string, string>>({});

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    if (step === 1) {
      const name = get("name"), email = get("email");
      const digits = get("phone").replace(/[^0-9]/g, "").replace(/^0/, "");
      if (!name) return setErr("Please add your name.");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setErr("Please add a valid email.");
      setErr("");
      lead.current = { name, email, phone: digits ? `${get("cc")} ${digits}` : "", company_fax: get("company_fax") };
      send({ ...lead.current });
      try { window.fbq?.("track", "Lead", { content_name: "BFCM Checklist" }); } catch {}
      try { localStorage.setItem("bfcm_name", name.split(" ")[0]); } catch {}
      setStep(2);
      setTimeout(() => (form.elements.namedItem("website") as HTMLInputElement | null)?.focus(), 0);
      return;
    }

    const website = get("website"), revenue = get("revenue");
    if (!/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(website)) return setErr("Please add your store's website (e.g. yourbrand.com.au).");
    if (!revenue) return setErr("Please choose your monthly revenue.");
    setErr("");
    setBusy(true);
    send({ ...lead.current, website, revenue });
    // a moment for the request to leave before the page changes
    setTimeout(() => { window.location.href = `${BASE}/bfcm-checklist/access/`; }, 350);
  }

  return (
    <form id={id} className="bf-form" noValidate onSubmit={submit} aria-label="Get the Black Friday checklist">
      {step === 1 ? (
        <>
          <label>First and last name<input name="name" autoComplete="name" placeholder="John Doe" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="john@yourbrand.com.au" required /></label>
          <label>Phone
            <span className="bf-phone">
              <select name="cc" aria-label="Country code" defaultValue="+61">
                <option value="+61">🇦🇺 +61</option><option value="+64">🇳🇿 +64</option><option value="+44">🇬🇧 +44</option><option value="+1">🇺🇸 +1</option>
              </select>
              <input name="phone" type="tel" autoComplete="tel-national" placeholder="412 345 678" />
            </span>
          </label>
          <input name="company_fax" tabIndex={-1} autoComplete="off" className="bf-hp" aria-hidden="true" />
        </>
      ) : (
        <>
          <p className="bf-step" aria-live="polite"><strong>Last step:</strong> two quick questions so we can tailor the checklist to your store.</p>
          <label>Store website<input name="website" autoComplete="url" placeholder="yourbrand.com.au" required /></label>
          <label>Monthly online revenue
            <select name="revenue" defaultValue="" required>
              <option value="" disabled>Choose one</option>
              {REVENUE.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>
        </>
      )}
      {err && <p className="bf-err" role="alert">{err}</p>}
      <button type="submit" className="bf-btn" disabled={busy}>
        {step === 1 ? "Get the Free Checklist" : busy ? "Opening your checklist..." : "Open My Checklist"} <span aria-hidden="true">&rarr;</span>
      </button>
      {step === 1 && <p className="bf-legal">Instant access, no download. We&rsquo;ll also email you occasional Google Ads tips. Unsubscribe any time.</p>}
    </form>
  );
}
