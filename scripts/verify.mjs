import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const findings = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function readJson(relativePath) {
  try {
    return JSON.parse(read(relativePath));
  } catch (error) {
    findings.push(`${relativePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

const manifest = readJson('PUBLIC-MANIFEST.json');
const schema = readJson('schemas/claim.schema.json');
const example = readJson('examples/synthetic-case.json');
const packageJson = readJson('package.json');
const html = read('index.html');
const app = read('app.js');

if (manifest?.repository !== '11BUSD/Foundry') findings.push('Public manifest points to the wrong repository');
if (packageJson?.private !== true) findings.push('package.json must prevent accidental npm publication');
if (!packageJson?.engines?.node) findings.push('package.json must declare a supported Node version');

const requiredClaimFields = ['claim_id', 'statement', 'status', 'source_refs'];
for (const field of requiredClaimFields) {
  if (!schema?.required?.includes(field)) findings.push(`Claim schema is missing required field: ${field}`);
}

const allowedStatuses = ['supported', 'disputed', 'unknown', 'superseded'];
if (JSON.stringify(schema?.properties?.status?.enum) !== JSON.stringify(allowedStatuses)) {
  findings.push('Claim status vocabulary drifted from the reviewed public contract');
}

if (example) {
  if (!example.case_id?.startsWith('SYNTH-')) findings.push('Example case must use a clearly synthetic identifier');
  if (!example.domain?.startsWith('synthetic-')) findings.push('Example domain must be explicitly synthetic');
  if (example.human_authority_required !== true) findings.push('Example must preserve the human authority gate');
  if (example.unresolved_contradictions < 1) findings.push('Example must preserve at least one visible contradiction');
  for (const field of ['evidence_coverage', 'primary_source_coverage']) {
    if (typeof example[field] !== 'number' || example[field] < 0 || example[field] > 1) {
      findings.push(`${field} must be a number from 0 to 1`);
    }
  }
  if (!html.includes(example.case_id)) findings.push('HTML and synthetic example case identifiers disagree');
  if (!html.includes(example.status.replaceAll('_', ' '))) findings.push('HTML and synthetic example statuses disagree');
}

for (const asset of ['styles.css', 'app.js']) {
  if (!html.includes(asset)) findings.push(`index.html does not reference ${asset}`);
}
if (!html.includes('Synthetic educational demo')) findings.push('Demo disclaimer is missing from the UI');
if (!app.includes('textContent')) findings.push('Demo rendering must use textContent for inserted text');
if (app.includes('.innerHTML')) findings.push('Demo rendering must not use innerHTML');

if (findings.length) {
  console.error(`VERIFICATION FAILED\n- ${findings.join('\n- ')}`);
  process.exit(1);
}

console.log('VERIFICATION PASSED — JSON, public contract, synthetic labeling, human gate, UI assets, and safe DOM rendering are consistent.');
