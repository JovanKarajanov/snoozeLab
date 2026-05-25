# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Local development (requires Shopify CLI and a connected store):**
```sh
shopify theme dev --store your-store.myshopify.com
```

**Lint with Theme Check:**
```sh
shopify theme check
```

**Push theme to store:**
```sh
shopify theme push --store your-store.myshopify.com
```

**Format code (Prettier):**
```sh
prettier --write "**/*.{js,css,json,liquid}"
```

## Architecture

Dawn is an **Online Store 2.0** Shopify theme. It is server-rendered via Liquid with minimal, framework-free JavaScript — no build step, no bundler.

### Directory roles

- `layout/` — Base HTML shells. `theme.liquid` wraps every storefront page; `password.liquid` is used when the store is password-protected.
- `templates/` — JSON files that declare which sections appear on each page type (product, collection, index, etc.). `gift_card.liquid` is the only Liquid template; everything else is JSON-driven.
- `sections/` — The primary unit of customization. Each `.liquid` file is a self-contained page section with its own `{% schema %}` block that defines merchant-editable settings and blocks. Files prefixed `main-` are the core content sections for each page type.
- `snippets/` — Reusable Liquid partials rendered via `{% render 'snippet-name' %}`. Not merchant-configurable on their own; they receive variables from the section that calls them.
- `assets/` — Static files served directly. CSS is per-component (e.g. `component-card.css`); JS is vanilla custom elements (e.g. `cart-drawer.js`, `facets.js`). No bundling — files are loaded individually via `{{ 'file.js' | asset_url | script_tag }}` in Liquid.
- `config/settings_schema.json` — Defines all theme-wide settings (colors, typography, layout) that appear in the Shopify theme editor. `settings_data.json` stores the saved values.
- `locales/` — Translation strings. `en.default.json` is the source of truth; other locale files are variants.

### Key patterns

**Custom elements over event listeners:** JavaScript is implemented as native Web Components (e.g. `<cart-drawer>`, `<predictive-search>`). Defined in `assets/global.js` and individual `assets/*.js` files. No framework.

**Section schema drives the editor:** Every section has a `{% schema %}` JSON block at the bottom of the file declaring `settings` (theme-editor controls) and `blocks` (repeatable sub-elements). Template JSON files reference sections by name and store their block/setting configurations.

**CSS is component-scoped:** Each UI component has its own CSS file (`component-*.css`). `base.css` contains global resets and CSS custom properties (design tokens). Loaded on-demand per section that needs them.

**Server renders everything first:** Ajax calls (cart updates, predictive search, product variant changes) always re-render Liquid server-side and swap HTML — they don't compute or format data on the client.

**Section groups:** `sections/header-group.json` and `sections/footer-group.json` are special — they define the sections that are "sticky" across all templates (header and footer), configurable in the editor without appearing in individual templates.

## Code principles

- No JS frameworks or libraries — write vanilla Web Components only.
- No DOM manipulation before user interaction.
- No render-blocking JavaScript.
- Prefer server-rendered Liquid over client-side logic.
- Progressive enhancement: features must degrade gracefully in older browsers.
- Prettier config: 120-char line width, single quotes in JS/CSS, double quotes in Liquid.

## Staying in sync with upstream Dawn

This repo has `origin` pointing to a fork. To pull upstream Dawn updates:
```sh
git remote add upstream https://github.com/Shopify/dawn.git
git fetch upstream
git pull upstream main
```
