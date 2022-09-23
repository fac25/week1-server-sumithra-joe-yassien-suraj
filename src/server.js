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
  let emptyFormValues = {
    name: "",
    comments: "",
  };
  const body = content(posts, {}, emptyFormValues);
  response.send(body);
});

const bodyParser = express.urlencoded();

// Handles form submission
server.post("/", bodyParser, (request, response) => {
  const name = request.body.username;
  const comments = request.body.opinion;

  let formValues = { name, comments };

  let errors = {};

  if (name === "") {
    errors.name = "Please enter your name.";
  }

  if (comments === "") {
    errors.comments = "Please enter a comment.";
  }

  if (Object.keys(errors).length) {
    response.status(400).send(content(posts, errors, formValues));
  } else {
    const date = new Date().toLocaleDateString("en-GB");
    posts.unshift({ name, comments, date });
    response.redirect("/");
  }
});

// Missing Routes
server.use((request, response) => {
  response.status(404).send(`<h1>Not found</h1>`);
});

module.exports = server;
