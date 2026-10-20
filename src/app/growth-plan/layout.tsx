// Shared wrapper for the e-commerce VSL funnel (/growth-plan and /growth-plan/booked): adds Microsoft Clarity
// (session recordings + heatmaps) to the funnel pages only, not the rest of the site.
import Script from "next/script";

const CLARITY_ID = "ytfcuegf1a";

export default function GrowthPlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script id="ms-clarity" strategy="afterInteractive">{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
`}</Script>
    </>
  );
}
