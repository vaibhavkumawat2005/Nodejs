const express = require("express")

const router = express.Router()

const Book = require("../models/book")

router.get("/" , async (req,res) => {
    const book = await Book.find()
    res.render("home", { book : book})
})

router.get("/addBook" , (req,res) => {
    res.render("addBook")
})

module.exports = router
