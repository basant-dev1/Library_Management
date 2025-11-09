const express = require("express");
const User = require("../models/user_model");
const router = express.Router();

// ✅ Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.status(200).json({
    message: "Login successful",
    role: user.role,
    name: user.name,
  });
});

module.exports = router;
