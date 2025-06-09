const { DataTypes } = require("sequelize");
const Categories = require("../models/categoriesModel.js");

/**
 * Function
 * @returns {Promise<Categories[]>} A promise that resolves to an array of Type objects
 */
const getAllCategories = async () => {
  let categories = [];

  await Categories.findAll()
    .then((result) => {
      categories = result;
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

  return categories;
};

/**
 * The function to fetch a type by its ID
 * @param {DataTypes.UUID} id The id of the type to be fetched
 * @returns {Promise<Categories>} The type object if found, null otherwise
 */
const getCategoryById = async (id) => {
  let category = null;

  await Categories.findByPk(id)
    .then((result) => {
      category = result;
    })
    .catch((error) => {
      console.error("Error fetching category by ID:", error);
    });

  return category;
};

const createCategory = async (categoryData) => {
  let category = null;

  await Categories.create(categoryData)
    .then((result) => {
      category = result;
    })
    .catch((error) => {
      console.error("Error creating category:", error);
    });

  return category;
};

const updateCategory = async (id, categoryData) => {
  let category = null;

  await Categories.update(categoryData, { where: { id } })
    .then((result) => {
      category = result;
    })
    .catch((error) => {
      console.error("Error updating category:", error);
    });

  return category;
};

const deleteCategory = async (id) => {
  let category = null;

  await Categories.destroy({ where: { id } })
    .then((result) => {
      category = result;
    })
    .catch((error) => {
      console.error("Error deleting category:", error);
    });

  return category;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
