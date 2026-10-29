---
name: reverse-engineering
description: 'Reconstruct unknown or undocumented systems from code, config, runtime topology and dependency evidence. This is the forensic archaeology skill: when "nobody knows how it works", this extracts the truth from artifacts.'
---

# Skill: Reverse Engineering

## Purpose
Reconstruct unknown or undocumented systems from code, config, runtime topology and dependency evidence. This is the forensic archaeology skill: when "nobody knows how it works", this extracts the truth from artifacts.

## Inputs
- Source code tree (primary evidence).
- Configuration files (environment, build, deployment).
- Dependency declarations (package.json, pom.xml, go.mod, requirements.txt, etc.).
- Pipeline definitions (GitHub Actions, GitLab CI, Azure Pipelines, Jenkins).
- Infrastructure-as-code (Terraform, CloudFormation, Bicep, Docker).
- Runtime observations (logs, metrics, traces, process lists, network captures).
- Database schemas and migrations.
- Business documentation (if available; rarely is).

## Process
1. **Identify Deployment Units** (not just folders): What actually gets deployed? Containers, functions, binaries, jars?
2. **Trace Entry Points**: Controllers, event handlers, scheduled jobs, message consumers, HTTP handlers.
3. **Map Data Flow**: How does data enter, transform, and leave? Database, cache, queues, APIs?
4. **Identify Integration Boundaries**: What systems talk to each other? Sync, async, polling, webhooks?
5. **Reconstruct Business Capability Mapping**: What business functions depend on what code?
6. **Find the Hidden Assumptions**: Why was it built this way? What constraints or decisions drove it?
7. **Document with Evidence**: Every statement must be traceable to a file, config, or log line.
8. **Identify Critical Paths**: What would break if X component failed?
9. **Produce Findings** following mandatory format (evidence first, always).

See `playbooks/unknown-system.md` for step-by-step walkthrough.

## Reconstruction Checklist
Use `checklists/legacy-system.md` for systematic verification:
- [ ] All deployment units identified and mapped.
- [ ] All entry points (APIs, events, schedules) found.
- [ ] All external dependencies (databases, APIs, caches) discovered.
- [ ] All secret/config management patterns understood.
- [ ] Failure modes for each unit identified.
- [ ] Business criticality per unit assessed.

## Legacy Red Flags to Watch
See `patterns/legacy-smells.md`:
- Undocumented APIs (guess-and-check integration).
- Shared database between "services".
- Global state, static fields, singletons.
- No automated tests.
- Manual deployment steps ("run this script").
- Hardcoded IPs, credentials in code or logs.
- No monitoring, observability, or alerting.
- Dependency on a person (bus factor = 1).

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** line number in specific file, git history, commit message, config path, log example or deploy script.
- **Root Cause:** why it was built this way (history, constraint, decision, accident).
- **Business Impact:** what breaks, how fast, what costs, compliance risk.
- **Technical Impact:** maintainability, testability, scalability, security posture.
- **Risk:** Critical / High / Medium / Low.
- **Recommendation:** specific action; no generic advice.
- **Estimated Effort:** S / M / L / XL.
- **Expected Value:** what becomes knowable/fixable/replaceable after acting.
- **Priority:** P0 / P1 / P2 / P3.

## Playbook Reference
- **First Time Takeover**: `playbooks/takeover-project.md` — how to onboard a team to a legacy system in 4 weeks.
- **No Documentation**: `playbooks/no-documentation.md` — how to reverse-engineer when there are no docs at all.

## Output
1. **System Reconstruction** (`templates/architecture-review.md`): Component diagram, data flows, boundaries.
2. **Business Capability Map**: Which features live where, dependencies, risks.
3. **Knowledge Recovery Plan**: Key questions answered, unknowns noted, recommendations to make it knowable.
4. **Dependency Report**: All external systems, their criticality, integration patterns.
5. **Risk Register** (`templates/risk-matrix.md`): Single points of failure, legacy threats.
6. **Example Recovery** (if applicable): Reference `examples/legacy-dotnet-framework.md` or equivalent.
