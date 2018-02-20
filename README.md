# Protractor the Sword

A simple shell project that you can aim directly at your Angular/AngularJS web app foes and vanquish bugs.

I used a silly name because it's not that big of an example, but I wanted it to sound quite dramatic. It's a good-enough sample to
get started without lots of bells and whistles.

## Pre-requisites

* A running project with AngularJS or Angular on a happy little port (like `localhost:3000`)
* NodeJS running at least LTS (9.x would be best)

## Setup

```
npm install
```

## File locations

* Tests are located in `test/spec`
* Configuration for Protractor is in `protractor.conf.js`
* The source of the app you're testing is purposely not here... Consider it a black box

2. Set up webdriver manager with

```
npm run webdriver
```

## To run

1.  Fire up your web application in another CLI
2.  Fire up the testing engine with 

```
    cd _this_directory_
    npm start
```

## Other tasks

* To debug your tests, use `npm run debug` and browse to `chrome://inspect/#devices`
* To watch your tests, re-running if anything is saved, go ahead and run `npm run watch` 

## Resources

This is a support project for a blog entry, [https://chariotsolutions.com/blog/post/simplify-protractor-web-tests-with-async-and-await/](Simplify Protractor Web Tests with Async and Await)
