const Book = require("../models/book");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 📁 Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.resolve("public/uploads");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const uploads = multer({ storage, fileFilter });

// 📘 Get books
const getBooks = (req, res) => {
  res.status(200).json({ message: "hello" });
};

// ➕ Add new book
const addNewBook = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, author, description, price, publishedDate } = req.body;
    const coverImage = req.file ? req.file.filename : null;

    if (!title || !author || !description || !price || !publishedDate) {
      return res.render("addBook", { error: "All fields are required" });
    }

    const book = await Book.findOne({ title });
    if (book) {
      return res.render("addBook", { error: "Book already exists" });
    }

    await Book.create({
      title,
      author,
      description,
      coverImage,
      price,
      publishedDate,
    });

    res.redirect("/");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).render("addBook", { error: "Server error" });
  }
};

const deleteBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
  
      if (!book) {
        return res.status(404).send("Book not found");
      }
  
      // Delete image from file system
      if (book.coverImage) {
        const filePath = path.resolve("public/uploads", book.coverImage);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
  
      await Book.findByIdAndDelete(req.params.id);
      res.redirect("/");
    } catch (err) {
      console.error("Delete error:", err);
      res.status(500).send("Error deleting book");
    }
  };

module.exports = { getBooks, addNewBook, uploads,deleteBook  };
