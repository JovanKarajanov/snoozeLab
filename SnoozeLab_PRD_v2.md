# SNOOZELAB
*Website Design & Development PRD*

Multi-Product Ergonomic Relief Collection  ·  Version 3.0  ·  June 2026  ·  Confidential

---

## 1. Project Overview

SnoozeLab is a direct-to-consumer premium ergonomic relief brand selling a curated collection of products designed to eliminate neck, cervical, and lumbar pain. The site must feel luxury-minimal — closer to Montblanc than Casper. Every pixel should communicate precision and trust, not bounce and lifestyle fluff.

| **Platform** | Shopify (Dawn theme with custom sections) |
|---|---|
| **Product Line** | 4 ergonomic relief products (see Section 1.1) |
| **Target Market** | US customers, 25–55, seeking premium ergonomic pain relief solutions |
| **Design Inspiration** | Montblanc.com — luxury restraint, precision, editorial feel |
| **Tone of Voice** | Authoritative, clinical-warm. "Engineered for your body." — never "So comfy!" |

### 1.1 Product Catalog

| **Product** | **Price** | **Primary Pain Point** |
|---|---|---|
| Ergonomic Memory Foam Butterfly Pillow | $79.99 | Cervical / neck pain, sleep alignment |
| Ergonomic Memory Foam Lumbar Support Pillow | $44.99 | Lower back pain, lumbar support |
| Ergonomic Cervical Correction Pillow | $49.99 | Forward head posture, cervical correction |
| Ergonomic Heating Neck Massager with Infrared Therapy | $89.99 | Active neck tension relief, muscle therapy |

---

## 2. Brand Identity & Design System

### 2.1 Color Palette

These are non-negotiable. Every component should draw from this palette only. No pure white (#FFFFFF) — use off-white. No pure black — use near-black.

| **Token Name** | **Hex** | **Usage** |
|---|---|---|
| `--color-ink` | #1A1A1A | Primary text, navbar (scrolled), CTA button fill, section headings |
| `--color-off-white` | #F7F5F1 | Page background, card backgrounds — NEVER pure #FFF |
| `--color-stone` | #C8BFB0 | Trust bar background, dividers, secondary borders |
| `--color-sage` | #8A9E8C | Accent — benefit icons, hover states, active swatches |
| `--color-warm-grey` | #E8E4DE | Input backgrounds, footer background, FAQ background |
| `--color-text-body` | #444444 | Body copy, descriptions, card text |
| `--color-text-muted` | #888888 | Captions, metadata, price subtext |
| `--color-white` | #FFFFFF | Text overlaid on dark/hero backgrounds ONLY |

### 2.2 Typography

Two typefaces only. Load from Google Fonts. Never mix weights randomly — use the scale below.

| **Role** | **Font** | **Weight / Style** | **Example Usage** |
|---|---|---|---|
| Display / Hero H1 | Cormorant Garamond | 600 Italic | Hero headline, section pull-quotes |
| Heading H2–H3 | Cormorant Garamond | 500 Regular | Section headers, product name, card titles |
| Body / UI | Montserrat | 400 Regular | Paragraphs, descriptions, nav links, labels |
| Buttons / Caps | Montserrat | 600, Letter-Spacing 0.15em, UPPERCASE | CTA buttons, nav links, trust bar icons |
| Price | Montserrat | 500 | Product prices — never bold |
| Fine Print | Montserrat | 300 | Legal, footer copy, captions |

*Montblanc uses all-caps spaced letters (letter-spacing: 0.12–0.18em) for section labels, CTAs, and nav links. Replicate this pattern exactly for all uppercase UI text.*

### 2.3 Spacing & Layout

| **Grid** | 12-column CSS grid. Max content width: 1440px. Gutters: 24px desktop / 16px mobile. |
|---|---|
| **Section Padding** | Desktop: 96px top/bottom. Mobile: 56px top/bottom. |
| **Card Gap** | 24px between product cards. 16px on mobile. |
| **Border Radius** | 0px — no rounded corners anywhere. Sharp edges = luxury precision. |
| **Box Shadows** | None on product cards. Subtle shadow only on sticky nav on scroll: `0 2px 12px rgba(0,0,0,0.08)`. |
| **Transitions** | All hover/scroll transitions: 0.3s ease. No bounces or elastic animations. |

### 2.4 Imagery Art Direction

Photography is the most important brand asset. Wrong images will kill the premium feel instantly.

| **Background Tone** | Warm neutral — off-white linen, light stone, warm beige. Never clinical white, never grey studio. |
|---|---|
| **Lighting** | Soft diffused natural light. No harsh flash. No dark moody lighting. |
| **Product Shots** | Product centered, slightly from above at 15° angle. Generous negative space around product. |
| **Lifestyle Shots** | Person using the product in a calm, warm environment. Model demographic: 28–45, calm expression. |
| **What to Avoid** | Bright white studio shots. Heavy filters. Stock-photo-feeling smiles. Any harsh or cool-toned images. |
| **Aspect Ratios** | Hero: 16:9 (desktop) / 4:5 (mobile). Product cards: 4:3. Lifestyle editorial panels: 1:1 each. |

---

## 3. Navigation Bar — Detailed Spec

Critical component. Montblanc uses a two-state navbar: transparent over hero, white+shadow on scroll.

### State 1: Transparent (Hero Overlap)

| **Background** | Fully transparent. Hero image shows through. |
|---|---|
| **Logo text color** | #FFFFFF |
| **Nav link color** | #FFFFFF |
| **Icon color** | #FFFFFF (search, cart) |
| **CTA button** | White outline pill: border 1px #FFFFFF, text #FFFFFF, bg transparent. |
| **Height** | 72px desktop / 60px mobile |

### State 2: Scrolled (Opaque)

| **Background** | #F7F5F1 with `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` |
|---|---|
| **Logo text color** | #1A1A1A |
| **Nav link color** | #1A1A1A |
| **Icon color** | #1A1A1A |
| **CTA button** | Solid dark: bg #1A1A1A, text #FFFFFF. On hover: bg #3A3A3A. |
| **Transition** | `background-color 0.3s ease, color 0.3s ease` |
| **Position** | `position: sticky; top: 0; z-index: 100` |

### Layout Structure

| **Left zone (20%)** | "SnoozeLab" wordmark. Cormorant Garamond 500, 22px, letter-spacing 0.05em. |
|---|---|
| **Center zone (60%)** | Nav links: SHOP · WHY US · REVIEWS · ABOUT. Montserrat 600, 12px, uppercase, letter-spacing 0.14em. 32px gap between links. |
| **Right zone (20%)** | Search icon · Cart icon with item count · "SHOP NOW" CTA button. |

### Announcement Bar

| **Height** | 40px |
|---|---|
| **Background** | #1A1A1A |
| **Text** | Montserrat 400, 12px, #FFFFFF, centered. Rotating: "FREE SHIPPING ON ALL US ORDERS" / "7-NIGHT TRIAL — RISK FREE" / "4.9 STARS · 10,000+ CUSTOMERS" |

---

## 4. Homepage — Section-by-Section Specs

### 4.1 Hero Section

Full-viewport (100vh), full-bleed.

| **Layout** | 100vw × 100vh. Image fills entire viewport. |
|---|---|
| **Image Treatment** | `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)` |
| **Text Position** | Centered horizontally. Lower 35% of viewport. |
| **Headline** | "Relief Engineered for Your Body." — Cormorant Garamond 600 Italic, 72px desktop / 44px mobile, #FFFFFF |
| **Subheadline** | "Four products. One mission. Wake up without the pain." — Montserrat 400, 16px, #FFFFFF, opacity 0.85 |
| **CTA** | "SHOP THE COLLECTION" — Montserrat 600, 13px, UPPERCASE, letter-spacing 0.16em, #FFFFFF, underline only |

### 4.2 Trust Bar

| **Height** | 64px desktop / auto mobile |
|---|---|
| **Background** | #E8E4DE |
| **Items** | 🚚 FREE US SHIPPING · 🔄 30-NIGHT TRIAL · ⭐ 4.9 / 5 RATING · 🔒 SECURE CHECKOUT |

### 4.3 Find Your Relief — Product Carousel

Custom section `sections/find-your-relief.liquid`.

| **Behavior** | All 4 cards in a single row on desktop (≥1024px). Horizontal scroll carousel with arrows on mobile. |
|---|---|
| **Section label** | "THE COLLECTION" — Montserrat 600, 11px, UPPERCASE, letter-spacing 0.18em, #888888 |
| **Section headline** | "Find Your Relief" — Cormorant Garamond 500, 36px |
| **Subtitle** | "Choose the product that's right for you." |
| **Card** | Product image (4:3), badge pill (Bestseller / New / Popular), product name, short description, price, "SHOP NOW" button |
| **Card hover** | Subtle shadow lift, 0.3s ease. No zoom. |
| **Schema** | 4 product pickers + 4 badge text settings + heading/subtitle |

### 4.4 Which Product Is Right for You?

Custom section `sections/which-product-quiz.liquid`.

| **Background** | #1A1A1A |
|---|---|
| **Heading** | "Which Product Is Right for You?" — Cormorant Garamond 500, white |
| **Buttons** | 4 pill buttons, one per product. Default: transparent bg, white border, white text. Hover: bg #8A9E8C, border #8A9E8C, text #1A1A1A. |
| **Behavior** | Each button navigates directly to the product URL. No quiz logic. |
| **Schema** | Heading, subtitle, 4 product pickers, 4 icon/label text fields (e.g. "😣 Neck & Cervical") |

### 4.5 Benefits / Why SnoozeLab

| **Layout** | 4-column grid desktop, 2-column tablet, 1-column mobile |
|---|---|
| **Per benefit card** | Icon (sage color), headline (Cormorant 500, 22px), body (Montserrat 400, 14px) |
| **Benefits** | Clinically Designed · Memory Foam Technology · 30-Night Trial · Free US Shipping |

### 4.6 About SnoozeLab

Custom section `sections/about-snoozelab.liquid`. Two-part layout:

**Part 1 — Brand Story**

| **Layout** | Text left (eyebrow + heading + paragraph + CTA), image right. 2-column split. |
|---|---|
| **Background** | #F7F5F1 |
| **Eyebrow** | "OUR STORY" — Montserrat 600, 11px, UPPERCASE, letter-spacing 0.15em, #8A9E8C |
| **Heading** | Cormorant Garamond 500, 36px |

**Part 2 — Product Highlights**

| **Layout** | 2×2 grid, each block: small product image left (120px), text right |
|---|---|
| **Per block** | Product name (Cormorant 500), 2–3 line description, one benefit line with ✓ prefix |
| **Behavior** | Clicking a block navigates to the product URL |
| **Schema** | Blocks-based — merchant can add/remove/reorder from theme editor |

### 4.7 Social Proof / Reviews

| **Layout** | Aggregate star rating at top, 3-column review cards below |
|---|---|
| **Aggregate** | Large "4.9" + 5 gold stars + "Based on X reviews" |
| **Review card** | No shadow. 1px solid #E8E4DE border. Stars, review text (3 lines), reviewer name, location. |
| **App** | Loox — embed carousel widget |

### 4.8 Lifestyle Editorial Banner

Two full-height image panels side-by-side with text overlay.

| **Layout** | Full-width. Two panels at 50% each. Height: 560px desktop / stacked 280px mobile. |
|---|---|
| **Panel 1** | "FOR NECK & CERVICAL PAIN" — links to Butterfly Pillow or Cervical Correction Pillow |
| **Panel 2** | "FOR BACK & LUMBAR PAIN" — links to Lumbar Support Pillow or Neck Massager |

### 4.9 FAQ Accordion

| **Background** | #F7F5F1 |
|---|---|
| **Layout** | Single column, max-width 760px, centered |
| **FAQs to cover** | Which product is right for me? · How long until I feel relief? · What is the return policy? · Do these work for all sleep positions? · How do I use the neck massager? |

### 4.10 Email Capture

| **Background** | #1A1A1A (full-width dark section) |
|---|---|
| **Headline** | "Wake Up Without the Pain." — Cormorant 600 Italic, 42px, #FFFFFF |
| **Subtext** | "Get 10% off your first order." — Montserrat 400, 15px, #FFFFFF, opacity 0.75 |
| **Integration** | Klaviyo list subscribe. Inline success message. No border-radius on input or button. |

---

## 5. Product Pages

Each of the 4 products has its own Shopify product page. All follow the same template.

### 5.1 Page Layout

| **Grid** | Two columns. Left: 58% (image gallery). Right: 42% (sticky purchase panel). 64px gap. |
|---|---|
| **Right column** | `position: sticky; top: 96px` |
| **Mobile** | Single column. Images first, purchase panel below. |

### 5.2 Image Gallery

| **Primary image** | 4:3 aspect ratio. Click to zoom (lightbox). |
|---|---|
| **Thumbnails** | 4–6 thumbnails, 80×80px, 8px gap. Selected: 2px solid #1A1A1A. |

### 5.3 Purchase Panel

| **Breadcrumb** | Home > [Product Name] — Montserrat 400, 12px, #888888 |
|---|---|
| **Product name** | Cormorant 500, 32px, #1A1A1A |
| **Short description** | Montserrat 400, 14px, #666666. 1–2 lines specific to the product. |
| **Price** | Montserrat 500, 26px, #1A1A1A. "Free US Shipping" note in sage below. |
| **Add to Cart** | Full-width. Height 52px. Bg #1A1A1A. "ADD TO CART" Montserrat 700, 13px, UPPERCASE, letter-spacing 0.16em. Hover: bg #3A3A3A. Border-radius: 0. |
| **Trust badges** | "30-Night Trial" · "Secure Checkout" · "4.9 Rating" |

### 5.4 Product-Specific Content

| **Butterfly Pillow** | Variant selector for color (if applicable). Key features: cervical alignment, memory foam, cooling cover. |
|---|---|
| **Lumbar Support Pillow** | Key features: lumbar curve support, non-slip base, universal fit. |
| **Cervical Correction Pillow** | Key features: posture correction, stretch guidance, daily use routine. |
| **Neck Massager** | Additional controls UI spec: heat settings, intensity levels, timer. Safety notes section. |

### 5.5 Cross-Sell

Below the purchase panel or after reviews:

| **Label** | "COMPLETE YOUR RELIEF ROUTINE" |
|---|---|
| **Logic** | Show 2 other products from the collection (exclude current product) |
| **Card style** | Same as homepage product cards |

---

## 6. Interactions & Animation Rules

Restraint is a luxury signal. Every animation must feel effortless, not performative.

| **Element** | **Animation** | **Spec** |
|---|---|---|
| Navbar (transparent → white) | Crossfade | `background 0.3s ease, color 0.3s ease` |
| Hero image load | Fade in | `opacity: 0 → 1` over 0.5s |
| Product card hover | Shadow lift only | `box-shadow 0.3s ease` — no zoom, no image movement |
| FAQ accordion | Height expand | `max-height` transition 0.25s ease |
| Add to Cart success | Button flash | bg briefly flashes #8A9E8C, text → "ADDED ✓", resets after 2s |
| Scroll-reveal sections | Subtle fade+translate | `opacity 0→1, translateY 20px→0`, 0.5s ease. IntersectionObserver. No delay chains. |
| Quiz buttons hover | Fill | bg #8A9E8C, 0.3s ease |
| Mobile menu | Slide in from right | `translateX(100%) → 0` over 0.3s ease |

*Never use: bounce, elastic spring, parallax, auto-playing video, confetti, pop-up overlays within 5 seconds of load, rotating 3D effects, typewriter animations.*

---

## 7. Mobile Design Specifications

| **Breakpoints** | Mobile: < 768px · Tablet: 768–1023px · Desktop: ≥ 1024px |
|---|---|
| **Find Your Relief** | Horizontal scroll carousel with arrows. Cards ~280px wide. |
| **Which Product Quiz** | Buttons wrap to 2×2 grid. Full-width on smallest screens. |
| **About section** | Brand story stacks (image below text). Product highlights go to 1 column. |
| **Product grid** | 1 column, cards full-width. |
| **Touch targets** | Minimum 44×44px for all interactive elements. |
| **Typography scale** | Reduce desktop sizes by ~25% on mobile. Never below 13px for body text. |

---

## 8. Shopify Implementation Notes

### 8.1 Custom Sections Built

| **File** | **Purpose** |
|---|---|
| `sections/find-your-relief.liquid` | 4-product carousel/grid with badges and Shop Now buttons |
| `sections/which-product-quiz.liquid` | Dark section with 4 direct product navigation buttons |
| `sections/about-snoozelab.liquid` | Brand story split + 4-product highlight blocks |

### 8.2 Apps & Integrations

| **Category** | **App** | **Notes** |
|---|---|---|
| Reviews | Loox | Photo/video reviews. Carousel widget for homepage. Star rating on product pages. |
| Email | Klaviyo | Welcome flow, abandoned cart (1hr delay), post-purchase (D+2), win-back (D+45). |
| Upsells | ReConvert | Post-purchase cross-sell: show complementary products from the collection. |
| Analytics | GA4 + Meta Pixel | Install via Shopify Customer Events. Fire on: PageView, ViewContent, AddToCart, Purchase. |
| Trust/CRO | Vitals | Sticky ATC button, trust badges, recently viewed. |

### 8.3 SEO Notes

Each product page needs a unique meta title and description targeting its specific pain point:
- Butterfly Pillow → "ergonomic cervical pillow", "memory foam neck pillow"
- Lumbar Pillow → "lumbar support pillow", "lower back pain pillow"
- Cervical Correction → "cervical correction pillow", "forward head posture pillow"
- Neck Massager → "infrared neck massager", "heating neck massager pain relief"

---

## 9. Developer & Designer Handoff Checklist

### Design Deliverables

- Figma file with desktop + mobile frames for homepage + 4 product pages
- All 4 product hero images (4:3) on warm neutral backgrounds
- 2 lifestyle editorial images for twin panel section (1:1 each)
- Brand logo SVG (dark + white versions)

### Dev Acceptance Criteria

- Navbar transparent/white transition works on all pages with hero
- Find Your Relief: 4 cards on one row desktop, carousel on mobile
- Which Product Quiz: dark bg, sage hover, direct product navigation
- About section: brand story split + product highlight blocks render correctly
- Cross-sell shows 2 products (excludes current product) on all product pages
- All hover states match spec (0.3s ease, no zoom, no bounce)
- Loox reviews carousel renders on homepage
- Klaviyo email capture submits with inline success message
- GA4 + Meta Pixel fire correctly on all key events
- Google PageSpeed ≥ 70 mobile, ≥ 85 desktop

---

## Appendix A: Montblanc Design Reference

> **Key insight:** The premium feel comes from what is ABSENT — no bright accent colors, no rounded corners, no animations, no cluttered UI, no hard sales language. The restraint IS the brand.

- No hover zoom on product images
- No card shadows or borders on product carousels
- All-caps spaced typography for labels and CTAs
- Warm off-white background (never pure white)
- Two-state navbar (transparent hero → opaque scrolled)
- Short prose descriptions — never bullet points on product pages
