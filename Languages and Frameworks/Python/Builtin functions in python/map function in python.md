***tags***: #Python #fundamentals #builtinfunctions #literablefunction

- The Python `map()` function ==applies a given function to each item in an iterable (like a list or tuple) and returns a **`map` object**, which is an iterator==.
#### Syntax

```
map(function, iterable, ...)
```

- `function`: The function to execute for each item. It can be a built-in function, a user-defined function, or a `lambda` function.
- `iterable`: One or more sequences (lists, tuples, strings, etc.) that you want to transform. The function must accept as many arguments as there are iterables provided.
#### Example

```python
def double(n):
    return n * 2

numbers = [1, 2, 3, 4, 5]
# Apply the 'double' function to each item
result_iterator = map(double, numbers)

# Convert the map object to a list to view the results
squared_numbers = list(result_iterator)
print(squared_numbers)
# Output: [2, 4, 6, 8, 10]
```

#### Key Characteristics
- **Returns an Iterator**: In Python 3, `map()` returns a lazy iterator (a `map` object), which computes results on demand, making it memory-efficient for large datasets. You can convert it to a list, tuple, or set using their respective constructor functions (e.g., `list(result)`).
- **Does Not Mutate Original Data**: The original iterable remains unchanged.
- **Multiple Iterables**: If multiple iterables are provided, the function takes the corresponding elements from all iterables as arguments in parallel. The iteration stops when the shortest iterable is exhausted.
```python
list 1 = [1,2,3]
list 2 = [3,4,5]

results = list(map(lambda x,y: x+y, list1, list2))
```