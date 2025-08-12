const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connectDb = require("./config/db");
connectDb();

// ✅ Session middleware (must come before routes)
app.use(session({
  secret: "your-secret-key", // change this to something strong
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const authRoutes = require("./Routes/authentication");
const movieRoutes = require("./Routes/Movie");

app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);

// Default route → redirect to login
app.get("/", (req, res) => {
  res.redirect("/auth/login");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
