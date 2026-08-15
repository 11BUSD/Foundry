# Contributing

This repository publishes the Evidence Before Automation method without publishing private operating machinery.

Before opening a pull request:

1. Keep examples synthetic and obviously labeled.
2. Do not add client data, internal prompts, domain packs, source-ranking heuristics, evaluator thresholds, production connectors, credentials, or private commercial material.
3. Add every new file to `PUBLIC-MANIFEST.json` with a plain description.
4. Preserve sources, contradictions, uncertainty, jurisdiction, effective dates, and human authority where they matter.
5. Avoid unsupported precision or claims that the demo performs work it does not perform.
6. Run `npm test` and review the full Git diff.

The public demo has no runtime dependencies. Prefer browser-native HTML, CSS, and JavaScript unless a dependency has a clear, reviewed benefit.
