# Adding scroll animation to Crowns Sphere

A build order for the motion layer.

## Already built (no dependencies)

| What | Where | How |
| --- | --- | --- |
| Loading splash — rays blink outward, shine sweeps across, wordmark draws in | `components/preloader.tsx` | CSS keyframes; the shine is an SVG rect clipped to the ray shapes |
| Scroll reveal | `components/reveal.tsx` | IntersectionObserver + CSS, with a scroll-listener fallback |
| Drifting star field with scroll parallax | `components/star-field.tsx` | One canvas, one rAF loop; nearer stars move further as you scroll |
| Hero + page-header entrance | `.rise-in` / `.drop-in` in globals.css | Staggered via `--enter-stagger` |
| Scroll progress bar | `components/scroll-progress.tsx` | Writes `transform` directly, coalesced into one frame |
| Aurat Card phone mockup | `components/phone-mockup.tsx` | Pure CSS/SVG — floats, the card shimmers, tiles stagger in |
| Pulsing hero glow, marquee strips | globals.css | CSS keyframes |

### Two things to know before editing the entrance animations

**`--enter-delay` is the preloader handshake.** On first load it is `1.2s`, so
the hero waits for the splash. When the preloader finishes it sets
`data-loaded` on `<html>`, which drops it to `0ms` — otherwise navigating back
to a page client-side would leave it blank for a second waiting on a splash
that will never appear again. Per-element stagger goes in `--enter-stagger`.

**Entrance animations use `animation-fill-mode: both`.** That means the element
holds its hidden start state during the delay. Never put `opacity: 0` in the
class itself — if animations don't run, the content must still be visible.
The same reason the reduced-motion block zeroes `animation-delay` as well as
duration.

All of it is 0 KB of third-party JavaScript and every piece respects
`prefers-reduced-motion`. The star field paints one frame immediately rather
than waiting on rAF, so it is never blank.

**Tuning the star field:** `<StarField density={1.15} parallax={0.28} />` —
`density` multiplies the star count, `parallax` is how far the nearest stars
travel over a viewport of scrolling. It is currently in the homepage hero, every
inner-page header (`PageHero` in `components/ui.tsx`), and the Aurat Card panel
on the homepage.

## What still needs a library

The phases below are for the heavier work — pinned sections, scrubbed
timelines, and the illustrated animation the reference site uses.

---

## First: what the reference site actually uses

I inspected the saved Outcrowd page you provided. The libraries referenced in
its markup are:

| Library | Mentions | What it does there |
| --- | --- | --- |
| **Lottie** | 175 | Almost all the "3D" motion. Vector animations exported from After Effects, played as SVG/canvas. |
| **Swiper** | 76 | Carousels and sliders. |
| **Lenis** | 25 | Smooth/inertia scrolling — the weighted "heavy scroll" feel. |
| **GSAP** | 7 | Timeline animation engine. |
| **ScrollTrigger** | 3 | GSAP plugin that ties timelines to scroll position. |
| **Rive** | 6 | Interactive vector animation (a Lottie alternative). |
| `<video>` | 28 | Autoplaying muted loops for the "moving product" panels. |

**There is no Three.js and no WebGL on that page.** The scenes that read as 3D
are pre-rendered — After Effects → Lottie JSON, or muted looping video. That
matters a lot for you: it means you can reproduce that look **without learning
a 3D engine**, and without shipping a 500 KB renderer.

So the honest answer to "what do I need to download": start with GSAP + Lenis,
and get your animations as Lottie files from a motion designer. Only reach for
Three.js if you decide you want something genuinely interactive in 3D — a model
the user can spin, or geometry that reacts to the cursor.

---

## Phase 1 — Smooth scroll (Lenis)

Biggest perceived-quality win per line of code. Do this first.

```bash
npm install lenis
```

Create `components/smooth-scroll.tsx`:

```tsx
"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
```

Wrap the body content in `app/layout.tsx`:

```tsx
<SmoothScroll>
  <SiteHeader />
  <main id="main" className="flex-1">{children}</main>
  <SiteFooter />
</SmoothScroll>
```

Two things to fix once it is in:

- Remove `scroll-behavior: smooth` from `html` in `app/globals.css` — Lenis and
  native smooth scrolling fight each other.
- Anchor links (`href="#form"`) need `lenis.scrollTo(target)`. `ReactLenis`
  exposes the instance via the `useLenis()` hook.

**Respect reduced motion.** Read `matchMedia("(prefers-reduced-motion: reduce)")`
and skip the wrapper entirely when it matches.

---

## Phase 2 — Scroll-driven timelines (GSAP + ScrollTrigger)

This is the pinned-section, parallax, scrub-through-a-sequence layer.

```bash
npm install gsap @gsap/react
```

`@gsap/react` gives you `useGSAP()`, which handles cleanup on unmount — important
in the App Router, where components remount on navigation.

Register the plugin once, in a client component:

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxPanel({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".parallax-layer", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
```

Connect it to Lenis so ScrollTrigger reads the virtualised scroll position:

```tsx
const lenis = useLenis(() => ScrollTrigger.update());
useEffect(() => {
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}, [lenis]);
```

Once this is in, `components/reveal.tsx` can be replaced with a GSAP batch
(`ScrollTrigger.batch`) — or kept, since it costs nothing and already works.

**Licensing note:** GSAP's core and ScrollTrigger are free under the standard
licence. Some plugins (SplitText, MorphSVG, the former "Club" set) have their
own terms — check before shipping one commercially.

---

## Phase 3 — The animated illustrations (Lottie)

This is the one that produces the look you screenshotted.

```bash
npm install lottie-react
```

```tsx
"use client";

import Lottie from "lottie-react";
import animation from "@/public/lottie/hero-orbit.json";

export function HeroAnimation() {
  return <Lottie animationData={animation} loop autoplay className="w-full" />;
}
```

To scrub a Lottie to scroll position instead of autoplaying, hold a ref and
drive `goToAndStop()` from a ScrollTrigger `onUpdate`.

**Where the files come from.** A Lottie is a JSON export of an After Effects
composition, made via the **Bodymovin** plugin. You have three routes:

1. Commission a motion designer — brief them: "After Effects, exported through
   Bodymovin as Lottie JSON, no expressions, no raster images."
2. Buy ready-made ones — LottieFiles marketplace, IconScout.
3. Make simple ones yourself in **Rive** (rive.app) or **LottieLab**, which are
   browser-based and much easier than learning After Effects.

**Keep them small.** A Lottie with embedded bitmaps can hit several MB. Ask for
pure vector, and run files through LottieFiles' optimiser. Lazy-load anything
below the fold with `next/dynamic` and `ssr: false`.

---

## Phase 4 — Only if you truly need 3D (React Three Fiber)

Skip this unless you want interactive geometry. It is a real jump in complexity
and bundle size.

```bash
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color="#fe4a23" roughness={0.3} />
      </mesh>
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
```

Load it lazily so the 3D runtime never blocks first paint:

```tsx
const Scene = dynamic(() => import("./scene").then((m) => m.Scene), {
  ssr: false,
  loading: () => <div className="aspect-square animate-pulse bg-surface" />,
});
```

Rules if you go here: cap `dpr` at 2, pause the render loop when the canvas is
off-screen (`frameloop="demand"`), and always ship a static image fallback for
mobile and for reduced-motion users.

**Easier alternative:** [Spline](https://spline.design) lets you design a 3D
scene visually and embed it with `@splinetool/react-spline`. Far less code,
though the runtime is heavy — measure before committing.

---

## Suggested order

| Step | Install | Effort | Visual payoff |
| --- | --- | --- | --- |
| 1 | `lenis` | 30 min | High — the whole site feels premium |
| 2 | `gsap @gsap/react` | Half a day | High — pinning, parallax, scrub |
| 3 | `lottie-react` + assets | Depends on the designer | Highest — this *is* the look |
| 4 | `three @react-three/fiber @react-three/drei` | Multiple days | Situational |

Everything at once:

```bash
npm install lenis gsap @gsap/react lottie-react
```

---

## Non-negotiables

- **`prefers-reduced-motion`.** `app/globals.css` already zeroes out transitions
  for it. Every library you add must be gated the same way — vestibular
  disorders are common and scroll-hijacking is a genuine accessibility problem.
- **Never animate `width`, `height`, `top` or `left`.** Only `transform` and
  `opacity` stay on the compositor thread.
- **Measure on a real mid-range Android**, not on a desktop. Scroll animation is
  where cheap phones fall over.
- **Watch the bundle.** Run `npx @next/bundle-analyzer` before and after. Lottie
  JSON in particular can balloon quietly.
- **`"use client"` on every animated component.** They touch the DOM, so they
  cannot be Server Components. Keep them small and leaf-level so the rest of the
  page stays server-rendered.
