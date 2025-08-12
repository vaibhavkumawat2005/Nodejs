const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/authentication");

router.get("/signup", authcontroller.registerUser);
router.post("/signup", authcontroller.postSignUp);

router.get("/login", authcontroller.LoginUser);
router.post("/login", authcontroller.postLogin);

// Logout route
router.get("/logout", authcontroller.logoutUser);

module.exports = router;
