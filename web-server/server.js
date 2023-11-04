import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

const authHandler = (req, res, next) => {
  console.log("authHandler");
  next();
};
const handler1 = (req, res, next) => {
  console.log("handler1");
  next();
};
const handler2 = (req, res, next) => {
  console.log("handler2");
  res.send("Hello world");
  next();
};
app.get("/users", authHandler, handler1, handler2);

// localhost:4000
// localhost:4000/dist/xxx.css
app.use(express.static("dist"));
app.use(express.static("public"));
app.use("/static", express.static("public"));

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello world" });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
