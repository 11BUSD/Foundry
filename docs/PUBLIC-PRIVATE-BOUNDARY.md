# Public / Private Boundary

## The simple version

This repository explains the method and shows a made-up example. The private repository contains the machinery that could become a competitive or security-sensitive operating system. They are separate Git histories, separate folders, and must have separate GitHub visibility.

## Publication rule

> Publish the method, never the private machinery or real evidence.

### Allowed here

- the Evidence Before Automation thesis;
- public terminology and high-level architecture;
- generic schemas and decision trees;
- synthetic examples and safe interface demonstrations;
- public contribution and security guidance.

### Never allowed here

- private orchestration prompts or model-routing policy;
- internal agent configuration, evaluator thresholds, or release gates;
- domain packs built from private or client information;
- source-ranking heuristics and authority weighting;
- customer, prospect, appraisal, legal, financial, medical, or regulatory records;
- credentials, `.env` files, security payload corpora, production connectors, or databases;
- private pricing, proposals, sales intelligence, or commercial workflows.

## Mechanical enforcement

`PUBLIC-MANIFEST.json` is a fail-closed inventory: a new file is rejected until someone deliberately classifies it. `scripts/check-public-boundary.mjs` also rejects sensitive path shapes, archives, key files, databases, local user paths, symbolic links, and several recognizable credential formats. GitHub Actions reruns the check on every pull request and every push to `main`.

These checks are guardrails, not a substitute for judgment. A person must still inspect context, because a harmless filename can contain sensitive meaning and an innocent sentence can reveal proprietary logic.

## Private core status

The private core is deliberately absent from this repository and its Git history. It should only be pushed to a separately created **private** GitHub repository after that repository's visibility, access list, branch rules, and secret settings are reviewed.
