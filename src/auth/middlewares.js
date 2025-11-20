const signupValidator = (req, res, next) => {
  const { email, password, fullname, access } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ err: "Valid email is required." });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return res
      .status(400)
      .json({ err: "Password must be at least 6 characters long." });
  }

  if (!fullname || typeof fullname !== "string" || fullname.length < 3) {
    return res
      .status(400)
      .json({ err: "Fullname must be at least 3 characters long." });
  }

  const validAccessLevels = ["ADMIN", "EDITOR", "VISITOR"];
  if (!validAccessLevels.includes(access)) {
    return res.status(400).json({
      err: `Access must be valid`,
    });
  }

  next();
};

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ err: "Valid email is required." });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    return res
      .status(400)
      .json({ err: "Password must be at least 6 characters long." });
  }
  next();
};

module.exports = { signupValidator, loginValidator };
