const User = require("../model/authentication");
const bcrypt = require("bcrypt");

exports.registerUser = (req, res) => {
  res.render("SignUp", { error: null });
};

exports.postSignUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.render("SignUp", { error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("SignUp", { error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.redirect("/auth/login");
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).render("SignUp", { error: "Server error" });
  }
};

exports.LoginUser = (req, res) => {
  res.render("Login", { error: null });
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.render("Login", { error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("Login", { error: "Invalid email or password" });
    }

    // Store user session
    req.session.userId = user._id;
    res.redirect("/movies");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).render("Login", { error: "Server error" });
  }
};

// ✅ Logout user
exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.redirect("/movies");
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    res.redirect("/auth/login"); // Redirect to login
  });
};
