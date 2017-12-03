---
topic: "JSON"
desc: "JavaScript Object Notation--a way of representing data (not just in JavaScript but across many languages)"
---

JSON (prounounced "jay-sahn") stands for "JavaScript Object Notation". And, sure enough, JSON is a notation that can be used to represent objects in the JavaScript programming language.

But, it's usage is much broader than that. It is actually a convenient format for exchanging data among many kinds of computing applications, especially web and mobile applications. It is used not only by software written in JavaScript, but also software written in Python, Ruby, Java, and many other languages.

# Examples

Resource: 
- ProgrammableWeb: <https://www.programmableweb.com/api/open-food-facts>
- Open Food Facts: <https://world.openfoodfacts.org/product/4890008100309/coca-cola-coke>
- JSON Data: <https://world.openfoodfacts.org/api/v0/product/4890008100309.json>

It's probably best to start with some examples. Here is an example of some JSON data. This JSON data represents the nutriments of a single soft drink (for this case, Coca Cola Coke) taken from the "Open Food Facts" dataset from the "ProgrammableWeb" collection of datasets. 

{% highlight json linenos %}
 {
      "Salt": "0.01016",
      "Sodium": "0.004"
      "Sugars": "10.6", 
 }
{% endhighlight %}

This JSON object has three key/value pairs. That makes it similar to a Python Dictionary. In fact, if this JSON is stored in an API on the web, we can read it into a Python dictionary with this code:  

{% highlight python linenos %}
import json
import requests
from pprint import pprint

cola_json = requests.get(
              'https://world.openfoodfacts.org/api/v0/product/4890008100309.json')
cola_data = cola_json.json()

pprint(cola_data)
{% endhighlight %}

On line 5-6, we create a response object `cola_json` which stores the request-response from the url <https://world.openfoodfacts.org/api/v0/product/4890008100309.json>.

In order to retrieve the data from the response object, we need to convert the raw response content into a JSON type data structure. This is achieved by using `.json()` method on line 7. The `.json()` method return a Python dictionary object (type `dict`) that represents that same data as the JSON that was returned from url.

The `pprint(cola_data)` line gives us a printout of the Python Dictionary representation of this JSON object. That representation is very large, so we don't include here on this web page, but, you can see it [at this link](cola_data_as_python_dict/)

As you check out the provided link, since `cola_data` is a Python dictionary, you may have noticed that `cola_data` is a nested dictionary&mdash;a dictionary within a dictionary. Notice that the JSON object we dealt with before appears inside of this one. 
(Note: Some parts of the data have been cut out and replaced with `...` so that we can see the overall structure of the remaining data more clearly.) 

```
{'code': '4890008100309',
 'product': {'_id': '4890008100309',
             ...
             'nutriments': {'carbohydrates': '10.6',
                            ...
                            'salt': '0.01016',
                            ...
                            'sodium': '0.004',
                            ...
                            'sugars': '10.6',
                            ...
                            'sugars_value': '10.6'},
             'unknown_nutrients_tags': [],
             'update_key': 'nutriscore-20171111'},
 'status': 1,
 'status_verbose': 'product found'}
```

Let's break this down a bit. This entire sequence is a single Python dictionary that has a sequence of keys and values. Recall that `cola_data` is a nested dictionary, so it will have multiple "levels" of dictionaries&mdash;each level consisting its own sequence of keys and values. 

At the highest (or first) level, let's identify the keys in this dictionary.  They are:

  * `'code'`
  * `'product'`
  * `'status'`
  * `'status_verbose'`

Next, let's concentrate on just these lines.  What we see is that the key `u'product'` is associated with a value as a big dictionary. In this nested dictionary, we see that one of the keys `u'nutriments'` is associated with a value as another dictionary&mdash;that is, the JSON object we considered earlier.

```
   u'product': {u'_id': u'4890008100309',
             ...
             ...
             u'nutriments': { u'salt': u'0.01016',
                              u'sodium': u'0.004',
                              u'sugars': u'10.6',
                            },
            ...
            ... },
```

# Using the JSON object to answer questions

TODO: Insert a few "word problems" that can be answered using the JSON.

Example: Suppose that `cola_data` represents the JSON associated with the product lookup from the sample Python code in the article above.  A complete listing of that JSON appears [at this link](cola_data_json/).    

Write a Python expression that would answer each of these questions.

1.  Q: What is the amount of sodium in one serving of this product?   

    A: `cola_data[u'product'][u'nutriments'][u'sodium']`
    
   
