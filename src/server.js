// Imports express fn
const express = require("express");
const { content } = require("./template.js");

const server = express();

// serve CSS and imgs to every route
const staticHandler = express.static("public");
server.use(staticHandler);

//Array of user comments with two templates
const posts = [
  {
    name: "Zack",
    comments: "Pizza's are the best!",
    date: "19/12/2022",
  },
  {
    name: "Anna",
    comments: "Donuts are yummy!",
    date: "22/12/2022",
  },
];

// Respond to home route get request
server.get("/", (request, response) => {
  const body = content(posts);
  response.send(body);
});

const bodyParser = express.urlencoded();

// Handles form submission
server.post("/", bodyParser, (request, response) => {
  const name = request.body.username;
  const comments = request.body.opinion;

  let errors = {};

  if (name === "") {
    errors.name = "Please enter your name.";
  }

  if (comments === "") {
    errors.comments = "Please enter a comment.";
  }

  if (Object.keys(errors).length) {
    response.status(400).send(content(posts, errors));
  } else {
    const date = new Date().toLocaleDateString("en-GB");
    posts.push({ name, comments, date });
    response.redirect("/");
  }
});

// Missing Routes
server.use((request, response) => {
  response.status(404).send(`<h1>Not found</h1>`);
});

module.exports = server;
