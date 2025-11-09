// App/controllers/authController.js
const bcrypt = require("bcryptjs");
const User = require("../models/user_model");

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role, createdBy } = req.body;

    // Basic validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Role-based restriction: if request contains createdBy, validate it.
    // createdBy is optional for self-signup (you may restrict as needed).
    if (role === "librarian" && createdBy && createdBy !== "admin") {
      return res.status(403).json({ message: "Only admin can create librarian." });
    }
    if (role === "student" && createdBy && !["admin", "librarian"].includes(createdBy)) {
      return res.status(403).json({ message: "Only admin or librarian can create student." });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({
      message: `${role} registered successfully!`,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
    });
  } catch (err) {
    console.error("signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    // Optionally create JWT here. For now we return user info including role.
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ message: "Login error", error: err.message });
  }
};
