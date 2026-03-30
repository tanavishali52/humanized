---
name: design-system-compliance
description: Ensures UI changes adhere to the Tailwind CSS v4 design system with HSL theming, glassmorphism utilities, and premium typography.
---

# Design System Compliance Skill (Tailwind CSS v4)

Use this skill to verify that any new UI components or style changes follow the project's premium Tailwind-based design language.

## Design Rules

1.  **Tailwind First**: All styling must use Tailwind utility classes. NO separate CSS files per component.
2.  **CSS Variables**: Use CSS variables from `globals.css` via `var(--primary)`, `var(--muted)`, etc. in `[var(--x)]` brackets.
3.  **Typography**: Use `font-[var(--font-heading)]` for headings and the default Inter for body text.
4.  **Glassmorphism**: Apply the global `.glass-card` class for interactive containers.
5.  **Transitions**: Every interactive element must include `transition-all duration-300` classes.
6.  **Custom CSS**: Only use `globals.css` `@layer components` for reusable utilities. Never create per-component CSS files.

## Checklist
- [ ] NO new `.css` files created for individual components.
- [ ] Colors reference CSS variables, NOT hardcoded hex/rgb.
- [ ] All buttons have hover, active, and disabled states.
- [ ] Layouts are responsive using Tailwind breakpoints (`md:`, `lg:`).
- [ ] Skeleton loaders used for any data-fetching operation.
