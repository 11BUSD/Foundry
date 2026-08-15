import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'PUBLIC-MANIFEST.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const ignoredDirectories = new Set(['.git', 'node_modules', 'coverage', 'dist', '.cache']);
const ignoredFiles = new Set(['.DS_Store', 'Thumbs.db']);
const forbiddenPathPatterns = [
  /(^|\/)PRIVATE-REPO(\/|$)/i,
  /(^|\/)Foundry-private(\/|$)/i,
  /(^|\/)domain-foundry-core(\/|$)/i,
  /(^|\/)domain-packs(\/|$)/i,
  /(^|\/)prompts(\/|$)/i,
  /(^|\/)config\/agents(\/|$)/i,
  /(^|\/)apps\/control-plane(\/|$)/i,
  /(^|\/)private(\/|$)/i,
  /(^|\/)\.env(?:\.|$)/i,
  /\.(?:zip|tar|gz|pem|key|p12|pfx|sqlite|db)$/i
];

const secretPatterns = [
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ['GitHub token', /gh[pousr]_[A-Za-z0-9]{30,}/],
  ['OpenAI-style key', /sk-(?:proj-)?[A-Za-z0-9_-]{20,}/],
  ['AWS access key', /AKIA[0-9A-Z]{16}/],
  ['Slack token', /xox[baprs]-[A-Za-z0-9-]{20,}/],
  ['local user path', /\/Users\/[A-Za-z0-9._-]+\//]
];

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    if (entry.isFile() && ignoredFiles.has(entry.name)) continue;

    const absolute = path.join(directory, entry.name);
    const relative = path.relative(root, absolute).split(path.sep).join('/');

    if (entry.isSymbolicLink()) {
      throw new Error(`Symbolic links are not allowed in the public repository: ${relative}`);
    }
    if (entry.isDirectory()) files.push(...walk(absolute));
    if (entry.isFile()) files.push(relative);
  }
  return files;
}

const findings = [];
const actualFiles = walk(root).sort();
const declaredFiles = Object.keys(manifest.files).sort();

for (const file of actualFiles) {
  if (!declaredFiles.includes(file)) findings.push(`Unclassified file: ${file}`);
  if (forbiddenPathPatterns.some((pattern) => pattern.test(file))) {
    findings.push(`Forbidden public path: ${file}`);
  }

  const absolute = path.join(root, file);
  const content = fs.readFileSync(absolute);
  if (content.includes(0)) continue;
  const text = content.toString('utf8');
  for (const [label, pattern] of secretPatterns) {
    if (pattern.test(text)) findings.push(`Possible ${label} in ${file}`);
  }
}

for (const file of declaredFiles) {
  if (!actualFiles.includes(file)) findings.push(`Manifest entry is missing: ${file}`);
}

if (manifest.classification !== 'PUBLIC') findings.push('Manifest classification must be PUBLIC');
if (manifest.rules?.default_for_unlisted_files !== 'REJECT') findings.push('Unlisted files must default to REJECT');
if (manifest.rules?.data_policy !== 'synthetic-only') findings.push('Public data policy must remain synthetic-only');
if (manifest.rules?.production_secrets_allowed !== false) findings.push('Production secrets must remain forbidden');
if (manifest.rules?.private_core_allowed !== false) findings.push('Private core must remain forbidden');

if (findings.length) {
  console.error(`PUBLIC BOUNDARY CHECK FAILED\n- ${findings.join('\n- ')}`);
  process.exit(1);
}

console.log(`PUBLIC BOUNDARY CHECK PASSED — ${actualFiles.length} classified files; no private paths or recognizable secrets found.`);
