---
topic: "html"
desc: "HyperText Markup Language: the language of web pages"
---

HTML stands for HyperText Markup Language.  It is way of "marking up text" to indicate how should be structured into a web page.

For example, suppose we want a web page to look like this:

<table style="width:20em; margin-left:auto; margin-right:auto;">
<tr><td style="border:none;"><div style="border:1px solid black; border-radius: 10px 10px 0px 0px;"><span style="padding-left:1em">Demo Web Page</span></div></td></tr>
<tr><td style="border: 1px solid black;">
<h1>Hello, World</h1>

<p>
     Welcome to my web page.  This
     web page is a demonstration of
     HTML.
</p>
</td></tr>
</table>

The HTML code might look like this:

```html
<!DOCTYPE html>
<html>
 <head><title>Example web page</title></head>
 <body>
   <h1>Hello, World</h1>
   <p>
     Welcome to my web page.  This
     web page is a demonstration of
     HTML.
   </p>
 </body>
</html>
```

Notice a few things:

* There are words enclosed in less-than and greater-than signs, such as `<html>`, `<h1>` and `<p>`.     Those are called <em>tags</em>.
* There are slashes in front of some of them, and not others.
* The ones without slashes (e.g. `<h1>` and `<p>`) are called <em>open tags</em> and the ones with the slashes (e.g.  `</h1>` and `</p>`) are called <em>close tags</em>.
* In this context, we sometimes call these less-than and greater-than signs <em>angle brackets</em>.
* Most open tags are followed by a matching close tag; e.g. if you see a `<p>`, it should befollowed eventually by a `</p>`

# Elements

An HTML element consists of an open tag, content and a close tag.  The element is named for its open tag.

For example, this is one HTML element, a `p` element:

```
<p> HTML was first proposed in 1980 by
a physicist named Tim Berners-Lee.</p>
```

And this is another HTML element, an `h1` element.

```
<h1>HTML Basics</h1>
```

The content of this element is the text `HTML Basics`.

