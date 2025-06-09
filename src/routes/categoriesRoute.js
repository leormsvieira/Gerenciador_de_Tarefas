const express = require("express");
const categoriesController = require("../controllers/categoriesController.js");

const categoriesRouter = express.Router();

// Rota que retorna todos os equipamentos
categoriesRouter.get("/", (req, res) => {
  categoriesController.getAllCategories(req, res);
});

// Rota que retorna um usuário específico pelo ID
categoriesRouter.get("/:id", (req, res) => {
  categoriesController.getCategoryById(req, res);
});

// Rota que cria um novo usuário
categoriesRouter.post("/", (req, res) => {
  categoriesController.createCategory(req, res);
});

// Rota que atualiza um usuário específico pelo ID
categoriesRouter.put("/:id", (req, res) => {
  categoriesController.updateCategory(req, res);
});

// Rota que deleta um usuário específico pelo ID
categoriesRouter.delete("/:id", (req, res) => {
  categoriesController.deleteCategory(req, res);
});

module.exports = categoriesRouter;
