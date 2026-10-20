// Blog posts. Content migrated from the original adalytical.io/post/* articles (Jun 2025).
// Add a post here and it gets its own page at /blog/<slug>/ and a card on /blog/.

export type Block = ["p" | "h2" | "h3", string] | ["ul", string[]];

export type Post = {
  slug: string;
  title: string;
  category: string;
  minutes: number;
  date: string;
  summary: string;
  image: string; // file in public/images
  blocks: Block[];
};

export const AUTHOR = { name: "Jackson Wallace", role: "Co-founder, former Google Ads strategist", photo: "jackson-wallace.webp" };

export const POSTS: Post[] = [
  {
    "slug": "the-google-ads-audiences-every-ecommerce-brand-should-be-using",
    "title": "The Google Ads Audiences Every eCommerce Brand Should Be Using",
    "category": "Guides",
    "minutes": 6,
    "date": "June 4, 2025",
    "summary": "A properly structured Google Ads account should include core audience segments like website visitors, pain point searchers, competitor interest, existing customers, inactive customers, and non-subscribers to maximise performance and scale.",
    "image": "blog/the-google-ads-audiences-every-ecommerce-brand-should-be-using-v2.webp",
    "blocks": [
      [
        "p",
        "As Google continues to move toward aggregated campaign types like Performance Max and Demand Gen, many eCommerce brands are asking the same question: how do we maintain control and drive performance in an environment where so much is automated?"
      ],
      [
        "p",
        "One of the most effective answers is audience segmentation."
      ],
      [
        "p",
        "While Google’s automation handles a lot behind the scenes, the signals you feed into the system still matter. Strategic audience segments help guide campaigns toward more qualified users, giving you an edge in how your budget is spent and who your ads reach."
      ],
      [
        "p",
        "Below are six core audience segments every eCommerce brand should set up inside Google Ads. These segments not only improve targeting but can significantly enhance the effectiveness of Performance Max and Demand Gen campaigns."
      ],
      [
        "h2",
        "1. Website Visitor Segments"
      ],
      [
        "p",
        "This is the most basic yet essential audience type. These are users who visited your site but did not convert, especially those who engaged with high-intent pages like product pages or the checkout flow. They are already familiar with your brand and showed purchase intent, making them one of the easiest groups to re-engage with tailored messaging, urgency, or social proof."
      ],
      [
        "h2",
        "2. Pain Point or Solution Based Segments"
      ],
      [
        "p",
        "Most shoppers begin by looking for a solution, not a specific brand. If you understand the core problems your product solves, you can build audiences around those pain points. This might involve targeting users who read relevant blog content or searched for specific issues your product addresses. These are often colder audiences but highly qualified if the messaging is aligned with their needs."
      ],
      [
        "h2",
        "3. Competitor Interest Segments"
      ],
      [
        "p",
        "Users searching for or engaging with competitors are already in the buying mindset. If you have a strong offer or a compelling point of difference, this is a prime audience to go after. Whether it’s a better price, faster shipping, or higher product quality, these campaigns can be particularly effective when positioned correctly."
      ],
      [
        "h2",
        "4. Existing Customers"
      ],
      [
        "p",
        "Many brands overlook this group. These are people who already trust your brand and have made at least one purchase. Use this audience to promote new products, exclusive bundles, or early access to seasonal campaigns. You can also break this down further into high-value customers or those with frequent repeat purchases to tailor messaging even more precisely."
      ],
      [
        "h2",
        "5. Inactive Customers"
      ],
      [
        "p",
        "Create segments for customers who haven’t purchased in a specific timeframe, typically 60 to 90 days or longer depending on your product lifecycle. These users may not be actively shopping, but a well-timed reminder or special offer can bring them back. Win-back campaigns often perform best when combined with something new, such as a product launch or limited edition release."
      ],
      [
        "h2",
        "6. Non Subscribers"
      ],
      [
        "p",
        "If your business has a subscription model, this is one of the highest leverage segments. Focus on one-time purchasers who haven’t yet subscribed. These users have already experienced your product and understand its value. With the right creative emphasizing benefits like convenience, savings, or exclusive access, you can convert them into long-term subscribers and increase their lifetime value."
      ],
      [
        "h2",
        "Why This Matters More Than Ever"
      ],
      [
        "p",
        "Audience signals are not about restricting who sees your ads. Instead, they are about guiding Google’s machine learning in the right direction. In the current landscape of automated campaign types, giving Google stronger data inputs is one of the few remaining ways to influence performance meaningfully."
      ],
      [
        "p",
        "Many brands still run Performance Max or Demand Gen campaigns without setting up proper audience segments, missing an opportunity to improve efficiency and scale. Whether you are aiming to acquire new customers, increase retention, or revive dormant ones, a thoughtful audience strategy is essential."
      ],
      [
        "p",
        "If you are not using these audience types yet, this is the time to start. The brands that lean into strategic segmentation now will be the ones that stay ahead as Google Ads continues to evolve."
      ]
    ]
  },
  {
    "slug": "3-google-merchant-center-optimisations-to-improve-ecommerce-performance",
    "title": "3 Google Merchant Center Optimisations to Improve Ecommerce Performance",
    "category": "Tips & Tricks",
    "minutes": 3,
    "date": "June 4, 2025",
    "summary": "Three simple Merchant Center optimisations including keyword enhanced descriptions, precise product categorisation, and image testing can significantly improve the performance of your Google Shopping campaigns.",
    "image": "blog/3-google-merchant-center-optimisations-to-improve-ecommerce-performance-v2.webp",
    "blocks": [
      [
        "p",
        "Many ecommerce brands invest heavily in Google Shopping campaigns, but few take full advantage of what can be done inside Google Merchant Center to improve results."
      ],
      [
        "p",
        "If you want to drive stronger performance from your Shopping campaigns, here are three practical Merchant Center optimisations you can implement today."
      ],
      [
        "h2",
        "1. Optimise Product Descriptions Using Search Term Insights"
      ],
      [
        "p",
        "One of the most overlooked opportunities in product feeds is keyword optimisation within product descriptions."
      ],
      [
        "p",
        "Google’s Shopping algorithms rely heavily on feed content to match products to relevant searches. But customers often search in unexpected ways. The key is to mine your campaign search terms reports to discover which terms are actually driving conversions."
      ],
      [
        "p",
        "Once identified, these high-performing keywords should be naturally integrated into your product descriptions. This improves product relevance and ensures Google better understands how to match your listings with intent-driven queries."
      ],
      [
        "p",
        "A small investment of time here can lead to a measurable lift in quality traffic."
      ],
      [
        "h2",
        "2. Fine-Tune Product Categories for Better Visibility"
      ],
      [
        "p",
        "Google’s product category taxonomy may seem tedious, but it is a critical ranking factor for Shopping ads."
      ],
      [
        "p",
        "Think of your product feed as a well-organised library. If your products are not accurately categorised, Google’s algorithm will struggle to show them to the right shoppers."
      ],
      [
        "p",
        "Audit your current categories and ensure they align with Google’s latest taxonomy. The more precise you are, the better Google can position your products in search results. In competitive categories, this can make a clear difference in visibility and click volume."
      ],
      [
        "h2",
        "3. Test and Optimise Product Images"
      ],
      [
        "p",
        "Your product image is the single biggest driver of click-through rate in Shopping ads. This is especially true for new brands competing against established players."
      ],
      [
        "p",
        "Simple A/B testing of image variations can yield surprising improvements. Test different angles, product zoom levels, background treatments, or product packaging. Competitive analysis can also provide valuable insights into which visual approaches work best in your category."
      ],
      [
        "p",
        "By systematically testing and refining your imagery, you can improve click-through rates and gain more market share in the Shopping feed."
      ],
      [
        "h2",
        "Final Thoughts"
      ],
      [
        "p",
        "Many brands focus on bidding and budget adjustments, but often leave core feed optimisation untouched. These three Google Merchant Center tactics are practical, effective, and can be implemented with minimal development work."
      ],
      [
        "p",
        "Stronger feed relevance, better categorisation, and more engaging imagery all contribute to improved Shopping campaign performance."
      ]
    ]
  },
  {
    "slug": "google-ads-benchmarks-for-ecommerce-australia",
    "title": "Google Ads Benchmarks for eCommerce (Australia)",
    "category": "Resource",
    "minutes": 5,
    "date": "June 4, 2025",
    "summary": "This guide breaks down Australian eCommerce Google Ads benchmarks, covering CTR, CPC, and conversion rates for Search and Shopping across key industries like fashion, beauty, supplements, home, and pets, highlighting the importance of channel-specific strategies for optimal performance.",
    "image": "blog/google-ads-benchmarks-for-ecommerce-australia-v2.webp",
    "blocks": [
      [
        "p",
        "One of the most common questions we get from Australian eCommerce brands is simple. How do our Google Ads results compare to others in the market?"
      ],
      [
        "p",
        "The answer depends heavily on what industry you are in and what types of Google Ads campaigns you are running. Search and Shopping perform quite differently. In this guide, we break down the current Australian benchmarks for both channels, across key eCommerce verticals."
      ],
      [
        "h2",
        "Key Metrics to Watch"
      ],
      [
        "p",
        "There are three key metrics we look at when benchmarking campaigns:"
      ],
      [
        "ul",
        [
          "Click-through rate (CTR)",
          "Cost per click (CPC)",
          "Conversion rate"
        ]
      ],
      [
        "h2",
        "Fashion and Apparel"
      ],
      [
        "p",
        "Fashion is one of the most competitive eCommerce categories in Australia. Performance benchmarks tend to look like this:"
      ],
      [
        "h3",
        "Search"
      ],
      [
        "ul",
        [
          "CTR: 3.0% to 6.0%",
          "CPC: $0.80 to $2.00",
          "Conversion rate: 2.0% to 4.0%"
        ]
      ],
      [
        "h3",
        "Shopping"
      ],
      [
        "ul",
        [
          "CTR: 1.5% to 3.5%",
          "CPC: $0.50 to $1.50",
          "Conversion rate: 1.5% to 3.0%"
        ]
      ],
      [
        "p",
        "Winning in this space comes down to strong creative, high-quality visuals, and optimised product feeds."
      ],
      [
        "h2",
        "Beauty and Personal Care"
      ],
      [
        "p",
        "Beauty is a fast-growing category on Google Ads, especially for subscription-based products. Typical benchmarks are:"
      ],
      [
        "h3",
        "Search"
      ],
      [
        "ul",
        [
          "CTR: 4.0% to 8.0%",
          "CPC: $1.00 to $2.50",
          "Conversion rate: 3.0% to 6.0%"
        ]
      ],
      [
        "h3",
        "Shopping"
      ],
      [
        "ul",
        [
          "CTR: 2.5% to 5.0%",
          "CPC: $0.70 to $1.80",
          "Conversion rate: 2.5% to 5.0%"
        ]
      ],
      [
        "p",
        "The best performing brands in this space focus on high intent search terms and strong value offers on Shopping."
      ],
      [
        "h2",
        "Supplements"
      ],
      [
        "p",
        "Supplements is one of the strongest performing verticals on Google Ads in Australia. Benchmarks typically look like this:"
      ],
      [
        "h3",
        "Search"
      ],
      [
        "ul",
        [
          "CTR: 5.0% to 10.0%",
          "CPC: $1.50 to $3.50",
          "Conversion rate: 4.0% to 8.0%"
        ]
      ],
      [
        "h3",
        "Shopping"
      ],
      [
        "ul",
        [
          "CTR: 2.5% to 5.0%",
          "CPC: $1.00 to $2.50",
          "Conversion rate: 3.0% to 6.0%"
        ]
      ],
      [
        "p",
        "Careful feed management is critical in this space due to advertising restrictions. Subscription models help drive strong repeat purchase rates."
      ],
      [
        "h2",
        "Home and Living"
      ],
      [
        "p",
        "Home and living typically has longer purchase cycles and higher average order values. Here is what we typically see:"
      ],
      [
        "h3",
        "Search"
      ],
      [
        "ul",
        [
          "CTR: 2.0% to 4.0%",
          "CPC: $1.00 to $3.00",
          "Conversion rate: 2.0% to 4.0%"
        ]
      ],
      [
        "h3",
        "Shopping"
      ],
      [
        "ul",
        [
          "CTR: 1.0% to 2.5%",
          "CPC: $0.70 to $2.50",
          "Conversion rate: 1.5% to 3.0%"
        ]
      ],
      [
        "p",
        "Retargeting plays a big role in converting traffic in this vertical."
      ],
      [
        "h2",
        "Pets"
      ],
      [
        "p",
        "Pet brands continue to perform very strongly on Google Ads. Australian pet owners show high loyalty and repeat purchasing behaviour. Typical benchmarks:"
      ],
      [
        "h3",
        "Search"
      ],
      [
        "ul",
        [
          "CTR: 4.0% to 7.0%",
          "CPC: $1.00 to $2.50",
          "Conversion rate: 4.0% to 7.0%"
        ]
      ],
      [
        "h3",
        "Shopping"
      ],
      [
        "ul",
        [
          "CTR: 2.5% to 5.0%",
          "CPC: $0.80 to $2.00",
          "Conversion rate: 3.0% to 6.0%"
        ]
      ],
      [
        "p",
        "Shopping campaigns that promote subscription offers usually see the highest conversion rates."
      ],
      [
        "h2",
        "Final Thoughts"
      ],
      [
        "p",
        "Benchmarks are useful as a reference, but they are not the full story. Your actual performance will depend on many factors, including product margins, brand strength, site conversion rates, and audience targeting."
      ],
      [
        "p",
        "It is also important to optimise Search and Shopping separately, as they require different strategies and creative approaches. Many brands in Australia still treat them as one channel, which often limits performance."
      ]
    ]
  }
];

export const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
