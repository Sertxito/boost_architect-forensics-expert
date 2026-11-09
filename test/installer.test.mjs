import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test, { afterEach } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const installer = path.join(root, 'scripts', 'install.mjs');
const targets = [];

function makeTarget() {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), 'boost-forensics-test-'));
  targets.push(target);
  return target;
}

function runInstaller(target, ...args) {
  return spawnSync(process.execPath, [installer, '--target', target, ...args], {
    cwd: root,
    encoding: 'utf8'
  });
}

afterEach(() => {
  for (const target of targets.splice(0)) fs.rmSync(target, { recursive: true, force: true });
});

test('dry-run previews both Copilot assets and supporting resources without writing', () => {
  const target = makeTarget();
  const result = runInstaller(target, '--dry-run');

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /support files=\d+/);
  assert.equal(fs.existsSync(path.join(target, '.github')), false);
});

test('install includes and rewrites references to supporting resources', () => {
  const target = makeTarget();
  const result = runInstaller(target);

  assert.equal(result.status, 0, result.stderr);
  const agentPath = path.join(target, '.github', 'agents', 'forensics-architect-forensics.agent.md');
  const templatePath = path.join(target, '.github', 'boosts', 'forensics', 'templates', 'architecture-review.md');
  const skillPath = path.join(target, '.github', 'skills', 'forensics-architecture-review', 'SKILL.md');

  assert.equal(fs.existsSync(agentPath), true);
  assert.equal(fs.existsSync(templatePath), true);
  assert.equal(fs.existsSync(skillPath), true);
  assert.match(fs.readFileSync(agentPath, 'utf8'), /\.github\/boosts\/forensics\//);
  assert.match(fs.readFileSync(skillPath, 'utf8'), /\.github\/boosts\/forensics\/checklists\/architecture-audit\.md/);

  const check = runInstaller(target, '--check');
  assert.equal(check.status, 0, check.stderr);
  assert.match(check.stdout, /OK: all installed files present/);

  const secondInstall = runInstaller(target);
  assert.equal(secondInstall.status, 0, secondInstall.stderr);
  assert.match(secondInstall.stdout, /0 installed, \d+ already installed by this boost/);
});

test('check fails when an expected supporting resource is missing', () => {
  const target = makeTarget();
  const install = runInstaller(target);
  assert.equal(install.status, 0, install.stderr);

  fs.rmSync(path.join(target, '.github', 'boosts', 'forensics', 'templates', 'architecture-review.md'));
  const check = runInstaller(target, '--check');

  assert.equal(check.status, 1);
  assert.match(check.stderr, /Missing .*architecture-review\.md/);
});

test('preserves pre-existing supporting files and leaves them untouched on uninstall', () => {
  const target = makeTarget();
  const templatePath = path.join(target, '.github', 'boosts', 'forensics', 'templates', 'architecture-review.md');
  fs.mkdirSync(path.dirname(templatePath), { recursive: true });
  fs.writeFileSync(templatePath, 'project-owned template');

  const install = runInstaller(target);
  assert.equal(install.status, 0, install.stderr);
  assert.equal(fs.readFileSync(templatePath, 'utf8'), 'project-owned template');
  assert.match(install.stderr, /already existed in the target/);

  const uninstall = runInstaller(target, '--uninstall');
  assert.equal(uninstall.status, 0, uninstall.stderr);
  assert.equal(fs.readFileSync(templatePath, 'utf8'), 'project-owned template');
  assert.equal(fs.existsSync(path.join(target, '.github', 'agents', 'forensics-architect-forensics.agent.md')), false);
  assert.equal(fs.existsSync(path.join(target, '.github', '.boost-boost-architect-forensics-expert.manifest.json')), false);
});
