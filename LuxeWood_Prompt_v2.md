# 🪵 Balaji Furnishers & Traders (LuxeWood) — Ultra-Premium Frontend Prototype
## Master Prompt v2.0 | Two-Phase Build System

> **Role:** Act as an **Elite Principal Frontend Architect & UI/UX Systems Engineer** with 15+ years of experience building luxury e-commerce interfaces, admin portals, and marketing automation dashboards. You write pixel-perfect, production-grade HTML5, CSS3, and Vanilla JavaScript — zero frameworks, zero external dependencies, zero backend. Your code is maintainable, modular, and deeply commented.

---

## 🗂️ PROJECT CONTEXT

**Client:** Balaji Furnishers & Traders (LuxeWood) — A family-owned ultra-luxury furniture showroom in Palwal, Haryana.  
**Showroom Address:** Near OBC Bank, Jaber Nagar, Palwal, Haryana 121102  
**Contact Phone:** +91 9896097124  

**Goal:** A fully self-contained, client-side prototype (6 modular files) that functions as:
1. A premium client-facing e-commerce catalog
2. A private admin control panel
3. A smart customer analytics dashboard
4. A WhatsApp bulk broadcast simulation engine

**Tech Constraints & AI Directives:**
- ✅ Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- ✅ localStorage as the persistent database
- ✅ All files cross-linked and sharing the same data layer
- 🎨 **IMAGE & LOGO GENERATION AUTHORITY:** The AI Agent has full, explicit authority to proactively generate custom high-resolution images, brand logos, hero banners, wood textures, and product showcase photos using `generate_image` at any step where visual assets are needed.
- ❌ No React / Vue / Angular / jQuery
- ❌ No backend, no API calls, no CDN libraries
- ❌ No placeholder comments like `// add code here`

---

## 📁 FILE ARCHITECTURE (6 Files, Strictly Modular)

| File | Role |
|---|---|
| `style.css` | Master design system — tokens, typography, layout, components, animations |
| `script.js` | Global state machine — localStorage CRUD, tier engine, data seeding, event bus |
| `index.html` | Client-facing luxury showroom & enquiry portal |
| `admin.html` | Private admin CRUD panel, product manager & purchase logs |
| `analytics.html` | Customer segment tiers & geographic hotspot visualizer |
| `whatsapp.html` | Tier-filtered WhatsApp broadcast terminal simulator |

---

## 🎨 DESIGN SYSTEM SPECIFICATION (Enforce Across ALL Files)

### Color Tokens (define as CSS custom properties in `:root`)
```
--clr-espresso:     #2C1B12   /* Primary brand dark — navbars, sidebars */
--clr-gold:         #D4AF37   /* Accent — CTAs, badges, highlights */
--clr-gold-dim:     #A8882A   /* Gold hover/pressed state */
--clr-cream:        #FAF3E0   /* Page background */
--clr-linen:        #EDE0C8   /* Card background */
--clr-bark:         #6B3F1F   /* Secondary text, dividers */
--clr-ash:          #9E8B75   /* Placeholder, muted text */
--clr-smoke:        #F0EAE0   /* Table stripes, input fills */
--clr-carbon:       #1A1008   /* Deep shadow, overlay */
--clr-silver-tier:  #A8A8B3   /* Silver customer tier */
--clr-gold-tier:    #D4AF37   /* Gold customer tier */
--clr-diamond-tier: #B9F2FF   /* Diamond customer tier */
--clr-success:      #2D6A4F   /* Terminal success log */
--clr-terminal-bg:  #0D0D0D   /* WhatsApp terminal background */
--clr-terminal-txt: #00FF41   /* Matrix-green terminal font */
```

### Typography Scale
```
--font-display:  'Playfair Display', Georgia, serif      /* Hero titles, product names */
--font-body:     'Cormorant Garamond', Times, serif       /* Body copy, descriptions */
--font-ui:       'Jost', 'Gill Sans', sans-serif          /* UI labels, nav, buttons */
--font-mono:     'Courier New', Courier, monospace         /* Terminal, code logs */

/* Load from Google Fonts in <head>:
   Playfair Display (400, 700, 900)
   Cormorant Garamond (300, 400, 600)
   Jost (300, 400, 500, 700) */

--fs-hero:   clamp(3rem, 8vw, 7rem)
--fs-h1:     clamp(2rem, 5vw, 3.5rem)
--fs-h2:     clamp(1.4rem, 3vw, 2.2rem)
--fs-h3:     1.4rem
--fs-body:   1.05rem
--fs-small:  0.85rem
--fs-mono:   0.82rem
```

### Spacing & Layout
```
--space-xs:   0.25rem     --space-sm:  0.5rem
--space-md:   1rem        --space-lg:  1.5rem
--space-xl:   2.5rem      --space-2xl: 4rem
--space-3xl:  6rem

--radius-sm:  4px         --radius-md: 10px
--radius-lg:  18px        --radius-pill: 999px

--shadow-card:    0 4px 20px rgba(44,27,18,0.12)
--shadow-hover:   0 12px 40px rgba(44,27,18,0.25)
--shadow-modal:   0 20px 80px rgba(26,16,8,0.5)
--shadow-gold:    0 0 20px rgba(212,175,55,0.4)

--transition-fast:   150ms ease
--transition-base:   300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow:   600ms cubic-bezier(0.16, 1, 0.3, 1)
```

---

---

# ═══════════════════════════════════════
# PHASE 1 — FOUNDATION & CORE EXPERIENCE
# ═══════════════════════════════════════

**Deliverables:** `style.css` + `script.js` + `index.html` + `admin.html`

**Goal:** A fully working client showroom and admin panel with persistent data — all features functional, all interactions polished.

---

## FILE 1 → `style.css` (Master Design System)

Build a **single unified stylesheet** consumed by all 4 HTML files. Structure it in these exact sections with CSS block comments:

### Section 1 — Reset & Root Tokens
- Full CSS reset (box-sizing, margin, padding, font inheritance)
- All CSS custom properties defined in `:root` (colors, fonts, spacing, shadows, transitions from spec above)
- `@import` Google Fonts at the top

### Section 2 — Base Typography
- `h1–h6` using `--font-display` with exact sizes from scale
- `p, li, label` using `--font-body`
- `.ui-text` utility class using `--font-ui`
- `.mono-text` using `--font-mono`
- `::selection` styled with gold background + dark text

### Section 3 — Layout System
- `.container` — max-width: 1200px, auto horizontal margin, px 24px
- `.container-wide` — max-width: 1440px
- CSS Grid utility classes: `.grid-2`, `.grid-3`, `.grid-4` (each responsive, collapsing to 1 col on mobile)
- Flexbox utilities: `.flex`, `.flex-center`, `.flex-between`, `.flex-col`
- `.section` — padding: var(--space-3xl) 0

### Section 4 — Navigation (Shared Top Nav)
- `.top-nav` — fixed, height 72px, background: `--clr-espresso`, backdrop-filter blur(10px) when scrolled
- `.nav-logo` — gold serif wordmark "LuxeWood" with tagline below in ash color
- `.nav-links` — horizontal links in Jost font, color ash, hover: gold with 2px underline animation that grows from left
- `.nav-cta` — "Book Appointment" pill button in gold
- Mobile hamburger that transforms to X with smooth CSS animation
- `.mobile-menu` — full-screen overlay slide-in from right, same espresso background

### Section 5 — Hero Component
- `.hero` — 100vh, layered background: wood-texture CSS gradient + dark overlay
- Background: `linear-gradient(135deg, #2C1B12 0%, #4A2E18 40%, #1A1008 100%)`
- Subtle noise texture overlay using CSS `url("data:image/svg+xml...")` pattern
- `.hero__eyebrow` — small caps gold label above headline
- `.hero__title` — Playfair Display, `--fs-hero`, color: `#FAF3E0`, line-height 1.05
- `.hero__subtitle` — Cormorant Garamond, large, color: `--clr-ash`
- `.hero__cta-group` — two buttons side by side: primary gold fill + secondary transparent border
- **Scroll indicator**: animated bouncing chevron at bottom center
- **Parallax-ready**: `.hero__bg` with `will-change: transform` for JS scroll parallax

### Section 6 — Product Card System
- `.card` — background `--clr-linen`, border-radius `--radius-lg`, overflow hidden
- CSS 3D hover effect using `transform-style: preserve-3d`, `perspective: 1000px`
- On hover: `transform: rotateY(4deg) rotateX(-2deg) translateY(-8px)`, box-shadow changes to `--shadow-hover`
- `.card__image-wrap` — aspect-ratio 4/3, overflow hidden
- `.card__image-wrap img` — scale(1.08) on parent hover with `transition: transform 600ms`
- `.card__badge` — absolute positioned, top-left, gold pill (e.g. "Bestseller", "New Arrival")
- `.card__body` — padding 1.5rem, display flex col
- `.card__name` — Playfair Display, h3 size, dark espresso
- `.card__origin` — small muted text "Solid Sheesham Wood · Handcrafted"
- `.card__price` — large gold colored, Jost bold + strikethrough MRP beside it
- `.card__actions` — two buttons: "View Details" (primary) + "Quick Enquiry" (outline)
- `.card__tier-indicator` — bottom strip, 3px tall, color coded by tier

### Section 7 — Modal System
- `.modal-overlay` — fixed fullscreen, `background: rgba(26,16,8,0.85)`, backdrop-filter blur(6px)
- `.modal-box` — max-width 760px, background `--clr-cream`, border-radius `--radius-lg`
- Entry animation: `scale(0.9) translateY(30px)` → `scale(1) translateY(0)` with `--transition-slow`
- `.modal__hero-img` — full width 280px height image at top
- `.modal__close` — X button top-right corner, hover: gold color
- Tab system inside modal: "Overview" | "Dimensions" | "Care Guide" — switching tab content with CSS class toggling
- `.modal__spec-grid` — 2-col grid for spec key-value pairs (Material, Finish, Weight, Lead Time)

### Section 8 — Form Styles
- `.form-group` — stacked label + input, margin bottom var(--space-md)
- `.form-label` — Jost 500 weight, small size, text-transform uppercase, letter-spacing 0.08em
- `.form-input`, `.form-select`, `.form-textarea` — full width, padding 0.75rem 1rem, border 1.5px solid `--clr-ash`, border-radius `--radius-md`, background `--clr-smoke`, font: Cormorant Garamond
- Focus state: border-color `--clr-gold`, box-shadow `0 0 0 3px rgba(212,175,55,0.2)`
- Error state: border-color `#C0392B`, shake animation
- `.btn` base class + modifiers:
  - `.btn--primary`: gold background, espresso text, hover scale(1.03) + shadow-gold
  - `.btn--outline`: transparent bg, gold border + gold text, hover fill gold
  - `.btn--dark`: espresso bg, cream text
  - `.btn--sm`, `.btn--lg` size modifiers
  - All buttons: Jost font, letter-spacing 0.05em, text-transform uppercase, pill radius

### Section 9 — Tier Badge System
```css
.tier-badge { display:inline-flex; align-items:center; gap:6px; padding:4px 12px;
              border-radius:var(--radius-pill); font-size:var(--fs-small);
              font-family:var(--font-ui); font-weight:700; text-transform:uppercase; }
.tier-badge--silver  { background:#E8E8EE; color:#555; border:1px solid #A8A8B3; }
.tier-badge--gold    { background:#FFF8E1; color:#7A5C00; border:1px solid #D4AF37; }
.tier-badge--diamond { background:#E0F7FF; color:#006080; border:1px solid #7ECCE0;
                       box-shadow: 0 0 12px rgba(185,242,255,0.5); }
```

### Section 10 — WhatsApp Floating Widget
- `.wa-widget` — fixed bottom-right, z-index 9999
- Circle button 56px, WhatsApp green `#25D366`, gold shadow on hover
- SVG WhatsApp icon inside
- Pulse ring animation: `@keyframes wa-pulse` — outer ring that expands and fades
- Tooltip on hover: "Chat with us on WhatsApp"

### Section 11 — Store Map Section
- `.map-section` — dark espresso background, full width
- `.map-grid` — CSS grid 12x8 cells, each cell `var(--clr-bark)` with 1px `var(--clr-carbon)` border
- `.map-pin` — absolute positioned gold pulsing marker with store name tooltip
- `.map-area-labels` — floating text labels for "Palwal City", "NH-19 Highway", "Old Grain Market"
- `.map-legend` — row of color-coded legend items

### Section 12 — Admin Layout (for admin.html)
- `.admin-wrapper` — `display:grid; grid-template-columns: 260px 1fr; min-height:100vh`
- `.admin-sidebar` — espresso background, fixed height with overflow-y scroll
- `.sidebar-logo` — LuxeWood + "Admin Portal" in gold small text
- `.sidebar-nav a` — full-width links with icon + label, hover: gold left border + light gold bg tint
- `.sidebar-nav a.active` — gold left border 3px + slightly lighter background
- `.admin-main` — `--clr-cream` background, padding var(--space-xl)
- `.admin-topbar` — flex row: page title left, admin avatar + name right
- `.stat-card` — white card with top colored border (4px), icon, number, label
- `.data-table` — full width, border-collapse, alternating row colors
- `.data-table th` — espresso background, cream text, uppercase small caps
- `.data-table td` — padding 0.75rem 1rem, border-bottom 1px `--clr-smoke`
- `.data-table tr:hover` — light gold tinted background

### Section 13 — Responsive Breakpoints
```css
/* Mobile First */
@media (max-width: 480px)  { /* xs — stack everything */ }
@media (max-width: 768px)  { /* sm — hide sidebar, show hamburger, 1-col cards */ }
@media (max-width: 1024px) { /* md — 2-col cards, condensed nav */ }
@media (min-width: 1280px) { /* lg — full layout restored */ }
```

### Section 14 — Utility Animations
```css
@keyframes fadeUp    { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
@keyframes fadeIn    { from { opacity:0 } to { opacity:1 } }
@keyframes scaleIn   { from { opacity:0; transform:scale(0.92) } to { opacity:1; transform:scale(1) } }
@keyframes shimmer   { 0%,100%{background-position:200%} 50%{background-position:-200%} }
@keyframes pulse-dot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.6);opacity:0.4} }
@keyframes wa-pulse  { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(2);opacity:0} }
@keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }

.animate-fadeUp   { animation: fadeUp  0.6s var(--transition-slow) both }
.animate-fadeIn   { animation: fadeIn  0.4s ease both }
.animate-scaleIn  { animation: scaleIn 0.5s var(--transition-slow) both }
/* stagger delays via --delay CSS var */
```

---

## FILE 2 → `script.js` (Global State Machine)

### Architecture Overview
This file is the **single source of truth**. Every HTML file loads this script. It must use an **IIFE module pattern** with a global `LuxeWood` namespace object exposed to `window`.

```javascript
const LuxeWood = (() => {
  // Private state
  // Public API returned
})();
window.LuxeWood = LuxeWood;
```

### 2A — Data Schema (localStorage keys)
```
"luxewood_products"   → Array of Product objects
"luxewood_customers"  → Array of Customer objects  
"luxewood_settings"   → Object (store config, seeded flag)
```

### 2B — Product Object Schema
```javascript
{
  id:          "prod_" + Date.now(),      // Unique ID
  name:        "Maharaja King Bed Frame", // Display name
  category:    "Bedroom",                 // Bedroom / Living / Dining / Office / Outdoor
  material:    "Solid Sheesham Wood",     // Material description
  finish:      "Natural Walnut Polish",   // Finish type
  price:       285000,                    // Price in INR (number, no symbols)
  mrp:         340000,                    // Original MRP (for strikethrough)
  description: "...",                     // 2–3 sentence rich description
  dimensions:  { L:"78\"", W:"60\"", H:"48\"" },
  leadTime:    "3–4 weeks",
  badge:       "Bestseller",              // "New Arrival" | "Bestseller" | "Limited" | null
  inStock:     true,
  images:      ["🪑"],                   // Emoji or placeholder for frontend rendering
  createdAt:   "2024-01-15T10:30:00Z"
}
```

### 2C — Customer Object Schema
```javascript
{
  id:          "cust_" + Date.now(),
  name:        "Rajesh Kumar Sharma",
  phone:       "9812345678",             // 10-digit, no +91 prefix stored
  productId:   "prod_abc123",
  productName: "Maharaja King Bed Frame",
  productPrice: 285000,
  location:    "Old Grain Market, Palwal",  // Selected from dropdown
  tier:        "diamond",                    // Calculated: silver|gold|diamond
  coords:      { x: 47, y: 62 },           // Random X/Y (0–100) for hotspot map
  enquiryDate: "2024-03-20T14:22:00Z",
  notes:       ""                            // Optional notes field
}
```

### 2D — Seed Data (Pre-populate on First Load)

**Pre-seed 8 Products** across all categories. Use REAL Indian furniture product names:
```
1. Maharaja Sheesham King Bed      — ₹2,85,000 (Diamond)  — Bedroom
2. Darbar Hall Dining Table (8s)   — ₹1,85,000 (Gold)     — Dining
3. Rajputana Solid Wood Sofa Set   — ₹1,45,000 (Gold)     — Living
4. Heritage Teak Study Table       — ₹68,000  (Silver)    — Office
5. Mughal Carved Wardrobe (4-door) — ₹2,40,000 (Diamond)  — Bedroom
6. Sheesham Corner TV Unit         — ₹55,000  (Silver)    — Living
7. Royal Leather Recliner Chair    — ₹92,000  (Silver)    — Living
8. Executive CEO Desk (L-Shape)    — ₹1,25,000 (Gold)     — Office
```

**Pre-seed 10 Customers** with varied tiers, Palwal-local locations, and realistic names. Locations to use:
- "Jaber Nagar (Near OBC Bank), Palwal"
- "Old Grain Market, Palwal"
- "Sector 2, Palwal"
- "NH-19 Highway Side, Palwal"
- "Railway Station Area, Palwal"
- "New Bus Stand, Palwal"
- "Civil Lines, Palwal"
- "Badarpur Colony, Palwal"
- "Model Town, Palwal"

### 2E — Tier Calculator (Pure Function)
```javascript
function calculateTier(price) {
  if (price >= 200000) return "diamond";
  if (price >= 100000) return "gold";
  return "silver";
}
```
**Tier Rules:**
- Silver: `price < 1,00,000` → Label: "Silver — Budget Buyer"
- Gold: `1,00,000 ≤ price < 2,00,000` → Label: "Gold — Premium Buyer"
- Diamond: `price ≥ 2,00,000` → Label: "Diamond — Ultra-Luxury Elite"

### 2F — Public API Methods (All must be implemented)
```javascript
LuxeWood = {
  // Storage
  getProducts()              → returns Array
  getProductById(id)         → returns Object | null
  addProduct(productObj)     → saves + returns new product
  updateProduct(id, changes) → merges + saves
  deleteProduct(id)          → removes from array + saves

  // Customers
  getCustomers()             → returns Array (newest first)
  addCustomer(formData)      → calculates tier, assigns coords, saves + returns
  getCustomersByTier(tier)   → returns filtered Array

  // Analytics
  getTierStats()             → returns { silver:{count,revenue}, gold:{...}, diamond:{...}, total:{...} }
  getHotspotData()           → returns customers mapped to { name, phone, tier, coords, location }

  // Utilities
  formatPrice(number)        → "₹2,85,000"
  formatDate(isoString)      → "20 Mar 2024, 2:22 PM"
  generateId(prefix)         → "prod_1710935522341"
  seedData()                 → runs only if localStorage empty (checks settings.seeded flag)
  clearAllData()             → nuclear reset (for dev use only)
}
```

### 2G — Event Bus (Cross-Page Communication)
```javascript
// Simple pub/sub for within-page events
LuxeWood.events = {
  on(event, callback)  → registers listener
  emit(event, data)    → fires all registered listeners
  off(event, callback) → removes listener
}
// Events to emit:
// "product:added" | "product:updated" | "product:deleted"
// "customer:added" | "data:seeded"
```

---

## FILE 3 → `index.html` (Client Showroom)

### 3A — `<head>` Requirements
- `<meta charset="UTF-8">`, viewport meta, description meta
- Open Graph tags for social sharing
- Google Fonts `<link>` for Playfair Display, Cormorant Garamond, Jost
- `<link rel="stylesheet" href="style.css">`
- Favicon: a small wood emoji or SVG inline favicon
- `<title>LuxeWood — Luxury Furniture Palwal</title>`

### 3B — Top Navigation Bar
- Fixed `.top-nav` with glass effect on scroll
- Logo: "LuxeWood" in Playfair Display + "Est. 2009 · Palwal" in small Jost below
- Nav links: Home | Catalog | About | Our Story | Contact
- Gold "Book a Visit" CTA pill button (right side)
- On mobile: hamburger icon → full-screen menu overlay

### 3C — Hero Section
Build an **immersive full-viewport hero** with these layers:
1. **Background**: CSS gradient simulating rich walnut wood grain: `linear-gradient(160deg, #1A0F0A 0%, #3B2010 45%, #2C1B12 100%)`
2. **Texture overlay**: SVG noise filter or repeating dot pattern at 5% opacity
3. **Decorative element**: Large barely-visible "LW" monogram in background at 4% opacity, Playfair Display
4. **Content** (centered, max-width 800px):
   - Gold eyebrow: "PALWAL'S FINEST · SINCE 2009"
   - H1: "Where Wood Tells A Story" (multiline, each word on its own rhythm)
   - Subheadline: "Handcrafted luxury furniture for homes that demand the extraordinary. Every piece, a lifetime investment."
   - Two CTAs: "Explore Collection →" (gold filled) + "Visit Showroom" (outline cream)
5. **Scroll-triggered stats bar** at bottom of hero:
   - 500+ | Pieces Crafted
   - 15+ | Years Legacy
   - 3,000+ | Happy Families
   - 100% | Solid Wood

### 3D — Announcement Ticker (Below Hero)
- Horizontal scrolling ticker (CSS animation): "Free Delivery within 50km radius · Custom Orders Welcome · Interest-Free EMI Available · Palwal's Most Trusted Furniture Brand Since 2009 ·" (repeat seamlessly)

### 3E — Catalog Section
**Section heading**: "Our Curated Collection" + gold separator line

**Filter Tabs**: Category filter pills — All | Bedroom | Living | Dining | Office
- JavaScript: clicking a filter re-renders the grid showing only matching products
- Active filter pill: gold background + espresso text

**Product Grid**: `.grid-3` responsive grid

**Each Product Card** must:
1. Be **dynamically rendered** via JavaScript reading from `LuxeWood.getProducts()`
2. Display: Product image placeholder (styled div with CSS wood-grain gradient + emoji icon), Badge pill, Product name, Material line, Price (formatted) with MRP strikethrough, Tier badge
3. **3D CSS tilt on mousemove**: JavaScript adds `transform: perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)` based on cursor position relative to card center
4. **"View Details"** button → opens Quick View Modal
5. **"Quick Enquiry"** button → smooth scrolls to enquiry form with product pre-selected in dropdown

### 3F — Product Quick View Modal
- Triggered by `LuxeWood.events.on("modal:open", data)` 
- Overlay with blur behind
- Inside modal (two-column layout on desktop):
  - **Left col**: Large product image placeholder (wood-grain gradient, product emoji, category label)
  - **Right col**:
    - Category eyebrow
    - Product name (H2, Playfair)
    - Material + Finish line
    - Price (large, gold) + MRP strikethrough + savings callout
    - Tier badge with explanation text
    - Dimension badges (L × W × H chips)
    - Lead time indicator
    - Stock availability dot + text
    - Full description paragraph
    - "Start Enquiry" CTA (scrolls to form)
    - "Add to Wishlist" outline button (visual only, no backend needed)
- Close: X button, click outside overlay, Escape key

### 3G — Why Choose Us Section
Four feature cards with icon + title + description:
1. 🪵 "100% Solid Wood" — No MDF, no veneer. Every piece from premium Sheesham & Teak.
2. 🏆 "15 Years Legacy" — Trusted by 3,000+ families across Haryana since 2009.
3. 🎨 "Custom Craftsmanship" — Tell us your vision; our artisans will build it.
4. 🚚 "White Glove Delivery" — Free delivery + professional installation within 50km.

### 3H — Purchase Enquiry / Registration Form
Section heading: "Begin Your Enquiry" + description paragraph

**Fields:**
```
Full Name *         → text input, min 3 chars
WhatsApp Number *   → tel input, must be exactly 10 digits, pattern validation
Interested Product* → <select> dynamically populated from LuxeWood.getProducts()
                      (value = product ID, displayed text = name + " — ₹X,XX,XXX")
Your Location *     → <select> with these Palwal area options:
                        Jaber Nagar (Near OBC Bank) · Old Grain Market · Sector 2
                        NH-19 Highway Side · Railway Station Area · New Bus Stand
                        Civil Lines · Badarpur Colony · Model Town · Other (Palwal)
Message / Notes     → <textarea>, optional, 4 rows
```

**On Submit:**
1. Validate all required fields (inline error messages below each field)
2. Call `LuxeWood.addCustomer(formData)` — this auto-calculates tier + random coords
3. Show **success toast** bottom-right: "✅ Enquiry received! Our team will contact you on WhatsApp within 24 hours." (auto-dismiss after 5s)
4. Reset form
5. Scroll to top of form section

**Form must NOT submit to any URL** — `event.preventDefault()` always.

### 3I — Store Location Map Section
Section: "Find Our Showroom"

**Visual Map** (CSS grid — pure HTML/CSS, no external map library):
- 12×8 grid of cells
- Background cells: varying shades of `--clr-espresso` tints for visual depth
- **Road lines**: specific cells highlighted in lighter `--clr-bark` to represent roads
- **Landmark labels**: floating positioned `<span>` elements: "Jaber Nagar", "Near OBC Bank", "NH-19", "Railway Station", "Old Grain Market", "New Bus Stand"
- **Store Pin**: Gold pulsing marker at correct relative position. Tooltip: "Balaji Furnishers & Traders — Near OBC Bank, Jaber Nagar, Palwal"
- Below map: Address card with phone (+91 9896097124), WhatsApp link, hours, Google Maps link (opens real Google Maps link)

### 3J — Footer
- Espresso background, 3-column grid
- Col 1: Logo (Balaji Furnishers & Traders / LuxeWood) + tagline + social links
- Col 2: Quick links (same as nav) + Admin Portal link → `admin.html`
- Col 3: Contact info (Near OBC Bank, Jaber Nagar, Palwal · Ph: +91 9896097124) + WhatsApp button
- Bottom bar: Copyright + "Crafted with pride in Palwal, Haryana 121102"

### 3K — Floating WhatsApp Widget
- Fixed bottom-right, always visible
- Green circle button with WhatsApp SVG icon
- `href="https://wa.me/919896097124?text=Hello%20Balaji%20Furnishers%20%26%20Traders%2C%20I'm%20interested%20in%20your%20furniture%20collection"` (opens real WhatsApp)
- Pulsing ring animation (CSS `@keyframes wa-pulse`)
- Small tooltip on hover: "Chat with us"

---

## FILE 4 → `admin.html` (Admin Control Panel)

### 4A — Layout
- **Two-column grid**: 260px sidebar + fluid main area
- No top-nav from client site; this is its own layout
- Sidebar and main area both fill full viewport height

### 4B — Sidebar Navigation
Espresso background. Contains:
- LuxeWood "Admin" logo at top
- Section: **Dashboard** → links to stat overview (default view)
- Section: **Products** → `#view-products` (list + edit) / `#view-add-product` (form)
- Section: **Customer Logs** → `#view-logs`
- Divider
- Link to Client Site → `index.html` (opens in new tab)
- Link to Analytics → `analytics.html`
- Link to WhatsApp → `whatsapp.html`
- Bottom: Admin user info (avatar circle, name, role badge)

**Single-Page behavior**: All views are in one HTML file. Clicking sidebar links shows/hides corresponding `<section>` divs using JavaScript class toggling. No page reloads.

### 4C — Dashboard View (`#view-dashboard`)
**4 Stat Cards** in a row (each with colored top border):
```
Total Products    (espresso border)  — LuxeWood.getProducts().length
Total Customers   (gold border)      — LuxeWood.getCustomers().length
Total Revenue     (green border)     — sum of all customer product prices formatted
Diamond Members   (blue border)      — LuxeWood.getCustomersByTier("diamond").length
```
Each stat card: icon (emoji), large number, label, small "+X this month" sub-text (placeholder).

**Recent Activity Feed**: Last 5 customer enquiries as timeline items (avatar circle with initials, name, product, time ago).

### 4D — Add / Edit Product Form (`#view-add-product`)
**Form fields:**
```
Product Name *      → text
Category *          → select: Bedroom | Living | Dining | Office | Outdoor
Material *          → text (e.g., "Solid Sheesham Wood")
Finish              → text (e.g., "Natural Walnut Polish")
Selling Price (₹) * → number input, min 1000
MRP / Original (₹) * → number input (must be ≥ Selling Price)
Description *       → textarea, min 50 chars, 5 rows
Lead Time           → text (e.g., "3–4 weeks")
Badge               → select: None | New Arrival | Bestseller | Limited Edition
In Stock            → checkbox, default checked
```

**Tier Preview**: Below the price input, show a **live-updating** tier badge as the user types the price. JavaScript `oninput` event → call `calculateTier(price)` → update badge display instantly.

**On Submit:**
1. Validate all required fields
2. Call `LuxeWood.addProduct(data)`
3. Show inline success message: "✅ Product added successfully! Visible on catalog."
4. Switch view to Product List (`#view-products`)

**Edit Mode**: When editing an existing product, the same form pre-fills all values. Submit button text changes to "Update Product". Cancel button returns to list.

### 4E — Product List View (`#view-products`)
- Search bar: live-filters the table as user types (searches name + category)
- Table with columns: #, Name, Category, Price, MRP, Tier Preview, Stock Status, Actions
- Actions per row: ✏️ Edit button + 🗑️ Delete button
- Delete: shows a **confirmation dialog** (custom styled, not browser `confirm()`) — "Are you sure? This cannot be undone." with Cancel + Confirm in red
- Empty state: if no products, show centered illustration (wood emoji + message) + "Add First Product" button

### 4F — Customer Logs Table (`#view-logs`)
Table columns:
```
#  | Customer Name | Phone | Product Purchased | Price | Location | Tier Badge | Date
```
- **Sort** by clicking column headers (toggle ASC/DESC)
- **Filter by Tier**: Three pill buttons above table — All | Silver | Gold | Diamond
- **Export to CSV** button: generates a `.csv` file of current filtered results and triggers browser download using `Blob` + `URL.createObjectURL`
- Empty state message if no customers yet

---

---

# ═══════════════════════════════════════════
# PHASE 2 — INTELLIGENCE LAYER & AUTOMATION
# ═══════════════════════════════════════════

**Deliverables:** `analytics.html` + `whatsapp.html` + Polish pass on all 6 files

**Goal:** Advanced visualizations, broadcast simulation, and final polish — making the prototype feel like a production-grade system.

---

## FILE 5 → `analytics.html` (Smart Customer Analytics)

### 5A — Page Layout
- Same admin sidebar from `admin.html` (duplicate the sidebar HTML)
- Page title: "Customer Intelligence & Delivery Analytics"
- Main content split into stacked sections

### 5B — Top KPI Strip
Five metrics in a horizontal scrollable strip on mobile:
```
📦 Total Enquiries      → getCustomers().length
💰 Total Revenue        → sum of all productPrice values, formatted
🥇 Diamond Clients      → count of diamond tier
🌟 Gold Clients         → count of gold tier
⬜ Silver Clients        → count of silver tier
```

### 5C — Tier Segmentation Grid
Section heading: "Financial Segment Distribution"

**Three Tier Cards** (side by side, equal width):

**Silver Tier Card:**
- Badge: "⬜ SILVER — BUDGET BUYERS"
- Price Range: "Below ₹1,00,000"
- Customer count + revenue contribution
- Progress bar (fill = silver customers / total customers)
- List of Silver customer names (limited to 5, "+ N more" if exceeded)
- CTA: "Message Silver Tier →" → links to `whatsapp.html?tier=silver`

**Gold Tier Card:**
- Badge: "🌟 GOLD — PREMIUM BUYERS"
- Price Range: "₹1,00,000 – ₹2,00,000"
- All same elements as Silver
- CTA: "Message Gold Tier →" → links to `whatsapp.html?tier=gold`

**Diamond Tier Card:**
- Badge: "💎 DIAMOND — ULTRA-LUXURY ELITE"
- Price Range: "Above ₹2,00,000"
- Glowing border animation (CSS `box-shadow` pulse)
- All same elements
- CTA: "Message Diamond Tier →" → links to `whatsapp.html?tier=diamond`

### 5D — Revenue Breakdown Bar Chart
**Pure CSS + JavaScript Bar Chart** (no Chart.js — build from scratch):
- Horizontal bar for each tier, length proportional to revenue share
- Labels: Tier name, count, revenue, % of total
- Bars: color-coded (silver/gold/diamond CSS variables)
- Animate bars expanding from 0 on scroll-into-view (`IntersectionObserver`)

### 5E — Product Performance Table
Columns: Product Name | Category | Price | Tier | # Enquiries | Revenue Generated | Stock
- "# Enquiries" = count how many customers bought each product
- Sort by Revenue (default) or Enquiries
- Rows sorted by revenue descending

### 5F — Geographic Delivery Hotspot Map
Section heading: "Delivery Hotspot Intelligence"

**Container**: 700px × 450px styled `<div>`, dark espresso background, border-radius `--radius-lg`

**City Grid** (visual Palwal city representation):
- CSS Grid overlay: light gray road-like lines
- Labeled zones positioned absolutely with tiny font labels:
  ```
  "Old Grain Market" | "Sector 2" | "NH-19 Side" | "Railway Station"
  "New Bus Stand" | "Civil Lines" | "Badarpur Colony" | "Model Town"
  ```

**Hotspot Dots** (dynamically rendered by JavaScript):
- For each customer in `LuxeWood.getHotspotData()`:
  - Create a `<div class="hotspot-dot hotspot-dot--{tier}">` element
  - Position it using `left: ${coords.x}%`, `top: ${coords.y}%`
  - Size: 12px for silver, 16px for gold, 22px for diamond
  - Colors match tier CSS variables
  - **Animation**: `@keyframes pulse-dot` — breathing scale + opacity loop
  - **Tooltip on hover**: "Name | Location | Tier | Price"
  - **Stagger delay**: each dot's animation-delay is `index * 0.15s`

**Map Legend** below the map:
- ⬜ Silver (< ₹1L) · 🌟 Gold (₹1L–₹2L) · 💎 Diamond (> ₹2L)
- Count labels for each tier

**Hotspot Density Summary** below the legend:
- Find the location string that appears most frequently
- "📍 Highest delivery concentration: [Location] (X customers)"

### 5G — Time-Based Enquiry Chart
A simple week-by-week histogram of enquiry counts:
- Group customers by enquiry date (week buckets)
- Render as vertical CSS bars
- Hover shows count tooltip
- Title: "Enquiry Volume Over Time"

---

## FILE 6 → `whatsapp.html` (Broadcast Engine Terminal)

### 6A — Page Layout
Same admin sidebar. Page title: "WhatsApp Broadcast Engine"

**Layout**: Left panel (config) + Right panel (terminal), side-by-side on desktop, stacked on mobile.

### 6B — Left Panel: Campaign Configuration

**Step 1 — Select Target Audience**
```
Label: "Target Tier Segment"
<select id="tier-selector">
  <option value="">— Select Tier —</option>
  <option value="all">All Customers (Silver + Gold + Diamond)</option>
  <option value="silver">⬜ Silver — Budget Buyers</option>
  <option value="gold">🌟 Gold — Premium Buyers</option>
  <option value="diamond">💎 Diamond — Ultra-Luxury Elite</option>
</select>
```
On tier change: instantly show **Audience Preview** below — "Selected Audience: X customers":
- List up to 5 customer names + tiers in a mini-table
- "+ N more customers" if over 5

**Step 2 — Compose Message Template**
```
Label: "Message Template"
Textarea (min 8 rows) with placeholder:
"Dear [Customer Name],

We have an exclusive offer just for you at Balaji Furnishers & Traders (LuxeWood Palwal)! 🪵✨

[CUSTOM MESSAGE HERE]

Visit us near OBC Bank, Jaber Nagar, Palwal or call: +91 9896097124

— The Balaji Furnishers Team"
```
Available variable hooks (shown as clickable chips below the textarea):
- `[Customer Name]` — inserts at cursor
- `[Product Name]` — inserts at cursor
- `[Tier Label]` — inserts at cursor
- `[Date]` — today's date
- `[WhatsApp Link]` — store link

**Character counter**: "X / 1024 characters" (updates live)

**Step 3 — Blast Settings**
```
Delay between messages:  <select> 0.5s | 1s | 2s | 3s (simulated)
Sender ID label:         text input "LuxeWood Palwal Official"
Campaign Name:           text input (for log display)
```

**LAUNCH BROADCAST** button:
- Gold, full width, large
- Icon: 📡 "Launch Broadcast Engine"
- Disabled until tier is selected + message is not empty

### 6C — Right Panel: Execution Terminal

**Terminal Container:**
```css
background: #0D0D0D;  border-radius: var(--radius-lg);
font-family: var(--font-mono);  color: #00FF41;
padding: 1.5rem;  min-height: 480px;  overflow-y: auto;
border: 1px solid #1A1A1A;  box-shadow: inset 0 0 40px rgba(0,255,65,0.05);
```

**Terminal Header Bar:**
```
● ● ●  [Campaign Name]  |  LuxeWood Broadcast Terminal v2.0
```
(Red, yellow, green circles — macOS style)

**Default Idle State** (before broadcast):
```
> LuxeWood Broadcast Engine v2.0 READY
> Auth: ✓ VERIFIED  |  Region: IN-HR  |  Protocol: WA_CLOUD_API
> Database: ✓ Connected  |  Records loaded: [X]
> Awaiting campaign parameters...
> _
```
Blinking cursor at end using CSS animation.

**On "Launch Broadcast" Click:**
JavaScript runs a simulation loop:
```javascript
// For each customer in selected tier (with async delay):
// Line 1: > [TIMESTAMP]  Connecting to WhatsApp API...
// Line 2: > QUEUING: +91XXXXXXXXXX  [Customer Name]
// Line 3: > PROCESSING message template...
// Line 4: > INJECTING variables: [Name]→"Rajesh Kumar" [Tier]→"Diamond"
// Line 5: > ✓ SENT  +91XXXXXXXXXX  ✓ DELIVERED  (green color)
// (delay)
// ... next customer ...
// Final: > ═══════════════════════════════
// Final: > BROADCAST COMPLETE
// Final: > Total Sent: X  |  Failed: 0  |  Success Rate: 100%
// Final: > Campaign: "[Name]" completed at [timestamp]
```

**Color coding in terminal:**
- `>` prompts: `#666`
- Success `✓`: `#00FF41` (bright green)
- Error `✗`: `#FF4444` (red)
- Timestamps: `#A0A0A0`
- Customer data: `#FFD700` (gold)
- Headers/borders: `#333`

**Message Preview Expansion:**
Each "SENT" line is clickable — expands to show the full personalized message that would have been sent.

**Progress Bar** above terminal:
- Gold fill bar showing X/Total customers processed (updates with each send)
- "Sending X of Y" label with spinning indicator

**After Broadcast Completes:**
- Terminal shows summary block
- "📋 Export Log" button appears → downloads terminal output as `.txt` file
- "🔄 New Campaign" button resets everything

### 6D — Broadcast History Log
Below terminal, a table of past "campaigns" (stored in localStorage under `"luxewood_broadcasts"`):
```
Campaign Name | Target Tier | Customers Reached | Timestamp | Status
```
Each new broadcast appends a row here.

---

## ⚙️ PHASE 2 — POLISH REQUIREMENTS (Apply to ALL 6 Files)

### P1 — Scroll Animations
Use `IntersectionObserver` to trigger `.animate-fadeUp` class on:
- Section headings when entering viewport
- Cards (staggered: each card gets `animation-delay: Xms` via JS `style.setProperty`)
- Stat cards in admin dashboard
- Tier cards in analytics

### P2 — Loading State
- Page load: show a 1.2-second branded splash screen: dark background + "LW" monogram + gold shimmer animation, then fade out and show content
- Only on `index.html`

### P3 — Toast Notification System
Implement a global toast function usable from any file:
```javascript
LuxeWood.toast(message, type="success", duration=4000)
// type: "success" | "error" | "info" | "warning"
// Appears bottom-right, auto-dismiss, multiple can stack
```

### P4 — Keyboard Navigation
- Modal: close on `Escape` key
- Admin form: `Enter` key submits
- Tab order is logical and visible

### P5 — Data Integrity Guards
- `addCustomer()` must reject duplicate phone numbers (same phone already in customers) → toast warning: "This phone number is already registered."
- `addProduct()` must reject duplicate product names (case-insensitive)
- All numbers (price, phone) must pass type validation before saving

### P6 — URL Parameter Passing
- `whatsapp.html?tier=diamond` → pre-selects Diamond tier in the tier selector on page load
- `index.html?product=prod_xxx` → auto-opens the Quick View modal for that product

### P7 — Local Print Styles
```css
@media print {
  .admin-sidebar, .top-nav, .wa-widget, .btn { display: none !important; }
  .data-table { border: 1px solid #000; }
}
```

### P8 — `README` Comments in Every File
Each file must open with a block comment:
```
/*
  LuxeWood Premium Furniture — [File Name]
  Role: [one-line description]
  Dependencies: style.css, script.js
  Phase: [1 or 2]
  Last Updated: [date]
*/
```

---

## ✅ QUALITY CHECKLIST (Verify Before Delivering Each File)

### For Every HTML File:
- [ ] Loads `style.css` and `script.js` correctly
- [ ] All dynamic content rendered from `LuxeWood.*` API calls
- [ ] No hardcoded product/customer data in HTML — all pulled from JS state
- [ ] Mobile responsive (test mentally at 375px, 768px, 1280px)
- [ ] All interactive elements have hover + focus + active states
- [ ] No broken links or missing `href` attributes
- [ ] All `<img>` tags have descriptive `alt` attributes

### For `style.css`:
- [ ] All CSS variables defined in `:root`
- [ ] No magic numbers — all values use tokens
- [ ] No `!important` except print styles
- [ ] Responsive breakpoints cover all 4 screen sizes
- [ ] No duplicate selectors

### For `script.js`:
- [ ] Seed data runs ONLY once (checks `settings.seeded` flag)
- [ ] All localStorage operations wrapped in try/catch
- [ ] `LuxeWood` namespace exposed to `window`
- [ ] Tier calculation is pure function, no side effects
- [ ] All IDs are unique and time-stamped

---

## 🎯 FINAL DELIVERY FORMAT

Generate files in this exact order, each clearly separated:

```
═══════════════════════════════════
PHASE 1 — FILE 1: style.css
═══════════════════════════════════
[complete file content]

═══════════════════════════════════
PHASE 1 — FILE 2: script.js
═══════════════════════════════════
[complete file content]

═══════════════════════════════════
PHASE 1 — FILE 3: index.html
═══════════════════════════════════
[complete file content]

═══════════════════════════════════
PHASE 1 — FILE 4: admin.html
═══════════════════════════════════
[complete file content]

═══════════════════════════════════
PHASE 2 — FILE 5: analytics.html
═══════════════════════════════════
[complete file content]

═══════════════════════════════════
PHASE 2 — FILE 6: whatsapp.html
═══════════════════════════════════
[complete file content]
```

**Do not truncate any file. Do not use placeholder comments. Do not skip any feature listed in this document. Every section heading in this spec maps to actual working code.**

---

*LuxeWood Frontend Prototype — Master Prompt v2.0*
*Palwal, Haryana · Est. 2009*
