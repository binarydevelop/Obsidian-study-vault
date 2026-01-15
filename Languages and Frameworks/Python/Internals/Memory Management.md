***Tags***: #Python #internals

---
- In python assignment doesn't copy objects it just binds the name to that object. 
	```python
	a = [1,2,3]
	b = a 
	b.append(4)
	print(a) [1,2,3,4]
	```

- In order to copy we do the below:
```python
a = [1,2,3]
b = a.copy()

```

