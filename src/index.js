const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { authRoutes } = require("./auth/routes");
const { userRoutes } = require("./user/routes");

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Hello World!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app };
