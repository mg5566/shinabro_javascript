// const http = require("http");
import http from "http";

const hostname = "localhost";
const port = 4000;

const server = http.createServer((req, res) => {
  console.log("req", {
    url: req.url,
    method: req.method,
    Headers: req.headers,
  });
  if (req.url === "/users" && req.method === "GET") {
    // GET /users
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ users: [{ name: "John" }] }));
  } else if (req.url === "/users" && req.method === "POST") {
    // do something
  }
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
