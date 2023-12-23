// const express = require("express");
import express from "express";
import cors from "cors";
import movies from "./Movie.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.get("/search", (req, res) => {
  console.log("query", req.query);
  console.log("movie length", movies.length);

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(req.query.query.toLowerCase());
  });

  res.json(filteredMovies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
