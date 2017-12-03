---
topic: "Python: dictionaries"
desc: "a map from a set of keys to a set of values"
indent: true
---


# Python Dictionaries

In Python, we can use a *dictionary* to associate keys with values.

This code creates a simple dictionary called `en_to_es` (short for "English to Español), that
maps the words `one`, `two` and `three` (as Python strings) to their Spanish counterparts (as
Python strings):

```python
en_to_es = { 'one' : 'uno', 'two' : 'dos', 'three' : 'tres' }
```

Once you create a dictionary, you can access the values by looking up their key.
Here, we show trying some Python dictionary code at the interactive Python shell:

```python
>>> en_to_es = { 'one' : 'uno', 'two' : 'dos', 'three' : 'tres' }
>>> en_to_es['one']
'uno'
>>> en_to_es['three']
'tres'
>>> 
```

If a particular key is not in the dictionary, and you try to look it up, you get a 
`KeyError`, like this:

``` python
>>> en_to_es['ten']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'ten'
>>> 
```

# Handling `KeyError` with `try`/`except`

You can use a so-called `try`/`except` block to write custom code that looks for the
`KeyError` and instead of printing a scary looking error message, does whatever you
would prefer:

Suppose we run this file:

```python
def translate(myDictionary,wordToLookup):
    ''' lookup word.  return NoneType value if word not found '''
    try:
        return myDictionary[wordToLookup]
    except KeyError:
        print "The word ",wordToLookup," was not in the dictionary"
        return


en_to_es = { 'one' : 'uno', 'two' : 'dos', 'three' : 'tres' }
```
    
Then, we can use the function `translate` to do translation with a "nicer" error message.

```
=============== RESTART: /Users/pconrad/Documents/translate.py ===============
>>> en_to_es
{'three': 'tres', 'two': 'dos', 'one': 'uno'}
>>> en_to_es['one']
'uno'
>>> en_to_es['ten']

Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    en_to_es['ten']
KeyError: 'ten'
>>> translate(en_to_es,'one')
'uno'
>>> translate(en_to_es,'ten')
The word  ten  was not in the dictionary
>>> 
```

# Dictionaries of Dictionaries

Two letter language codes for various human spoken languages have
been standardized by the International Standards Organization, ISO, and can be looked up
[at this web page](https://www.loc.gov/standards/iso639-2/php/code_list.php))

Here are just a few.   The third column explains why, for example, 
German is `de` and Chinese is `zh`.

|code| Language (in English) | Language (in that language,<br>using latin alphabet)|
|----|-----------------------|-----------------------------------------------------|
|de  | German                | Deutsch |
|en  | English               | English |
|es  | Spanish               | Español  |
|fr  | French                | Français |
|fa  | Persian               | Farsi  |
|zh  | Chinese               | Zhongwen |

We could construct a dictionary of these codes like this:

```python
codeToLanguage = {
  'de' : 'German',
  'en' : 'English',
  'es' : 'Spanish',
  'fr' : 'French',
  'fa' : 'Persian',
  'zh' : 'Chinese',
}
```

If we wanted to translate the number 'one','two','three' into each of these languages, we
could create six different dictionaries, like this:

```python
en_to_de = { 'one' : 'eins', 'two' : 'zwei', 'three' : 'drei' }
en_to_es = { 'one' : 'uno', 'two' : 'dos', 'three' : 'tres' }
en_to_fr = { 'one' : 'un', 'two' : 'deux', 'three' : 'trois' }
# etc ...
```

But there is a better way.  It turns out that the *value* part in a *(key,value)* pair can be any type; not just
a string.   One possibility is that it can, itself, be a dictionary.  

This gives us many ways that we could construct a dictionary to translate `one`,`two`,`three` into various languages.

## Method 1: Use English number as key, then each entry is a dictionary by language:

```
numDict = { 
    'one':   {'de' : 'eins', 'es':'uno',  'fa':'yek', 'fr':'un',    'zh':'yi' },
    'two':   {'de' : 'zwei', 'es':'dos',  'fa':'do',  'fr':'deux',  'zh':'er' },
    'three': {'de' : 'drei', 'es':'tres', 'fa':'seh', 'fr':'trois', 'zh':'san' }
  }
```

In this dictionary, writing `numDict['one']` returns to us another dictionary, where the keys
are the language codes, (`'de'`, `'es'`, `'fr'`, etc.).    For example:


```
>>> numDict['one']
{'fa': 'yek', 'fr': 'un', 'de': 'eins', 'zh': 'yi', 'es': 'uno'}
>>> 
```

Note that in a Dictionary, the keys don't necessary appear in the order that we put them into the dictionary,
and they don't even necessarily appear in *any* particular order.   In technical terms, we say that:

* A python dictionary is an unordered collection of mappings from keys to values.

So, to get `'one'` in a particular language, we can index the dictionary returned by  `numDict['one']` a second
time, with the language that we want.  For example, to get `'one'` in Chinese (`'zh'`), we can use:

```
>>> numDict['one']['zh']
'yi'
>>> 
```

But that's not the only way to do it.

## Method 2: Index by language, then by word

We could also arrange our dictionary like this:

```python
numberLookup = {
    'de' : { 'one' : 'eins', 'two' : 'zwei', 'three': 'drei'  },
    'es' : { 'one' : 'uno',  'two' : 'dos',  'three': 'tres'  },
    'fa' : { 'one' : 'yek',  'two' : 'do',   'three': 'seh'   },
    'fr' : { 'one' : 'un',   'two' : 'deux', 'three': 'trois' },
    'zh' : { 'one' : 'yi',   'two' : 'er',   'three': 'san'   }
}
```    

Now, when we use `numberLookup['es']` for example, we get a dictionary indexed by
the numbers in English, `'one'`, `'two'`, `'three'`.

```python
>>> numberLookup['es']
{'three': 'tres', 'two': 'dos', 'one': 'uno'}
>>> 
```

So, to lookup a particular, number, we add a second index:

```
>>> numberLookup['es']['two']
'dos'
>>> 
```

# Why are dictionaries important?

Dictionaries are one of the most commonly used data structures in "real world" Python programming, because they
correspond very nicely to the way that real world data is often structured.  This includes data from
data bases, websites, etc.

There is a notation called *JSON*, which stands for *JavaScript Object Notation*.  Although this notation
comes from the language *JavaScript*, it is used across many languages other than JavaScript, including Python.

Many websites and other data services provide access to data in JSON format.  

For example, check out the links provided below. 
The first link is a data about Coca Cola Coke: <https://world.openfoodfacts.org/product/4890008100309/coca-cola-coke>
The second link is a JSON format of the first link: <https://world.openfoodfacts.org/api/v0/product/4890008100309.json>

Both links are describing the same item, but written in different ways. You can confirm that it is the same item by looking at the UPC number. In this case, it is '4890008100309'. 


# Applying Python Dictionaries with Real JSON Data

Data in JSON format can be easily converted into a Python dictionary. For our example, we will use five different soft drink from the Open Food Facts API. The JSON for these five soft drinks are: [Coca Cola Coke](https://world.openfoodfacts.org/api/v0/product/4890008100309.json), [Pepsi](https://world.openfoodfacts.org/api/v0/product/4060800100252.json), [Sprite](https://world.openfoodfacts.org/api/v0/product/5449000014535.json), [Fanta Orange](https://world.openfoodfacts.org/api/v0/product/8847100560094.json), [Dr. Peper](https://world.openfoodfacts.org/api/v0/product/8435185944009.json).

To learn how to extract JSON data from the web into a Python dictionary, check out this link: [Python:JSON](https://ucsb-sbhs-cs.github.io/topics/json/) 

As you may have noticed looking at the JSON data, each soft drink has 4 main keys: "code", "product", "status_verbose", and "status". However, we do not want to see all of these big data everytime you access these items. Hence, we can easily create a new Python dictionaries consisting of information that we really care about. 

As you may have learned already, the key and the value for Python Dictionary can be any type of variable. In our case, the 4 main keys that we just mentioned are type `str`. The values that are paired with those keys are also type `str`, except for the value paired with the key `product`. The value for the key `product` is a dictionary consisting more key/value pairs (which can still be a single data value, an array, or another dictionary). This example of a dictionary within a dictionary is called a <i>nested dictionary</i>. 

Assume that 'cola_data', 'pepsi_data', 'sprite_data', 'fanta_data', 'dr_pepper_data' are all dictionaries that have been extracted from the JSON data in Open Food Facts API, and the code will intially have an array consisting all of these dictioanries. 

{% highlight Python linenos %}
array_of_data = [cola_data, sprite_data, fanta_data, dr._pepper_data]
{% endhighlight %}


Let's try to create a Python Dictionary only consisting of the item's UPC number as the key and the item's product name as the value, which what this code does:

{% highlight Python linenos %} array_of_data = [cola_data, sprite_data, fanta_data, dr._pepper_data]
  list_of_UPC_number = {}
  for items in list_of_data:
    list_of_UPC_number[items[u'code']] = items[u'product'][u'product_name']  
  pprint(list_of_UPC_number){% endhighlight %}

This is what the above code prints out:
```
{u'4060800100252': u'Pepsi',
 u'4890008100309': u'Coca Cola Coke',
 u'5449000014535': u'Sprite',
 u'8435185944009': u'Dr Pepper',
 u'8847100560094': u'Fanta Orange'}
```

Let's discuss the code line by line. 
Line 1 is simply declaring an array called `list_of_data` containing all 5 soft drinks' JSON data. 
Line 2 is declaring a dictionary called `list_of_UPC_number`. 
Line 3 is calling a for loop which iterates each `items` (in this case, soft drink) in `array_of_data`. 

Line 4 may look weird at first, but it is not. It is easy to understand if you can see how this line is structure first. We know that `list_of_UPC_number` is a dictionary since we declared it as a dictionary. If you remember correctly, one way to assign a key/value pair into the dictionary is: list_of_UPC_number[`key`] = `value`.

As we mentioned already, `items` are the elements in `array_of_data`; hence, `items` are the JSON data of the soft drinks that are structured in a Python dictionary. With this knowledge, you may now know how this line works. 
`items[u'code']` is a value in the dictionary with `u'code'` as the key, which is the UPC number. 
`items[u'product'][u'product_name']` is calling out a value in a dictionary within a dictionary.  `items` is a dictionary with one of its key `u'product'` that is paired with a value as a dictionary. Now, `u'product'` is a dictionary with one of its key `u'product_name'` that is paired with a value as the product name (or the name of the soft drink). 

Therefore, we can see that `list_of_UPC_number[items[u'code']] = items[u'product'][u'product_name']` is only assigning a key/value pair into the dictionary with the key as the UPC number of the soft drink and the value as the name of the same soft drink. 

Line 5 prints out the dictionary with the corresponding key and value pair. 
 


