"use client";
// Blog listing: featured post + filterable grid. Data from ./posts.ts.
import { useState } from "react";
import { POSTS, CATEGORIES, AUTHOR, type Post } from "./posts";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Meta({ p }: { p: Post }) {
  return (
    <div className="post-meta">
      <img className="post-av-img" src={`${BASE}/images/${AUTHOR.photo}`} alt="" />
      <span className="post-mt"><strong>{AUTHOR.name}</strong></span>
      <span className="post-read">{p.minutes} min read</span>
    </div>
  );
}

export default function BlogIndex() {
  const [cat, setCat] = useState("All");
  const list = POSTS.filter((p) => cat === "All" || p.category === cat);
  const [featured, ...rest] = list;
  return (
    <>
      <div className="post-filters bl-filters">
        {CATEGORIES.map((c) => (
          <button key={c} type="button" className={`post-filter${c === cat ? " active" : ""}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {featured && (
        <a href={`${BASE}/blog/${featured.slug}/`} className="bl-feat">
          <div className="bl-feat-img"><img src={`${BASE}/images/${featured.image}`} alt="" /></div>
          <div className="bl-feat-body">
            <span className="post-cat">{cat === "All" ? "Latest" : featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <Meta p={featured} />
            <span className="bl-read">Read article &rarr;</span>
          </div>
        </a>
      )}
      {rest.length > 0 && (
        <div className="post-grid">
          {rest.map((p) => (
            <a href={`${BASE}/blog/${p.slug}/`} className="post-card" key={p.slug}>
              <div className="post-thumb has-img"><img src={`${BASE}/images/${p.image}`} alt="" /></div>
              <div className="post-body">
                <span className="post-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <Meta p={p} />
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
