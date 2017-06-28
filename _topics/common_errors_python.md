---
topic: "Common Errors: Python"
desc: "Mistakes that folks often make in Python"
---

# `object is not callable`

When you see this error, check whether you are using parens, i.e. `()` when you should be using square brackets, i.e. `[]`.  

For example, suppose that `counties` is a dictionary object (type `dict` in Python), and it has a key/value pair where the key is the string `"CA Santa Barbara"`.

If you try to access the value like this, you get the "object is not callable" error:

```
    sb = counties("CA Santa Barbara")
TypeError: 'dict' object is not callable
```

The reason is that the syntax `counties("CA Santa Barbara")` is being interpreted as "call the function `counties` with
argument `"CA Santa Barbara"`.  The fix is to replace the line of code with:

```
    sb = counties["CA Santa Barbara"]
```

# `ModuleNotFoundError: No module named 'blah'`

This arises when you have `import blah`, but Python can't find the module `blah`.  Try these things:

1.  Did you spell it correctly?
2.  If it is a third-party library, do you need to run `pip install blah`, or `pip3 install blah` first?
3.  If it is a library that you wrote yourself, is the file `blah.py` in the current directory?
