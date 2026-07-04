# Skill: Modernization

## Purpose
Design phased modernization roadmaps that balance value delivery, cost, risk, technical debt reduction, and dependency sequencing. Covers stabilization, refactoring, modularization, strangler patterns, replatforming, and selective replacement.

## Inputs
- Technical debt inventory (from debt-assessment, legacy-analysis, architecture-review).
- Risk assessment and failure modes.
- Cost-benefit analysis per initiative.
- Dependency map (what blocks what).
- Business priorities and budget constraints.
- Team capacity and skill assessment.
- Regulatory/compliance pressure.

## Modernization Paths
Reference `playbooks/modernization-roadmap.md`:
- **Stabilize**: Fix immediate blockers (security holes, compliance violations, critical bugs). No value, but unblocks everything else.
- **Refactor**: Improve code quality, test coverage, maintainability within existing boundaries. High ROI, medium effort.
- **Modularize**: Extract modules, reduce coupling, enable independent deployment. Medium ROI, high effort.
- **Strangler**: Incrementally replace with new system while old continues serving requests. High cost, low risk.
- **Replatform**: Lift-and-shift to new platform (cloud, containerization, microservices). Medium cost, medium risk.
- **Selective Replacement**: Replace specific high-value components (persistence layer, API gateway, auth). Medium cost, targeted risk.
- **Retire**: Stop maintaining. Only if business can afford to lose capability.

## Time Horizons
- **0-30 Days**: Quick wins (security patches, bug fixes, config changes). ROI > 10x, effort < 1 sprint.
- **1-3 Months**: High-ROI refactoring, test automation, observability. ROI > 5x, effort 1-3 sprints.
- **3-6 Months**: Modularization, major dependency updates, platform migration pilots. ROI > 2x, effort > 3 sprints.
- **6-12 Months**: Full replatforming, strangler replacement, architectural overhaul. ROI uncertain, effort > 6 sprints.
- **12+ Months**: Full rebuild decision. Justify on business case alone, not ROI.

## Sequencing Constraints
- **Unblock High-Priority Work**: Fix what blocks other initiatives.
- **De-Risk High-Risk Items**: Do risky work early when time to recover exists.
- **Enable Parallel Tracks**: Modularize to let teams work independently.
- **Maximize Optionality**: Don't close doors prematurely (e.g., don't hardcode to single cloud).
- **Fast Feedback**: Get quick wins early to build momentum and team confidence.

## Process
1. **Enumerate Modernization Opportunities**: From all audit outputs (debt, risks, dependencies, technical findings).
2. **Assess Each Initiative**: Effort (S/M/L/XL), Business Value (P0/P1/P2/P3), Risk (Critical/High/Medium/Low), Dependencies (what must happen first).
3. **Create Value vs Effort Matrix**: Plot all initiatives (X=effort, Y=business value).
4. **Identify Blocking Dependencies**: Which initiatives unblock others?
5. **Draft Timeline**: 0-30 days → 1-3 months → 3-6 months → 6-12 months → 12+ months.
6. **Validate Against Constraints**: Budget, team capacity, business priorities, regulatory deadlines.
7. **Socialize & Iterate**: Get buy-in from engineering, product, business.
8. **Produce Findings** using mandatory format.

See `templates/modernization-roadmap.md` for structured output and `playbooks/modernization-roadmap.md` for detailed methodology.

## Common Modernization Pitfalls
Reference `patterns/technical-debt-patterns.md`:
- **Big Bang Rewrite**: Entire system rebuilt at once. High risk, long payoff, team paralysis.
- **Death by a Thousand Cuts**: Too many parallel initiatives. Context switching, nothing ships.
- **Feature Parity Obsession**: New system must support all old features before replace. Modernization never completes.
- **Ignoring Dependencies**: Refactor A before B, but B blocks A's refactor. Wasted effort.
- **Ignoring Business Pressure**: Technical perfection ≠ business value. Ship something fast.
- **Neglecting Monitoring**: Ship new system without observability. Can't debug production issues.

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** technical debt item, risk register entry, cost report, or dependency graph.
- **Root Cause:** why is this on the roadmap (debt accumulation, business requirement, risk mitigation, or competitive pressure).
- **Business Impact:** value if done (cost savings, risk reduction, new capability, competitive advantage), cost if not done.
- **Technical Impact:** architectural improvement, deployment velocity, team productivity, scalability ceiling.
- **Risk:** Critical / High / Medium / Low (effort uncertainty, execution risk, organizational risk).
- **Recommendation:** specific initiative with phasing strategy (e.g., "Phase 1: Refactor auth to OAuth2 (1 sprint). Phase 2: Implement MFA (2 sprints). Phase 3: Migrate to Entra ID (3 sprints)").
- **Estimated Effort:** S / M / L / XL including planning, execution, testing, rollout.
- **Expected Value:** debt reduction %, velocity increase %, cost savings $/year, risk reduction.
- **Priority:** P0 (unblock others or regulatory) / P1 (high ROI, low risk) / P2 (nice-to-have) / P3 (future consideration).

## Output
1. **Opportunities Backlog**: All modernization initiatives with effort/value/risk/dependency metadata.
2. **Value vs Effort Matrix** (`templates/modernization-roadmap.md`): Visual quadrant showing quick wins vs legacy blockers.
3. **Sequenced Roadmap**: Timeline with phasing (0-30d, 1-3m, 3-6m, 6-12m, 12m+).
4. **Dependency Analysis**: Which initiatives unblock which others (critical path).
5. **Budget Estimate**: Cost per phase, total investment, payoff timeline (NPV if applicable).
6. **Risk Register** (`templates/risk-matrix.md`): Execution risks, organizational risks, technical risks per initiative.
7. **90-Day Execution Plan**: First 5-8 initiatives with task breakdown, owner, and success criteria.
8. **Modernization Score** (`scorecards/modernization-score.md`): 0-100 baseline (current state) vs 0-100 target (1-year roadmap).
