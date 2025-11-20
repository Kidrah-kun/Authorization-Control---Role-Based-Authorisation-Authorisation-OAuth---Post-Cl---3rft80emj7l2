const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.header("Authorization");

  const finalToken = token.split(" ")[1];
  const checkJWT = token.split(" ")[0] === "JWT";

  if (token && checkJWT) {
    jwt.verify(finalToken, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        req.verified = false;
        req.msg = "Invalid JWT token";
        return res.status(403).json({ err: "Invalid JWT token" });
      }
      req.user = decode;
      req.verified = true;
      next();
    });
  } else {
    req.verified = false;
    req.msg = "Access denied, no token provided";
    return res.status(403).json({ err: "Access denied, no token provided" });
  }
};

module.exports = { verifyToken };
