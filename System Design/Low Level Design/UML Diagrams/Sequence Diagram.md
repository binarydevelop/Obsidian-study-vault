***Tags***: #lld #uml #oops #diagrams 
## What Is a Sequence Diagram?
A **sequence diagram** shows:
- **Who** is involved (objects / services)
- **Who talks to whom**
- **In what order**
- **Over time**
## Purpose
Sequence diagrams are used to:
- Describe a **single use case scenario**
- Visualize **object collaboration**
- Understand **control flow**
- Clarify **responsibilities**
---
##### Reference
![[Pasted image 20251228161158.png]]

---


##  Lifelines (Participants)

```mermaid
sequenceDiagram
    participant Actor
    participant System
    participant Database

```

**Represents:** object / actor / external system  
UML Meaning
- Rectangle = instance name
- Dashed vertical line = lifeline

---
## Synchronous Message (Call)
![[Synchronous calls.png]]


- Caller **waits** until the operation completes
#### Arrow Explanation
- `->>` = synchronous call
- Solid line
- Filled arrowhead
---

## Reply (Return Message)
![[response.png]]

**Meaning:** return of control or data  
**Arrow:** dashed line

---

#### Activation (Execution Specification)
![[activation.png]]


**Shows:** when an instance is actively executing  
**Also called:** focus of control

---

#### Self Message

```mermaid
sequenceDiagram
    System->>System: validate()
```

**Meaning:** internal processing within same instance

---

#### Interaction Chain (Multiple Lifelines)

```mermaid
sequenceDiagram
    participant A
    participant B
    participant C

    A->>B: call()
    B->>C: delegate()
    C-->>B: result
    B-->>A: response
```

**Shows:** collaboration & responsibility flow

---

#### `alt` Fragment (If–Else)

![[alt.png]]

**Rule:** only one path executes  
**Guards:** logical conditions

---

#### `opt` Fragment (Optional)

```mermaid
sequenceDiagram
    opt Optional Behavior
        System->>Database: save()
    end
```

**Equivalent to:** single conditional path

---

#### `loop` Fragment (Repetition)

```mermaid
sequenceDiagram
    loop Repeat Until Done
        System->>Service: attempt()
    end
```

**Used for:** retries, iterations, polling

---

#### `par` Fragment (Parallel)

```mermaid
sequenceDiagram
    par Task A
        System->>ServiceA: execute()
    and Task B
        System->>ServiceB: execute()
    end
```

**Meaning:** concurrent interactions

---

#### Object Creation

```mermaid
sequenceDiagram
    Controller->>Order: create
```

**Rule:** lifeline starts at creation point

---

#### Object Destruction

```mermaid
sequenceDiagram
    Order-->>X: destroy
```

**Meaning:** instance termination  
**Notation:** ❌ at lifeline end

---

#### Notes (Documentation)

```mermaid
sequenceDiagram
    Note right of System: Business rule enforced here
```

**Purpose:** clarify rules, assumptions, constraints

