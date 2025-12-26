***Tags***: #lld #systemdesign 

## Context
Classes and objects are the *core building blocks* of Low Level Design.
Poor understanding here leads to:
- God objects
- Anemic models
- Tight coupling
- Unmaintainable code

LLD is not about creating many classes — it’s about creating the *right* ones.

---
## Definitions

### Class
A **class** is a blueprint that defines:
- What data an object owns (state)
- What behavior it exposes (methods)
- What invariants it maintains
### Object
An **object** is a runtime instance of a class with:
- Identity
- State
- Behavior

---

## Mental Model

> A **class models a responsibility**,  
> an **object performs that responsibility**.

❌ Class = database table  
❌ Class = JSON response  
✅ Class = real-world or logical entity with behavior

---

## Basic Python Example

```python
class Order:
    def __init__(self, order_id: str, amount: float):
        self.order_id = order_id
        self.amount = amount

    def is_high_value(self) -> bool:
        return self.amount > 10_000
        ```

### Observations

- `Order` **owns** `order_id` and `amount`
- Logic (`is_high_value`) lives _with_ the data
- No external function decides order behavior