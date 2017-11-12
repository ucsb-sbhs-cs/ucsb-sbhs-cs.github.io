---
topic: "JSON"
desc: "JavaScript Object Notation--a way of representing data (not just in JavaScript but across many languages)"
---

JSON (prounounced "jay-sahn") stands for "JavaScript Object Notation". And, sure enough, JSON is a notation that can be used to represent objects in the JavaScript programming language.

But, it's usage is much broader than that. It is actually a convenient format for exchanging data among many kinds of computing applications, especially web and mobile applications. It is used not only by software written in JavaScript, but also software written in Python, Ruby, Java, and many other languages.

# Examples

<b>TODO: Yuki, please replace these examples with some simple ones based on the <https://world.openfoodfacts.org> API.
It is ok to simplify the examples, i.e. you don't have to use the full exact complicated syntax of an actual record from that API.  You could simply, for example, by having only 3 nutrients instead of 30.   The idea is to show how JSON works, while keeping the examples simple, but also authentic.</b>

Resource: 
- ProgrammableWeb: <https://www.programmableweb.com/api/open-food-facts>
- Open Food Facts: <https://world.openfoodfacts.org/product/4890008100309/coca-cola-coke>
- JSON Data: <https://world.openfoodfacts.org/api/v0/product/4890008100309.json>

It's probably best to start with some examples. Here is an example of some JSON data. This JSON data repsents the nutriments of a single soft drink (for this case, Coca Cola Coke) taken from the "Open Food Facts" dataset from the "ProgrammableWeb" collection of datasets. 

{% highlight json linenos %}
 {
      "Salt": "0.01016", 
      "Sugars": "10.6", 
      "Sodium": "0.004"
 }
{% endhighlight %}

This JSON object has three key/value pairs. That makes it similar to a Python Dictionary. In fact, if this JSON is stored in an API on the web, we can read it into a Python dictionary with this code:  

{% highlight python linenos %}
import json
import request
from pprint import pprint

cola_json = requests.get(https://world.openfoodfacts.org/api/v0/product/4890008100309.json)
cola_data = cola_url.json()

pprint(cola_data)
{% endhighlight %}

Since the data contains lots of information about the soft drink, only a snippet of the data is shown. Here's what that would look like:

```
{u'code': u'4890008100309',
 u'product': {u'_id': u'4890008100309',
              u'_keywords': [u'cola', u'coca', u'coke'],
              u'additives_debug_tags': [],
              u'additives_old_tags': [],
              u'additives_original_tags': [],
              u'additives_prev_original_tags': [],
              u'additives_prev_tags': [],
              u'additives_tags': [],
              u'allergens': u'',
              u'allergens_hierarchy': [],
              u'allergens_tags': [],
              u'brands': u'Coca Cola',
              u'brands_tags': [u'coca-cola'],
              u'categories': u'Colas',
              u'categories_debug_tags': [],
              u'categories_hierarchy': [u'en:beverages',
                                        u'en:carbonated-drinks',
                                        u'en:sodas',
                                        u'en:colas',
                                        u'en:sugared-beverages'],
              u'categories_prev_hierarchy': [u'en:beverages',
                                             u'en:carbonated-drinks',
                                             u'en:sodas',
                                             u'en:colas'],
              u'categories_prev_tags': [u'en:beverages',
                                        u'en:carbonated-drinks',
                                        u'en:sodas',
                                        u'en:colas'],
              u'categories_tags': [u'en:beverages',
                                   u'en:carbonated-drinks',
                                   u'en:sodas',
                                   u'en:colas',
                                   u'en:sugared-beverages'],
    ...
    ...
    ...
```

As we can see the JSON data above, you can nest one JSON object inside another, the same way that Python dictionaries can be nested one inside the other. Note that the JSON object we dealt with before appears inside of this one. 
(Note: Some parts of the data is cutted out, so we can see the data more clearly.) 

<b> --------------T.B.C. -------------- </b>

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

Let's break this down a bit.  This entire sequence is a single JSON object, which in Python terms, corresponds to a dictionary.  It has a sequence of keys and values.

First, let's identify the keys in this dictionary.  They are:

  * `"Engine Information"`
  * `"Identification"`
  * `"Dimensions"`
  * `"Fuel Information"`

Next, let's concentrate on just these lines.  What we see is that the key `"Dimensions"` is associated with a value, that is the entire JSON object we considerered earlier.

{% highlight json linenos %}
  "Dimensions": {
      "Width": 202, 
      "Length": 143, 
      "Height": 140
    }, 
{% endhighlight %}

