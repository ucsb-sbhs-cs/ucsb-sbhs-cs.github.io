---
topic: "JavaScript"
desc: "language used for client side web programming, and sometimes server side web programming"
---

In this course, we will use JavaScript for client side web programming only.

For client side web programming, JavaScript (or languages that "compile to JavaScript) such as CoffeeScript) 
are pretty much the only choice available.  This is because client side processing happens inside your web browser, 
and most browsers support only JavaScript.

JavaScript is also sometimes used for server side processing&mdash;for example, the node.js framework is a server-side framework based
on JavaScript.   We will use Python and the Flask framework instead, 
so we will not discuss JavaScript as a server side language.   (For more information about why we are using Flask, see the [topic article on Flask](/topics/flask/).)

# Client Side JavaScript Frameworks: JQuery, etc.

When using JavaScript on a web site, programmers almost always rely on some library of code that makes programming easier.

One of the most popular such libraries is called JQuery.

In order to use JQuery on a web page, all you need to do is include the following line somewhere in the `<head>` element of your HTML code.   This includes the code for the JQuery library from a [Content Distribution Network provided by Google](https://developers.google.com/speed/libraries/).     You could also get a similar snippet of code from the [Content Distribution Network provided by JQuery.com](https://code.jquery.com/)

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

In fact, putting this line in your code is one of the first steps in the W3C Schools tutorial on JQuery, which you are encouraged to pursue to learn some of the basics: <https://www.w3schools.com/jquery/>.

