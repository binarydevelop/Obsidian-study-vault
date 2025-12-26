***Tags***: #lld #systemdesign 
## Context
Low Level Design (LLD) focuses on *how* a system is implemented at the code level.
It translates high-level architecture into:
- Classes
- Interfaces
- Methods
- Data flows
- Object interactions

LLD answers:
- What objects exist?
- What are their responsibilities?
- How do they interact?
- How can the design change safely?

---

## Definition
Low Level Design is the process of designing:
- Class structure
- Relationships between objects
- Method contracts
- Data encapsulation

with a strong focus on:
- Maintainability
- Extensibility
- Testability

---
## LLD vs HLD

| Aspect   | HLD                 | LLD                   |
| -------- | ------------------- | --------------------- |
| Focus    | System components   | Code structure        |
| Scope    | Services, databases | Classes, methods      |
| Audience | Architects          | Developers            |
| Output   | Diagrams            | Code & class diagrams |

---

## Why LLD Matters for Backend Engineers

- Enables clean APIs
- Prevents tight coupling
- Makes systems testable
- Reduces refactoring cost
- Essential for interviews & real systems

---
## Mental Model

"Each class should have **one reason to change**  
Each object should **own its data**  
Each dependency should be **replaceable**"

---
## First Principle
LLD starts with **behavior**, not classes.

❌ "I need 10 classes"  
✅ "I need these responsibilities fulfilled"

---