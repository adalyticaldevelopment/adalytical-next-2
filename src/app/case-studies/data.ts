// Case study content for /case-studies/[slug]/. Add a new entry here to publish a new case study;
// the index cards in ../page.tsx link to `/case-studies/<slug>/`.
// Only real case studies: all copy and figures come from adalytical.io/case-studies and
// freeaudit.adalytical.io (as of Oct 2026). Don't add figures that aren't published there.

export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  tag: string; // "Sector · Niche", shown on cards
  image: string; // file in public/images
  cardStat: string;
  cardBlurb: string;
  title: { lead: string; accent: string }; // page heading, must fit on one line
  summary: string;
  timeframe: string;
  services: string[];
  challenge: string[];
  strategy: { intro?: string[]; points?: { title: string; body: string }[] };
  results: { body: string; stats: Stat[] };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "before-you-speak",
    name: "BeforeYouSpeak Coffee",
    tag: "E-commerce · Coffee",
    image: "case-bys.webp",
    cardStat: "+65% ROAS",
    cardBlurb: "Improved tracking accuracy, restructured campaigns and increased ROAS by 65%, while scaling daily spend by 144%.",
    title: { lead: "BeforeYouSpeak Coffee:", accent: "+65% ROAS." },
    summary:
      "A case study on how we improved tracking accuracy, restructured campaigns, and increased ROAS by 65% for BeforeYouSpeak Coffee. Scaling daily spend by 144% while maintaining profitability.",
    timeframe: "6 months",
    services: ["Conversion tracking", "Search", "Shopping", "Performance Max"],
    challenge: [
      "BeforeYouSpeak Coffee, Australia’s leading functional coffee brand, came to us with solid in-house experience, but persistent challenges. While they had an experienced specialist managing Google Ads, data quality and structural inefficiencies were blocking growth.",
      "They were unknowingly inflating their ROAS with double-counted conversions and poorly configured New Customer Acquisition settings. Performance Max campaigns blurred branded and non-branded traffic, making it impossible to assess true performance.",
      "To make things worse, different product lines like Performance Coffee and Collagen Coffee were lumped together, and ads were showing in low-performing mobile apps, burning budget with little to show for it.",
      "They needed a data-driven strategy and full-funnel clarity to scale with confidence.",
    ],
    strategy: {
      points: [
        { title: "Fix tracking and conversion accuracy", body: "We audited and cleaned up their Google Ads conversion setup, removing duplicates, correcting tags, and refining New Customer Acquisition settings. We also added a high-LTV subscription-based conversion action to reveal true customer value." },
        { title: "Build granular campaign structure", body: "We segmented branded vs. non-branded traffic and split Performance Coffee and Collagen Coffee into separate campaigns. This gave us clear insights by product line and avoided skewed bidding decisions." },
        { title: "Optimise for high-performing SKUs", body: "Top-selling products were broken into stand-alone campaigns for targeted optimisation. Creatives were tailored to match each product’s unique benefits, improving relevance and click-through rates." },
        { title: "Eliminate wasted spend", body: "We excluded irrelevant app placements and proactively updated exclusion lists, ensuring budget was reserved for high-intent traffic sources." },
      ],
    },
    results: {
      body: "ROAS increased by 65% while daily ad spend grew by 144%. By fixing tracking accuracy and building a granular campaign structure, we enabled the brand to scale aggressively with confidence.",
      stats: [
        { value: "+65%", label: "ROAS increase" },
        { value: "+144%", label: "Daily ad spend growth" },
        { value: "100%", label: "Conversion accuracy" },
        { value: "+64%", label: "Trackable LTV revenue lift" },
      ],
    },
  },
  {
    slug: "watch-factory",
    name: "The Watch Factory",
    tag: "E-commerce · Watches",
    image: "case-watch-factory.webp",
    cardStat: "+46% revenue",
    cardBlurb: "A cleaner account structure gave top-selling products room to grow: +46% revenue and +2,966% sales from new customers.",
    title: { lead: "The Watch Factory:", accent: "+46% revenue." },
    summary:
      "Watch Factory had reached the limits of its original Google Ads setup. The account was messy and lacked the structure needed to grow. Broad targeting, minimal segmentation, and thousands of irrelevant search terms were driving inefficient spend.",
    timeframe: "12 months",
    services: ["Account restructure", "Search", "Shopping", "Performance Max", "Merchant Center", "Conversion tracking"],
    challenge: [
      "Watch Factory had reached the limits of its original Google Ads setup. The account was messy and lacked the structure needed to grow. Broad targeting, minimal segmentation, and thousands of irrelevant search terms were driving inefficient spend. Automated settings were left unchecked, leading to wasted budget and poor traffic quality.",
      "Shopping campaigns were severely underutilised, while branded traffic made up the majority of performance. Without dedicated segmentation, the team had no way to push key brands, promote seasonal offers, or run clearance campaigns that were essential to the business.",
      "As a result, they were unable to forecast sales, scale spend with confidence, or accurately track where growth was coming from. Despite Google Ads being the brand’s main revenue driver, they were flying blind with limited visibility and no ability to grow profitably. What they needed was a setup designed for scale, not a static structure meant for a small account.",
    ],
    strategy: {
      intro: [
        "Our first step was to strip the account back to its foundations and rebuild it for scalability, control, and profitability.",
        "We began by separating branded and non-branded traffic into distinct campaigns, allowing us to scale cold acquisition while protecting efficiency on high-intent brand terms. Display campaigns were removed entirely, and poor-performing placements in Search were cut. Shopping campaigns were completely restructured, and Performance Max was reintroduced carefully using a data-led approach.",
        "We disabled all automated and auto-apply settings that had been inflating search volume with irrelevant traffic. More than 10,000 irrelevant search terms were removed. Conversion tracking was rebuilt from the ground up, giving us a clear and accurate view of real performance.",
        "Campaigns were then segmented by product and brand category, unlocking the ability to push top-selling SKUs, run clearance promotions, and double down on high-margin brands. In Merchant Center, we tested new product title formats to better match user intent and improve relevance across Shopping and PMax.",
        "Crucially, we aligned the entire strategy with the financials of the business. Campaigns were built with profitability thresholds in mind, allowing us to scale confidently while maintaining strong return on ad spend.",
      ],
    },
    results: {
      body: "Revenue grew by +46%. Conversion rate increased by +20%. Cost per conversion dropped by -12%. Campaigns were segmented by product and brand category, unlocking the ability to push top-selling SKUs and run clearance promotions.",
      stats: [
        { value: "+46%", label: "Revenue growth" },
        { value: "+2,966%", label: "Sales from new customers" },
        { value: "+20%", label: "Conversion rate" },
        { value: "-12%", label: "Cost per conversion" },
      ],
    },
  },
  {
    slug: "booze-and-barrels",
    name: "Booze & Barrels",
    tag: "E-commerce · Decanters & gifts",
    image: "case-booze-barrels.webp",
    cardStat: "$16K → $68K",
    cardBlurb: "Segmented gifting and product campaigns reduced reliance on brand demand: +329% revenue at a 4.08 ROAS.",
    title: { lead: "Booze & Barrels:", accent: "$16K to $68K." },
    summary:
      "How Adalytical scaled Booze & Barrels by restructuring Google Ads, optimising product feeds, and unlocking seasonal gifting revenue.",
    timeframe: "12 months",
    services: ["Search", "Shopping", "Merchant Center", "Audiences", "Ad copy", "Promotions"],
    challenge: [
      "Booze & Barrels (formerly Don Vassie Decanters) came to us after feeling under-serviced by their previous agency. Their Google Ads account relied heavily on Performance Max, with 80% of their budget funneled into Shopping campaigns that offered little visibility or control. There were no dedicated campaigns for their top-performing product (custom decanters) and click-through rates were consistently under 5%.",
      "Beyond that, the brand wasn’t taking advantage of seasonal moments or high-intent gift-based searches. Weddings, holidays, and corporate gifting were all untapped growth opportunities. They needed a hands-on, performance-focused strategy to unlock scale and efficiency.",
    ],
    strategy: {
      intro: [
        "We rebuilt their entire campaign structure by segmenting Shopping and Search campaigns by product type. This gave us precise control over budgets and performance, allowing us to push their best-performing SKUs like decanters and aging barrels.",
        "The Merchant Center product feed was completely optimised. We rewrote titles and descriptions to highlight unique selling points and improve Shopping ad relevance and click-through rates.",
        "We introduced audience segmentation by activating Customer Match lists and remarketing to re-engage high-intent past visitors. These were layered across both upper- and lower-funnel campaigns to improve efficiency and retention.",
        "To solve the low CTR issue, we rewrote all ad copy using the AIDA framework, crafting headlines and descriptions that captured attention, built interest, created desire, and drove action.",
        "Recognising untapped demand, we launched dedicated campaigns targeting gifting and seasonal moments: weddings, holidays, and corporate use cases. This helped Booze & Barrels reach entirely new, high-converting audiences.",
        "We also enabled Google Ads and Merchant Center promotions to highlight active offers, driving urgency and engagement across placements.",
        "Lastly, we closely monitored ROAS by product type and reallocated budget toward high-performing segments, ensuring profitable scale while minimising waste.",
      ],
    },
    results: {
      body: "Revenue grew by 329%. Non-brand ROAS increased by 37.4%. Search CTR increased by 60%. Brand dependency reduced by 66.7%. By targeting high-intent gifting searches and segmenting products, we unlocked massive scale.",
      stats: [
        { value: "+37.4%", label: "Increase in non-brand ROAS" },
        { value: "+329%", label: "Revenue growth" },
        { value: "+60%", label: "Search CTR increase" },
        { value: "-66.7%", label: "Brand dependency" },
      ],
    },
  },
  {
    slug: "redlight-innovation",
    name: "Redlight Innovation",
    tag: "E-commerce · Red light therapy",
    image: "case-redlight.webp",
    cardStat: "4+ ROAS",
    cardBlurb: "Tighter intent control restored efficiency, then made further scale possible: ROAS from ~2.0 to 4+, and +115% net profit.",
    title: { lead: "Redlight Innovation:", accent: "4+ ROAS." },
    summary:
      "Redlight Innovation is a premium, single-product brand selling red light therapy hats. Tighter intent control restored efficiency, then made further scale possible.",
    timeframe: "~90 days",
    services: ["Shopping", "Performance Max", "Negative keywords", "Merchant Center", "Pricing strategy"],
    challenge: [
      "Redlight Innovation is a premium, single-product brand selling red light therapy hats. After working with a generalist agency, ROAS dropped to ~1.5–2.0 and monthly revenue fell from £17–20k to ~£11–12k.",
      "Scaling past £100/day caused conversion rates to collapse, and Performance Max expanded into generic red light searches the product couldn’t convert.",
    ],
    strategy: {
      points: [
        { title: "Strict intent control", body: "Rebuilt Shopping & Performance Max with strict intent control, and introduced a tiered negative keyword framework." },
        { title: "Sharper messaging", body: "Refocused messaging on hair loss & hair thinning outcomes, and built female-specific listings and assets." },
        { title: "Merchant Center reviews", body: "Implemented reviews directly into Merchant Center." },
        { title: "Pricing as a lever", body: "Used pricing as a strategic lever to enable scale." },
      ],
    },
    results: {
      body: "ROAS increased from ~2.0 to 4+. Revenue recovered and scaled from £12.8k to £19.5k/month at higher efficiency, and later scaled to £53k/month after pricing adjustments. Net profit increased 115% month-on-month, and Google Ads became predictable and scalable.",
      stats: [
        { value: "4+", label: "ROAS (from ~2.0)" },
        { value: "£53k", label: "Monthly revenue" },
        { value: "+115%", label: "Net profit" },
        { value: "~90 days", label: "Timeframe" },
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
