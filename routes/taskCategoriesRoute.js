const express = require("express");
const taskCategoriesController = require("../controllers/taskCategoriesController.js");

const taskCategoriesRouter = express.Router();

// Rota que retorna todos os equipamentos
taskCategoriesRouter.get("/", (req, res) => {
  taskCategoriesController.getAllTaskCategories(req, res);
});

// Rota que retorna um usuário específico pelo ID
taskCategoriesRouter.get("/:id", (req, res) => {
  taskCategoriesController.getTaskCategoryById(req, res);
});

// Rota que cria um novo usuário
taskCategoriesRouter.post("/", (req, res) => {
  taskCatgoriesController.createTaskCategory(req, res);
});

// Rota que atualiza um usuário específico pelo ID
taskCategoriesRouter.put("/:id", (req, res) => {
  taskCategoriesController.updateTaskCategory(req, res);
});

// Rota que deleta um usuário específico pelo ID
taskCategoriesRouter.delete("/:id", (req, res) => {
  taskCategoriesController.deleteTaskCategory(req, res);
});

module.exports = taskCategoriesRouter;
