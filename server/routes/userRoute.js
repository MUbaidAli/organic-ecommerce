const express = require("express");
const {
  login,
  register,
  logout,
  me,
} = require("../controllers/userController");
const { authUser } = require("../middlewares/authMiddleware");
const route = express.Router();

route.post("/login", login);
route.post("/register", register);
route.post("/logout", logout);
route.get("/me", authUser, me);

module.exports = route;
