# Scorecard: Architecture Maturity

Score each dimension from 0 to 100 using evidence. Do not guess.

## 0-20 Dangerous: architecture is implicit, fragile or undocumented

**Characteristics:**
- Architecture not documented; known only to key person.
- Monolithic or circular dependencies; refactoring impossible.
- Tight coupling; test-to-code ratio 0:1; changes break 5+ modules.
- No clear module boundaries; no contracts or interfaces.
- Deployment manual; dev ≠ prod; configuration inconsistent.
- **Risk:** Any senior dev departure = project blocked. Change = high risk outage.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## 21-40 Legacy: system works but evolution is risky

**Characteristics:**
- Architecture partially documented; some historical context lost.
- Semi-modular; coupling ratio 50-70%; circular imports in 2-3 places.
- Testing partial; test-to-code 1:10; new features slow to integrate.
- Module boundaries exist but not always enforced.
- Deployment semi-automated; staging ≠ production in configuration.
- **Risk:** Change velocity declining. Debugging time increases per quarter.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## 41-60 Stable: understandable but with debt

**Characteristics:**
- Architecture documented; clear module boundaries; most coupling controlled.
- Coupling ratio 30-50%; fewer than 2 circular imports; dependencies explicit.
- Test-to-code ratio 1:5; test coverage 40-60%; integration tests exist.
- Interfaces defined; contracts clear; but some implicit dependencies remain.
- Deployment mostly automated; config management inconsistent across environments.
- **Risk:** Technical debt is visible and tracked. Refactoring possible but slow.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## 61-80 Modern: clear boundaries and good practices

**Characteristics:**
- Architecture documented; ADRs for major decisions; module contracts clear.
- Coupling ratio < 30%; zero circular imports; dependency injection used.
- Test-to-code ratio 1:3; coverage 70-80%; mutation testing passing.
- Interfaces versioned; backward compatible; async boundaries used for scale.
- Deployment automated; IaC for most; configuration consistent; secrets managed.
- **Risk:** Team can evolve architecture incrementally. New modules integrate easily.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## 81-100 Strategic: architecture actively enables business evolution

**Characteristics:**
- Architecture living documentation; automatically synced with codebase.
- Micro-modular; coupling < 10%; service boundaries respect business domains.
- Test-to-code ratio 1:1+; coverage > 85%; chaos testing; failure modes known.
- Interfaces strongly typed; versioning automatic; composition over inheritance.
- Deployment autonomous; GitOps; zero-knowledge incidents; SLO-driven evolution.
- **Risk:** Architecture is an enabler, not a bottleneck. Teams work independently.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Average is allowed only when all dimensions have evidence. Otherwise mark confidence as low.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)
