# Scorecard: Technical Debt Score

Score each dimension from 0 to 100 using evidence. Do not guess.
Apply [`specs/scoring-methodology.md`](../specs/scoring-methodology.md). Numeric ratios and thresholds below are illustrative signals, not universal targets; use only measured values with stated scope and method.

## Architecture Debt

**0-20**: Monolithic; no module boundaries; circular dependencies; high coupling ratio (>70%); every change breaks everything.
**21-40**: Some modularization; tight cross-module coupling (50-70%); dependencies poorly documented; hard to test in isolation.
**41-60**: Clear module boundaries; controlled dependencies; documented interfaces; coupling index 30-50%; some circular imports.
**61-80**: Loosely coupled modules; dependency injection; clear contracts; coupling <30%; refactoring possible without rewrite.
**81-100**: Micro-modular architecture; composition over inheritance; explicit contracts; zero circular deps; services deployable independently.

- Score: /100
- Evidence: (example: "Coupling index 45%; 3 circular imports in auth layer; module boundaries documented; inter-module deps through events")
- Risk:
- Recommendation:

## Code Debt

**0-20**: Code unreadable; no naming conventions; copy-paste everywhere; no structure; files > 2000 lines; functions > 200 lines.
**21-40**: Some readability; inconsistent style; high duplication; functions 50-200 lines; no refactoring happening.
**41-60**: Readable code; consistent style enforced; duplication <15%; functions <100 lines; technical debt backlog exists.
**61-80**: Clean code; DRY principle; duplication <5%; average function 30 lines; regular refactoring; style automated.
**81-100**: Self-documenting code; zero duplication; average function 15 lines; cognitive complexity low; comments rare + accurate.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Test Debt

**0-20**: No tests; manual QA only; no CI; deploy confidence < 50%; test-to-code ratio 0:1.
**21-40**: Few unit tests (5-10% coverage); manual integration tests; slow feedback; test-to-code 1:5; tests brittle.
**41-60**: 40-60% code coverage; unit + integration tests; tests run in CI; some e2e tests; flaky tests identified.
**61-80**: 70-80% coverage; unit + integration + e2e; fast feedback (<5min); tests maintainable; mutation testing passing.
**81-100**: 90%+ coverage; property-based tests; chaos testing; SLO-driven tests; test-to-code 1:1 or higher; zero flaky tests.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Dependency Debt

**0-20**: Direct deps outdated (3+ years old); untracked transitive deps; vulnerable CVEs known; no lock files; circular deps.
**21-40**: Some deps updated; dependencies tracked; CVE scanning absent/quarterly; lock file exists; transitive issues exist.
**41-60**: Most deps current (within 1 year); monthly vulnerability scanning; lock files enforced; outdated libs flagged; 1-2 circular deps.
**61-80**: Deps quarterly reviewed; weekly CVE scans; automated updates for patches; zero known vulnerabilities; no circular deps.
**81-100**: Continuous dependency monitoring; zero-day response < 24h; automated security patching; SBOM generated; transitive security validated.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Security Debt

**0-20**: Secrets in code; no auth/authz; SQL injection possible; no encryption; compliance violations known.
**21-40**: Basic auth; some secrets in vault; input validation partial; encryption missing for sensitive data; compliance gaps.
**41-60**: OAuth2 used; secrets management enforced; OWASP top 10 mitigated; encryption at rest for sensitive; compliance mostly met.
**61-80**: Multi-auth supported; real-time secret scanning; secure coding enforced; encryption + key rotation; audit logging; compliance audit passing.
**81-100**: Zero-trust architecture; passwordless; zero standing secrets; end-to-end encryption; behavioral threat detection; compliance automated.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Operational Debt

**0-20**: No monitoring; manual deployments; no CI/CD; runbooks missing; on-call unsustainable.
**21-40**: Basic monitoring; CI/CD for code; manual infra deployments; runbooks incomplete; on-call escalations frequent.
**41-60**: Comprehensive monitoring; automated deployments; IaC for most; runbooks exist; on-call SLA tracked; 1 manual process remains.
**61-80**: Full observability; GitOps; automated runbooks; incident response < 5min; on-call sustainable; self-healing for 80% issues.
**81-100**: AIOps; autonomous remediation; zero-knowledge incident response; SLO automation; on-call cost < 10% of team capacity.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Knowledge Debt

**0-20**: No documentation; tribal knowledge only; system unknown to new engineers; onboarding > 2 months.
**21-40**: Sparse documentation; outdated; architecture not documented; onboarding 1-2 months; key person risk.
**41-60**: Architecture documented; ADRs exist; onboarding < 1 month; run-books present; some diagrams; docs 70% up-to-date.
**61-80**: Comprehensive docs; auto-generated API docs; ADR for all major decisions; onboarding < 2 weeks; video tutorials; 95% up-to-date.
**81-100**: Living documentation; auto-sync with code; interactive architecture; onboarding < 1 week; no key person risk; docs 100% current.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Do not average unknown or non-applicable dimensions. State evidence coverage, weighting, and why an aggregate is or is not defensible.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)
