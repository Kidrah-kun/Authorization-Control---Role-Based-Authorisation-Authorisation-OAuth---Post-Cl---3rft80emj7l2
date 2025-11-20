const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { findUserByEmail, createUser } = require("../user/services");

const handleLogin = async (credentials) => {
  const { email, password } = credentials;

  const user = await findUserByEmail(email);

  if (!user) {
    const error = new Error("User does not exist");
    error.statusCode = 404;
    throw error;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    const error = new Error("Incorrect password");
    error.statusCode = 401;
    throw error;
  }
  const payload = { id: user.id, access: user.access };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET);
  return { user, accessToken };
};

const handleSignup = async (credentials) => {
  const { email, password, fullname, access } = credentials;
  const userExists = !!(await findUserByEmail(email));
  if (userExists) {
    const error = new Error("User already exists");
    error.statusCode = 409;
    throw error;
  }
  const saltRounds = 4;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const user = await createUser({ fullname, email, password: hash, access });
  return user;
};

module.exports = { handleLogin, handleSignup };
