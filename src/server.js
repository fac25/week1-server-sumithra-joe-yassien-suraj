
const express = require("express");

const server = express();

module.exports = server;

const posts = [{
    name: "Zack",
    comments: "Pizza's are the best!",
    date: "19/12/2022"
  },
    {
        name: "Anna",
        comments: "Donuts are yummy!",
        date: "22/12/2022"
    }];

server.get("/", (request, response) => {

    const postList = posts.map(post => {
        return `<div>
        <h2>${post.name}</h2>
        <p>${post.comments}</p>
        <p>${post.date}</p>
        </div>`
      })


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
    <h1> Food Opinions! </h1>
    </header>

    <main>

    <!-- Submit new comments goes here -->
    <section>
        <form method="POST">
             <label for="username">Username</label>
             <input id="username" name="username" placeholder="Name">
             <br>

             <br>
             <label for="opinion"></label>
             <textarea id="opinion" name="opinion"></textarea>

            <button type="submit">Post</button>
        </form>
     </section>



    <!-- User comments go here -->
    <section>
        <ul>
          ${postList}
        </ul>
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
  const name = request.body.username;
  const comments = request.body.opinion;

  const date = new Date().toLocaleString("en-GB");

  posts.push({name, comments, date})
  response.redirect("/");
});


