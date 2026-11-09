---
layout: default
title: Agents Guide
---

# Agents Guide

## The 10 Specialist Agents

Each agent provides a focused area of expertise. The coordinator selects specialists when their contribution is relevant and delegation is available; it does not invoke every agent by default.

---

## 🏛️ Architect Forensics (Main Coordinator)

**Role:** Main coordinator; reconstructs the system and brings in relevant specialists for full audits

**When to Use:**
```
@Architect Forensics - analyze this entire platform
@Architect Forensics - we inherited this codebase; reconstruct the architecture
```

**What It Does:**
- Selects relevant specialists when delegation is available
- Maps system architecture
- Runs comprehensive multi-domain audits
- Produces findings using 9-field format
- Generates Final Decision Matrix (KEEP | REFACTOR | MODERNIZE | REPLATFORM | REBUILD)

**Output:**
- System Reconstruction (deployment units, data flows, business capabilities)
- Technology Inventory
- Architecture Assessment
- Technical Debt Register
- Legacy Risk Catalog
- Modernization Opportunities
- Prioritized Action Backlog

---

## 🤖 AI & Agentic Forensics

**Role:** Audits AI, RAG, MCP and agentic platforms

**When to Use:**
```
@AI Forensics - audit this RAG pipeline
@AI Forensics - assess our prompt governance and tool integration
```

**What It Does:**
- Evaluates grounding quality (hallucination %, citation accuracy)
- Assesses tool governance and safety controls
- Analyzes prompt engineering practices
- Evaluates LLM provider selection and cost
- Reviews memory/context management
- Produces AI Maturity Score (0-100)

**Output:**
- Grounding Report (hallucination %, cited vs uncited %)
- Tool Governance Audit
- Prompt Safety Assessment
- Cost Analysis (tokens, latency, inference cost)
- AI Maturity Score with recommendations

---

## ☁️ Cloud Forensics

**Role:** Assesses cloud platforms (Azure, AWS, GCP) for reliability, security, cost, operability

**When to Use:**
```
@Cloud Forensics - assess our Azure landing zone
@Cloud Forensics - is our cloud architecture production-ready?
```

**What It Does:**
- Reviews landing zone design (networking, identity, security)
- Assesses reliability (zone redundancy, failover, backup)
- Evaluates security posture (access control, secrets, compliance)
- Analyzes cost optimization (reserved instances, sizing)
- Reviews operational readiness (monitoring, incident response)

**Output:**
- Cloud Posture Summary
- Reliability Roadmap
- Security Assessment
- Cost Optimization Report
- Well-Architected Framework (WAF) Score
- Recommended Phased Improvements

---

## 🔐 Security Forensics

**Role:** Architecture-level security auditor (not penetration testing)

**When to Use:**
```
@Security Forensics - review our authentication and authorization architecture
@Security Forensics - assess our secrets management
```

**What It Does:**
- Reviews authentication flows (OAuth2, OpenID Connect, SAML)
- Evaluates authorization models (RBAC, ABAC, fine-grained access)
- Assesses secrets management (Key Vault, rotation, auditing)
- Reviews supply chain security (dependencies, package sources)
- Analyzes data protection and compliance gaps

**Output:**
- Security Risk Register
- Authentication/Authorization Model Diagram
- Compliance Gap Analysis
- Secrets Management Assessment
- Supply Chain Risk Analysis
- Remediation Roadmap

---

## ⚡ Performance Forensics

**Role:** Finds real performance bottlenecks (evidence-based, not guessing)

**When to Use:**
```
@Performance Forensics - our app is slow; find the bottleneck
@Performance Forensics - diagnose high latency and low throughput
```

**What It Does:**
- Analyzes frontend performance (Web Vitals, bundle size, rendering)
- Reviews backend performance (N+1 queries, inefficient algorithms, resource contention)
- Assesses database performance (slow queries, missing indexes, schema design)
- Evaluates cloud performance (cold starts, resource sizing, networking)
- Traces bottlenecks across all layers

**Output:**
- Performance Bottleneck Analysis
- Flame Graphs / Call Hierarchies
- Root Cause Analysis
- Impact Quantification (latency, throughput, cost implications)
- Ranked Remediation Plan

---

## 🛠️ Legacy Recovery

**Role:** Recovers and stabilizes undocumented legacy systems

**When to Use:**
```
@Legacy Recovery - this .NET Framework WCF service is critical but nobody understands it
@Legacy Recovery - help us stabilize this 15-year-old system
```

**What It Does:**
- Reconstructs architecture from code (reverse-engineering)
- Identifies vendor lock-in and framework obsolescence risks
- Maps business-critical processes and data flows
- Quantifies cost of maintaining the system
- Produces stabilization roadmap
- Identifies evolution paths (keep, refactor, modernize, replatform, rebuild)

**Output:**
- System Reconstruction Diagram
- Legacy Risk Catalog (obsolescence, skill gaps, vendor lock-in)
- Debt Quantification (cost/month to maintain)
- Modernization Paths with effort estimates
- 90-Day Stabilization Plan

---

## 🚀 Modernization Advisor

**Role:** Designs realistic, incremental modernization strategies

**When to Use:**
```
@Modernization Advisor - design a phased migration from monolith to microservices
@Modernization Advisor - we want to modernize; what's our best path?
```

**What It Does:**
- Evaluates modernization paths (strangler fig, big-bang, incremental modularization)
- Produces Value vs Effort matrix
- Designs phased roadmaps (0-30 days, 1-3 months, 3-6 months, 6-12 months, 12+ months)
- Produces 90-day execution plans with tasks and dependencies
- Identifies quick wins and high-risk areas
- Estimates team capacity and timeline

**Output:**
- Modernization Path Analysis
- Value vs Effort Matrix
- Phased Roadmap (5 phases)
- 90-Day Execution Plan (with tasks, owners, dependencies)
- Risk Assessment and Mitigation Strategies
- Expected Outcomes and Success Metrics

---

## 📊 Technical Debt Assessor

**Role:** Quantifies and prioritizes technical debt across all categories

**When to Use:**
```
@Technical Debt Assessor - what's our real technical debt?
@Technical Debt Assessor - what should we fix first?
```

**What It Does:**
- Analyzes debt across 7 categories (Architecture, Code, Test, Dependency, Security, Operations, Knowledge)
- Quantifies cost of maintaining debt (cost/month, productivity loss, risk)
- Produces Debt Heatmap (severity × impact)
- Prioritizes debt for remediation
- Estimates effort to eliminate debt

**Output:**
- Technical Debt Register
- Debt Heatmap (7 dimensions)
- Cost-of-Delay Analysis
- Prioritized Remediation Roadmap
- Expected ROI from debt elimination

---

## 🎯 Architect Challenger

**Role:** Devil's advocate for fashionable architecture recommendations

**When to Use:**
```
@Architect Challenger - we're planning to rewrite in microservices. Is this a mistake?
@Architect Challenger - challenge our decision to migrate to Kubernetes
```

**What It Does:**
- Challenges default recommendations (microservices, Kubernetes, rewrites)
- Identifies hidden costs and risks
- Questions assumptions
- Proposes alternative approaches
- Recommends smallest valuable moves

**Output:**
- Risk Analysis of Proposed Architecture
- Hidden Cost Assessment
- Alternative Approaches
- Recommendation (proceed, pilot, or abandon)

---

## 🏦 Due Diligence

**Role:** Pre-acquisition, outsourcing, investment decisions

**When to Use:**
```
@Due Diligence - we're acquiring CompanyX. What should we know about their tech?
@Due Diligence - we're considering outsourcing this platform. Is it viable?
```

**What It Does:**
- Produces formal due diligence assessment
- Evaluates technology risk
- Analyzes hidden costs (debt, compliance, migration effort)
- Produces investment recommendation (GO / NO GO / CONDITIONAL)
- Estimates 3-year TCO
- Identifies integration risks and opportunities

**Output:**
- Due Diligence Report (formal, executive-ready)
- Technology Risk Assessment
- Hidden Cost Analysis
- Investment Recommendation (GO | NO GO | CONDITIONAL)
- 3-Year TCO Estimate
- Integration Roadmap (if GO)

---

## Coordination Between Agents

Agents work together seamlessly:

```
@Architect Forensics triggers:
├── @Architecture Review (boundaries, coupling)
├── @Legacy Recovery (risks, evolution paths)
├── @Cloud Forensics (if cloud-based)
├── @Security Forensics (auth, authz, compliance)
├── @Performance Forensics (bottlenecks)
├── @Technical Debt Assessor (debt register)
└── @Modernization Advisor (roadmap)
```

---

## Quick Reference

| Agent | Best For | Effort | Timeline |
|-------|----------|--------|----------|
| **Architect Forensics** | Full audit | XL | 2-4 hours |
| **AI Forensics** | RAG/LLM assessment | M | 30-60 min |
| **Cloud Forensics** | Cloud posture | M | 1-2 hours |
| **Security Forensics** | Security audit | M | 1-2 hours |
| **Performance Forensics** | Bottleneck diagnosis | M | 1-2 hours |
| **Legacy Recovery** | Legacy system | L | 2-4 hours |
| **Modernization Advisor** | Roadmap planning | L | 2-4 hours |
| **Technical Debt Assessor** | Debt quantification | M | 1-2 hours |
| **Architect Challenger** | Risk/sanity check | S | 30-60 min |
| **Due Diligence** | M&A assessment | XL | 3-5 hours |

---

## Next Steps

1. **Pick a system** — Identify a real platform to analyze
2. **Invoke the main agent** — `@Architect Forensics - analyze this platform`
3. **Review the findings** — Study the 9-field format findings
4. **Explore specialists** — Use individual agents for focused deep-dives
5. **Read case studies** — Understand forensic audits in practice

---

[← Back to Home](index.md) | [Getting Started →](getting-started.md) | [Case Studies →](case-studies.md)
