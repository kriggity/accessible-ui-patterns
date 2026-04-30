# Project Decisions

This document records project-level decisions that don't fit inside any single pattern's README. Per-pattern decisions live in each pattern's README.

This document is intended to be revisited. Standards evolve, tooling changes, and scope may shift. Updates should be dated.

## Project Scope

This repository is a **demonstration**, not a library.

Each pattern is implemented for a single, controlled instance. The implementations are correct in their own scope but assume a single instance per page and known markup — they do not gracefully handle two modals, two tab groups, or initialization against arbitrary DOM.

This is deliberate. The patterns exist to demonstrate accessible interaction behavior — semantic structure, ARIA usage, focus management, keyboard support — and the cost of supporting multiple instances and arbitrary markup would obscure those concerns.

A library-grade refactor is intended as a future phase, after the initial demonstration set is complete.

## Standards Baseline

This project targets **WCAG 2.2** as of **2026-04-30**.

Each pattern's README cites the specific Success Criteria it addresses. Where ARIA is used, the implementations follow the ARIA Authoring Practices Guide patterns, with deviations documented per-pattern under *Known Tradeoffs*.

When WCAG advances, patterns may require re-evaluation. That work is intentional and expected, not a defect of the existing implementations.

## Assistive Technology Coverage

Testing has been **manual and incomplete**. Specifically:

- Browser-based functional testing during development
- The WAVE browser extension for static evaluation

Testing has *not* yet included:

- Screen reader verification (NVDA, JAWS, VoiceOver, Orca)
- Automated tooling beyond WAVE (axe, Pa11y, Lighthouse)
- Disciplined keyboard-only testing across browsers and operating systems
- High-contrast or forced-colors verification

Patterns are designed to behave correctly under assistive technology by virtue of semantic correctness and adherence to ARIA guidance. They have not been *verified* against AT in any disciplined fashion. Closing this gap is planned future work.

## Project Constraints

- **Vanilla JavaScript only.** No frameworks, no libraries.
- **No build tooling.** Files are served and run as written.
- **Minimal CSS.** Styling is functional, not decorative.
- **Semantic HTML first.** ARIA is added only where native semantics are insufficient.
- **Each component self-contained.** No shared utilities, no cross-pattern dependencies.

These shape every implementation choice in the repository. The root README states them; this document records the reasoning.

## Pattern Selection — Included

Four patterns were selected for this initial set:

- **Button** — the semantic baseline. Demonstrates what the native element provides without intervention.
- **Modal / Dialog** — focus lifecycle management. Entering, escaping, and returning focus correctly.
- **Tabs** — the roving tabindex pattern. Exposing only the active control to the tab order while keeping all controls reachable.
- **Form Error Messaging** — accessible validation feedback via `aria-describedby` and intentional focus management.

Each demonstrates a distinct accessibility concern commonly implemented incorrectly. Together they cover the three axes that matter most for interaction-pattern accessibility: native semantics, ARIA semantics, and focus management.

## Pattern Selection — Out of Scope

Several patterns that would be reasonable inclusions are deliberately not present:

- **Disclosure (show / hide)** — adjacent to modal's expand-collapse logic. Considered for future addition.
- **Toast / status messaging** — `aria-live` regions warrant their own careful treatment of timing and politeness levels.
- **Combobox / autocomplete** — the most complex of the standard ARIA patterns; implementing it correctly is a project of its own.
- **Menu / dropdown** — overlaps substantially with tabs' roving tabindex model. Worth a separate treatment, not an additive one.
- **Tooltip** — timing, dismissal, and pointer/keyboard parity warrant separate scope.

These omissions are scope choices, not oversights.

## Document History

- **2026-04-30** — initial version. WCAG baseline established at 2.2. Project framed as demonstration; library refactor noted as a planned future phase.
