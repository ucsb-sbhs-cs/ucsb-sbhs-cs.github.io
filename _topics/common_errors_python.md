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

