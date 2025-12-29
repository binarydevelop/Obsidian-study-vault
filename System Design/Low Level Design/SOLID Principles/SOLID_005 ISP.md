# 5. Interface Segregation Principle (ISP)
## Definition
> **Clients should not be forced to depend on interfaces they do not use.**
---
## Core Idea
- Prefer **small, role-specific interfaces**
- Avoid **fat interfaces**
---
## ISP Violation
```mermaid
classDiagram
    <<interface>> Worker {
        +work()
        +eat()
        +sleep()
    }

    class Robot
    Robot ..|> Worker
```

### Problem

- Robot does not eat or sleep
    
- Forced to implement meaningless methods
    

---

## ISP-Compliant Design

```mermaid
classDiagram
    <<interface>> Workable
    Workable : +work()

    <<interface>> Eatable
    Eatable : +eat()

    <<interface>> Sleepable
    Sleepable : +sleep()

    class Human
    class Robot

    Human ..|> Workable
    Human ..|> Eatable
    Human ..|> Sleepable

    Robot ..|> Workable
```

---

## Key Insight

ISP is about **client perspective**, not implementation convenience.

---

## ISP Smell

- Interfaces with many unrelated methods
    
- Frequent “empty” method implementations
    

---
