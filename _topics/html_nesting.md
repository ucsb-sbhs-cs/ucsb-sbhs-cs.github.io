---
topic: "html: nesting"
indent: true
desc: "HTML elements inside one another"
viz: lite
prereqs:
   - "html"
---


# Nesting of HTML elements

HTML elements can be nested inside one another.  For example:

```
<p>This food is <em>very</em> hot!</p>
```

That example has two HTML elements:

* An `em` element with content `very`
* A `p` element with content: `This food is <em>very</em> hot`



Element nesting creates a "parent/child" relationship", as shown here:

<div data-viz="digraph g { p -> em; }">
</div>

* In this case, since this `em` element is contained entirely within 
  this `p` element, we say that the `p` element is the <em>parent</em> 
  of the `em` element.
* Conversely, the `em` element shown here is the child of the `p` element. 



# Exercises

1. How many elements do you see here, and what are they?

   ```html
   <div> This lesson about <b>HTML</b> is 
   <em>very</em> interesting.</div>
   ```

2.  In the example above, what is the parent of the `b` element?

3.  What relationship does the `em` element have to the `div` element?

