---
name: legacy-analysis
description: 'Assess legacy systems for hidden risks, modernization blockers, residual business value and safe evolution paths. This is the business-critical preservation skill: how to move without breaking.'
---

# Skill: Legacy Analysis

## Purpose
Assess legacy systems for hidden risks, modernization blockers, residual business value and safe evolution paths. This is the business-critical preservation skill: how to move without breaking.

## Inputs
- Source code (language/framework history provides context).
- Technology stack, versions, dependencies (obsolescence signals).
- Test coverage and test age (brittleness indicator).
- Deployment process (manual vs automated → migration risk).
- Monitoring and alerting (observability → change confidence).
- Team knowledge distribution (bus factor).
- Business criticality per feature.
- Compliance requirements (regulatory lock-in).
- Cost of downtime vs cost of modernization.

## Analysis Areas
- **Obsolescence Risk**: Unsupported runtimes, dependencies, frameworks. See `patterns/legacy-smells.md`.
- **Technical Debt Buildup**: Complexity, coupling, test debt, knowledge debt. Use `scorecards/technical-debt-score.md`.
- **Single Points of Failure**: Key person, hard-to-replace component, undocumented process.
- **Hidden Capabilities**: What business value is buried in this system that competitors would copy?
- **Integration Friction**: How tightly coupled is this to other systems? Strangler candidate?
- **Cost of Inertia**: What would it cost to keep it as-is for 1, 3, 5 more years?
- **Replacement vs Repair Trade-off**: Build new or fix current? What's the NPV?

## Process
1. **Quantify the Debt** (`scorecards/technical-debt-score.md`): Measure by category (architecture, code, test, dependency, security, operational).
2. **Map Business Capabilities**: Which features drive revenue, compliance, or customer satisfaction? Which are legacy sunk cost?
3. **Identify Retirement Candidates**: Low-value features not worth migrating.
4. **Assess Strangler Readiness**: Can we incrementally replace this without downtime?
5. **Calculate True Cost of Change**: Effort × risk × domain knowledge gaps.
6. **Produce Findings** using mandatory format.

See `playbooks/modernization-roadmap.md` for full roadmap construction.

## Legacy Risk Catalog
Use `checklists/legacy-system.md` for verification:
- [ ] Framework/runtime is still supported (< 2 years out of support).
- [ ] No critical security vulnerabilities left unfixed.
- [ ] At least 1 person can deploy it in <30 mins.
- [ ] Business processes are documented or tested.
- [ ] Retirement/replacement decision made (keep/refactor/modernize/replace).
- [ ] Cost of running vs modernizing is documented.

## Key Questions to Answer
1. **Why is this still alive?** (Business value? Switching cost? Regulatory requirement?)
2. **What would break if it failed?** (Business impact? Customer trust? Compliance violation?)
3. **What can be isolated first?** (What feature set can be strangled without touching core?)
4. **What can be strangled gradually?** (What can run in parallel for N months until cutover?)
5. **What should never be migrated as-is?** (What are the design mistakes we should NOT replicate?)

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** specific code section, framework version, deployment script, test failure pattern, or business constraint.
- **Root Cause:** why this became legacy (time, platform evolution, team churn, intentional technical debt).
- **Business Impact:** revenue risk, customer experience risk, compliance risk, team velocity impact.
- **Technical Impact:** maintainability barrier, scaling ceiling, security exposure, deploy friction.
- **Risk:** Critical / High / Medium / Low.
- **Recommendation:** keep/stabilize/refactor/modernize/retire with rationale.
- **Estimated Effort:** S / M / L / XL including knowledge transfer and testing.
- **Expected Value:** what becomes safer, faster, or cheaper after acting.
- **Priority:** P0 / P1 / P2 / P3 based on business criticality.

## Modernization Paths
Reference `playbooks/modernization-roadmap.md` for patterns:
- **Stabilize First** (0-30 days): Stop the bleeding. Document, monitor, stabilize.
- **Refactor in Place** (1-3 months): Improve internal structure without changing API.
- **Modularize** (3-6 months): Break monolith into deployable units.
- **Strangler** (6-12+ months): Run new and old in parallel, gradually route traffic.
- **Replace** (12+ months): Deprecate old, migrate remaining capabilities.
- **Retire** (done): Kill it, celebrate, recover DevOps capacity.

## Output
1. **Legacy Risk Assessment** (`templates/risk-matrix.md`): Obsolescence, integration, cost-of-inertia risks.
2. **Technical Debt Heatmap** (`scorecards/technical-debt-score.md`): By category, with cost estimates.
3. **Modernization Options** (`templates/modernization-roadmap.md`): 3-5 possible paths with cost/time/risk.
4. **Go/No-Go Decision**: Keep, refactor, modernize, replatform, retire?
5. **Safe Next Step**: What's the 90-day action that reduces the most risk?
