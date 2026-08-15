# Build Report — 2026-08-15

## Plain-language account

The supplied archive contained two products in one package: a public explanation/demo and a private operating core. The GitHub destination is public, so only the public product was prepared for publication. The private product was placed in a separate local folder and given its own Git history; none of it is copied, linked, or committed here.

I then added a locked inventory of files, a scanner for obvious secrets and private material, automated consistency checks, GitHub review templates, security guidance, and continuous verification. The demo was also changed to use safer browser APIs instead of building HTML strings.

The practical result is that a casual future file copy should fail the automated check instead of quietly reaching GitHub. Human review remains required because no scanner can understand every kind of sensitive business information.

The six private build prompts were also turned from loose instructions into governed contracts. In plain language, each now has a name, version, required information, promised result, safety rules, and clear reasons to stop. A content lock detects accidental edits, and tests reject missing sections, path escapes, or attempts to permit external actions. Only this high-level description is public; the prompts and their controls remain private.

After publication, the GitHub repository itself was locked down. Changes to `main` must now arrive through a reviewed pull request and pass both the project verification and GitHub's CodeQL analysis. GitHub also watches for leaked secrets and vulnerable dependencies. Even an administrator cannot bypass the protected-branch rules.

## Technical account

### Source integrity

- The standalone public and private ZIPs were byte-for-byte equivalent to their matching folders in the combined bundle.
- Every file in the combined bundle passed its supplied SHA-256 checksum manifest.
- The input archives contained no symbolic links.

### Repository boundary

- `11BUSD/Foundry` is the public repository.
- This Git history contains only the public tree and public governance files.
- `PUBLIC-MANIFEST.json` declares every publishable file and rejects unlisted additions.
- The boundary scanner rejects private-core path signatures, credential/key/archive/database files, symbolic links, local user paths, and recognizable token formats.

### Hallucination and drift controls

- The README and architecture state the repository's actual maturity and non-capabilities.
- The demo remains explicitly synthetic and preserves a visible contradiction plus required human authority.
- Verification pins the public claim-status vocabulary and checks the example's coverage ranges, labeling, UI status, disclaimer, and safe DOM rendering.
- GitHub Actions runs the same deterministic checks on pushes and pull requests.
- GitHub-owned workflow actions are pinned to reviewed, signed commit SHAs; Dependabot monitors them for updates.
- Six private prompt roles have stable IDs and semantic versions, required input/output/safety/stop contracts, SHA-256 content locks, and deterministic registry tests.
- Private prompt bodies, manifest data, lock hashes, evaluator rules, and registry tooling remain outside this public repository and its Git history.

### Technical-debt reduction

- Runtime dependencies remain at zero.
- Browser rendering uses `textContent` and DOM construction rather than `innerHTML`.
- Formatting, line endings, ignored sensitive files, contribution rules, security reporting, and pull-request review criteria are now explicit.
- Dependabot watches the pinned GitHub Actions references for reviewed updates.

### Verified GitHub host controls

- `main` requires a current branch, one Write-level approval, resolved review conversations, `verify`, and `Analyze (javascript-typescript)`.
- New commits dismiss stale approvals; administrators are subject to the same branch rules.
- Linear history is required, and force-pushes plus branch deletion are blocked.
- Only squash merging is enabled; merged feature branches are deleted automatically.
- GitHub Actions default to read-only permissions and cannot approve pull requests.
- Only GitHub-owned actions may run, and every action reference must use an immutable commit SHA.
- Secret scanning, push protection, private vulnerability reporting, dependency alerts, automated security fixes, Dependabot security updates, and weekly CodeQL default setup are enabled.
- The post-configuration audit found zero open CodeQL, secret-scanning, or Dependabot alerts.

### Remaining limits

- Pattern-based secret scanning can miss novel secrets or flag harmless text.
- GitHub reports its optional non-provider secret-pattern and secret-validity modes as disabled for this repository; standard secret scanning and push protection are active.
- The public interface is educational; it is not a real evidence engine.
- The private core requires its own private GitHub destination before it can be published safely.
