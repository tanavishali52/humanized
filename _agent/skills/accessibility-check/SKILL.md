---
name: accessibility-check
description: Checks UI components for web accessibility (a11y) standards, including ARIA labels, focus states, and color contrast.
---

# Accessibility (a11y) Check Skill

Ensuring the application is usable for everyone, including those using assistive technologies.

## a11y Checklist

1.  **Aria Labels**: Do interactive elements (buttons, inputs) without visible text have `aria-label` or `aria-labelledby`?
2.  **Focus States**: Are focus states visible and high-contrast?
3.  **Keyboard Navigation**: Can the component be fully navigated and operated using only the keyboard (`Tab`, `Enter`, `Space`)?
4.  **Color Contrast**: Ensure text has a contrast ratio of at least 4.5:1 against its background.

## Review Steps

- Inspect the DOM for correct ARIA attributes.
- Test keyboard tab order.
- Verify that screen readers can interpret the component structure.
