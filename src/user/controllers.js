const { findVisitor, findEditor, findAdmin } = require("./services");

const getVisitor = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await findVisitor(Number(id));
    return res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ data: err.message });
  }
};

const getEditor = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await findEditor(Number(id));
    return res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ data: err.message });
  }
};

const getAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await findAdmin(Number(id));
    return res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ data: err.message });
  }
};

module.exports = { getVisitor, getEditor, getAdmin };
