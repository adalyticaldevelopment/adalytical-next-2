// Blog article page, one per entry in ../posts.ts.
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { POSTS, AUTHOR, getPost } from "../posts";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return { title: `${p.title} | Adalytical`, description: p.summary, alternates: { canonical: `/blog/${p.slug}/` } };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const toc = p.blocks.filter((b) => b[0] === "h2").map((b) => b[1] as string);
  const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const more = POSTS.filter((x) => x.slug !== p.slug);

  return (
    <>
      <SiteNav />

<article className="bp">
  <header className="bp-head ctr">
    <a href={`${BASE}/blog/`} className="bp-back">&larr; All articles</a>
    <span className="bp-cat">{p.category}</span>
    <h1>{p.title}</h1>
    <p className="bp-sum">{p.summary}</p>
    <div className="bp-by">
      <img src={`${BASE}/images/${AUTHOR.photo}`} alt={AUTHOR.name} />
      <div><strong>{AUTHOR.name}</strong><span>{AUTHOR.role}</span></div>
      <span className="bp-dot" />
      <span className="bp-meta">{p.date} &middot; {p.minutes} min read</span>
    </div>
  </header>

  <div className="ctr"><div className="bp-hero"><img src={`${BASE}/images/${p.image}`} alt="" /></div></div>

  <div className="bp-body ctr">
    <aside className="bp-toc">
      <span>In this article</span>
      <ol>{toc.map((t) => <li key={t}><a href={`#${anchor(t)}`}>{t.replace(/^\d+\.\s*/, "")}</a></li>)}</ol>
      <div className="bp-toc-cta">
        <b>Want this done on your account?</b>
        <a href={`${BASE}/book/`} className="btn-p">Get Your Growth Plan</a>
      </div>
    </aside>
    <div className="bp-prose">
      {p.blocks.map((b, i) => {
        if (b[0] === "h2") return <h2 key={i} id={anchor(b[1])}>{b[1]}</h2>;
        if (b[0] === "h3") return <h3 key={i}>{b[1]}</h3>;
        if (b[0] === "ul") return <ul key={i}>{b[1].map((li) => <li key={li}>{li}</li>)}</ul>;
        return <p key={i}>{b[1]}</p>;
      })}
    </div>
  </div>
</article>

<section className="sec sec-cream rvsec" style={{ paddingTop: 0 }}>
  <div className="ctr">
    <div className="bp-more-head"><h2>Keep reading</h2><a href={`${BASE}/blog/`} className="svc-link">All articles &rarr;</a></div>
    <div className="post-grid bp-more">
      {more.map((x) => (
        <a href={`${BASE}/blog/${x.slug}/`} className="post-card" key={x.slug}>
          <div className="post-thumb has-img"><img src={`${BASE}/images/${x.image}`} alt="" /></div>
          <div className="post-body">
            <span className="post-cat">{x.category}</span>
            <h3>{x.title}</h3>
            <p>{x.summary}</p>
            <div className="post-meta"><img className="post-av-img" src={`${BASE}/images/${AUTHOR.photo}`} alt="" /><span className="post-mt"><strong>{AUTHOR.name}</strong><span>{x.date}</span></span><span className="post-read">{x.minutes} min read</span></div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

<section className="sec sec-cream cta rvsec" style={{ paddingTop: "clamp(20px,calc(3 * var(--vw)),40px)" }}>
  <div className="ctr">
    <div className="cta-card rv">
      <span className="sec-tag">Get started</span>
      <h2>Want this dialled in on your account?</h2>
      <p>Get your Growth Plan and we&rsquo;ll apply the same playbooks to your Google Ads, tailored to your brand.</p>
      <div className="cta-btns"><a href={`${BASE}/book/`} className="btn-p">Get Your Growth Plan</a></div>
    </div>
  </div>
</section>

      <SiteFooter />
      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />
    </>
  );
}
