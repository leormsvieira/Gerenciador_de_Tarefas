const categoriesService =  require("../services/categoriesService.js");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categoriesService.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await categoriesService.createCategory({
      name,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await categoriesService.updateCategory(id, {
      name,
    });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await categoriesService.deleteCategory(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
