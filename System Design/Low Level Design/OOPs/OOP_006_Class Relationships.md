***TAGS***: #lld #systemdesign #oops

- In OOP, class relationships describe how classes interact with each other.

- There are **4 primary class relationships**:

|Relationship|Description|Python Feature|
|---|---|---|
|**Inheritance**|"Is-a" relationship|`class SubClass(BaseClass): ...`|
|**Association**|"Uses-a" relationship|Object of one class is used by another|
|**Aggregation**|"Has-a (but loosely bound)"|A special type of Association|
|**Composition**|"Has-a (strong ownership)"|A special type of Association|

---
### 1.  Inheritance ("is-a")

### ➤ Meaning:
- One class **inherits** properties and methods of another class.
- Represents **generalization/specialization**.
### 🔧 Syntax:

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):  # Dog IS-A Animal
    def bark(self):
        print("Dog barks")

```

### ✅ Usage:

```python
d = Dog()
d.speak()  # Inherited from Animal
d.bark()   # Defined in Dog

```