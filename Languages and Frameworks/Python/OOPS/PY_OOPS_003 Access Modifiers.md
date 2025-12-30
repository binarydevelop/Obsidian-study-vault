***Tags***: #Python #lld #oops #systemdesign 
### 1️ What Are Access Modifiers? (Intuition)

Access modifiers control:
- **Who can access what**
- **What is exposed**
- **What is hidden**
They are the **core tool of Encapsulation**.

**Real-world analogy**
- ATM machine
    - Buttons → public
    - Internal circuits → private
    - Service panel → protected
---
## Why Access Control Matters in LLD
In interviews, access modifiers help:
- Prevent misuse of internal logic
- Reduce coupling
- Protect invariants
- Make systems easier to change safely
> Encapsulation = **Hide internal details, expose only what is necessary**

---
### Python Reality (Very Important)
⚠️ **Python does NOT enforce access modifiers** like Java/C++.
Instead, Python uses:
- **Naming conventions**
- **Name mangling**
- **Developer discipline**
This is **expected knowledge** in interviews.

---

## 4 Types of Access Modifiers (Python Style)

### 1 Public (Default)
#### Definition
- Accessible from anywhere
- No leading underscore
```python
class User:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name
```
### LLD Use
- APIs meant for external use
- Stable interfaces
---
### 2 Protected (`_variable`)

### Definition

- Single underscore prefix
- **Convention-based**
- Intended for:
    - Internal use
    - Subclasses
```python
class Account:
    def __init__(self, balance):
        self._balance = balance
```
### Usage in Subclass

```python
class SavingsAccount(Account):
    def apply_interest(self):
        self._balance += self._balance * 0.05
```
### Interview Note
> “Protected members are accessible but discouraged for external use.”
---
### Private (`__variable`) – Name Mangling
### Definition
- Double underscore prefix
- Triggers **name mangling**

```python
class Account:
    def __init__(self):
        self.__pin = 1234
```
Internally becomes:

```python
_Account__pin
```

### Access Attempt

```python
account = Account()
account.__pin     # ❌ AttributeError
```

But:

```python
account._Account__pin  # ⚠️ Works (not truly private)
```

### Key Interview Line

> “Python private is name-mangled, not truly private.”

---

# 5️⃣ Why Python Uses Conventions (Design Philosophy)

Python follows:

- **“We are all consenting adults here”**
    
- Flexibility over strict enforcement
    
- Readability over restriction
    

Interviewers expect you to say this.

---

# 6️⃣ Access Modifiers & Encapsulation (Correct Usage)

### ❌ Bad Design

```python
class Order:
    def __init__(self):
        self.items = []
        self.total_price = 0
```

External code can corrupt state.

---

### ✔ Good Design

```python
class Order:
    def __init__(self):
        self._items = []
        self._total_price = 0

    def add_item(self, price):
        self._items.append(price)
        self._total_price += price

    def get_total_price(self):
        return self._total_price
```

Encapsulation ensures:

- Controlled access
    
- Valid state
    

---

# 7️⃣ Properties (Pythonic Access Control)

### Best Practice Instead of Getters/Setters

```python
class Product:
    def __init__(self, price):
        self._price = price

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("Price cannot be negative")
        self._price = value
```

Usage:

```python
p = Product(100)
p.price = 200   # setter
print(p.price)  # getter
```

✔ Clean  
✔ Controlled  
✔ Pythonic

---

# 8️⃣ Access Modifiers with Inheritance

```python
class Base:
    def __init__(self):
        self._protected = 10
        self.__private = 20
```

```python
class Child(Base):
    def show(self):
        print(self._protected)   # ✔ Allowed
        # print(self.__private)  # ❌ Not accessible
```

---

# 9️⃣ Common Interview Mistakes 🚩

❌ Saying Python enforces access modifiers  
❌ Making everything public  
❌ Using double underscore everywhere  
❌ Java-style getters/setters everywhere  
❌ Accessing mangled names directly

---

# 10️⃣ LLD Interview Expectations (Must Say)

Use these phrases:

- “Encapsulation via conventions”
    
- “Protected for subclass extension”
    
- “Private via name mangling”
    
- “Properties for controlled access”
    

---

# 11️⃣ Decision Table (Memorize This)

|Scenario|Use|
|---|---|
|Public API|public|
|Internal usage|`_protected`|
|Avoid override/collision|`__private`|
|Validation needed|`@property`|

---

# 12️⃣ Final Mental Model

- **Public** → “Anyone can use”
    
- **Protected** → “Use carefully”
    
- **Private** → “Internal only”
    
- **Property** → “Controlled access”
    

---

## Next Best Topics (Phase-1 LLD Flow)

1. **Polymorphism (runtime vs Python reality)**
    
2. **SOLID principles (SRP, OCP)**
    
3. **Dependency Inversion (with Python examples)**
    

👉 Send the **next topic** when ready.