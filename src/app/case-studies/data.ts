// Case study content for /case-studies/[slug]/. Add a new entry here to publish a new case study;
// the index cards in ../page.tsx link to `/case-studies/<slug>/`.
// Only real case studies: copy and figures come from adalytical.io/case-studies,
// freeaudit.adalytical.io and the client write-ups supplied by the team (Oct 2026).
// Don't add figures that aren't in those sources.

export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  tag: string; // "Sector · Niche", shown on cards
  image?: string; // file in public/images (optional: no image shows a blank panel)
  cardStat: string;
  cardBlurb: string;
  title: { lead: string; accent: string }; // page heading, must fit on one line
  summary: string;
  timeframe?: string;
  services?: string[];
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
    tag: "E-commerce · Alcohol",
    image: "case-booze-barrels.webp",
    cardStat: "$16K → $68K",
    cardBlurb: "Segmented gifting and product campaigns reduced reliance on brand demand: +329% revenue at a 4.08 ROAS.",
    title: { lead: "Booze & Barrels:", accent: "$16K to $68K." },
    summary:
      "How Adalytical scaled Booze & Barrels by restructuring Google Ads, optimising product feeds, and unlocking seasonal gifting revenue.",
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
    tag: "E-commerce · Health",
    image: "case-redlight.webp",
    cardStat: "4+ ROAS",
    cardBlurb: "Tighter intent control restored efficiency, then made further scale possible: ROAS from ~2.0 to 4+, and +115% net profit.",
    title: { lead: "Redlight Innovation:", accent: "4+ ROAS." },
    summary:
      "Redlight Innovation is a premium, single-product brand selling red light therapy hats. Tighter intent control restored efficiency, then made further scale possible.",
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
  {
    slug: "bushdoof-lighting",
    name: "Bushdoof Lighting",
    tag: "E-commerce · Automotive",
    image: "case-bushdoof.webp",
    cardStat: "+429% revenue",
    cardBlurb: "Bushdoof now has an account built around its full catalogue, with growth coming from new customers searching for its products and not just its name.",
    title: { lead: "How We Grew Annual Google Ads Revenue", accent: "+429%" },
    summary: "Bushdoof designs custom lighting and accessories for vehicles. The products already had a loyal following, Google Ads just wasn't reaching enough of the people searching for them.",
    services: ["Merchant Center", "Shopping", "Account restructure", "Brand segmentation", "Negative keywords", "Creative"],
    challenge: [
      "Bushdoof designs custom lighting and accessories for vehicles. The products already had a loyal following, Google Ads just wasn't reaching enough of the people searching for them.",
      "When we took the account on, it was tiny and messy. 1 campaign carried 75% of the spend and brought in 72% of the revenue, with whole product lines competing for the same small budget. Tons of products were disapproved in Merchant Center, which kept them out of Shopping results altogether.",
      "Bushdoof had a strong catalogue and their products had strong demand. The account needed a structure that gave every product line room to sell.",
    ],
    strategy: {
      intro: [
        "We started with the feed, where we cleared every product disapproval in Merchant Center and optimised each listing so products could show properly in Shopping. Next we removed branded terms and segmented them out, as well as segmenting on the different product categories.",
        "We keep it sharp week to week. Budget moves towards the categories selling best, negative keywords keep spend off irrelevant searches and creative stays fresh.",
      ],
    },
    results: {
      body: "Bushdoof now has an account built around its full catalogue, with growth coming from new customers searching for its products and not just its name.",
      stats: [
        { value: "+429%", label: "Annual revenue (7 figures)" },
        { value: "+228%", label: "Non-brand ROAS" },
        { value: "+93%", label: "Black Friday month revenue" },
        { value: "+101%", label: "Non-brand Google Ads revenue" },
      ],
    },
  },
  {
    slug: "aaria-london",
    name: "Aaria London",
    tag: "E-commerce · Jewellery",
    image: "case-aaria-london.webp",
    cardStat: "+439% revenue",
    cardBlurb: "Aaria London now sells to customers well beyond the UK, with growth coming from people discovering the brand through search.",
    title: { lead: "How We Grew Annual Revenue", accent: "+439%" },
    summary: "Aaria London is a jewellery brand best known for its Illusion Earrings. With a strong product offering and an established customer base, Meta Ads was already a massive driver of revenue for the business.",
    services: ["Conversion tracking", "Account restructure", "Merchant Center", "Ad copy", "International expansion"],
    challenge: [
      "Aaria London is a jewellery brand best known for its Illusion Earrings. With a strong product offering and an established customer base, Meta Ads was already a massive driver of revenue for the business.",
      "However, Google Ads was significantly underdeveloped and wasn't contributing anywhere near its potential.",
      "The account also suffered from unreliable conversion tracking, making it difficult to measure performance accurately or scale with confidence (1 conversion action was logging up to 29,749 \"purchases\" in a single month for a store spending minuscule amounts on Google Ads.)",
      "Aaria needed more than another advertising platform. It needed a new, profitable acquisition channel that could operate alongside Meta, reach customers actively searching for its products and support international expansion.",
    ],
    strategy: {
      intro: [
      "We started by fixing the foundations, ensuring conversion tracking was accurate and performance could be measured reliably.",
      "From there, we rebuilt and optimised the Google Ads account, improving product visibility, campaign targeting, advertising creative and the overall shopping experience.",
      "A major focus was generating sales beyond existing branded searches. We wanted to reach new customers who were actively looking for jewellery but hadn't yet discovered Aaria London.",
      "Once we had established strong performance in the UK, we expanded into international markets across North America, Europe and beyond.",
      "Throughout the process, we focused on growing revenue while improving ROAS, ensuring the channel could scale efficiently rather than simply increasing advertising spend.",
      ],
    },
    results: {
      body: "Aaria London now sells to customers well beyond the UK, with growth coming from people discovering the brand through search and not just people who already knew its name.",
      stats: [
        { value: "+439%", label: "Annual revenue" },
        { value: "+157%", label: "ROAS" },
        { value: "+407%", label: "Non-brand revenue" },
        { value: "+680%", label: "International revenue" },
      ],
    },
  },
  {
    slug: "hydrotech",
    name: "Hydrotech",
    tag: "E-commerce · Wellness",
    image: "case-hydrotech.webp",
    cardStat: "+74% non-brand ROAS",
    cardBlurb: "Hydrotech generated substantially more revenue from people searching for its products, not just those who already knew the brand.",
    title: { lead: "Scaling Sales Beyond Brand Searches:", accent: "+74% Non-Brand ROAS" },
    summary: "Hydrotech sells hydrogen water bottles and accessories in New Zealand. The brand had products people were interested in, and Google Ads was already bringing in sales. But too much of that activity was concentrated in a narrow part of the market.",
    services: ["Shopping", "Search", "Merchant Center", "Seasonal promotions", "Landing pages"],
    challenge: [
      "Hydrotech sells hydrogen water bottles and accessories in New Zealand. The brand had products people were interested in, and Google Ads was already bringing in sales. But too much of that activity was concentrated in a narrow part of the market.",
      "The opportunity was to reach more people who were searching for products like Hydrotech's, even if they had never heard of the brand. Growth needed to come from stronger non-brand performance, not just more people searching for Hydrotech by name.",
    ],
    strategy: {
      intro: [
        "We improved the product information going into Google Shopping and expanded how Hydrotech appeared across Search and Shopping. That gave its bottles and bundles more opportunities to show up for relevant searches, with ads and product listings that better matched what customers wanted.",
        "We also aligned advertising with seasonal promotions, sent shoppers towards the offers most likely to convert and continually refined targeting to avoid wasting spend. We helped develop better landing pages to improve conversion rates and increase basket size and ROAS when a shopper came from a Google Ad. As sales grew, budgets followed the areas producing the strongest returns.",
      ],
    },
    results: {
      body: "Hydrotech generated substantially more revenue from people searching for its products, not just those who already knew the brand by name.",
      stats: [
        { value: "+74%", label: "Non-brand ROAS" },
        { value: "+185%", label: "Non-brand revenue" },
      ],
    },
  },
  {
    slug: "lokolash",
    name: "Lokolash",
    tag: "E-commerce · Cosmetics",
    image: "case-lokolash.webp",
    cardStat: "+6 figures revenue",
    cardBlurb: "From no Google Ads to an extra 6 figures in incremental revenue, through a brand-new acquisition channel.",
    title: { lead: "From No Google Ads to", accent: "+6 Figures in New Revenue" },
    summary: "LokoLash is a New Zealand beauty brand known for its lash serum. It had a product customers loved and strong demand in the market, but its paid advertising relied entirely on Meta Ads.",
    services: ["Account setup", "Shopping", "Merchant Center", "Ad creative", "Promotions"],
    challenge: [
      "LokoLash is a New Zealand beauty brand known for its lash serum. It had a product customers loved and strong demand in the market, but its paid advertising relied entirely on Meta Ads.",
      "With no Google Ads presence, LokoLash was missing out on potential customers actively searching for lash serums and similar beauty products.",
      "The opportunity was clear: introduce an entirely new customer acquisition channel and turn existing search demand into additional revenue.",
    ],
    strategy: {
      intro: [
        "We built LokoLash's Google Ads presence from the ground up, focusing on reaching customers who were already searching for products like theirs.",
        "We optimised their product listings, developed compelling ad creative and built campaigns around their best-selling products to capture high-intent traffic.",
        "As performance improved, we expanded into additional product categories and promotional opportunities, continually refining the account to drive more sales and maximise returns.",
      ],
    },
    results: {
      body: "LokoLash went from relying entirely on paid social to generating significant additional revenue through Google Ads, reaching customers who were already searching for products like theirs.",
      stats: [
        { value: "6 figures", label: "Incremental revenue from Google Ads" },
        { value: "", label: "A completely new customer acquisition channel" },
        { value: "", label: "Reach expanded beyond Meta Ads" },
      ],
    },
  },
  {
    slug: "geelong-heat-pumps",
    name: "Geelong Heat Pumps",
    tag: "Lead generation · Plumbing",
    image: "leadgen/case-geelong.webp",
    cardStat: "+88% enquiries",
    cardBlurb: "88% more form enquiries on a 37% smaller Google Ads budget.",
    title: { lead: "More Leads, Less Spend:", accent: "+88% Enquiries, 37% Less Budget" },
    summary: "Geelong Heat Pumps supplies and installs heat pumps for homes and pools. People were searching for the services it offered, but its Google Ads activity wasn't turning that demand into enquiries as efficiently as it could.",
    services: ["Search", "Conversion tracking", "Landing pages"],
    challenge: [
      "Geelong Heat Pumps supplies and installs heat pumps for homes and pools. People were searching for the services it offered, but its Google Ads activity wasn't turning that demand into enquiries as efficiently as it could.",
      "They were already getting a lot of website traffic, but the account needed a clearer focus on genuine enquiries, less wasted advertising spend and a better experience for people ready to make contact.",
    ],
    strategy: {
      intro: [
        "We refocused the advertising around the searches most likely to lead to an enquiry. That meant simplifying the approach, improving how results were measured and continually refining which searches and messages deserved the budget.",
        "We also worked on the experience after someone clicked an ad, helping improve the landing page and make the next step clearer for potential customers. As the data became more reliable, we directed spend towards the activity generating actual enquiries rather than clicks alone.",
      ],
    },
    results: {
      body: "Geelong Heat Pumps started generating significantly more enquiries without needing a bigger advertising budget. The result was a more efficient way to capture demand that was already in the market.",
      stats: [
        { value: "+88%", label: "Form enquiries" },
        { value: "-37%", label: "Google Ads spend" },
        { value: "-66%", label: "Cost per form enquiry" },
      ],
    },
  },
  {
    slug: "peninsula-heat-pumps",
    name: "Peninsula Heat Pumps",
    tag: "Lead generation · Plumbing",
    image: "leadgen/case-peninsula.webp",
    cardStat: "81% lower cost per enquiry",
    cardBlurb: "Cost per enquiry cut by 81% while generating 17% more form enquiries.",
    title: { lead: "How We Cut Cost per Enquiry by", accent: "81% While Generating More Leads" },
    summary: "Peninsula Heat Pumps installs heating solutions for Australian homes. Google Ads was bringing people to the business, but it was difficult to see clearly which activity was producing genuine enquiries and which was simply using up budget.",
    services: ["Search", "Conversion tracking", "Targeting", "Landing pages"],
    challenge: [
      "Peninsula Heat Pumps installs heating solutions for Australian homes. Google Ads was bringing people to the business, but it was difficult to see clearly which activity was producing genuine enquiries and which was simply using up budget.",
      "Without dependable enquiry measurement and a focused approach to targeting, it was harder to make confident decisions about where the next advertising dollar should go.",
    ],
    strategy: {
      intro: [
        "We made enquiry tracking a priority so the account could be optimised around real customer interest. From there, we simplified the advertising approach and focused more heavily on the searches that showed people were actively looking for heat pump installation.",
        "We refined targeting, reduced irrelevant traffic and supported improvements to the website's contact experience. The goal wasn't just to spend less. It was to make each dollar work harder while maintaining and improving enquiry volume.",
      ],
    },
    results: {
      body: "Peninsula Heat Pumps was able to generate more enquiries at a fraction of the previous cost, with a clearer understanding of what its Google Ads investment was delivering.",
      stats: [
        { value: "-81%", label: "Cost per form enquiry" },
        { value: "+17%", label: "Form enquiries" },
        { value: "5.3×", label: "Form enquiries per advertising dollar" },
      ],
    },
  },
  {
    slug: "evo-solar",
    name: "Evo Solar",
    tag: "Lead generation · Solar",
    image: "leadgen/case-evo-solar.webp",
    cardStat: "52% lower cost per enquiry",
    cardBlurb: "Enquiry costs halved while generating 26% more call and email enquiries.",
    title: { lead: "How We Halved Enquiry Costs", accent: "While Generating 26% More Leads" },
    summary: "Evo Solar helps customers with solar, battery and heat pump solutions. Its advertising had grown over time, but the account had become harder to manage and the business wasn't getting a complete picture of the enquiries its ads were producing.",
    services: ["Search", "Call & form tracking", "Targeting", "Ad copy"],
    challenge: [
      "Evo Solar helps customers with solar, battery and heat pump solutions. Its advertising had grown over time, but the account had become harder to manage and the business wasn't getting a complete picture of the enquiries its ads were producing.",
      "The opportunity was to remove wasted activity, focus on searches with genuine intent and get more value from the existing budget.",
    ],
    strategy: {
      intro: [
        "We streamlined the Google Ads approach around the products and services customers were actively researching. We sharpened targeting and ad messaging, reduced irrelevant searches and prioritised the advertising that was most likely to produce an enquiry.",
        "We also improved the tracking of calls and other contact actions, including restoring measurement after website changes. That gave us better information to work with when deciding where to direct spend and what to improve next.",
      ],
    },
    results: {
      body: "Evo Solar generated more tracked enquiries while spending considerably less, demonstrating the value of a leaner and more focused approach to Google Ads.",
      stats: [
        { value: "-52%", label: "Cost per tracked enquiry" },
        { value: "+26%", label: "Call and email enquiries" },
        { value: "-40%", label: "Google Ads spend" },
      ],
    },
  },
  {
    slug: "hedonist",
    name: "Hedonist",
    tag: "E-commerce · Wellness",
    image: "case-hedonist.webp",
    cardStat: "+116% sales",
    cardBlurb: "Sales more than doubled year on year, in a Google-restricted category.",
    title: { lead: "How We More Than Doubled Sales", accent: "in a Google-Restricted Category" },
    summary: "Hedonist sells intimate wellness products in a category with strict Google advertising restrictions. Even with demand for the products, getting ads approved and keeping them running consistently can be difficult.",
    services: ["Policy compliance", "Search", "Ad copy", "Seasonal promotions"],
    challenge: [
      "Hedonist sells intimate wellness products in a category with strict Google advertising restrictions. Even with demand for the products, getting ads approved and keeping them running consistently can be difficult.",
      "The business needed more than a standard advertising approach. It needed a team that understood how to work within Google's policies while still finding ways to reach customers and grow sales.",
    ],
    strategy: {
      intro: [
        "We reviewed product information and advertising messages to improve policy compliance and worked through Google's review processes when ads were restricted or interrupted. That helped the business navigate a category where advertising requires more hands-on attention.",
        "Alongside the policy work, we improved the focus of its search advertising, tailored messaging to different customer interests and supported key sales periods. Regular optimisation helped direct spend towards searches and promotions showing the strongest response.",
      ],
    },
    results: {
      body: "Hedonist expanded its sales through Google Ads despite operating in a difficult advertising category. The account continues to require active policy management, but the brand has more ways to reach customers searching for its products.",
      stats: [
        { value: "+116%", label: "Sales year on year" },
        { value: "+154%", label: "Google Ads revenue year on year" },
        { value: "", label: "Significant policy issues fast-tracked with our ex-Google expertise" },
      ],
    },
  },
  {
    slug: "health-heiress",
    name: "Health Heiress",
    tag: "E-commerce · Supplements",
    image: "case-health-heiress.webp",
    cardStat: "+44% ROAS",
    cardBlurb: "ROAS up 44% and revenue up 35%, while spending less.",
    title: { lead: "More Revenue, Less Spend:", accent: "+44% ROAS While Scaling" },
    summary: "Health Heiress is an Australian wellness brand selling online. It had products with demand, but its Google Ads account needed to do a better job of finding new shoppers and turning advertising spend into sales.",
    services: ["Search", "Shopping", "Creative", "Conversion tracking", "Policy compliance"],
    challenge: [
      "Health Heiress is an Australian wellness brand selling online. It had products with demand, but its Google Ads account needed to do a better job of finding new shoppers and turning advertising spend into sales.",
      "The account also needed more confidence in its purchase tracking, so decisions about performance could be made using clearer data. In a category with additional advertising restrictions, getting the foundations right was especially important.",
    ],
    strategy: {
      intro: [
        "We refocused advertising around the products and searches with the strongest potential to generate sales, rather than relying too heavily on people who already knew the brand. We refreshed the creative, improved how products were promoted and tightened the search targeting to reduce wasted spend.",
        "We also reviewed conversion measurement and worked through advertising policy issues that could limit reach. With a clearer picture of performance, we continued testing and directed budgets towards the offers producing stronger returns.",
      ],
    },
    results: {
      body: "Health Heiress generated more revenue from a smaller advertising budget during the compared months, proving that efficiency improvements can be just as valuable as increasing spend.",
      stats: [
        { value: "+44%", label: "Return on ad spend" },
        { value: "+35%", label: "Revenue (while spending less)" },
        { value: "-33%", label: "Cost per sale" },
      ],
    },
  },
  {
    slug: "bellissima",
    name: "Bellissima",
    tag: "E-commerce · Haircare",
    image: "case-bellissima.webp",
    cardStat: "+266% ROAS",
    cardBlurb: "ROAS up 266% and revenue up 226% across international markets.",
    title: { lead: "How We Increased ROAS by 266%,", accent: "While Also Growing Revenue" },
    summary: "Bellissima Hair sells hair styling tools to customers across several international markets. The brand had a strong product offering, but its Google Ads approach wasn't giving each market the attention it needed to grow efficiently.",
    services: ["Shopping", "Promotions", "International markets", "Reporting"],
    challenge: [
      "Bellissima Hair sells hair styling tools to customers across several international markets. The brand had a strong product offering, but its Google Ads approach wasn't giving each market the attention it needed to grow efficiently.",
      "Different countries were performing differently, while product promotions and shopping information weren't always being presented in the best way. Bellissima needed a clearer view of where growth was coming from and how to invest in each market.",
    ],
    strategy: {
      intro: [
        "We tailored the advertising approach to different countries and product groups, giving us more control over which offers were shown to which customers. We also improved how sales and promotions appeared through Google Shopping and made reporting easier to assess market by market.",
        "From there, we regularly reviewed the returns in each region, refined targeting and refreshed messaging. Budget decisions followed the markets and products showing the strongest opportunity rather than treating every country the same.",
      ],
    },
    results: {
      body: "Bellissima Hair strengthened its performance across all markets, with particularly strong improvements in Canada and significant revenue growth in the US.",
      stats: [
        { value: "+266%", label: "ROAS" },
        { value: "+226%", label: "Revenue" },
      ],
    },
  },
  {
    slug: "onq",
    name: "ONQ",
    tag: "Lead generation · Media",
    image: "leadgen/case-onq.webp",
    cardStat: "22.5× qualified calls",
    cardBlurb: "22.5× more qualified calls from Google Ads per month.",
    title: { lead: "How We Increased Qualified Calls", accent: "from Google Ads by 22.5×" },
    summary: "ONQ supplies digital signage solutions to businesses. Google Ads was bringing people to the website, but it wasn't giving the team a clear enough picture of which visitors were turning into genuine business enquiries.",
    services: ["Search", "Call & form tracking", "Lead generation", "Ad copy"],
    challenge: [
      "ONQ supplies digital signage solutions to businesses. Google Ads was bringing people to the website, but it wasn't giving the team a clear enough picture of which visitors were turning into genuine business enquiries.",
      "For a service business, clicks alone don't pay the bills. ONQ needed its advertising to connect with companies actively looking for signage solutions and generate more valuable sales conversations.",
    ],
    strategy: {
      intro: [
        "We shifted the focus from website traffic to lead generation. That meant improving how calls and enquiries were measured, aligning the advertising more closely with the services potential customers were searching for and making the path from an ad to an enquiry clearer.",
        "We also reviewed search intent and refined messaging and targeting to attract more relevant businesses. The emphasis moved away from simply generating clicks and towards creating opportunities for the sales team to speak with interested prospects.",
      ],
    },
    results: {
      body: "ONQ now has an advertising approach built around meaningful customer conversations, not just website visits. The growth in qualified calls is the clearest sign of that shift.",
      stats: [
        { value: "22.5×", label: "Qualified calls from Google Ads per month" },
        { value: "6 Figures+", label: "In additional monthly sales pipeline (commercial value generated through Google Ads)" },
        { value: "+300%", label: "Increase in conversion rate" },
        { value: "", label: "Clear visibility into the enquiries Google Ads generates" },
      ],
    },
  },
  {
    slug: "into-blinds",
    name: "Into Blinds",
    tag: "Lead generation · Home Improvement",
    image: "leadgen/case-into-blinds.webp",
    cardStat: "+21% leads",
    cardBlurb: "21% more tracked leads at a 21% lower cost per lead.",
    title: { lead: "How We Generated 21% More Leads", accent: "While Spending Less" },
    summary: "Into Blinds helps customers find made-to-measure blinds, shutters and curtains. Google Ads was an important source of enquiries, but the account wasn't making the most of the different products and search intentions behind those enquiries.",
    services: ["Search", "Conversion tracking", "Ad copy", "Negative keywords"],
    challenge: [
      "Into Blinds helps customers find made-to-measure blinds, shutters and curtains. Google Ads was an important source of enquiries, but the account wasn't making the most of the different products and search intentions behind those enquiries.",
      "The business needed a more reliable picture of its leads and a way to bring in more enquiries without simply increasing its advertising budget.",
    ],
    strategy: {
      intro: [
        "We improved conversion tracking so performance could be measured against enquiries rather than inflated or overlapping signals. We then refined the advertising around the products people were actively looking for and strengthened ad messaging with the reasons customers choose Into Blinds.",
        "Rather than making sudden changes to a large account, we shifted spend carefully towards stronger-performing searches and product areas. Ongoing reviews helped reduce irrelevant traffic and keep the focus on producing leads efficiently.",
      ],
    },
    results: {
      body: "Into Blinds generated more tracked enquiries with a smaller budget across the compared periods, with advertising better aligned to the products customers wanted.",
      stats: [
        { value: "+21%", label: "Tracked leads" },
        { value: "-21%", label: "Cost per lead" },
      ],
    },
  },
  {
    slug: "personalised-favours",
    name: "Personalised Favours",
    tag: "E-commerce · Gifts",
    image: "case-personalised-favours.webp",
    cardStat: "+6 figures revenue",
    cardBlurb: "6 figures in incremental revenue from an already established Google Ads account.",
    title: { lead: "6 Figures in Incremental Revenue", accent: "for an Established Brand" },
    summary: "Personalised Favours is an established ecommerce brand selling personalised gifts and glassware. Its customers shop around important occasions, from weddings to Christmas, so success depends on showing the right products at the right time.",
    services: ["Conversion tracking", "Shopping", "Search", "Seasonal planning"],
    challenge: [
      "Personalised Favours is an established ecommerce brand selling personalised gifts and glassware. Its customers shop around important occasions, from weddings to Christmas, so success depends on showing the right products at the right time.",
      "The brand was already investing heavily in Google Ads. The opportunity wasn't to start from scratch. It was to improve confidence in the performance data, bring more focus to the products that customers actually bought and create additional revenue from an already mature advertising channel.",
    ],
    strategy: {
      intro: [
        "We reviewed the purchase tracking to make sure optimisation decisions were based on more dependable sales data. We then put greater emphasis on high-performing products and aligned Shopping and Search activity with how customers browse for gifts.",
        "We also planned advertising around seasonal demand, with messaging and product priorities adjusted for the occasions that matter most to the brand. Ongoing budget and search-term reviews helped keep spending focused on products delivering stronger returns.",
      ],
    },
    results: {
      body: "Even with an established advertising account, Personalised Favours found opportunities to generate meaningful additional revenue through cleaner measurement, sharper product focus and better seasonal planning.",
      stats: [
        { value: "6 figures", label: "Incremental revenue from Google Ads" },
        { value: "+10%", label: "Annual Google Ads revenue" },
        { value: "", label: "Higher ROAS during key seasonal periods, with less ad spend" },
      ],
    },
  },
  {
    slug: "winland",
    name: "Winland Home & Garden",
    tag: "E-commerce · Gardening",
    image: "case-winland.webp",
    cardStat: "+33% sales",
    cardBlurb: "Sales up 33% year on year with product-led campaigns.",
    title: { lead: "How We Grew Sales by 33%", accent: "With Product-Led Campaigns" },
    summary: "Winland sells garden tools and outdoor maintenance products. Its range included proven bestsellers as well as products with room to reach new customers through Google Shopping and Search.",
    services: ["Shopping", "Search", "Promotions", "Product segmentation"],
    challenge: [
      "Winland sells garden tools and outdoor maintenance products. Its range included proven bestsellers as well as products with room to reach new customers through Google Shopping and Search.",
      "The account wasn't giving individual product categories enough attention. That made it harder to support the best performers, introduce newer products and make the most of seasonal demand.",
    ],
    strategy: {
      intro: [
        "We refocused the advertising around the products people were most likely to buy, with more tailored messaging and greater flexibility to support different parts of the range. We also introduced promotion-focused advertising for seasonal shopping periods and gave growing products more opportunity to be discovered.",
        "From there, we reviewed sales performance regularly, refined search targeting and adjusted where budget was directed. The focus was on helping Winland sell more of the products customers were already looking for.",
      ],
    },
    results: {
      body: "Winland saw higher sales volume and wider exposure for its products through a more product-focused Google Ads approach.",
      stats: [
        { value: "+33%", label: "Sales year on year" },
        { value: "", label: "Consistently exceeded monthly revenue goal" },
      ],
    },
  },
  {
    slug: "prime-group",
    name: "Prime Group",
    tag: "Lead generation · Construction",
    image: "leadgen/case-prime-group.webp",
    cardStat: "47% lower cost per enquiry",
    cardBlurb: "Cost per form enquiry down 47% with focused targeting on priority services.",
    title: { lead: "How a More Focused Approach Cut", accent: "Form Enquiry Costs by 47%" },
    summary: "Prime Group Building works across several building services, from residential projects to commercial fit-outs. Each service attracts a different type of customer, so the business needed advertising that could reach people searching for the right kind of project.",
    services: ["Search", "Form tracking", "Targeting", "Ad copy"],
    challenge: [
      "Prime Group Building works across several building services, from residential projects to commercial fit-outs. Each service attracts a different type of customer, so the business needed advertising that could reach people searching for the right kind of project.",
      "At the start, it was also difficult to measure how effectively website visits were turning into enquiries. The priority was to create clearer lead tracking and put the advertising in front of people with relevant building needs.",
    ],
    strategy: {
      intro: [
        "We focused the advertising on the services the business wanted to grow, with search messaging tailored to the type of work prospective customers were looking for. We also improved enquiry measurement so form submissions and other contact actions could be assessed more consistently.",
        "As the business's priorities shifted, we refined targeting and directed more attention towards the services it was most interested in winning. That helped avoid spreading the budget too widely across unrelated enquiries.",
      ],
    },
    results: {
      body: "Prime Group Building improved the recorded cost of form enquiries while gaining a clearer view of how Google Ads could support its chosen services.",
      stats: [
        { value: "-47%", label: "Cost per form enquiry" },
        { value: "", label: "Clearer visibility into which advertising generated enquiries" },
        { value: "", label: "More focused targeting around priority building services" },
      ],
    },
  },
];

// Clients whose case study isn't written yet: shown as non-clickable "coming soon" cards on
// /case-studies/ (no page, no figures). Move a client into CASE_STUDIES once its real story
// and numbers are in. `image` is optional; without it the card shows a blank image area.
export type ComingSoon = { name: string; tag: string; image?: string; imagePosition?: string };

export const COMING_SOON: ComingSoon[] = [
  { name: "Kiwi Treats", tag: "E-commerce · Snacks", image: "case-kiwi-treats.webp" },
];

// Lead gen results for /lead-gen-offer/, taken from the full case studies above so the
// numbers always match: the first result is the headline, the rest are listed under it.
export type LeadGenResult = { business: string; category: string; img: string; headline: string; label: string; more: { value: string; label: string }[] };

const LEADGEN_SLUGS = ["into-blinds", "onq", "prime-group", "peninsula-heat-pumps", "geelong-heat-pumps", "evo-solar"];
export const LEADGEN_RESULTS: LeadGenResult[] = LEADGEN_SLUGS.map((slug) => {
  const c = CASE_STUDIES.find((x) => x.slug === slug)!;
  const [first, ...rest] = c.results.stats;
  return {
    business: c.name,
    category: "Google Ads",
    img: (c.image ?? "").replace(/^leadgen\//, ""),
    headline: first.value,
    label: first.label,
    more: rest,
  };
});

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
