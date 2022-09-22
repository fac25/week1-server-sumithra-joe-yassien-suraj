const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

// Missing Routes
test("Missing routes", async () => {
  const app = server.listen(4563);
  const response = await fetch("http://localhost:4563/asdf");
  app.close();

  assert.equal(response.status, 404);
  const body = await response.text();
  assert.match(body, /Not found/);
});
