![[Pasted image 20251229165416.png]]
## Big Picture First

UML arrows answer **one core question**:
> **“How strongly does one class depend on another?”**

The **stronger the relationship**, the **heavier / more solid the arrow**.

---
# 1️⃣ Association (`-->`)

### Arrow

```
A --> B
```

### Meaning (Very Simple)

👉 **“A uses B”**

- A knows about B
    
- A calls methods on B
    
- B does NOT know about A
    

---

### Why this arrow?

- Solid line = **ongoing relationship**
    
- Arrow direction = **who knows whom**
    

---

### Code intuition

```python
class Engine:
    def start(self):
        pass

class Car:
    def __init__(self, engine):
        self.engine = engine
```

Car **has a reference** to Engine → uses it → association.

---

### When to use

- Most common arrow
    
- Default choice when unsure
    
- “Uses” relationship
    

---

# 2️⃣ Dependency (`..>`)

### Arrow

```
A ..> B
```

### Meaning

👉 **“A temporarily needs B”**

- Very weak relationship
    
- Used only inside a method
    
- Not stored as a class field
    

---

### Why dashed line?

- Dashed = **light / temporary**
    
- No long-term ownership or knowledge
    

---

### Code intuition

```python
class Printer:
    def print_doc(self):
        pass

class Report:
    def generate(self, printer):
        printer.print_doc()
```

Printer is **only a parameter**, not stored → dependency.

---

### When to use

- Method arguments
    
- Utility usage
    
- Helper objects
    

---

# 3️⃣ Inheritance / Generalization (`--|>`)

### Arrow

```
Child --|> Parent
```

### Meaning

👉 **“Child is a type of Parent”**

This is the **IS-A** relationship.

---

### Why triangle arrow?

- Triangle points to **more general concept**
    
- Parent is more abstract than child
    

---

### Code intuition

```python
class Animal:
    pass

class Dog(Animal):
    pass
```

Dog **is an** Animal.

---

### When to use

- True “is-a” relationship
    
- Shared behavior + identity
    

❌ Don’t use just to reuse code

---

# 4️⃣ Interface Realization (`..|>`)

### Arrow

```
Class ..|> Interface
```

### Meaning

👉 **“I promise to follow your rules”**

- Interface defines **what**
    
- Class defines **how**
    

---

### Why dashed + triangle?

- Dashed = no code inheritance
    
- Triangle = contract / generalization
    

---

### Code intuition

```python
from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def pay(self):
        pass

class CardPayment(PaymentMethod):
    def pay(self):
        pass
```

CardPayment **implements** PaymentMethod.

---

### When to use

- Abstractions
    
- Polymorphism
    
- Clean architecture
    

---

# 5️⃣ Aggregation (`o--`)

### Arrow

```
Whole o-- Part
```

### Meaning

👉 **“Whole has Part (but Part can live alone)”**

- Weak ownership
    
- Part exists independently
    

---

### Why hollow diamond?

- Hollow = **non-owning**
    
- Life cycles are independent
    

---

### Code intuition

```python
class Player:
    pass

class Team:
    def __init__(self, players):
        self.players = players
```

Players can move between teams.

---

### When to use

- Collections
    
- Shared objects
    
- External ownership
    

---

# 6️⃣ Composition (`*--`)

### Arrow

```
Whole *-- Part
```

### Meaning

👉 **“Whole owns Part completely”**

- Strong ownership
    
- Part cannot exist without whole
    

---

### Why filled diamond?

- Filled = **strong ownership**
    
- Life cycle is tied
    

---

### Code intuition

```python
class Heart:
    pass

class Human:
    def __init__(self):
        self.heart = Heart()
```

Heart is created inside Human → destroyed with it.

---

### When to use

- True ownership
    
- Life-cycle dependency
    

---

# 🔁 Quick Comparison Table

|Arrow|Name|Meaning|
|---|---|---|
|`-->`|Association|I use you|
|`..>`|Dependency|I temporarily need you|
|`--|>`|Inheritance|
|`..|>`|Interface Realization|
|`o--`|Aggregation|I have you (weak)|
|`*--`|Composition|I own you|

---

# 🧠 Golden Rules to Remember

1. **Arrow points to what is being depended on**
    
2. **Solid line = stronger relationship**
    
3. **Dashed line = weaker / temporary**
    
4. **Diamond = ownership**
    
5. **Triangle = abstraction / generalization**
    

---

## Final Mental Shortcut (Very Important)

> If you’re confused, ask:
> - Does it **own** it? → composition / aggregation
> - Does it **use** it? → association / dependency
> - Is it a **type of** it? → inheritance
>     
> - Does it **promise behavior**? → interface
>     

---

If you want, next I can:

- Give **practice questions** (“Which arrow is correct?”)
    
- Show **wrong UML arrows and why**
    
- Map **real Python code → UML arrows**
    
- Create a **1-page UML arrow cheat sheet**
    

Just tell me 🙂