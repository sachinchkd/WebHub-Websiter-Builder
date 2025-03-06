const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const users = []; // Dummy array for storing users (Replace with DB)

app.post("/register", (req, res) => {
  const { user_email, user_password } = req.body;
  if (users.find((u) => u.user_email === user_email)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ user_email, user_password });
  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
  const { user_email, user_password } = req.body;
  const user = users.find(
    (u) => u.user_email === user_email && u.user_password === user_password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
