import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = path.resolve(process.cwd());
const checks = [
  ['node', ['--check', 'game.js']],
  ['node', ['tools/check-github-pages.mjs']],
  ['node', ['tools/check-assets.mjs']],
  ['node', ['tools/check-naming.mjs']],
  ['node', ['tools/check-touch-targets.mjs']]
];

const lines = [];
lines.push(`# 海城 MVP v4 QA Report`);
lines.push('');
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push('');

let allOk = true;
for (const [cmd, args] of checks) {
  const r = spawnSync(cmd, args, { cwd: root, encoding: 'utf8' });
  const label = `${cmd} ${args.join(' ')}`;
  lines.push(`## ${label}`);
  lines.push('');
  lines.push(r.status === 0 ? 'PASS' : 'FAIL');
  lines.push('');
  if (r.stdout) lines.push('```\n' + r.stdout.trim() + '\n```');
  if (r.stderr) lines.push('```\n' + r.stderr.trim() + '\n```');
  lines.push('');
  if (r.status !== 0) allOk = false;
}

fs.mkdirSync(path.join(root, 'qa'), { recursive: true });
fs.writeFileSync(path.join(root, 'qa/qa_report.md'), lines.join('\n'));
console.log(allOk ? 'QA report generated: qa/qa_report.md' : 'QA report generated with failures: qa/qa_report.md');
process.exit(allOk ? 0 : 1);
