const express = require("express");
const router = express.Router();
const { getBooks, addNewBook, uploads, deleteBook } = require("../controller/book");

router.get("/", getBooks);
router.post("/", uploads.single("coverImage"), addNewBook);
router.post("/delete/:id", deleteBook); // ✅ Add this line

module.exports = router;
