---
layout: default
title: Case Studies
---

# Case Studies

Real-world scenarios and how to approach them with Architect Forensics Expert.

---

## Case 1: Post-Acquisition Forensic Audit

### Scenario

Your company just acquired TechStartup Inc. The engineering team assures you the platform is "well-architected and production-ready." However, you have concerns about:

- Technology choices (obscure frameworks)
- Code quality and test coverage
- Architecture scalability
- Hidden technical debt

### Approach

**Step 1: Run Full Forensic Audit**

```
@Architect Forensics - we just acquired TechStartup Inc. 
Their engineers claim the platform is well-architected. 
Produce a comprehensive forensic audit. 
Reconstruct the architecture, identify all risks, 
quantify technical debt, and produce a final recommendation.
```

**Step 2: Focus Audit**

If specific concerns arise, invoke specialists:

```
@Cloud Forensics - assess TechStartup's cloud infrastructure for reliability and cost
@Security Forensics - audit their authentication and authorization architecture
@Technical Debt Assessor - quantify their technical debt across all categories
```

**Step 3: Due Diligence Summary**

```
@Due Diligence - produce an investment recommendation 
for TechStartup's acquisition. 
Include hidden costs, integration risks, and 3-year TCO.
```

### Expected Findings

The audit will likely reveal:

- **Evidence:** Monolithic architecture with shared database; 15% test coverage; custom ORM with performance issues
- **Root Cause:** Startup optimized for speed-to-market; no investment in code quality; high technical debt
- **Business Impact:** High defect rate; long deployment cycles (4+ weeks); onboarding new developers takes 6+ months
- **Technical Impact:** Cannot scale horizontally; impossible to maintain without original team
- **Risk:** HIGH — Key team member departure would block all feature development
- **Recommendation:** MODERNIZE (not REBUILD) — Establish code quality baseline, modularize monolith incrementally, improve test coverage to 80%
- **Effort:** 6-9 months; 2-3 FTE
- **Expected Value:** Reduced defect rate, faster time-to-market, improved team retention
- **Priority:** P1 (Urgent; blocks team scaling)

### 3-Year TCO

| Year | Current Cost | With Modernization | Savings |
|------|--------------|-------------------|---------|
| Year 1 | $500K | $650K (investment) | -$150K |
| Year 2 | $600K | $450K | $150K |
| Year 3 | $700K | $400K | $300K |
| **3-Year Total** | **$1.8M** | **$1.5M** | **$300K** |

---

## Case 2: Legacy .NET Framework Migration

### Scenario

Your company has a business-critical WCF (Windows Communication Foundation) service built on .NET Framework 4.7. It:

- Processes $100M+ annual transactions
- Has zero automated tests
- Is maintained by one senior developer (nearing retirement)
- Runs on expensive on-premises servers
- Cannot scale or be deployed to the cloud

### Approach

**Step 1: Assess Current State**

```
@Legacy Recovery - we have a critical WCF service built on .NET Framework 4.7. 
Nobody fully understands how it works. 
Reconstruct the architecture, identify risks, 
and determine whether we should keep, refactor, modernize, replatform, or rebuild.
```

**Step 2: Quantify the Debt**

```
@Technical Debt Assessor - quantify the cost of maintaining this legacy system. 
What are we spending per year? What are the hidden costs?
```

**Step 3: Design Modernization Path**

```
@Modernization Advisor - design a phased migration from .NET Framework WCF 
to .NET 8 Azure Container Apps. 
Minimize business disruption while enabling cloud scale.
```

### Expected Findings

The audit will reveal:

- **Evidence:** 50,000+ lines of tightly-coupled VB.NET code; SOAP XML endpoints; in-memory caching with no invalidation; transactions hardcoded
- **Root Cause:** Built in 2010 when cloud didn't exist; refactoring was deprioritized in favor of features
- **Business Impact:** 
  - Vendor lock-in to on-premises infrastructure
  - High operational costs (~$200K/year)
  - Cannot scale horizontally; single-server bottleneck
  - Key person risk: Senior developer is single point of failure
- **Technical Impact:**
  - Zero test coverage; high defect rate in production
  - Cannot deploy to cloud; cannot use CI/CD
  - Framework is end-of-life (Microsoft no longer supports .NET Framework)
- **Risk:** CRITICAL — If senior developer leaves, nobody can maintain the system
- **Recommendation:** REPLATFORM (migrate to .NET 8 Azure Container Apps using strangler pattern)
- **Effort:** 12-18 months; 3-4 FTE
- **Expected Value:**
  - Cloud scale (10x capacity)
  - Reduced ops costs by 60% ($120K/year savings)
  - Cloud availability (99.99% SLA vs 99.5%)
  - Hiring pool increases (C# developers >> VB.NET developers)
- **Priority:** P0 (Stop-the-line; business continuity risk)

### Migration Timeline

```
Phase 1 (Months 1-3): Foundation
- Set up Azure infrastructure (Container Registry, Container Apps, SQL Database)
- Extract business logic into .NET 8 class libraries
- Build strangler facade (routes new calls to new system)

Phase 2 (Months 4-9): Strangler Implementation
- Migrate 30% of endpoints to .NET 8
- Establish test coverage baseline (80%)
- Deploy to Azure; validate in shadow mode

Phase 3 (Months 10-15): Full Cutover
- Migrate remaining 70% of endpoints
- Monitor logs for discrepancies
- Gradual traffic migration (10% → 50% → 100%)

Phase 4 (Months 16-18): Sunset
- Decommission on-premises servers
- Finalize documentation
- Team knowledge transfer
```

---

## Case 3: RAG Platform Governance Audit

### Scenario

Your company built a RAG (Retrieval-Augmented Generation) platform to answer customer questions. After 6 months in production, you're seeing:

- Hallucinations (15-20% of responses are fabricated)
- Inconsistent answers to the same question
- High LLM token costs ($50K/month and rising)
- No monitoring of answer quality
- Tool integration errors causing silent failures

### Approach

**Step 1: Audit the RAG Platform**

```
@AI Forensics - audit our RAG platform. 
Evaluate grounding quality, hallucination %, tool governance, 
cost optimization, and safety controls.
```

**Step 2: Focus on Specific Concerns**

```
@Security Forensics - audit our RAG platform for safety. 
Can users jailbreak the system? Can they exfiltrate data? 
Are we vulnerable to prompt injection?
```

### Expected Findings

The audit will reveal:

- **Evidence:**
  - Knowledge base has gaps; 40% of questions cannot be answered from KB
  - LLM default temp=0.9 (too high for factual Q&A)
  - No re-ranking of retrieved documents
  - Tool integration missing error handling
  - No monitoring dashboard
- **Root Cause:**
  - KB was built by copying documentation (incomplete)
  - Team didn't know LLM best practices
  - Velocity prioritized over quality
- **Business Impact:**
  - Customer complaints about wrong answers
  - Reputational risk
  - High cost with poor ROI
  - Manual review team needed (600 hours/month)
- **Technical Impact:**
  - Hallucination rate of 15-20% (should be <5%)
  - No observability; blind to production issues
  - Token costs unoptimized (could be 50% lower)
  - No test coverage for answer quality
- **Risk:** MEDIUM — Reputational damage if platform produces confidently wrong answers
- **Recommendation:**
  1. Fix immediate (1 week): Lower temperature to 0.3; add output validation
  2. Short-term (1 month): Build document re-ranker; implement monitoring dashboard
  3. Medium-term (3 months): Audit and improve KB completeness; add chain-of-thought prompting
  4. Long-term (6 months): Implement RAGAS evaluation framework; fine-tune LLM on domain
- **Effort:** S/M/M/L
- **Expected Value:** Hallucination rate < 3%; token costs -50%; reduce manual review to 100 hours/month
- **Priority:** P1 (impacts production quality and costs)

### AI Maturity Score: 35 (LEGACY)

| Dimension | Score | Finding |
|-----------|-------|---------|
| Grounding | 30 | Basic chunking; no re-ranking; hallucination 15-20% |
| Evaluation | 20 | No systematic evaluation; manual spot-checks only |
| Prompt Safety | 25 | No jailbreak defenses; vulnerable to injection |
| Tool Governance | 40 | Tools implemented but missing error handling |
| Memory Governance | 50 | Context management works but not optimized |
| Cost Control | 15 | No token budget; unchecked LLM calls |
| Observability | 10 | No monitoring; blind to issues |

---

## Case 4: Migration to Azure Kubernetes Service (AKS)

### Scenario

Your company has 50 microservices running on Docker but orchestrated manually. You're considering migrating to Azure Kubernetes Service (AKS) to:

- Enable auto-scaling
- Improve availability (current: 99.5%; target: 99.99%)
- Reduce ops overhead

### Approach

**Step 1: Assess Cloud Readiness**

```
@Cloud Forensics - assess our cloud readiness for Kubernetes migration. 
Evaluate networking, identity, security, reliability, and cost implications.
```

**Step 2: Challenge the Decision**

```
@Architect Challenger - we're planning to migrate to AKS. 
Is this the right move? What are the hidden costs and risks?
```

**Step 3: Design Migration**

```
@Modernization Advisor - design a phased migration from manual Docker 
to Azure Kubernetes Service. What's the best approach to minimize disruption?
```

### Expected Findings

The audit will reveal:

- **Pros (for AKS):**
  - Auto-scaling reduces ops overhead
  - Zone-redundant clusters enable 99.99% availability
  - GitOps integration (Flux, ArgoCD) improves deployment safety
  - Native integration with Azure services
- **Cons (hidden costs):**
  - $500K+ implementation cost (consulting, training, infrastructure)
  - 12-18 month learning curve for ops team
  - Kubernetes complexity can become a bottleneck
  - Not all workloads benefit from Kubernetes (stateful services)
- **Alternative:** Maybe Azure Container Apps (simpler, less ops) is better?
- **Recommendation:** PILOT with Container Apps first; if that doesn't meet scale requirements, proceed to AKS
- **Risk:** HIGH — Migrating before team is ready leads to production outages
- **Timeline:** 9-12 months with pilot; 12-18 months for full AKS

---

## Quick Reference: Which Agent to Use

| Question | Agent |
|----------|-------|
| "We inherited a codebase; where do we start?" | **Architect Forensics** |
| "Our RAG platform has hallucinations" | **AI Forensics** |
| "Is our cloud architecture production-ready?" | **Cloud Forensics** |
| "What's our security posture?" | **Security Forensics** |
| "Why is our app slow?" | **Performance Forensics** |
| "This legacy system is critical but undocumented" | **Legacy Recovery** |
| "How do we modernize safely?" | **Modernization Advisor** |
| "What's our technical debt costing us?" | **Technical Debt Assessor** |
| "Is this architecture recommendation wise?" | **Architect Challenger** |
| "We're acquiring a company; what should we know?" | **Due Diligence** |

---

## Next Steps

1. **Pick a real system** — Identify a platform you want to audit
2. **Invoke Architect Forensics** — Run a full forensic audit
3. **Review the findings** — Study the 9-field format
4. **Implement recommendations** — Start with P0 and P1 items
5. **Measure outcomes** — Track improvement in metrics (defect rate, deployment time, cost)

---

[← Back to Home](index.md) | [Getting Started →](getting-started.md) | [Agents Guide →](agents-guide.md)
