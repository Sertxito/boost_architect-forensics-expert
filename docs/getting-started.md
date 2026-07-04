---
layout: default
title: Getting Started
---

# Getting Started

## Installation (5 Minutes)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Sertxito/boost_architect-forensics-expert.git
cd boost_architect-forensics-expert
```

### Step 2: Verify Contents

```bash
# Check that all components are present
ls -la .github/agents/        # 10 agents
ls -la .github/skills/        # 8 skills
ls -la scorecards/            # 6 scorecards
```

You should see:
- ✅ 10 `.md` files in `.github/agents/`
- ✅ 8 skill folders in `.github/skills/` (each with `SKILL.md`)
- ✅ 6 `.md` files in `scorecards/`

### Step 3: Load into GitHub Copilot

1. Open **VS Code**
2. Open **GitHub Copilot Chat**
3. Look for **Boost** or **Custom Instructions** option
4. Load this repository as a boost (awesome-copilot framework)

Copilot should now recognize all agents, skills, and supporting artifacts.

---

## Your First Audit (10 Minutes)

### Invoke the Main Coordinator

Open a chat with Copilot and type:

```
@Architect Forensics - analyze this repository
```

### What Happens

Copilot will:

1. ✅ Load all 10 specialist agents
2. ✅ Map the architecture via reverse-engineering
3. ✅ Run comprehensive audits:
   - Architecture review (boundaries, coupling, scalability)
   - Legacy risk assessment
   - Technical debt quantification
   - Cloud posture evaluation (if applicable)
   - Security architecture review
4. ✅ Produce findings using the 9-field format:
   - Evidence
   - Root Cause
   - Business Impact
   - Technical Impact
   - Risk Level
   - Recommendation
   - Effort Estimate
   - Expected Value
   - Priority
5. ✅ Generate Final Decision Matrix:
   - KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD

### Expected Output

A comprehensive audit report with:
- System reconstruction diagram
- Technology inventory
- Architecture assessment
- Technical debt register (prioritized)
- Security findings
- Performance findings
- Modernization opportunities
- Prioritized action backlog

---

## Using Individual Agents

For focused analysis, invoke specific agents:

```
@AI Forensics - audit this RAG pipeline
```

```
@Cloud Forensics - assess our Azure landing zone
```

```
@Security Forensics - review our auth architecture
```

```
@Legacy Recovery - help with this undocumented system
```

---

## Using Skills

Trigger specific analysis workflows:

```
Use architecture-review skill to analyze module boundaries
```

```
Use cloud-review skill to assess our reliability posture
```

```
Use modernization skill to design a 90-day roadmap
```

```
Use reverse-engineering skill to understand this unknown system
```

---

## Understanding the 9-Field Finding Model

Every finding has these 9 fields:

### 1. **Evidence**
*Concrete file, config, metric, or architectural clue*

Example:
> "main() method contains 500+ lines of sequential business logic; no separation of concerns; single DatabaseContext instance shared across all operations."

### 2. **Root Cause**
*Why the issue exists (not just "what is visible")*

Example:
> "Original team never separated concerns due to time pressure; monolithic architecture became the standard as codebase grew; no code review enforced architectural boundaries."

### 3. **Business Impact**
*Consequence for delivery, cost, compliance, customer experience*

Example:
> "Any change to core logic requires full regression testing (~3 days); time-to-market for new features is 4 weeks instead of 1 week; new developers take 6+ months to understand the system."

### 4. **Technical Impact**
*Consequence for maintainability, scalability, reliability, security*

Example:
> "Impossible to unit test individual features; monolith cannot scale horizontally; shared state leads to concurrency bugs; memory footprint is 2GB just for warm-up."

### 5. **Risk**
*Critical | High | Medium | Low (with likelihood × impact)*

Example:
> "**High Risk** — If a junior developer adds a feature without understanding all side effects, production outages are likely (likelihood: HIGH due to complexity; impact: SEVERE due to criticality)."

### 6. **Recommendation**
*Specific action (not generic advice)*

Example:
> "Extract the top-3 business capabilities into separate modules using the Strangler Fig pattern over 6 months. Start with the lowest-risk, highest-value capability (e.g., reporting engine). Establish clear module boundaries and enforce via code review."

### 7. **Estimated Effort**
*S / M / L / XL*

Example:
> "**M (Medium)** — 2-3 months of concurrent development; ~2 FTE; requires architecture design, team training, and careful testing."

### 8. **Expected Value**
*What improves after acting*

Example:
> "Time-to-market improves to 2 weeks. New developers onboard in 2-3 weeks. Testability increases to 80% code coverage. Deployment confidence increases."

### 9. **Priority**
*P0 / P1 / P2 / P3*

Example:
> "**P1 (Urgent)** — Blocks team velocity and increases production risk; should start within next sprint."

---

## Decision Taxonomy

When Architect Forensics produces a final recommendation, it uses one of 5 decisions:

### KEEP
✅ No architectural change; maintain current path

**When to KEEP:**
- System is fit-for-purpose
- Technical debt is low and manageable
- Business processes are stable
- Team is productive and retention is good

**Example:**
> "This is a stable, well-maintained monolith with clear boundaries and 85% test coverage. Keep it as-is. Continue incremental improvements."

### REFACTOR
🔧 Improve internal quality without changing boundaries

**When to REFACTOR:**
- Reduce coupling between modules
- Improve testability and maintainability
- Eliminate duplication
- Improve code readability

**Example:**
> "Refactor the data access layer to use a repository pattern. Extract business logic into services. Add unit test coverage to 80%. Timeline: 3 months."

### MODERNIZE
📈 Evolve stack within existing architecture

**When to MODERNIZE:**
- Upgrade to newer framework versions
- Refactor to cloud-native patterns (within same cloud provider)
- Replace deprecated libraries
- Improve operational efficiency

**Example:**
> "Modernize from .NET Framework to .NET 8. Migrate to Azure Container Apps. Adopt managed services (Azure SQL, Azure Storage). Expected ROI: 40% reduction in ops costs."

### REPLATFORM
🚀 Change underlying platform (e.g., VM → Containers, monolith → microservices)

**When to REPLATFORM:**
- Scale requirements exceed current platform
- Operational overhead justifies migration effort
- New platform unlocks significant business value
- Team has expertise in new platform

**Example:**
> "Replatform from on-premises data center to Azure Kubernetes Service. Enables horizontal scaling, auto-healing, GitOps deployment. Timeline: 9 months. Expected ROI: 50% cost reduction + faster feature delivery."

### REBUILD
🔨 Start fresh with lessons learned

**When to REBUILD:**
- Fundamental architectural misalignment with business needs
- Vendor lock-in prevents evolution
- Unmaintainable debt exceeds 60% of codebase
- Team cannot fix the system incrementally

**Example:**
> "Rebuild from scratch using a microservices architecture. Keep lessons learned from legacy system (what works, what doesn't). Expected timeline: 18 months. Risk: HIGH if business cannot tolerate parallel run."

---

## Scorecards: 0-100 Assessment

Each scorecard provides a 0-100 maturity score across specific dimensions.

### Example: Cloud Maturity Scorecard

**Score: 55 (MODERATE)**

| Dimension | Score | Status |
|-----------|-------|--------|
| Identity | 60 | Managed Identities configured but not everywhere |
| Network | 50 | VNets exist but no segmentation |
| Reliability | 40 | Single AZ; no backup |
| Observability | 70 | Application Insights enabled |
| Cost | 30 | No tagging; no reserved instances |
| Automation | 45 | Manual deployments; some PowerShell scripts |
| DR | 20 | No backup strategy |

**Interpretation:**
- 0-20: **Dangerous** — No controls; immediate risk
- 21-40: **Legacy** — Basic controls only
- 41-60: **Stable** — Moderate maturity; room for improvement
- 61-80: **Modern** — Strong controls; best practices emerging
- 81-100: **Strategic** — Autonomous; enables competitive advantage

**Recommendation:**
> "Quick wins: Add Azure Backup (7 days), Zone-redundant storage (3 days), Azure Policy for tagging (5 days). Medium-term: Network segmentation, multi-region DR. Timeline: 90 days for quick wins; 6 months for full modernization."

---

## Quick Decision Guide

### "I don't know what I have. Where do I start?"

**Answer:** Run a forensic audit.

```
@Architect Forensics - analyze this codebase as if you inherited it from a client. 
Reconstruct the architecture, identify risks, technical debt, and produce a roadmap.
```

### "Our system is broken. What do we do?"

**Answer:** Run legacy recovery + technical debt assessment.

```
@Legacy Recovery - this system is undocumented and critical to the business. 
Produce a stabilization plan.
```

### "We need to migrate to the cloud. What's the right approach?"

**Answer:** Run cloud forensics + modernization planning.

```
@Cloud Forensics - assess our on-premises architecture for cloud readiness.
@Modernization Advisor - design a phased cloud migration roadmap.
```

### "We're acquiring CompanyX. What should we know?"

**Answer:** Run technical due diligence.

```
@Due Diligence - assess CompanyX's technology platform before acquisition. 
Produce an investment recommendation.
```

### "We want to improve our security posture."

**Answer:** Run security forensics.

```
@Security Forensics - audit our architecture for security risks. 
Focus on authentication, authorization, secrets management, and compliance.
```

---

## Next Steps

1. ✅ **Run your first audit** — Pick a real system and invoke Architect Forensics
2. ✅ **Review the findings** — Study the 9-field format and decision taxonomy
3. ✅ **Explore specialists** — Use individual agents for focused analysis
4. ✅ **Read case studies** — Understand how forensic audits work in practice
5. ✅ **Customize** — Extend checklists and patterns for your organization

---

## Support

- **Questions?** [GitHub Discussions](https://github.com/Sertxito/boost_architect-forensics-expert/discussions)
- **Found a bug?** [GitHub Issues](https://github.com/Sertxito/boost_architect-forensics-expert/issues)
- **Want to contribute?** [Pull Requests](https://github.com/Sertxito/boost_architect-forensics-expert/pulls)

---

[← Back to Home](index.md) | [Agents Guide →](agents-guide.md)
