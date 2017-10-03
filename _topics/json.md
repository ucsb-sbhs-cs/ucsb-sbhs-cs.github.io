---
topic: "JSON"
desc: "JavaScript Object Notation--a way of representing data (not just in JavaScript but across many languages)"
---

JSON (prounounced "jay-sahn") stands for "JavaScript Object Notation".   And, sure enough, JSON is a notation that can be used to represent objects in the JavaScript programming language.

But, it's usage is much broader than that.  It is actually a convenient format for exchanging data among many kinds of computing applications, especially web and mobile applications.  It is used not only by software written in JavaScript, but also software written in Python, Ruby, Java, and many other languages.

# Examples

It's probably best to start with some examples.   Here is an example of some JSON data.    This JSON data represents one car,
and comes from the Cars database that is part of the CORGIS dataset.

First, here's the whole thing.  Then, we'll break it down a bit.

{% highlight json linenos %}
{
    "Engine Information": {
      "Transmission": "6 Speed Automatic Select Shift", 
      "Engine Type": "Audi 3.2L 6 cylinder 250hp 236ft-lbs", 
      "Engine Statistics": {
        "Horsepower": 250, 
        "Torque": 236
      }, 
      "Hybrid": false, 
      "Number of Forward Gears": 6, 
      "Driveline": "All-wheel drive"
    }, 
    "Identification": {
      "Make": "Audi", 
      "Model Year": "2009 Audi A3", 
      "ID": "2009 Audi A3 3.2", 
      "Classification": "Automatic transmission", 
      "Year": 2009
    }, 
    "Dimensions": {
      "Width": 202, 
      "Length": 143, 
      "Height": 140
    }, 
    "Fuel Information": {
      "Highway mpg": 25, 
      "City mph": 18, 
      "Fuel Type": "Gasoline"
    }
  }
{% endhighlight %}

Let's break this down a bit.   First, let's concentrate on just these lines:

```
    "Engine Information": {
      "Transmission": "6 Speed Automatic Select Shift", 
      "Engine Type": "Audi 3.2L 6 cylinder 250hp 236ft-lbs", 
      "Engine Statistics": {
        "Horsepower": 250, 
        "Torque": 236
      }, 
```
