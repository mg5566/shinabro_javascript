const fs = require("fs");

fs.mkdirSync("dist");
fs.writeFileSync(
  "dist/index.html",
  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>shinabro javascript</title>
    </head>
    <body>
      <h1>Hello Kangaroo world</h1>
      <p>I am Mike</p>
    </body>
  </html>
  `
);
