# Eat-Da-Burger

[![Dependency Status](https://david-dm.org/jlouie10/burger.svg)](https://david-dm.org/jlouie10/burger)

Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat and then devour it.

You can find the [application here](http://burger.justinlouie.io/).

* [Express](https://expressjs.com/)
* [Express Handlebars](https://github.com/ericf/express-handlebars)
* [MySQL](https://github.com/mysqljs/mysql)

## Application

This application contains a single home view that is rendered by the burgers controller, using a GET request to list all burgers in the database. Express Handlebars is used to determine if the burger is devoured, and renders the burger element in the correct list.

Burgers can be created by ordering them in the navbar. When created, burgers in the "Devour your favorite burger" list are clickable, and devoured burgers will appear in the "Devoured" list. The burgers controller uses the following API requests to create new burgers and devour them:

### **POST /api/burgers**
Creates a new burger with a default description and image url.

### **PATCH /api/burgers/:id**
Updates the devoured flag for a burger.

Example request body (id = 1):

```
{
    "devoured": 1
}
```

Example response:

```
{
    "id": "1",
    "data": {
        "burger_name": "Old Fashioned",
        "devoured": "1",
        "description": "A classic.",
        "image_url": "./assets/images/fiveguys.jpg"
    } 
}
```

## Instructions

Install the Node Express, Express Handlebars, and MySQL packages with:

```
npm install
```

## Technologies Used

* Node.js
* JavaScript
* HTML5
* CSS
* Node packages
    * Express
    * Express Handlebars
    * MySQL
* Heroku
* MySQL
    * JawsDB