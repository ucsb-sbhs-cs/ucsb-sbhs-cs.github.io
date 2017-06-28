---
topic: "Bootstrap"
desc: "Cascading Style Sheets: style, layout, fonts, colors, etc. for webpages"
prereqs:
   - CSS
   - Common Navigation
---

Bootstrap is a front end web framework.   

# Example Repository

The repo below contains a demonstration of using Bootstrap with Flask
* <https://github.com/ucsb-sbhs-cs/webapps-flask-bootstrap-demo1>

# Resources

* Bootstrap main page: <http://getbootstrap.com/>
* Bootstrap's own tutorial <http://getbootstrap.com/getting-started/>
* W3C Schools Boostrap Tutorial: <https://www.w3schools.com/bootstrap/>

# Loading Bootstrap from a CDN

The following code can be used to load bootstrap into a web page from a Content Distribution Network.   

You will have to do this on every HTML file where you want to use Bootstrap&mdash;unless, of course, you are using templates.  In that case, put this in the main template for the layout of your HTML files, so that it gets included in every page on your site.

To load the CSS part of Bootstrap, put this in the `<head>` element (be careful to put this before any custom CSS):

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

To load the JavaScript part of Bootstrap, put this at the very bottom of the `<body>` element, right before the closing `</body>` tag.  If you are also using JQuery, put JQuery first, and then Bootstrap.   Many authors recommend putting links to scripts for JQuery and Bootstrap at the end of the body section for performance reasons; for a more detailed discussion of that issue, see this question from Stack Overflow: ["Where in the HTML file should JQuery and Boostrap be placed?"](https://stackoverflow.com/questions/30488298/where-in-the-html-file-should-jquery-and-bootstrap-be-placed)

```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

The links above were copied from this site, which may have more update to date versions: <https://www.bootstrapcdn.com/>

If you are wondering what the `integrity` and `crossorigin` attributes do, you can [read more here](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attribute)

# Common Navigation with Bootstrap

One of the keys to using Bootstrap for common navigation is understanding what to put in the `<nav>` element.

The `<nav>` element typically goes at the top of your `<body>` element, like this:

```html
<body>
  <nav class="navbar navbar-default">
  ...
  </nav>
...
</body>
```

Or, if you are using Flask templates, you might factor out the `<nav>` element into its own file, like this:


```html
<body>
   {% raw %}{% include 'navbar.html' %}{% endraw %}
   ...
</body>
```

In that case, the `navbar.html` would be included in the same `templates` directory as your other templates.

An example of a nav element can be seen in this file:

* https://github.com/ucsb-sbhs-cs/webapps-flask-bootstrap-demo1/blob/master/templates/navbar.html

Documentation about what goes in a `<nav>` element can be found here:

* <https://v4-alpha.getbootstrap.com/components/navbar/>
