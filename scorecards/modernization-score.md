# Scorecard: Modernization Score

Score each dimension from 0 to 100 using evidence. Do not guess.
Apply [`specs/scoring-methodology.md`](../specs/scoring-methodology.md). Cost, duration, and ROI examples below are illustrative; assess them against scoped estimates, assumptions, and the business case.

## Business Value Preservation

**0-20**: Modernization will lose critical functionality; business case weak or non-existent; value at risk > cost.
**21-40**: 70% of functionality mapped to new system; 10-20% features risky; business value unclear.
**41-60**: 80-90% functionality preserved in plan; feature parity documented; value case exists but conservative.
**61-80**: 95%+ functionality preserved; new system adds capabilities; business value clear and quantified.
**81-100**: Modernization enhances business; new capabilities enabled; competitive advantage clear; value exceeds cost by 3x+.

- Score: /100
- Evidence: (example: "Customer functionality mapping reviewed against the current release; estimated benefits and migration costs documented with assumptions and confidence range")
- Risk:
- Recommendation:

## Migration Feasibility

**0-20**: Dependencies circular and tangled; cannot untangle; strangler impossible; big bang required (high risk).
**21-40**: Dependencies complex; 20% of services blocking others; phased approach possible but risky; 6+ month critical path.
**41-60**: 50% of dependencies are clear; can modularize in 2-3 phases; strangler pattern feasible; 3-6 month timeline.
**61-80**: Dependencies mostly clear; 80% can go in parallel; strangler easy; dual-run feasible; 1-3 month timeline possible.
**81-100**: Clean dependency graph; services independent; strangler trivial; zero blocking dependencies; can ship in phases < 1 month.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Dependency Isolation

**0-20**: Shared database; shared cache; tightly coupled APIs; cannot proceed without freezing all dependencies.
**21-40**: Some data isolation possible; 3-4 shared services; limited autonomy during transition.
**41-60**: 60% of dependencies isolated; 2-3 shared services remain; can plan isolation in parallel tracks.
**61-80**: 90% isolated; 1-2 shared services; can maintain dual-write during transition; clean cutover path.
**81-100**: Fully isolated; API contracts versioned; zero coupling; migration is a switch, not a sequence.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Team Readiness

**0-20**: Team unfamiliar with target tech; no proof of concept; zero experience; hiring required; learning curve 6+ months.
**21-40**: Team has basic skills; POC attempted; 30% comfortable with architecture; 2-3 month ramp-up needed.
**41-60**: Team skilled in components; 60% of required expertise present; POC successful; 4-6 week ramp-up.
**61-80**: Team experienced with target tech; architectural POC proven; 80% ready; 2-week ramp-up for new patterns.
**81-100**: Team expert-level; reference implementation exists; zero risk on technical execution; ready to ship day 1.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Operational Safety

**0-20**: No monitoring plan; no rollback strategy; no dual-run capability; flip-of-a-switch migration (one chance to get right).
**21-40**: Monitoring partial; rollback risky; dual-run possible but complex; incident response untested.
**41-60**: Monitoring strategy clear; rollback for most components; dual-run workable; incident response documented.
**61-80**: Comprehensive monitoring; clean rollback; dual-run proven; feature flags for phased rollout; chaos tested.
**81-100**: Real-time observability; instant rollback; blue-green tested; canary deployment proven; SLO-driven safety.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Cost/Value Balance

**0-20**: Cost and benefits are unscoped or unsupported; evidence suggests the initiative may destroy more value than it creates.
**21-40**: Rough cost and benefit estimates exist, but key assumptions, dependencies, or lifecycle costs remain uncertain.
**41-60**: Scoped estimates and expected benefits are documented; the case is viable but sensitive to important assumptions or constraints.
**61-80**: Range-based estimates cover major dependencies and lifecycle costs; the case remains attractive under plausible variations.
**81-100**: Independently reviewed business case with measurable outcomes, credible delivery capacity, and sensitivity analysis; value is robust against plausible changes.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Do not average unknown or non-applicable dimensions. State evidence coverage, weighting, and why an aggregate is or is not defensible.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)

---

## Quick Decision Guide

| Supported overall score or dimension profile | Recommendation |
|---|---|
| 0-40 | **Do not modernize now.** Stabilize first; re-evaluate when evidence and business conditions change. |
| 41-60 | **Pilot selectively.** Validate the business case, team readiness, and migration risks before scaling. |
| 61-80 | **Proceed in phases.** Use explicit success criteria, rollback, and monitoring. |
| 81-100 | **Proceed when justified.** A high score is not a substitute for an approved business case or delivery plan. |

Use this guide only when a supported aggregate score is available. Otherwise make a recommendation from the relevant dimensions and explain the evidence gaps.
