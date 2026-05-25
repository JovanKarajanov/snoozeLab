# SNOOZELAB
*Website Design & Development PRD*

Ergonomic Memory Foam Butterfly Pillow  ·  $66.99 – $78.99  ·  4 Colors with free pillowcases for each color

Version 2.0  ·  May 2026  ·  Confidential

---

## 1. Project Overview

SnoozeLab is a direct-to-consumer premium sleep brand selling an Ergonomic Memory Foam Butterfly Pillow via Shopify. The site must feel luxury-minimal — closer to Montblanc than Casper. Every pixel should communicate precision and trust, not bounce and lifestyle fluff.

| **Platform** | Shopify (Dawn free or Prestige $350 — Prestige strongly preferred) |
|---|---|
| **Hero Product** | Ergonomic Memory Foam Butterfly Pillow |
| **Price Range** | $66.99 (standard, 6 colors) · $78.99 (premium, 2 colors) |
| **Variants** | 8 color options with individual product images per color |
| **Target Market** | US customers, 25–55, seeking premium ergonomic sleep solutions |
| **Design Inspiration** | Montblanc.com — see annotated screenshots in Appendix A |
| **Tone of Voice** | Authoritative, clinical-warm. "Engineered for your neck." — never "So comfy!" |

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
| **Product Shots** | Pillow centered, slightly from above at 15° angle. Generous negative space around product. |
| **Lifestyle Shots** | Person sleeping peacefully. Morning wake-up. Warm bedroom. Model demographic: 28–45, calm expression. |
| **Color Matching** | Each variant has its own hero shot with the pillow in that specific color on a complementary background. |
| **What to Avoid** | Bright white studio shots. Heavy filters. Stock-photo-feeling smiles. Any harsh or cool-toned images. |
| **Aspect Ratios** | Hero: 16:9 (desktop) / 4:5 (mobile). Product cards: 4:3. Lifestyle editorial panels: 1:1 each. |

---

## 3. Navigation Bar — Detailed Spec

Critical component. Montblanc uses a two-state navbar: transparent over hero, white+shadow on scroll. This creates the editorial immersive feel. Must be implemented exactly.

### State 1: Transparent (Hero Overlap)

| **Background** | Fully transparent. Hero image shows through. |
|---|---|
| **Logo text color** | #FFFFFF |
| **Nav link color** | #FFFFFF |
| **Icon color** | #FFFFFF (search, cart) |
| **CTA button** | White outline pill: border 1px #FFFFFF, text #FFFFFF, bg transparent. |
| **Height** | 72px desktop / 60px mobile |

### State 2: Scrolled (Opaque)

| **Background** | #FFFFFF with `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` |
|---|---|
| **Logo text color** | #1A1A1A |
| **Nav link color** | #1A1A1A |
| **Icon color** | #1A1A1A |
| **CTA button** | Solid dark pill: bg #1A1A1A, text #FFFFFF. On hover: bg #3A3A3A. |
| **Transition** | `background-color 0.3s ease, color 0.3s ease` — smooth crossfade, no flash. |
| **Position** | `position: sticky; top: 0; z-index: 100` |

### Layout Structure

Three zones, identical to Montblanc desktop structure:

| **Left zone (20%)** | "SnoozeLab" wordmark. Cormorant Garamond 500, 22px, letter-spacing 0.05em. |
|---|---|
| **Center zone (60%)** | Nav links: SHOP · WHY US · REVIEWS · ABOUT. Montserrat 600, 12px, uppercase, letter-spacing 0.14em. 32px gap between links. |
| **Right zone (20%)** | Search icon (20px) · Cart icon with item count badge · "SHOP NOW" CTA button. Aligned right, 20px gap between elements. |

*Montblanc uses no hamburger on desktop — all links visible. On mobile (< 768px): hamburger replaces center links. Logo stays left. Cart stays right. Full-screen slide-in menu on mobile with the same link style.*

### Announcement Bar (Optional)

| **Height** | 40px |
|---|---|
| **Background** | #1A1A1A |
| **Text** | Montserrat 400, 12px, #FFFFFF, centered. Example: "FREE SHIPPING ON ALL US ORDERS" |
| **Behavior** | Static or slow-rotating carousel (3s interval) for 2–3 messages. No flashy animation. |

---

## 4. Homepage — Section-by-Section Specs

### 4.1 Hero Section

Full-viewport (100vh), full-bleed. This is the most critical section. Montblanc keeps it deceptively simple — one stunning image, minimal centered text, one CTA. Do not clutter.

| **Layout** | 100vw × 100vh. Image fills entire viewport. No margins or padding around image. |
|---|---|
| **Image Treatment** | Subtle dark overlay gradient: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)`. This ensures text legibility on any photo. |
| **Text Position** | Centered horizontally. Vertically positioned in lower 35% of viewport (not dead center). |
| **Headline** | "Sleep Engineered for Your Neck." — Cormorant Garamond 600 Italic, 72px desktop / 44px mobile, #FFFFFF, `text-shadow: 0 1px 12px rgba(0,0,0,0.2)`. |
| **Subheadline** | Optional 1 line: "Memory foam. 8 colors. Free US shipping." — Montserrat 400, 16px, #FFFFFF, opacity 0.85. 16px below headline. |
| **CTA** | "SHOP THE PILLOW" — Montserrat 600, 13px, UPPERCASE, letter-spacing 0.16em, #FFFFFF. Style: underline only (no button box). 24px below subheadline. Underline: 1px solid #FFFFFF. |
| **CTA Hover** | Opacity fades to 0.65. No color change. No underline removal. |
| **Mobile Crop** | Portrait crop focused on upper 60% of desktop image. Headline font: 40px. Keep text readable above fold. |

*Reference: Montblanc hero uses bottom-left text with a clean "Discover Now" button (white outline, no fill). SnoozeLab adapts this to centered + underline-link CTA per the PRD brief.*

### 4.2 Trust Bar

Thin strip below hero. Signals legitimacy immediately before user scrolls.

| **Height** | 64px desktop / auto mobile (wraps to 2 rows of 2) |
|---|---|
| **Background** | #E8E4DE (`--color-warm-grey`) |
| **Border** | 1px solid #C8BFB0 (`--color-stone`) top and bottom |
| **Layout** | 4 items, evenly spaced with `flexbox justify-content: space-evenly`. Centered vertically. |
| **Icon size** | 18px stroke icons (Heroicons or Feather). Color: #1A1A1A. |
| **Text** | Montserrat 600, 11px, UPPERCASE, letter-spacing 0.12em, #1A1A1A. One line only. |
| **Items** | 🚚 FREE US SHIPPING · 🔄 30-NIGHT TRIAL · ⭐ 4.9 / 5 RATING · 🔒 SECURE CHECKOUT |

### 4.3 Product Showcase

Mirrors Montblanc's "Precious Gifts to Celebrate" product carousel. Horizontal scroll on mobile, 4-up grid on desktop.

| **Section label** | "THE PILLOW" — Montserrat 600, 11px, UPPERCASE, letter-spacing 0.18em, #888888. Centered. 12px below = section headline. |
|---|---|
| **Section headline** | "Ergonomic Memory Foam Butterfly Pillow" — Cormorant Garamond 500, 36px, #1A1A1A. Centered. |
| **Background** | #F7F5F1 (`--color-off-white`) |
| **Card layout** | 4 columns desktop, 2 columns tablet, 1.2 visible on mobile (peek scroll). No card borders or shadows. |
| **Card image** | Product photo, 4:3 ratio. Clean neutral bg. Full-width within card. No border-radius. |
| **Card text** | Color name: Montserrat 400, 13px, #888888. Product name: Montserrat 500, 14px, #1A1A1A. Price: Montserrat 500, 15px, #1A1A1A. 8px vertical gap between each. |
| **Color swatches** | 8 small circles (12px diameter), 4px gap, centered below card text. Active swatch: 2px ring offset 2px, color `--color-ink`. |
| **Quick-add** | On card hover: "ADD TO CART" pill button appears at bottom of image. Bg #1A1A1A, text #FFFFFF, Montserrat 600 11px. Transition: opacity 0 → 1 over 0.25s. |
| **CTA link** | "Shop All Colors →" — Montserrat 600, 12px, uppercase, letter-spacing 0.14em, #1A1A1A, underlined. Centered below carousel. |

*Montblanc product cards: no hover zoom on image, no shadows, no rounded corners. Just clean image, name, price. Replicate this restraint exactly.*

### 4.4 Benefits / Why SnoozeLab

| **Layout** | 3-column grid desktop, stacked mobile. White bg (#FFFFFF or card bg #F7F5F1). |
|---|---|
| **Section label + headline** | Same pattern as 4.3 — small-caps label above, serif headline. |
| **Per card** | Icon (24px, stroke) centered top. Headline: Cormorant 500, 22px, #1A1A1A, centered. Body: Montserrat 400, 14px, #666666, centered, max-width 240px. 20px gaps between elements. |
| **Card border** | 1px solid #E8E4DE (very subtle). No shadow. No radius. |
| **Card padding** | 40px top/bottom, 32px left/right. |
| **Icon color** | `--color-sage` (#8A9E8C) |

### 4.5 Social Proof / Reviews

| **Layout** | Centered. Star rating aggregate (large) at top, then 3-column review cards below. |
|---|---|
| **Aggregate stars** | Cormorant 600, 48px "4.9" left, 5 gold star SVGs right, "Based on 127 reviews" in Montserrat 400 12px #888888 below. |
| **Review card** | No shadow. 1px solid #E8E4DE border. Padding 32px. Bg #FFFFFF. |
| **Card content** | Stars (gold, 16px) top. Review text: Montserrat 400, 14px, #444444, max 3 lines with expand. Reviewer name: Montserrat 600, 13px, #1A1A1A. Location: Montserrat 400, 12px, #888888. |
| **Review photo** | Circle avatar, 40px, top-right of card or left of name. |
| **App** | Use Loox — their carousel widget can be embedded directly. |

### 4.6 Lifestyle Editorial Banner

Two full-height image panels side-by-side with text overlay (Montblanc "Twin Promo" pattern).

| **Layout** | Full-width. Two panels at 50% each, no gap between them. Height: 560px desktop / 400px mobile (stacked). |
|---|---|
| **Image treatment** | Dark overlay gradient on each: `rgba(0,0,0,0)` to `rgba(0,0,0,0.45)` from top to bottom. |
| **Text** | Bottom-left of each panel. Label: Montserrat 600, 11px, UPPERCASE, letter-spacing 0.16em, #FFFFFF, opacity 0.8. Headline: Cormorant 500 Italic, 36px, #FFFFFF. CTA link: "Explore →" same style as hero CTA. |
| **Panel 1** | "FOR SIDE SLEEPERS" — lifestyle image of person sleeping on side. Links to product page. |
| **Panel 2** | "FOR BACK SLEEPERS" — lifestyle image of person sleeping on back. Links to product page. |
| **Mobile** | Stack vertically. Each panel 280px height. Full-width. |

### 4.7 FAQ Accordion

| **Background** | #F7F5F1 |
|---|---|
| **Layout** | Single column, max-width 760px, centered. |
| **Item height (closed)** | 64px. 1px bottom border #E8E4DE. |
| **Question text** | Montserrat 500, 15px, #1A1A1A. |
| **Expand icon** | + / — toggle, 20px, right-aligned, #888888. Rotates on expand: 0deg → 45deg, 0.2s ease. |
| **Answer text** | Montserrat 400, 14px, #666666. Padding: 0 0 24px 0. Animates height: 0 → auto over 0.25s. |
| **"See all FAQs" link** | Montserrat 600, 12px, UPPERCASE, letter-spacing 0.14em, underlined. Below last item, centered. |

### 4.8 Email Capture

| **Background** | #1A1A1A (full-width dark section) |
|---|---|
| **Headline** | "Sleep better, starting tonight." — Cormorant 600 Italic, 42px, #FFFFFF. Centered. |
| **Subtext** | "Get 10% off your first order." — Montserrat 400, 15px, #FFFFFF, opacity 0.75. |
| **Input + button** | Side-by-side on desktop, stacked on mobile. Input: bg #FFFFFF, 1px solid #333, Montserrat 400, 14px. Button: bg #FFFFFF, text #1A1A1A, Montserrat 600, 13px, UPPERCASE, letter-spacing 0.12em. No border-radius on either. |
| **Input placeholder** | "Enter your email address" — color #AAAAAA |
| **Integration** | Klaviyo list subscribe endpoint. Show inline success: "You're in — check your inbox." No page reload. |
| **Section padding** | 80px top/bottom |

---

## 5. Product Page — Detailed Spec

Primary conversion page. Mirrors the Montblanc product detail page (image gallery left, sticky purchase panel right).

### 5.1 Page Layout

| **Grid** | Two columns. Left: 58% width (image gallery). Right: 42% width (purchase panel). 64px gap. |
|---|---|
| **Left column behavior** | Images scroll normally. |
| **Right column behavior** | `position: sticky; top: 96px` (below navbar). Stays in view while user scrolls images. |
| **Max content width** | 1320px, centered. |
| **Mobile** | Single column. Images first (full-width carousel). Purchase panel below, normal flow. |

### 5.2 Image Gallery (Left)

| **Primary image** | Large, 4:3 aspect ratio. 100% column width. Click to zoom (lightbox, no new page). |
|---|---|
| **Thumbnail strip** | 4–6 thumbnails, 80×80px, below main image. 8px gap. Selected: 2px solid #1A1A1A border. Unselected: 1px solid #E8E4DE. |
| **Image switching** | Click thumbnail → main image crossfades (opacity transition 0.2s). |
| **Color switching** | Selecting a color swatch in right panel → updates entire gallery to that color's images. |
| **Montblanc pattern** | Small dots on left edge of image, clicking scrolls to that image in sequence. |

### 5.3 Purchase Panel (Right — Sticky)

| **Breadcrumb** | Home > Butterfly Pillow — Montserrat 400, 12px, #888888. Top of panel. |
|---|---|
| **Product name** | Cormorant 500, 32px, #1A1A1A. "Ergonomic Memory Foam Butterfly Pillow" |
| **Short description** | Montserrat 400, 14px, #666666. 1–2 lines. E.g. "Cervical support with adaptive memory foam. Available in 8 colors." |
| **Price** | Montserrat 500, 26px, #1A1A1A. Updates when variant changes. "$66.99" or "$78.99" |
| **Price note** | "Free US Shipping" — Montserrat 400, 12px, `--color-sage`. Below price. |
| **Color selector label** | "COLOR: WARM STONE" — Montserrat 600, 11px, UPPERCASE, letter-spacing 0.12em. Updates dynamically with selected color name. |
| **Color swatches** | 8 circles, 32px diameter, 8px gap. border-radius: 50%. Selected: 3px solid #1A1A1A ring with 2px offset. Unselected: 1px solid #C8BFB0. Tooltip on hover: color name. |
| **Add to Cart button** | Full-width. Height 52px. Bg #1A1A1A. Text: "ADD TO CART" Montserrat 700, 13px, UPPERCASE, letter-spacing 0.16em, #FFFFFF. Hover: bg #3A3A3A. Border-radius: 0. |
| **Secondary action** | "Save to Wishlist" text link below ATC. Montserrat 400, 13px, #888888, underlined. |
| **Trust badges** | 3 inline small badges below ATC: checkmark + "30-Night Trial" · lock + "Secure Checkout" · star + "4.9 Rating". Montserrat 400, 12px, #666666. |

### 5.4 Below-Fold Product Detail

| **Key Features Grid** | 4 cards, 2×2 grid. Each card: close-up product photo (square, 1:1) left, text right. Title: Cormorant 500, 20px. Body: Montserrat 400, 13px, #666666. No card border on this section — open layout. |
|---|---|
| **Full Description** | Montserrat 400, 15px, #444444, line-height 1.7. Max-width 640px. Separated from feature grid by 1px divider. |
| **Care & Shipping** | Accordion items — same style as homepage FAQ. |
| **Reviews Section** | Loox widget embedded. Full-width. Same review card design as homepage. |
| **Cross-sell** | "Complete Your Sleep Setup" — 2-product row (pillow spray, sleep mask). Same card style as product showcase. |

---

## 6. Interactions & Animation Rules

Montblanc uses almost no animation. Restraint is a luxury signal. Every animation must feel effortless, not performative.

| **Element** | **Animation** | **Spec** |
|---|---|---|
| Navbar (transparent → white) | Crossfade | `background 0.3s ease, color 0.3s ease` |
| Hero image load | Fade in | `opacity: 0 → 1` over 0.5s on page load |
| Product card hover | None on image | Only quick-add button fades in: `opacity 0.3s ease` |
| Color swatch selection | Ring transition | `border 0.15s ease` |
| Gallery image switch | Crossfade | `opacity 0.2s ease` |
| FAQ accordion open | Height expand | `max-height` transition 0.25s ease, icon rotate 0.2s ease |
| Add to Cart success | Button flash | bg briefly flashes #8A9E8C (sage), text → "ADDED ✓", resets after 2s |
| Scroll-reveal sections | Subtle fade+translate | `opacity 0→1, translateY 20px→0`, 0.5s ease. On IntersectionObserver trigger. NO delay chains. |
| Page transitions | None | Shopify default. No custom page transitions needed. |
| Mobile menu open | Slide in from right | `translateX(100%) → 0` over 0.3s ease |

*Never use: bounce, elastic spring, parallax on product images, auto-playing video in hero, confetti, pop-up overlays within 5 seconds of page load, rotating 3D effects, or typewriter text animations. These kill the premium feel.*

---

## 7. Mobile Design Specifications

60%+ of traffic will be mobile. Mobile must be a first-class experience — not a shrunk desktop.

| **Breakpoints** | Mobile: < 768px · Tablet: 768–1023px · Desktop: ≥ 1024px |
|---|---|
| **Navbar mobile** | Logo centered. Hamburger icon left. Cart icon right. Height: 60px. Same 2-state (transparent/white) behavior. |
| **Mobile menu** | Full-screen overlay. Bg #F7F5F1. Links: Cormorant 500, 32px, stacked with 32px gap. Close ✕ top-right. Slide in from right 0.3s ease. |
| **Hero mobile** | 100svh (use svh for mobile browsers). Text at bottom 30%. Headline: 40px. CTA link: 14px. |
| **Product grid mobile** | 1 column, cards full-width. Swatch dots below image. Quick-add visible by default (no hover). |
| **Product page mobile** | Gallery: swipeable horizontal carousel (snap scroll). Full-width thumbnails replaced by dot indicators. Purchase panel below gallery, sticky ATC button at bottom of viewport (fixed, 56px height, full-width). |
| **Touch targets** | Minimum 44×44px for all interactive elements. Swatch circles: at least 36px on mobile. |
| **Typography scale** | Reduce desktop sizes by ~25% on mobile. Never below 13px for body text. |

---

## 8. Shopify Implementation Notes

### 8.1 Theme Recommendation

Prestige theme ($350 one-time) is strongly recommended. It natively supports: sticky purchase panel, horizontal product carousel with swatches, full-bleed hero with transparent navbar, editorial twin panels, and advanced color variant image switching. Dawn (free) can achieve the same results but requires significantly more custom code.

| **Prestige — key sections to use** | Hero with transparency, Product showcase carousel, Editorial banners (twin promo), Feature grid, Newsletter section |
|---|---|
| **Custom CSS overrides needed** | Color palette tokens, typography (swap to Cormorant + Montserrat), border-radius: 0 globally, card border colors, trust bar styling |
| **Custom JS needed** | Navbar transparent→white scroll behavior (if not built-in), scroll-reveal for sections, quick-add overlay on product cards |
| **Shopify metafields** | Use metafields for: sleep position tags (side/back), color notes, pillow material info — feeds into product page detail section |

### 8.2 Apps & Integrations

| **Category** | **App** | **Notes** |
|---|---|---|
| Reviews | Loox | Photo/video reviews. Carousel widget for homepage. Star rating on product page. |
| Email | Klaviyo | Welcome flow, abandoned cart (1hr delay), post-purchase (D+2), win-back (D+45). |
| Upsells | ReConvert | Post-purchase page: add pillow spray or sleep mask at discounted price. |
| Analytics | GA4 + Meta Pixel | Install both via Shopify Customer Events. Verify on GTM. |
| Trust/CRO | Vitals | Sticky ATC button, recently viewed, trust badges, urgency timer (optional). |
| SEO | Plug in SEO | Or use built-in Shopify SEO + manual meta tags per page. |

---

## 9. Developer & Designer Handoff Checklist

### Design Deliverables Needed from Designer

- Figma file with desktop + mobile frames for all 6 pages
- Component library: navbar (both states), product card, review card, FAQ item, trust bar, color swatch selector
- All 8 color variant pillow images (4:3 product shot + 1 lifestyle each = 16 images minimum)
- Hero lifestyle image (16:9 desktop + 4:5 mobile crop)
- 2× editorial lifestyle images for Twin Panel section (1:1 each)
- Brand logo in SVG format (dark version + white version)
- Icon set: truck, refresh, star, lock, cervical, foam, cooling, palette (all matching style — recommend Heroicons outline)

### Dev Acceptance Criteria

- Navbar transparent/white transition works on all pages with hero
- Color swatch selection updates image gallery, price, and color name label simultaneously
- Sticky purchase panel works correctly on all screen heights
- All hover states match spec (quick-add, CTA underline, swatch ring)
- Trust bar wraps correctly to 2×2 on mobile
- FAQ accordion animates smoothly without layout jump
- Loox reviews carousel renders in homepage section
- Klaviyo email capture submits and shows inline success message
- Google PageSpeed score ≥ 70 mobile, ≥ 85 desktop
- Meta Pixel and GA4 fire on: PageView, ViewContent (product page), AddToCart, InitiateCheckout, Purchase

---

## Appendix A: Montblanc Design Reference Analysis

The following observations are extracted directly from the Montblanc.com screenshots provided. Use these as the design benchmark.

### Homepage (Screenshots 1 & 3)

| **Navbar** | Centered logo. Nav links: small caps, generous spacing. Icons right. Clean sans-serif throughout. |
|---|---|
| **Hero (Screenshot 3)** | Full-bleed overhead lifestyle photo (warm wood tones). Bottom-left text block — NOT centered. Small CAPS section label. "Discover Now" white-outline button (no fill). Minimal overlay — image does most of the work. |
| **Product Carousel** | "PRECIOUS GIFTS TO CELEBRATE" — small caps label, no decorative elements. Cards: image + product name (2 lines) + price. NO card borders, NO shadows, NO hover zoom. Clean negative space between cards. |
| **Background color** | Warm greige/linen — NOT white. Hex approximately #F4F1EC. This single choice elevates the entire page feel. |
| **Category Tiles row** | Square equal tiles, no gap, centered label + serif headline. Editorial feel. |

### Product Page (Screenshot 2)

| **Gallery** | Large image, clean light grey background (#F0EEEC approx). Left-side dot navigation (vertical, 4 dots). No thumbnails — just dots. |
|---|---|
| **Purchase panel** | Right side. Clean white bg. Breadcrumb top-left in small grey text. Product name: ALL CAPS (SnoozeLab should use mixed-case, more approachable). Price: clean, medium weight, no decoration. |
| **Variant selector** | "1. Select Size" label + dropdown. Very minimal — no custom styled buttons. SnoozeLab should upgrade this to visual color swatches. |
| **CTA buttons** | Two buttons stacked: outline ("Personalize") then solid black ("Add To Cart"). Full-width. Zero border-radius. Perfect model to replicate. |
| **Description** | Short paragraph of flowing prose text. NOT bullet points. Italic, literary feel. Links to "See Full Details". |
| **Trust below CTA** | "Check availability in boutiques" + phone number. Adapt for SnoozeLab: shipping estimate + return policy links. |

> **Key insight from Montblanc analysis:** The premium feel comes from what is ABSENT — no bright accent colors, no rounded corners, no animations, no cluttered UI elements, no hard sales language. The restraint IS the brand.
