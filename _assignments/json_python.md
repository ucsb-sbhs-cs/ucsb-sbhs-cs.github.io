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

# Step 2: View the JSON format of your Products

When you find your 3 distinct products in the Open Food Facts site, look at the URL address for each product. 

For example, the product that I found is "Greek Non-Fat Yogurt, Strawberry On The Bottom - Chobani". Since the UPC number of this product is '894700010045', the URL address for this product is: 
<https://world.openfoodfacts.org/product/0894700010045/greek-non-fat-yogurt-strawberry-on-the-bottom-chobani>

The extra '0' in front of the UPC number is a leading zero, which is needed to format the URL and is added automatically. 
