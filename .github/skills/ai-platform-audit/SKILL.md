---
name: ai-platform-audit
description: 'Audit AI, RAG, MCP and agentic systems for architectural soundness, grounding quality, context window efficiency, tool governance, memory design, latency, cost and operational readiness.'
---

# Skill: AI Platform Audit

## Purpose
Audit AI, RAG, MCP and agentic systems for architectural soundness, grounding quality, context window efficiency, tool governance, memory design, latency, cost and operational readiness.

## Inputs
- System prompts, few-shot examples, RAG prompts.
- Retrieval configuration (embedding model, chunk size, reranker).
- Tool definitions (MCP tools, function calling schemas, OpenAPI specs).
- Agent orchestration logic (routing, planning, memory management).
- Knowledge base structure (vector DB schema, ingestion pipeline).
- Model selection (model size, quantization, context length).
- Cost tracking and token metrics.
- Observability logs (latency, error rates, cache hit rates, cost per request).

## Analysis Areas
- **RAG Architecture**: Ingestion pipeline (crawling, chunking, deduplication), embedding model choice, retrieval strategy (dense/hybrid/BM25), reranking, prompt grounding.
- **MCP Tool Design**: Tool definitions (schema clarity, error handling), security (who can call what), versioning, deprecation strategy.
- **Agent Orchestration**: Planning strategy (CoT, tree-of-thought, etc.), routing logic (when to call which tool), memory (short-term, long-term, episodic), context window management.
- **Prompting Strategy**: System prompt clarity, few-shot quality, chain-of-thought examples, jailbreak resistance.
- **Knowledge Governance**: Who can update KB? Staleness thresholds? Source attribution? Citation accuracy?
- **Cost Control**: Token tracking per request, model routing (fast vs accurate), caching strategy, batch processing.
- **Safety & Alignment**: Hallucination risk, toxicity controls, refusal policy, content moderation.
- **Observability**: Metrics per component (retrieval latency, tool success rate, cost per request, user satisfaction).

See `checklists/ai-platform.md` for comprehensive verification and `examples/rag-platform-audit.md` for audit report example.

## RAG Pipeline Checklist
- [ ] Embedding model: Current, used across all knowledge? Versioning strategy?
- [ ] Chunking: Size, overlap, strategy (sliding window, semantic, hierarchical)?
- [ ] Indexing: Vector DB (Pinecone, Weaviate, Chroma, Milvus, pgvector)? Backup strategy?
- [ ] Retrieval: How many top-K docs? Similarity threshold? Reranking?
- [ ] Grounding: Is context cited? Can user trace LLM answer to source?
- [ ] Knowledge update: How often? QA on new content? Change detection?
- [ ] Staleness: Is old content removed or marked deprecated?

## MCP Tool Governance
- [ ] Tool definitions versioned and backward-compatible?
- [ ] Error handling: All edge cases modeled?
- [ ] Security: Only authorized agents/users call this?
- [ ] Performance: Timeout, rate limit, circuit breaker?
- [ ] Testing: Unit tests, integration tests, property-based tests?
- [ ] Documentation: Clear success/error semantics?

## Process
1. **Assess RAG Architecture**: Embedding, chunking, retrieval, reranking choices.
2. **Evaluate Grounding Quality**: Does output cite sources? Accuracy of citations?
3. **Audit Tool Governance**: Definitions, error handling, security, deprecation.
4. **Analyze Agent Orchestration**: Planning strategy, routing, memory, context management.
5. **Quantify Cost**: Token count per request, model routing cost, caching effectiveness.
6. **Measure Latency**: End-to-end, per component (retrieval, planning, tool calls).
7. **Check Safety**: Hallucination rate, toxicity, refusal policy effectiveness.
8. **Produce Findings** using mandatory format.

See `patterns/ai-smells.md` for anti-patterns.

## AI Platform Anti-Patterns
Reference `patterns/ai-smells.md`:
- **RAG Fails**: No deduplication → duplicate answers. Wrong chunk size → context fragmentation. No reranking → noise retrieval. Stale KB → outdated answers.
- **Tool Chaos**: Hundreds of tools → agent paralysis. Tool definitions unclear → tool misuse. No error handling → cascading failures.
- **Agent Issues**: No memory → repetition. Unbounded context → token waste. No timeout → latency spike. Infinite loop → hung agent.
- **Prompting**: System prompt too vague → inconsistent behavior. No examples → poor output. Jailbreak-susceptible → safety breach.
- **Cost**: No token tracking → runaway spend. Model too large for task → waste. No batching → request amplification.
- **Observability**: Silent failures → outages. No latency tracking → slow discovery. No cost breakdown → budget surprise.

## Mandatory Finding Format
Every finding MUST include:

- **Evidence:** prompt log showing hallucination, tool definition with unclear schema, retrieval returning irrelevant docs, cost report showing spike, latency metric crossing threshold.
- **Root Cause:** design choice (embedding too small, chunk size too large), configuration (reranker missing), operational (KB not updated), or workload surge.
- **Business Impact:** user trust loss (hallucinations), cost increase, latency SLA breach, safety incident.
- **Technical Impact:** model capability limitation, tool governance gap, knowledge staleness, agent planning failure.
- **Risk:** Critical / High / Medium / Low.
- **Recommendation:** specific fix (e.g., "Switch embedding to text-embedding-3-large, chunk at 512 tokens with 128 overlap, add reranker" not "improve RAG").
- **Estimated Effort:** S / M / L / XL.
- **Expected Value:** hallucination rate ↓ by X%, latency ↓ by Y ms, cost ↓ Z tokens/request, user satisfaction ↑.
- **Priority:** P0 / P1 / P2 / P3.

## Output
1. **RAG Assessment** (`templates/architecture-review.md`): Embedding, chunk strategy, retrieval, reranking, knowledge update.
2. **Grounding Report**: Citation accuracy, source attribution, hallucination rate.
3. **Tool Governance Report**: Definitions, error handling, security, versioning.
4. **Agent Orchestration Review**: Planning strategy, routing, memory, context management.
5. **Cost & Latency Analysis**: Token breakdown per component, cost per request, latency per component.
6. **Safety Assessment**: Hallucination risk, toxicity, jailbreak resistance, refusal policy effectiveness.
7. **AI Maturity Score** (`scorecards/ai-maturity.md`): 0-100 per dimension (RAG, tools, agents, prompting, governance, observability, safety).
8. **90-Day Roadmap**: Top 3 AI platform moves (highest impact on accuracy/cost/safety/speed).
