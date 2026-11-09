# Scorecard: Security Maturity

Score each dimension from 0 to 100 using evidence. Do not guess.
Apply [`specs/scoring-methodology.md`](../specs/scoring-methodology.md). Assess controls against the system's threat model and applicable obligations; examples below are not universal compliance requirements.

## Authentication

**0-20**: Passwords in code; no encryption; session tokens predictable; no 2FA option.
**21-40**: Basic password auth; TLS on login; session tokens OK but no expiry; 2FA optional.
**41-60**: OAuth2/OIDC for external; strong password policy; MFA available; token expiry enforced.
**61-80**: OAuth2/OIDC enforced; MFA mandatory for humans + admins; passwordless option available; token rotation.
**81-100**: Passwordless-first; conditional access; adaptive MFA; session binding to device; cryptographic proof of auth.

- Score: /100
- Evidence: (example: "95% of users on OAuth2; MFA 100% enforced; token expiry 1h; session binding enabled")
- Risk:
- Recommendation:

## Authorization

**0-20**: No access control; everyone admin; hardcoded role checks; data access unvalidated.
**21-40**: Basic role-based access; not enforced everywhere; privilege escalation possible; data access inconsistent.
**41-60**: RBAC enforced consistently; least privilege for most; audit logging of access changes; quarterly review.
**61-80**: Fine-grained RBAC + attribute-based; access reviewed monthly; attribute changes logged; automated role revocation.
**81-100**: Dynamic authorization (ABAC); real-time threat assessment; behavior-based access; continuous verification.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Secrets

**0-20**: Secrets in code/logs; git history contains keys; no rotation; hardcoded everywhere.
**21-40**: Secrets in env vars; basic vault exists but not enforced; rotation manual; audit trail weak.
**41-60**: Centralized secrets vault; rotation quarterly; audit logging; some enforcement via scanning.
**61-80**: Enforced vault everywhere; rotation monthly; real-time access audit; git scanning + prevention.
**81-100**: Dynamic secrets (auto-rotated); zero standing credentials; encrypted backup of secrets; anomaly detection on access.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Supply Chain

**0-20**: No SBOM; dependencies not tracked; no vulnerability scanning; use of abandoned libraries.
**21-40**: Dependencies tracked; annual vulnerability scan; some outdated deps; minimal enforcement.
**41-60**: SBOM generated; monthly vulnerability scans; outdated deps flagged; upgrade process documented.
**61-80**: SBOM automated; weekly scans + auto-remediation; transitive deps analyzed; supply chain policy enforced.
**81-100**: Real-time vulnerability monitoring; behavioral analysis of deps; zero-day response SLA < 24h; SLSA compliance.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Data Protection

**0-20**: No encryption at rest; sensitive data in plain text; no classification; backups unencrypted.
**21-40**: Encryption at rest for some data; basic classification; backups encrypted; TLS on wire.
**41-60**: Encryption at rest for all sensitive; PII classified + masked; backups geo-redundant; TLS everywhere.
**61-80**: Customer-managed keys; data minimization enforced; automated masking in non-prod; encrypted backups immutable.
**81-100**: End-to-end encryption; zero-knowledge architecture; automated key rotation; data residency compliance; destruction audited.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Cloud Posture

**0-20**: No compliance monitoring; public storage; no DLP; resources untagged; no asset inventory.
**21-40**: Basic compliance rules; some resources public accidentally; manual asset inventory; no DLP.
**41-60**: Compliance policies automated; compliance dashboard; asset inventory tagged; DLP for email.
**61-80**: Continuous compliance monitoring; policy violations auto-alert; real-time remediation; periodic compliance audit.
**81-100**: Real-time threat detection; behavioral analytics; auto-remediation for violations; zero-trust enforcement verified.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Auditability

**0-20**: No audit logging; who did what unknown; logs not retained; no incident response capability.
**21-40**: Basic audit logging; logs retained 30d; no alerting; incident response manual and slow.
**41-60**: Comprehensive audit logging; 90d retention; alert on critical events; incident response runbooks.
**61-80**: Immutable audit logs; 1yr retention; correlated logs for investigation; incident response automated.
**81-100**: Real-time forensics; tamper-proof audit trail; automated incident detection + containment; compliance audit-ready.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Do not average unknown or non-applicable dimensions. State evidence coverage, weighting, and why an aggregate is or is not defensible.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)
