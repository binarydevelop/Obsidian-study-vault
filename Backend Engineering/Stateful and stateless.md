---
id: 20251223-stateful-vs-stateless
tags: [backend, architecture, systems, zettel]
created: 2025-12-23
---

# Stateful and Stateless Architecture

## Why this matters
The choice between stateful and stateless architecture directly impacts **scalability**, **fault tolerance**, **load balancing**, and **operational complexity** of backend systems. Many real-world outages and scaling failures stem from misunderstanding where state lives and how it is managed.

## Core idea
- **Stateful architecture**: The server **retains client-specific state** between requests.
- **Stateless architecture**: Each request is **self-contained**; the server does not rely on stored client state.

The distinction is not about *whether state exists*, but **where state is stored and who owns it**.

---

## Detailed technical explanation

### Stateful Architecture

In a stateful system:
- The server stores session or application state in memory or local storage.
- Future requests from the same client **depend on that stored state**.
- Requests are **not independently processable**.

Examples of stored state:
- User session data
- Authentication context
- In-memory caches tied to a client
- Open connections or cursors

#### Characteristics
- Client must consistently communicate with the **same server instance**
- Failures can cause **state loss**
- Horizontal scaling requires **state replication or partitioning**

#### Typical implementations
- In-memory sessions
- Stateful TCP connections
- Server-side shopping carts

---

### Stateless Architecture

In a stateless system:
- The server **does not retain client state** between requests.
- Each request contains all information required for processing.
- Any server instance can handle any request.

State is externalized to:
- Databases
- Distributed caches
- Client (tokens, cookies)

#### Characteristics
- Requests are **idempotent-friendly**
- Easy horizontal scaling
- Failure of a node does **not break client continuity**

#### Typical implementations
- RESTful APIs
- JWT-based authentication
- Serverless functions

---

## Diagram

### Request handling comparison

```mermaid
flowchart LR
    subgraph Stateful
        C1[Client] --> S1[Server A]
        C1 --> S1
        S1 --> M1[(In-Memory State)]
    end

    subgraph Stateless
        C2[Client] --> S2[Server A]
        C2 --> S3[Server B]
        S2 --> DB[(External State Store)]
        S3 --> DB
    end
