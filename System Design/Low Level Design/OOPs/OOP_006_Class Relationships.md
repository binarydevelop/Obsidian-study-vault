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
##### Syntax:

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):  # Dog IS-A Animal
    def bark(self):
        print("Dog barks")

```
##### Usage:

```python
d = Dog()
d.speak()  # Inherited from Animal
d.bark()   # Defined in Dog

```
---
### 2. Association ("uses-a")

### ➤ Meaning:
- One class **uses** another class without owning it.
- No lifecycle dependency.
##### Example:

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine  # uses Engine, doesn't own it

    def drive(self):
        self.engine.start()
        print("Car is driving")

```
##### Usage:

```python
e = Engine()
c = Car(e)  # Car uses Engine
c.drive()

```

## 3. Aggregation ("has-a", weak ownership)

### ➤ Meaning:

- A class **has** another class, but it doesn’t control its lifecycle.
- If container is destroyed, contained object **can still exist**.
### Example:

```python
class Department:
    def __init__(self, name):
        self.name = name

class University:
    def __init__(self):
        self.departments = []  # Aggregates departments

    def add_department(self, dept):
        self.departments.append(dept)

```
### Usage:

```python
d1 = Department("Computer Science")
uni = University()
uni.add_department(d1)

print(d1.name)  # d1 exists independently of University

```
---
## 4.Composition ("has-a", strong ownership)

### ➤ Meaning:

- A class **owns** another class.
- If the container is destroyed, the contained object **is also destroyed**.
- Stronger than aggregation.

### Example:

```python
class Brain:
    def think(self):
        print("Thinking...")

class Human:
    def __init__(self):
        self.brain = Brain()  # Composed inside Human

    def act(self):
        self.brain.think()

```

### Usage:

```python
h = Human()
h.act()

```

In this case, the `Brain` object **doesn't exist outside** the `Human` object.

![[Pasted image 20251228105734.png]]