const express = require("express");
const tasksController = require("../controllers/tasksController.js");

const tasksRouter = express.Router();

// Rota que retorna todos os equipamentos
tasksRouter.get("/", (req, res) => {
  tasksController.getAllTasks(req, res);
});

// Rota que retorna um usuário específico pelo ID
tasksRouter.get("/:id", (req, res) => {
  tasksController.getTaskById(req, res);
});

// Rota que cria um novo usuário
tasksRouter.post("/", (req, res) => {
  tasksController.createTask(req, res);
});

// Rota que atualiza um usuário específico pelo ID
tasksRouter.put("/:id", (req, res) => {
  tasksController.updateTask(req, res);
});

// Rota que deleta um usuário específico pelo ID
tasksRouter.delete("/:id", (req, res) => {
  tasksController.deleteTask(req, res);
});

module.exports = tasksRouter;
