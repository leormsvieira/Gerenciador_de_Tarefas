const { DataTypes } = require("sequelize");
const Tasks = require("../models/tasksModel.js");

/**
 * Function
 * @returns {Promise<Tasks[]>} A promise that resolves to an array of Type objects
 */
const getAllTasks = async () => {
  let tasks = [];

  await Tasks.findAll()
    .then((result) => {
      tasks = result;
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
    });

  return tasks;
};

/**
 * The function to fetch a type by its ID
 * @param {DataTypes.UUID} id The id of the type to be fetched
 * @returns {Promise<Tasks>} The type object if found, null otherwise
 */
const getTaskById = async (id) => {
  let task = null;

  await Tasks.findByPk(id)
    .then((result) => {
      task = result;
    })
    .catch((error) => {
      console.error("Error fetching task by ID:", error);
    });

  return task;
};

const createTask = async (taskData) => {
  let task = null;

  await Tasks.create(taskData)
    .then((result) => {
      task = result;
    })
    .catch((error) => {
      console.error("Error creating task:", error);
    });

  return task;
};

const updateTask = async (id, taskData) => {
  let task = null;

  await Tasks.update(taskData, { where: { id } })
    .then((result) => {
      task = result;
    })
    .catch((error) => {
      console.error("Error updating task:", error);
    });

  return task;
};

const deleteTask = async (id) => {
  let task = null;

  await Tasks.destroy({ where: { id } })
    .then((result) => {
      task = result;
    })
    .catch((error) => {
      console.error("Error deleting task:", error);
    });

  return task;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
