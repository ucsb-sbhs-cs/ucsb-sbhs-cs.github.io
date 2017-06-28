---
topic: "html: head"
indent: true
desc: "What belongs in the &lt;head&gt; element"
prereqs:
   - "html"
---

The `<head>` element in HTML is where we take care of things such as:

* set up various parameters for our page
* loading CSS files and JavaScript files

This page provides a reference for some of the things you might see in the `<head>` section of a webpage.

# Setting the encoding

The bits that are used to represent your webpage are converted to characters according to some encoding.  For example, 01000001 might represent the
capital letter 'A'.   

It turns out that the encodings for  the usual letters and digits used in English are pretty standard, once you start incuding symbols
from other languages, special symbols, emojis, etc. issues of encoding can get really important.

We typically include this at the top of the `<head>` to indicate that our page is using `utf-8` encoding, one of the most standard 
choices:

```html
<meta charset="utf-8">
```

# Viewport

As explained on [this page from W3C Schools](https://www.w3schools.com/css/css_rwd_viewport.asp) it is helpful to users
of your web page that are on mobile devices (e.g. phones, tablets) if you define the viewport.

That code looks like this:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

