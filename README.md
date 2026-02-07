# Accessible UI Patterns

This repository contains a small, intentional set of front-end interaction patterns built in vanilla JavaScript, with accessibility and UX correctness as first-class concerns.

The goal of this project is not to provide a full component library, nor to showcase visual design. Instead, it focuses on a handful of common UI patterns that are frequently implemented incorrectly — and demonstrates how they can be built with clear semantics, predictable behavior, and well-documented tradeoffs.

Each pattern is designed to:
- Start with native HTML semantics
- Add JavaScript only where behavior requires it
- Follow established accessibility guidance (ARIA Authoring Practices, WCAG)
- Favor clarity and maintainability over abstraction

This project intentionally avoids:
- Frameworks or build tooling
- Design system scope or theming concerns
- Feature-complete or highly configurable components

The components here reflect how these patterns are typically built and reasoned about in real production environments: under constraints, with imperfect requirements, and with an emphasis on user experience rather than technical novelty.

## Structure

Each component is documented with:
- **Markup** — minimal, semantic HTML
- **JavaScript** — focused interaction logic
- **Accessibility notes** — keyboard and screen reader behavior
- **Known tradeoffs** — explicit non-goals and design decisions

These notes are as important as the code itself.

## Audience

This repository is intended for front-end developers and UX engineers who care about interaction quality, accessibility, and long-term maintainability — particularly in content-driven or design-system-adjacent environments.

It is not a tutorial, and it is not meant to be dropped directly into production without adaptation.