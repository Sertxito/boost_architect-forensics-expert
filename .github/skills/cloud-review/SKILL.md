---
name: cloud-review
description: 'Assess cloud deployment for security posture, reliability architecture, operational maturity, cost efficiency and well-architected alignment. Works across Azure, AWS, GCP and hybrid environments.'
---

# Skill: Cloud Review

## Purpose
Assess cloud deployment for security posture, reliability architecture, operational maturity, cost efficiency and well-architected alignment. Works across Azure, AWS, GCP and hybrid environments.

## Inputs
- Infrastructure-as-code (Terraform, Bicep, CloudFormation, CDK).
- Container manifests (Docker, Kubernetes YAML, Helm charts).
- Configuration (environment files, CI/CD pipeline definitions).
- Runtime observations (cloud provider metrics, logs, traces).
- Cost reports and usage patterns.
- Network diagrams or topology data.
- Compliance requirements and regulatory constraints.

## Analysis Areas
- **Reliability**: Redundancy, failover, disaster recovery, multi-region strategy.
- **Security**: Identity & access (IAM, RBAC, ABAC), secrets management, network isolation, encryption, compliance.
- **Operability**: Monitoring, alerting, logging, runbook automation, deployment strategies.
- **Performance**: Latency, throughput, cold starts, scaling behavior, caching strategy.
- **Cost**: Resource rightsizing, reserved vs on-demand, waste detection, cost attribution.
- **Compliance**: GDPR, HIPAA, SOC2, PCI-DSS, regulatory alignment.

See `checklists/cloud.md` for comprehensive checklist and `patterns/cloud-smells.md` for common anti-patterns.

## Review Checklist
- [ ] VPC/networking properly segmented (DMZ, internal, management).
- [ ] Identity & secrets: centralized, rotated, never logged, audited.
- [ ] Data at rest encrypted with customer-managed keys where sensitive.
- [ ] Data in transit encrypted (TLS, VPN).
- [ ] High-availability: multi-AZ minimum, auto-recovery configured.
- [ ] Backup & DR: RTO/RPO defined, tested, documented.
- [ ] Monitoring: Key metrics alerting, dashboards, log aggregation.
- [ ] Cost controls: Budgets, Reserved Instances/Savings Plans, Right-sizing recommendations enabled.
- [ ] Compliance scanned: Compliance Manager, AWS Config, Azure Policy checks passing.

## Process
1. **Inventory Cloud Resources**: What's deployed? Compute, database, storage, networking, messaging?
2. **Assess Resilience**: What's the blast radius if each component fails?
3. **Verify Security Baseline**: Identity, secrets, encryption, network boundaries.
4. **Analyze Cost Patterns**: Waste, rightsizing opportunities, commitment discounts.
5. **Check Compliance**: Policy violations, audit trails, encryption standards.
6. **Produce Findings** using mandatory format.
7. **Benchmark against Well-Architected Framework** (AWS) or WAF (Azure).

## Cloud Anti-Patterns
Reference `patterns/cloud-smells.md`:
- **Security**: Secrets in code/logs, overpermissioned IAM, public S3/Blob storage.
- **Reliability**: Single region, no backup, manual failover, no health checks.
- **Cost**: Always-on dev environments, unattached resources, unused databases, over-provisioned VMs.
- **Operability**: No monitoring, manual scaling, no automated incident response, runbooks out-of-date.

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** resource ID, policy output, cost report line, configuration section, or metric threshold breach.
- **Root Cause:** why it's this way (design choice, misconfiguration, oversight, cost optimization).
- **Business Impact:** availability risk, security breach risk, compliance violation, cost waste ($/month).
- **Technical Impact:** MTTR increase, deployment friction, scaling ceiling, debugging difficulty.
- **Risk:** Critical / High / Medium / Low.
- **Recommendation:** specific fix (e.g., "Add multi-AZ to RDS MySQL, enable automated backups to separate region" not "improve reliability").
- **Estimated Effort:** S / M / L / XL including testing/cutover.
- **Expected Value:** RTO/RPO improvement, cost savings $/month, compliance achieved.
- **Priority:** P0 / P1 / P2 / P3 based on availability/security risk or cost.

## Well-Architected Assessment
- **Operational Excellence**: Monitoring, automation, IaC, runbooks.
- **Security**: Least privilege, encryption, audit, identity.
- **Reliability**: Redundancy, failover, disaster recovery, chaos testing.
- **Performance Efficiency**: Rightsizing, caching, CDN, async.
- **Cost Optimization**: Commitment discounts, reserved capacity, waste removal, tagging.

Score 0-100 in `scorecards/cloud-maturity.md` with evidence per pillar.

## Output
1. **Cloud Posture Summary** (`templates/architecture-review.md`): Topology, security zones, redundancy model.
2. **Security Assessment** (`templates/risk-matrix.md`): IAM, secrets, network, compliance violations.
3. **Reliability Roadmap**: HA improvements, DR strategy, backup schedule, failover testing.
4. **Cost Optimization Report**: Waste detected, rightsizing recommendations, savings opportunities ($/month).
5. **Compliance Status**: Pass/fail per regulatory requirement, remediation plan.
6. **Well-Architected Score** (`scorecards/cloud-maturity.md`): 0-100 per pillar with evidence.
7. **90-Day Action Plan**: Top 3 moves (highest impact/effort ratio).
