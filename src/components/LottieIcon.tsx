"use client";

import { useEffect, useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Plays a real Lottie animation (lifted from the rankify design system).
 * The player + JSON load on mount; the files are small looping icons.
 */
export default function LottieIcon({
  file,
  className = "",
}: {
  file: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let anim: { destroy: () => void } | null = null;
    let cancelled = false;
    (async () => {
      try {
        const [{ default: lottie }, data] = await Promise.all([
          import("lottie-web/build/player/lottie_light"),
          fetch(`${BASE}/lottie/${file}`).then((r) => r.json()),
        ]);
        if (cancelled || !ref.current) return;
        anim = lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
      } catch {
        /* leave the box empty if anything fails */
      }
    })();
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [file]);

  return <span ref={ref} className={className} aria-hidden />;
}
