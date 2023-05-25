const express = require("express");
const loginRouter = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong credentials");

    const isPasswordMatched = req.body.password === user.password;
    !isPasswordMatched && res.status(400).json("wrong credentials");

    const token = jwt.sign({ id: user._id }, process.env.PWD_SECRET, {
      expiresIn: "3d",
    });

    const { password, ...rest } = user._doc;

    res.status(200).json({ ...rest, token });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = loginRouter;
