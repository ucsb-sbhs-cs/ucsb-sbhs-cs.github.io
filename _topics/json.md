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

It's probably best to start with some examples. Here is an example of some JSON data. This JSON data repsents the nutriments of a single soft drink (for this case, Coca Cola Coke) taken from the "Open Food Facts" dataset from the "ProgrammableWeb" collection of datasets. 

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

cola_json = requests.get('https://world.openfoodfacts.org/api/v0/product/4890008100309.json')
cola_data = cola_json.json()

pprint(cola_data)
{% endhighlight %}

The `pprint(cola_data)` line gives us a printout of the Python Dictionary representation of this JSON object.  That representation is very large, so we don't include here on this web page, but, you can see it [at this link](cola_data_as_python_dict/)

TODO: Be careful about the distinction between JSON as a format, and Python dictionaries as a format.  They look VERY similar, but they are NOT exactly the same.

Since the data contains lots of information about the soft drink, only a snippet of the data is shown&mdash;a full listing appears [at this link](cola_data_json/).  Here's what that would look like (in part):

```python
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
```

You may have already noticed the "u" in front of every string. Those are actually a <i>unicode</i> type. For the purpose of this lesson, all you need to know is that unicode is another representation of some text (just like a string). 
For more details about the difference between unicode and string: <https://stackoverflow.com/questions/18034272/python-str-vs-unicode-types>

As we can see the JSON data above, you can nest one JSON object inside another, the same way that Python dictionaries can be nested one inside the other. Notice that the JSON object we dealt with before appears inside of this one. 
(Note: Some parts of the data have been cut out and replaced with `...` so that we can see the overall structure of the remaining data more clearly.) 

```
{u'code': u'4890008100309',
 u'product': {u'_id': u'4890008100309',
             ...
             u'nutriments': { u'salt': u'0.01016',
                              u'sodium': u'0.004',
                              u'sugars': u'10.6',
                            },
            ...
            },
 u'status': 1,
 u'status_verbose': u'product found'}
```

Let's break this down a bit.  This entire sequence is a single JSON object, which in Python terms, corresponds to a dictionary.  It has a sequence of keys and values.

First, let's identify the keys in this dictionary.  They are:

  * `u'code'`
  * `u'product'`
  * `u'status'`
  * `u'status_verbose'`

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
    
   
