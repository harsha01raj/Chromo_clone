const express = require("express");
const User = require("../models/user_models");
const UserRouter = express.Router();

// POST /login-register
UserRouter.post("/login-register", async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }
    const user = User({ phone });
    await user.save();
    res.status(200).json({ message: "Successfully login", user });
  } catch (error) {
    console.error("Error in /login-register:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = UserRouter;
