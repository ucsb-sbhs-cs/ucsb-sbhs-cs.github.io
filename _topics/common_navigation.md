---
topic: "Common Navigation"
desc: "The way that users find their way around a multiple page website"
---

This page discusses Common Navigation at a high level:

* what we mean by common navigation
* how templates are used to provide it
* how front end packages such as Bootstrap support it

Although there are many options, in this course, we typically use Flask Templates (Jinja2) and Bootstrap in our examples.   

# What is Common Navigation

<b>Common navigation</b> is a term used in web design and web development for the features that stay that same as you move from
page to page within a website.

For example, a website may have different content in the center of each webpage, but a set of options, menus, buttons, etc. that stay the same
on each page.  These are often located at:

* the top of the screen
* the left hand, and right hand side of the screen
* the bottom of the screen

When making a webpage with pure HTML and CSS, it can be difficult to acheive these effects without repeating HTML code across multiple files.

This creates a problem when something has to be changed, because you have to change it in multiple places.

There are various solutions to this problem, both on the server and client side.   In this course, we are not going to cover all of the 
possibilities&mdash;for reasons of time, and to keep things simple, we are only going to provide a limited number of examples.

# Templates

One easy way to provide common navigation is with the use of templates.   Templates allow us to create a general outline
for the HTML that will appear on each of our pages (or a small set of such outlines).   The template contains the parts of the page that
are kept the same for each page (header, footer, etc.).    

Each specific page then indicates in some way which template to apply, and then specifies only the content specific to that 
page.


Nearly every server side web framework has some way of doing templating, whether we are talking about PHP, Rails, Django, etc.  Some web frameworks
leave templating as a separate concern, and allow the user to choose from among several different templating systems.

Technically, we can say that Flask (the framework we are using in this course) falls into this category&mdash;however, nearly all
examples that use Flask in practice use a specific templating system called Jinja2.   Jinja2 is so commonly used with 
Flask, that it's probably easiest to just think of it as part of Flask, though in a very technical sense, they are separate
packages.

Templating in Flask is covered here: [Flask: Templates](/topics/flask_templates/).


# Front-End Frameworks 

Front-End Frameworks are software packages (typically consisting of .js and .css files, as well as some example .html)
that are used for common navigation.  They are not an alternative to templating&mdash;most commonly, the two are used togetehr.

There are also frameworks for common navigation that are used on the client side. A few examples are:

* Bootstrap (originally developed by Twitter)
* Foundation (from a design company called Zurb)
* Semantic UI (from an individual named Jack Lukic)
* and many, many others

This [web page](https://www.sitepoint.com/5-most-popular-frontend-frameworks-compared/) offers a comparison of five popular ones.

In this course, we'll concentrate on Bootstrap.  Bootstrap has its detractors, but it is definitely easy to get started with, and provided
you use it properly, it can be used to create a very professional looking site quite easily.

There is more information about Bootstrap here: [Bootstrap](/topics/bootstrap/)


