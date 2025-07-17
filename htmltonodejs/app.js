const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Sample in-memory movie list
let movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { movies });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { title, year } = req.body;
  if (title && year) {
    movies.push({ title, year });
  }
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  movies.splice(req.params.index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
