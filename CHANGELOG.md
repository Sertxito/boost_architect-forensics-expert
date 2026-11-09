# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Install reference materials alongside Copilot assets in a boost-specific directory.
- Add automated installer regression tests and prepublish validation.
- Add evidence-based scoring guidance shared by all scorecards.

### Changed
- Select specialists by relevance and scale report depth to the user's requested scope.
- Update setup documentation to use the installer and document installed reference paths.

### Fixed
- Rewrite installed Markdown references to the installed support resources.
- Stop presenting universal ROI and CVSS thresholds as suitable for every modernization or security risk.
- Make installation checks validate expected support files as well as prior manifest entries.

## [1.0.0] - 2026-07-04

### 🎉 Initial Release: Architect Forensics Expert Boost

#### ✨ Features

**10 Specialist Agents**
- `architect-forensics` — Main coordinator for full end-to-end platform audits
- `ai-forensics` — RAG, MCP, agentic platforms auditing with hallucination tracking
- `cloud-forensics` — Azure/AWS/GCP landing zones, reliability, cost assessment
- `security-forensics` — Architecture-level auth, authz, secrets, supply chain risks
- `performance-forensics` — Evidence-based bottleneck discovery across all layers
- `legacy-recovery` — Undocumented systems, obsolete frameworks recovery
- `modernization-advisor` — Phased roadmaps, strangler patterns, modularization
- `technical-debt-assessor` — Debt quantification, heatmaps, cost-of-delay analysis
- `architect-challenger` — Devil's advocate for fashionable recommendations
- `due-diligence` — Pre-acquisition, outsourcing, investment decisions

**8 Reusable Skills**
- `architecture-review` — Boundary analysis, coupling, scalability evaluation
- `reverse-engineering` — Forensic archaeology of unknown systems
- `legacy-analysis` — Risk catalogs, debt quantification, evolution paths
- `dependency-analysis` — Coupling risks, circular refs, vulnerability scanning
- `cloud-review` — Security, reliability, operability, cost (9-item checklist)
- `security-audit` — Auth models, authz patterns, secrets, compliance gaps
- `ai-platform-audit` — Grounding quality, hallucination %, tool governance
- `modernization` — Value vs Effort matrix, phased roadmaps (0-30d → 12m+)

**6 Calibrated Scorecards (0-100 Scale)**
- `cloud-maturity` — Identity, Network, Reliability, Observability, Cost, Automation, DR
- `security-maturity` — Auth, AuthZ, Secrets, Supply Chain, Data Protection, Auditability
- `technical-debt-score` — Architecture, Code, Test, Dependency, Security, Operations, Knowledge
- `ai-maturity` — Grounding, Evaluation, Prompt Safety, Tool Governance, Memory, Cost, Observability
- `architecture-maturity` — Business context narrative with 5 maturity bands
- `modernization-score` — 6 dimensions + Quick Decision Guide (0-40: NO | 41-60: PILOT | 61-80: CAUTION | 81-100: CONFIDENCE)

**Supporting Framework**
- 9 Templates (audit-report, due-diligence-report, executive-summary, etc.)
- 10 Checklists (ai-platform, api, architecture-audit, backend, cloud, data, devops, frontend, legacy-system, security)
- 6 Pattern Catalogs (ai-smells, anti-patterns, architecture-smells, cloud-smells, legacy-smells, technical-debt-patterns)
- 7 Playbooks (platform-assessment, takeover-project, technical-due-diligence, migration-strategy, modernization-roadmap, no-documentation, unknown-system)
- 3 Specs (finding-model with 9-field format, decision-taxonomy, risk-levels)
- 6 Example Case Studies (angularjs-to-angular, legacy-dotnet-framework, mcp-platform-review, monolith-to-microservices, rag-platform-audit, sharepoint-modernization)

#### 📚 Documentation

- Comprehensive README with TOC, badges, features overview, quick start guide
- MIT License (open source)
- .gitignore with 60+ patterns
- boost.json manifest with awesome-copilot schema validation
- .github/copilot-instructions.md with behavior rules and core philosophy

#### 🎯 Core Capabilities

✅ **Forensic Platform Assessment** — Reconstruct unknown systems from evidence  
✅ **Legacy System Recovery** — Stabilize and modernize undocumented platforms  
✅ **Architecture Audit** — Boundary, coupling, scalability, reliability analysis  
✅ **Cloud Posture Assessment** — Security, reliability, cost optimization  
✅ **Technical Debt Quantification** — Heatmaps, cost-of-delay, prioritization  
✅ **Modernization Planning** — Phased roadmaps with 90-day execution plans  
✅ **Evidence-Based Findings** — 9-field mandatory format (Evidence, Root Cause, Business Impact, Technical Impact, Risk, Recommendation, Effort, Value, Priority)  
✅ **Strategic Decisions** — KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD  

#### 🏗️ Architecture

```
architect-forensics (Main Coordinator)
├── 9 Specialist Agents (coordinated execution)
├── 8 Reusable Skills (domain-specific analysis)
├── 6 Calibrated Scorecards (0-100 assessment)
├── 9 Templates (standardized outputs)
├── 10 Checklists (comprehensive coverage)
├── 6 Pattern Catalogs (anti-patterns, smells)
├── 7 Playbooks (scenarios, processes)
└── 3 Specs (format, taxonomy, risk levels)
```

#### 🚀 Getting Started

1. Clone this repository
2. Load as GitHub Copilot boost (awesome-copilot framework)
3. Invoke: `@Architect Forensics - analyze this platform`
4. Copilot coordinates all specialists and produces findings

#### 🎓 Core Philosophy

- **Reconstruct, don't explain** — Go deep into system architecture
- **Recommend smallest moves** — Not fashionable technology
- **Decide as architect** — Evidence-based, not "it depends"
- **Answer the final question** — If this were my platform, what do I do tomorrow morning?

#### 📝 Finding Model (9 Fields)

Every finding includes:
1. Evidence (concrete file, config, metric)
2. Root Cause (why it exists)
3. Business Impact (delivery, cost, compliance, UX)
4. Technical Impact (maintainability, scalability, reliability, security)
5. Risk (Critical | High | Medium | Low)
6. Recommendation (specific action, not generic)
7. Estimated Effort (S / M / L / XL)
8. Expected Value (what improves)
9. Priority (P0 / P1 / P2 / P3)

#### 🎯 Decision Taxonomy

| Decision | Use When |
|----------|----------|
| KEEP | Fit-for-purpose, low debt, strategic value |
| REFACTOR | Reduce coupling, improve testability, eliminate duplication |
| MODERNIZE | Upgrade frameworks, cloud-native patterns within boundaries |
| REPLATFORM | Scale requirements justify platform change (VM→Containers, monolith→microservices) |
| REBUILD | Fundamental misalignment, unmaintainable debt, vendor lock-in |

#### 📦 Manifest

- **72 files** organized in 9 directories
- **72 KB** uncompressed
- **awesome-copilot** compatible
- **GitHub schema** validated

#### 🔗 Repository

- **GitHub:** https://github.com/Sertxito/boost_architect-forensics-expert
- **Issues:** Bug reports, feature requests
- **Discussions:** Q&A, best practices, use cases

#### 🙏 License

MIT License — free for commercial and non-commercial use

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** — Breaking changes to agent definitions or core framework
- **MINOR** — New agents, skills, scorecards, or features
- **PATCH** — Documentation, bug fixes, template improvements

---

## Roadmap (Future Releases)

### v1.1.0 (Planned)
- [ ] Data Architecture Forensics agent
- [ ] IoT Platform Auditor specialist
- [ ] Additional pattern catalogs (serverless anti-patterns, microservices smells)
- [ ] Real-world case studies (10+ examples)

### v1.2.0 (Planned)
- [ ] GitHub Pages documentation site
- [ ] Video walkthroughs (how to use each agent)
- [ ] Integration guides (Azure DevOps, GitHub Actions)
- [ ] MCP support for model context protocol

### v2.0.0 (Future)
- [ ] Multi-language support (Spanish, French, German)
- [ ] Industry-specific assessments (FinTech, Healthcare, SaaS)
- [ ] Automated scoring engine (0-100 calculation)
- [ ] Cost estimation models

---

**Transform Copilot into your Principal Architect today.** 🚀
