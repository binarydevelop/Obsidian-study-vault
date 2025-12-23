---
id: 20251223-software-architecture
tags:
  - backend
  - architecture
  - systemdesign
created: 2025-12-23
---

# Software Architecture

## Why this matters
Software architecture determines how well a system can **scale, evolve, remain reliable, and be understood over time**. For backend engineers, architectural decisions often matter more than code-level optimizations because they are expensive (or impossible) to change later.

## Core idea
**Software architecture is the set of fundamental structural decisions** about a system:
- How responsibilities are divided
- How components communicate
- Where data and state live
- What constraints guide evolution

Architecture is less about *frameworks* and more about **trade-offs under constraints**.

---

## Detailed technical explanation

### What architecture actually defines

At its core, architecture answers these questions:

- **Decomposition**: How is the system split into components?
- **Communication**: How do components interact?
- **Data ownership**: Who owns which data?
- **State management**: Where does state live?
- **Failure boundaries**: What fails independently?
- **Change boundaries**: What can change without breaking the system?

These decisions shape **non-functional properties** far more than business logic does.

---

### Architectural building blocks

#### Components
- Independently deployable or logical units
- Examples: services, modules, workers, databases

#### Connectors
- Mechanisms of interaction
- Examples: HTTP, gRPC, message queues, shared memory

#### Constraints
- Technology choices
- Organizational structure
- Regulatory or latency requirements

---

### Architecture vs Design

| Aspect | Architecture | Design |
|------|-------------|--------|
| Scope | System-wide | Component-level |
| Longevity | Long-term | Evolves frequently |
| Focus | Structure & boundaries | Algorithms & logic |
| Cost of change | Very high | Relatively low |

Architecture **enables or limits** design choices.

---

## Diagram

### High-level architectural view

```mermaid
flowchart LR
    Client --> API[API Layer]
    API --> ServiceA[Core Service]
    API --> ServiceB[Aux Service]
    ServiceA --> DB1[(Primary DB)]
    ServiceB --> Cache[(Cache)]
    ServiceA --> MQ[(Message Queue)]
