# Playbook: Migration Strategy

## Strategies
- Lift and shift: only when infrastructure is the main issue.
- Replatform: when runtime needs modernization but domain model is valid.
- Refactor: when structure blocks maintainability.
- Strangler Fig: preferred for critical legacy systems.
- Rebuild: only when evidence shows existing asset has negative net value.

## Required migration controls
- Parallel run plan.
- Rollback strategy.
- Data migration validation.
- Consumer compatibility.
- Observability before cutover.
- Business sign-off per capability.
