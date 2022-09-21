const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("/ Home page has the default posts", async () => {
    const { status, body } = await request("/");
  
    assert.equal(status, 200);
    assert.match(
      body,
      /(<h2>Zack<\/h2>)/i,
      `Expected HTML to include default template posts from Anna and Zack but received:\n${body}\n`
    );
});

  
///\bZack\b.*\bAnna\b/i
  //
  // /(Zack).+(Anna)+.+(Pizza's are the best!).+(Donuts are yummy!).+(19\/12\/2022).+(22\/12\/2022)/i,