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

https://www.bootstrapcdn.com/

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

If you are wondering what the `integrity` and `crossorigin` attributes do, you can [read more here](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attribute)
