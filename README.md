# 🏛️ Architect Forensics Expert

[![awesome-copilot](https://img.shields.io/badge/awesome-copilot-blue)](https://github.com/microsoft/copilot-extensions)
[![Boost Version](https://img.shields.io/badge/boost-v1.0.0-green)](https://github.com/Sertxito/boost_architect-forensics-expert)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Transform GitHub Copilot into a **Principal Enterprise Architect** and **Software Archaeologist** capable of forensic platform assessment, legacy system recovery, and strategic modernization decisions.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Components](#components)
- [Usage Examples](#usage-examples)
- [Framework](#framework)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Architect Forensics Expert** is a comprehensive GitHub Copilot boost that transforms Copilot into an autonomous forensics engine for:

✅ **Reconstructing unknown systems** from code, config, and deployment evidence  
✅ **Auditing legacy platforms** for risk, value, and evolution paths  
✅ **Assessing cloud architecture** for security, reliability, and cost  
✅ **Quantifying technical debt** across all categories (architecture, code, test, operations)  
✅ **Designing modernization strategies** with phased, evidence-based roadmaps  
✅ **Producing formal findings** with business impact, technical risk, and priority guidance  
✅ **Making final go/no-go decisions** using the KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD taxonomy  

Developed for **Principal Architects**, **Technical Due Diligence teams**, **Migration strategists**, and **Legacy platform guardians**.

---

## Features

### 🔍 **10 Specialist Agents**

| Agent | Purpose |
|-------|---------|
| **Architect Forensics** | Main coordinator; full end-to-end platform audit |
| **AI Forensics** | Audits RAG, MCP, agents, prompt governance |
| **Cloud Forensics** | Azure/AWS/GCP landing zones, reliability, cost |
| **Security Forensics** | Architecture-level auth, authz, secrets, supply chain |
| **Performance Forensics** | Evidence-based bottleneck discovery across all layers |
| **Legacy Recovery** | Undocumented systems, obsolete frameworks (.NET Framework, WebForms, AngularJS, etc.) |
| **Modernization Advisor** | Phased roadmaps, strangler patterns, modularization |
| **Technical Debt Assessor** | Debt quantification, heatmaps, cost-of-delay analysis |
| **Architect Challenger** | Devil's advocate for fashionable recommendations (microservices, Kubernetes, RAG rewrites) |
| **Due Diligence** | Pre-acquisition, outsourcing, investment decisions |

### ⚙️ **8 Reusable Skills**

Each skill provides 6-7 step domain-specific analysis:

- **architecture-review** — Boundary analysis, coupling assessment, scalability evaluation
- **reverse-engineering** — Forensic archaeology: entry points → data flows → business capabilities
- **legacy-analysis** — Risk catalog, blockers, debt quantification, evolution paths
- **dependency-analysis** — Internal/external coupling, circular refs, vulnerability scanning
- **cloud-review** — Security, reliability, operability, cost checklist (9-item assessment)
- **security-audit** — Auth models, authz patterns, secrets governance, compliance gaps
- **ai-platform-audit** — Grounding quality, hallucination %, tool governance, AI cost control
- **modernization** — Value vs Effort matrix, phased roadmaps (0-30d → 12m+), 90-day execution plans

### 📊 **6 Calibrated Scorecards** (0-100 Scale)

Evidence-based assessment with 5 maturity bands and concrete decision guides:

- **cloud-maturity** — Identity, Network, Reliability, Observability, Cost, Automation, DR
- **security-maturity** — Auth, AuthZ, Secrets, Supply Chain, Data Protection, Cloud Posture, Auditability
- **technical-debt-score** — Architecture, Code, Test, Dependency, Security, Operations, Knowledge
- **ai-maturity** — Grounding, Evaluation, Prompt Safety, Tool Governance, Memory, Cost, Observability
- **architecture-maturity** — Business context narrative; decisions scale from "Dangerous" → "Strategic"
- **modernization-score** — 6 dimensions + Quick Decision Guide (0-40: NO | 41-60: PILOT | 61-80: CAUTION | 81-100: CONFIDENCE)

### 📚 **Supporting Framework**

- **9 Templates** — audit-report, due-diligence-report, executive-summary, final-decision-matrix, risk-matrix, modernization-roadmap, etc.
- **10 Checklists** — ai-platform, api, architecture-audit, backend, cloud, data, devops, frontend, legacy-system, security
- **6 Pattern Catalogs** — ai-smells, anti-patterns, architecture-smells, cloud-smells, legacy-smells, technical-debt-patterns
- **7 Playbooks** — platform-assessment, takeover-project, technical-due-diligence, migration-strategy, modernization-roadmap, no-documentation, unknown-system
- **3 Specs** — finding-model (9-field mandatory format), decision-taxonomy, risk-levels

---

## Quick Start

### 1. **Install the Boost**

```bash
npx github:Sertxito/boost_architect-forensics-expert
```

Reload VS Code; agents, skills and prompts are picked up automatically (see [Installation](#installation)).

### 3. **Invoke the Main Agent**

```
@Architect Forensics - analyze this platform
```

Copilot will:
- Coordinate all 9 specialist agents
- Map system architecture via reverse-engineering
- Run comprehensive audits (cloud, security, performance, debt)
- Produce findings using the mandatory 9-field format
- Generate a final decision matrix (KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD)

### 4. **Use Specialist Agents**

For focused analysis:

```
@AI Forensics - audit this RAG pipeline
@Cloud Forensics - assess our Azure landing zone
@Security Forensics - review auth/authz architecture
@Legacy Recovery - help with this undocumented system
```

### 5. **Apply Skills**

Trigger specific analysis workflows:

```
Use architecture-review skill to analyze module boundaries
Use cloud-review skill to assess reliability posture
Use modernization skill to design a 90-day roadmap
```

---

## Architecture

```
architect-forensics (Main Coordinator)
├── ai-forensics (RAG, MCP, Agents)
├── cloud-forensics (Azure, AWS, GCP)
├── security-forensics (Auth, AuthZ, Secrets)
├── performance-forensics (Bottlenecks)
├── legacy-recovery (Undocumented systems)
├── modernization-advisor (Phased roadmaps)
├── technical-debt-assessor (Debt quantification)
├── architect-challenger (Devil's advocate)
└── due-diligence (Investment decisions)

Skills (Domain-Specific Execution)
├── architecture-review
├── reverse-engineering
├── legacy-analysis
├── dependency-analysis
├── cloud-review
├── security-audit
├── ai-platform-audit
└── modernization

Scorecards (Evidence-Based 0-100 Assessment)
├── cloud-maturity
├── security-maturity
├── technical-debt-score
├── ai-maturity
├── architecture-maturity
└── modernization-score

Templates, Checklists, Patterns, Playbooks, Specs (Supporting Artifacts)
```

---

## Components

```
.github/
├── agents/                          # 10 specialist agents
│   ├── architect-forensics.md       # Main coordinator
│   ├── ai-forensics.md
│   ├── cloud-forensics.md
│   ├── security-forensics.md
│   ├── performance-forensics.md
│   ├── legacy-recovery.md
│   ├── modernization-advisor.md
│   ├── technical-debt-assessor.md
│   ├── architect-challenger.md
│   └── due-diligence.md
├── skills/                          # 8 reusable skills
│   ├── architecture-review/SKILL.md
│   ├── reverse-engineering/SKILL.md
│   ├── legacy-analysis/SKILL.md
│   ├── dependency-analysis/SKILL.md
│   ├── cloud-review/SKILL.md
│   ├── security-audit/SKILL.md
│   ├── ai-platform-audit/SKILL.md
│   └── modernization/SKILL.md
├── prompts/                         # Prompt templates
│   ├── full-audit.md
│   ├── legacy-takeover.md
│   ├── ai-rag-mcp-audit.md
│   └── challenge-architecture.md
└── copilot-instructions.md          # Main behavior rules

scorecards/                          # 6 calibrated 0-100 scorecards
├── cloud-maturity.md
├── security-maturity.md
├── technical-debt-score.md
├── ai-maturity.md
├── architecture-maturity.md
└── modernization-score.md

templates/                           # 9 output templates
├── audit-report.md
├── due-diligence-report.md
├── executive-summary.md
├── final-decision-matrix.md
├── risk-matrix.md
├── modernization-roadmap.md
├── architecture-review.md
├── technical-debt-report.md
└── target-architecture.md

checklists/                          # 10 domain checklists
├── ai-platform.md
├── api.md
├── architecture-audit.md
├── backend.md
├── cloud.md
├── data.md
├── devops.md
├── frontend.md
├── legacy-system.md
└── security.md

patterns/                            # 6 pattern catalogs
├── ai-smells.md
├── anti-patterns.md
├── architecture-smells.md
├── cloud-smells.md
├── legacy-smells.md
└── technical-debt-patterns.md

playbooks/                           # 7 playbooks
├── platform-assessment.md
├── takeover-project.md
├── technical-due-diligence.md
├── migration-strategy.md
├── modernization-roadmap.md
├── no-documentation.md
└── unknown-system.md

specs/                               # 3 core specifications
├── finding-model.md                 # 9-field mandatory format
├── decision-taxonomy.md             # KEEP/REFACTOR/MODERNIZE/REPLATFORM/REBUILD
└── risk-levels.md                   # Critical/High/Medium/Low definitions

examples/                            # 6 real-world case studies
├── angularjs-to-angular.md
├── legacy-dotnet-framework.md
├── mcp-platform-review.md
├── monolith-to-microservices.md
├── rag-platform-audit.md
└── sharepoint-modernization.md

boost.json                           # Boost manifest
README.md                            # This file
```

---

## Usage Examples

### Example 1: Forensic Audit of Unknown System

```
@Architect Forensics - we inherited this codebase after an acquisition. 
Nobody knows how it works. 
```

**Output:**
- System Reconstruction (deployment units, data flows, business capabilities)
- Technology Inventory (frameworks, databases, integrations)
- Architecture Assessment (boundaries, coupling, scalability)
- Technical Debt Register with prioritization
- Legacy Risk Catalog
- Final Decision Matrix (KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD)

### Example 2: Cloud Reliability Assessment

```
@Cloud Forensics - assess our Azure App Service + SQL Database architecture for zone redundancy, failover, and compliance
```

**Output:**
- Cloud Posture Summary
- Reliability Roadmap (single points of failure)
- Security Assessment
- Cost Optimization Report
- WAF Score (0-100)

### Example 3: Legacy System Recovery

```
@Legacy Recovery - this .NET Framework WCF service is critical but undocumented. Help us understand what to keep vs modernize.
```

**Output:**
- Legacy Risk Catalog (vendor lock-in, framework obsolescence, skill gaps)
- Debt Quantification (cost/month to maintain)
- Modernization Paths (strangler fig, big-bang rewrite, incremental modularization)
- 90-Day Execution Plan

### Example 4: Technical Due Diligence

```
@Due Diligence - we're considering acquiring CompanyX. Produce a technical investment recommendation.
```

**Output:**
- Formal Due Diligence Report
- Technology Risk Assessment
- Hidden Cost Analysis (debt, compliance, migration effort)
- Keep/Refactor/Modernize/Replatform/Rebuild verdict
- 3-year TCO estimate

---

## Framework

### Finding Model (9-Field Format)

Every finding includes:

1. **Evidence** — Concrete file, config, metric, or architectural clue
2. **Root Cause** — Why the issue exists (not just "what is visible")
3. **Business Impact** — Consequence for delivery, cost, compliance, customer experience
4. **Technical Impact** — Consequence for maintainability, scalability, reliability, security
5. **Risk** — Critical | High | Medium | Low (with likelihood × impact)
6. **Recommendation** — Specific action (not generic advice)
7. **Estimated Effort** — S / M / L / XL
8. **Expected Value** — What improves after acting
9. **Priority** — P0 / P1 / P2 / P3

### Decision Taxonomy

| Decision | Meaning | Use When |
|----------|---------|----------|
| **KEEP** | No architectural change; maintain current path | System is fit-for-purpose, low debt, strategic advantage |
| **REFACTOR** | Improve internal quality without changing boundaries | Reduce coupling, improve testability, eliminate duplication |
| **MODERNIZE** | Evolve stack within existing architecture | Upgrade frameworks, refactor to cloud-native patterns |
| **REPLATFORM** | Change underlying platform (e.g., VM → Containers, monolith → microservices) | Scale requirements, operational overhead justifies effort |
| **REBUILD** | Start fresh with lessons learned | Fundamental misalignment, vendor lock-in, unmaintainable debt |

### Risk Levels

- **Critical** — Immediate threat to continuity; stop-the-line
- **High** — Serious impact; must be planned in next cycle
- **Medium** — Should be addressed; can be deferred if needed
- **Low** — Acceptable; improvement opportunity

---

## Installation

This boost is **self-contained**: it does not need any runtime, plugin or MCP server. One command copies its assets to the places where GitHub Copilot / VS Code discover them automatically.

```bash
# From the root of YOUR project
npx github:Sertxito/boost_architect-forensics-expert
# or, once published on npm
npx boost-architect-forensics-expert
```

| Asset | Installed into |
|---|---|
| Agents | `.github/agents/*.agent.md` |
| Skills | `.github/skills/<name>/SKILL.md` and `.agents/skills/<name>/SKILL.md` |
| Prompts | `.github/prompts/*.prompt.md` |
| Instructions | `.github/instructions/*.instructions.md` |
| Global instructions | `.github/copilot-instructions.md` (only if the project has none) |

Options: `--target <dir>`, `--force` (overwrite), `--dry-run`, `--no-agents-dir` (skip `.agents/skills`), `--check` (verify install), `--uninstall`.
Existing files are never overwritten without `--force`, so several boosts can coexist in the same project.

**Verify:** run `npx boost-architect-forensics-expert --check`, reload VS Code (`Developer: Reload Window`), then type `@` in Copilot Chat (agents), `/` (prompts) and open the *Configure Tools / Skills* picker.

For enterprise deployment, host this repo in your internal Git and run `npx git+<internal-url>` from each project.

---

## Contributing

Contributions are welcome! Areas for enhancement:

- Additional specialists (e.g., Data Architecture Forensics, IoT Platform Auditor)
- More playbooks (e.g., open-source governance, SaaS vendor assessment)
- Pattern expansions (emerging cloud-native anti-patterns)
- Case studies (real transformations, lessons learned)

Please submit PRs with:
- Clear description of the specialist/skill/pattern added
- Evidence-based findings (not generic best practices)
- Template/checklist references
- Priority guidance

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

You are free to use, modify, and distribute this boost for commercial and non-commercial purposes.

---

## Support & Contact

- **Issues:** [GitHub Issues](https://github.com/Sertxito/boost_architect-forensics-expert/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Sertxito/boost_architect-forensics-expert/discussions)

---

## Acknowledgments

Built as a comprehensive GitHub Copilot boost following the **awesome-copilot** framework.

Inspired by:
- Principal Enterprise Architecture practices
- Forensic software archaeology
- Technical due diligence methodologies
- Cloud Architecture Framework (WAF)
- Technical debt assessment models

---

**Transform Copilot into your Principal Architect today.** 🚀

## Naming and collisions

Installed assets are prefixed with `forensics-` (e.g. `.github/agents/forensics-<name>.agent.md`, `.github/skills/forensics-<name>/`) so several boosts can live in the same project, and internal references are rewritten to match.

- Nothing that already exists in the target is overwritten: each ignored file is reported with a `[WARN] ... already existed ... IGNORED` message. Use `--force` to overwrite.
- An existing `.github/copilot-instructions.md` is kept; the boost's global guidance is installed as `forensics-global.instructions.md` instead.
- Re-running the installer is safe; `--check` and `--uninstall` work from the manifest.

