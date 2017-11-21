---
topic: "JSON in Python"
desc: "Practicing with JSON in Python"
indent: true
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

For example, the product that I found is "Greek Non-Fat Yogurt, Strawberry On The Bottom - Chobani". Since the UPC number of this product is '894700010045', the URL address for this product is: 
<https://world.openfoodfacts.org/product/0894700010045/greek-non-fat-yogurt-strawberry-on-the-bottom-chobani>

The extra '0' in front of the UPC number is a leading zero, which is needed to format the URL and is added automatically. You do not need to worry about how the leading zero works, but now make sure you keep note on this 13 digits number. 

Now you want to see the JSON format of this product's description. In order to get the JSON format, you can simply copy the format of the following URL. For this example, I will be using the UPC number of "Greek Non-Fat Yogurt, Strawberry On The Bottom - Chobani": 
https://world.openfoodfacts.org/api/v0/product/0894700010045.json

You can confirm that Open Food Facts data and the JSON format are describing the same product by checking to see if the UPC numbers are the same. 

# Step 2b: Getting a More Readable JSON format

You may skip this step if you have already downloaded a JSON formatting extension for your particular browser. 

If not downloaded, then you may look surprised on how messy the JSON page looks at the moment. This is because the JSON data is currently all in one line, like this: 

'''
{"code":"4890008100309","status_verbose":"product found","status":1,"product":{"entry_dates_tags":["2015-12-30","2015-12","2015"],"nutrition_score_warning_no_fruits_vegetables_nuts":1,"origins":"","unknown_nutrients_tags":[],"ingredients_text":"","states":"en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:characteristics-completed, en:categories-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded","update_key":"nutriscore-20171111","fruits-vegetables-nuts_100g_estimate":0,"ingredients_that_may_be_from_palm_oil_tags":[],"languages_tags":["en:english","en:1"],"nutrition_score_debug":" -- in beverages category - a_points_fr_beverage: 6 (energy) + 0 (sat_fat) + 8 (sugars) + 0 (sodium) = 14 -  -- energy 0 + sat-fat 0 + fr-sat-fat-for-fats 0 + sugars 2 + sodium 0 - fruits 0% 0 - fiber 0 - proteins 0 -- fsa 2 -- fr 14","emb_codes":"","creator":"momowong","languages_hierarchy":["en:english"],"countries_tags":["en:hong-kong"],"codes_tags":["code-13","4890008100309","489000810030x","48900081003xx","4890008100xxx","489000810xxxx","48900081xxxxx","4890008xxxxxx","489000xxxxxxx","48900xxxxxxxx","4890xxxxxxxxx","489xxxxxxxxxx","48xxxxxxxxxxx","4xxxxxxxxxxxx"],"ingredients_ids_debug":[],"emb_codes_orig":"","nutrient_levels_tags":["en:fat-in-low-quantity","en:saturated-fat-in-low-quantity","en:sugars-in-high-quantity","en:salt-in-low-quantity"],"stores_tags":["supermarket"],"informers_tags":["momowong","tacite"],"product_name":"Coca Cola Coke","labels_prev_hierarchy":[],"last_image_dates_tags":["2015-12-30","2015-12","2015"],"labels":"","traces":"","allergens_hierarchy":[],"packaging_tags":["canned"],"image_front_thumb_url":"https://static.openfoodfacts.org/images/products/489/000/810/0309/front_en.4.100.jpg","pnns_groups_1_tags":["beverages"],
'''

