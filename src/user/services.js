const { prisma } = require("../prisma/service");

const createUser = async ({ fullname, email, password, access }) => {
  const user = await prisma.user.create({
    data: { fullname, email, password, access },
  });
  return user;
};

const findUser = async (id) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};

const findVisitor = async (id) => {
  const users = await prisma.user.findUnique({
    where: { access: "VISITOR", id },
  });
  return users;
};

const findEditor = async (id) => {
  const users = await prisma.user.findUnique({
    where: { access: "EDITOR", id },
  });
  return users;
};

const findAdmin = async (id) => {
  const users = await prisma.user.findUnique({
    where: { access: "ADMIN", id },
  });
  return users;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  findUser,
  findUserByEmail,
  findVisitor,
  findEditor,
  findAdmin,
};
