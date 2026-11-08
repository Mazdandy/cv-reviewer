---
name: Editorial Diagnostic Engine
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#45474b'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777b'
  outline-variant: '#c5c6cb'
  surface-tint: '#5b5f65'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#181c21'
  on-primary-container: '#80848b'
  inverse-primary: '#c3c6ce'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#40000c'
  on-tertiary-container: '#f83256'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e2ea'
  primary-fixed-dim: '#c3c6ce'
  on-primary-fixed: '#181c21'
  on-primary-fixed-variant: '#43474d'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b6'
  on-tertiary-fixed: '#40000c'
  on-tertiary-fixed-variant: '#920028'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-score:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.04em
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-sans-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an ultra-sharp, editorial engineering discipline built for candid, authoritative talent assessment. It strips away conventional HR platitudes and soft SaaS gradients in favor of an unapologetic, audit-grade visual language. The target persona—discerning technical recruiters, executive headhunters, and rigorous candidates—requires evidence-first clarity, data density, and uncompromising precision.

The aesthetic fuses modern high-density technical minimalism with structured editorial layouts. Contrast is crisp and purposeful: stark paper-white and pale-slate backdrops ground the evaluation, while deep obsidian and structural charcoal scaffolding frame the data. Accent hits are strictly functional—rich emerald signals calibrated competency, while razor-sharp crimson pinpoints CV deficiencies, structural flaws, and weak verbiage. Visual elements communicate an exacting standard of truth, turning resume review into a surgical, metric-driven inspection.

## Colors

The palette operates under a high-contrast, diagnostic regime. It prioritizes legibility, clinical evaluation, and rapid scanning of resume strengths versus critical omissions.

- **Primary (`#090D12` - Deep Obsidian):** Used for foundational typography, primary callouts, terminal-level headers, and high-impact structural panels. Conveys institutional gravity and analytical authority.
- **Secondary (`#059669` - Rich Emerald):** Reserved strictly for validation success, superior scoring tiers, benchmark exceedances, and quantitative proof points.
- **Tertiary (`#E11D48` - Crimson Alert):** Deployed selectively for fatal resume flaws, missing metrics, formatting anomalies, ATS red flags, and depleted daily quotas.
- **Neutral (`#475569` - Slate Technical):** Forms the backbone for technical rubrics, metadata, secondary scoring labels, and subtle boundary scaffolding.

### Surface System
- **Base Canvas:** `#F8FAFC` (Crisp Chalk Slate), providing sterile, high-legibility contrast.
- **Surface Elevation 1 (Card/Containers):** `#FFFFFF` (Stark White).
- **Surface Elevation 2 (Technical Inset/Well):** `#0F172A` (Charcoal Void) for dedicated metric panels, terminal displays, and raw text diagnostics.
- **Border Scaffolding:** Subtle technical dividers at `#E2E8F0`, hardening to `#090D12` on active focal zones.

## Typography

The typographic system creates an interplay between analytical editorial headlines (`Inter`) and technical instrumentation (`JetBrains Mono`). 

- **Primary Typeface (Inter):** Carries all natural language prose, recruiter critiques, line-by-line feedback, and top-tier section headings. Tight letter spacing (`-0.01em` to `-0.03em`) creates an authoritative, print-editorial density.
- **Monospace Accent (JetBrains Mono):** Dedicated entirely to quantitative outputs: the 7-rubric scores, match percentages, token counts, ATS compatibility scores, file metadata sizes, and status chips.
- **Micro-Labels & Diagnostics:** Monospace strings rendered at `11px` must always be uppercase with open tracking (`+0.06em`) to ensure instant legibility across complex multi-column telemetry dashboards.

## Layout & Spacing

The layout model is anchored in a 12-column architectural grid engineered for high-density information architecture. It eliminates ornamental padding in favor of purposeful structure.

- **Desktop (>= 1200px):** 12 columns, `gutter: 1.25rem`, `margin: 2rem`, maximum container constraint of `1440px`. The screen splits cleanly into:
  - Left Pane (5 columns): File ingestion suite, raw text toggle, optional Job Description analyzer, and quota metrics.
  - Right Pane (7 columns): 7-rubric diagnostic matrix, candid critique feed, and ATS failure telemetry.
- **Tablet (768px - 1199px):** 8 columns, `gutter: 1rem`, `margin: 1.5rem`. The layout transitions to a vertical sequential flow: Ingestion top, followed by interactive rubric review.
- **Mobile (< 768px):** 4 columns, `gutter: 0.75rem`, `margin: 1rem`. Ingestion collapsing into tabbed view controls (`[Upload] / [Review]`) to preserve vertical screen efficiency.
- **Spacing Rhythm:** Tight modular scaling using `0.25rem` baseline increments. Cards and diagnostic wells maintain an internal padding of `space-lg` (`1.5rem`), while micro-metrics and badges adhere strictly to `space-xs` and `space-sm`.

## Elevation & Depth

This system intentionally rejects hazy blur effects, saturated shadows, and whimsical lighting models. Depth is established exclusively through **Tonal Stacking** paired with **Low-Contrast Micro-Borders**.

1. **Flat Substrate (Ground):** The main application viewport rests on `#F8FAFC`.
2. **Structural Panels (Tier 1):** Diagnostic cards and tool panels sit on `#FFFFFF`, framed with a precise 1px solid stroke (`#E2E8F0`). Zero drop shadow is cast in resting states.
3. **Data Wells & Monospace Terminals (Recessed Tier):** Telemetry readouts and code analysis zones sit sunken into surfaces using `#0F172A` with an internal 1px stroke (`#1E293B`).
4. **Active Focus & Hover (Tier 2):** When interacting with file drop zones or expandable rubrics, depth is signaled by hardening the 1px border to `#090D12` and applying an ultra-crisp, zero-blur offset stamp: `box-shadow: 2px 2px 0px 0px #090D12`.
5. **Overlays & Drawers (Tier 3):** Modal inspections use `#FFFFFF` backed by an opaque 40% `#090D12` dimmer, framed with an unequivocal 2px solid `#090D12` border.

## Shapes

The shape architecture relies on restrained micro-radii to project engineering rigor and clinical efficiency.

- **Primary Geometry (`roundedness: 1`):** All actionable buttons, file drop sectors, input panes, and diagnostic tiles use `0.25rem` (4px) radius. This prevents the toy-like softness of pill-shaped UI while eliminating the harshness of pure 0px corners.
- **Status Pills & Micro Indicators:** Quota counters, telemetry badges, and severity indicators preserve strict rectangularity with `rounded-sm` (2px to 4px) limits; fully circular/pill shapes are explicitly avoided except for round radio indicators.
- **Dividers & Structural Rules:** Line weights are razor-thin (1px), maintaining mathematical straightness across long horizontal data grids.

## Components

### Ingestion Zone (Drag-and-Drop + Text Switch)
- **Drop Target:** Surrounded by a 1px dashed border (`#94A3B8`) shifting to 1.5px solid `#090D12` on hover/drag-over. Crisp background tint `#F1F5F9`.
- **Validation Telemetry:** Real-time feedback strip displaying file type and size. Valid formats (`PDF`, `DOCX`, `<= 5.0 MB`) trigger an immediate rich emerald indicator (`#059669`). Files outside specifications show crimson error messaging (`#E11D48`) and border locking.
- **Paste Mode Toggle:** Segmented two-option control with 4px border radius. Active tab is `#090D12` text with `#FFFFFF` background and fine shadow.

### Buttons & Critical Triggers
- **Primary ("Analyze CV"):** Solid Obsidian (`#090D12`) background, crisp white typography (`#FFFFFF`), 4px border radius. Hover adds an offset 2px border accent.
- **Secondary / Ghost:** Transparent background, 1px solid `#CBD5E1` border, dark slate text.
- **Destructive / Reject:** Razor crimson border (`#E11D48`) with faint tint `#FFF1F2`, typography `#BE123C`.

### Daily Quota Meter
- Compact monospace HUD element anchored at the top right of the viewport.
- Contains a 4px-tall segmented progress track filled with obsidian bars, accompanied by a label: `QUOTA: 14/20 REMAINING [RESETS 00:00 UTC]`. Turns crimson when `< 3` reviews remain.

### The 7-Rubric Diagnostic Matrix
- Array of 7 distinct modular status tiles covering: Impact Quantification, ATS Parseability, Structural Density, Executive Brevity, Verbiage Precision, Career Trajectory, and Tech Competency.
- Each rubric card features:
  - Top line: Monospace identifier (`RUBRIC_01 // IMPACT_QUANT`) in muted slate.
  - Middle: Monospace metric value (`74/100`) color-coded emerald (`>= 80`), amber (`60-79`), or crimson (`< 60`).
  - Bottom: Expandable disclosure triangle revealing candid, unvarnished editorial critiques.

### Candid Critique Feed & Issue Badges
- Callout cards categorizing CV flaws into three explicit tiers:
  - `CRITICAL_DEFICIENCY` (Crimson indicator dot, stark white card, red border accent): Identifies vague phrasing, missing deliverables, or severe formatting issues.
  - `EVIDENCE_GAP` (Charcoal indicator dot): Highlights claims lacking quantitative backup.
  - `CALIBRATED_STRENGTH` (Emerald indicator dot): Confirms high-signal achievements.

### Input Fields & Job Description Target Analyzer
- Textareas for the optional Job Description target analyzer use high-contrast white surfaces, 1px `#CBD5E1` borders, and `JetBrains Mono` inputs at `13px` to emphasize technical prompt engineering. Active focus transitions border to `#090D12` with zero halo blur.