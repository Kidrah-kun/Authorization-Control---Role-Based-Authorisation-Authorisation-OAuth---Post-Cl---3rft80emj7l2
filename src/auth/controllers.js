const { handleLogin, handleSignup } = require("./services");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await handleLogin({ email, password });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ err: err.message });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password, fullname, access } = req.body;
    const data = await handleSignup({ email, password, fullname, access });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ err: err.message });
  }
};

module.exports = { login, signup };
