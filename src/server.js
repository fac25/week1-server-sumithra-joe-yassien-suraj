//Display posts from other users

// 1. Create object of user / comments

// 2. create a server.get to the home route "/" to display user comments on homepage

// 3.

// Global Variables

const express = require("express");

const server = express();

module.exports = server;

//const userComments =  {{}}

server.get("/", (request, response) => {
  response.send(`
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Homepage Foodfight</title>

        <!-- To help wih seo-->
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Yassien, Joe, Suraj, Sumithra">
    </head>

    <header>
    <h1> Food Opinions </h1>
    </header>

    <main>

    <!-- Submit new comments goes here -->
    <section>
            <form></form>
     </section>



    <!-- User comments go here -->
    <section>
    
    </section>
    
    </main>

    <footer></footer>

    <body>
  

     
    </body>
</html>

    `);
});

// middlewear

const bodyParser = express.urlencoded();

server.post("/", bodyParser, (request, response) => {
  // const name = request.body.name;
  // const comments = request.body.comment;

  response.redirect("/");
});
