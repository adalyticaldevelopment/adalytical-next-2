// Shared wrapper for the Black Friday checklist funnel (/bfcm-checklist and /bfcm-checklist/access): the funnel's own
// dark styles, Microsoft Clarity and the Meta pixel (PageView). Lead fires from the opt-in form.
import Script from "next/script";
import "./bfcm.css";

const CLARITY_ID = "ytfcuegf1a";
// Meta pixel: "Adalytical Main Pixel" in the Adalytical NEW ad account (act_921312640727906)
const META_PIXEL_ID = "1740160130622901";

export default function BfcmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bf-page">
      {children}
      <Script id="ms-clarity" strategy="afterInteractive">{`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
`}</Script>
      <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`}</Script>
      <noscript><img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} /></noscript>
    </div>
  );
}
