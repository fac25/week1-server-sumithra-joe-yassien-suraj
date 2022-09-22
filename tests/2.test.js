const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

//the tests for the default posts

test("home route has the 'Zack' opinion", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    body,
    /(<h2>Zack<\/h2>)/i,
    `Expected HTML to include default template posts with name Zack but received:\n${body}\n`
  );

  assert.match(
    body,
    /(<p>Pizza's are the best!<\/p>)/i,
    `Expected HTML to include default template posts with pizza comment but received:\n${body}\n`
  );

  assert.match(
    body,
    /(<p>19\/12\/2022<\/p>)/i,
    `Expected HTML to include default template posts with date 19/12/2022 but received:\n${body}\n`
  );
});

test("home route has the 'Anna' opinion", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    body,
    /(<h2>Anna<\/h2>)/i,
    `Expected HTML to include default template posts with name Anna but received:\n${body}\n`
  );

  assert.match(
    body,
    /(<p>Donuts are yummy!<\/p>)/i,
    `Expected HTML to include default template posts with donut comment but received:\n${body}\n`
  );

  assert.match(
    body,
    /(<p>22\/12\/2022<\/p>)/i,
    `Expected HTML to include default template posts with date 22/12/2022 but received:\n${body}\n`
  );
});

// Missing Routes
test("Missing routes", async () => {
  const app = server.listen(3000);
  const response = await fetch("http://localhost:3000/asdf");
  app.close();

  assert.equal(response.status, 404);
  const body = await response.text();
  assert.match(body, /Not found/);
});
