# Accessible UI Patterns

A small, intentional set of front-end interaction patterns built in vanilla JavaScript, with accessibility and UX correctness as first-class concerns.

## Project Intent

This repository is part learning exercise, part portfolio artifact. The author writes the code by hand to build hands-on understanding — the goal is being able to honestly explain any line of it. AI assistance is welcome as a reviewer, refiner, and writing collaborator, but the implementation code comes from the author. This is deliberate: a portfolio piece the author can't talk through line-by-line isn't a portfolio piece.

## Constraints

These are non-negotiable and should be respected in any guidance or suggestions:

- **Vanilla JavaScript only** — no frameworks, no libraries, no build tooling
- **Semantic HTML first** — ARIA only where native semantics are insufficient
- **Minimal CSS** — functional, not decorative
- **Each component self-contained** — its own directory, no shared utilities

## Working with AI Tooling on This Project

If you're an AI assistant collaborating on this codebase, follow these rules:

**Don't give copy-paste answers.**
The goal is to understand what's being built, not just ship it. If asked how to implement something, explain the concept or approach first and let the author write the code. If they're clearly stuck or going in circles, you can be more direct — but default to guiding over giving.

**Match the kind of help to the situation.**

- If exploring a concept: explain it, then let the author apply it.
- If they've written something: review it and tell them what's working, what isn't, and why.
- If they're blocked: a targeted hint or a leading question is usually enough.
- If they explicitly ask for an example or solution: provide it.

**Keep explanations concise.** Get to the point, use plain language, and trust the author to ask follow-ups if they need more.

**Push back when it matters.** If they're approaching something in a way that would hurt accessibility, readability, or maintainability — say so and explain why. Better to be corrected early than build on a shaky foundation.

## Patterns

| Pattern | Status |
|---|---|
| Modal | Complete |
| Tabs | Complete |
| Button | In progress |
| Form Error Messaging | In progress |

Each pattern's directory contains its own README documenting scope, accessibility approach, and intentional limitations.

## Commit Conventions

Commit subjects follow Conventional Commits where applicable:

- `feat:` — new component or new behavior in an existing component
- `fix:` — correctness bug in an existing pattern
- `docs:` — README or notes-only changes
- `refactor:` — restructuring without behavior change
- `chore:` — repo hygiene (gitignore, file moves, etc.)

Subjects use imperative mood ("add tabs interaction," not "added tabs interaction"). Optional scope identifies the affected component (`feat(tabs):`). For non-trivial commits, body text explains *why* — not *what*.
