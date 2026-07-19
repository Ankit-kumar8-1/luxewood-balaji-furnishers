---
name: gsap
description: Official GSAP skill for core API (gsap.to, from, fromTo, set), timelines, easing, staggers, ScrollTrigger, and GSAP animation patterns in React/Vue/Svelte/vanilla JS.
license: MIT
---

# GSAP Animation Skill

## When to Apply

Apply when writing or reviewing GSAP animations: single tweens, timelines, eases, staggers, scroll-driven animations (ScrollTrigger), or responsive animation with `gsap.matchMedia()`.

## Core Tween Methods

- **`gsap.to(targets, vars)`** — animate from current state to `vars`. Most common.
- **`gsap.from(targets, vars)`** — animate from `vars` to current state.
- **`gsap.fromTo(targets, fromVars, toVars)`** — explicit start and end values.
- **`gsap.set(targets, vars)`** — apply values immediately (duration 0).

Always use **camelCase** for properties in the vars object (`backgroundColor`, `xPercent`, `rotation`, `scale`).

## Common Variables

- **`duration`**: seconds (default 0.5).
- **`delay`**: seconds before start.
- **`ease`**: `"power1.out"` (default), `"power2.inOut"`, `"power3.out"`, `"back.out(1.7)"`, `"elastic.out(1, 0.3)"`, `"none"`.
- **`stagger`**: number (e.g. `0.1`) or object `{ each: 0.1, from: "center" }`.
- **`repeat`**: `-1` for infinite.
- **`yoyo`**: `true` to alternate direction on repeat.

## Transform Aliases (Prefer over raw `transform` strings)

| GSAP Property | Meaning |
|---|---|
| `x`, `y`, `z` | translateX/Y/Z (px) |
| `xPercent`, `yPercent` | translateX/Y in % |
| `rotation`, `rotationX`, `rotationY` | rotate in degrees |
| `scale`, `scaleX`, `scaleY` | scale factor |
| `transformOrigin` | origin point e.g. `"50% 50%"` |

## Timelines (`gsap.timeline()`)

Chain animations sequentially or with position offsets:
```javascript
const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });
tl.to(".box1", { x: 100 })
  .to(".box2", { y: 50 }, "-=0.3") // start 0.3s before previous ends
  .to(".box3", { scale: 1.2 }, "<"); // start at same time as previous
```

## Responsive & Accessibility (`gsap.matchMedia()`)

Handle media queries and `prefers-reduced-motion` cleanly:
```javascript
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  gsap.to(".desktop-only", { x: 200 });
});

mm.add("(prefers-reduced-motion: reduce)", () => {
  // subtle/no motion for users with reduced motion preferences
});
```
