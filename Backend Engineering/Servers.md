#backend #architecture #server


> A **server** is a long-running process (or set of processes) that:
- Listens on a **network interface**
- Accepts **requests** over a protocol
- Executes **business logic**
- Interacts with **stateful systems**
- Returns **responses** with latency, reliability, and security guarantees
---
A **server is not hardware** — it’s a **process bound to ports and resources**.

What Actually Happens When a Request Hits a Server ?

```mermaid
sequenceDiagram
    participant C as Client
    participant LB as Load Balancer
    participant OS as Server OS
    participant APP as Application Server
    participant DB as Database

    C->>LB: HTTP Request
    LB->>OS: Forward Request
    OS->>APP: Socket Accept
    APP->>APP: Auth / Validation
    APP->>DB: Query
    DB-->>APP: Result
    APP-->>C: HTTP Response

```