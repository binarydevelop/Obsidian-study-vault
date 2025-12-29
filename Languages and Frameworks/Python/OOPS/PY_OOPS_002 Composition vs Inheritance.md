***Tags***: #Python #lld #oops #systemdesign 

---
# Composition vs Inheritance 

> **Golden Rule (Interview Favorite)**  
> 👉 _“Favor composition over inheritance.”_
---
### (IS-A Relationship)

#### 1. Intuition (Easy Explanation)
Inheritance means:
- A class **is a type of** another class
- Child **inherits behavior + data** from parent
**Real-world analogy**
- Dog **is an** Animal
- Car **is a** Vehicle
---
#### 2. Technical Definition
Inheritance allows a subclass to:
- Reuse parent class code
- Override behavior
- Extend functionality
It creates a **tight coupling** between parent and child.
---
#### 3. Python Inheritance Example

```python
class Vehicle:
    def start(self):
        print("Vehicle started")

class Car(Vehicle):
    def drive(self):
        print("Car is driving")
```

```python
car = Car()
car.start()
car.drive()
```
✔ `Car` automatically gets `start()`

---
#### 4. Method Overriding

```python
class Car(Vehicle):
    def start(self):
        print("Car started with key")
```

---

#### 5. Problems with Inheritance (LLD Reality)

##### ❌ Tight Coupling

- Child depends heavily on parent
    
- Changes in parent can break child
    

##### ❌ Fragile Base Class Problem

- Parent changes → unintended side effects
    

##### ❌ Inflexible Hierarchies

- Cannot change behavior at runtime
    
- Deep inheritance trees are hard to manage
    

---

### 2️ Composition (HAS-A Relationship)

#### 1. Intuition (Easy Explanation)

Composition means:

- A class **has a reference** to another class
    
- Behavior is **delegated**, not inherited
    

**Real-world analogy**

- Car **has an** Engine
    
- Laptop **has a** Battery
    

---

#### 2. Technical Definition

Composition builds behavior by:

- Combining smaller objects
    
- Delegating responsibilities
    
- Allowing runtime flexibility
    

---

#### 3. Python Composition Example

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine: Engine):
        self.engine = engine

    def drive(self):
        self.engine.start()
        print("Car is driving")
```

✔ `Car` uses `Engine`  
✔ No inheritance involved

---

#### 4. Swapping Behavior at Runtime (Big Win)

```python
class ElectricEngine(Engine):
    def start(self):
        print("Electric engine started silently")

car = Car(ElectricEngine())
car.drive()
```

This is **impossible with pure inheritance**.

---

### Inheritance vs Composition (Side-by-Side)

|Aspect|Inheritance|Composition|
|---|---|---|
|Relationship|IS-A|HAS-A|
|Coupling|Tight|Loose|
|Flexibility|Low|High|
|Runtime behavior change|❌|✔|
|Code reuse|Implicit|Explicit|
|Testing|Harder|Easier|
|Preferred in LLD|❌|✔|

---

### 4 Combining with Abstract Classes (Best Practice)

### Composition + Abstraction = Ideal Design

```python
from abc import ABC, abstractmethod

class Engine(ABC):
    @abstractmethod
    def start(self):
        pass
```

```python
class PetrolEngine(Engine):
    def start(self):
        print("Petrol engine started")

class ElectricEngine(Engine):
    def start(self):
        print("Electric engine started")
```

```python
class Car:
    def __init__(self, engine: Engine):
        self.engine = engine

    def drive(self):
        self.engine.start()
        print("Car is driving")
```

✔ Loose coupling  
✔ Easy extension  
✔ SOLID-compliant

---

### When Inheritance is Acceptable (Interview-Safe)

Inheritance is okay **ONLY when**:

- Relationship is truly IS-A
    
- Parent class is stable
    
- No need to change behavior dynamically
    
- Hierarchy is shallow (1–2 levels max)
    

**Good example**

```python
class Rectangle:
    def area(self):
        ...

class Square(Rectangle):
    ...
```

---

### 6️ When Composition is the Right Choice

Use composition when:

- Behavior can vary
    
- Multiple combinations exist
    
- You want to avoid deep hierarchies
    
- You need runtime flexibility
    
- You want better testability
    

---

### 7️⃣ Classic Interview Trap Example

#### ❌ Wrong (Inheritance Abuse)

```python
class Duck:
    def fly(self):
        print("Flying")

class RubberDuck(Duck):
    def fly(self):
        raise Exception("Can't fly")
```

🚩 Design smell

---

#### ✔ Correct (Composition)

```python
class FlyBehavior:
    def fly(self):
        pass

class CanFly(FlyBehavior):
    def fly(self):
        print("Flying")

class CannotFly(FlyBehavior):
    def fly(self):
        print("Cannot fly")
```

```python
class Duck:
    def __init__(self, fly_behavior: FlyBehavior):
        self.fly_behavior = fly_behavior

    def fly(self):
        self.fly_behavior.fly()
```

---

### 8 LLD Interview Language (Use These Phrases)

Say things like:

- “Composition provides loose coupling”
    
- “We can change behavior at runtime”
    
- “This avoids fragile base class issues”
    
- “We depend on abstractions, not concrete classes”
    

---

### 9️ Decision Framework (Memorize This)

Ask yourself:

1. Is this truly an **IS-A** relationship?
    
2. Will behavior change in future?
    
3. Will multiple variants exist?
    
4. Do I want runtime flexibility?
    

If **any answer is yes → Composition**

---

### 10️ How Interviewers Evaluate This Topic

They look for:

- Correct relationship identification
    
- Avoiding inheritance by default
    
- Using abstract classes with composition
    
- Clean, extensible Python code
    

---

## Next Logical Topic (Highly Recommended)

👉 **Polymorphism (runtime vs compile-time in Python)**  
or  
👉 **Encapsulation & access control (Python reality)**

Send the next topic when ready.