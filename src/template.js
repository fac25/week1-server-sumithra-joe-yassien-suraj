function content(posts, errors = {}) {
  const postList = posts.map((post) => {
    return `<div class="plate">
    <span class="inner_plate">
    <div>
        <h2>${sanitisation(post.name)}</h2>
        <p>${sanitisation(post.comments)}</p>
        <p>${sanitisation(post.date)}</p>
        </div>
        </span>
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
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  <body>
    

    <main>
      <!-- Submit new comments goes here -->
      <section id="form-container">
      <header>
        <h1 class="center width-sm"> Food Opinions! </h1>
      </header>

      <form method="POST" class="center width-sm">
      <label class="sr-only" for="username">Username</label>
          <input id="username" name="username" placeholder="Name" />
          ${validation(errors.name)}
          <br />
          <br />
          <label for="opinion"></label>
          <textarea id="opinion" name="opinion"></textarea><br><br>
          ${validation(errors.comments)}

          <button type="submit">Serve up your opinion!</button>
        </form>
      </section>

      <!-- User comments go here -->
      <div id="table-container">
        <div class="table-background">
          <section class="center width-lg">
          <ul class="grid">
              ${postList.join("")}
          
        </ul>
      </section>
      </div>
    </div>
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
