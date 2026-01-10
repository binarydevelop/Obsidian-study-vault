
***Tags***: #oops #class #objects #Python #dunder 

### `__new__` in Python 

In Python, **`__new__` is the method that actually creates a new object**.  
It is called **before** `__init__`.

#### The lifecycle

```python
__new__  →  creates the object
__init__ →  initializes the object
```
- `__new__` **must return an object**
- `__init__` **returns nothing**
---
## Basic idea with an example

```python
class MyClass:
    def __new__(cls):
        print("__new__ called")
        return super().__new__(cls)

    def __init__(self):
        print("__init__ called")


obj = MyClass()
```

**Output**

```
__new__ called
__init__ called
```

✔ `__new__` runs first  
✔ Then `__init__` runs on the returned object

---

## Why does `__new__` exist?

Most of the time, **you do NOT need `__new__`**.  
You override it only when you want to:

1. Control **object creation**
    
2. Return **an existing object**
    
3. Work with **immutable types**
    
4. Implement **Singleton / Flyweight**
    
5. Modify what class actually gets instantiated
    

---

## Example 1: `__new__` with arguments

```python
class Person:
    def __new__(cls, name):
        print("__new__", name)
        return super().__new__(cls)

    def __init__(self, name):
        print("__init__", name)
        self.name = name


p = Person("Alice")
```

✔ Arguments go to **both** `__new__` and `__init__`

---

## Example 2: `__new__` with immutable types (VERY important)

Immutable objects (like `int`, `str`, `tuple`) **must be created in `__new__`**.

```python
class MyInt(int):
    def __new__(cls, value):
        print("Creating MyInt")
        return super().__new__(cls, value * 2)


x = MyInt(10)
print(x)
```

**Output**

```
Creating MyInt
20
```

❌ You **cannot** change `int` in `__init__`  
✔ You **must** do it in `__new__`

---

## Example 3: Singleton using `__new__`

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance


a = Singleton()
b = Singleton()

print(a is b)  # True
```

✔ Only **one instance ever exists**

---

## Example 4: Returning a different object (!)

```python
class A:
    def __new__(cls):
        return "I am not an A instance"


a = A()
print(a, type(a))
```

**Output**

```
I am not an A instance <class 'str'>
```

✔ `__init__` is **NOT called** if `__new__` returns a different type

---

## Key rules you MUST remember

1. `__new__` is a **class method** (first argument is `cls`)
    
2. It **must return an object**
    
3. If it returns an instance of `cls` → `__init__` runs
    
4. If it returns something else → `__init__` is skipped
    
5. Needed mainly for **immutables and design patterns**
    

---

## When should YOU use `__new__`?

Use `__new__` **only if**:

- You are implementing **design patterns**
    
- You are subclassing **immutable types**
    
- You need **strict control over object creation**
    

Otherwise → **use `__init__`**

---

## Next step (hands-on path)

Since you said you want to **learn design patterns in Python**, the natural next step is:

👉 **Singleton pattern using `__new__` vs metaclass**  
👉 Then **Factory pattern** (where `__new__` concepts help)

If you want, I can:

- Give **exercises**
    
- Compare `__new__` vs `__init__` visually
    
- Jump straight into **design patterns roadmap**
    

Just tell me how you want to proceed.