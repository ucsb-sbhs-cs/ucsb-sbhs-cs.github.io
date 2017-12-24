---
name: "JSON in Python"
desc: "Practicing with JSON in Python"
---

In this programming exercise, you will be practicing how to manipulate JSON data in Python. The purpose of this exercise is for you to use real world data while practicing Python Dictionaries. 

# References

As you work through the steps below, you may find it helpful to refer to: 
- [JSON](https://ucsb-sbhs-cs.github.io/topics/json)
- [Python Dictionaries](https://ucsb-sbhs-cs.github.io/topics/python_dictionaries)


# Step 1: Find a Product in Open Food Facts

First, go to the [Open Food Facts](https://world.openfoodfacts.org/) link. On the left side of the page, you can add an UPC number of any food/drink product around you. UTC number is the 12 digits number under the barcode of the product you choose. 
Note that the site may not have the product you entered or may not contain much information of that product. If this is the case, then simply grab some other products around you and try enter those UPC number. 

Goal is to find 3 distict UPC numbers. 

# Step 2a: View the JSON format of your Products

When you find your 3 distinct products in the Open Food Facts site, look at the URL address for each product. 

For example, the product that I found is "Greek Non-Fat Yogurt, Strawberry On The Bottom - Chobani". Since the UPC number of this product is '894700010045', I would enter this URL address for this product: 
<https://world.openfoodfacts.org/product/0894700010045>

The extra '0' in front of the UPC number is a leading zero, which is needed to format the URL and is added automatically. You do not need to worry about how the leading zero works, but now make sure you keep note on this 13 digits number. 

Now you want to see the JSON format of this product's description. In order to get the JSON format, you can simply copy the format of the following URL. For this example, I will be using the UPC number of "Greek Non-Fat Yogurt, Strawberry On The Bottom - Chobani": 
<https://world.openfoodfacts.org/api/v0/product/0894700010045.json>

You can confirm that Open Food Facts data and the JSON format are describing the same product by checking to see if the UPC numbers are the same. 

# Step 2b: Getting a More Readable JSON format

You may skip this step if you have already downloaded a JSON formatting extension for your particular browser. 

If not downloaded, then you may look surprised on how messy the JSON page looks at the moment. This is because the JSON data is currently all in one line, like this: 

{% highlight JSON linenos %}
{"code":"4890008100309","status_verbose":"product found","status":1,"product":{"entry_dates_tags":["2015-12-30","2015-12","2015"],"nutrition_score_warning_no_fruits_vegetables_nuts":1,"origins":"","unknown_nutrients_tags":[],"ingredients_text":"","states":"en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:characteristics-completed, en:categories-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded","update_key":"nutriscore-20171111","fruits-vegetables-nuts_100g_estimate":0,"ingredients_that_may_be_from_palm_oil_tags":[],"languages_tags":["en:english","en:1"],"nutrition_score_debug":" -- in beverages category - a_points_fr_beverage: 6 (energy) + 0 (sat_fat) + 8 (sugars) + 0 (sodium) = 14 -  -- energy 0 + sat-fat 0 + fr-sat-fat-for-fats 0 + sugars 2 + sodium 0 - fruits 0% 0 - fiber 0 - proteins 0 -- fsa 2 -- fr 14","emb_codes":"","creator":"momowong","languages_hierarchy":["en:english"],"countries_tags":["en:hong-kong"],"codes_tags":["code-13","4890008100309","489000810030x","48900081003xx","4890008100xxx","489000810xxxx","48900081xxxxx","4890008xxxxxx","489000xxxxxxx","48900xxxxxxxx","4890xxxxxxxxx","489xxxxxxxxxx","48xxxxxxxxxxx","4xxxxxxxxxxxx"],"ingredients_ids_debug":[],"emb_codes_orig":"","nutrient_levels_tags":["en:fat-in-low-quantity","en:saturated-fat-in-low-quantity","en:sugars-in-high-quantity","en:salt-in-low-quantity"],"stores_tags":["supermarket"],"informers_tags":["momowong","tacite"],"product_name":"Coca Cola Coke","labels_prev_hierarchy":[],"last_image_dates_tags":["2015-12-30","2015-12","2015"],"labels":"","traces":"","allergens_hierarchy":[],"packaging_tags":["canned"],"image_front_thumb_url":"https://static.openfoodfacts.org/images/products/489/000/810/0309/front_en.4.100.jpg","pnns_groups_1_tags":["beverages"], 
...
{% endhighlight %}

No worries! Luckly, there are extensions such that this JSON data can be formatted in a more readable format. 
For example, Google Chrome has an extension called "JSON formatter". By having this extension, the above JSON data can now be viewed like this: 

{% highlight JSON linenos %}
{
  "status_verbose": "product found",
  "status": 1,
  "product": {
      "additives_n": 2,
      "product_name": "Greek Non-Fat Yogurt, Strawberry On The Bottom",
      "informers_tags": [
          "openfoodfacts-contributors",
          "usda-ndb-import"
      ],
      "countries_tags": [
          "en:united-states"
      ],
      "languages_hierarchy": [
          "en:english"
      ],
      "creator": "usda-ndb-import",
      "nutrient_levels_tags": [],
      "ingredients_ids_debug": [
          "nonfat-yogurt",
          "cultured-pasteurized-nonfat-milk",
          "evaporated-cane-juice",
          "strawberries",
          "water",
          "pectin",
          "natural-flavors",
          "locust-bean-gum",
          "fruit-and-vegetable-juice-concentrate",
          "for-color"
     ],
     "codes_tags": [
          "code-13",
          "0894700010045",
          "089470001004x",
          "08947000100xx",
          "0894700010xxx",
          "089470001xxxx",
          "08947000xxxxx",
          "0894700xxxxxx",
          "089470xxxxxxx",
          "08947xxxxxxxx",
          "0894xxxxxxxxx",
          "089xxxxxxxxxx",
          "08xxxxxxxxxxx",
          "0xxxxxxxxxxxx"
     ],
     "countries_debug_tags": [],
{% endhighlight %}

(Note: Since the data is very large, only the beginning portion of the data is shown and the remaining parts are replaced with ... ) (You can look at the full list at this [link](https://gist.github.com/yukelele/d7b7119396d15be66dba032501697f26).)

Now that you can easily read the JSON data on the web, we can finally move along to the next step!

# Step 3: Getting the JSON Data

In order to get any information from the web, you will need to have the `Requests` library installed in your computer. 

You can follow the instruction on this site to install the `Requests` Library: [Using the Requests Library in Python](http://www.pythonforbeginners.com/requests/using-requests-in-python).

Once installed, you can now start writing your code. 

Remember the URL address that we used in <b>Step 2</b>? We will be using our URL that displays the product's JSON data. In the above example, it was this: <https://world.openfoodfacts.org/api/v0/product/0894700010045.json>. 

First, you will want to import the `Requests` Library in your code. By importing the `Requests` Library, you are now allowed to use the functionality in this library. For the purpose of this exercise, we will only be using the `get()` method, which gets the product's data from the web by passing in the corresponding URL as a string argument. Hence, your code should start off like this: 

{% highlight Python linenos %}
import requests 

yogurt_data = requests.get(
                      'https://world.openfoodfacts.org/api/v0/product/0894700010045.json')
{% endhighlight %}

Now, try adding this line `print(yogurt_data)` after line 4. Your first intuition will think that the whole JSON data of your product will print out, but you found out that the code printed out something like this:

```
<Response [200]> 
```

We can first confirm why it prints this out by checking what type of variable `yogurt_data` is. You can see the variable type by using `type()` with any variable as the argument. If you do that, you can see that the code outputs: 

```
<class 'requests.models.Response'>
```

From this output, it tells us that `yogurt_data` is currently a response object which stores the request-response from the url that we passed in when we called `request.get()`. 

In order to retrieve the data from the response object, we need to convert the raw response content into a JSON type data structure. This is acheived by using `.json()` method. However, before that, we need to make sure that we import the `json` library. Thus, your code should look something similiar to this: 

{% highlight Python linenos %}
import requests 
import json

yogurt_data = requests.get(
                      'https://world.openfoodfacts.org/api/v0/product/0894700010045.json')
yogurt_json = yogurt_data.json()
{% endhighlight %}

Now, try adding `print(yogurt_json)` into your code. What does your output show? The messy output looks very similiar to the JSON data that we have found on the web <i>without</i> the JSON formatting extension. We see a paragraph-looking output, giving difficulty to read. 

Luckily, Python has a library that can print out `yogurt_json` in a more readable format&mdash;similar to the JSON data on the web <i>with</i> the JSON formatting extension. To have a more readable output, the code needs to use `pprint()`. Thus, your code should looks like this: 

{% highlight Python linenos %}
import requests 
import json
from pprint import pprint

yogurt_data = requests.get(
                      'https://world.openfoodfacts.org/api/v0/product/0894700010045.json')
yogurt_json = yogurt_data.json()
pprint(yogurt_json)
{% endhighlight %}

With this code, you can now retrieve data from the products that you have found in the "Open Food Facts" API site. 

# Step 4: Make a Bar Graph with JSON Data

Refer to this site under the <b>More on bar charts</b> section: <https://pythonspot.com/matplotlib-bar-chart/>.

First, we will need to add `import numpy as np` and `import matplotlib.pyplot as plt` on the top of our code. With these lines, we can now use the module `numpy` and can be refer as `np` instead. (Same for `matplotlib.pyplot`.)

Note: If you get a error message like this: `ModuleNotFoundError: No module named 'numpy'`. Then all you need to do is `pip3 install numpy` to fix the error. (Same if you get this error for `matplotlib`.)

Your task is to use the 3 products that you chose and make a bar graph. 

Make sure in your graph, the product's name, the title and the axis labels are named appropriately. 

In the end, your graph should look similiar to this [image](https://gist.github.com/yukelele/f2578659aadfffe1b9ccd00906c29567).

However, for your graph, you should have 3 different products listed. Also, instead of salt and sodium, your graph should have the product nutriments of calcium, cholesterol and potassium. Make sure you check your data to see what appropriate axis to use. (Hint: you can find the nurtiments in your product data under the dictionary `product` then under the dictionary `nutriments`.)

Note: if you noticed that one of your "bar" in your graph is not appearing, then check your data what data type it is using. (Hint: remember using `type()` in <b>Step 3</b>.)
