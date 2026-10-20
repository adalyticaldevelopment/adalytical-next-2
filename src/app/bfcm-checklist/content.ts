// Black Friday / Cyber Monday checklist content, shared by the opt-in page (section previews) and the
// checklist itself (/bfcm-checklist/access). Same 5 x 5 shape as the evergreen checklist on freeaudit.adalytical.io.
// Source copy: Marketing/BFCM Checklist/bfcm-checklist-content.md
export const BFCM = {
  blackFriday: "27 November",
  cyberMonday: "30 November",
  deadline: "13 November", // two weeks out: changes after this are too late for Smart Bidding to learn from
  blackFridayIso: "2026-11-27T00:00:00+11:00",
};

export type ChecklistSection = { title: string; teaser: string; intro: string; checks: string[]; watchOut: string };

export const SECTIONS: ChecklistSection[] = [
  {
    title: "Tracking Is Ready for the Spike",
    teaser: "Make sure Smart Bidding is learning from real numbers in your biggest week.",
    intro: "Black Friday is the most expensive week of the year to be optimising on bad data. If tracking breaks mid-sale, Smart Bidding keeps spending on numbers that aren't real.",
    checks: [
      "Place a real test order and confirm the purchase conversion records with the correct value in Google Ads.",
      "Confirm only your purchase conversion is set to Primary. Add to cart, checkout and page views should be Secondary.",
      "Check purchases count Every conversion, not One, so multiple orders from the same click are all counted.",
      "Turn on Enhanced Conversions (Goals > Settings) so you keep tracking when cookies are blocked.",
      "Freeze website and checkout changes from mid November. No new themes, apps or checkout scripts in sale week.",
    ],
    watchOut: "If tracking breaks during the sale, add a data exclusion for those dates (Tools > Bid strategies > Advanced controls) so bidding ignores the bad days.",
  },
  {
    title: "Budgets and Bidding Set Before the Rush",
    teaser: "Stop running out of budget at midday on Black Friday.",
    intro: "Smart Bidding can't react quickly enough to a 4-day sale on its own. Most accounts either run out of budget at midday on Black Friday or slash their targets and lose margin.",
    checks: [
      "Raise budgets in steps from the week before, not on the morning of Black Friday.",
      "Set a seasonality adjustment for 27 to 30 November (Tools > Bid strategies > Advanced controls) with your expected conversion rate lift.",
      "Don't change tROAS or tCPA targets during sale week. Every change sends bidding back into learning.",
      "Check budgets at least twice a day from Thursday to Monday. Look for campaigns that are \"Limited by budget\".",
      "Plan the step-down: when budgets return to normal after Cyber Monday, and that the seasonality adjustment ends on the 30th.",
    ],
    watchOut: "Seasonality adjustments are built for short events of 1 to 7 days. Using one for the whole of November tells Google to expect a spike that never comes.",
  },
  {
    title: "Feed and Merchant Center Sale-Ready",
    teaser: "Show your sale price in Shopping, not full price next to a competitor's strikethrough.",
    intro: "Shopping and PMax pull prices from your feed. If the feed doesn't show the sale price, your ads advertise full price while competitors show a strikethrough.",
    checks: [
      "Add sale_price and sale_price_effective_date to your discounted products so sale prices switch on and off automatically.",
      "Submit your Black Friday promotions in Merchant Center at least a week early. Promotions need approval before they show.",
      "Check Products > Diagnostics for disapprovals and price mismatches between your feed and your site.",
      "Use a custom label for your hero BFCM products so you can give them their own campaign or asset group and budget.",
      "Check stock levels on your best sellers. Out of stock products stop serving at the worst possible time.",
    ],
    watchOut: "If the site's sale price changes before the feed updates, Google flags a price mismatch and can disapprove the product mid-sale.",
  },
  {
    title: "Ads and Assets Speak Black Friday",
    teaser: "Put the offer in front of shoppers who are comparing deals.",
    intro: "Searchers in sale week are comparing offers. Ads still showing your everyday message lose the click to whoever puts the discount in the headline.",
    checks: [
      "Add promotion assets with the Black Friday and Cyber Monday occasions, the discount and the start and end dates.",
      "Add BFCM headlines to your top RSAs, including a countdown ({COUNTDOWN}) to the end of the sale.",
      "Schedule sitelinks to your sale and category pages for sale week only.",
      "Load BFCM images, videos and headlines into your PMax asset groups at least a week before the sale.",
      "Check your landing pages show the offer above the fold and load fast on mobile.",
    ],
    watchOut: "Ads with new copy go through review. Upload everything with future start dates the week before, not on Black Friday morning.",
  },
  {
    title: "Audiences and Brand Protection",
    teaser: "Win back past buyers and stop paying more for your own brand.",
    intro: "Your best Black Friday buyers already know you. Brand searches spike in sale week, and so do competitors bidding on your name.",
    checks: [
      "Upload your customer and email list to Customer Match (Tools > Audience manager) this month so it's ready for the sale.",
      "Add your past purchasers and site visitors as observation audiences so you can see how they perform.",
      "Give your brand campaign enough budget to cover the spike. It's your cheapest revenue of the week.",
      "Check Auction Insights on your brand campaign for competitors bidding on your name.",
      "Decide now whether you'll extend into Cyber Week, so ads, promotions and the feed all end on the same date.",
    ],
    watchOut: "If the brand campaign hits its budget cap on Black Friday, generic campaigns start paying more for your own brand searches.",
  },
];

export const TOTAL_CHECKS = SECTIONS.reduce((n, s) => n + s.checks.length, 0);
