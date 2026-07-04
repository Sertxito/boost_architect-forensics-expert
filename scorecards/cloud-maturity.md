# Scorecard: Cloud Maturity

Score each dimension from 0 to 100 using evidence. Do not guess.

## Identity and Access

**0-20**: No IAM policy; root credentials shared; no MFA; service accounts with admin permissions everywhere.
**21-40**: Basic IAM roles assigned but overpermissioned; MFA optional; no audit logging; credentials stored in code.
**41-60**: RBAC enforced; MFA on human accounts; audit logging exists but not monitored; service principals lack minimal permissions.
**61-80**: Least privilege RBAC; MFA mandatory; audit logging + alerting on privilege escalation; role review quarterly.
**81-100**: Workload Identity/Pod Identity; conditional access policies; real-time threat detection; zero standing privileges.

- Score: /100
- Evidence: (example: "RBAC audit shows 60% of roles overpermissioned; MFA enabled for 95% of users; audit logs in Log Analytics with retention 90d")
- Risk:
- Recommendation:

## Network Security

**0-20**: No VPC/NSG; resources on public internet; no firewall; all ports open.
**21-40**: VPC exists but poorly segmented; NSGs incomplete; no DDoS protection; no WAF.
**41-60**: Multi-tier VPC (DMZ, app, database); NSGs applied but with overpermissive rules; WAF on external APIs.
**61-80**: Proper segmentation; NSGs strictly enforce least privilege; WAF + DDoS protection; private endpoints for sensitive services.
**81-100**: Zero-trust network; network policies + runtime threat detection; private DNS; encrypted inter-service comms.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Reliability

**0-20**: Single region, single zone; no backup; manual failover; RPO > 24h; no health checks.
**21-40**: Single region but multi-zone; backup exists but untested; no automated failover; RTO > 4h.
**41-60**: Multi-AZ deployment; tested backups; automated failover for some components; RTO < 2h; RPO < 1h.
**61-80**: Multi-region active-active for critical; geo-redundant backups; tested DR; RTO < 15m; RPO < 15m; chaos testing.
**81-100**: Multi-region + multi-cloud fallback; sub-minute failover; continuous disaster recovery verification; zero data loss scenarios tested.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Observability

**0-20**: No monitoring; logs not collected; no dashboards; alerts manual.
**21-40**: Basic metrics collected; logs in storage; no correlation; slow incident detection.
**41-60**: Metrics + logs aggregated; dashboards for main services; alert on thresholds; SLA defined but not tracked.
**61-80**: Comprehensive APM; distributed tracing; correlated logs + metrics; SLO alerts; runbooks linked to alerts.
**81-100**: Real-time anomaly detection; AIOps; trace-driven insights; SLI/SLO automation; cost + performance correlation.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Cost Management

**0-20**: No cost tracking; bills surprise; resources undeleteted; no quotas.
**21-40**: Cost reports available; no optimization; Reserved Instances < 10% adoption; unattached resources exist.
**41-60**: Cost alerts enabled; 40%+ Reserved Instances; cleanup process; chargeback by team.
**61-80**: 60%+ Reserved Instances or Savings Plans; automated rightsizing; cost allocation tags; monthly review.
**81-100**: Dynamic pricing model; AI-driven recommendations implemented; 70%+ commitment discount; cost vs SLA dashboard.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Automation

**0-20**: Infrastructure manual; deployments manual; no CI/CD; change management email-based.
**21-40**: Basic IaC (Terraform/Bicep) but manual deploy; CI/CD for code but not infra; limited runbooks.
**41-60**: IaC for most resources; automated deployments; GitOps for config; basic runbooks; approval gates.
**61-80**: Full IaC + GitOps; automated deployments with approval; self-healing automation; runbooks integrated with alerting.
**81-100**: Infrastructure automation + AIOps; autonomous remediation; automatic scaling + policy drift detection + enforcement.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Disaster Recovery

**0-20**: No DR plan; no tested backups; RTO undefined; recovery manual and untested.
**21-40**: DR plan exists; backups tested < annually; RTO > 8h; recovery manual and documented poorly.
**41-60**: DR plan + annual test; RTO 2-8h; backup + failover for some components; recovery runbooks.
**61-80**: Quarterly DR tests; RTO < 2h; automated failover; backup + restore validated monthly; failover SLA tracked.
**81-100**: Continuous DR verification (synthetic tests); sub-hour RTO; automatic regional failover; backup immutability enforced.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Average is allowed only when all dimensions have evidence. Otherwise mark confidence as low.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)
