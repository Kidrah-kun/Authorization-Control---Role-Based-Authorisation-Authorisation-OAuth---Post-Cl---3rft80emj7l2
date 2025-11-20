const getUserValidator = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ err: "Valid id is required." });
  }

  next();
};

module.exports = { getUserValidator };
