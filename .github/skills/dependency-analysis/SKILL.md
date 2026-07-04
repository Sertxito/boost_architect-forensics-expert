# Skill: Dependency Analysis

## Purpose
Map internal and external dependencies, identify coupling risks, version vulnerabilities, and ownership gaps. This is the connectivity auditing skill: understanding what depends on what, and what breaks if any piece fails.

## Inputs
- Package/dependency manifests (package.json, requirements.txt, pom.xml, go.mod, Gemfile, .csproj).
- Lockfiles (package-lock.json, yarn.lock, poetry.lock, go.sum).
- Import statements across the codebase.
- Configuration files (appsettings.json, .env, nginx.conf, docker-compose.yml).
- External API contracts and OpenAPI/gRPC definitions.
- Database migrations and schema (identify hidden dependencies).
- CI/CD pipeline definitions (runtime dependencies, secrets, external services).
- Container registries and artifact storage.
- Third-party SaaS subscriptions and integrations.

## Analysis Areas
- **Direct Dependencies**: Libraries, frameworks, runtime used.
- **Transitive Dependencies**: What your dependencies depend on (depth, risk surface).
- **Version Drift**: Are versions pinned, floating, or inconsistent across environments?
- **Security**: Known vulnerabilities in dependencies (use SBOM if available).
- **Outdated Libraries**: Unmaintained, end-of-life, or too far behind stable.
- **Coupling Patterns**: Circular imports, tight cross-module coupling, god classes. See `patterns/anti-patterns.md`.
- **Data Dependency**: Shared databases, coupling through data model instead of API.
- **External Service Dependencies**: Cloud APIs, databases, message queues, CDNs, SSO providers.
- **Ownership Clarity**: Who maintains each dependency? Is it internal or external?

## Process
1. **Extract Dependency Graph**: Parse manifests, trace imports, build transitive closure.
2. **Identify Circular Dependencies**: Static analysis for import cycles.
3. **Audit External Dependencies**: Check licenses, vulnerability status, maintenance status.
4. **Map Data Coupling**: Query dependencies on databases, cache, configuration stores.
5. **Assess Criticality**: Which dependencies are single points of failure?
6. **Calculate Coupling Index**: Intra-module vs inter-module coupling ratio.
7. **Produce Findings** using mandatory format.

## Dependency Risks Catalog
- **Circular Dependencies** (e.g., A → B → C → A): Blocks refactoring, makes testing hard.
- **Shared Database**: N modules update same tables → data coupling, deployment lock-in.
- **Transitive Bloat**: 100+ transitive dependencies for 5 direct ones.
- **Version Mismatches**: Dev vs prod, staging vs live (production incidents).
- **License Violations**: GPL in proprietary, incompatible licenses.
- **Abandoned Libraries**: No updates in 3+ years, known vulnerabilities.
- **External Service Coupling**: API breaking changes break your deploy.
- **Implicit Dependencies**: Magic environment variables, hardcoded IP addresses, deployment scripts.

See `patterns/architecture-smells.md` for coupling anti-patterns.

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** specific dependency line in manifest, import path, lockfile version, or test failure showing breakage.
- **Root Cause:** why it's coupled (design choice, gradual accretion, third-party requirement, lack of abstraction).
- **Business Impact:** can we deploy independently? What breaks if this dependency becomes unavailable?
- **Technical Impact:** testing burden, release friction, scalability ceiling, security surface.
- **Risk:** Critical / High / Medium / Low (based on maintenance status, version distance, update frequency).
- **Recommendation:** decouple / upgrade / replace / accept (with rationale).
- **Estimated Effort:** S / M / L / XL.
- **Expected Value:** independence gained, testing speedup, deploy parallelization.
- **Priority:** P0 / P1 / P2 / P3 based on business/deploy impact.

## Decoupling Strategies
Reference `specs/decision-taxonomy.md` for design choices:
- **Via Abstraction**: Hide implementation behind interface, swap implementations.
- **Via Async Boundary**: Event/message based instead of synchronous call.
- **Via Timeout/Circuit-Breaker**: Fail gracefully if external service slow/down.
- **Via Data Sync**: ETL pipeline instead of shared database (latency/availability trade-off).
- **Via Feature Flag**: Feature incomplete → feature incomplete + stub implementation for testing.

## Output
1. **Dependency Map** (`templates/architecture-review.md`): Graph of internal modules + external services.
2. **Coupling Report**: Circular refs, tight cross-module dependencies, shared-database warnings.
3. **Vulnerability Scan**: Dependencies with known CVEs, outdated versions, unmaintained libraries.
4. **Version Drift Report**: Inconsistencies across environments, missing lockfiles.
5. **Decoupling Roadmap**: Top 3 opportunities to reduce coupling (effort vs impact).
6. **Criticality Assessment**: Which dependencies are tolerable risks vs which are "must fix".
