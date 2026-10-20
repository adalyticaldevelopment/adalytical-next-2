// Shared page header for inner pages: a full-width dark forest band, with the homepage's cube grid, that the
// (transparent) nav sits on. It has a label, headline, intro, buttons and a proof row on the left and an optional image on the right.
// Styles: .phero in src/styles/pages.css. Wrap the highlighted words of the title in
// <span className="accent">. `children` render under the band's content (e.g. the blog filters).
import type { ReactNode } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  title: ReactNode;
  sub?: ReactNode;
  actions?: ReactNode;
  back?: { href: string; text: string };
  /** small uppercase label above the headline, e.g. "About us" */
  eyebrow?: string;
  /** image shown on the right on desktop (under the copy on phones); path is relative to /public */
  image?: { src: string; alt: string };
  /** a code-drawn graphic for the right side (takes precedence over `image`), e.g. result cards */
  media?: ReactNode;
  /** stars + "Trusted by 100+ brands" + "Ex-Google founders" under the buttons (on by default) */
  proof?: boolean;
  children?: ReactNode;
};

const Star = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 21l1.3-6.7-5-4.6 6.8-.8z"/></svg>;

export function PageHero({ title, sub, actions, back, eyebrow, image, media, proof = true, children }: Props) {
  return (
    <div className="phero">
      {/* same animated cube grid as the homepage hero (driven by site.js), recoloured for the dark band */}
      <div className="hero-grid" aria-hidden="true">
        <svg className="hg-cluster c1" viewBox="0 0 48 48" fill="currentColor"><rect x="2" y="2" width="12" height="12" rx="2"/><rect x="18" y="2" width="12" height="12" rx="2"/><rect x="34" y="18" width="12" height="12" rx="2"/><rect x="2" y="18" width="12" height="12" rx="2"/><rect x="18" y="34" width="12" height="12" rx="2"/><rect x="34" y="34" width="12" height="12" rx="2"/></svg>
        <svg className="hg-cluster c2" viewBox="0 0 48 48" fill="currentColor"><rect x="2" y="2" width="12" height="12" rx="2"/><rect x="34" y="2" width="12" height="12" rx="2"/><rect x="18" y="18" width="12" height="12" rx="2"/><rect x="2" y="34" width="12" height="12" rx="2"/><rect x="34" y="34" width="12" height="12" rx="2"/></svg>
        <svg className="hg-cluster c3" viewBox="0 0 48 48" fill="currentColor"><rect x="2" y="2" width="12" height="12" rx="2"/><rect x="18" y="2" width="12" height="12" rx="2"/><rect x="2" y="18" width="12" height="12" rx="2"/><rect x="18" y="18" width="12" height="12" rx="2"/><rect x="34" y="34" width="12" height="12" rx="2"/></svg>
      </div>
      <div className="ctr">
        <div className={`phero-panel rvsec${image || media ? " has-media" : ""}`}>
          <div className="phero-copy">
            {back && (
              <a href={`${BASE}${back.href}`} className="phero-back rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>{back.text}</a>
            )}
            {eyebrow && <span className="phero-eyebrow rv">{eyebrow}</span>}
            <h1 className="rv">{title}</h1>
            {sub && <p className="rv">{sub}</p>}
            {actions && <div className="phero-cta rv">{actions}</div>}
            {proof && (
              <div className="phero-proof rv">
                <span className="pp-stars"><Star /><Star /><Star /><Star /><Star /></span>
                <span>Trusted by <b>100+</b> brands</span>
                <span className="pp-sep" aria-hidden="true"></span>
                <span><b className="pp-mint">Ex-Google</b> founders</span>
              </div>
            )}
          </div>
          {media && <div className="phero-graphic rv">{media}</div>}
          {!media && image && (
            <div className="phero-media rv">
              <img src={`${BASE}${image.src}`} alt={image.alt} width="1000" height="625" />
            </div>
          )}
        </div>
        {children && <div className="phero-after rvsec">{children}</div>}
      </div>
    </div>
  );
}
