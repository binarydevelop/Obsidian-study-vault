***Tags***: #Python #lld #oops #systemdesign 
# 1. Classes (Foundation of LLD)
### What is a Class? (Intuition)

A **class** is a **blueprint** that defines:
- **Data** → attributes (state)
- **Behavior** → methods (functions)
An **object** is an instance created from that blueprint.
**Real-world analogy**
- Class → Car design
- Object → A specific car (red Honda, blue Tesla)
---
### Technical Definition

A class bundles:
- **Attributes** (instance variables)
- **Methods** (functions operating on the data)
- **Access control** (public/protected/private — conceptually)
It enables:
- Encapsulation
- Abstraction
- Reusability
- Modularity
---
### Python Class Syntax

```python
class User:
    def __init__(self, user_id: int, name: str):
        self.user_id = user_id
        self.name = name

    def get_display_name(self) -> str:
        return f"User: {self.name}"
```
### Key Python Concepts
- `__init__` → constructor
- `self` → current object reference
- Attributes are **instance-specific**
- Methods operate on instance state
---
### Types of Methods in Python Classes

#### Instance Methods (Most Common)
```python
def method(self):
    pass
```
#### Class Methods
```python
@classmethod
def from_string(cls, data: str):
    return cls(...)
```
#### Static Methods
```python
@staticmethod
def is_valid_id(user_id: int) -> bool:
    return user_id > 0
```
---
### LLD Perspective on Classes
In interviews:
- **One class = one responsibility**
- Classes should be:
    - Cohesive
    - Small
    - Easily testable
- Avoid **god classes**
---
## 2. Interfaces (Conceptual Understanding)

### What is an Interface? (Intuition)
An **interface** defines:
- **What** methods a class must implement
- **Not how** they are implemented
It is a **contract**.

**Analogy**
- Charging port standard (USB-C)
- Device decides internal wiring
---
### Interface Characteristics
- Only method signatures
- No implementation (conceptually)
- Enables **polymorphism**
- Promotes **loose coupling**
---
### Python Does NOT Have Interfaces (Directly)

Unlike Java/C++:
- Python uses **Abstract Base Classes (ABC)**
- Interfaces are **simulated** using abstract classes
So in Python:
> **Interfaces = Abstract Classes with only abstract methods**

---
## 3. Abstract Classes (Python’s Way)

### What is an Abstract Class?

An **abstract class**:
- Cannot be instantiated
- May contain:
    - Abstract methods (must be implemented)
    - Concrete methods (shared logic)
---
### Why Abstract Classes Exist (LLD View)

They:
- Enforce consistent APIs
- Prevent incomplete implementations
- Allow polymorphism
- Enable dependency inversion
---
### Python Abstract Base Classes (ABC)
### Basic Structure
```python
from abc import ABC, abstractmethod

class PaymentProcessor(ABC):

    @abstractmethod
    def pay(self, amount: float) -> None:
        pass
```
#### Key Points

- Inherits from `ABC`
- Uses `@abstractmethod`
    
- Cannot be instantiated
    

❌ This will fail:

```python
PaymentProcessor()  # TypeError
```

---

## 4️⃣ Implementing an Abstract Class

```python
class CreditCardPayment(PaymentProcessor):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} using credit card")
```

```python
processor = CreditCardPayment()
processor.pay(100.0)
```

✔ Works because all abstract methods are implemented

---

## 5️⃣ Abstract Class with Partial Implementation

```python
class Logger(ABC):

    def log(self, message: str):
        formatted = self.format(message)
        self.write(formatted)

    @abstractmethod
    def write(self, message: str):
        pass

    @abstractmethod
    def format(self, message: str) -> str:
        pass
```

Here:

- `log()` is common behavior
    
- Subclasses decide **how to write** and **how to format**
    

---

# 4. Interface vs Abstract Class (Important Interview Comparison)

|Aspect|Interface (Conceptual)|Abstract Class|
|---|---|---|
|Purpose|Contract only|Contract + shared logic|
|Methods|Only abstract|Abstract + concrete|
|State|No|Yes|
|Instantiation|Not allowed|Not allowed|
|Python Support|Via ABC|Via ABC|

---

# 5. When to Use What (LLD Rules)

## Use a **Class** when:

- You have concrete behavior
    
- You are modeling a real entity
    
- No need for enforcement
    

## Use an **Abstract Class** when:

- You want to enforce method implementation
    
- You have shared logic
    
- You expect multiple implementations
    

## Use **Interface-style ABC** when:

- You want maximum flexibility
    
- You want to depend on behavior, not implementation
    

---

# 6. Polymorphism via Abstract Classes

```python
def process_payment(processor: PaymentProcessor):
    processor.pay(500)
```

You can pass:

- `CreditCardPayment`
    
- `UPIPayment`
    
- `WalletPayment`
    

LLD win:

- Code is **open for extension**
    
- Closed for modification
    

---

# 7. Common Mistakes (Interview Red Flags)

❌ Using concrete classes everywhere  
❌ Not enforcing contracts  
❌ Overusing inheritance  
❌ Large abstract classes with many methods  
❌ Mixing responsibilities in one class

---

# 8. Interview Expectations (Very Important)

When explaining:

- Say **“contract”**, **“loose coupling”**, **“polymorphism”**
    
- Mention **why ABC exists in Python**
    
- Explain **why client code depends on abstractions**
    
- Keep examples simple and realistic
    

---

# 9. Mental Model to Remember

- **Class** → “I know exactly how it works”
    
- **Interface** → “I only care what it can do”
    
- **Abstract Class** → “Some parts are fixed, some are customizable”
    

---

## Next Recommended Topics (Phase 1 Flow)

1. Encapsulation & Access Modifiers (Python reality)
    
2. Inheritance vs Composition (VERY IMPORTANT)
    
3. Polymorphism (runtime vs compile-time)
    
4. SOLID principles (starting with SRP & OCP)
    

👉 Send the **next topic** when ready.