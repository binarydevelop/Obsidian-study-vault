## Polymorphism in OOP 

**Polymorphism** means **“many forms”**.  
In Object-Oriented Programming, it allows the **same method name or operation** to behave **differently for different objects**.

In simple words:  
👉 _“One interface, many implementations.”_

---
## Why Polymorphism?
- Improves flexibility and scalability
- Makes code more reusable and clean
- Reduces conditional logic (`if-else`)
- Supports dynamic behavior at runtime
---
## Types of Polymorphism in Python

Python mainly supports:

1. **Compile-time polymorphism (Method overloading – simulated)**
    
2. **Runtime polymorphism (Method overriding)**
    

---

## 1. Method Overriding (Runtime Polymorphism)

A child class provides its **own implementation** of a parent class method.

```python
class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

class Cat(Animal):
    def speak(self):
        print("Cat meows")
```

```python
animals = [Dog(), Cat(), Animal()]

for a in animals:
    a.speak()
```

**Output**

```
Dog barks
Cat meows
Animal makes a sound
```

✔ Same method `speak()`  
✔ Different behavior depending on object type

---

## 2. Method Overloading (Simulated in Python)

Python does **not** support traditional method overloading.  
Instead, it is achieved using **default arguments** or `*args`.

### Using Default Arguments

```python
class Math:
    def add(self, a, b=0, c=0):
        return a + b + c
```

```python
m = Math()
print(m.add(2))
print(m.add(2, 3))
print(m.add(2, 3, 4))
```

---

### Using `*args`

```python
class Math:
    def add(self, *numbers):
        return sum(numbers)
```

---

## 3. Polymorphism with Functions

Same function works with different object types.

```python
def show(obj):
    obj.display()
```

```python
class Laptop:
    def display(self):
        print("Laptop display")

class Mobile:
    def display(self):
        print("Mobile display")
```

```python
show(Laptop())
show(Mobile())
```

✔ This is **Duck Typing**

---

## Duck Typing (Very Important)

“If it looks like a duck and quacks like a duck, it is a duck.”

```python
class Bird:
    def fly(self):
        print("Bird flies")

class Airplane:
    def fly(self):
        print("Airplane flies")
```

```python
def let_it_fly(obj):
    obj.fly()
```

```python
let_it_fly(Bird())
let_it_fly(Airplane())
```

✔ No inheritance required  
✔ Only method name matters

---

## 4. Operator Overloading

Operators behave differently for different types.

```python
print(5 + 3)          # Addition
print("Hi" + "Bye")  # String concatenation
```

Custom operator overloading:

```python
class Point:
    def __init__(self, x):
        self.x = x

    def __add__(self, other):
        return self.x + other.x
```

```python
p1 = Point(10)
p2 = Point(20)
print(p1 + p2)
```

---

## Real-World Analogy

- **Payment** system:
    
    - Credit Card → pay()
        
    - UPI → pay()
        
    - Cash → pay()
        

Same method name, different implementations.

---

## Polymorphism vs Inheritance

|Polymorphism|Inheritance|
|---|---|
|Behavior-based|Relationship-based|
|Same interface|Code reuse|
|Dynamic|Structural|

---

## Summary

- Polymorphism = **same method, different behavior**
    
- Achieved via:
    
    - Method overriding
        
    - Duck typing
        
    - Operator overloading
        
    - Function polymorphism
        
- Key feature of **flexible and scalable OOP design**
    

---

If you want, I can also explain:

- Diamond problem & polymorphism
    
- Real-world project example
    
- Polymorphism interview questions
    
- Polymorphism with abstract classes
    

Just tell me 😊