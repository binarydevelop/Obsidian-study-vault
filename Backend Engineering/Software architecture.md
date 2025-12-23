

This diagram shows:

- Clear responsibility separation
    
- Explicit communication paths
    
- Independent data stores
    

---

## Architectural styles (not patterns)

Architectural styles are **constraints**, not templates.

- Monolithic
    
- Layered
    
- Event-driven
    
- Microservices
    
- Serverless
    

A system usually combines **multiple styles**, not one pure form.

---

## Quality attributes driven by architecture

Architecture primarily governs:

- Scalability
    
- Availability
    
- Consistency
    
- Latency
    
- Security
    
- Observability
    
- Maintainability
    

Example:

> Choosing synchronous RPC improves simplicity but increases coupling and tail latency.

---

## Practical implications for backend engineers

- APIs define **architectural boundaries**
    
- Database schemas encode **ownership and coupling**
    
- Deployment topology is an architectural concern
    
- Logging, metrics, and tracing must be architected, not added later
    
- Poor architecture amplifies team communication problems
    

---

## Common pitfalls

- Confusing frameworks with architecture
    
- Over-architecting for hypothetical scale
    
- Ignoring failure modes
    
- Shared databases across services
    
- Letting organizational structure accidentally define architecture
    
- Treating architecture as a one-time decision
    

---

## Related notes

- [[Monolithic Architecture]]
    
- [[Microservices Architecture]]
    
- [[Event-Driven Architecture]]
    
- [[Stateful and Stateless Architecture]]
    
- [[System Design Trade-offs]]
    
- [[Non-Functional Requirements]]
    

```

If you want, next we can drill into:
- **Architectural styles vs patterns**
- **How architecture evolves over time**
- **Architecture decision records (ADRs)**
- **Real-world architecture trade-offs (monolith → microservices)**
```