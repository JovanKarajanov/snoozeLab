# SnoozeLab — Immediate SEO Code Tasks
**Theme:** Shopify Dawn (Online Store 2.0, Liquid / no bundler)  
**Priority:** All tasks below are high-impact and can be completed without design changes  
**Source:** SnoozeLab SEO Audit, May 2026

---

## TASK 1 — Fix Homepage Title Tag & Meta Description
**Impact: Critical | Effort: Easy | File: `layout/theme.liquid`**

### Problem
The current homepage renders as:
- Title: `SnoozeLab – Snoozelab` (zero keywords, brand name duplicated with wrong capitalisation)
- Meta description: `Snoozelab` (one word — Google auto-generates a random snippet instead)

### What to Do

Open `layout/theme.liquid`. Find the `<title>` tag block. It will look roughly like:

```liquid
<title>
  {{ page_title }}
  {%- if current_tags %} &ndash; tagged &quot;{{ current_tags | join: ', ' }}&quot;{% endif -%}
  {%- if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page_number: current_page }}{% endif -%}
  {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
</title>
```

Replace with:

```liquid
<title>
  {%- if template.name == 'index' -%}
    Ergonomic Memory Foam Pillow for Neck Pain | SnoozeLab
  {%- elsif template.name == 'product' -%}
    {{ product.title }} | Cervical Support Pillow | SnoozeLab
  {%- else -%}
    {{ page_title }}
    {%- if current_tags %} &ndash; tagged &quot;{{ current_tags | join: ', ' }}&quot;{% endif -%}
    {%- if current_page != 1 %} &ndash; {{ 'general.meta.page' | t: page_number: current_page }}{% endif -%}
    {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
  {%- endif -%}
</title>
```

Then find the meta description tag. It will look like:

```liquid
{%- if page_description -%}
  <meta name="description" content="{{ page_description | escape }}">
{%- endif -%}
```

Replace with:

```liquid
{%- if template.name == 'index' -%}
  <meta name="description" content="The Cloud™ Butterfly Pillow by SnoozeLab — 6-zone memory foam engineered for back, side &amp; stomach sleepers. Chiropractor approved, CertiPUR-US certified. Free US shipping &amp; 30-night trial.">
{%- elsif template.name == 'product' and product.handle == 'the-cloud-pillow' -%}
  <meta name="description" content="The Cloud™ Butterfly Pillow adapts to every sleep position with 6 contoured support zones. Memory foam, cooling gel cover, adjustable height. Chiropractor approved. $78.99 — Free US shipping.">
{%- elsif page_description -%}
  <meta name="description" content="{{ page_description | escape }}">
{%- endif -%}
```

---

## TASK 2 — Fix og:image HTTP → HTTPS on Product Page
**Impact: High | Effort: Easy | File: `layout/theme.liquid`**

### Problem
The product page OG image tag outputs `http://` instead of `https://`. This breaks social sharing previews on Facebook, LinkedIn, and Twitter/X.

### What to Do

In `layout/theme.liquid`, find the og:image meta tag block. It will look like:

```liquid
{%- if page_image -%}
  <meta property="og:image" content="{{ page_image | image_url: width: 1200 }}">
  <meta property="og:image:secure_url" content="{{ page_image | image_url: width: 1200 }}">
{%- endif -%}
```

The Shopify `image_url` filter can produce `http://` in some contexts. Force HTTPS by appending a replace filter:

```liquid
{%- if page_image -%}
  {%- assign og_image_url = page_image | image_url: width: 1200 | replace: 'http://', 'https://' -%}
  <meta property="og:image" content="{{ og_image_url }}">
  <meta property="og:image:secure_url" content="{{ og_image_url }}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
{%- endif -%}
```

Also update twitter:image the same way if present:

```liquid
{%- if page_image -%}
  <meta name="twitter:image" content="{{ page_image | image_url: width: 1200 | replace: 'http://', 'https://' }}">
{%- endif -%}
```

---

## TASK 3 — Add Product + AggregateRating JSON-LD Schema
**Impact: Critical | Effort: Medium | File: `sections/main-product.liquid`**

### Problem
No AggregateRating schema means no star ratings in Google SERPs. Star ratings at positions 3–7 increase CTR by 15–30%. The current schema (if any) is Shopify's default minimal output — it does not include `aggregateRating`, `brand`, `material`, or `shippingDetails`.

### Prerequisite
Before implementing AggregateRating values, install Loox or Judge.me and migrate reviews. Only use real platform data in schema — hardcoded numbers risk a Google manual action. Once the review platform is live, use its Liquid variables to populate `ratingValue` and `reviewCount` dynamically.

### What to Do

Open `sections/main-product.liquid`. At the very bottom of the file (after the closing `{% endschema %}` or just before it, inside the Liquid content area), add:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "description": {{ product.description | strip_html | truncate: 300 | json }},
  "url": {{ request.origin | append: product.url | json }},
  "image": [
    {%- for image in product.images limit: 5 -%}
      {{ image | image_url: width: 1200 | replace: 'http://', 'https://' | json }}
      {%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
  ],
  "brand": {
    "@type": "Brand",
    "name": "SnoozeLab"
  },
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "mpn": {{ product.id | json }},
  "material": "CertiPUR-US certified open-cell memory foam, cooling gel-infused bamboo-polyester cover",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "{{ product.metafields.reviews.rating_count | default: '0' }}",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": {{ request.origin | append: product.url | json }},
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | divided_by: 100.0 | json }},
    "availability": {%- if product.available -%}"https://schema.org/InStock"{%- else -%}"https://schema.org/OutOfStock"{%- endif -%},
    "seller": {
      "@type": "Organization",
      "name": "SnoozeLab"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": "30",
      "returnMethod": "https://schema.org/ReturnByMail"
    }
  }
}
</script>
```

**Note on `reviewCount`:** Replace `product.metafields.reviews.rating_count` with the actual Liquid variable your review app (Loox/Judge.me) exposes. Check the review app docs for the exact metafield key. Until the review platform is live, omit the `aggregateRating` block entirely.

---

## TASK 4 — Add FAQ JSON-LD Schema to Homepage FAQ Section
**Impact: High | Effort: Medium | File: `sections/` — find the FAQ/collapsible section**

### Problem
The homepage has an FAQ accordion. FAQ content is not wrapped in JSON-LD schema, so it is ineligible for Google's FAQ rich results. FAQ rich results expand your SERP listing to show 2–4 questions directly in search — significantly increasing real estate and CTR.

### What to Do

**Step 1:** Identify the FAQ section file. In Dawn, it is likely `sections/collapsible-content.liquid`. Open that file and check the `{% schema %}` block to confirm it is the FAQ section.

**Step 2:** Inside `collapsible-content.liquid`, add the following Liquid at the bottom of the section (before `{% schema %}`):

```liquid
{%- if section.blocks.size > 0 -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {%- for block in section.blocks -%}
      {%- if block.type == 'collapsible_row' or block.type == 'faq_item' -%}
        {
          "@type": "Question",
          "name": {{ block.settings.heading | json }},
          "acceptedAnswer": {
            "@type": "Answer",
            "text": {{ block.settings.content | strip_html | json }}
          }
        }{%- unless forloop.last -%},{%- endunless -%}
      {%- endif -%}
    {%- endfor -%}
  ]
}
</script>
{%- endif -%}
```

**Note:** The exact `block.settings` key names (`heading`, `content`) depend on your section's schema. Open the `{% schema %}` block in `collapsible-content.liquid` and find the actual setting names — they may be `title` and `row_content` in Dawn. Match them exactly.

---

## TASK 5 — Add BreadcrumbList Schema to Product Page
**Impact: Medium | Effort: Easy | File: `snippets/breadcrumbs.liquid` or `sections/main-product.liquid`**

### Problem
The product page displays a breadcrumb (`Home › Pillows › White Core`) but it has no BreadcrumbList JSON-LD schema. Without schema, Google cannot display breadcrumb paths in SERPs — this reduces SERP listing quality and CTR.

### What to Do

Check if a `snippets/breadcrumbs.liquid` file exists. If it does, add the schema there. If not, add directly to the bottom of `sections/main-product.liquid`.

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": {{ request.origin | json }}
    },
    {%- if collection -%}
    {
      "@type": "ListItem",
      "position": 2,
      "name": {{ collection.title | json }},
      "item": {{ request.origin | append: collection.url | json }}
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": {{ product.title | json }},
      "item": {{ request.origin | append: product.url | json }}
    }
    {%- else -%}
    {
      "@type": "ListItem",
      "position": 2,
      "name": {{ product.title | json }},
      "item": {{ request.origin | append: product.url | json }}
    }
    {%- endif -%}
  ]
}
</script>
```

---

## TASK 6 — Add Organization Schema to Homepage
**Impact: Medium | Effort: Easy | File: `layout/theme.liquid`**

### Problem
No Organization schema means Google has no structured entity definition for SnoozeLab as a brand. Entity clarity is important for Knowledge Graph recognition and AI search citations.

### What to Do

In `layout/theme.liquid`, inside the `<head>` block, add the following conditionally for the homepage only:

```liquid
{%- if template.name == 'index' -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SnoozeLab",
  "url": {{ request.origin | json }},
  "logo": {{ request.origin | append: '/cdn/shop/t/6/assets/logo.png' | json }},
  "description": "SnoozeLab makes ergonomic memory foam butterfly pillows engineered for neck pain relief and cervical support. CertiPUR-US certified, chiropractor approved.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": []
}
</script>
{%- endif -%}
```

**Note:** Replace the logo path with the actual asset URL from your store. Once you have social media profiles, add them to the `sameAs` array as an array of URL strings — this strengthens brand entity recognition significantly.

---

## TASK 7 — Improve Product Image Alt Text
**Impact: Medium | Effort: Easy | File: `snippets/product-thumbnail.liquid` or `sections/main-product.liquid`**

### Problem
Product image alt text is currently minimal ("White Core", "Gray Core", etc.). Descriptive alt text serves two functions: image search ranking and accessibility (which Google uses as a quality signal).

### What to Do

Find where product images are rendered — in Dawn this is typically in `snippets/product-thumbnail.liquid` or within `sections/main-product.liquid` in the image gallery loop.

Look for a pattern like:

```liquid
<img src="{{ image | image_url: width: 900 }}" alt="{{ image.alt }}">
```

Replace with a Liquid fallback that constructs a keyword-rich alt if the image alt is empty or just a color name:

```liquid
{%- assign fallback_alt = product.title | append: ' - ' | append: product.vendor | append: ' Ergonomic Memory Foam Butterfly Pillow' -%}
{%- assign image_alt = image.alt | default: fallback_alt -%}
<img 
  src="{{ image | image_url: width: 900 }}" 
  alt="{{ image_alt | escape }}"
  width="900"
  height="675"
  loading="lazy"
>
```

For the first/hero product image (above the fold), change `loading="lazy"` to `loading="eager"` to prevent LCP delay.

---

## TASK 8 — Fix Hero H1 Keyword Targeting
**Impact: High | Effort: Easy | File: `config/settings_data.json` + verify in `sections/image-banner.liquid` or equivalent hero section**

### Problem
Current H1: `"Sleep Better. Wake Up Refreshed."` — zero primary keywords. Google uses H1 as a relevance signal. This H1 could describe any sleep brand, product, or app.

### What to Do

**Step 1:** Open `config/settings_data.json`. Search for the hero section's settings block. It will contain the current headline text. Find:

```json
"heading": "Sleep Better.  Wake Up Refreshed."
```

Or similar. Replace with:

```json
"heading": "Ergonomic Memory Foam Pillow Engineered for Your Neck."
```

**Step 2:** Verify in the hero section file (likely `sections/image-banner.liquid`) that the heading is output inside an `<h1>` tag when the section is the first section on the homepage:

```liquid
<h1 class="banner__heading ...">{{ section.settings.heading }}</h1>
```

If it uses an `<h2>` by default, change it to `<h1>` for the homepage context only:

```liquid
{%- if template.name == 'index' and forloop.index == 1 -%}
  <h1 class="banner__heading ...">{{ section.settings.heading }}</h1>
{%- else -%}
  <h2 class="banner__heading ...">{{ section.settings.heading }}</h2>
{%- endif -%}
```

---

## TASK 9 — Remove Fake Compare-At Price Display
**Impact: High (EEAT/Trust) | Effort: Easy | File: `snippets/price.liquid`**

### Problem
The product is showing `$140.00` struck through next to `$78.99 Sale`. The $140 was never the real price (PRD confirms $66.99–$78.99 range). This is a deceptive pricing dark pattern that erodes trust with savvy buyers and is a Google quality signal risk.

### What to Do

**Option A (Recommended): Remove compare-at price display entirely.**

Open `snippets/price.liquid`. Find the compare-at price block:

```liquid
{%- if show_compare_at_price and variant.compare_at_price > variant.price -%}
  <span class="price__sale">
    <s class="price-item price-item--regular">
      {{ variant.compare_at_price | money }}
    </s>
  </span>
{%- endif -%}
```

Remove or comment out this entire block. Then in Shopify Admin, also remove the compare-at price from the product variant to prevent it appearing anywhere else.

**Option B: Keep the block but fix the pricing.** In Shopify Admin → Products → The Cloud Pillow → edit each variant → set Compare at price to blank. The Liquid will then automatically not render the compare-at element.

Option B is the easier path if the theme's price snippet is complex — just clear the compare-at price from Admin.

---

## TASK 10 — Fix Breadcrumb Link (Product Page → Real Collection)
**Impact: Medium | Effort: Easy | File: Shopify Admin + `sections/main-product.liquid`**

### Problem
The product page breadcrumb shows `Home › Pillows` where "Pillows" links to `/#products` — an anchor link to the homepage, not a real collection page. This is a broken internal link from a crawl perspective. Google cannot follow it as a real page.

### What to Do

**Step 1:** In Shopify Admin → Products, assign The Cloud Pillow to a collection (create `/collections/pillows` if it does not exist).

**Step 2:** In `sections/main-product.liquid`, find the breadcrumb rendering. It likely uses `collection` object. Make sure it links to the collection URL, not a hardcoded anchor:

```liquid
{%- if collection -%}
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <a href="{{ routes.root_url }}">Home</a>
    <span aria-hidden="true">&rsaquo;</span>
    <a href="{{ collection.url }}">{{ collection.title }}</a>
    <span aria-hidden="true">&rsaquo;</span>
    <span>{{ product.title }}</span>
  </nav>
{%- endif -%}
```

This will only render properly once the product is assigned to a real collection (Step 1).

---

## TASK 11 — Add `<link rel="canonical">` Verification and Cleanup
**Impact: Medium | Effort: Easy | File: `layout/theme.liquid`**

### Problem
Canonical tags appear correct but should be verified for edge cases: collection pages with filters, paginated pages, and product URLs accessed via collection context (e.g. `/collections/pillows/products/the-cloud-pillow`).

### What to Do

In `layout/theme.liquid`, find the canonical tag. In Dawn it is typically:

```liquid
<link rel="canonical" href="{{ canonical_url }}">
```

Verify this line exists and is inside `<head>`. Shopify's `canonical_url` variable is correct by default — it strips collection context from product URLs (returns `/products/the-cloud-pillow` not `/collections/pillows/products/the-cloud-pillow`). No change needed if this is present.

If it is missing, add it inside `<head>`:

```liquid
<link rel="canonical" href="{{ canonical_url }}">
```

---

## Summary — Priority Order

| # | Task | File | Impact | Effort |
|---|---|---|---|---|
| 1 | Fix title tag + meta description | `layout/theme.liquid` | Critical | 15 min |
| 2 | Fix og:image HTTP → HTTPS | `layout/theme.liquid` | High | 10 min |
| 3 | Fix hero H1 keyword | `config/settings_data.json` | High | 10 min |
| 4 | Remove fake compare-at price | Shopify Admin (no code) | High | 5 min |
| 5 | Fix breadcrumb collection link | Shopify Admin + `main-product.liquid` | Medium | 15 min |
| 6 | Add Product + AggregateRating schema | `sections/main-product.liquid` | Critical | 30 min |
| 7 | Add FAQ JSON-LD schema | `sections/collapsible-content.liquid` | High | 20 min |
| 8 | Add BreadcrumbList schema | `sections/main-product.liquid` | Medium | 15 min |
| 9 | Add Organization schema | `layout/theme.liquid` | Medium | 10 min |
| 10 | Improve product image alt text | `snippets/product-thumbnail.liquid` | Medium | 20 min |
| 11 | Verify canonical tag | `layout/theme.liquid` | Medium | 5 min |

**Total estimated time: ~2.5 hours of coding**

---

*After completing these tasks, run `shopify theme check` to catch any Liquid syntax errors before pushing.*  
*Push with `shopify theme push --store your-store.myshopify.com`*
