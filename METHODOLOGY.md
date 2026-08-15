# Evidence Before Automation: How to Turn Messy Information into Defensible Decisions

The fashionable question in AI is: **What can we automate?**

A better first question is: **What would justify the decision?**

In consequential work, a plausible answer is not enough. A reviewer may need to know where each material fact came from, how a number was transformed, what evidence disagreed, which assumptions were introduced, what remained unknown, and who had authority to make the final call.

That leads to a simple rule:

> Before automating a consequential decision, first make the sources, claims, transformations, contradictions, uncertainty, and human authority inspectable.

## A ten-part model

### 1. Sources
Record origin, date, author/publisher, jurisdiction, version, access path, and integrity information.

### 2. Claims
Extract atomic assertions. Do not treat a whole document as one undifferentiated truth object.

### 3. Evidence
Link each material claim to the evidence that supports it.

### 4. Transformations
Record calculations, normalizations, mappings, model outputs, and assumptions as replayable steps.

### 5. Contradictions
Preserve disagreement rather than averaging it away.

### 6. Uncertainty
Distinguish missing evidence, conflicting evidence, estimates, and unknowns.

### 7. Authority
Determine who or what is entitled to define a rule and who is entitled to make the final decision.

### 8. Decision
Output only what the current evidence and authority permit.

### 9. Auditability
A later reviewer should be able to reconstruct the path from source to conclusion.

### 10. Automation
Automate only the steps whose trust envelope has been defined and tested.

## Why multiple AI reviewers are not automatically independent

Three agents reading the same retrieval results can reproduce the same mistake. Independent review requires diversity of retrieval paths, source classes, assumptions, and adversarial objectives.

A useful review quorum might contain:

- a primary-source verifier
- an independent researcher who does not receive the first verifier's sources
- an adversarial reviewer whose explicit job is to disprove the working conclusion

If those reviewers disagree, the system should expose the conflict rather than manufacturing a confidence number.

## Decision readiness instead of fake certainty

Avoid uncalibrated statements like “92% true.” Prefer measurable dimensions such as evidence coverage, primary-source coverage, freshness, jurisdiction fit, reproducibility, and unresolved contradictions.

A decision can then be labelled:

- READY
- READY WITH LIMITATIONS
- INSUFFICIENT EVIDENCE
- CONFLICTING EVIDENCE
- EXPERT REVIEW REQUIRED

## The design ideal

The first screen should be understandable to a layperson. The underlying evidence trail should satisfy an auditor.

**Simple above. Forensic underneath.**
