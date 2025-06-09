const { DataTypes } = require("sequelize");
const Users = require("../models/usersModel.js");

/**
 * Function
 * @returns {Promise<Users[]>} A promise that resolves to an array of Type objects
 */
const getAllUsers = async () => {
  let users = [];

  await Users.findAll()
    .then((result) => {
      users = result;
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  return users;
};

/**
 * The function to fetch a type by its ID
 * @param {DataTypes.UUID} id The id of the type to be fetched
 * @returns {Promise<Users>} The type object if found, null otherwise
 */
const getUserById = async (id) => {
  let user = null;

  await Users.findByPk(id)
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.error("Error fetching user by ID:", error);
    });

  return user;
};

const createUser = async (userData) => {
  let user = null;

  await Users.create(userData)
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });

  return user;
};

const updateUser = async (id, userData) => {
  let user = null;

  await Users.update(userData, { where: { id } })
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });

  return user;
};

const deleteUser = async (id) => {
  let user = null;

  await Users.destroy({ where: { id } })
    .then((result) => {
      user = result;
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
