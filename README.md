# Week 1: Server Project Microblogging

### By: Sumithra, Joe, Yassien, Suraj

On our microblogging website allows the user to make comments and read the comments of other users.

You can find our site hosted on [Heroku](https://week1-server-yssj.herokuapp.com/)

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the server.  


This uses the `nodemon` library to auto-restart the server when you save changes.

## Test

Our test folder contains three tests.

- [x] Test 1 Tests for missing routes.
- [x] Test 2 Tests for user messages displayed correctly
- [x] Test 3 Tests for home route responds to post requests

To run:

`npm run test:1`

`npm run test:2`

`npm run test:3`

## Users Stories

- [x] As an opinionated person, I want to: post my thoughts so others can read them

- [x] As a bored person, I want to: read what other people have posted

## Stretch

- [ ] As an impulsive person, I want to: delete my posts so no one can see them anymore

## Acceptance Criteria

- [x] Deployed to Heroku
- [x] A page with a form to submit posts, and a page showing all posts
- [x] No .html files (all HTML responses should be created dynamically within Node)
- [x] No client-side JavaScript (all logic should happen on the server)
- [x] All static assets served correctly (CSS, favicon etc)
- [x] Tests for each server route
- [x] A responsive, mobile-first design
- [x] Ensure your app is accessible to as many different users as possible

## Snapshot

![image](https://user-images.githubusercontent.com/90449646/191792233-9b840164-9ce0-4c9d-a100-cf1f334f92ed.png)

