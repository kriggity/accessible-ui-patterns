# Form Error Messaging

This pattern demonstrates accessible inline validation: a form that catches invalid input on submit, identifies what's wrong, and gets keyboard and screen-reader users to the problem without guesswork.

It uses the HTML5 Constraint Validation API for the validation logic, `aria-describedby` to associate error messages with their fields, `aria-invalid` to communicate per-field state, and `role="status"` for the success announcement. JavaScript drives the UI updates; the validation rules themselves are declared in the HTML.

## Purpose

Form error messaging is one of the most consistently mishandled accessibility concerns in web forms. Common failures include:

- Error text that exists visually but isn't programmatically associated with its field
- Color-only error states with no text equivalent
- No way for a keyboard or screen-reader user to find the first invalid field
- Status messages that show up visually but are never announced

This pattern addresses each of those, using native validity tracking plus a thin layer of JavaScript for presentation and focus.

## Markup Structure

Each input:

- Declares its constraints natively (`required`, `type="email"`)
- References its error message(s) via `aria-describedby`
- Reflects state via `aria-invalid`

Each error message:

- Is a separate element with a stable `id`
- Carries a `data-validity` attribute naming the specific constraint it describes (e.g., `valueMissing`, `typeMismatch`)
- Is hidden by default via the `hidden` attribute

Inputs with multiple possible error states — email is both `required` and type-restricted — reference multiple message IDs in their `aria-describedby` value, space-separated. The JavaScript shows whichever message matches the actual failure.

The form has `novalidate` on it to opt out of native browser validation UI, keeping error presentation under JavaScript control while preserving the validity object for inspection.

## JavaScript Behavior

On submit:

1. Default form submission is prevented
2. The success message is cleared (handles the case where a previous submission left it visible)
3. For each input: `aria-invalid` is set based on overall validity; each referenced error span is shown or hidden based on whether its specific constraint is failing
4. After the per-input pass, the first invalid input in DOM order receives focus
5. If no input is invalid, the form is reset and the success message text is set in the `role="status"` live region

The `data-validity` attribute on each span is the link between the markup and the JS — the span declares which constraint it describes, and the JS looks that flag up dynamically on the input's validity object. Adding a new error case is a markup change, not a JS change.

## Accessibility Considerations

- Validation errors are announced via the input's accessible description when focus moves to the invalid field
- The success message uses `role="status"`, which is announced politely by assistive technology when the live region's content changes
- The live region is always present in the DOM and is empty initially — content insertion triggers the announcement reliably, where toggling visibility on a pre-populated region does not
- `aria-invalid="true"` communicates the per-field state to assistive technology independently of the visible error text
- Focus moves to the first invalid input on failed submit, so keyboard and screen-reader users land on the problem rather than having to hunt for it

## Known Tradeoffs

This implementation intentionally does not include:

- Validation on blur or input — errors only appear on submit
- An error summary at the top of the form linking to each invalid field
- Async or server-side validation
- Constraints beyond `required` and `type="email"`
- Visual styling beyond an outline for invalid fields
- Support for multiple instances of this form on a single page

These are reasonable extensions for a production form. They are out of scope for a demonstration focused on the per-field accessibility wiring.

## References

- ARIA Authoring Practices — Alert and Status Patterns
- WCAG 2.2 — Success Criterion 1.3.1 (Info and Relationships)
- WCAG 2.2 — Success Criterion 3.3.1 (Error Identification)
- WCAG 2.2 — Success Criterion 3.3.3 (Error Suggestion)
- WCAG 2.2 — Success Criterion 4.1.2 (Name, Role, Value)
- WCAG 2.2 — Success Criterion 4.1.3 (Status Messages)
- HTML Living Standard — Constraint Validation
