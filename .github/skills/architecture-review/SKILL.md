# Skill: Architecture Review

## Purpose
Evaluate architecture quality, boundaries, coupling, scalability and maintainability. This skill produces findings at the component, subsystem, and system levels.

## Inputs
- Repository structure and codebase files.
- Deployment unit definitions (Docker, manifests, IaC).
- Architecture documents (if available).
- Configuration and environment mappings.
- Pipeline definitions (CI/CD).
- Runtime observations (logs, metrics, traces).
- Dependency graphs (direct and transitive).

## Review Areas
- **Boundaries & Coupling**: Module boundaries, cross-layer dependencies, circular refs.
- **Scalability**: Horizontal vs vertical scaling, state distribution, bottlenecks.
- **Maintainability**: Complexity, cohesion, technical debt, code organization.
- **Reliability**: Failure modes, graceful degradation, retry/timeout patterns.
- **Extensibility**: Plugin points, configuration, feature flags, versioning strategy.

## Process
1. Map deployment units and runtime components (fact-gathering phase).
2. Validate boundaries against actual dependencies (static analysis).
3. Identify violations, smells and patterns against `patterns/architecture-smells.md`.
4. Produce findings using mandatory format (evidence first, always).
5. Cross-reference against relevant checklists:
   - `checklists/backend.md` for server architecture.
   - `checklists/frontend.md` for UI/client architecture.
   - `checklists/api.md` for API design.
   - `checklists/data.md` for data flows and storage.
   - `checklists/architecture-audit.md` for structural assessments.
6. Recommend incremental actions (prioritized by business impact first, effort second).

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** concrete file path, dependency link, configuration snippet, log line or architecture diagram reference.
- **Root Cause:** why the issue exists, not only what is visible.
- **Business Impact:** consequence for delivery velocity, risk tolerance, cost, compliance or continuity.
- **Technical Impact:** consequence for maintainability, scalability, reliability, security or operability.
- **Risk:** Critical / High / Medium / Low, considering likelihood and impact.
- **Recommendation:** specific action; no generic advice (e.g., "Extract service X to separate pod and establish async boundary" not "improve coupling").
- **Estimated Effort:** S / M / L / XL with assumptions.
- **Expected Value:** what improves after acting (e.g., "delivery cycle reduces from 3 weeks to 3 days").
- **Priority:** P0 / P1 / P2 / P3 based on business impact.

## Anti-Patterns to Watch
See `patterns/anti-patterns.md` for common architecture pitfalls:
- Distributed monolith (microservices with shared DB).
- N+1 API calls from frontend.
- Leaky abstraction (implementation details exposed).
- God class / god module.
- Circular dependencies at module level.
- Authentication spread across multiple systems.

## Output
1. **Architecture Summary** (`templates/architecture-review.md`): Component diagram, data flows, deployment view.
2. **Finding Register**: All findings sorted by priority with evidence.
3. **Risk Map** (`templates/risk-matrix.md`): Risks vs likelihood × impact.
4. **Maturity Score** (`scorecards/architecture-maturity.md`): 0-100 rating with evidence per dimension.
5. **Incremental Action Plan**: Top 3 moves for next 90 days.
