---
topic: "MongoDB: MLab"
desc: "A cloud service for hosting MongoDB databases"
indent: true
prereqs:
   - MongoDB
   - JSON
---

# MongoDB on mLab

MongoDB is a particular implementation of a NoSQL database.   There are multiple hosting providers that offer MongoDB implementations "in the cloud" as a service.

The particular one we'll be using is called mLab (<https://www.mlab.com>.  We are using mLab because:

* there is a free tier
* using the free tier does not require entering a credit card

Note that the free tier does have restrictions--you'll need to observe those in order to avoid having to enter a credit card.

# Use mLab.com *directly*, not via the Heroku mLab add-on

Note that we *NOT* using mLab MongoDB Add-On for Heroku&mdash;instead, we are using mLab directly through its own console at <https://www.mlab.com>. 

# Wait, why aren't we using the mLab add-on.

Although it is slightly more convenient to use the Heroku mLab add-on, that add-on requires entering a credit card into Heroku (even though it is free).      What using the Heroku add-on buys you is that with one click, you can:

* Automatically create the database
* Automatically fill in the five parts of the configuration info for the database directly into Heroku's configuration variables
     * For the record, those are: (host, port, database name, database username, database password) 

When you use mLab directly, you have to do those steps manually.  Fortunately, that isn't very difficult.  It's just slightly tedious, but you typically only have to do it once per application, and then you never have to worry about it again (at least not for that app.)

# As an aside, what *is* free on Heroku?

In fact, the only free services on Heroku that do not require entering a credit card are:

* Up to five running applications (but no more than that)
* The Heroku Postgres add-on (which is for an SQL-based database)
    * We certainly could use Postgres, but its a bit more complicated.
* The Heroku Connect add-on 
    (which is for integration with Salesforce.com, something not of particular interest to us in SPIS.)


# `Flask-PyMongo` Python Module 

There is a Python module called [Flask-PyMongo](http://flask-pymongo.readthedocs.io/en/latest/) that we can install with `pip install` to make working with MongoDB easier.

To install it on ACMS, use:

```
pip install --user Flask-PyMongo
```

on Windows or Mac, just:

```
pip install Flask-PyMongo
```

You'll also need to make sure that you add these lines to the `requirements.txt` file for any webapp that you want to 
run on Heroku with MongoDB:

```
Flask-PyMongo==0.4.1
pymongo==3.3.0
```

# Getting Started

You'll first need to create an Mlab account.

1.  Go to mlab.com and create an account there.
2.  Then, to create a new database, click where it says MongoDB Deployment, Create New
3.  You then have to choose a provider and a plan.  Choose a plan that is "free" (e.g. right now, that's the Sandbox plan.)  (As of right now, it appears that it doesn't matter whether you choose Amazon, Google, or Microsoft as the cloud provider, so choose any one you like, but the directions below assume that you stuck with the default, which is Amazon.)
4.  When you click on "Continue", you'll be asked to choose a region.  Choose US-East, and click continue.
5.  You are then asked to choose a database name.  Choose something that make sense for your application.  For example, if your database is storing information about cars, call it `carsdb` or just `cars`.   If you don't have an application in mind, you can just use `testdb`.  Then click continue.
6.  Then review the details and "submit order".






# References

* <http://blog.dwyer.co.za/2013/10/a-basic-web-app-using-flask-and-mongodb.html>
* <https://mlab.com>
* MongoDB Collection operations from pymongo module: <https://api.mongodb.com/python/current/api/pymongo/collection.html#pymongo.collection.Collection>
