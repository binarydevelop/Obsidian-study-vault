## Inheritance in OOP

**Inheritance** is an Object-Oriented Programming (OOP) concept where a **child class (subclass)** acquires the **properties and methods** of a **parent class (superclass)**.

In simple terms:  
👉 _“Reuse existing code by building new classes from existing ones.”_

---
## Why Inheritance?
- Promotes **code reusability**
- Reduces redundancy
- Makes code easier to maintain
- Supports hierarchical classification

---

## Basic Syntax

`class Parent:     # parent class code     pass  class Child(Parent):     # child class code     pass`

---

## Example 1: Single Inheritance

`class Animal:     def speak(self):         print("Animal makes a sound")  class Dog(Animal):     def bark(self):         print("Dog barks")`

`d = Dog() d.speak()   # Inherited method d.bark()    # Child's own method`

**Output**

`Animal makes a sound Dog barks`

---

## Example 2: Method Overriding

Child class can **override** parent class methods.

`class Animal:     def speak(self):         print("Animal sound")  class Cat(Animal):     def speak(self):         print("Cat meows")`

`c = Cat() c.speak()`

**Output**

`Cat meows`

---

## Using `super()` Keyword

`super()` is used to call the parent class method or constructor.

`class Animal:     def __init__(self):         print("Animal created")  class Dog(Animal):     def __init__(self):         super().__init__()         print("Dog created")`

**Output**

`Animal created Dog created`

---

## Types of Inheritance in Python

### 1. Single Inheritance

One parent → one child

`class A:     pass  class B(A):     pass`

---

### 2. Multilevel Inheritance

Grandparent → Parent → Child

`class A:     pass  class B(A):     pass  class C(B):     pass`

---

### 3. Multiple Inheritance

One child inherits from **multiple parents**

`class Father:     def skills(self):         print("Driving")  class Mother:     def skills(self):         print("Cooking")  class Child(Father, Mother):     pass`

`c = Child() c.skills()`

✔ Python follows **Method Resolution Order (MRO)**

---

### Method Resolution Order (MRO)

`print(Child.mro())`

Python checks classes **left to right**.

---

### 4. Hierarchical Inheritance

One parent → multiple children

`class Animal:     pass  class Dog(Animal):     pass  class Cat(Animal):     pass`

---

### 5. Hybrid Inheritance

Combination of multiple inheritance types.

---

## `isinstance()` and `issubclass()`

`isinstance(d, Dog)      # True issubclass(Dog, Animal) # True`

---

## Real-World Analogy

- Parent: **Vehicle**
    
- Child: **Car, Bike**
    
- All vehicles have engines, but each works differently
    

---

## Inheritance vs Composition (Quick Note)

|Inheritance|Composition|
|---|---|
|"IS-A" relationship|"HAS-A" relationship|
|Dog IS an Animal|Car HAS an Engine|
|Tight coupling|Loose coupling|

---

## Summary

- Inheritance allows **code reuse**
    
- Child class can:
    
    - Use parent methods
        
    - Override them
        
- Python supports:
    
    - Single
        
    - Multilevel
        
    - Multiple
        
    - Hierarchical
        
    - Hybrid inheritance
        
- `super()` helps access parent members