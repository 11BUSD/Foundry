# Security Policy

## Scope

This is a public methodology and synthetic demonstration. It does not accept real client evidence, credentials, regulated decisions, production connectors, or proprietary operating logic.

## Report a vulnerability privately

Do not open a public issue for a suspected vulnerability or accidental data exposure. Use GitHub's **Security** tab and its private vulnerability-reporting flow for this repository.

Include the affected file or workflow, the impact, reproduction steps, and a safe proof of concept. Do not include live secrets or personal data.

## Public-release controls

Every proposed change must pass `npm test`. The checks fail when:

- a file is not declared in `PUBLIC-MANIFEST.json`;
- a private-core path, archive, credential file, database, or local user path is present;
- recognizable credential formats are detected;
- public examples stop being explicitly synthetic;
- the human-authority or contradiction safeguards disappear;
- the claim schema or demo drifts away from the reviewed public contract.

Automated scanning reduces risk but cannot prove that publication is safe. A human must still review the diff and the meaning of every new file.

## Supported versions

Only the latest commit on `main` is supported.
