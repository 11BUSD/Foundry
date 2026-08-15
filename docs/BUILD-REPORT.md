# Build Report — 2026-08-15

## Plain-language account

The supplied archive contained two products in one package: a public explanation/demo and a private operating core. The GitHub destination is public, so only the public product was prepared for publication. The private product was placed in a separate local folder and given its own Git history; none of it is copied, linked, or committed here.

I then added a locked inventory of files, a scanner for obvious secrets and private material, automated consistency checks, GitHub review templates, security guidance, and continuous verification. The demo was also changed to use safer browser APIs instead of building HTML strings.

The practical result is that a casual future file copy should fail the automated check instead of quietly reaching GitHub. Human review remains required because no scanner can understand every kind of sensitive business information.

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

### Technical-debt reduction

- Runtime dependencies remain at zero.
- Browser rendering uses `textContent` and DOM construction rather than `innerHTML`.
- Formatting, line endings, ignored sensitive files, contribution rules, security reporting, and pull-request review criteria are now explicit.
- Dependabot watches GitHub Actions references for updates.

### Remaining limits

- Pattern-based secret scanning can miss novel secrets or flag harmless text.
- Branch settings and GitHub security features are repository-host controls and must be verified after the first push.
- The public interface is educational; it is not a real evidence engine.
- The private core requires its own private GitHub destination before it can be published safely.
