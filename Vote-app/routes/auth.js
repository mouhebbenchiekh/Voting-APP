import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/users.js";
const router = express.Router();

/* POST login. */
router.post("/login", async function (req, res) {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // generate a signed son web token with the contents of user object and return it in the response
  const token = jwt.sign(user.toJSON(), "your_jwt_secret");
  return res.json({ user, token });
});

router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({
      message: "email already exists",
    });
  }
  try {
    user = await new User(req.body);
    console.log({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
  user = await user.save();
  console.log({ newuser: user });
  const token = jwt.sign(user.toJSON(), "your_jwt_secret");
  return res.json({ user, token });
});

export default router;
