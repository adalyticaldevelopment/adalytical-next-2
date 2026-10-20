"use client";
// The interactive checklist: one card per section with tickable checks, saved in this browser so they can come back
// to it, and an overall progress bar.
import { useEffect, useState } from "react";
import { SECTIONS, TOTAL_CHECKS } from "../content";

const KEY = "bfcm_checks";

export function Checklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  useEffect(() => { try { setDone(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {} }, []);
  function toggle(id: string) {
    setDone((d) => { const n = { ...d, [id]: !d[id] }; try { localStorage.setItem(KEY, JSON.stringify(n)); } catch {} return n; });
  }
  const total = Object.values(done).filter(Boolean).length;

  return (
    <div className="bf-list">
      <div className="bf-progress" aria-live="polite">
        <span>{total} of {TOTAL_CHECKS} checks done</span>
        <div className="bf-bar"><i style={{ width: `${(total / TOTAL_CHECKS) * 100}%` }} /></div>
      </div>
      {SECTIONS.map((s, i) => {
        const ids = s.checks.map((_, j) => `${i}-${j}`);
        const n = ids.filter((id) => done[id]).length;
        const isOpen = !!open[i];
        return (
          <section key={s.title} className={`bf-sect${n === ids.length ? " is-done" : ""}`}>
            <button type="button" className="bf-sect-head" aria-expanded={isOpen} onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
              <span className="bf-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="bf-sect-t"><strong>{s.title}</strong><em>{n}/{ids.length} checks</em></span>
              <svg className="bf-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {isOpen && (
              <div className="bf-sect-body">
                <p className="bf-sect-intro">{s.intro}</p>
                {s.checks.map((c, j) => (
                  <label key={c} className="bf-check">
                    <input type="checkbox" checked={!!done[ids[j]]} onChange={() => toggle(ids[j])} />
                    <span>{c}</span>
                  </label>
                ))}
                <p className="bf-watch"><b>Watch Out:</b> {s.watchOut}</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
