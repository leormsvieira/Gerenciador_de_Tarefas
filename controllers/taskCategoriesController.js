const taskCategoriesService =  require("../services/taskCategoriesService.js");

const getAllTaskCategories = async (req, res) => {
  try {
    const taskCategories = await taskCategoriesService.getAllTaskCategories();
    res.status(200).json(taskCategories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving task category", error });
  }
};

const getTaskCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const taskCategory = await taskCategoriesService.getTaskCategoryById(id);
    if (!taskCategory) {
      return res.status(404).json({ message: "Task category not found" });
    }
    res.status(200).json(taskCategory);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving task category", error });
  }
};

const createTaskCategory = async (req, res) => {
  const { task_id, category_id } = req.body;
  try {
    const newTaskCategory = await taskCategoriesService.createTaskCategory(task_id, category_id);
    res.status(201).json(newTaskCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating task category", error });
  }
};

const updateTaskCategory = async (req, res) => {
  const { task_id, category_id } = req.body;
  try {
    const updatedTaskCategory = await taskCategoriesService.updateTaskCategory({ task_id, category_id });
    if (!updatedTaskCategory) {
      return res.status(404).json({ message: "Task category not found" });
    }
    res.status(200).json(updatedTaskCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating task category", error });
  }
};

const deleteTaskCategory = async (req, res) => {
  const { task_id, category_id } = req.body;
  try {
    const deletedTaskCategory = await taskCategoriesService.deleteTaskCategory({ task_id, category_id });
    if (!deletedTaskCategory) {
      return res.status(404).json({ message: "Task Category not found" });
    }
    res.status(200).json(deletedTaskCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating task category", error });
  }
};

module.exports = {
  getAllTaskCategories,
  getTaskCategoryById,
  createTaskCategory,
  updateTaskCategory,
  deleteTaskCategory,
};
