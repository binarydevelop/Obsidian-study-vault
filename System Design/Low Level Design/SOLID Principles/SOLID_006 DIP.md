# 6. Dependency Inversion Principle (DIP)

## Definition

> **High-level modules should not depend on low-level modules.  
> Both should depend on abstractions.**

---
## What DIP Fixes
- Tight coupling
- Rigid architectures
- Difficult testing
---
## DIP Violation

```mermaid
classDiagram
    class OrderService
    class MySQLDatabase

    OrderService --> MySQLDatabase
```

### Problems

- Database change impacts business logic
- Hard to mock for tests
---
## DIP-Compliant Design

```mermaid
classDiagram
    class OrderService

    class Database {
        +save()
    }

    class MySQLDatabase
    class PostgreSQLDatabase

    OrderService --> Database
    MySQLDatabase ..|> Database
    PostgreSQLDatabase ..|> Database

```

---

## Key Insight

DIP often enables:
- Dependency Injection
- Mocking
- Clean Architecture
- Hexagonal Architecture