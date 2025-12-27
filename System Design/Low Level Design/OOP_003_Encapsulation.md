## Encapsulation in OOP
**Encapsulation** is an Object-Oriented Programming (OOP) principle that **bundles data (variables) and methods (functions) together** and **restricts direct access to the data** from outside the class.

In simple words:  
👉 _“Protect the data and control how it is accessed or modified.”_

---

## Why Encapsulation?

- Prevents accidental modification of data
    
- Improves security
    
- Makes code easier to maintain
    
- Helps enforce business rules
    

---

## How Encapsulation Is Implemented in Python

Python does not have strict access modifiers like `private` or `protected`.  
Instead, it uses **naming conventions**:

|Access Level|Convention|Meaning|
|---|---|---|
|Public|`variable`|Accessible everywhere|
|Protected|`_variable`|Should not be accessed directly (by convention)|
|Private|`__variable`|Name-mangled, not directly accessible|

---

## Example 1: Public Members (No Encapsulation)

`class Student:     def __init__(self, name, marks):         self.name = name         self.marks = marks  s = Student("Rahul", 85) print(s.marks)     # Direct access`

❌ No protection — data can be changed freely.

---

## Example 2: Private Variables (Encapsulation)

`class Student:     def __init__(self, name, marks):         self.__name = name      # private         self.__marks = marks   # private      def get_marks(self):         return self.__marks      def set_marks(self, marks):         if marks >= 0:             self.__marks = marks`

`s = Student("Rahul", 85)  print(s.get_marks())   # 85 s.set_marks(90) print(s.get_marks())   # 90`

✔ Data is accessed **only through methods**  
✔ Validation logic is enforced

---

## What Happens If You Try Direct Access?

`print(s.__marks)`

❌ Error:

`AttributeError: 'Student' object has no attribute '__marks'`

This is due to **name mangling**:

`print(s._Student__marks)  # Works, but NOT recommended`

---

## Example 3: Protected Members

`class BankAccount:     def __init__(self, balance):         self._balance = balance      def show_balance(self):         return self._balance`

🔹 `_balance` should only be used inside the class or subclasses  
🔹 Python trusts the developer to follow conventions

---

## Example 4: Encapsulation Using `@property`

Python provides a **clean and Pythonic way** using properties.

`class Employee:     def __init__(self, salary):         self.__salary = salary      @property     def salary(self):         return self.__salary      @salary.setter     def salary(self, amount):         if amount > 0:             self.__salary = amount`

`e = Employee(50000) print(e.salary)     # Getter e.salary = 60000    # Setter`

✔ Looks like variable access  
✔ Actually controlled through methods

---

## Real-World Analogy

Think of an **ATM machine**:

- You cannot access cash directly
    
- You must use buttons (methods)
    
- Balance is protected (data)
    

That is **encapsulation**.

---

## Encapsulation vs Abstraction (Quick Comparison)

|Feature|Encapsulation|Abstraction|
|---|---|---|
|Focus|Data protection|Hiding complexity|
|Achieved by|Access control|Abstract classes/interfaces|
|Example|Private variables|Abstract methods|

---

## Summary

- Encapsulation = **Data hiding + controlled access**
    
- Implemented using:
    
    - Private variables (`__`)
        
    - Getter & Setter methods
        
    - `@property` decorator
        
- Improves security and maintainability