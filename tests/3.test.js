const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

//the tests for the non-default posts

test("/ route responds to POST requests", async () => {
    const app = server.listen(9876);
  
    const response = await fetch("http://localhost:9876", {
      method: "POST",
      body: "username=Sumithra&opinion=Tea is evil",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
    app.close();
  
    assert.equal(response.status, 200);
    const body = await response.text();

    assert.match(body, /Sumithra/);
    assert.match(body, /Tea is evil/);
});

