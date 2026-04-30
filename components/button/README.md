# Button Pattern

The native `<button>` element provides focus, keyboard activation, role, name, and state without any JavaScript or ARIA. This page is the baseline the rest of the patterns in this repository measure against — modal, tabs, and form errors all add complexity because their elements have no native equivalent. The button does, so this page has none.

## Purpose

Custom button implementations frequently get accessibility wrong. Replacing `<button>` with a styled `<div>` or `<span>` is one of the most common mistakes in modern front-end work, and once made, it requires significant code to recover the behavior the platform provides for free.

The correct pattern, in most cases, is also the simplest: use the element.

## What the Native Element Provides

Without scripting or ARIA:

- **Role** — exposed as a button to assistive technologies
- **Name** — derived from the button's text content
- **Focus** — receives keyboard focus with a visible default indicator
- **Keyboard activation** — triggers on `Enter` and `Space`
- **State** — `disabled` removes the element from the tab order and the accessibility tree
- **Form behavior** — defaults to submitting the parent `<form>`; configurable via the `type` attribute

Each of these would have to be re-implemented to match if the element were swapped for a non-semantic alternative.

## What a Non-Semantic Replacement Would Require

Recreating equivalent behavior with a `<div>` or `<span>` requires, at minimum:

- `role="button"` to expose the correct role
- `tabindex="0"` to make the element focusable
- A keydown handler for `Enter` and `Space`
- An accessible name via visible text or `aria-label`
- A custom focus indicator
- Manual handling of disabled state via `aria-disabled` and tabindex management
- Form integration logic when used in a form context

This is rarely worth doing. When `<button>`'s default styling is the obstacle, CSS is the answer — not a different element.

## Intentional Non-Goals

This page deliberately does not include:

- Visual variants (primary, secondary, ghost)
- States beyond the default (loading, pressed, disabled)
- Toggle button behavior via `aria-pressed`
- Icon-only buttons and their accessible name patterns
- Theming or styling concerns

These are legitimate variations, but they belong in a design system rather than a baseline reference.

## References

- ARIA Authoring Practices — Button Pattern
- WCAG 2.2 — Success Criterion 4.1.2 (Name, Role, Value)
- HTML Living Standard — `<button>` element
