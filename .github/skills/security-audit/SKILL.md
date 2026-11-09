---
name: security-audit
description: 'Analyze architecture-level security risks, secrets management, authentication/authorization models, and security debt. This is NOT a penetration test—it''s a design-level audit.'
---

# Skill: Security Audit

## Purpose
Analyze architecture-level security risks, secrets management, authentication/authorization models, and security debt. This is NOT a penetration test—it's a design-level audit.

## Inputs
- Source code (authentication logic, authorization checks, secrets handling).
- Configuration files (credentials, API endpoints, feature flags).
- Pipeline definitions (secrets exposure, deployment permissions).
- Infrastructure-as-code (security groups, RBAC roles, encryption settings).
- Dependency manifests (known CVEs, abandoned packages).
- API definitions (exposed endpoints, rate limits, API keys).
- Database schemas (who accesses what, audit logging).
- Access control logs (if available).

## Analysis Areas
- **Authentication**: OAuth2/OIDC flow, SAML, Multi-factor, Session management, Token expiry.
- **Authorization**: RBAC vs ABAC, permission model, role separation, least privilege principle.
- **Secrets Management**: Where are secrets stored? Rotation policy? Audit trail?
- **Data Protection**: Encryption at rest, encryption in transit, PII classification, data minimization.
- **API Security**: Authentication on every endpoint, rate limiting, input validation, CORS.
- **Supply Chain**: Dependency vulnerabilities, transitive risks, software bill of materials (SBOM).
- **Audit & Compliance**: Audit logging, compliance requirements, retention policy.
- **Frontend Security**: XSS prevention, CSRF tokens, secure cookie flags, CSP headers.
- **Backend Security**: Injection attacks, deserialization, SSRF, privilege escalation.

See `checklists/security.md` for comprehensive checklist.

## Security Debt Categories
- **Design Debt**: Monolithic auth across modules, hard to test, hard to rotate.
- **Implementation Debt**: Security checks missing, incomplete validation, timing vulnerabilities.
- **Dependency Debt**: Outdated libraries with known vulnerabilities, unmaintained deps.
- **Operational Debt**: No audit logging, no alerting on suspicious activity, manual credential management.
- **Compliance Debt**: Non-compliant with regulatory requirements (GDPR, HIPAA, PCI-DSS).

## Process
1. **Identify Attack Surface**: What's exposed? APIs, web forms, message queues, databases?
2. **Trace Authentication Flow**: How does a user prove identity? Is it consistent?
3. **Verify Authorization**: Can a user do what they claim to be able to do? Can they access others' data?
4. **Check Secret Hygiene**: Where are credentials? Rotation? Audit?
5. **Assess Data Protection**: PII encrypted? In transit? At rest? Backups?
6. **Scan Dependencies**: Any known vulnerabilities?
7. **Verify Compliance**: Policy violations, audit trail gaps?
8. **Produce Findings** using mandatory format.

See `checklists/security.md` for systematic verification.

## Common Security Anti-Patterns
Reference `patterns/anti-patterns.md`:
- Secrets in code or environment variables hardcoded.
- Passwords logged or exposed in error messages.
- No encryption for sensitive data at rest.
- Authentication bypassed in test/staging (then accidentally deployed to prod).
- No rate limiting on login/password reset (brute force).
- User ID in JWT without verification.
- CORS wildcard allowing any origin.
- Database user with admin privileges for all apps.
- No audit logging of security events.
- SQL injection or command injection vectors.

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** code line, configuration setting, test case showing vulnerability, or audit log gap.
- **Root Cause:** design choice, misunderstanding, oversight, or intentional trade-off.
- **Business Impact:** financial loss (fraud, data breach settlement), customer trust loss, regulatory violation, service downtime.
- **Technical Impact:** data confidentiality/integrity/availability breach, compliance violation, incident response time.
- **Risk:** Critical / High / Medium / Low (OWASP scale: likelihood × impact).
- **Recommendation:** specific fix (e.g., "Implement OAuth2 with RS256 signed tokens, rotate keys quarterly" not "improve authentication").
- **Estimated Effort:** S / M / L / XL including security testing and deployment.
- **Expected Value:** risk eliminated, compliance achieved, incident response time reduced.
- **Priority:** P0 / P1 / P2 / P3 based on exploitability × business impact.

## Remediation Strategies
- **Immediate** (P0): Stop the bleeding. Emergency fixes, access revocation, incident response.
- **Short-term** (P1): Fix critical vulnerabilities, upgrade deprecated auth, enable MFA.
- **Medium-term** (P2): Refactor auth/authz design, migrate to security vault, implement audit logging.
- **Long-term** (P3): Security architecture refresh, supply chain hardening, compliance automation.

## Output
1. **Security Assessment** (`templates/audit-report.md`): Findings by severity, likelihood, and business impact.
2. **Risk Register** (`templates/risk-matrix.md`): Security risks rated by likelihood and business impact. Use CVSS only for vulnerabilities with enough technical detail to score; do not assign CVSS to architectural or organizational risks.
3. **Remediation Roadmap**: Priority order, effort estimates, business impact per fix.
4. **Authentication/Authorization Model**: Diagrams, flow, roles, permissions.
5. **Compliance Gap Analysis**: What's missing for GDPR/HIPAA/PCI-DSS/SOC2.
6. **Security Debt Score** (`scorecards/technical-debt-score.md`): Design, implementation, dependency, operational, compliance categories.
7. **90-Day Action Plan**: Top 3 security moves (highest risk reduction/effort).
