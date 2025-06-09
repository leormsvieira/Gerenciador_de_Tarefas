const { DataTypes } = require("sequelize");
const TaskCategories = require("../models/taskCategoriesModel.js");

/**
 * Function
 * @returns {Promise<TaskCategories[]>} A promise that resolves to an array of Type objects
 */
const getAllTaskCategories = async () => {
  let taskcategories = [];

  await TaskCategories.findAll()
    .then((result) => {
      taskcategories = result;
    })
    .catch((error) => {
      console.error("Error fetching task category:", error);
    });

  return taskcategories;
};

/**
 * The function to fetch a type by its ID
 * @param {DataTypes.UUID} id The id of the type to be fetched
 * @returns {Promise<TaskCategories>} The type object if found, null otherwise
 */
const getTaskCategoryById = async (id) => {
  let taskCategory = null;

  await TaskCategories.findByPk(id)
    .then((result) => {
      taskCategory = result;
    })
    .catch((error) => {
      console.error("Error fetching task category by ID:", error);
    });

  return taskCategory;
};

const createTaskCategory = async (taskCategoryData) => {
  let taskCategory = null;

  await TaskCategories.create(taskCategoryData)
    .then((result) => {
      taskCategory = result;
    })
    .catch((error) => {
      console.error("Error creating task category:", error);
    });

  return taskCategory;
};

const updateTaskCategory = async (id, taskCategoryData) => {
  let taskCategory = null;

  await TaskCategories.update(taskCategoryData, { where: { id } })
    .then((result) => {
      taskCategory = result;
    })
    .catch((error) => {
      console.error("Error updating task category:", error);
    });

  return taskCategory;
};

const deleteTaskCategory = async (id) => {
  let taskCategory = null;

  await TaskCategories.destroy({ where: { id } })
    .then((result) => {
      taskCategory = result;
    })
    .catch((error) => {
      console.error("Error deleting task category:", error);
    });

  return taskCategory;
};

module.exports = {
  getAllTaskCategories,
  getTaskCategoryById,
  createTaskCategory,
  updateTaskCategory,
  deleteTaskCategory,
};
