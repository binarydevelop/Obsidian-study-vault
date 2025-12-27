***Tags***: #lld #systemdesign #oops 

**Abstraction** is an Object-Oriented Programming (OOP) concept that focuses on **hiding implementation details** and **showing only what is essential** to the user.  
It answers the question: **“What an object does” rather than “How it does it.”**

In Python, abstraction is mainly achieved using:
1. **Abstract Base Classes (ABCs)**
2. **Abstract methods**
---
## Why Abstraction?
- Reduces complexity
- Improves code readability and maintainability
- Enforces a consistent interface for subclasses
- Helps in large-scale application design
---
## Abstraction in Python using `abc` module
Python provides the `abc` (Abstract Base Class) module to implement abstraction.
### Key Components
- `ABC` → Base class for defining abstract classes
- `@abstractmethod` → Decorator to define abstract methods
---
## Example 1: Basic Abstraction

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):

    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass
```

🔹 `Vehicle` is an **abstract class**  
🔹 You **cannot create an object** of `Vehicle`  
🔹 Any subclass **must implement** all abstract methods

---
## Example 2: Implementing the Abstract Class

```python
class Car(Vehicle):

    def start(self):
        print("Car engine started")

    def stop(self):
        print("Car engine stopped")


class Bike(Vehicle):

    def start(self):
        print("Bike engine started")

    def stop(self):
        print("Bike engine stopped")
```
---
## Using the Classes

```python
car = Car()
car.start()
car.stop()

bike = Bike()
bike.start()
bike.stop()
```

**Output**

```
Car engine started
Car engine stopped
Bike engine started
Bike engine stopped
```

---

## What Happens If a Method Is Not Implemented?

```python
class Truck(Vehicle):
    def start(self):
        print("Truck started")
```

❌ This will raise an error:

```
TypeError: Can't instantiate abstract class Truck with abstract method stop
```

➡️ Python **forces abstraction strictly**.

---
## Abstract Class with Concrete Methods

Abstract classes can also have **normal methods**.

```python
class Shape(ABC):

    @abstractmethod
    def area(self):
        pass

    def describe(self):
        print("This is a shape")
```

```python
class Rectangle(Shape):

    def area(self):
        return 10 * 5
```

---

## Real-World Analogy

Think of a **TV remote**:
- You know what buttons do (volume, power)
- You don’t know the internal electronics
That’s **abstraction**.
---
## Summary

|Feature|Description|
|---|---|
|Abstraction|Hides internal details|
|Module used|`abc`|
|Abstract class|Inherits from `ABC`|
|Abstract method|Decorated with `@abstractmethod`|
|Object creation|Not allowed for abstract classes|

---