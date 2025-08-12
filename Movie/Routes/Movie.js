const express = require("express");
const router = express.Router();
const uploads = require("../middleware/uploads");

const {
  getMovies,
  showAddMovieForm,
  addNewMovie,
  showEditMovieForm,
  updateMovie,
  deleteMovie
} = require("../controller/Movie");

// List all movies
router.get("/", getMovies);

// Add movie form
router.get("/add", showAddMovieForm);

// Handle adding a new movie
router.post("/add", uploads.single("posterImage"), addNewMovie);

// Edit movie
router.get("/edit/:id", showEditMovieForm);
router.post("/edit/:id", uploads.single("posterImage"), updateMovie);

// Delete movie
router.post("/delete/:id", deleteMovie);

module.exports = router;
