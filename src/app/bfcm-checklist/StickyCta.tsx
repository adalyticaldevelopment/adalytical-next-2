"use client";
// Phone-only sticky CTA. Hidden while the hero form card is on screen (it would cover the form's own button) and
// shown once the visitor scrolls past it.
import { useEffect, useState } from "react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const card = document.querySelector(".bf-card");
    if (!card || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(card);
    return () => io.disconnect();
  }, []);
  return <a href="#get" className={`bf-sticky${show ? " is-on" : ""}`} aria-hidden={!show} tabIndex={show ? 0 : -1}>Get the Free Checklist</a>;
}
