# Scorecard: Modernization Score

Score each dimension from 0 to 100 using evidence. Do not guess.

## Business Value Preservation

**0-20**: Modernization will lose critical functionality; business case weak or non-existent; value at risk > cost.
**21-40**: 70% of functionality mapped to new system; 10-20% features risky; business value unclear.
**41-60**: 80-90% functionality preserved in plan; feature parity documented; value case exists but conservative.
**61-80**: 95%+ functionality preserved; new system adds capabilities; business value clear and quantified.
**81-100**: Modernization enhances business; new capabilities enabled; competitive advantage clear; value exceeds cost by 3x+.

- Score: /100
- Evidence: (example: "Customer functionality 98% mapped; new analytics capability adds $2M revenue; modernization ROI 2.5x over 2yr")
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

**0-20**: Estimated cost > $10M or > 2 years; business value unclear; ROI negative or undefined.
**21-40**: Cost $5-10M or 1-2 years; business value exists but fuzzy; ROI > 1x but payoff long.
**41-60**: Cost $2-5M or 6-12 months; business value clear; ROI 1.5x+ over 3 years; cost-justified but tight.
**61-80**: Cost $500k-2M or 3-6 months; business value strong; ROI 2x+ over 2 years; easy business case.
**81-100**: Cost < $500k or < 3 months; business value exceptional; ROI 3x+ over 1 year; no-brainer investment.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Average is allowed only when all dimensions have evidence. Otherwise mark confidence as low.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)

---

## Quick Decision Guide

| Overall Score | Recommendation |
|---|---|
| 0-40 | **Do not modernize now.** Stabilize first. Re-evaluate in 6 months. |
| 41-60 | **Pilot modernization.** Proof of concept, team training, then decide. |
| 61-80 | **Proceed with caution.** Phased approach, limit scope, strong monitoring. |
| 81-100 | **Proceed with confidence.** Ready to execute. Focus on team velocity. |
