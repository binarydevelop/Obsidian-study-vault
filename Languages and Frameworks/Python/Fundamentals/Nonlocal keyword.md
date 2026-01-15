***tags***: #Python #fundamentals 

- The `nonlocal` keyword in Python is used to declare that a variable within a nested function refers to a variable in the nearest enclosing function's scope (the "non-global" or "enclosing" scope), rather than the local scope.
- ```python
  a = "global"
  def outer():
	  a = "Outer"
	  def inner():
		  nonlocal a 
			a = "inner"
	        print(a)
	        
	  inner()
	  print(a)
	  
outer() 
print(a) 
  ```
- In the above example the value of a will be modified from the nearest enclosing scope but not the global one so the value of a in the outer function is modified to inner rather than outer. 
- `nonlocal` would only find the variable one level up and stop will not modify all of them. 
	```python
	def outer():
		a = "outer"
		def inner():
			def deepinner():
			 nonlocal a 
			 a = "deepest"
			 
			 deepinner()
		inner()
		
	outer()
	print(a) 
			
	```
- Without `nonlocal`, attempting to assign a value to a variable with the same name in the inner function would create a new local variable, leaving the outer function's variable unchanged.