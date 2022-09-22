const express = require("express");
const { content } = require("./template.js");

const server = express();

// CSS
const staticHandler = express.static("public");
server.use(staticHandler);

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

server.get("/", (request, response) => {
  const info = content(posts);
  response.send(info);
});

// middlewear

const bodyParser = express.urlencoded();

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

module.exports = server;
