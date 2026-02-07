# Modal / Dialog

This pattern demonstrates a basic accessible modal dialog using
semantic HTML, minimal JavaScript, and explicit focus management.

## Markup

- Uses a native `<button>` to trigger the dialog
- Dialog element includes `role="dialog"` and `aria-modal="true"`
- Dialog is labeled via `aria-labelledby`
- Dialog is hidden using the `hidden` attribute

The dialog content appears in the DOM after the trigger to preserve
logical reading order.

## JavaScript

The script handles:
- Opening and closing the dialog
- Saving and restoring focus
- Closing on Escape
- Preventing background interaction via an overlay

JavaScript does not generate markup or manage layout.

## Accessibility Notes

### Keyboard
- Trigger button opens the dialog
- Focus moves into the dialog on open
- Escape closes the dialog
- Focus returns to the trigger on close

### Screen readers
- Dialog is announced with its label
- Background content is visually obscured
- Dialog content is read in logical order

### Motion
- No animation is used
- Respects reduced motion preferences by default

## Known Tradeoffs

- Focus is not fully trapped within the dialog
  - This avoids complex tab management in the MVP
- Background content is not marked inert
  - Overlay prevents pointer interaction only
- Only one dialog per page is supported
  - Simplifies state management

These tradeoffs are intentional and documented to keep the pattern
focused and understandable.