***tags***: #Python #fundamentals #builtinfunctions #stringfunctions

- The Python `split()` method is a built-in function used to break a string into a **list of substrings** based on a specified delimiter. By default, it splits the string by any sequence of whitespace characters.
- #### Syntax
	```python
       str.split(sep=None, maxsplit=-1)
	```
-  `str`: The original string you want to split.
- `sep` (optional): The separator or delimiter at which the string should be split. If not specified (`None`), any whitespace (spaces, tabs, newlines) is used as a delimiter, and multiple consecutive whitespaces are treated as a single separator.
- `maxsplit` (optional): The maximum number of splits to perform. If not specified (or set to -1), there is no limit, and all occurrences of the separator are used for splitting.

```python
sentence = "Python is a powerful language"
words = sentence.split()
print(words)

listofFruits = "Apple,Guava,Orange"
fruits = listofFruits.split(',')
print(fruits) 
## delimeter separtion
```

#### Limiting the Number of Splits (`maxsplit`)

The `maxsplit` parameter controls the number of splits, resulting in a list with at most `maxsplit` + 1 elements. 

```python
log_entry = "INFO:user_logged_in:2025-09-22:success"
parts = log_entry.split(":", maxsplit=2)
print(parts)
# Output: ['INFO', 'user_logged_in', '2025-09-22:success']
```