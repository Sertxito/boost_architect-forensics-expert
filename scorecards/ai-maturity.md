# Scorecard: AI Maturity

Score each dimension from 0 to 100 using evidence. Do not guess.

## Grounding

**0-20**: No grounding; LLM answers hallucinate; no knowledge base; citations missing; users trust system zero.
**21-40**: Minimal grounding; KB exists but stale; citation 50% of time; hallucinations frequent; user trust < 30%.
**41-60**: RAG implemented; KB updated monthly; 70% citation rate; hallucinations < 20%; user trust 50-70%.
**61-80**: RAG + reranking; KB updated weekly; 90%+ citation; hallucinations < 5%; source attribution clear; user trust 80%+.
**81-100**: Advanced RAG (chunking, reranking, dense); KB real-time; 99% cited; hallucinations < 1%; source traceability complete.

- Score: /100
- Evidence: (example: "RAG with semantic + BM25; KB 50k docs updated daily; citation rate 92%; hallucination rate 3.2%")
- Risk:
- Recommendation:

## Evaluation

**0-20**: No evaluation; results unknown quality; user feedback only; no metrics; system blind.
**21-40**: Manual spot-check; quarterly evaluation; limited metrics (accuracy only); blind to failure modes.
**41-60**: Continuous evaluation; monthly scored benchmark; multiple metrics (accuracy, latency, cost); 70% passing tests.
**61-80**: Automated evaluation pipeline; weekly benchmarks; comprehensive metrics; A/B testing; 85%+ test passing.
**81-100**: Real-time evaluation; user feedback loop; behavioral analysis; SLO-driven testing; ground truth curated; continuous optimization.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Prompt Safety

**0-20**: No safety policy; jailbreak possible; toxicity unfiltered; no refusal policy; unsafe outputs shipped.
**21-40**: Basic system prompt; some jailbreak resistance; toxicity filter absent; user abuse possible; safety reactive.
**41-60**: Safety-conscious prompts; jailbreak attempts logged; toxicity classifier in place; refusal policy documented; safety proactive.
**61-80**: Multi-layer safety (prompt + LLM + classifier + human review); jailbreak resistance tested; refusal SLA; safety metrics tracked.
**81-100**: Behavioral safety; adversarial testing; continuous jailbreak discovery; automated refusal; zero unsafe outputs to users.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Tool Governance

**0-20**: No tool policies; 100+ tools; tool definitions unclear; error handling missing; tools call anything.
**21-40**: Tool list exists but uncontrolled; definitions poor; some error handling; tool misuse possible; 20+ unused tools.
**41-60**: Tool registry maintained; schemas documented; error handling per tool; tool audit trail; tool ROI tracked.
**61-80**: Tool versioning; deprecation policy; security review per tool; tool SLA enforced; unused tools auto-retired.
**81-100**: Tool composition verified; zero-trust tool calls; automated tool discovery; continuous tool security audit; tool observability per call.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Memory Governance

**0-20**: No memory design; agent context grows unbounded; token explosion; memory conflicts; user data leaked between sessions.
**21-40**: Short-term memory only; context window management missing; memory collisions possible; no privacy controls.
**41-60**: Short + long-term memory; context window managed; memory SLA enforced; privacy controls documented; memory refresh weekly.
**61-80**: Episodic + semantic + procedural memory; automatic pruning; memory SLA enforced; privacy by design; user consent explicit.
**81-100**: Hierarchical memory; autonomous memory optimization; zero data leakage; memory encryption; user deletion on request < 24h.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Cost Control

**0-20**: No token tracking; spend unknown; runaway costs; no rate limits; model choice random.
**21-40**: Token counting exists; monthly surprises; basic rate limiting; model choice inconsistent; cost optimization missing.
**41-60**: Token tracking per request; cost budget enforced; rate limiting + throttle; model routing by cost; 10% waste identified.
**61-80**: Real-time cost tracking; token routing by SLA; batch processing for non-real-time; cost < $0.10 per user/day.
**81-100**: Predictive cost management; dynamic model selection; cost + quality SLO; caching strategy optimized; cost per output token < $0.001.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Observability

**0-20**: No observability; outputs unknown quality; failure modes hidden; on-call incident driven.
**21-40**: Basic logging; latency tracked; error rate unknown; debugging slow; incident postmortems rare.
**41-60**: Metrics collected (accuracy, latency, cost); dashboard exists; errors categorized; latency SLA 95th percentile.
**61-80**: Comprehensive logging; distributed tracing; error analysis automated; latency SLA tracked; cost per component visible.
**81-100**: Real-time observability; anomaly detection; root cause automated; predictive alerting; cost + quality correlation visible.

- Score: /100
- Evidence:
- Risk:
- Recommendation:

## Overall Score

Average is allowed only when all dimensions have evidence. Otherwise mark confidence as low.

**Confidence:** High / Medium / Low (do you have evidence for all dimensions?)
