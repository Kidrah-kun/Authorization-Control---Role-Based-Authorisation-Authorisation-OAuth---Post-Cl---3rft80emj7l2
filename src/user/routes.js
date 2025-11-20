const express = require("express");

const { getVisitor, getEditor, getAdmin } = require("./controllers");

const { getUserValidator } = require("./middlewares");
const { verifyToken } = require("../shared/middlewares/verifyToken");

const userRoutes = express.Router();

userRoutes.get("/visitor/:id", verifyToken, getUserValidator, getVisitor);

userRoutes.get(
  "/editor/:id",
  verifyToken,
  getUserValidator,
  getEditor
);

userRoutes.get(
  "/admin/:id",
  verifyToken,
  getUserValidator,
  getAdmin
);

module.exports = { userRoutes };
