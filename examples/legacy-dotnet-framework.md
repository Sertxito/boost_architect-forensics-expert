# Example: Legacy .NET Framework Platform Audit

## Context
A .NET Framework application with WebForms, WCF services, SQL Server stored procedures and manual IIS deployments.

## Likely Findings
- UI and business logic mixed in WebForms code-behind.
- WCF contracts used as internal integration layer.
- Stored procedures containing business decisions.
- Manual deployments with high rollback risk.

## Recommended Strategy
1. Stabilize build and deployment.
2. Add smoke tests around critical flows.
3. Extract API seams around business capabilities.
4. Use strangler migration for high-value areas.
5. Avoid full rewrite until domain boundaries are known.
