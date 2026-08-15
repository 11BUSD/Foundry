# Evidence Before Automation

**Turn messy information into inspectable, defensible decisions before automating anything consequential.**

This public repository contains a methodology, generic schema, and clearly synthetic interface demonstration. It explains the public idea without publishing private operating logic, customer data, production connectors, or credentials.

> No consequential automation may exceed the evidence, authority, and trust envelope supporting it.

## In plain language

AI can produce a confident-sounding answer even when evidence is missing, stale, or contradictory. This project starts one step earlier: show what information supports each claim, what disagrees, what remains unknown, and which human is allowed to decide.

The included demo is a made-up equipment case. It concludes only that a packet may be prepared for human review. It does **not** make a legal, financial, insurance, appraisal, medical, regulatory, or payment decision.

## Run the demo

Open `index.html` directly in a browser. No installation, account, network call, API key, or model is required.

## Verify the repository

Node.js 20 or newer is required for the checks:

```bash
npm ci
npm test
```

The checks verify the public/private boundary, scan for recognizable secrets and sensitive file types, validate JSON, prevent unclassified files, confirm synthetic labeling, preserve the human-authority gate, and reject unsafe dynamic HTML rendering.

## What is here

- `METHODOLOGY.md` — the ten-part evidence model;
- `DECISION-TREE.md` — a generic readiness flow;
- `schemas/claim.schema.json` — a public contract for atomic claims;
- `examples/synthetic-case.json` — non-real example data;
- `index.html`, `styles.css`, `app.js` — the educational interface;
- `docs/ARCHITECTURE.md` — implemented scope and anti-drift design;
- `docs/PUBLIC-PRIVATE-BOUNDARY.md` — what may and may not be published;
- `docs/BUILD-REPORT.md` — layman and technical record of the initial build;
- `PUBLIC-MANIFEST.json` and `scripts/` — deterministic publication guardrails.

## Public versus private

This repository publishes the **method**, not the private machinery. The private core belongs in a separate private repository with a separate Git history, access policy, and release process. See `docs/PUBLIC-PRIVATE-BOUNDARY.md`.

## Current maturity

This is a public methodology and static synthetic demo, not a production evidence system. It does not retrieve sources, run AI reviewers, monitor drift, calculate real outcomes, or perform external actions. The interface illustrates the intended reasoning discipline; it must not be read as proof that those production capabilities exist here.

## Vocabulary

- **Evidence Kernel** — common provenance and decision primitives.
- **Domain Pack** — isolated knowledge and configuration for one bounded domain.
- **Decision Contract** — required evidence, permitted transformations, outputs, and authority.
- **Trust Envelope** — conditions under which a conclusion is allowed to remain valid.
- **Review Quorum** — independent and adversarial checks before consequential output.
- **Knowledge Quarantine** — unverified knowledge cannot enter trusted operation.
- **KBOM** — an inventory of claims, sources, rules, formulas, assumptions, and conflicts.

## License and security

The public materials are available under the [MIT License](LICENSE). For vulnerability reporting and public-release controls, see [SECURITY.md](SECURITY.md).
