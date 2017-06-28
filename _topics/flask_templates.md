---
topic: "Flask: Templates"
desc: "Using Jinja 2 Templates with Flask"
indent: true
prereqs:
   - Common Navigation
   - Flask
---

# Resources on templates

* From the quickstart: <http://flask.pocoo.org/docs/0.12/tutorial/templates/>
* From the longer tutorial: <http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates>
* The documentation: <http://flask.pocoo.org/docs/0.12/templating/>
* From Miguel Grinberg's Flask Megatutorial: <https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates>


# Why use templates?

When making a website with a web framework, we quickly run into two issues:

1.  It is helpful to keep HTML code and program code (e.g. Python code) separate.

    Our tools (IDEs, editors, etc.) can help us better with our code if files that end in `.py` only
    have Python, and files that end in `.html` only have HTML, for example.  (The same is true
    for `.css` and `.js` files.

2.  HTML files have lots of repetition.

    Each web page needs a `<head>` element, for example, and the contents of that element&mdash;
    lists of `.css` and `.js` files to be inclued&mdash;are often identical, or nearly so, for every
    page on our site.

    And, there is the need for common navigation&mdash;headers, footers, etc.

# Templates to the Rescue

Nearly every server side web framework has some way of doing templating, whether we are talking about PHP, Rails, Django, etc.

Some web frameworks leave templating as a separate concern, and allow
the user to choose from among several different templating systems.

Technically, we can say that Flask (the framework we are using in this
course) falls into this category&mdash;however, nearly all examples
that use Flask in practice use a specific templating system called
Jinja2.  Jinja2 is so commonly used with Flask, that it's probably
easiest to just think of it as part of Flask, though in a very
technical sense, they are separate packages.



