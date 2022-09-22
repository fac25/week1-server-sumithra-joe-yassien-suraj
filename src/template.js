function content(posts, errors = {}) {
  const postList = posts.map((post) => {
    return `<div>
        <h2>${sanitisation(post.name)}</h2>
        <p>${sanitisation(post.comments)}</p>
        <p>${sanitisation(post.date)}</p>
        </div>`;
  });

  const content = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Homepage Foodfight</title>

    <!-- To help wih seo-->
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="Yassien, Joe, Suraj, Sumithra" />
  </head>
  <body>
    <header>
      <h1>Food Opinions!</h1>
    </header>

    <main>
      <!-- Submit new comments goes here -->
      <section>
        <form method="POST">
          <label for="username">Username</label>
          <input id="username" name="username" placeholder="Name" />
          ${validation(errors.name)}
          <br />
          <br />
          <label for="opinion"></label>
          <textarea id="opinion" name="opinion"></textarea>
          ${validation(errors.comments)}

          <button type="submit">Post</button>
        </form>
      </section>

      <!-- User comments go here -->
      <section>
        <ul>
          ${postList.join("")}
        </ul>
      </section>
    </main>
  </body>
</html> `;

  return content;
}

function validation(errorMsg) {
  if (errorMsg) {
    return `<p style = "color: red"> ${errorMsg}</p>`;
  } else {
    return "";
  }
}

function sanitisation(string) {
  return string.replaceAll("<", "&lt;");
}

module.exports = { content };
