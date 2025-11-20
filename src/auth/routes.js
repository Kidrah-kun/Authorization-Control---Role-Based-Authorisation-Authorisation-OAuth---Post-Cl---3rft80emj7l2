const express = require("express");
const { login, signup } = require("./controllers");
const { signupValidator, loginValidator } = require("./middlewares");

const authRoutes = express.Router();

authRoutes.post("/login", loginValidator, login);
authRoutes.post("/signup", signupValidator, signup);

module.exports = { authRoutes };
