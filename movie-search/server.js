// const express = require("express");
import express from "express";
import cors from "cors";
import movies from "./Movie.json" assert { type: "json" };
import fs from "fs";
import { getInitialHTML } from "./dist/index.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, file) => {
    res.send(file.toString().replace("<!--app-->", getInitialHTML["/"]));
  });
});

function getFilteredMovies(query) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });
}

app.get("/search", (req, res) => {
  const filteredMovies = getFilteredMovies(req.query.query);
  fs.readFile("index.html", (err, file) => {
    res.send(
      file.toString().replace(
        "<!--app-->",
        getInitialHTML["/search"]({
          movies: filteredMovies,
        })
      )
    );
  });
});

app.get("/api/search", (req, res) => {
  res.json(getFilteredMovies(req.query.query));
  // const filteredMovies = movies.filter((movie) => {
  //   return movie.title.toLowerCase().includes(req.query.query.toLowerCase());
  // });

  // res.json(filteredMovies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
