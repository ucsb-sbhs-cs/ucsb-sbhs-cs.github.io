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

In order to use JQuery on a web page, you typically need to do three things:

1.   Include the following line somewhere in the `<head>` element of your HTML code.   
    This includes the code for the JQuery library from a [Content Distribution Network provided by Google](https://developers.google.com/speed/libraries/).     You could also get a similar snippet of code from the [Content Distribution Network provided by JQuery.com](https://code.jquery.com/)

   ```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   ```

2.  Include a second `<script>` element after the one that pulls in JQuery, that indicates what should be done
   on your page after the page loads.  That will look something like this.    The code below indicates that any
   element that has `class="greenOnClick"` will turn green when you click on it.
   
   ```html
   <script>
      $(document).ready(function(){
         $(".greenOnClick").click(function(){
            $(this).css("color:green");
         });
      });
   </script>
   ```
3.  Put the appropriate CSS class on whatever elements you want to apply your effect to.    For example:


   ```html
   <p class="greenOnClick">This paragraph will turn green when you click on it.</p>
   ```

You are encouraged to use the the W3C Schools tutorial on JQuery, <https://www.w3schools.com/jquery/>, to learn more about how this works.

