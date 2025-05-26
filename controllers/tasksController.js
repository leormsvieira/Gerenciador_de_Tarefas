const tasksService =  require("../services/tasksService.js");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasksService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving task", error });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await tasksService.getTaskById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving task", error });
  }
};

const createTask = async (req, res) => {
  const { title, description, status, due_date, priority } = req.body;
  try {
    const newTask = await tasksService.createTask({
      title,
      description,
      status,
      due_date,
      priority,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, due_date, priority } = req.body;
  try {
    const updatedTask = await tasksService.updateTask(id, {
      title,
      description,
      status,
      due_date,
      priority,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await tasksService.deleteTask(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
