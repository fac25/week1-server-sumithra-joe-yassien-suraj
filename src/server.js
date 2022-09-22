
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

    
// CSS
const staticHandler = express.static("public");
server.use(staticHandler);


server.get("/", (request, response) => {

    const postList = posts.map(post => {
        return `
        <div class="plate">
  <span class="inner_plate">
    <div>
      <h2>${post.name}</h2>
      <p>${post.comments}</p>
      <p>${post.date}</p>
    </div>
  </span>
</div>`
        
    }).join("");


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
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>

    
    <main>
    
    <!-- Submit new comments goes here -->

    <section id="form-container">
    <header>
    <h1 class="center width-sm"> Food Opinions! </h1>
    </header>

        <form method="POST" class="center width-sm">
             <label class="sr-only" for="username">Username</label>
             <input id="username" name="username" placeholder="Name">
             <br>

             <br>
             <label for="opinion"></label>
             <textarea id="opinion" name="opinion"></textarea><br><br>

            <button type="submit">Serve up your opinion!</button>
        </form>
     </section>

    <!-- User comments go here -->

    <div id="table-container">

    <div class="table-background">
    
    <section class="center width-lg">
    <ul class="grid">
    ${postList}
    </ul>
    </section>
    </div>
    </div>
    
    
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





// HELLO