# Tabs Pattern

This component implements a minimal, accessible tabs interface using
semantic HTML and a roving tabindex model.

It follows the ARIA Authoring Practices pattern for horizontal tabs,
with a focus on clarity, predictability, and restraint rather than
feature completeness.

## Purpose

Tabs are commonly implemented as visual toggles without proper keyboard
or focus management. This pattern demonstrates how to:

- Preserve semantic relationships between tabs and panels
- Maintain logical focus order
- Support arrow key navigation within the tablist
- Ensure only the active tab remains in the tab order

The goal is correctness, not configurability.

## Markup Structure

Each tab:

- Uses `role="tab"`
- References its associated panel via `aria-controls`
- Reflects state via `aria-selected`
- Participates in a roving tabindex model

Each panel:

- Uses `role="tabpanel"`
- References its controlling tab via `aria-labelledby`
- Is hidden using the `hidden` attribute when inactive

The DOM order preserves logical reading flow independent of styling.

## Keyboard Interaction

When focus is inside the tablist:

- **ArrowLeft / ArrowRight** move focus between tabs
- Arrow navigation both moves focus and activates the corresponding panel.
- Only the active tab is tabbable

Standard `Tab` navigation moves focus out of the tablist
and into the active panel content.

## Accessibility Considerations

- Focus always moves programmatically when selection changes
- Only one tab is exposed in the tab order at a time
- Inactive panels are fully removed from the accessibility tree via `hidden`
- The implementation avoids `aria-live` or additional announcements,
  relying instead on correct semantic relationships

This pattern is tested for keyboard-only navigation and screen reader
consistency in modern browsers.

## Known Tradeoffs

This implementation intentionally does not include:

- Tab wrapping from last → first
- Home / End key support
- Vertical orientation handling
- URL state synchronization
- Animation or transition effects

These omissions are deliberate to keep the example focused and readable.

## When to Use

Use this pattern for:

- Small, related content sections
- Interfaces where users may compare adjacent panels
- Situations where content should remain in the DOM

Do not use tabs to hide critical content that users must discover.