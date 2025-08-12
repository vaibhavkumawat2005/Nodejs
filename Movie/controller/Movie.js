const Movie = require("../model/Movie");
const path = require("path");
const fs = require("fs");

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).send("Server error");
  }
};

// Show add movie form
const showAddMovieForm = (req, res) => {
  res.render("movies/add", { error: null });
};

// Add new movie
const addNewMovie = async (req, res) => {
  try {
    const { title, director, description, rating, releaseDate } = req.body;
    const posterImage = req.file ? req.file.filename : null;

    if (!title || !director || !description || !rating || !releaseDate) {
      return res.render("movies/add", { error: "All fields are required" });
    }

    const existingMovie = await Movie.findOne({ title });
    if (existingMovie) {
      return res.render("movies/add", { error: "Movie already exists" });
    }

    await Movie.create({
      title,
      director,
      description,
      posterImage,
      Rating: rating,
      releaseDate,
    });

    res.redirect("/movies");
  } catch (err) {
    console.error("Error adding movie:", err);
    res.status(500).render("movies/add", { error: "Server error" });
  }
};

// Show edit movie form
const showEditMovieForm = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.render("movies/edit", { movie, error: null });
  } catch (err) {
    console.error("Error showing edit form:", err);
    res.status(500).send("Server error");
  }
};

// Update movie
const updateMovie = async (req, res) => {
  try {
    const { title, director, description, rating, releaseDate } = req.body;
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    // If new image uploaded, delete old one
    if (req.file) {
      if (movie.posterImage) {
        const oldPath = path.resolve("public/uploads", movie.posterImage);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      movie.posterImage = req.file.filename;
    }

    // Update fields
    movie.title = title;
    movie.director = director;
    movie.description = description;
    movie.Rating = rating;
    movie.releaseDate = releaseDate;

    await movie.save();
    res.redirect("/movies");
  } catch (err) {
    console.error("Error updating movie:", err);
    res.status(500).render("movies/edit", { movie: req.body, error: "Server error" });
  }
};

// Delete movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    if (movie.posterImage) {
      const filePath = path.resolve("public/uploads", movie.posterImage);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).send("Error deleting movie");
  }
};

module.exports = { 
  getMovies, 
  showAddMovieForm, 
  addNewMovie, 
  showEditMovieForm,
  updateMovie,
  deleteMovie
};
